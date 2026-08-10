---
name: I_MAINTORDERACTUALCOSTDATACUBE
description: "This CDS view provides the actual cost postings which were incurred from maintenance orders. It answers the following business questions: What type of cost was incurred? Does the posting refer to the incurrence of the cost, or to its settlement? For which maintenance order, for which maintenance operation, and technical object was the cost incurred? What was the reason for the maintenance work, for example reactive or proactive? In which fiscal period is the cost reflected? Is the cost considered to be of unplanned nature, for example an unplanned material consumption?"
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTORDERACTUALCOSTDATACUBE')/$value
semantic_en: "This CDS view provides the actual cost postings which were incurred from maintenance orders. It answers the following business questions: What type of cost was incurred? Does the posting refer to the incurrence of the cost, or to its settlement? For which maintenance order, for which maintenance operation, and technical object was the cost incurred? What was the reason for the maintenance work, for example reactive or proactive? In which fiscal period is the cost reflected? Is the cost considered to be of unplanned nature, for example an unplanned material consumption?"
semantic_vi: "I_MAINTORDERACTUALCOSTDATACUBE — CDS view giao diện dựa trên I_MAINTORDERACTUALCOSTDATACUBE."
keywords:
  - "Maintenance Order Actual Cost - Analytics Cube"
  - "maintorderactualcostdatacube"
  - "+escape(url)+&quot"
  - "secure"
  - "partitioned&quot"
tags:
  - PM
  - bo:companycode
  - component:PM-WOC-MO-2CL
  - interface-view
  - lob:plant maintenance
  - material
  - order
  - plan
  - PM-WOC
  - PM-WOC-MO
  - PM-WOC-MO-2CL
---
# I_MAINTORDERACTUALCOSTDATACUBE

**This CDS view provides the actual cost postings which were incurred from maintenance orders. It answers the following business questions: What type of cost was incurred? Does the posting refer to the incurrence of the cost, or to its settlement? For which maintenance order, for which maintenance operation, and technical object was the cost incurred? What was the reason for the maintenance work, for example reactive or proactive? In which fiscal period is the cost reflected? Is the cost considered to be of unplanned nature, for example an unplanned material consumption?**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTORDERACTUALCOSTDATACUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `+escape(url)+&quot` |  | |  |  |  |  |
| `secure` |  | |  |  |  |  |
| `partitioned&quot` |  | |  |  |  |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTORDERACTUALCOSTDATACUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTORDERACTUALCOSTDATACUBE')/$value)*

