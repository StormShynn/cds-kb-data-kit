---
name: I_POINTOFSALEINBOUNDPROFILET
description: "This CDS view lets you access and manage point of sale inbound profile data. You can retrieve profile keys, their storage locations, and related texts, as well as navigate to associated settings for sales aggregation and sales-as-per-receipts processes. This helps you analyze and configure how inbound data from point of sale is handled in your system. This CDS view provides the data to answer the following business questions: Which point of sale inbound profiles exist in the system? What is the storage location assigned to each inbound profile, based on standard settings and sales aggregation or receipts settings? What multilingual descriptions or texts are available for each inbound profile? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-RFM-MD-SIT-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_POINTOFSALEINBOUNDPROFILET')/$value
semantic_en: "This CDS view lets you access and manage point of sale inbound profile data. You can retrieve profile keys, their storage locations, and related texts, as well as navigate to associated settings for sales aggregation and sales-as-per-receipts processes. This helps you analyze and configure how inbound data from point of sale is handled in your system. This CDS view provides the data to answer the following business questions: Which point of sale inbound profiles exist in the system? What is the storage location assigned to each inbound profile, based on standard settings and sales aggregation or receipts settings? What multilingual descriptions or texts are available for each inbound profile? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "I_POINTOFSALEINBOUNDPROFILET — CDS view giao diện dựa trên I_POINTOFSALEINBOUNDPROFILET."
keywords:
  - "pointofsaleinboundprofilet"
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
---
# I_POINTOFSALEINBOUNDPROFILET

**This CDS view lets you access and manage point of sale inbound profile data. You can retrieve profile keys, their storage locations, and related texts, as well as navigate to associated settings for sales aggregation and sales-as-per-receipts processes. This helps you analyze and configure how inbound data from point of sale is handled in your system. This CDS view provides the data to answer the following business questions: Which point of sale inbound profiles exist in the system? What is the storage location assigned to each inbound profile, based on standard settings and sales aggregation or receipts settings? What multilingual descriptions or texts are available for each inbound profile? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-SIT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_POINTOFSALEINBOUNDPROFILET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `+escape(url)+&quot` |  | |  |  |  |  |
| `secure` |  | |  |  |  |  |
| `partitioned&quot` |  | |  |  |  |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_POINTOFSALEINBOUNDPROFILET')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_POINTOFSALEINBOUNDPROFILET')/$value)*

