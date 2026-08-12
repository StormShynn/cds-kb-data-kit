# Hướng Dẫn Triển Khai MCP Server Lên SAP BTP Cloud Foundry (Streamable HTTP)

Tài liệu này đóng gói toàn bộ quy trình, kiến trúc và mã nguồn mẫu để bạn có thể chuyển đổi **bất kỳ MCP Server (stdio) nào** thành một dịch vụ HTTP chạy trên SAP BTP Cloud Foundry theo giao thức **Streamable HTTP** (spec MCP `2026-07-28`, SDK v2). Cách tiếp cận này giúp bạn có một endpoint duy nhất trên Cloud mà mọi thành viên trong team đều có thể kết nối dễ dàng.

> **Lưu ý chuyển đổi từ SSE:** SDK MCP v2 (`@modelcontextprotocol/server` + `@modelcontextprotocol/express` 2.x) đã **bỏ transport SSE legacy**. Endpoint duy nhất là `POST /mcp` (Streamable HTTP, stateless). Client dùng `supergateway` v3 với cờ `--streamableHttp` thay vì `--sse`.

---

## ⭐ Phần A: Deploy chính repo cds-kb-mcp lên BTP (dùng `manifest.yml` có sẵn)

Repo này **đã có sẵn `manifest.yml` cấu hình sẵn** cho BTP Cloud Foundry — bạn không cần viết wrapper gì cả, chỉ cần push.

### A.0 Tài khoản BTP (free)

| Loại | Phí | Thời hạn | Ghi chú |
| --- | --- | --- | --- |
| **BTP Trial** | 0đ, không cần thẻ | ~90 ngày | Đơn giản nhất để thử; hết hạn thì tạo lại |
| **BTP Free Tier** (Pay-As-You-Go / CPEA) | 0đ nếu dùng đúng free tier services | Vĩnh viễn | Cần doanh nghiệp/PAYG; chỉ tính phí khi vượt quota |

> Railway từng miễn phí nhưng giờ tính phí — **BTP Trial là lựa chọn thay thế 0đ phổ biến**. Free tier Cloud Foundry cấp quota tổng (VD 4 GB trial); app nhỏ 256M (như manifest này) nằm thoải mái trong đó.

### A.1 Cài đặt cf CLI + đăng nhập

```bash
# Windows: winget install CloudFoundry.Cli  |  macOS: brew install cloudfoundry/tap/cf-cli
cf --version

# Lấy API endpoint của subaccount từ BTP Cockpit (VD ap21, eu10, us10...)
cf api https://api.cf.ap21.hana.ondemand.com
cf login        # email + password (SSO passcode nếu được yêu cầu)
```

### A.2 Set data source

App trên BTP **không có thư mục `cds_kb_data` bên cạnh** nên phải nạp data từ GitHub remote. `CDS_KB_REMOTE` trong `manifest.yml` đã trỏ sẵn vào chính repo của project này:

```text
https://raw.githubusercontent.com/StormShynn/cds-kb-data-kit/main/docs/product/cds_kb_data
```

Repo `StormShynn/cds-kb-data-kit` là **public**, nên **không cần tạo GitHub PAT** — `raw.githubusercontent.com` đọc thẳng được, không cần xác thực gì cả.

Kiểm tra nhanh (tuỳ chọn) trước khi push:

```bash
curl -s https://raw.githubusercontent.com/StormShynn/cds-kb-data-kit/main/docs/product/cds_kb_data/index/version.json
# => {"schemaVersion":1,"viewCount":10618,...}   <-- OK
```

> Repo `StormShynn/cds-kb-data` (cũ, private, không còn cập nhật) trước đây cần fine-grained PAT (`CDS_KB_DATA_TOKEN`, quyền Contents:Read-only). Dòng `CDS_KB_DATA_TOKEN` trong `manifest.yml` được để comment sẵn — chỉ cần bật lại nếu sau này `cds-kb-data-kit` chuyển sang private.

### A.3 Push (từ thư mục `docs/product/cds_kb_mcp`)

```bash
cd docs/product/cds_kb_mcp
npm ci
cf push
```

`nodejs_buildpack` tự cài dependencies theo `package-lock.json` và chạy `npm start` (`node src/server.mjs`). CF tự set `PORT` → server chạy HTTP mode, endpoint là `POST https://<app>.cfapps.<region>.hana.ondemand.com/mcp`.

### A.4 Xác minh + cấu hình client