```abap
<html><head><meta http-equiv="cache-control" content="no-cache" /><meta http-equiv="pragma" content="no-cache" /></head><body onload="javascript:var url=window.location.hash;if(url&&(0!==url.length)){document.cookie=&quot;oucfarwtebdodzeeorferoavzzodtxarywxwfwe_anchor=&quot;+escape(url)+&quot;; path=/; secure; samesite=none; partitioned&quot;}document.forms[0].submit()"><noscript><p><strong>Note:</strong> Since your browser does notsupport JavaScript, you must press the Continuebutton once to</p></noscript><form method="POST" action="https://asymfskhn.accounts.cloud.sap/saml2/idp/sso/asymfskhn.accounts.ondemand.com"><input type="hidden" name="SAMLRequest" value="PHNhbWxwOkF1dGhuUmVxdWVzdCBJRD0iU2ZhMTYzZWJkLWQ5ZWUtMWZlMS1hNTk5LWQzN2ExODY3NmY2ZSIgVmVyc2lvbj0iMi4wIiBJc3N1ZUluc3RhbnQ9IjIwMjYtMDgtMTBUMTU6MTc6MzJaIiBEZXN0aW5hdGlvbj0iaHR0cHM6Ly9hc3ltZnNraG4uYWNjb3VudHMuY2xvdWQuc2FwL3NhbWwyL2lkcC9zc28vYXN5bWZza2huLmFjY291bnRzLm9uZGVtYW5kLmNvbSIgRm9yY2VBdXRobj0iZmFsc2UiIElzUGFzc2l2ZT0iZmFsc2UiIEFzc2VydGlvbkNvbnN1bWVyU2VydmljZUluZGV4PSIwIiB4bWxuczpzYW1scD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnByb3RvY29sIj48c2FtbDpJc3N1ZXIgeG1sbnM6c2FtbD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFzc2VydGlvbiI&#x2b;aHR0cHM6Ly9teTQyODEwMC5zNGhhbmEuY2xvdWQuc2FwPC9zYW1sOklzc3Vlcj48ZHM6U2lnbmF0dXJlIHhtbG5zOmRzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjIj48ZHM6U2lnbmVkSW5mbz48ZHM6Q2Fub25pY2FsaXphdGlvbk1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvMTAveG1sLWV4Yy1jMTRuIyIvPjxkczpTaWduYXR1cmVNZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjcnNhLXNoYTEiLz48ZHM6UmVmZXJlbmNlIFVSST0iI1NmYTE2M2ViZC1kOWVlLTFmZTEtYTU5OS1kMzdhMTg2NzZmNmUiPjxkczpUcmFuc2Zvcm1zPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjZW52ZWxvcGVkLXNpZ25hdHVyZSIvPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzEwL3htbC1leGMtYzE0biMiLz48L2RzOlRyYW5zZm9ybXM&#x2b;PGRzOkRpZ2VzdE1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyNzaGExIi8&#x2b;PGRzOkRpZ2VzdFZhbHVlPnBOdGlZT0RpdGk2RmxKV0dDdHk2N25USFBnST08L2RzOkRpZ2VzdFZhbHVlPjwvZHM6UmVmZXJlbmNlPjwvZHM6U2lnbmVkSW5mbz48ZHM6U2lnbmF0dXJlVmFsdWU&#x2b;RFMvQ2czTVczejZMTzVXRkFKLzFzdHlXTUF2VHZtazUzdkN2V3dkVFMzNUNIUUpQNzlVbVh2RDlIOXh0Z3Z2L3VqVGkzaXdPa0VhMgpRT09QTHYvL0tDSnNvSjRPK2g2d0J2Nk5KOE1SQzV0Zm9LN3pld01mVGtLT2xmd3hPMStpUWRDRTZHUTM5M3Y1T0l4Zk1HWGg0TFFSCjRwOEhBMDU1dERCVTNEVjg4aEs5RzJPM0xsLzE4bVdiSTlqNnphTjVITFFPcDhDZ2NGQnpNcUVPMzc0b1pnVHpiWldzUSthTmhodVgKTHlzNkpQbkVEcWlsSUhhZzJvcW9Eazh6WTFmTk80ek5oMithMENJZEticnJQa29vTThzYml5Wk1UWGNlVEkraXlaOFB1QzRWclkxVApZZlRKUkdOWEV6dGd3a0FnUUl4SE9yajdNcFVUOE5BbDkwT2hBbzQ0MnBFcDFnQjFWUktVeWFNMEh6Ti9VeHJRWnF6Z0hSOFNIVVFuCk9FSUxHaTlVaTNyUXlycTROam13TmxKdnJNZFZnVkkrWU42amRiUWhDMEtQNDZTN09OckJ3aTF0UmVvbWFhOXhpTFNXaVhaS1orUGkKdFRleG85NWNvd3lUMFZGL0pBempvb0lMbGQweGg2eU9NbTUxN3B4aUVsZnAvMitjcGJ3bzZTRkw8L2RzOlNpZ25hdHVyZVZhbHVlPjwvZHM6U2lnbmF0dXJlPjwvc2FtbHA6QXV0aG5SZXF1ZXN0Pg&#x3d;&#x3d;"><input type="hidden" name="RelayState" value="oucfarwtebdodzeeorferoavzzodtxarywxwfwe"><noscript><input type="submit" value="Continue"></noscript></form></body></html>
```