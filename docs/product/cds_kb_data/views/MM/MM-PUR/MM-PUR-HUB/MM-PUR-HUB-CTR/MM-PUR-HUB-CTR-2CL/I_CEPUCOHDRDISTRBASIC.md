---
name: I_CEPUCOHDRDISTRBASIC
description: "This CDS view provides access to header-level distribution information for central purchase contracts. It exposes distribution keys, target quantities and amounts, organizational data, and partner information for contract distribution scenarios. This CDS view provides the data to answer the following business questions: What are the distribution keys and percentages defined for a central purchase contract? Which organizational units (purchasing organization, company code, plant) are assigned to each distribution? What are the target quantities and amounts allocated across different distribution keys? What is the current distribution status for each contract distribution? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: MM-PUR-HUB-CTR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CEPUCOHDRDISTRBASIC')/$value
semantic_en: "This CDS view provides access to header-level distribution information for central purchase contracts. It exposes distribution keys, target quantities and amounts, organizational data, and partner information for contract distribution scenarios. This CDS view provides the data to answer the following business questions: What are the distribution keys and percentages defined for a central purchase contract? Which organizational units (purchasing organization, company code, plant) are assigned to each distribution? What are the target quantities and amounts allocated across different distribution keys? What is the current distribution status for each contract distribution? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "I_CEPUCOHDRDISTRBASIC — CDS view giao diện dựa trên I_CEPUCOHDRDISTRBASIC."
keywords:
  - "cepucohdrdistrbasic"
  - "+escape(url)+&quot"
  - "secure"
  - "partitioned&quot"
tags:
  - MM
  - bo:companycode
  - component:MM-PUR-HUB-CTR-2CL
  - contract
  - interface-view
  - lob:sourcing & procurement
  - MM-PUR
  - MM-PUR-HUB
  - MM-PUR-HUB-CTR
  - MM-PUR-HUB-CTR-2CL
  - plan
---
# I_CEPUCOHDRDISTRBASIC

**This CDS view provides access to header-level distribution information for central purchase contracts. It exposes distribution keys, target quantities and amounts, organizational data, and partner information for contract distribution scenarios. This CDS view provides the data to answer the following business questions: What are the distribution keys and percentages defined for a central purchase contract? Which organizational units (purchasing organization, company code, plant) are assigned to each distribution? What are the target quantities and amounts allocated across different distribution keys? What is the current distribution status for each contract distribution? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CEPUCOHDRDISTRBASIC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `+escape(url)+&quot` |  | |  |  |  |  |
| `secure` |  | |  |  |  |  |
| `partitioned&quot` |  | |  |  |  |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CEPUCOHDRDISTRBASIC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CEPUCOHDRDISTRBASIC')/$value)*

