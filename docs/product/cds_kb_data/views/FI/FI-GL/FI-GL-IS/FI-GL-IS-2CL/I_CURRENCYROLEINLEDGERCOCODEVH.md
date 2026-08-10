---
name: I_CURRENCYROLEINLEDGERCOCODEVH
description: "This CDS view provides the prerequisites for answering the following business questions: How many currency roles are defined? In contrast to I_CurrencyRole, it only displays the currency roles which are assigned to a company code/ledger."
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CURRENCYROLEINLEDGERCOCODEVH')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: How many currency roles are defined? In contrast to I_CurrencyRole, it only displays the currency roles which are assigned to a company code/ledger."
semantic_vi: "I_CURRENCYROLEINLEDGERCOCODEVH — CDS view giao diện dựa trên I_CURRENCYROLEINLEDGERCOCODEVH."
keywords:
  - "currencyroleinledgercocodevh"
  - "+escape(url)+&quot"
  - "secure"
  - "partitioned&quot"
tags:
  - FI
  - bo:companycode
  - component:FI-GL-IS-2CL
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
---
# I_CURRENCYROLEINLEDGERCOCODEVH

**This CDS view provides the prerequisites for answering the following business questions: How many currency roles are defined? In contrast to I_CurrencyRole, it only displays the currency roles which are assigned to a company code/ledger.**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CURRENCYROLEINLEDGERCOCODEVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `+escape(url)+&quot` |  | |  |  |  |  |
| `secure` |  | |  |  |  |  |
| `partitioned&quot` |  | |  |  |  |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CURRENCYROLEINLEDGERCOCODEVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CURRENCYROLEINLEDGERCOCODEVH')/$value)*

```abap
<html><head><meta http-equiv="cache-control" content="no-cache" /><meta http-equiv="pragma" content="no-cache" /></head><body onload="javascript:var url=window.location.hash;if(url&&(0!==url.length)){document.cookie=&quot;oucfarwtebdodzeeorferoavzzocxbactebsfwe_anchor=&quot;+escape(url)+&quot;; path=/; secure; samesite=none; partitioned&quot;}document.forms[0].submit()"><noscript><p><strong>Note:</strong> Since your browser does notsupport JavaScript, you must press the Continuebutton once to</p></noscript><form method="POST" action="https://asymfskhn.accounts.cloud.sap/saml2/idp/sso/asymfskhn.accounts.ondemand.com"><input type="hidden" name="SAMLRequest" value="PHNhbWxwOkF1dGhuUmVxdWVzdCBJRD0iU2ZhMTYzZWJkLWQ5ZWUtMWZlMS1hNTk5LWM3YmFjM2ViMmY2ZSIgVmVyc2lvbj0iMi4wIiBJc3N1ZUluc3RhbnQ9IjIwMjYtMDgtMTBUMTU6MTQ6NTRaIiBEZXN0aW5hdGlvbj0iaHR0cHM6Ly9hc3ltZnNraG4uYWNjb3VudHMuY2xvdWQuc2FwL3NhbWwyL2lkcC9zc28vYXN5bWZza2huLmFjY291bnRzLm9uZGVtYW5kLmNvbSIgRm9yY2VBdXRobj0iZmFsc2UiIElzUGFzc2l2ZT0iZmFsc2UiIEFzc2VydGlvbkNvbnN1bWVyU2VydmljZUluZGV4PSIwIiB4bWxuczpzYW1scD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnByb3RvY29sIj48c2FtbDpJc3N1ZXIgeG1sbnM6c2FtbD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFzc2VydGlvbiI&#x2b;aHR0cHM6Ly9teTQyODEwMC5zNGhhbmEuY2xvdWQuc2FwPC9zYW1sOklzc3Vlcj48ZHM6U2lnbmF0dXJlIHhtbG5zOmRzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjIj48ZHM6U2lnbmVkSW5mbz48ZHM6Q2Fub25pY2FsaXphdGlvbk1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvMTAveG1sLWV4Yy1jMTRuIyIvPjxkczpTaWduYXR1cmVNZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjcnNhLXNoYTEiLz48ZHM6UmVmZXJlbmNlIFVSST0iI1NmYTE2M2ViZC1kOWVlLTFmZTEtYTU5OS1jN2JhYzNlYjJmNmUiPjxkczpUcmFuc2Zvcm1zPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjZW52ZWxvcGVkLXNpZ25hdHVyZSIvPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzEwL3htbC1leGMtYzE0biMiLz48L2RzOlRyYW5zZm9ybXM&#x2b;PGRzOkRpZ2VzdE1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyNzaGExIi8&#x2b;PGRzOkRpZ2VzdFZhbHVlPlI3d3J0a0l6Y1g3WExIMytEUmplQjNCYzNvTT08L2RzOkRpZ2VzdFZhbHVlPjwvZHM6UmVmZXJlbmNlPjwvZHM6U2lnbmVkSW5mbz48ZHM6U2lnbmF0dXJlVmFsdWU&#x2b;bTBUTTRwNXRiWkJHZ1hNaUJKRzNzVUVKbkliZVN5V1dPRmNCMVc0WnBXZ1FIcEJ1MjAwcWYwd2owVDZiZnFWQXJPdlo1bHFPdkU5agpCaFBtbHpVNUNwV0lLVHpjU0lQSXVCSUYwWExWNWdKSVJrVkJZckQvcFF2N0x0cnNIQ2FFQWMvNFhBUko0WjlGY1JBRXdQVktmWEE5CkFPRVloT3QwVzdsWmlHSE4vYksxYnhEOXRTVUNRL3MxVFQ2cUVaQ0F4OWVPcW55R0d3b1NrTnI5RkEzRS9qYmQ2OEh5M1NyUEF3aXkKVHZSRmhXZ1A1NmlKeGlEL2JXMEtDMzZiUkFHaGhQQXBqUFlBRVVzd29yMHpGL1JONnFrT3MzTWorejhUaDIrenRoOUwzRzlqb1Y5ZQpjS3Y4TGRnMlNpVjRLYzFzQThRbkpBd1FLeEcwR0g5MEorZmd3WTIxSktrcDVLbEFaWTMvVUh4WUozRHlwTlI0RzkwajdHYVNidVBwClZUY2QzRXpFZ2pvMlhMaTZSYThucUp5b3NITXJQWE1MRzdXR2pxMm5PNVROdFh0SEFCcU01a2drbllaVDdhZ09hWmVLcHk5QmRQQTYKT3d6OTBRd2hybzJOUkY3Z0lkandzSDhGelpMb3J5SHU1QVp2Rm9HT3VwL2FlNmN1YnFmblQ1ekQ8L2RzOlNpZ25hdHVyZVZhbHVlPjwvZHM6U2lnbmF0dXJlPjwvc2FtbHA6QXV0aG5SZXF1ZXN0Pg&#x3d;&#x3d;"><input type="hidden" name="RelayState" value="oucfarwtebdodzeeorferoavzzocxbactebsfwe"><noscript><input type="submit" value="Continue"></noscript></form></body></html>
```