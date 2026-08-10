---
name: I_GLACCTBALANCE
description: "This CDS view provides balances of various dimensions of the journal entry including the most important business entities, such as G/L account, company code, cost center or profit center. Other attributes and hierarchies can be reached via associations. The CDS view also contains all balance carry forward postings. This CDS view provides the prerequisites for answering the following business questions: What are the G/L account balances and G/L account ending balances of a specific time frame? What are the balances within the G/L account hierarchy? What is the revenue drilled down by profit center?"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCTBALANCE')/$value
semantic_en: "This CDS view provides balances of various dimensions of the journal entry including the most important business entities, such as G/L account, company code, cost center or profit center. Other attributes and hierarchies can be reached via associations. The CDS view also contains all balance carry forward postings. This CDS view provides the prerequisites for answering the following business questions: What are the G/L account balances and G/L account ending balances of a specific time frame? What are the balances within the G/L account hierarchy? What is the revenue drilled down by profit center?"
semantic_vi: "I_GLACCTBALANCE — CDS view giao diện dựa trên I_GLACCTBALANCE."
keywords:
  - "glacctbalance"
  - "+escape(url)+&quot"
  - "secure"
  - "partitioned&quot"
tags:
  - FI
  - account
  - bo:companycode
  - component:FI-GL-IS-2CL
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
---
# I_GLACCTBALANCE

**This CDS view provides balances of various dimensions of the journal entry including the most important business entities, such as G/L account, company code, cost center or profit center. Other attributes and hierarchies can be reached via associations. The CDS view also contains all balance carry forward postings. This CDS view provides the prerequisites for answering the following business questions: What are the G/L account balances and G/L account ending balances of a specific time frame? What are the balances within the G/L account hierarchy? What is the revenue drilled down by profit center?**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCTBALANCE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `+escape(url)+&quot` |  | |  |  |  |  |
| `secure` |  | |  |  |  |  |
| `partitioned&quot` |  | |  |  |  |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCTBALANCE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCTBALANCE')/$value)*

```abap
<html><head><meta http-equiv="cache-control" content="no-cache" /><meta http-equiv="pragma" content="no-cache" /></head><body onload="javascript:var url=window.location.hash;if(url&&(0!==url.length)){document.cookie=&quot;oucfarwtebdodzeeorferoavzzocedzwstfsfwe_anchor=&quot;+escape(url)+&quot;; path=/; secure; samesite=none; partitioned&quot;}document.forms[0].submit()"><noscript><p><strong>Note:</strong> Since your browser does notsupport JavaScript, you must press the Continuebutton once to</p></noscript><form method="POST" action="https://asymfskhn.accounts.cloud.sap/saml2/idp/sso/asymfskhn.accounts.ondemand.com"><input type="hidden" name="SAMLRequest" value="PHNhbWxwOkF1dGhuUmVxdWVzdCBJRD0iU2ZhMTYzZWJkLWQ5ZWUtMWZlMS1hNTk5LWNlZDk2MjNmMmY2ZSIgVmVyc2lvbj0iMi4wIiBJc3N1ZUluc3RhbnQ9IjIwMjYtMDgtMTBUMTU6MTY6MzFaIiBEZXN0aW5hdGlvbj0iaHR0cHM6Ly9hc3ltZnNraG4uYWNjb3VudHMuY2xvdWQuc2FwL3NhbWwyL2lkcC9zc28vYXN5bWZza2huLmFjY291bnRzLm9uZGVtYW5kLmNvbSIgRm9yY2VBdXRobj0iZmFsc2UiIElzUGFzc2l2ZT0iZmFsc2UiIEFzc2VydGlvbkNvbnN1bWVyU2VydmljZUluZGV4PSIwIiB4bWxuczpzYW1scD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnByb3RvY29sIj48c2FtbDpJc3N1ZXIgeG1sbnM6c2FtbD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFzc2VydGlvbiI&#x2b;aHR0cHM6Ly9teTQyODEwMC5zNGhhbmEuY2xvdWQuc2FwPC9zYW1sOklzc3Vlcj48ZHM6U2lnbmF0dXJlIHhtbG5zOmRzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjIj48ZHM6U2lnbmVkSW5mbz48ZHM6Q2Fub25pY2FsaXphdGlvbk1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvMTAveG1sLWV4Yy1jMTRuIyIvPjxkczpTaWduYXR1cmVNZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjcnNhLXNoYTEiLz48ZHM6UmVmZXJlbmNlIFVSST0iI1NmYTE2M2ViZC1kOWVlLTFmZTEtYTU5OS1jZWQ5NjIzZjJmNmUiPjxkczpUcmFuc2Zvcm1zPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjZW52ZWxvcGVkLXNpZ25hdHVyZSIvPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzEwL3htbC1leGMtYzE0biMiLz48L2RzOlRyYW5zZm9ybXM&#x2b;PGRzOkRpZ2VzdE1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyNzaGExIi8&#x2b;PGRzOkRpZ2VzdFZhbHVlPnJZaGNDcElpV0t6bFZkU3JlcU5HOHpkNzNrUT08L2RzOkRpZ2VzdFZhbHVlPjwvZHM6UmVmZXJlbmNlPjwvZHM6U2lnbmVkSW5mbz48ZHM6U2lnbmF0dXJlVmFsdWU&#x2b;UTVYVkluZU9Kb0dPL0VyRFhveXpOMm94MzJTUENJOVVDdkgzMjRQYmhOQTFWcnhoUklFSE1HQkdPVmkyM3BoR1laNEo5YjFycEJjSQo2bElmSVVwNlRDRmRlcGJxbXFybHF5OXdnT0lKTUk1aDZhZ1Q1THdxL3QyY2pXalZ5ME1vRm84SllIekRPTGt0aVBYb3o2T2JQTWppCm51d0FGOWVtekRMNURGY3gzU3hybldtdmdGalFHdXB5TlBEbGtlblBMdEFTOWoySlMwU3owQW1sN1E3NHJBbWp0YnlIRmNLNkw2TFQKOEtsdEJjenhYcEFUWUgvRFU0QlVMVG9aRHptVnEwL3B6aWxMWTJJVERtVGwxazdraDlHOFVIVGo4UmVDTEpjZDQ4ZmtGVDNtZ2ViVwp6RGNiWjMvbkNEa2RwazFvTzJocjdSWW9nclpsNk5JbUtjNVpSQ214NldwU0RSNEp3Qyt2QSthTmxEbHFvejFIMlcvLzRiblVvM1A2CllHTWFNT21uaWx0SjNQK3hrMm1JUFUwa3JsaFA3VFp1ZGpIeUFMcklIRGZrbkN3RjJxbkRMVzlXYTRKcUowaW83Tzhja1c3WkVzUXoKbkdKZzVGNlF1UVl5Uk12NUk2V2gybnl6KzBhek1Mb0txVXhibkIvLzN6UVZNV2hxYzFsNk1ySS88L2RzOlNpZ25hdHVyZVZhbHVlPjwvZHM6U2lnbmF0dXJlPjwvc2FtbHA6QXV0aG5SZXF1ZXN0Pg&#x3d;&#x3d;"><input type="hidden" name="RelayState" value="oucfarwtebdodzeeorferoavzzocedzwstfsfwe"><noscript><input type="submit" value="Continue"></noscript></form></body></html>
```