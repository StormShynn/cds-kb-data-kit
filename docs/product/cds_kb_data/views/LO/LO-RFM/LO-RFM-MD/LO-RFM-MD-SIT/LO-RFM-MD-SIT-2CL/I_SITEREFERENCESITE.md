---
name: I_SITEREFERENCESITE
description: "This CDS view provides information about the assignment of reference sites in the system. You can use it to determine which site (plant) is assigned as a reference site for specific combinations of sales organization and distribution channel. This CDS view provides the data to answer the following business questions: Which site (such as a plant or store) is assigned to which reference site? Is a particular site considered a reference site itself? What is the reference site for a site in a given sales organization and distribution channel? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-RFM-MD-SIT-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEREFERENCESITE')/$value
semantic_en: "This CDS view provides information about the assignment of reference sites in the system. You can use it to determine which site (plant) is assigned as a reference site for specific combinations of sales organization and distribution channel. This CDS view provides the data to answer the following business questions: Which site (such as a plant or store) is assigned to which reference site? Is a particular site considered a reference site itself? What is the reference site for a site in a given sales organization and distribution channel? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "I_SITEREFERENCESITE — CDS view giao diện dựa trên I_SITEREFERENCESITE."
keywords:
  - "sitereferencesite"
  - "+escape(url)+&quot"
  - "secure"
  - "partitioned&quot"
tags:
  - LO
  - bo:companycode
  - component:LO-RFM-MD-SIT-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-MD
  - LO-RFM-MD-SIT
  - LO-RFM-MD-SIT-2CL
  - lob:logistics general
  - plan
  - bo:plant
---
# I_SITEREFERENCESITE

**This CDS view provides information about the assignment of reference sites in the system. You can use it to determine which site (plant) is assigned as a reference site for specific combinations of sales organization and distribution channel. This CDS view provides the data to answer the following business questions: Which site (such as a plant or store) is assigned to which reference site? Is a particular site considered a reference site itself? What is the reference site for a site in a given sales organization and distribution channel? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-SIT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEREFERENCESITE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `+escape(url)+&quot` |  | |  |  |  |  |
| `secure` |  | |  |  |  |  |
| `partitioned&quot` |  | |  |  |  |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEREFERENCESITE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEREFERENCESITE')/$value)*

```abap
<html><head><meta http-equiv="cache-control" content="no-cache" /><meta http-equiv="pragma" content="no-cache" /></head><body onload="javascript:var url=window.location.hash;if(url&&(0!==url.length)){document.cookie=&quot;oucfarwtebdodzeeorferoavzzoeszwfqcbufwe_anchor=&quot;+escape(url)+&quot;; path=/; secure; samesite=none; partitioned&quot;}document.forms[0].submit()"><noscript><p><strong>Note:</strong> Since your browser does notsupport JavaScript, you must press the Continuebutton once to</p></noscript><form method="POST" action="https://asymfskhn.accounts.cloud.sap/saml2/idp/sso/asymfskhn.accounts.ondemand.com"><input type="hidden" name="SAMLRequest" value="PHNhbWxwOkF1dGhuUmVxdWVzdCBJRD0iU2ZhMTYzZWJkLWQ5ZWUtMWZlMS1hNTk5LWUyOTZmMGNiNGY2ZSIgVmVyc2lvbj0iMi4wIiBJc3N1ZUluc3RhbnQ9IjIwMjYtMDgtMTBUMTU6MjA6NTVaIiBEZXN0aW5hdGlvbj0iaHR0cHM6Ly9hc3ltZnNraG4uYWNjb3VudHMuY2xvdWQuc2FwL3NhbWwyL2lkcC9zc28vYXN5bWZza2huLmFjY291bnRzLm9uZGVtYW5kLmNvbSIgRm9yY2VBdXRobj0iZmFsc2UiIElzUGFzc2l2ZT0iZmFsc2UiIEFzc2VydGlvbkNvbnN1bWVyU2VydmljZUluZGV4PSIwIiB4bWxuczpzYW1scD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnByb3RvY29sIj48c2FtbDpJc3N1ZXIgeG1sbnM6c2FtbD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFzc2VydGlvbiI&#x2b;aHR0cHM6Ly9teTQyODEwMC5zNGhhbmEuY2xvdWQuc2FwPC9zYW1sOklzc3Vlcj48ZHM6U2lnbmF0dXJlIHhtbG5zOmRzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjIj48ZHM6U2lnbmVkSW5mbz48ZHM6Q2Fub25pY2FsaXphdGlvbk1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvMTAveG1sLWV4Yy1jMTRuIyIvPjxkczpTaWduYXR1cmVNZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjcnNhLXNoYTEiLz48ZHM6UmVmZXJlbmNlIFVSST0iI1NmYTE2M2ViZC1kOWVlLTFmZTEtYTU5OS1lMjk2ZjBjYjRmNmUiPjxkczpUcmFuc2Zvcm1zPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjZW52ZWxvcGVkLXNpZ25hdHVyZSIvPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzEwL3htbC1leGMtYzE0biMiLz48L2RzOlRyYW5zZm9ybXM&#x2b;PGRzOkRpZ2VzdE1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyNzaGExIi8&#x2b;PGRzOkRpZ2VzdFZhbHVlPnp6dmttRWVZN0hnZ2FHQlBZMFVXVGEwMFlScz08L2RzOkRpZ2VzdFZhbHVlPjwvZHM6UmVmZXJlbmNlPjwvZHM6U2lnbmVkSW5mbz48ZHM6U2lnbmF0dXJlVmFsdWU&#x2b;Z1ExRWcwcHByVkVjSlpkVmlFNUZRa1JhWnFiMkNQcXlhM01SVzlWN1FPeHV5Tk9HcGo0YUhpbTJJSFVkK1hDYjNYUDFjL1J3RmpsZApsa2VpY3FDWlVuTmxKMGNPUEFuWDh6ZVJ6ZlUzcm9lMFlCbEV0ZG9haGQxZ1gzVUIra3dLRHBYTDhvZEE2OHdMUHppR25TRFgwbHNiClN4UGZsakNsSFJoRHdrNjV2YlVscThOQUVKMG96VkFuU3BmQU1uVFdjVEhNT0Fuc1RMWWo3WURTR1ZjZzh2Q3JoR3FodXNiNDQ4ZzUKWkJvTktQcUNzd1pva3ZPeS80MTBBcWhTQ0lWV1RiZnkrYXMxQzkzUjR1cG1DVTVkaFlETVpkVkswRmR3ZXZIWWUvYUcranlwOEdDMApJSTQxU1Q3MXRaZ1dCTEJzakQzcE5tOFkyd1VRWEM0RzRIbHJ4R3l0NmwrVFBxRkI4dElFcUE4T2Z4NW52WUJGMVFvdFVJR1E0TTZ0CjVXWVoyU0FsVzM0MitpbXNyQlJKYkZtQXdKK1ZCZ0Nwb1Nma1NBMkt2VDlRQTZhU3FwN3lDSWZ6TUxBM3B6TklMeCtwRlNQdkNvcGwKcWdMR1VnSGVZaXd0RERkbFBySUR0WVkvQ2R4S0hWdk5LMThobEFHeDNGTzJFeXNqdDdXODRZRC88L2RzOlNpZ25hdHVyZVZhbHVlPjwvZHM6U2lnbmF0dXJlPjwvc2FtbHA6QXV0aG5SZXF1ZXN0Pg&#x3d;&#x3d;"><input type="hidden" name="RelayState" value="oucfarwtebdodzeeorferoavzzoeszwfqcbufwe"><noscript><input type="submit" value="Continue"></noscript></form></body></html>
```