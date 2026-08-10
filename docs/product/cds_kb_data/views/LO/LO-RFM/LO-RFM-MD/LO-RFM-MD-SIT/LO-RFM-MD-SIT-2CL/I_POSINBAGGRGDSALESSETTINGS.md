---
name: I_POSINBAGGRGDSALESSETTINGS
description: "This CDS view provides you with aggregated settings for point of sale inbound profiles. You can use this view to retrieve the storage location, sales goods movement type, and returns goods movement type assigned to each point of sale inbound profile. This information helps you manage and analyze the logistical configuration for sales and returns processed through the point of sale system. This CDS view provides the data to answer the following business questions: Which point of sale inbound profiles are defined in your system? What storage location is assigned to each point of sale inbound profile? What sales goods movement type is used for a particular profile? What returns goods movement type is set for a specific point of sale inbound profile? How are sales and returns logistic settings configured at each point of sale? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-RFM-MD-SIT-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_POSINBAGGRGDSALESSETTINGS')/$value
semantic_en: "This CDS view provides you with aggregated settings for point of sale inbound profiles. You can use this view to retrieve the storage location, sales goods movement type, and returns goods movement type assigned to each point of sale inbound profile. This information helps you manage and analyze the logistical configuration for sales and returns processed through the point of sale system. This CDS view provides the data to answer the following business questions: Which point of sale inbound profiles are defined in your system? What storage location is assigned to each point of sale inbound profile? What sales goods movement type is used for a particular profile? What returns goods movement type is set for a specific point of sale inbound profile? How are sales and returns logistic settings configured at each point of sale? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "I_POSINBAGGRGDSALESSETTINGS — CDS view giao diện dựa trên I_POSINBAGGRGDSALESSETTINGS."
keywords:
  - "posinbaggrgdsalessettings"
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
  - bo:purchaseorder
---
# I_POSINBAGGRGDSALESSETTINGS

**This CDS view provides you with aggregated settings for point of sale inbound profiles. You can use this view to retrieve the storage location, sales goods movement type, and returns goods movement type assigned to each point of sale inbound profile. This information helps you manage and analyze the logistical configuration for sales and returns processed through the point of sale system. This CDS view provides the data to answer the following business questions: Which point of sale inbound profiles are defined in your system? What storage location is assigned to each point of sale inbound profile? What sales goods movement type is used for a particular profile? What returns goods movement type is set for a specific point of sale inbound profile? How are sales and returns logistic settings configured at each point of sale? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-SIT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_POSINBAGGRGDSALESSETTINGS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `+escape(url)+&quot` |  | |  |  |  |  |
| `secure` |  | |  |  |  |  |
| `partitioned&quot` |  | |  |  |  |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_POSINBAGGRGDSALESSETTINGS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_POSINBAGGRGDSALESSETTINGS')/$value)*