```abap
<html><head><meta http-equiv="cache-control" content="no-cache" /><meta http-equiv="pragma" content="no-cache" /></head><body onload="javascript:var url=window.location.hash;if(url&&(0!==url.length)){document.cookie=&quot;oucfarwtebdodzeeorferoavzzocrzyraerefwe_anchor=&quot;+escape(url)+&quot;; path=/; secure; samesite=none; partitioned&quot;}document.forms[0].submit()"><noscript><p><strong>Note:</strong> Since your browser does notsupport JavaScript, you must press the Continuebutton once to</p></noscript><form method="POST" action="https://asymfskhn.accounts.cloud.sap/saml2/idp/sso/asymfskhn.accounts.ondemand.com"><input type="hidden" name="SAMLRequest" value="PHNhbWxwOkF1dGhuUmVxdWVzdCBJRD0iU2ZhMTYzZWJkLWQ5ZWUtMWZlMS1hNTk5LWMxOTgxYWUxZWY2ZSIgVmVyc2lvbj0iMi4wIiBJc3N1ZUluc3RhbnQ9IjIwMjYtMDgtMTBUMTU6MTM6MzNaIiBEZXN0aW5hdGlvbj0iaHR0cHM6Ly9hc3ltZnNraG4uYWNjb3VudHMuY2xvdWQuc2FwL3NhbWwyL2lkcC9zc28vYXN5bWZza2huLmFjY291bnRzLm9uZGVtYW5kLmNvbSIgRm9yY2VBdXRobj0iZmFsc2UiIElzUGFzc2l2ZT0iZmFsc2UiIEFzc2VydGlvbkNvbnN1bWVyU2VydmljZUluZGV4PSIwIiB4bWxuczpzYW1scD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnByb3RvY29sIj48c2FtbDpJc3N1ZXIgeG1sbnM6c2FtbD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFzc2VydGlvbiI&#x2b;aHR0cHM6Ly9teTQyODEwMC5zNGhhbmEuY2xvdWQuc2FwPC9zYW1sOklzc3Vlcj48ZHM6U2lnbmF0dXJlIHhtbG5zOmRzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjIj48ZHM6U2lnbmVkSW5mbz48ZHM6Q2Fub25pY2FsaXphdGlvbk1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvMTAveG1sLWV4Yy1jMTRuIyIvPjxkczpTaWduYXR1cmVNZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjcnNhLXNoYTEiLz48ZHM6UmVmZXJlbmNlIFVSST0iI1NmYTE2M2ViZC1kOWVlLTFmZTEtYTU5OS1jMTk4MWFlMWVmNmUiPjxkczpUcmFuc2Zvcm1zPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjZW52ZWxvcGVkLXNpZ25hdHVyZSIvPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzEwL3htbC1leGMtYzE0biMiLz48L2RzOlRyYW5zZm9ybXM&#x2b;PGRzOkRpZ2VzdE1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyNzaGExIi8&#x2b;PGRzOkRpZ2VzdFZhbHVlPnZXaVBEVHM3VG1JZDhOWU1WaXhLQ29KTlZuOD08L2RzOkRpZ2VzdFZhbHVlPjwvZHM6UmVmZXJlbmNlPjwvZHM6U2lnbmVkSW5mbz48ZHM6U2lnbmF0dXJlVmFsdWU&#x2b;ZjFocE5WV0txUEpNYmlPckJvNHEyc3NEU2VhbmxWbUJTVDFTcEc2QjFBK0lNc1VKaGlhTWVSeGhEdGQ4SHNONklLMUpxaU52Z24rRwppdUhmRG1VNmhlbFJIVytmc24xSG5EM05VQnJ0ZktFaFJoeXFlMms5ejhkbjFKU1pKM0tWZkMyTzl6cE9rWVh4dkJPWjRPZ2ZZZERlClNOWjZvbk5vRUV5SzRqbWtLOVg4RUtURm5KU3FOT1lXTWtVcVlPdGdKV3R4am9scThpSTBrUVdIcU1la2RIcmE2MW1hb3J0WEhLc0wKTUdBNURDZEtNMHU0dnY4WXg0YTY5R1kxMG9lcnpoM0t4MzVyb2xlc0Z4c0hDemxxVUlKQjdoekxDWlAwZGdraEtTbGhFTk5xVFVKSgp1RUxRdUp2WDFTWEU4MUJSZG51V3k3c0lDSmY4ZWhtTnpNS1pjQVVOMTdmSWsvb1ZNYy90dWdWemJUK294ZG00Z2c4WGpHdk9nbXdKCmNSMWkvVTRBdGZVdmhLWHd1aFZCQ3Y2b0RNZjFYdHA0eXRxcWJUM2NDelQzMWNoYVcrSGhheWQzNTlYVncvdHZDcnBhUEZxSkxNZFAKdE1JQ2VRd1YxS1pST1lrNnk3R3grcVkrSi9BTXBYdWM5cGREMzZiTTgzenVJSW1ieS9oZ29xS1A8L2RzOlNpZ25hdHVyZVZhbHVlPjwvZHM6U2lnbmF0dXJlPjwvc2FtbHA6QXV0aG5SZXF1ZXN0Pg&#x3d;&#x3d;"><input type="hidden" name="RelayState" value="oucfarwtebdodzeeorferoavzzocrzyraerefwe"><noscript><input type="submit" value="Continue"></noscript></form></body></html>
```