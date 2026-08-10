---
name: I_DUNNINGLEVELDISTRIBUTION
description: "This CDS view provides you with an overview of the dunning level distribution for accounts receivables. The search result aggregates the amount for each dunning level and account (company code and customer). This CDS view provides you with information that you need to answer the following business questions: How high is the overall open amount that is subject to dunning? Which customers have overdue amounts that were already dunned? Which customers have been dunned multiple times? Is there a risk that there will be doubtful debts?"
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DUNNINGLEVELDISTRIBUTION')/$value
semantic_en: "This CDS view provides you with an overview of the dunning level distribution for accounts receivables. The search result aggregates the amount for each dunning level and account (company code and customer). This CDS view provides you with information that you need to answer the following business questions: How high is the overall open amount that is subject to dunning? Which customers have overdue amounts that were already dunned? Which customers have been dunned multiple times? Is there a risk that there will be doubtful debts?"
semantic_vi: "I_DUNNINGLEVELDISTRIBUTION — CDS view giao diện dựa trên I_DUNNINGLEVELDISTRIBUTION."
keywords:
  - "dunningleveldistribution"
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
---
# I_DUNNINGLEVELDISTRIBUTION

**This CDS view provides you with an overview of the dunning level distribution for accounts receivables. The search result aggregates the amount for each dunning level and account (company code and customer). This CDS view provides you with information that you need to answer the following business questions: How high is the overall open amount that is subject to dunning? Which customers have overdue amounts that were already dunned? Which customers have been dunned multiple times? Is there a risk that there will be doubtful debts?**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DUNNINGLEVELDISTRIBUTION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `+escape(url)+&quot` |  | |  |  |  |  |
| `secure` |  | |  |  |  |  |
| `partitioned&quot` |  | |  |  |  |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DUNNINGLEVELDISTRIBUTION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DUNNINGLEVELDISTRIBUTION')/$value)*

```abap
<html><head><meta http-equiv="cache-control" content="no-cache" /><meta http-equiv="pragma" content="no-cache" /></head><body onload="javascript:var url=window.location.hash;if(url&&(0!==url.length)){document.cookie=&quot;oucfarwtebdodzeeorferoavzzocarxwfftwfwe_anchor=&quot;+escape(url)+&quot;; path=/; secure; samesite=none; partitioned&quot;}document.forms[0].submit()"><noscript><p><strong>Note:</strong> Since your browser does notsupport JavaScript, you must press the Continuebutton once to</p></noscript><form method="POST" action="https://asymfskhn.accounts.cloud.sap/saml2/idp/sso/asymfskhn.accounts.ondemand.com"><input type="hidden" name="SAMLRequest" value="PHNhbWxwOkF1dGhuUmVxdWVzdCBJRD0iU2ZhMTYzZWJkLWQ5ZWUtMWZlMS1hNTk5LWNhMTc2ZmYzNmY2ZSIgVmVyc2lvbj0iMi4wIiBJc3N1ZUluc3RhbnQ9IjIwMjYtMDgtMTBUMTU6MTU6MjdaIiBEZXN0aW5hdGlvbj0iaHR0cHM6Ly9hc3ltZnNraG4uYWNjb3VudHMuY2xvdWQuc2FwL3NhbWwyL2lkcC9zc28vYXN5bWZza2huLmFjY291bnRzLm9uZGVtYW5kLmNvbSIgRm9yY2VBdXRobj0iZmFsc2UiIElzUGFzc2l2ZT0iZmFsc2UiIEFzc2VydGlvbkNvbnN1bWVyU2VydmljZUluZGV4PSIwIiB4bWxuczpzYW1scD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnByb3RvY29sIj48c2FtbDpJc3N1ZXIgeG1sbnM6c2FtbD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFzc2VydGlvbiI&#x2b;aHR0cHM6Ly9teTQyODEwMC5zNGhhbmEuY2xvdWQuc2FwPC9zYW1sOklzc3Vlcj48ZHM6U2lnbmF0dXJlIHhtbG5zOmRzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjIj48ZHM6U2lnbmVkSW5mbz48ZHM6Q2Fub25pY2FsaXphdGlvbk1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvMTAveG1sLWV4Yy1jMTRuIyIvPjxkczpTaWduYXR1cmVNZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjcnNhLXNoYTEiLz48ZHM6UmVmZXJlbmNlIFVSST0iI1NmYTE2M2ViZC1kOWVlLTFmZTEtYTU5OS1jYTE3NmZmMzZmNmUiPjxkczpUcmFuc2Zvcm1zPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjZW52ZWxvcGVkLXNpZ25hdHVyZSIvPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzEwL3htbC1leGMtYzE0biMiLz48L2RzOlRyYW5zZm9ybXM&#x2b;PGRzOkRpZ2VzdE1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyNzaGExIi8&#x2b;PGRzOkRpZ2VzdFZhbHVlPkdrUlZPOHN4bmNOeXA1WjVCQ2Z5Wk5ITXRKZz08L2RzOkRpZ2VzdFZhbHVlPjwvZHM6UmVmZXJlbmNlPjwvZHM6U2lnbmVkSW5mbz48ZHM6U2lnbmF0dXJlVmFsdWU&#x2b;STFDRVkyZnNPa2o1MnJUV2Y5blFYdlVqZm96clZCenVpTlg2Z0ladlcrQmlvZVFGbjJ6bTk3cEFaWW1XTWJmRlJiWWJieXhqVzU2Ugp0L1FINzNHTExjYjUxU0dHbjZpNXowZ29RZmxTREMvQjh4MzZpVkhWREdyMlpXeVBRRmt3eDNka21SVnJ6MXNzd1ZQZC9HcXpSK3BQCkQxYW9ZaHdQRjlYTUlJQUUwYlUzMkk2UzFWZm1mNmhzdXN1ZWx2ZkF2NkZHcmFUamFQTU9rV3JTQW5HZytEODZSSitSVnZraE1uNUcKTzl6b0VVWUVxOTdSV2FRNldYTXAxSmFvdFdtWWpremdML1RUT2ltK0FMWXkwb3l5ZXBYZHhWOXNpYVlOd3NiUVBxb0hsZlcxNkJxLwppV1ZsYVBPdXJkVGVVWmEvS3ROL2tJSFcvNlNPcHVZNDk4dTEvRXlGZ1JnbGhuQjlPZGhDeFRMbmJPSWhodDUrTGZ0cldaWDZMcUlFCklDcnN4eHdNYzRYVTBpV3FuSEZ5U2RWKzlqVElpWEk4VkEybnBzMUNxYVN5ZW1ucmloeXFOK2xqTHhYVkpyRFlobVJaWktVNHFMRHUKSWE0dXZpbHRRc2FrNzVSTkw2VUloQU04bTBkS2xqTmxmZnJpZ09WMGFYcDc4ZXZIdTQrdWdnWGU8L2RzOlNpZ25hdHVyZVZhbHVlPjwvZHM6U2lnbmF0dXJlPjwvc2FtbHA6QXV0aG5SZXF1ZXN0Pg&#x3d;&#x3d;"><input type="hidden" name="RelayState" value="oucfarwtebdodzeeorferoavzzocarxwfftwfwe"><noscript><input type="submit" value="Continue"></noscript></form></body></html>
```