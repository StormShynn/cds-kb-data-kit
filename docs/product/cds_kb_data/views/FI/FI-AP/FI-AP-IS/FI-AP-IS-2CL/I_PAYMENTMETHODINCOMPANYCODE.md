---
name: I_PAYMENTMETHODINCOMPANYCODE
description: "This CDS view is designed to provide information about payment methods associated with specific company codes. It retrieves data from tables related to payment methods and company codes, offering insights into the configuration and rules applied to payment methods within a company. This CDS view provides the data to answer the following business questions: What are the payment methods available for a specific company code? What are the minimum and maximum payment amounts allowed for each payment method within a company code? What is the distribution amount for each payment method? Are payments grouped as single payments or by due day for each payment method? Are extended individual payments allowed for each payment method? Are foreign business partners allowed for each payment method? Is the use of foreign currency permitted for each payment method? Is the use of banks abroad allowed for each payment method? Is bank selection optimized by bank group or postal code for each payment method? What is the currency used by the company code for these payment methods? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-AP-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PAYMENTMETHODINCOMPANYCODE')/$value
semantic_en: "This CDS view is designed to provide information about payment methods associated with specific company codes. It retrieves data from tables related to payment methods and company codes, offering insights into the configuration and rules applied to payment methods within a company. This CDS view provides the data to answer the following business questions: What are the payment methods available for a specific company code? What are the minimum and maximum payment amounts allowed for each payment method within a company code? What is the distribution amount for each payment method? Are payments grouped as single payments or by due day for each payment method? Are extended individual payments allowed for each payment method? Are foreign business partners allowed for each payment method? Is the use of foreign currency permitted for each payment method? Is the use of banks abroad allowed for each payment method? Is bank selection optimized by bank group or postal code for each payment method? What is the currency used by the company code for these payment methods? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "I_PAYMENTMETHODINCOMPANYCODE — CDS view giao diện dựa trên I_PAYMENTMETHODINCOMPANYCODE."
keywords:
  - "paymentmethodincompanycode"
  - "+escape(url)+&quot"
  - "secure"
  - "partitioned&quot"
tags:
  - FI
  - bo:companycode
  - component:FI-AP-IS-2CL
  - FI-AP
  - FI-AP-IS
  - FI-AP-IS-2CL
  - interface-view
  - lob:finance
  - payment
---
# I_PAYMENTMETHODINCOMPANYCODE

**This CDS view is designed to provide information about payment methods associated with specific company codes. It retrieves data from tables related to payment methods and company codes, offering insights into the configuration and rules applied to payment methods within a company. This CDS view provides the data to answer the following business questions: What are the payment methods available for a specific company code? What are the minimum and maximum payment amounts allowed for each payment method within a company code? What is the distribution amount for each payment method? Are payments grouped as single payments or by due day for each payment method? Are extended individual payments allowed for each payment method? Are foreign business partners allowed for each payment method? Is the use of foreign currency permitted for each payment method? Is the use of banks abroad allowed for each payment method? Is bank selection optimized by bank group or postal code for each payment method? What is the currency used by the company code for these payment methods? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-AP-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PAYMENTMETHODINCOMPANYCODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `+escape(url)+&quot` |  | |  |  |  |  |
| `secure` |  | |  |  |  |  |
| `partitioned&quot` |  | |  |  |  |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PAYMENTMETHODINCOMPANYCODE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PAYMENTMETHODINCOMPANYCODE')/$value)*

