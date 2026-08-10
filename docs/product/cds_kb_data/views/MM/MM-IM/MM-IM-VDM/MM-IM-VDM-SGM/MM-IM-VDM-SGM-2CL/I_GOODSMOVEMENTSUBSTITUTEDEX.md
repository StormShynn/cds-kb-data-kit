---
name: I_GOODSMOVEMENTSUBSTITUTEDEX
description: "The system contains actual material document data and substitute data for material documents that have been archived. Both are necessary to calculate current stocks. This CDS view is used for data extraction of the substitute material document data and should be used in combination with the CDS view I_GoodsMovementDocumentDEX, for actual material document data, so that stocks can be calculated. You may build your own BW content based on the data provided by this view. This CDS view provides the data to answer the following business questions: Which material has been posted to which stock type? Which material has been posted to which special stock type and to which reference object? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: MM-IM-VDM-SGM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GOODSMOVEMENTSUBSTITUTEDEX')/$value
semantic_en: "The system contains actual material document data and substitute data for material documents that have been archived. Both are necessary to calculate current stocks. This CDS view is used for data extraction of the substitute material document data and should be used in combination with the CDS view I_GoodsMovementDocumentDEX, for actual material document data, so that stocks can be calculated. You may build your own BW content based on the data provided by this view. This CDS view provides the data to answer the following business questions: Which material has been posted to which stock type? Which material has been posted to which special stock type and to which reference object? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "I_GOODSMOVEMENTSUBSTITUTEDEX — CDS view giao diện dựa trên I_GOODSMOVEMENTSUBSTITUTEDEX."
keywords:
  - "goodsmovementsubstitutedex"
  - "+escape(url)+&quot"
  - "secure"
  - "partitioned&quot"
tags:
  - MM
  - bo:companycode
  - component:MM-IM-VDM-SGM-2CL
  - document
  - interface-view
  - lob:sourcing & procurement
  - material
  - MM-IM
  - MM-IM-VDM
  - MM-IM-VDM-SGM
  - MM-IM-VDM-SGM-2CL
  - stock
---
# I_GOODSMOVEMENTSUBSTITUTEDEX

**The system contains actual material document data and substitute data for material documents that have been archived. Both are necessary to calculate current stocks. This CDS view is used for data extraction of the substitute material document data and should be used in combination with the CDS view I_GoodsMovementDocumentDEX, for actual material document data, so that stocks can be calculated. You may build your own BW content based on the data provided by this view. This CDS view provides the data to answer the following business questions: Which material has been posted to which stock type? Which material has been posted to which special stock type and to which reference object? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-SGM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GOODSMOVEMENTSUBSTITUTEDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `+escape(url)+&quot` |  | |  |  |  |  |
| `secure` |  | |  |  |  |  |
| `partitioned&quot` |  | |  |  |  |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GOODSMOVEMENTSUBSTITUTEDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GOODSMOVEMENTSUBSTITUTEDEX')/$value)*

