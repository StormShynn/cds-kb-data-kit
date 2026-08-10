---
name: I_RAPOSTINGITEMCUBE_2
description: "This CDS view provides the prerequisites for answering the following business questions: What amount is transferred for a different posting category in the document currency and company code currency? For example, recognized revenue, contract asset, and contract liability What amount is transferred for each condition type of each performance obligation in both the document currency and the company code currency? What amount is posted for each G/L account? What proportion of the transferred amount is for each business unit?"
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RAPOSTINGITEMCUBE_2')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What amount is transferred for a different posting category in the document currency and company code currency? For example, recognized revenue, contract asset, and contract liability What amount is transferred for each condition type of each performance obligation in both the document currency and the company code currency? What amount is posted for each G/L account? What proportion of the transferred amount is for each business unit?"
semantic_vi: "I_RAPOSTINGITEMCUBE_2 — CDS view giao diện dựa trên I_RAPOSTINGITEMCUBE_2."
keywords:
  - "Cube View: Disaggregation of Revenue"
  - "rapostingitemcube"
  - "+escape(url)+&quot"
  - "secure"
  - "partitioned&quot"
tags:
  - FI
  - account
  - bo:plant
  - component:FI-RA-2CL
  - contract
  - document
  - FI-RA
  - FI-RA-2CL
  - interface-view
  - lob:finance
  - bo:purchaseorder
---
# I_RAPOSTINGITEMCUBE_2

**This CDS view provides the prerequisites for answering the following business questions: What amount is transferred for a different posting category in the document currency and company code currency? For example, recognized revenue, contract asset, and contract liability What amount is transferred for each condition type of each performance obligation in both the document currency and the company code currency? What amount is posted for each G/L account? What proportion of the transferred amount is for each business unit?**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RAPOSTINGITEMCUBE_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `+escape(url)+&quot` |  | |  |  |  |  |
| `secure` |  | |  |  |  |  |
| `partitioned&quot` |  | |  |  |  |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RAPOSTINGITEMCUBE_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RAPOSTINGITEMCUBE_2')/$value)*

```abap
<html><head><meta http-equiv="cache-control" content="no-cache" /><meta http-equiv="pragma" content="no-cache" /></head><body onload="javascript:var url=window.location.hash;if(url&&(0!==url.length)){document.cookie=&quot;oucfarwtebdodzeeorferoavzzodzrwveqswfwe_anchor=&quot;+escape(url)+&quot;; path=/; secure; samesite=none; partitioned&quot;}document.forms[0].submit()"><noscript><p><strong>Note:</strong> Since your browser does notsupport JavaScript, you must press the Continuebutton once to</p></noscript><form method="POST" action="https://asymfskhn.accounts.cloud.sap/saml2/idp/sso/asymfskhn.accounts.ondemand.com"><input type="hidden" name="SAMLRequest" value="PHNhbWxwOkF1dGhuUmVxdWVzdCBJRD0iU2ZhMTYzZWJkLWQ5ZWUtMWZlMS1hNTk5LWQ5MTY1ZTAyNmY2ZSIgVmVyc2lvbj0iMi4wIiBJc3N1ZUluc3RhbnQ9IjIwMjYtMDgtMTBUMTU6MTg6NDhaIiBEZXN0aW5hdGlvbj0iaHR0cHM6Ly9hc3ltZnNraG4uYWNjb3VudHMuY2xvdWQuc2FwL3NhbWwyL2lkcC9zc28vYXN5bWZza2huLmFjY291bnRzLm9uZGVtYW5kLmNvbSIgRm9yY2VBdXRobj0iZmFsc2UiIElzUGFzc2l2ZT0iZmFsc2UiIEFzc2VydGlvbkNvbnN1bWVyU2VydmljZUluZGV4PSIwIiB4bWxuczpzYW1scD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnByb3RvY29sIj48c2FtbDpJc3N1ZXIgeG1sbnM6c2FtbD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFzc2VydGlvbiI&#x2b;aHR0cHM6Ly9teTQyODEwMC5zNGhhbmEuY2xvdWQuc2FwPC9zYW1sOklzc3Vlcj48ZHM6U2lnbmF0dXJlIHhtbG5zOmRzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjIj48ZHM6U2lnbmVkSW5mbz48ZHM6Q2Fub25pY2FsaXphdGlvbk1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvMTAveG1sLWV4Yy1jMTRuIyIvPjxkczpTaWduYXR1cmVNZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjcnNhLXNoYTEiLz48ZHM6UmVmZXJlbmNlIFVSST0iI1NmYTE2M2ViZC1kOWVlLTFmZTEtYTU5OS1kOTE2NWUwMjZmNmUiPjxkczpUcmFuc2Zvcm1zPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjZW52ZWxvcGVkLXNpZ25hdHVyZSIvPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzEwL3htbC1leGMtYzE0biMiLz48L2RzOlRyYW5zZm9ybXM&#x2b;PGRzOkRpZ2VzdE1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyNzaGExIi8&#x2b;PGRzOkRpZ2VzdFZhbHVlPmYvanRDRCtHQ2lPS2xNQ1lPWDN4V1ZHbHRucz08L2RzOkRpZ2VzdFZhbHVlPjwvZHM6UmVmZXJlbmNlPjwvZHM6U2lnbmVkSW5mbz48ZHM6U2lnbmF0dXJlVmFsdWU&#x2b;aExVeXg4T05uamN1YUVQMVY4N0ZIY0JDRmZDS2U5YTRtaXhON3VEVGpiUG9XV3phYU9jOFdNWXZPL2pxOEFuSDJtWlZUU1VsU1RtRgpMVStkZWZLa1NWM1VxaUhza2xwOE5Ycm0yZFcrcHlOYUdYR2hyM20rK1ArZTd1MVlXc0hET1NmdTlIcDhkdDgrQ0JqSWE0RzVoZ3RsCnJHM2FQYVZTUFFuZlpWcXEyQ1FvZWV5bWVuZUFVNGM0UzlScFRGdHJTaXlOOTd0TE8wWnpNeHROdk5XWWx5K3p3bnNSSzYzOE04UFUKNzlHNFdvcHhpTXV4OVBsR1hFb3licFJ4L05NZXg2OFpacjdhZWxoL2ZvUGp4WlVsdEhZOWtQUDF2dXZDdjY0TFc1ZXVFbVl1aWZJcQpRN2c4a2tDOXpTaXJLdHRaT0xRelkvMDk1WSs2MEhpU1JZSTF1MzNCRXdrcFp3d0U2aFV5MGNVbFQ2bHJ4MDZXd2QyaGtwUVk3MFpXCkw2eUpiVGYrZWlKM3IyQmRva295UE95L1A3S1FSQlJGTC9FRTNTLzJBaWNGVEdpUS9UTkYzVm1VYWh2UXorMVVPbzBwSkdlWm9neHQKNFpjMXg4SjljMnY1SlNzN1NaTkxiWjZNM010QUs3YVEyQTFKaE9WK2ZmWW9EOUFwcTRxakJVQTI8L2RzOlNpZ25hdHVyZVZhbHVlPjwvZHM6U2lnbmF0dXJlPjwvc2FtbHA6QXV0aG5SZXF1ZXN0Pg&#x3d;&#x3d;"><input type="hidden" name="RelayState" value="oucfarwtebdodzeeorferoavzzodzrwveqswfwe"><noscript><input type="submit" value="Continue"></noscript></form></body></html>
```