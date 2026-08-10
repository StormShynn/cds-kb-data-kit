---
name: I_PLANLINEITEMSEMTAG
description: "This CDS view provides the prerequisites for answering the following business questions: What are the plan KPI amounts for each plan entry item? What is my plan net cash amount in company code currency?"
app_component: FI-FIO-GL-HIE-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PLANLINEITEMSEMTAG')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What are the plan KPI amounts for each plan entry item? What is my plan net cash amount in company code currency?"
semantic_vi: "I_PLANLINEITEMSEMTAG — CDS view giao diện dựa trên I_PLANLINEITEMSEMTAG."
keywords:
  - "planlineitemsemtag"
  - "+escape(url)+&quot"
  - "secure"
  - "partitioned&quot"
tags:
  - FI
  - bo:plant
  - component:FI-FIO-GL-HIE-2CL
  - FI-FIO
  - FI-FIO-GL
  - FI-FIO-GL-HIE
  - FI-FIO-GL-HIE-2CL
  - interface-view
  - lob:finance
  - plan
---
# I_PLANLINEITEMSEMTAG

**This CDS view provides the prerequisites for answering the following business questions: What are the plan KPI amounts for each plan entry item? What is my plan net cash amount in company code currency?**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-HIE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PLANLINEITEMSEMTAG')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `+escape(url)+&quot` |  | |  |  |  |  |
| `secure` |  | |  |  |  |  |
| `partitioned&quot` |  | |  |  |  |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PLANLINEITEMSEMTAG')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PLANLINEITEMSEMTAG')/$value)*

```abap
<html><head><meta http-equiv="cache-control" content="no-cache" /><meta http-equiv="pragma" content="no-cache" /></head><body onload="javascript:var url=window.location.hash;if(url&&(0!==url.length)){document.cookie=&quot;oucfarwtebdodzeeorferoavzzodvbvecdxsfwe_anchor=&quot;+escape(url)+&quot;; path=/; secure; samesite=none; partitioned&quot;}document.forms[0].submit()"><noscript><p><strong>Note:</strong> Since your browser does notsupport JavaScript, you must press the Continuebutton once to</p></noscript><form method="POST" action="https://asymfskhn.accounts.cloud.sap/saml2/idp/sso/asymfskhn.accounts.ondemand.com"><input type="hidden" name="SAMLRequest" value="PHNhbWxwOkF1dGhuUmVxdWVzdCBJRD0iU2ZhMTYzZWJkLWQ5ZWUtMWZlMS1hNTk5LWQ1YjVlY2Q3MmY2ZSIgVmVyc2lvbj0iMi4wIiBJc3N1ZUluc3RhbnQ9IjIwMjYtMDgtMTBUMTU6MTg6MDJaIiBEZXN0aW5hdGlvbj0iaHR0cHM6Ly9hc3ltZnNraG4uYWNjb3VudHMuY2xvdWQuc2FwL3NhbWwyL2lkcC9zc28vYXN5bWZza2huLmFjY291bnRzLm9uZGVtYW5kLmNvbSIgRm9yY2VBdXRobj0iZmFsc2UiIElzUGFzc2l2ZT0iZmFsc2UiIEFzc2VydGlvbkNvbnN1bWVyU2VydmljZUluZGV4PSIwIiB4bWxuczpzYW1scD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnByb3RvY29sIj48c2FtbDpJc3N1ZXIgeG1sbnM6c2FtbD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFzc2VydGlvbiI&#x2b;aHR0cHM6Ly9teTQyODEwMC5zNGhhbmEuY2xvdWQuc2FwPC9zYW1sOklzc3Vlcj48ZHM6U2lnbmF0dXJlIHhtbG5zOmRzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjIj48ZHM6U2lnbmVkSW5mbz48ZHM6Q2Fub25pY2FsaXphdGlvbk1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvMTAveG1sLWV4Yy1jMTRuIyIvPjxkczpTaWduYXR1cmVNZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjcnNhLXNoYTEiLz48ZHM6UmVmZXJlbmNlIFVSST0iI1NmYTE2M2ViZC1kOWVlLTFmZTEtYTU5OS1kNWI1ZWNkNzJmNmUiPjxkczpUcmFuc2Zvcm1zPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjZW52ZWxvcGVkLXNpZ25hdHVyZSIvPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzEwL3htbC1leGMtYzE0biMiLz48L2RzOlRyYW5zZm9ybXM&#x2b;PGRzOkRpZ2VzdE1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyNzaGExIi8&#x2b;PGRzOkRpZ2VzdFZhbHVlPk9seFVtVUgvRDhtb1ZCbkl1ZjhJV0Y1eFRoYz08L2RzOkRpZ2VzdFZhbHVlPjwvZHM6UmVmZXJlbmNlPjwvZHM6U2lnbmVkSW5mbz48ZHM6U2lnbmF0dXJlVmFsdWU&#x2b;RXZqYUJzZXB5dDF4SFVHcTlrN0J3TFhBblo0dTRGL0NNVTlERjRLb3BGZ253dk5INC96L29iV3cydzNsakp6MmNmcHJMd25QRFJSdQo0V3BBSGtnclNTcXNQejZKN2tUM2Rsa0hLaDc5ZUVWTU5zcUo4bDdvWk1JUGdlOFd3YnJ2VmZrUDE2TjZhdHpuVS9RQlA5MmVvZ2NwCkRBK3daZ09oVGdsUTVudU9RZmQwVC9oOXB5SnRsMW5FQXpyNk01ODNCMTFhVDZVWjZiTmR2UkM0bE9jaDRvd2xJWFRTVFQxcE40Uk0KK2plRDRHL3A2elBab3YzVEhpNDRqVW55ZytxZGpxelZsUWNhNnZpaDNkczNTaGpuSlkxT0Jac285dkhBa0RhRkxCdFAyd29TK0E0Lwo0WHAvZGVLVG0yZk1RQk1Ib2YwYXA1cmxVK0dHOTB6RFZjcTNYVTV2aVltRHY2T1REeUN0b3hJK1hiWGY1S2dyclNMcmRUTmF4NUx5CnlPZzE1Zll6NE9YK1BZd2J3cnE4MzlLWkd0c1puL3R2cDNBS2tKQ1JMTktSZmZlUVRpS3hQR0h3WUJURjkvWnpzNjh1bWZZcWxDZ1gKbUJPUXZqMWFMNVRIelBaWlR5Ymt0b3F4MkpFOWo1a0MxQzFqUUxXTmIzV2ZVTjMyVk1DblVvSXc8L2RzOlNpZ25hdHVyZVZhbHVlPjwvZHM6U2lnbmF0dXJlPjwvc2FtbHA6QXV0aG5SZXF1ZXN0Pg&#x3d;&#x3d;"><input type="hidden" name="RelayState" value="oucfarwtebdodzeeorferoavzzodvbvecdxsfwe"><noscript><input type="submit" value="Continue"></noscript></form></body></html>
```