---
name: I_USERSETTINGSFORCOMPANYCODE
description: "This CDS view provides the prerequisites for answering the following business question: What is the company code user default value for my business user? It can be used as a derivation entity."
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_USERSETTINGSFORCOMPANYCODE')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business question: What is the company code user default value for my business user? It can be used as a derivation entity."
semantic_vi: "I_USERSETTINGSFORCOMPANYCODE — CDS view giao diện dựa trên I_USERSETTINGSFORCOMPANYCODE."
keywords:
  - "usersettingsforcompanycode"
  - "+escape(url)+&quot"
  - "secure"
  - "partitioned&quot"
tags:
  - FI
  - bo:plant
  - component:FI-GL-IS-2CL
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
---
# I_USERSETTINGSFORCOMPANYCODE

**This CDS view provides the prerequisites for answering the following business question: What is the company code user default value for my business user? It can be used as a derivation entity.**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_USERSETTINGSFORCOMPANYCODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `+escape(url)+&quot` |  | |  |  |  |  |
| `secure` |  | |  |  |  |  |
| `partitioned&quot` |  | |  |  |  |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_USERSETTINGSFORCOMPANYCODE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_USERSETTINGSFORCOMPANYCODE')/$value)*

```abap
<html><head><meta http-equiv="cache-control" content="no-cache" /><meta http-equiv="pragma" content="no-cache" /></head><body onload="javascript:var url=window.location.hash;if(url&&(0!==url.length)){document.cookie=&quot;oucfarwtebdodzeeorferoavzzoeyeeaycsefwe_anchor=&quot;+escape(url)+&quot;; path=/; secure; samesite=none; partitioned&quot;}document.forms[0].submit()"><noscript><p><strong>Note:</strong> Since your browser does notsupport JavaScript, you must press the Continuebutton once to</p></noscript><form method="POST" action="https://asymfskhn.accounts.cloud.sap/saml2/idp/sso/asymfskhn.accounts.ondemand.com"><input type="hidden" name="SAMLRequest" value="PHNhbWxwOkF1dGhuUmVxdWVzdCBJRD0iU2ZhMTYzZWJkLWQ5ZWUtMWZlMS1hNTk5LWU4ZWVhOGMyZWY2ZSIgVmVyc2lvbj0iMi4wIiBJc3N1ZUluc3RhbnQ9IjIwMjYtMDgtMTBUMTU6MjI6MjBaIiBEZXN0aW5hdGlvbj0iaHR0cHM6Ly9hc3ltZnNraG4uYWNjb3VudHMuY2xvdWQuc2FwL3NhbWwyL2lkcC9zc28vYXN5bWZza2huLmFjY291bnRzLm9uZGVtYW5kLmNvbSIgRm9yY2VBdXRobj0iZmFsc2UiIElzUGFzc2l2ZT0iZmFsc2UiIEFzc2VydGlvbkNvbnN1bWVyU2VydmljZUluZGV4PSIwIiB4bWxuczpzYW1scD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnByb3RvY29sIj48c2FtbDpJc3N1ZXIgeG1sbnM6c2FtbD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFzc2VydGlvbiI&#x2b;aHR0cHM6Ly9teTQyODEwMC5zNGhhbmEuY2xvdWQuc2FwPC9zYW1sOklzc3Vlcj48ZHM6U2lnbmF0dXJlIHhtbG5zOmRzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjIj48ZHM6U2lnbmVkSW5mbz48ZHM6Q2Fub25pY2FsaXphdGlvbk1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvMTAveG1sLWV4Yy1jMTRuIyIvPjxkczpTaWduYXR1cmVNZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjcnNhLXNoYTEiLz48ZHM6UmVmZXJlbmNlIFVSST0iI1NmYTE2M2ViZC1kOWVlLTFmZTEtYTU5OS1lOGVlYThjMmVmNmUiPjxkczpUcmFuc2Zvcm1zPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjZW52ZWxvcGVkLXNpZ25hdHVyZSIvPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzEwL3htbC1leGMtYzE0biMiLz48L2RzOlRyYW5zZm9ybXM&#x2b;PGRzOkRpZ2VzdE1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyNzaGExIi8&#x2b;PGRzOkRpZ2VzdFZhbHVlPkRmdnI1Q29mSEhUZW0wZ3l0N0RYOGFUUWZrRT08L2RzOkRpZ2VzdFZhbHVlPjwvZHM6UmVmZXJlbmNlPjwvZHM6U2lnbmVkSW5mbz48ZHM6U2lnbmF0dXJlVmFsdWU&#x2b;YXJWdkJTZm0yY2ovTUtpOVczb0diY2gxcWRFMGtTVVVuUzJVVU04NVlEa1BOUmhZYTBwRVByK3FJcGp1VjFJQjZsOElZL0dJV0NqTApoVVRUVTB6UCtydmVZbjhndXhhb295ZFlnbkw4YVVlR3c3dG93R0hJU1VTcEJwb3pBK3pZdDdqanB4ZmR5QjloME1iSnJnZnJNZzdUClI5a1l4clRkSTZCNzJyZmxLdDlobmxVVHJRWHJCUEkvUlVJZnpXQnFCZVRxNktydE8zMFlsckJFdFcyNXlxd2xhdmMyUjlyU2ZNTGoKTjY5cy8rc0JGaExKWlJ5ZXgyQ3dqaGNPeXV1WnprV3k1OUhiTUlkRFdGd2RMa2hsQXNFNFVUT0lxeDFMM3FYbUloeFlTTzF4RzYzVApyYUs3eDhHRFpJdG9PU3B0UW8yMkY0Vkk2ZjZraVZZa09zNUdjMkxiSENpT0NBekhUNE1aSy9FMEVBU2F3ZldrYzB4TUpWd2RkNWdLCnVudDdJMDlHSE1oU1l4enNGdjd6NlJKMm1ZZXk3V2twUUpERDFkMmpDNlVwaFh0cFlIeWF2OVdzK215aDVJK3JLTzdyYkZ1QXZoZnMKUkRmM0YxOGZCL1l0UUlFRXNvSUhBMWx6a0ZYdDRZWHZyQW1EWlNqWGFseTZ4MVVEaVJjWDNoYTQ8L2RzOlNpZ25hdHVyZVZhbHVlPjwvZHM6U2lnbmF0dXJlPjwvc2FtbHA6QXV0aG5SZXF1ZXN0Pg&#x3d;&#x3d;"><input type="hidden" name="RelayState" value="oucfarwtebdodzeeorferoavzzoeyeeaycsefwe"><noscript><input type="submit" value="Continue"></noscript></form></body></html>
```