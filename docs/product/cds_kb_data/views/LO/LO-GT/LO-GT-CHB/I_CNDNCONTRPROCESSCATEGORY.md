---
name: I_CNDNCONTRPROCESSCATEGORY
description: "This CDS view retrieves the condition contract process category which specifies for which purpose a condition contract is used. Examples of possible purposes are Supplier Rebate, Customer Rebate, Commission, Royalties. The delivered values are listed: Values: 1 - Supplier Rebate 2 - Customer Rebate 3 - Commission 4 - Royalties"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPROCESSCATEGORY')/$value
semantic_en: "This CDS view retrieves the condition contract process category which specifies for which purpose a condition contract is used. Examples of possible purposes are Supplier Rebate, Customer Rebate, Commission, Royalties. The delivered values are listed: Values: 1 - Supplier Rebate 2 - Customer Rebate 3 - Commission 4 - Royalties"
semantic_vi: "I_CNDNCONTRPROCESSCATEGORY — CDS view giao diện dựa trên I_CNDNCONTRPROCESSCATEGORY."
keywords:
  - "cndncontrprocesscategory"
  - "+escape(url)+&quot"
  - "secure"
  - "partitioned&quot"
tags:
  - LO
  - bo:businesspartner
  - component:LO-GT-CHB
  - contract
  - customer
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
  - supplier
---
# I_CNDNCONTRPROCESSCATEGORY

**This CDS view retrieves the condition contract process category which specifies for which purpose a condition contract is used. Examples of possible purposes are Supplier Rebate, Customer Rebate, Commission, Royalties. The delivered values are listed: Values: 1 - Supplier Rebate 2 - Customer Rebate 3 - Commission 4 - Royalties**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPROCESSCATEGORY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `+escape(url)+&quot` |  | |  |  |  |  |
| `secure` |  | |  |  |  |  |
| `partitioned&quot` |  | |  |  |  |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPROCESSCATEGORY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPROCESSCATEGORY')/$value)*

```abap
<html><head><meta http-equiv="cache-control" content="no-cache" /><meta http-equiv="pragma" content="no-cache" /></head><body onload="javascript:var url=window.location.hash;if(url&&(0!==url.length)){document.cookie=&quot;oucfarwtebdodzeeorferoavzzocuuuveexsfwe_anchor=&quot;+escape(url)+&quot;; path=/; secure; samesite=none; partitioned&quot;}document.forms[0].submit()"><noscript><p><strong>Note:</strong> Since your browser does notsupport JavaScript, you must press the Continuebutton once to</p></noscript><form method="POST" action="https://asymfskhn.accounts.cloud.sap/saml2/idp/sso/asymfskhn.accounts.ondemand.com"><input type="hidden" name="SAMLRequest" value="PHNhbWxwOkF1dGhuUmVxdWVzdCBJRD0iU2ZhMTYzZWJkLWQ5ZWUtMWZlMS1hNTk5LWM0NDQ1ZWU3MmY2ZSIgVmVyc2lvbj0iMi4wIiBJc3N1ZUluc3RhbnQ9IjIwMjYtMDgtMTBUMTU6MTQ6MDlaIiBEZXN0aW5hdGlvbj0iaHR0cHM6Ly9hc3ltZnNraG4uYWNjb3VudHMuY2xvdWQuc2FwL3NhbWwyL2lkcC9zc28vYXN5bWZza2huLmFjY291bnRzLm9uZGVtYW5kLmNvbSIgRm9yY2VBdXRobj0iZmFsc2UiIElzUGFzc2l2ZT0iZmFsc2UiIEFzc2VydGlvbkNvbnN1bWVyU2VydmljZUluZGV4PSIwIiB4bWxuczpzYW1scD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnByb3RvY29sIj48c2FtbDpJc3N1ZXIgeG1sbnM6c2FtbD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFzc2VydGlvbiI&#x2b;aHR0cHM6Ly9teTQyODEwMC5zNGhhbmEuY2xvdWQuc2FwPC9zYW1sOklzc3Vlcj48ZHM6U2lnbmF0dXJlIHhtbG5zOmRzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjIj48ZHM6U2lnbmVkSW5mbz48ZHM6Q2Fub25pY2FsaXphdGlvbk1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvMTAveG1sLWV4Yy1jMTRuIyIvPjxkczpTaWduYXR1cmVNZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjcnNhLXNoYTEiLz48ZHM6UmVmZXJlbmNlIFVSST0iI1NmYTE2M2ViZC1kOWVlLTFmZTEtYTU5OS1jNDQ0NWVlNzJmNmUiPjxkczpUcmFuc2Zvcm1zPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjZW52ZWxvcGVkLXNpZ25hdHVyZSIvPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzEwL3htbC1leGMtYzE0biMiLz48L2RzOlRyYW5zZm9ybXM&#x2b;PGRzOkRpZ2VzdE1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyNzaGExIi8&#x2b;PGRzOkRpZ2VzdFZhbHVlPlR4MlVLWkNqcExaVFNLQmt4ZDRUWWlTNm9PUT08L2RzOkRpZ2VzdFZhbHVlPjwvZHM6UmVmZXJlbmNlPjwvZHM6U2lnbmVkSW5mbz48ZHM6U2lnbmF0dXJlVmFsdWU&#x2b;bzZ3YnFDaERUVmRaYnFaTEFHNkVBUGVWLzlpWVhJOXF6RTdVYWhPSWVQQmowclJNbDJpcEowUHJvaDlsNmk0VHF1T0RDVGdiamhOaQpGeDY2U1FnWldrOVZRQXVteVAwM3hLVjBjWDhldHNlQVZsN1RYZTdDMk83cEFIb3pabVhPQTRCRHJvU3RTd2Q2WXhQMGw1WjlCUFFrCm5mRFdOZUdVTW52L3VEdUp5Sng3WUxXWXM3OU1kcXMzWmJscWJ5Y2NhZzQ4Nzdqa2F6dG1aNjlJaFUvdU5SeEp1UDBVMkJhbHVDelcKK3YyODBGNXc0VEl2MnVEWGw0OVphUHhtUFVHOHBUbG83cGFBVUFkTXQ0WVRTMXFiV0ZKYk4yN1JhdU9UU1FFN0R6a3VVSmZwU2RvcApXbDMrMmNPS3RXQTI3K0Z3eWo5MEM2QXZMSlZaRlUzYjZFbnp4bWdCS2NJK0ZGdHd0M0ZBTjIxd3ljSmFsR1psTDdGOTFpSEVhRzdUCnRzQUl0SWM3ZnQ2SzUvVFNvK3dtd2VpdjlKVGN4UGg3ME8zaWFTUEhlNFFJcUMySExkQ2xiY29od1ZwMGRCVHk4cjNiNlNCNkZpME8KaUI4OFBVem1DODlvaVQwMWNPUWh1eUxaU3pCcElVQUcxb3pQSXVwZ1k1ZkkreVZhZVd6TmdLY2s8L2RzOlNpZ25hdHVyZVZhbHVlPjwvZHM6U2lnbmF0dXJlPjwvc2FtbHA6QXV0aG5SZXF1ZXN0Pg&#x3d;&#x3d;"><input type="hidden" name="RelayState" value="oucfarwtebdodzeeorferoavzzocuuuveexsfwe"><noscript><input type="submit" value="Continue"></noscript></form></body></html>
```