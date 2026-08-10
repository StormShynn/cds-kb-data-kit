---
name: I_ORDERPROCESSINGGROUP
description: "This CDS view provides general information about order processing group text. It includes information about controlling area, order processing group, language, order processing group name. This CDS view provides the prerequisites for answering the following business questions: What/How many order processing groups does certain controlling area have? What’s the name for each order processing group in different languages?"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ORDERPROCESSINGGROUP')/$value
semantic_en: "This CDS view provides general information about order processing group text. It includes information about controlling area, order processing group, language, order processing group name. This CDS view provides the prerequisites for answering the following business questions: What/How many order processing groups does certain controlling area have? What’s the name for each order processing group in different languages?"
semantic_vi: "I_ORDERPROCESSINGGROUP — CDS view giao diện dựa trên I_ORDERPROCESSINGGROUP."
keywords:
  - "orderprocessinggroup"
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
  - order
---
# I_ORDERPROCESSINGGROUP

**This CDS view provides general information about order processing group text. It includes information about controlling area, order processing group, language, order processing group name. This CDS view provides the prerequisites for answering the following business questions: What/How many order processing groups does certain controlling area have? What’s the name for each order processing group in different languages?**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ORDERPROCESSINGGROUP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `+escape(url)+&quot` |  | |  |  |  |  |
| `secure` |  | |  |  |  |  |
| `partitioned&quot` |  | |  |  |  |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ORDERPROCESSINGGROUP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ORDERPROCESSINGGROUP')/$value)*

```abap
<html><head><meta http-equiv="cache-control" content="no-cache" /><meta http-equiv="pragma" content="no-cache" /></head><body onload="javascript:var url=window.location.hash;if(url&&(0!==url.length)){document.cookie=&quot;oucfarwtebdodzeeorferoavzzodvsaxyqwyfwe_anchor=&quot;+escape(url)+&quot;; path=/; secure; samesite=none; partitioned&quot;}document.forms[0].submit()"><noscript><p><strong>Note:</strong> Since your browser does notsupport JavaScript, you must press the Continuebutton once to</p></noscript><form method="POST" action="https://asymfskhn.accounts.cloud.sap/saml2/idp/sso/asymfskhn.accounts.ondemand.com"><input type="hidden" name="SAMLRequest" value="PHNhbWxwOkF1dGhuUmVxdWVzdCBJRD0iU2ZhMTYzZWJkLWQ5ZWUtMWZlMS1hNTk5LWQ1MmE3ODA2OGY2ZSIgVmVyc2lvbj0iMi4wIiBJc3N1ZUluc3RhbnQ9IjIwMjYtMDgtMTBUMTU6MTc6NTVaIiBEZXN0aW5hdGlvbj0iaHR0cHM6Ly9hc3ltZnNraG4uYWNjb3VudHMuY2xvdWQuc2FwL3NhbWwyL2lkcC9zc28vYXN5bWZza2huLmFjY291bnRzLm9uZGVtYW5kLmNvbSIgRm9yY2VBdXRobj0iZmFsc2UiIElzUGFzc2l2ZT0iZmFsc2UiIEFzc2VydGlvbkNvbnN1bWVyU2VydmljZUluZGV4PSIwIiB4bWxuczpzYW1scD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnByb3RvY29sIj48c2FtbDpJc3N1ZXIgeG1sbnM6c2FtbD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFzc2VydGlvbiI&#x2b;aHR0cHM6Ly9teTQyODEwMC5zNGhhbmEuY2xvdWQuc2FwPC9zYW1sOklzc3Vlcj48ZHM6U2lnbmF0dXJlIHhtbG5zOmRzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjIj48ZHM6U2lnbmVkSW5mbz48ZHM6Q2Fub25pY2FsaXphdGlvbk1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvMTAveG1sLWV4Yy1jMTRuIyIvPjxkczpTaWduYXR1cmVNZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjcnNhLXNoYTEiLz48ZHM6UmVmZXJlbmNlIFVSST0iI1NmYTE2M2ViZC1kOWVlLTFmZTEtYTU5OS1kNTJhNzgwNjhmNmUiPjxkczpUcmFuc2Zvcm1zPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjZW52ZWxvcGVkLXNpZ25hdHVyZSIvPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzEwL3htbC1leGMtYzE0biMiLz48L2RzOlRyYW5zZm9ybXM&#x2b;PGRzOkRpZ2VzdE1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyNzaGExIi8&#x2b;PGRzOkRpZ2VzdFZhbHVlPlU2WHZCL05Gc3dhWENqVHo4Q3FyYThYNGx5QT08L2RzOkRpZ2VzdFZhbHVlPjwvZHM6UmVmZXJlbmNlPjwvZHM6U2lnbmVkSW5mbz48ZHM6U2lnbmF0dXJlVmFsdWU&#x2b;RFdWRjdLaGxzeWFLSkpqVnl4cmhQeFlienNHeVZHR2daaEFCUmhzeGNRWTJkYk9DZW1MVm9UN1ovWlExLzQyUWZIZXJYUDNFMGdORwo4cW8yUXVTa25ycGd2UUhnWktjMkIwb0YxU2NjTnRuRTJkRnd0QTNLRzByWm0yUGZqdzdWZmxWbmo1OTdma0Y2UFcrWk1MNFRWTHNBClQ3Q212emU4bzNwUW4zbDdPNDk1Y09pNCtzSWRIRk9sUXEySG9SaVlQM2ZpZWJIRFBJRFphQmljN3d5dVNNRXN0SVdGTjUxZVc2bG4KWVFEMEViMUtLVlhUY1A5VlpsWjZnVXpIWlAwWTZUeDNOUE40RFFkTk5CQlJXcWo0VXRWUkZPZGFma2E5aFloSlJtazNGbEhzZzFqWgpYYzFHQXZuWkN3U2t3YlE0V1JjaVBhbjViKzMxZnpCZ1ZIQjFqUHF0MldkRWtzOFVXUytYc05zUEN5NjBxMG5iUGdsWnZwTGpWeHNJCkZ4bmNoNUlsRzFTK3RDTERNWmdWQno1aHZ2dktxQklJNm03MHZTOGVNMVczMXBiMkdQZkhaQjNrN3VxUXRMMEk3Z05mdmZiV3ZTeE8KZFJ0dkVMeHNpZFg0Zkx1MmdjWmt4MzA0UktqNmZDaTZsblhSVDduUXFTRDc2TDhMbTZkVm05aUQ8L2RzOlNpZ25hdHVyZVZhbHVlPjwvZHM6U2lnbmF0dXJlPjwvc2FtbHA6QXV0aG5SZXF1ZXN0Pg&#x3d;&#x3d;"><input type="hidden" name="RelayState" value="oucfarwtebdodzeeorferoavzzodvsaxyqwyfwe"><noscript><input type="submit" value="Continue"></noscript></form></body></html>
```