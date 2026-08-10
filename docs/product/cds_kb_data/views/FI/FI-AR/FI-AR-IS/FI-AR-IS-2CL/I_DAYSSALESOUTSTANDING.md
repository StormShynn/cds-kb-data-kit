---
name: I_DAYSSALESOUTSTANDING
description: "This CDS view provides you with an insight into the average collection period of your company. It provides the number of days it takes on average for your company to collect receivables. The result aggregates the aggregates the receivables and revenue amount per account (company code and customer) and month. This CDS view provides you with the information that you need to answer the following business questions: How long does it take to collect receivables? Are credit terms extended too lenient to your customers?"
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DAYSSALESOUTSTANDING')/$value
semantic_en: "This CDS view provides you with an insight into the average collection period of your company. It provides the number of days it takes on average for your company to collect receivables. The result aggregates the aggregates the receivables and revenue amount per account (company code and customer) and month. This CDS view provides you with the information that you need to answer the following business questions: How long does it take to collect receivables? Are credit terms extended too lenient to your customers?"
semantic_vi: "I_DAYSSALESOUTSTANDING — CDS view giao diện dựa trên I_DAYSSALESOUTSTANDING."
keywords:
  - "dayssalesoutstanding"
  - "+escape(url)+&quot"
  - "secure"
  - "partitioned&quot"
tags:
  - FI
  - account
  - bo:businesspartner
  - component:FI-AR-IS-2CL
  - customer
  - FI-AR
  - FI-AR-IS
  - FI-AR-IS-2CL
  - interface-view
  - lob:finance
  - bo:salesorder
---
# I_DAYSSALESOUTSTANDING

**This CDS view provides you with an insight into the average collection period of your company. It provides the number of days it takes on average for your company to collect receivables. The result aggregates the aggregates the receivables and revenue amount per account (company code and customer) and month. This CDS view provides you with the information that you need to answer the following business questions: How long does it take to collect receivables? Are credit terms extended too lenient to your customers?**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DAYSSALESOUTSTANDING')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `+escape(url)+&quot` |  | |  |  |  |  |
| `secure` |  | |  |  |  |  |
| `partitioned&quot` |  | |  |  |  |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DAYSSALESOUTSTANDING')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DAYSSALESOUTSTANDING')/$value)*

```abap
<html><head><meta http-equiv="cache-control" content="no-cache" /><meta http-equiv="pragma" content="no-cache" /></head><body onload="javascript:var url=window.location.hash;if(url&&(0!==url.length)){document.cookie=&quot;oucfarwtebdodzeeorferoavzzocztsdywwsfwe_anchor=&quot;+escape(url)+&quot;; path=/; secure; samesite=none; partitioned&quot;}document.forms[0].submit()"><noscript><p><strong>Note:</strong> Since your browser does notsupport JavaScript, you must press the Continuebutton once to</p></noscript><form method="POST" action="https://asymfskhn.accounts.cloud.sap/saml2/idp/sso/asymfskhn.accounts.ondemand.com"><input type="hidden" name="SAMLRequest" value="PHNhbWxwOkF1dGhuUmVxdWVzdCBJRD0iU2ZhMTYzZWJkLWQ5ZWUtMWZlMS1hNTk5LWM5MzJkODY2MmY2ZSIgVmVyc2lvbj0iMi4wIiBJc3N1ZUluc3RhbnQ9IjIwMjYtMDgtMTBUMTU6MTU6MTVaIiBEZXN0aW5hdGlvbj0iaHR0cHM6Ly9hc3ltZnNraG4uYWNjb3VudHMuY2xvdWQuc2FwL3NhbWwyL2lkcC9zc28vYXN5bWZza2huLmFjY291bnRzLm9uZGVtYW5kLmNvbSIgRm9yY2VBdXRobj0iZmFsc2UiIElzUGFzc2l2ZT0iZmFsc2UiIEFzc2VydGlvbkNvbnN1bWVyU2VydmljZUluZGV4PSIwIiB4bWxuczpzYW1scD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnByb3RvY29sIj48c2FtbDpJc3N1ZXIgeG1sbnM6c2FtbD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFzc2VydGlvbiI&#x2b;aHR0cHM6Ly9teTQyODEwMC5zNGhhbmEuY2xvdWQuc2FwPC9zYW1sOklzc3Vlcj48ZHM6U2lnbmF0dXJlIHhtbG5zOmRzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjIj48ZHM6U2lnbmVkSW5mbz48ZHM6Q2Fub25pY2FsaXphdGlvbk1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvMTAveG1sLWV4Yy1jMTRuIyIvPjxkczpTaWduYXR1cmVNZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjcnNhLXNoYTEiLz48ZHM6UmVmZXJlbmNlIFVSST0iI1NmYTE2M2ViZC1kOWVlLTFmZTEtYTU5OS1jOTMyZDg2NjJmNmUiPjxkczpUcmFuc2Zvcm1zPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjZW52ZWxvcGVkLXNpZ25hdHVyZSIvPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzEwL3htbC1leGMtYzE0biMiLz48L2RzOlRyYW5zZm9ybXM&#x2b;PGRzOkRpZ2VzdE1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyNzaGExIi8&#x2b;PGRzOkRpZ2VzdFZhbHVlPkhDcmNENUFPUnhCMGNvSjBFYURGZXVCLzhRZz08L2RzOkRpZ2VzdFZhbHVlPjwvZHM6UmVmZXJlbmNlPjwvZHM6U2lnbmVkSW5mbz48ZHM6U2lnbmF0dXJlVmFsdWU&#x2b;aFBHV1BBZ29wSTNXVTJJc2c5KzB2MCtudmZobUtGNzlmTHNFOERZaG84ZjdoMEZRZUdpTjZvWFlhaUN4b0NRK3htQlk5NnhnYXoxOQoxY1VnVTVaMnNqakZSV0RMOS9YV3dzS1JSNnA1Z1pwUzU2K0FmTkxlaWtaU3lCMkxIckdFZWNXa3dlZm1FbG4xOWVvcW5hNTJaYWxyClBBekdhVmFxUEJncjZ3SCtVbFMrc1BIRFBGRk1VOVJqN0x5R2pDYXU3ZUExWStlTm1uL2dyNXl1WEVEcFMyZ3RNL2MrNzlNaFE2OFAKaUxneHhmZzlJY1B0dm43YVR1VCtJSXZKNm9EOTVDSnVRWDhrelFyUU14QitJMENSbktKZU9kN210YVpneGEwSGJFS0VzWWZWTEVBRApScTFDbGlJWFFpU1NDV3pqU0hoTDlFeEJkVUZzVVJvcENXSkhsMmpLM21qU2tTajFXaGplcWFiTWVQR0pTUW5yY0l0WXhvSE9DWFdjCktsNTFOdnpad3I4SEpSOTQ1N09BNEFUSE1SQktac0dQUDBVUzliWjVzM1ZXS21RVHd0YzMrdDA2WldVT0FDaVZndXhwMEdITnRKaFYKTjVqN3ViS21oYkxZVW0xSVBEUHIzTERWSm1wU21FcUdXczA3VHJUTWR2RVV2b0o4SnRNU293eTY8L2RzOlNpZ25hdHVyZVZhbHVlPjwvZHM6U2lnbmF0dXJlPjwvc2FtbHA6QXV0aG5SZXF1ZXN0Pg&#x3d;&#x3d;"><input type="hidden" name="RelayState" value="oucfarwtebdodzeeorferoavzzocztsdywwsfwe"><noscript><input type="submit" value="Continue"></noscript></form></body></html>
```