```abap
<html><head><meta http-equiv="cache-control" content="no-cache" /><meta http-equiv="pragma" content="no-cache" /></head><body onload="javascript:var url=window.location.hash;if(url&&(0!==url.length)){document.cookie=&quot;oucfarwtebdodzeeorferoavzzodvvzswuqsfwe_anchor=&quot;+escape(url)+&quot;; path=/; secure; samesite=none; partitioned&quot;}document.forms[0].submit()"><noscript><p><strong>Note:</strong> Since your browser does notsupport JavaScript, you must press the Continuebutton once to</p></noscript><form method="POST" action="https://asymfskhn.accounts.cloud.sap/saml2/idp/sso/asymfskhn.accounts.ondemand.com"><input type="hidden" name="SAMLRequest" value="PHNhbWxwOkF1dGhuUmVxdWVzdCBJRD0iU2ZhMTYzZWJkLWQ5ZWUtMWZlMS1hNTk5LWQ1NTkyNjQwMmY2ZSIgVmVyc2lvbj0iMi4wIiBJc3N1ZUluc3RhbnQ9IjIwMjYtMDgtMTBUMTU6MTc6NTdaIiBEZXN0aW5hdGlvbj0iaHR0cHM6Ly9hc3ltZnNraG4uYWNjb3VudHMuY2xvdWQuc2FwL3NhbWwyL2lkcC9zc28vYXN5bWZza2huLmFjY291bnRzLm9uZGVtYW5kLmNvbSIgRm9yY2VBdXRobj0iZmFsc2UiIElzUGFzc2l2ZT0iZmFsc2UiIEFzc2VydGlvbkNvbnN1bWVyU2VydmljZUluZGV4PSIwIiB4bWxuczpzYW1scD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnByb3RvY29sIj48c2FtbDpJc3N1ZXIgeG1sbnM6c2FtbD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFzc2VydGlvbiI&#x2b;aHR0cHM6Ly9teTQyODEwMC5zNGhhbmEuY2xvdWQuc2FwPC9zYW1sOklzc3Vlcj48ZHM6U2lnbmF0dXJlIHhtbG5zOmRzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjIj48ZHM6U2lnbmVkSW5mbz48ZHM6Q2Fub25pY2FsaXphdGlvbk1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvMTAveG1sLWV4Yy1jMTRuIyIvPjxkczpTaWduYXR1cmVNZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjcnNhLXNoYTEiLz48ZHM6UmVmZXJlbmNlIFVSST0iI1NmYTE2M2ViZC1kOWVlLTFmZTEtYTU5OS1kNTU5MjY0MDJmNmUiPjxkczpUcmFuc2Zvcm1zPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjZW52ZWxvcGVkLXNpZ25hdHVyZSIvPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzEwL3htbC1leGMtYzE0biMiLz48L2RzOlRyYW5zZm9ybXM&#x2b;PGRzOkRpZ2VzdE1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyNzaGExIi8&#x2b;PGRzOkRpZ2VzdFZhbHVlPndJU2MxcmVIem1JSndUREVvTk1yOWlVMDNFbz08L2RzOkRpZ2VzdFZhbHVlPjwvZHM6UmVmZXJlbmNlPjwvZHM6U2lnbmVkSW5mbz48ZHM6U2lnbmF0dXJlVmFsdWU&#x2b;ZW12M3RQeW9RME56U2UySjhRM0xQVmdncVJTMGVVNTZ5LzFsSTdudDVjTUVDbU1KSEtUbGIyM2IzM1dGajVjTjMzM0FtdGxBRDdheApuVzI5V2x6NW5tQzhnNUlNL083RkJvcGhJblp6alV4L2FkbW8wbERDQUZnUGduR1VsSWpoNnE5cGdZYzdOWVJFMjJCSnhobG9nTE40CnZTbkVHa3RvWTFtcDlTdlVnanRGV3lGckpEenVOeEdQOXZRN3RxZW9VSGxHUU9sRUJtQmkxV0xrbUQ0UDZveURZUTAyU0hCSVAxRzcKcTJPTmJUdmNEbSt0UEtrWGxJdFBVbXdSNlJLQmpHYnlpNUlERXZhbi9pMk03K2hrT0xUZHorZWVuc3VSb3F2ZGFvRGRHT3BQRWtUSApVV2pUTVJKOEpJNkdjR2xBWkZmMzJwL3F1SFA0MDdkZllRb1dZVXlCTEJmak5jNy82cjRJbjRRNGlXaXRyV3FKOWR2YkJBbWdwakcvCnV1QlBxanMyUWNhSkZiWWQ1QXp1a3N1dWoweTVyRzJxYVptbUdobVoxS3ZOcExHWkYrMWJNUGd6eGcvZ05aNDBPL3llMVU0ZUppQU8KamNmUUdOSi91TkRvOUtiQnd3SFdlU3IwOTdjaGtJNGl1dUgySFZoYXRwTlJ4Umc5N3FtOEwyTWQ8L2RzOlNpZ25hdHVyZVZhbHVlPjwvZHM6U2lnbmF0dXJlPjwvc2FtbHA6QXV0aG5SZXF1ZXN0Pg&#x3d;&#x3d;"><input type="hidden" name="RelayState" value="oucfarwtebdodzeeorferoavzzodvvzswuqsfwe"><noscript><input type="submit" value="Continue"></noscript></form></body></html>
```