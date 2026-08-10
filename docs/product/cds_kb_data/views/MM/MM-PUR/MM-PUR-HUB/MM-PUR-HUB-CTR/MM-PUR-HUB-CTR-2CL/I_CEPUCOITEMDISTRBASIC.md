---
name: I_CEPUCOITEMDISTRBASIC
description: "This CDS view provides access to item distribution data for central purchase contracts. It exposes distribution-related information including distribution keys, target quantities and amounts, delivery addresses, and distribution status for contract items. This CDS view provides the data to answer the following business questions: What is the distribution breakdown for a specific central purchase contract item? Which distribution keys are assigned to contract items and what are their target quantities and amounts? What is the current status of item distributions across central purchase contracts? Which item distributions are blocked or deleted? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: MM-PUR-HUB-CTR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CEPUCOITEMDISTRBASIC')/$value
semantic_en: "This CDS view provides access to item distribution data for central purchase contracts. It exposes distribution-related information including distribution keys, target quantities and amounts, delivery addresses, and distribution status for contract items. This CDS view provides the data to answer the following business questions: What is the distribution breakdown for a specific central purchase contract item? Which distribution keys are assigned to contract items and what are their target quantities and amounts? What is the current status of item distributions across central purchase contracts? Which item distributions are blocked or deleted? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "I_CEPUCOITEMDISTRBASIC — CDS view giao diện dựa trên I_CEPUCOITEMDISTRBASIC."
keywords:
  - "cepucoitemdistrbasic"
  - "+escape(url)+&quot"
  - "secure"
  - "partitioned&quot"
tags:
  - MM
  - bo:companycode
  - component:MM-PUR-HUB-CTR-2CL
  - contract
  - delivery
  - interface-view
  - lob:sourcing & procurement
  - MM-PUR
  - MM-PUR-HUB
  - MM-PUR-HUB-CTR
  - MM-PUR-HUB-CTR-2CL
---
# I_CEPUCOITEMDISTRBASIC

**This CDS view provides access to item distribution data for central purchase contracts. It exposes distribution-related information including distribution keys, target quantities and amounts, delivery addresses, and distribution status for contract items. This CDS view provides the data to answer the following business questions: What is the distribution breakdown for a specific central purchase contract item? Which distribution keys are assigned to contract items and what are their target quantities and amounts? What is the current status of item distributions across central purchase contracts? Which item distributions are blocked or deleted? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CEPUCOITEMDISTRBASIC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `+escape(url)+&quot` |  | |  |  |  |  |
| `secure` |  | |  |  |  |  |
| `partitioned&quot` |  | |  |  |  |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CEPUCOITEMDISTRBASIC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CEPUCOITEMDISTRBASIC')/$value)*

