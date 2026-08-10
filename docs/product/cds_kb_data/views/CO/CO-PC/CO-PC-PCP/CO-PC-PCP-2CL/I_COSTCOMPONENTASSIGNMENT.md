---
name: I_COSTCOMPONENTASSIGNMENT
description: "This CDS view provides general information about cost component assignment. It includes information about chart of accounts, cost component structure, from cost element, cost origin group, variance results analysis category, to cost element and cost component. This CDS view provides the prerequisites for answering the following business questions: Which cost elements are assigned to certain cost component structure? Which cost elements are assigned to certain cost component?"
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTCOMPONENTASSIGNMENT')/$value
semantic_en: "This CDS view provides general information about cost component assignment. It includes information about chart of accounts, cost component structure, from cost element, cost origin group, variance results analysis category, to cost element and cost component. This CDS view provides the prerequisites for answering the following business questions: Which cost elements are assigned to certain cost component structure? Which cost elements are assigned to certain cost component?"
semantic_vi: "I_COSTCOMPONENTASSIGNMENT — CDS view giao diện dựa trên I_COSTCOMPONENTASSIGNMENT."
keywords:
  - "costcomponentassignment"
  - "+escape(url)+&quot"
  - "secure"
  - "partitioned&quot"
tags:
  - CO
  - account
  - bo:plant
  - CO-PC
  - CO-PC-PCP
  - CO-PC-PCP-2CL
  - component:CO-PC-PCP-2CL
  - interface-view
  - lob:controlling
  - bo:purchaseorder
---
# I_COSTCOMPONENTASSIGNMENT

**This CDS view provides general information about cost component assignment. It includes information about chart of accounts, cost component structure, from cost element, cost origin group, variance results analysis category, to cost element and cost component. This CDS view provides the prerequisites for answering the following business questions: Which cost elements are assigned to certain cost component structure? Which cost elements are assigned to certain cost component?**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTCOMPONENTASSIGNMENT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `+escape(url)+&quot` |  | |  |  |  |  |
| `secure` |  | |  |  |  |  |
| `partitioned&quot` |  | |  |  |  |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTCOMPONENTASSIGNMENT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTCOMPONENTASSIGNMENT')/$value)*

```abap
<html><head><meta http-equiv="cache-control" content="no-cache" /><meta http-equiv="pragma" content="no-cache" /></head><body onload="javascript:var url=window.location.hash;if(url&&(0!==url.length)){document.cookie=&quot;oucfarwtebdodzeeorferoavzzocxraducvwfwe_anchor=&quot;+escape(url)+&quot;; path=/; secure; samesite=none; partitioned&quot;}document.forms[0].submit()"><noscript><p><strong>Note:</strong> Since your browser does notsupport JavaScript, you must press the Continuebutton once to</p></noscript><form method="POST" action="https://asymfskhn.accounts.cloud.sap/saml2/idp/sso/asymfskhn.accounts.ondemand.com"><input type="hidden" name="SAMLRequest" value="PHNhbWxwOkF1dGhuUmVxdWVzdCBJRD0iU2ZhMTYzZWJkLWQ5ZWUtMWZlMS1hNTk5LWM3MWFkNGM1NmY2ZSIgVmVyc2lvbj0iMi4wIiBJc3N1ZUluc3RhbnQ9IjIwMjYtMDgtMTBUMTU6MTQ6NDdaIiBEZXN0aW5hdGlvbj0iaHR0cHM6Ly9hc3ltZnNraG4uYWNjb3VudHMuY2xvdWQuc2FwL3NhbWwyL2lkcC9zc28vYXN5bWZza2huLmFjY291bnRzLm9uZGVtYW5kLmNvbSIgRm9yY2VBdXRobj0iZmFsc2UiIElzUGFzc2l2ZT0iZmFsc2UiIEFzc2VydGlvbkNvbnN1bWVyU2VydmljZUluZGV4PSIwIiB4bWxuczpzYW1scD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnByb3RvY29sIj48c2FtbDpJc3N1ZXIgeG1sbnM6c2FtbD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFzc2VydGlvbiI&#x2b;aHR0cHM6Ly9teTQyODEwMC5zNGhhbmEuY2xvdWQuc2FwPC9zYW1sOklzc3Vlcj48ZHM6U2lnbmF0dXJlIHhtbG5zOmRzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjIj48ZHM6U2lnbmVkSW5mbz48ZHM6Q2Fub25pY2FsaXphdGlvbk1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvMTAveG1sLWV4Yy1jMTRuIyIvPjxkczpTaWduYXR1cmVNZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjcnNhLXNoYTEiLz48ZHM6UmVmZXJlbmNlIFVSST0iI1NmYTE2M2ViZC1kOWVlLTFmZTEtYTU5OS1jNzFhZDRjNTZmNmUiPjxkczpUcmFuc2Zvcm1zPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjZW52ZWxvcGVkLXNpZ25hdHVyZSIvPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzEwL3htbC1leGMtYzE0biMiLz48L2RzOlRyYW5zZm9ybXM&#x2b;PGRzOkRpZ2VzdE1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyNzaGExIi8&#x2b;PGRzOkRpZ2VzdFZhbHVlPnByM0d6WTRSSDVuVkRXWVVzNzhyb2VBTGtCYz08L2RzOkRpZ2VzdFZhbHVlPjwvZHM6UmVmZXJlbmNlPjwvZHM6U2lnbmVkSW5mbz48ZHM6U2lnbmF0dXJlVmFsdWU&#x2b;SVVLaVU2VEdNTGhtWXMzRGVHbFgvN1VIL2I0bnVBODd1T1Z2bk9SM3NESG9iYnFjZXRONjdiQTIrUFFhaWRBWTNZU042VUlXMjJPUApWYWw4MmU2cm5Ea3Fod1RqLzVHeVlkdG91bVdIdi9TZU10MHV2LzdXdUVMVXFWVjRJdSt1Z3lBMk5teWVOSjM0VGdoODNtTStmVzk3CndadFc5M29rTFNjT3JUY3JKZklvSDFjZkN5RXlVWk9JU0x1WmVoL0dLaG1XSHBLNkVZNkQyVTlsN0xBL05QQ0VUNmp2OEh3aWU3STAKQ3NEUmkweXMxajJmaWdnSXhsb3pJSGZqUFBGSnBMdHlYd2JxMWV2Mmh2MFNwanpjQmxQV0FyUUVRMnltSFhBVnpHNHFkOVp1YXNLbAp6N3loZ0xaV1JWSHRidElMWGxxYUduWTl6em9ScEY4Wm1SNUFtamZhRmFKQjlVWi9yRzlvamlvQmI5LzRhK2RYbUlORWVsU2U2TFl1CnROMzA4alhYNlgyZzNFUU8raXV2bDJhdkJBQmxCNEZPQTgxSXZubG9ScEQwZmxWYVAwLy9pSVpCSEpMeWF4WTJ6dCtxVmU4ZlhHZEsKaVNza3lpMFdkd2RxaVlzVjBEOTk1YUl2citaazMybHpOcGhRbDErR0Jvcy8zc0pCZEttNWpuaXI8L2RzOlNpZ25hdHVyZVZhbHVlPjwvZHM6U2lnbmF0dXJlPjwvc2FtbHA6QXV0aG5SZXF1ZXN0Pg&#x3d;&#x3d;"><input type="hidden" name="RelayState" value="oucfarwtebdodzeeorferoavzzocxraducvwfwe"><noscript><input type="submit" value="Continue"></noscript></form></body></html>
```