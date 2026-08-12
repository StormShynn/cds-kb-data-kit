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

> Railway từng miễn phí nhưng giờ tính phí — **BTP Trial là lựa chọn thay thế 0đ phổ biến**. Free tier Cloud Foundry cấp quota tổng (VD 4 GB trial); app 512M (như manifest này) nằm thoải mái trong đó. (256M **không đủ** — app OOM-crash lúc load index MiniSearch cho ~10.6k views, đã kiểm chứng thật trên BTP trial.)

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

`nodejs_buildpack` tự cài dependencies theo `package-lock.json` và chạy lệnh trong `command:` của `manifest.yml`: **`node dist/cds-kb-mcp.cjs`** (bundle đã build sẵn), **không phải** `npm start` (`node src/server.mjs`). Lý do: `src/query-compose.mjs` import một file từ `../../cds_kb_data/scripts/lib/...` — chỉ tồn tại trong monorepo cục bộ (harness), không được đóng gói khi `cf push` (chỉ push thư mục `cds_kb_mcp`). Chạy mã nguồn thô trên BTP sẽ crash với `ERR_MODULE_NOT_FOUND`. Bundle (`npm run build`, chạy trước khi commit) đã inline sẵn phần này qua esbuild nên tự chứa (self-contained). Nếu bạn sửa code trong `src/`, nhớ chạy lại `npm run build` trước khi `cf push`, nếu không BTP vẫn chạy bundle cũ.

CF tự set `PORT` → server chạy HTTP mode, endpoint là `POST https://<app>.cfapps.<region>.hana.ondemand.com/mcp`.

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

### A.7 Sinh key (API key / OAuth secret)

Không có "nơi lấy key" — cả `API_KEY` và `CDS_KB_OAUTH_SECRET` đều là chuỗi bí mật **do bạn tự sinh ra**, server không phát hành key cho ai cả.

```bash
# OAuth secret: BẮT BUỘC ≥ 32 ký tự (server tự chối nếu ngắn hơn — xem oauthEnabled() trong src/oauth.mjs)
node -e "console.log(require('crypto').randomBytes(32).toString('base64url'))"

# API key: bất kỳ chuỗi random nào cũng được, không giới hạn độ dài
node -e "console.log(require('crypto').randomBytes(24).toString('hex'))"
```

Set lên app rồi restage để áp dụng:

```bash
cf set-env cds-kb-mcp CDS_KB_OAUTH_SECRET "<chuỗi vừa sinh>"
cf set-env cds-kb-mcp CDS_KB_PUBLIC_URL "https://<route-thật-cua-app>"   # bắt buộc đi kèm OAuth — dùng làm issuer
cf restage cds-kb-mcp
```

> **Không commit secret vào git.** Repo `cds-kb-data-kit` là **public** — `manifest.yml` chỉ để sẵn dòng comment cho `API_KEY`/`CDS_KB_OAUTH_SECRET` làm gợi ý, giá trị thật luôn set qua `cf set-env` (không nằm trong file được commit). `cf push` sau này **không xoá** các env var đã set rời như vậy, kể cả khi chúng không có trong `manifest.yml`.

Test nhanh flow OAuth 2.1 + PKCE thật (thay `<APP_URL>`):

```bash
VERIFIER="mot-chuoi-tuy-y-toi-thieu-43-ky-tu-theo-chuan-pkce-1234567890"
CHALLENGE=$(node -e "console.log(require('crypto').createHash('sha256').update('$VERIFIER').digest('base64url'))")
LOC=$(curl -s -D - -o /dev/null "<APP_URL>/oauth/authorize?response_type=code&client_id=cds-kb-client&redirect_uri=https://example.com/cb&code_challenge=$CHALLENGE&code_challenge_method=S256" | grep -i '^location:')
CODE=$(echo "$LOC" | grep -oP '(?<=code=)[a-f0-9]+')
curl -s -X POST "<APP_URL>/oauth/token" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  --data-urlencode "grant_type=authorization_code" \
  --data-urlencode "code=$CODE" \
  --data-urlencode "code_verifier=$VERIFIER" \
  --data-urlencode "redirect_uri=https://example.com/cb"
# => {"access_token":"eyJ...","token_type":"Bearer","expires_in":3600,...}  <-- OK
```