```bash
curl https://<app>.cfapps.ap21.hana.ondemand.com/health
# => {"status":"ok","views":10618,...}

# Streamable HTTP (clients hỗ trợ remote MCP):
#   url: https://<app>.cfapps.ap21.hana.ondemand.com/mcp

# stdio-only clients qua supergateway:
#   npx -y supergateway@3.4.3 --streamableHttp https://<app>.cfapps.ap21.hana.ondemand.com/mcp
```

### A.5 Bảo mật (khuyến nghị)

Endpoint BTP là công khai → set ít nhất một trong hai:

```bash
cf set-env cds-kb-mcp API_KEY "secret-123"                        # API key đơn giản
cf set-env cds-kb-mcp CDS_KB_OAUTH_SECRET "a-32-char-min-secret-oauth-2-1"  # OAuth 2.1 + PKCE
cf set-env cds-kb-mcp CDS_KB_PUBLIC_URL "https://<app>.cfapps.ap21.hana.ondemand.com"  # issuer cho OAuth
cf restage cds-kb-mcp   # restart để áp dụng env
```

### A.6 Dừng app khi không dùng (tiết kiệm quota)

```bash
cf stop cds-kb-mcp     # bật lại: cf start cds-kb-mcp
```

---

## Kiến Trúc Hệ Thống

```mermaid
graph LR
    A[Client IDE\n(Claude/Cursor/Gemini)] -->|stdio| B(npx supergateway)
    B -->|HTTP POST /mcp| C[BTP Cloud Foundry\nNode.js Express App]
    C -->|McpHttpHandler| D[MCP Server Logic]
```

1. **Client (IDE)** giao tiếp qua `stdio` với bộ proxy nội bộ là `supergateway`.
2. **Supergateway** kết nối lên Cloud Foundry qua Streamable HTTP (`POST /mcp`).
3. **Ứng dụng trên BTP Cloud Foundry** đóng vai trò cầu nối, nhận JSON-RPC và đưa vào `McpServer` của bạn.

> [!IMPORTANT]
> **Khác biệt với SDK v1:** Trong SDK v2, bạn **không cần** tạo một `McpServer` riêng cho từng kết nối như khi dùng `SSEServerTransport`. Streamable HTTP (stateless) mount **một** server qua middleware của `@modelcontextprotocol/express` — Express tự lo session/streaming. Không còn `SSEServerTransport`, không còn `/sse` + `/messages`.

---

## Bước 1: Cập Nhật Mã Nguồn Ứng Dụng (Node.js)

Dưới đây là đoạn mã "Wrapper chuẩn" bằng Express.js bạn có thể chèn vào bất kỳ ứng dụng MCP nào để biến nó thành Streamable HTTP Server.

Yêu cầu cài đặt thư viện (Node ≥ 20):
```bash
npm install express @modelcontextprotocol/server@2 @modelcontextprotocol/express@2 @modelcontextprotocol/node@2 zod
```

Tạo file `server.mjs` (hoặc chèn vào file hiện tại):

```javascript
import express from 'express';
import { McpServer } from '@modelcontextprotocol/server';
import { createMcpExpressApp } from '@modelcontextprotocol/express';

// Hàm đóng gói logic tạo MCP Server (dùng chung cho mọi request)
function createMcpServer() {
  const server = new McpServer({
    name: 'my-custom-mcp',
    version: '1.0.0',
    capabilities: { tools: {} },
  });

  // Đăng ký các công cụ ở đây...
  server.registerTool(
    'ping',
    { title: 'Ping', inputSchema: {} },
    async () => ({ content: [{ type: 'text', text: 'pong' }] })
  );

  return server;
}

const app = express();
const mcpServer = createMcpServer();

// Mount Streamable HTTP lên Express — SDK tự xử lý stateless session/streaming
app.use(createMcpExpressApp(mcpServer));

// Health check
app.get('/health', (req, res) => res.json({ status: 'ok' }));

// Khởi động Express
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`[MCP] Server listening on port ${port} (Streamable HTTP at /mcp).`);
});
```

> Nếu bạn muốn tự quản lý transport chi tiết hơn (mount chính xác route `/mcp`, log, auth) hãy dùng `McpHttpHandler` từ `@modelcontextprotocol/server` + `toNodeHandler` từ `@modelcontextprotocol/node` — xem `src/server.mjs` của cds-kb-mcp để tham khảo cách làm đầy đủ (auth + rate limit + metrics).

---

## Bước 2: Cấu Hình Triển Khai Lên BTP (manifest.yml)

Tạo file `manifest.yml` tại thư mục gốc của project:

```yaml
---
applications:
  - name: my-custom-mcp          # Thay tên app của bạn
    memory: 256M                 # Điều chỉnh RAM tuỳ vào app (256M thân thiện free tier)
    default-route: true
    buildpacks:
      - nodejs_buildpack
    command: npm start           # Hoặc 'node server.mjs'
```

Đẩy code lên CF:
```bash
cf push
```
Sau khi hoàn tất, lấy URL của app (VD: `https://my-custom-mcp.cfapps.ap21.hana.ondemand.com`).

---

## Yêu Cầu Đối Với Thiết Bị Client

Trước khi tiến hành cấu hình, hãy đảm bảo máy trạm cục bộ của bạn đáp ứng các điều kiện sau:

1. **Node.js**: Máy phải được cài đặt **Node.js phiên bản tối thiểu v20 trở lên** (Kiểm tra bằng lệnh `node -v`).
2. **Kết nối mạng**:
   * Có quyền truy cập HTTPS ra ngoài đến endpoint BTP: `https://my-custom-mcp.cfapps.ap21.hana.ondemand.com`
   * Có quyền kết nối tới `registry.npmjs.org` để tải gói `supergateway`. Nếu máy trạm nằm trong mạng nội bộ công ty (Corporate Firewall/VPN/Proxy) chặn tải npm, bạn **bắt buộc** phải sử dụng phương pháp cài đặt toàn cục (**Cách 2** dưới đây).
3. **IDE Tương thích**: Cursor, Claude Desktop, VS Code (kèm extension MCP), Gemini IDE,...

---

## Bước 3: Cấu Hình Cho Phía Client (Các IDE)

Tại phía máy trạm (của bạn hoặc người dùng khác), **không cần cài đặt clone repo**. Để đảm bảo **hoạt động ổn định 100% trên mọi thiết bị** (tránh lỗi xung đột phiên bản Node.js cũ v18/v20 hoặc lỗi kết nối mạng của `npx`), khuyến nghị cấu hình theo một trong hai cách dưới đây:

### Cách 1: Khóa cứng phiên bản bằng npx (Khuyên dùng - Đơn giản nhất)
Sử dụng `supergateway@3.x` với cờ `--streamableHttp` để kết nối tới endpoint Streamable HTTP.

Cấu hình tệp `mcp_config.json`, `claude_desktop_config.json`, v.v...:

```json
{
  "mcpServers": {
    "my-remote-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "supergateway@3.4.3",
        "--streamableHttp",
        "https://my-custom-mcp.cfapps.ap21.hana.ondemand.com/mcp"
      ]
    }
  }
}
```

### Cách 2: Cài đặt toàn cục (Cực kỳ ổn định & Tránh lỗi Proxy/Firewall)
Nếu máy bạn nằm sau mạng doanh nghiệp (Corporate Proxy, VPN) chặn tải động `npx`:

1. Cài đặt `supergateway` lên máy một lần duy nhất:
   ```bash
   npm install -g supergateway@3.4.3
   ```
2. Cấu hình IDE sử dụng trực tiếp:
   ```json
   {
     "mcpServers": {
       "my-remote-mcp": {
         "command": "supergateway",
         "args": [
           "--streamableHttp",
           "https://my-custom-mcp.cfapps.ap21.hana.ondemand.com/mcp"
         ]
       }
     }
   }
   ```
   *(Lưu ý trên Windows: Nếu IDE không tìm thấy lệnh `supergateway`, hãy chỉ định đường dẫn tuyệt đối hoặc sử dụng `supergateway.cmd`).*

---

## Mở Rộng: Tích Hợp Bảo Mật (Xác Thực Bằng API Key)

BTP Cloud Foundry phơi bày endpoint công khai ra internet. Để tránh người lạ sử dụng MCP của bạn, hãy thêm Middleware kiểm tra API Key đơn giản vào trước các Route của Express:

1. **Trên BTP**, set biến môi trường: `cf set-env my-custom-mcp API_KEY "my-secret-key-123"`
2. **Trong code Express**, chèn middleware trước `app.get` và `app.post`:
   ```javascript
   const API_KEY = process.env.API_KEY;
   app.use((req, res, next) => {
     if (!API_KEY) return next();
     if (req.headers.authorization !== `Bearer ${API_KEY}`) {
       return res.status(401).send('Unauthorized');
     }
     next();
   });
   ```
3. **Bên Client config**, thêm Header vào `supergateway`:
   ```json
   "args": [
     "-y", "supergateway@3.4.3", 
     "--streamableHttp", "https://my-custom-mcp.../mcp",
     "-h", "Authorization: Bearer my-secret-key-123"
   ]
   ```
