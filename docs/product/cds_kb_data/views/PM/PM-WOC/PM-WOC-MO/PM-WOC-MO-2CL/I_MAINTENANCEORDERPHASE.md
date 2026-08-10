---
name: I_MAINTENANCEORDERPHASE
description: "This CDS view provides supported values for Maintenance Processing Phase. The values are as follows: VALUE MEANING 0 Outstanding 2 Released 3 Technically Completed 4 Marked for Deletion 5 Historical order 6 Completed for Business This CDS view provides the data to answer the following business questions: What are the valid processing phases available for maintenance orders in the system? Which phase codes can be used to categorize and track maintenance order progress? What phase values are currently active and available for assignment to maintenance orders? How can maintenance orders be classified by their current processing stage? What are the standardized phase identifiers used across maintenance order analytics and reporting? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCEORDERPHASE')/$value
semantic_en: "This CDS view provides supported values for Maintenance Processing Phase. The values are as follows: VALUE MEANING 0 Outstanding 2 Released 3 Technically Completed 4 Marked for Deletion 5 Historical order 6 Completed for Business This CDS view provides the data to answer the following business questions: What are the valid processing phases available for maintenance orders in the system? Which phase codes can be used to categorize and track maintenance order progress? What phase values are currently active and available for assignment to maintenance orders? How can maintenance orders be classified by their current processing stage? What are the standardized phase identifiers used across maintenance order analytics and reporting? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "I_MAINTENANCEORDERPHASE — CDS view giao diện dựa trên I_MAINTENANCEORDERPHASE."
keywords:
  - "maintenanceorderphase"
  - "+escape(url)+&quot"
  - "secure"
  - "partitioned&quot"
tags:
  - PM
  - bo:companycode
  - component:PM-WOC-MO-2CL
  - interface-view
  - lob:plant maintenance
  - order
  - PM-WOC
  - PM-WOC-MO
  - PM-WOC-MO-2CL
---
# I_MAINTENANCEORDERPHASE

**This CDS view provides supported values for Maintenance Processing Phase. The values are as follows: VALUE MEANING 0 Outstanding 2 Released 3 Technically Completed 4 Marked for Deletion 5 Historical order 6 Completed for Business This CDS view provides the data to answer the following business questions: What are the valid processing phases available for maintenance orders in the system? Which phase codes can be used to categorize and track maintenance order progress? What phase values are currently active and available for assignment to maintenance orders? How can maintenance orders be classified by their current processing stage? What are the standardized phase identifiers used across maintenance order analytics and reporting? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCEORDERPHASE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `+escape(url)+&quot` |  | |  |  |  |  |
| `secure` |  | |  |  |  |  |
| `partitioned&quot` |  | |  |  |  |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCEORDERPHASE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCEORDERPHASE')/$value)*

