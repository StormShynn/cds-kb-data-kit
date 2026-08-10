---
name: I_DEPRPROFILEPHASE
description: "This CDS view provides the depreciation phase settings that are maintained for a depreciation profile. It contains information about the depreciation type and the depreciation phase. This CDS view provides the data to answer the following business questions: How is the depreciation phase configured? Which depreciation method is used in the depreciation phase? What is the depreciation percentage rate? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-AA-AA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRPROFILEPHASE')/$value
semantic_en: "This CDS view provides the depreciation phase settings that are maintained for a depreciation profile. It contains information about the depreciation type and the depreciation phase. This CDS view provides the data to answer the following business questions: How is the depreciation phase configured? Which depreciation method is used in the depreciation phase? What is the depreciation percentage rate? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "I_DEPRPROFILEPHASE — CDS view giao diện dựa trên I_DEPRPROFILEPHASE."
keywords:
  - "deprprofilephase"
  - "+escape(url)+&quot"
  - "secure"
  - "partitioned&quot"
tags:
  - FI
  - bo:asset
  - component:FI-AA-AA-2CL
  - FI-AA
  - FI-AA-AA
  - FI-AA-AA-2CL
  - interface-view
  - lob:finance
  - bo:companycode
---
# I_DEPRPROFILEPHASE

**This CDS view provides the depreciation phase settings that are maintained for a depreciation profile. It contains information about the depreciation type and the depreciation phase. This CDS view provides the data to answer the following business questions: How is the depreciation phase configured? Which depreciation method is used in the depreciation phase? What is the depreciation percentage rate? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-AA-AA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRPROFILEPHASE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `+escape(url)+&quot` |  | |  |  |  |  |
| `secure` |  | |  |  |  |  |
| `partitioned&quot` |  | |  |  |  |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRPROFILEPHASE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRPROFILEPHASE')/$value)*

```abap
<html><head><meta http-equiv="cache-control" content="no-cache" /><meta http-equiv="pragma" content="no-cache" /></head><body onload="javascript:var url=window.location.hash;if(url&&(0!==url.length)){document.cookie=&quot;oucfarwtebdodzeeorferoavzzoczdxsatzwfwe_anchor=&quot;+escape(url)+&quot;; path=/; secure; samesite=none; partitioned&quot;}document.forms[0].submit()"><noscript><p><strong>Note:</strong> Since your browser does notsupport JavaScript, you must press the Continuebutton once to</p></noscript><form method="POST" action="https://asymfskhn.accounts.cloud.sap/saml2/idp/sso/asymfskhn.accounts.ondemand.com"><input type="hidden" name="SAMLRequest" value="PHNhbWxwOkF1dGhuUmVxdWVzdCBJRD0iU2ZhMTYzZWJkLWQ5ZWUtMWZlMS1hNTk5LWM5ZDcyYTM5NmY2ZSIgVmVyc2lvbj0iMi4wIiBJc3N1ZUluc3RhbnQ9IjIwMjYtMDgtMTBUMTU6MTU6MjNaIiBEZXN0aW5hdGlvbj0iaHR0cHM6Ly9hc3ltZnNraG4uYWNjb3VudHMuY2xvdWQuc2FwL3NhbWwyL2lkcC9zc28vYXN5bWZza2huLmFjY291bnRzLm9uZGVtYW5kLmNvbSIgRm9yY2VBdXRobj0iZmFsc2UiIElzUGFzc2l2ZT0iZmFsc2UiIEFzc2VydGlvbkNvbnN1bWVyU2VydmljZUluZGV4PSIwIiB4bWxuczpzYW1scD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnByb3RvY29sIj48c2FtbDpJc3N1ZXIgeG1sbnM6c2FtbD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFzc2VydGlvbiI&#x2b;aHR0cHM6Ly9teTQyODEwMC5zNGhhbmEuY2xvdWQuc2FwPC9zYW1sOklzc3Vlcj48ZHM6U2lnbmF0dXJlIHhtbG5zOmRzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjIj48ZHM6U2lnbmVkSW5mbz48ZHM6Q2Fub25pY2FsaXphdGlvbk1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvMTAveG1sLWV4Yy1jMTRuIyIvPjxkczpTaWduYXR1cmVNZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjcnNhLXNoYTEiLz48ZHM6UmVmZXJlbmNlIFVSST0iI1NmYTE2M2ViZC1kOWVlLTFmZTEtYTU5OS1jOWQ3MmEzOTZmNmUiPjxkczpUcmFuc2Zvcm1zPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjZW52ZWxvcGVkLXNpZ25hdHVyZSIvPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzEwL3htbC1leGMtYzE0biMiLz48L2RzOlRyYW5zZm9ybXM&#x2b;PGRzOkRpZ2VzdE1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyNzaGExIi8&#x2b;PGRzOkRpZ2VzdFZhbHVlPkUzMGUxK0lab01zdW91bXVvNFRUdDVHb3UrZz08L2RzOkRpZ2VzdFZhbHVlPjwvZHM6UmVmZXJlbmNlPjwvZHM6U2lnbmVkSW5mbz48ZHM6U2lnbmF0dXJlVmFsdWU&#x2b;VExwRUxZY3crbkhzRHdoQmlBdlVJT01LU0Z2OUZiaGRoZ3pxN1VqL2NueW9pdVloQit3QXBMOVVGeG05TlNuV0o0V1Bva0kxNi8xSApFK1VaQkhGMXRtc1BaQ1lrLzI3Q1hBazVsMlY2bnllQStVOXpWYlgzSS9FYUVqK2xlVVYzcTBOYTJJOU1zQTcxeThDbFdpZzB6YnA4CmRiQTg5Z3pRSXl5OFhEUXZtanF2di9CaS9xcHNTUC9YM1JMSjNXQVo3bEtqTFlJSVBoV1BQV3JyL214RWcxcjhIRElxNkt4ZStSRG0KT1hISWJwdFdCVDF4bTJnZVp0Vi9kRTFLUUJBT1JUUU52b2hRcGd3VVFCajBpdFFLWkgxdjVDaksxcjhVNExaWm41SjcvSVJZVGhOYwpvSm0xakZPL1NiemlicWZUTDhWRnlTZTJxM0hMZWIrc0hLL3NubEV0VjBFUTE3ZnhLTzlVa2VxSGVNRVozM1VxNmpWMFNLc09xdmVpCklTN2xTWmxHWCt5d0o1Q01VSERnYWw2YlFldDVYMTVDR0pmYkVOdEEvdG5DWFJGVGhHWXZhZnMycUxtazZBUm5YOGtESitvZVRIenYKTW5SZHlSSFhwSjlXYlFsU1J2MG02alU4aEJ4czR6V0lyNjBsRFczajBVVk1zcHBUY2hOMzhCbWI8L2RzOlNpZ25hdHVyZVZhbHVlPjwvZHM6U2lnbmF0dXJlPjwvc2FtbHA6QXV0aG5SZXF1ZXN0Pg&#x3d;&#x3d;"><input type="hidden" name="RelayState" value="oucfarwtebdodzeeorferoavzzoczdxsatzwfwe"><noscript><input type="submit" value="Continue"></noscript></form></body></html>
```