> **Lưu ý client thực tế:** flow trên là để *test bằng tay*. Client hỗ trợ remote MCP đời mới (Claude Desktop, Cursor bản mới) tự động chạy được flow OAuth 2.1 này qua `/.well-known/oauth-authorization-server` khi bạn khai `"type": "http", "url": "<APP_URL>/mcp"`. [Unverified] Mình chưa xác nhận được `supergateway` (dùng để bridge cho client chỉ hỗ trợ stdio) có tự chạy được flow OAuth trình duyệt hay không — nếu dùng `supergateway`, cách chắc ăn hơn là dùng `API_KEY` (`-h "Authorization: Bearer <key>"`) thay vì OAuth.

### A.8 Runbook: Tái tạo toàn bộ sau khi BTP Trial hết hạn (~90 ngày)

Trạng thái tại thời điểm viết (2026-08-12) — **các giá trị org/space/route dưới đây sẽ đổi mỗi khi tạo trial mới**, ghi lại chỉ để biết hình dạng cấu hình cần tái lập:

| Mục | Giá trị lúc deploy lần này |
| --- | --- |
| Region | `us10-001` (API: `https://api.cf.us10-001.hana.ondemand.com`) |
| Org / Space | `0f096230trial` / `dev` (tên tự sinh khi tạo trial — **sẽ khác** ở trial mới) |
| App / route | `cds-kb-mcp` → `https://cds-kb-mcp.cfapps.us10-001.hana.ondemand.com` |
| Data source | `CDS_KB_REMOTE` trỏ `cds-kb-data-kit` (public, đã set sẵn trong `manifest.yml`, không cần sửa) |
| Auth | **Không (public)** — server này chia sẻ cho cộng đồng dùng tự do, cố tình không đặt `API_KEY`/`CDS_KB_OAUTH_SECRET`. (Từng bật OAuth 2.1 để test — mục A.7 vẫn còn cách bật lại nếu sau này cần giới hạn truy cập.) |
| Memory | `512M` (đã set sẵn trong `manifest.yml`) |
| Start command | `node dist/cds-kb-mcp.cjs` (đã set sẵn trong `manifest.yml`) |

Khi trial hết hạn, toàn bộ org/space/app trên bị xoá. Các bước tái tạo, theo đúng thứ tự:

1. **Tạo BTP trial mới.** [Unverified] mình không chắc URL đăng ký hiện tại (SAP hay đổi domain) — tìm "SAP BTP free trial account" trên Google thay vì dùng URL cũ, vì URL có thể đã đổi.
2. **Đăng nhập cf CLI với org/space mới** — chạy `cf login -a https://api.cf.<region-moi>.hana.ondemand.com` rồi chọn org/space qua menu tương tác (không dùng `-o`/`-s` cứng vì tên org mới sẽ khác `0f096230trial`).
3. **Không cần sửa gì trong repo** — `manifest.yml` hiện tại (đã commit) đã đúng: data source public, memory 512M, start command chạy bundle. Chỉ cần đảm bảo `dist/cds-kb-mcp.cjs` mới nhất: `cd docs/product/cds_kb_mcp && npm ci && npm run build`.
4. **`cf push`** — app sẽ nhận route mới dạng `cds-kb-mcp.cfapps.<region-moi>.hana.ondemand.com` (region/subdomain đổi theo subaccount mới; nếu hostname `cds-kb-mcp` bị trùng trên domain đó, CF sẽ báo lỗi route — đổi `name:` trong `manifest.yml` nếu vậy).
5. **Verify:** `curl https://<route-moi>/health` phải trả `{"status":"ok","views":...}`, và `POST /mcp` (đúng header `Accept: application/json, text/event-stream`) phải trả `200` **không cần token** — mặc định server này để **public, không auth**, vì mục đích là chia sẻ cho cộng đồng dùng tự do (đây là quyết định có chủ đích, không phải quên bật auth).
6. **Cập nhật URL mới** vào README.md (mục "Client Configuration" — hiện đang trỏ `cds-kb-mcp.cfapps.us10-001.hana.ondemand.com`) và vào bất kỳ client config nào đang trỏ route cũ.
7. **Dọn việc cũ:** nếu còn GitHub PAT nào set thừa cho `CDS_KB_DATA_TOKEN` (không cần nữa vì data source public), `cf unset-env cds-kb-mcp CDS_KB_DATA_TOKEN`.

> Nếu sau này đổi ý muốn giới hạn truy cập (VD server bị lạm dụng), xem lại mục A.7 để bật `API_KEY` hoặc OAuth 2.1 — cả hai đã có sẵn trong code, chỉ cần `cf set-env` + `cf restage`, không cần sửa code.

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