```abap
<html><head><meta http-equiv="cache-control" content="no-cache" /><meta http-equiv="pragma" content="no-cache" /></head><body onload="javascript:var url=window.location.hash;if(url&&(0!==url.length)){document.cookie=&quot;oucfarwtebdodzeeorferoavzzocrcswbqdafwe_anchor=&quot;+escape(url)+&quot;; path=/; secure; samesite=none; partitioned&quot;}document.forms[0].submit()"><noscript><p><strong>Note:</strong> Since your browser does notsupport JavaScript, you must press the Continuebutton once to</p></noscript><form method="POST" action="https://asymfskhn.accounts.cloud.sap/saml2/idp/sso/asymfskhn.accounts.ondemand.com"><input type="hidden" name="SAMLRequest" value="PHNhbWxwOkF1dGhuUmVxdWVzdCBJRD0iU2ZhMTYzZWJkLWQ5ZWUtMWZlMS1hNTk5LWMxYzI2YjBkYWY2ZSIgVmVyc2lvbj0iMi4wIiBJc3N1ZUluc3RhbnQ9IjIwMjYtMDgtMTBUMTU6MTM6MzRaIiBEZXN0aW5hdGlvbj0iaHR0cHM6Ly9hc3ltZnNraG4uYWNjb3VudHMuY2xvdWQuc2FwL3NhbWwyL2lkcC9zc28vYXN5bWZza2huLmFjY291bnRzLm9uZGVtYW5kLmNvbSIgRm9yY2VBdXRobj0iZmFsc2UiIElzUGFzc2l2ZT0iZmFsc2UiIEFzc2VydGlvbkNvbnN1bWVyU2VydmljZUluZGV4PSIwIiB4bWxuczpzYW1scD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnByb3RvY29sIj48c2FtbDpJc3N1ZXIgeG1sbnM6c2FtbD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFzc2VydGlvbiI&#x2b;aHR0cHM6Ly9teTQyODEwMC5zNGhhbmEuY2xvdWQuc2FwPC9zYW1sOklzc3Vlcj48ZHM6U2lnbmF0dXJlIHhtbG5zOmRzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjIj48ZHM6U2lnbmVkSW5mbz48ZHM6Q2Fub25pY2FsaXphdGlvbk1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvMTAveG1sLWV4Yy1jMTRuIyIvPjxkczpTaWduYXR1cmVNZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjcnNhLXNoYTEiLz48ZHM6UmVmZXJlbmNlIFVSST0iI1NmYTE2M2ViZC1kOWVlLTFmZTEtYTU5OS1jMWMyNmIwZGFmNmUiPjxkczpUcmFuc2Zvcm1zPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjZW52ZWxvcGVkLXNpZ25hdHVyZSIvPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzEwL3htbC1leGMtYzE0biMiLz48L2RzOlRyYW5zZm9ybXM&#x2b;PGRzOkRpZ2VzdE1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyNzaGExIi8&#x2b;PGRzOkRpZ2VzdFZhbHVlPmx2bi9BTFdvckJHZkV2RDErcEdETm11MWhaZz08L2RzOkRpZ2VzdFZhbHVlPjwvZHM6UmVmZXJlbmNlPjwvZHM6U2lnbmVkSW5mbz48ZHM6U2lnbmF0dXJlVmFsdWU&#x2b;SmdNMms1aTJxa0lXMHdTVVNmYjVIbFlLQ1NDYTZ4dWZ2K2ovZ2tndndxbWpWaGJzbzRlN0pLeHR2dmpxTk9MRWJFUnl2bS9RYmttUQprNnJDQzJEY0VFTlpURDZVN1pSOVpzenlqRnoyUWsvbDJ1U21nQjU4WjhlcnRrRml3am9hbTArbjJXUGVuWXJNSm5NZm9QTXV0N1BVCklwd21CSjlrY0h5Z1FaRVViR2lzN3lCaGFRenpwZ0FIM2JGZGUrZm5WdTFiSk5BVUNCQjJjRDJRQlBDTmQ2WGxwWHNYaFhlRFpSTEcKZHVpV1NsK3VPcjdUOHhnT25TZGVGUnVaQlhiUFlscTI4NWdSOE1VZUp0b3VDZ2FEMlhuL1VnNU9DSk9aT2lVK0FqUDZ3bGx6MUZHeApMMUt0NXFIOGhqekJtcmpIWVZNTS9ZRFhNMVVTNGlMRFdYRHVQbEJyeGJkZ2YwenlIeUFkZHUxTmttTVo5MW9ET2h3Y2ZyS01PR1NHClBxNXBmYVFRREZjc0VjcVpqMWM1NEhvV09oeVpEWVJCZ1Q2ajVjaVBtYXVPSXlwM0pUVG9ZWGFaSmVJanE2eG5nNUFPT1lTU2FLMFYKbUFqaWFDTGhLWm9nNCs1K2NNaFNDMmlGSncwWXRFWXdBSXFxMTJjRW9iMmhCUFV6T29Kb29hdHU8L2RzOlNpZ25hdHVyZVZhbHVlPjwvZHM6U2lnbmF0dXJlPjwvc2FtbHA6QXV0aG5SZXF1ZXN0Pg&#x3d;&#x3d;"><input type="hidden" name="RelayState" value="oucfarwtebdodzeeorferoavzzocrcswbqdafwe"><noscript><input type="submit" value="Continue"></noscript></form></body></html>
```