```abap
<html><head><meta http-equiv="cache-control" content="no-cache" /><meta http-equiv="pragma" content="no-cache" /></head><body onload="javascript:var url=window.location.hash;if(url&&(0!==url.length)){document.cookie=&quot;oucfarwtebdodzeeorferoavzzodwtetbbxefwe_anchor=&quot;+escape(url)+&quot;; path=/; secure; samesite=none; partitioned&quot;}document.forms[0].submit()"><noscript><p><strong>Note:</strong> Since your browser does notsupport JavaScript, you must press the Continuebutton once to</p></noscript><form method="POST" action="https://asymfskhn.accounts.cloud.sap/saml2/idp/sso/asymfskhn.accounts.ondemand.com"><input type="hidden" name="SAMLRequest" value="PHNhbWxwOkF1dGhuUmVxdWVzdCBJRD0iU2ZhMTYzZWJkLWQ5ZWUtMWZlMS1hNTk5LWQ2M2UzYmI3ZWY2ZSIgVmVyc2lvbj0iMi4wIiBJc3N1ZUluc3RhbnQ9IjIwMjYtMDgtMTBUMTU6MTg6MDlaIiBEZXN0aW5hdGlvbj0iaHR0cHM6Ly9hc3ltZnNraG4uYWNjb3VudHMuY2xvdWQuc2FwL3NhbWwyL2lkcC9zc28vYXN5bWZza2huLmFjY291bnRzLm9uZGVtYW5kLmNvbSIgRm9yY2VBdXRobj0iZmFsc2UiIElzUGFzc2l2ZT0iZmFsc2UiIEFzc2VydGlvbkNvbnN1bWVyU2VydmljZUluZGV4PSIwIiB4bWxuczpzYW1scD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnByb3RvY29sIj48c2FtbDpJc3N1ZXIgeG1sbnM6c2FtbD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFzc2VydGlvbiI&#x2b;aHR0cHM6Ly9teTQyODEwMC5zNGhhbmEuY2xvdWQuc2FwPC9zYW1sOklzc3Vlcj48ZHM6U2lnbmF0dXJlIHhtbG5zOmRzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjIj48ZHM6U2lnbmVkSW5mbz48ZHM6Q2Fub25pY2FsaXphdGlvbk1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvMTAveG1sLWV4Yy1jMTRuIyIvPjxkczpTaWduYXR1cmVNZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjcnNhLXNoYTEiLz48ZHM6UmVmZXJlbmNlIFVSST0iI1NmYTE2M2ViZC1kOWVlLTFmZTEtYTU5OS1kNjNlM2JiN2VmNmUiPjxkczpUcmFuc2Zvcm1zPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjZW52ZWxvcGVkLXNpZ25hdHVyZSIvPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzEwL3htbC1leGMtYzE0biMiLz48L2RzOlRyYW5zZm9ybXM&#x2b;PGRzOkRpZ2VzdE1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyNzaGExIi8&#x2b;PGRzOkRpZ2VzdFZhbHVlPmY4RXZLM25WTXNVUDZyMk1nY3QyUmlZWGtiST08L2RzOkRpZ2VzdFZhbHVlPjwvZHM6UmVmZXJlbmNlPjwvZHM6U2lnbmVkSW5mbz48ZHM6U2lnbmF0dXJlVmFsdWU&#x2b;WVViYzJKRHhIbUJwcFhQSDFMd0dWTXhBZzZmZ3ZmME1YVzZZazAyOXpTd2lGOE4rVUhndmFZS0V2TUpna1BjUllLc1hadzF4SEpHcgptWDQrWUg2d21tYzc3NkR3ZzFSbXNTL1ZCMXZ6Y3ZjQ2dTbTU2N0wvVzg0RmNFZjA5OXFYdkJ3MUErcUVTUkFjK2tmSUFSWjdlV25nCmdSbHFOajQ3N2d0am92TXI1U2VVMUcxVjF6ZXVyVXpsaXlRYU95Z3krWU44UHpNS05NNlQwcW0zQ1V3T2JOUENQdHU2UUxFQmFkMVAKbHVMaHdSMnVaNzgvUWFBWkJwNmFjdTliMXVFeHB2bzN2dEdPMVA1TDlGdkNFaVRBYlZIbDJIc2hWcmJwWGtNTWhpU0VOVTRiNDRwVQpPNGFNUzFWL2RkTnRWRjloM1plWUdDeGVJZDNwbnJSN0JiUWFKUGtHVTFGUWtOcHYreDNvSmlmdzVtSDcwWjJhdXNHREZWeWdnVTZlClBENGIwRUJPOU9hNG5uWTFLQ3pEV2o3VWx4QlhZWER4OWpGZVUzSVFTRmV4YTJjMmNTc1ZlZ3JPOGZ2b2ZuZS81N0VvNGNHeEZISFgKV2x1SUNRN0sySGwzK1BXd0ZDZFhlaGJPSXlGRUYvTUpVSjlIeWovQ2gwWTBHR0RxclRvRy8zS048L2RzOlNpZ25hdHVyZVZhbHVlPjwvZHM6U2lnbmF0dXJlPjwvc2FtbHA6QXV0aG5SZXF1ZXN0Pg&#x3d;&#x3d;"><input type="hidden" name="RelayState" value="oucfarwtebdodzeeorferoavzzodwtetbbxefwe"><noscript><input type="submit" value="Continue"></noscript></form></body></html>
```