```abap
<html><head><meta http-equiv="cache-control" content="no-cache" /><meta http-equiv="pragma" content="no-cache" /></head><body onload="javascript:var url=window.location.hash;if(url&&(0!==url.length)){document.cookie=&quot;oucfarwtebdodzeeorferoavzzodsbezswvafwe_anchor=&quot;+escape(url)+&quot;; path=/; secure; samesite=none; partitioned&quot;}document.forms[0].submit()"><noscript><p><strong>Note:</strong> Since your browser does notsupport JavaScript, you must press the Continuebutton once to</p></noscript><form method="POST" action="https://asymfskhn.accounts.cloud.sap/saml2/idp/sso/asymfskhn.accounts.ondemand.com"><input type="hidden" name="SAMLRequest" value="PHNhbWxwOkF1dGhuUmVxdWVzdCBJRD0iU2ZhMTYzZWJkLWQ5ZWUtMWZlMS1hNTk5LWQyYmU5MjY1YWY2ZSIgVmVyc2lvbj0iMi4wIiBJc3N1ZUluc3RhbnQ9IjIwMjYtMDgtMTBUMTU6MTc6MjJaIiBEZXN0aW5hdGlvbj0iaHR0cHM6Ly9hc3ltZnNraG4uYWNjb3VudHMuY2xvdWQuc2FwL3NhbWwyL2lkcC9zc28vYXN5bWZza2huLmFjY291bnRzLm9uZGVtYW5kLmNvbSIgRm9yY2VBdXRobj0iZmFsc2UiIElzUGFzc2l2ZT0iZmFsc2UiIEFzc2VydGlvbkNvbnN1bWVyU2VydmljZUluZGV4PSIwIiB4bWxuczpzYW1scD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnByb3RvY29sIj48c2FtbDpJc3N1ZXIgeG1sbnM6c2FtbD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFzc2VydGlvbiI&#x2b;aHR0cHM6Ly9teTQyODEwMC5zNGhhbmEuY2xvdWQuc2FwPC9zYW1sOklzc3Vlcj48ZHM6U2lnbmF0dXJlIHhtbG5zOmRzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjIj48ZHM6U2lnbmVkSW5mbz48ZHM6Q2Fub25pY2FsaXphdGlvbk1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvMTAveG1sLWV4Yy1jMTRuIyIvPjxkczpTaWduYXR1cmVNZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjcnNhLXNoYTEiLz48ZHM6UmVmZXJlbmNlIFVSST0iI1NmYTE2M2ViZC1kOWVlLTFmZTEtYTU5OS1kMmJlOTI2NWFmNmUiPjxkczpUcmFuc2Zvcm1zPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjZW52ZWxvcGVkLXNpZ25hdHVyZSIvPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzEwL3htbC1leGMtYzE0biMiLz48L2RzOlRyYW5zZm9ybXM&#x2b;PGRzOkRpZ2VzdE1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyNzaGExIi8&#x2b;PGRzOkRpZ2VzdFZhbHVlPk15OHhJeXR6Y0crZzh3QVZ1bFZ0SFRLZDZyYz08L2RzOkRpZ2VzdFZhbHVlPjwvZHM6UmVmZXJlbmNlPjwvZHM6U2lnbmVkSW5mbz48ZHM6U2lnbmF0dXJlVmFsdWU&#x2b;U0JZVDNTWjNpTUxwUWNGZnppM3A1NHpmSmpyZWlFRndkNGQrRVlZditwUGpkY2dVdllETWw5bWZyK2lXZFBlQVI1V21HWUpSS0JEYQpXd3RKcE4xbU8xYlYrZkRUMmEvZVVzZzVHWjU5U0FoYWl2U0lTM1FsdEtEMzVRM2doTjloeWxRcUtCaDNnQ3A0RWdVWGpsTmtyanlRCkorWVozbnJWQlMvSkZwRDVEVmJEMXRtdXo4QURvYStvdkoydWJZRzJQY1YwVkRZN3VQRlR1MVZaamhiTkhSVDUvb2VtMGUwSFpGSmEKSlYrNXdRNTVYNWFrUFpKcGhCZURIdmFMd1lsVjhiR0pKbnVxZVhnNUwrMzlnT0pYRnRublNiaWNuSDZscXdDb0JBazhOa1BVeFIycQoxOVBseEMyWGZnWExHL0FtemtKc1NIK3BiM2hkQWl3QmkwZWhOK2FoNmZoUUFJS2pOVmx2OTNhM2EwV3RtdmNiK2pCMmkrSDJBckxIClJBcVRYa0E5ZnNGOWtCQWY0emlJU3VmQ0hJK3FzYkRCd0EyRFh0YmEwOWRsbTJoajJSVFlQbVhnNkFaOHJHZ2d1UVFJRDRNK3B1WWUKdHFKbTMydlhkZUN0dFpPa3k3Qjl3c2xkQ0l4ZFRGdGdnZUp4MlVrRmYzVUZuZlJCQTlBdUI5Wnc8L2RzOlNpZ25hdHVyZVZhbHVlPjwvZHM6U2lnbmF0dXJlPjwvc2FtbHA6QXV0aG5SZXF1ZXN0Pg&#x3d;&#x3d;"><input type="hidden" name="RelayState" value="oucfarwtebdodzeeorferoavzzodsbezswvafwe"><noscript><input type="submit" value="Continue"></noscript></form></body></html>
```