```abap
<html><head><meta http-equiv="cache-control" content="no-cache" /><meta http-equiv="pragma" content="no-cache" /></head><body onload="javascript:var url=window.location.hash;if(url&&(0!==url.length)){document.cookie=&quot;oucfarwtebdodzeeorferoavzzodwqfsdrrwfwe_anchor=&quot;+escape(url)+&quot;; path=/; secure; samesite=none; partitioned&quot;}document.forms[0].submit()"><noscript><p><strong>Note:</strong> Since your browser does notsupport JavaScript, you must press the Continuebutton once to</p></noscript><form method="POST" action="https://asymfskhn.accounts.cloud.sap/saml2/idp/sso/asymfskhn.accounts.ondemand.com"><input type="hidden" name="SAMLRequest" value="PHNhbWxwOkF1dGhuUmVxdWVzdCBJRD0iU2ZhMTYzZWJkLWQ5ZWUtMWZlMS1hNTk5LWQ2MGYyZDExNmY2ZSIgVmVyc2lvbj0iMi4wIiBJc3N1ZUluc3RhbnQ9IjIwMjYtMDgtMTBUMTU6MTg6MDdaIiBEZXN0aW5hdGlvbj0iaHR0cHM6Ly9hc3ltZnNraG4uYWNjb3VudHMuY2xvdWQuc2FwL3NhbWwyL2lkcC9zc28vYXN5bWZza2huLmFjY291bnRzLm9uZGVtYW5kLmNvbSIgRm9yY2VBdXRobj0iZmFsc2UiIElzUGFzc2l2ZT0iZmFsc2UiIEFzc2VydGlvbkNvbnN1bWVyU2VydmljZUluZGV4PSIwIiB4bWxuczpzYW1scD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnByb3RvY29sIj48c2FtbDpJc3N1ZXIgeG1sbnM6c2FtbD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFzc2VydGlvbiI&#x2b;aHR0cHM6Ly9teTQyODEwMC5zNGhhbmEuY2xvdWQuc2FwPC9zYW1sOklzc3Vlcj48ZHM6U2lnbmF0dXJlIHhtbG5zOmRzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjIj48ZHM6U2lnbmVkSW5mbz48ZHM6Q2Fub25pY2FsaXphdGlvbk1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvMTAveG1sLWV4Yy1jMTRuIyIvPjxkczpTaWduYXR1cmVNZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjcnNhLXNoYTEiLz48ZHM6UmVmZXJlbmNlIFVSST0iI1NmYTE2M2ViZC1kOWVlLTFmZTEtYTU5OS1kNjBmMmQxMTZmNmUiPjxkczpUcmFuc2Zvcm1zPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjZW52ZWxvcGVkLXNpZ25hdHVyZSIvPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzEwL3htbC1leGMtYzE0biMiLz48L2RzOlRyYW5zZm9ybXM&#x2b;PGRzOkRpZ2VzdE1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyNzaGExIi8&#x2b;PGRzOkRpZ2VzdFZhbHVlPmFVaVFaYm5nbkt1bmNPY2R1Y0lYbWxkVzIvRT08L2RzOkRpZ2VzdFZhbHVlPjwvZHM6UmVmZXJlbmNlPjwvZHM6U2lnbmVkSW5mbz48ZHM6U2lnbmF0dXJlVmFsdWU&#x2b;a2crdVdMZnNybnpUREltb1A0Rzdiakt6TTlpcXhveGxIVUFVSlNyT3NiNVc4Mzg2dlNHWEJKZlpJOWtOYTl0SFgxSFBaK0xJZEhidwphMVR0Q0RMUUhLbXJjbVBmaXBKMGY3a1JGRWQzWmJITTg1NE56Z2lJanVVYXF5WGVHSnRESnl4WDRwUWROL0hRUkJhaDNDRGxPZWQyClVjd2dWUGxwemFESGRPRVBadko5dzkyQ0JUVnJPazF4SkIrUUNXaUlzYW9YVlpDdjNqMm12UEdxSVRoSENwdFRXdnpmVFhnQTlaTDYKWDNYWVR0U1R3RnQ3R3dkd05FanNTbGVGK01WckRLQmNXdG03SjVjOFJRaVdxZHBzTzkyZVRoUXJwU0k2ZzhldGpRMWZzcE1DVUhpMgpVellxZlc1OUtQSVkvVUs2dzU5Q0JxQ0pSTUJ3dGhod0JhcFFkWUlOMWE4N0pNU01JakpXSnBSazZtNGl4MklwRDMyNzk0VXh1amhICmlabW10ZUhmT05FUlBZM2RqVE0xWkZoNm1ZckRlRzh6TlN6dzJGcDZlVTYxaDh5TWZXa0Fwa0xtVGZWYXdWUFBlQmRleUVMRnZxcHQKVjU4NmlPOG1zSCsyMU5JNXc1Y3lJbFhvbXpXOXVYK0lLajJvVUxZaUtOWUZBb1RIOHdVYXIzWlU8L2RzOlNpZ25hdHVyZVZhbHVlPjwvZHM6U2lnbmF0dXJlPjwvc2FtbHA6QXV0aG5SZXF1ZXN0Pg&#x3d;&#x3d;"><input type="hidden" name="RelayState" value="oucfarwtebdodzeeorferoavzzodwqfsdrrwfwe"><noscript><input type="submit" value="Continue"></noscript></form></body></html>
```