```abap
<html><head><meta http-equiv="cache-control" content="no-cache" /><meta http-equiv="pragma" content="no-cache" /></head><body onload="javascript:var url=window.location.hash;if(url&&(0!==url.length)){document.cookie=&quot;oucfarwtebdodzeeorferoavzzocfuecqfaafwe_anchor=&quot;+escape(url)+&quot;; path=/; secure; samesite=none; partitioned&quot;}document.forms[0].submit()"><noscript><p><strong>Note:</strong> Since your browser does notsupport JavaScript, you must press the Continuebutton once to</p></noscript><form method="POST" action="https://asymfskhn.accounts.cloud.sap/saml2/idp/sso/asymfskhn.accounts.ondemand.com"><input type="hidden" name="SAMLRequest" value="PHNhbWxwOkF1dGhuUmVxdWVzdCBJRD0iU2ZhMTYzZWJkLWQ5ZWUtMWZlMS1hNTk5LWNmNGVjMGZhYWY2ZSIgVmVyc2lvbj0iMi4wIiBJc3N1ZUluc3RhbnQ9IjIwMjYtMDgtMTBUMTU6MTY6MzZaIiBEZXN0aW5hdGlvbj0iaHR0cHM6Ly9hc3ltZnNraG4uYWNjb3VudHMuY2xvdWQuc2FwL3NhbWwyL2lkcC9zc28vYXN5bWZza2huLmFjY291bnRzLm9uZGVtYW5kLmNvbSIgRm9yY2VBdXRobj0iZmFsc2UiIElzUGFzc2l2ZT0iZmFsc2UiIEFzc2VydGlvbkNvbnN1bWVyU2VydmljZUluZGV4PSIwIiB4bWxuczpzYW1scD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnByb3RvY29sIj48c2FtbDpJc3N1ZXIgeG1sbnM6c2FtbD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFzc2VydGlvbiI&#x2b;aHR0cHM6Ly9teTQyODEwMC5zNGhhbmEuY2xvdWQuc2FwPC9zYW1sOklzc3Vlcj48ZHM6U2lnbmF0dXJlIHhtbG5zOmRzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjIj48ZHM6U2lnbmVkSW5mbz48ZHM6Q2Fub25pY2FsaXphdGlvbk1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvMTAveG1sLWV4Yy1jMTRuIyIvPjxkczpTaWduYXR1cmVNZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjcnNhLXNoYTEiLz48ZHM6UmVmZXJlbmNlIFVSST0iI1NmYTE2M2ViZC1kOWVlLTFmZTEtYTU5OS1jZjRlYzBmYWFmNmUiPjxkczpUcmFuc2Zvcm1zPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjZW52ZWxvcGVkLXNpZ25hdHVyZSIvPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzEwL3htbC1leGMtYzE0biMiLz48L2RzOlRyYW5zZm9ybXM&#x2b;PGRzOkRpZ2VzdE1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyNzaGExIi8&#x2b;PGRzOkRpZ2VzdFZhbHVlPlpnY0I0STF4KzVvekFhZDg3WHdLQWQySm9aUT08L2RzOkRpZ2VzdFZhbHVlPjwvZHM6UmVmZXJlbmNlPjwvZHM6U2lnbmVkSW5mbz48ZHM6U2lnbmF0dXJlVmFsdWU&#x2b;WFYxUERiYlJiblpnMjNlS2N4N0RtR1ZsMjNZem0rNyt6Si9MNDJsa2k1YU9xUnF5OGw2cVZHYllrSkpSNm5Tb3ZBazFxQkZlV1IyMQpldXRBdkZPaVo4WGFZOWNnMTQ0SFIyQVFsamRVVHhaVVlKTllENnJtbGRGRlhuKzl3cDVQYktPdGhVWTR4YUZjNjFxTEcxbldjWnUwCi9iZW9JTFdZU2lYTGFsYVJjdzRmYkJaajI5dUh2SmROSzZTSk9jOGI2NDZGYlJVc3ZzdUhuQ290cUxlUmxra2xCN3FubzczMlBxckUKRno2NlE2a1h4Z0lPWit5SVlkUlg5MjZVV0kyaTZ6bjBBMEFBRkxIcnRlSWp4NTB0MDIrSmp6L3lvQ0NIRFB6SHFyOEF1c2duTXE0YgpWcFFENVovTGZuZGRmTHJONWNRZmIrU0xBU2ZtTXQvaUMyYm5Nd3Q2clRYVDU0eVhPVVFDTWNIVnBiVFhZZVBKbjJpR2FoNFNYSkwzClFydkRna1JnV05mSDZxZ0Uxbjl3VkpZdmM5SnNhZ29SN09hTVFpb0RZczNwbWlXK01xRFlXTCt0RWIwSkZoMFl5bWNkdGdMZ24wUkUKa0ZPaFpmMEozb21xL2U0aCthWEtwZ25mT1RJTCtsNHJyN0lTQWNEK2txMnVhQlYxYVZMVU16Y2w8L2RzOlNpZ25hdHVyZVZhbHVlPjwvZHM6U2lnbmF0dXJlPjwvc2FtbHA6QXV0aG5SZXF1ZXN0Pg&#x3d;&#x3d;"><input type="hidden" name="RelayState" value="oucfarwtebdodzeeorferoavzzocfuecqfaafwe"><noscript><input type="submit" value="Continue"></noscript></form></body></html>
```