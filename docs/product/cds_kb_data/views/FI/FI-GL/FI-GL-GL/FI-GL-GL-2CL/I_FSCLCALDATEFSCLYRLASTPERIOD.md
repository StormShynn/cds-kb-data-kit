---
name: I_FSCLCALDATEFSCLYRLASTPERIOD
description: "This CDS view provides the prerequisites for answering the following business question: What is the last fiscal period of the fiscal year on a key date for a company code and ledger? This CDS view can be used as a derivation entity."
app_component: FI-GL-GL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FSCLCALDATEFSCLYRLASTPERIOD')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business question: What is the last fiscal period of the fiscal year on a key date for a company code and ledger? This CDS view can be used as a derivation entity."
semantic_vi: "I_FSCLCALDATEFSCLYRLASTPERIOD — CDS view giao diện dựa trên I_FSCLCALDATEFSCLYRLASTPERIOD."
keywords:
  - "fsclcaldatefsclyrlastperiod"
  - "+escape(url)+&quot"
  - "secure"
  - "partitioned&quot"
tags:
  - FI
  - bo:companycode
  - component:FI-GL-GL-2CL
  - FI-GL
  - FI-GL-GL
  - FI-GL-GL-2CL
  - interface-view
  - lob:finance
---
# I_FSCLCALDATEFSCLYRLASTPERIOD

**This CDS view provides the prerequisites for answering the following business question: What is the last fiscal period of the fiscal year on a key date for a company code and ledger? This CDS view can be used as a derivation entity.**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FSCLCALDATEFSCLYRLASTPERIOD')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `+escape(url)+&quot` |  | |  |  |  |  |
| `secure` |  | |  |  |  |  |
| `partitioned&quot` |  | |  |  |  |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FSCLCALDATEFSCLYRLASTPERIOD')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FSCLCALDATEFSCLYRLASTPERIOD')/$value)*

```abap
<html><head><meta http-equiv="cache-control" content="no-cache" /><meta http-equiv="pragma" content="no-cache" /></head><body onload="javascript:var url=window.location.hash;if(url&&(0!==url.length)){document.cookie=&quot;oucfarwtebdodzeeorferoavzzocdadtwzxsfwe_anchor=&quot;+escape(url)+&quot;; path=/; secure; samesite=none; partitioned&quot;}document.forms[0].submit()"><noscript><p><strong>Note:</strong> Since your browser does notsupport JavaScript, you must press the Continuebutton once to</p></noscript><form method="POST" action="https://asymfskhn.accounts.cloud.sap/saml2/idp/sso/asymfskhn.accounts.ondemand.com"><input type="hidden" name="SAMLRequest" value="PHNhbWxwOkF1dGhuUmVxdWVzdCBJRD0iU2ZhMTYzZWJkLWQ5ZWUtMWZlMS1hNTk5LWNkYWQzNjk3MmY2ZSIgVmVyc2lvbj0iMi4wIiBJc3N1ZUluc3RhbnQ9IjIwMjYtMDgtMTBUMTU6MTY6MTVaIiBEZXN0aW5hdGlvbj0iaHR0cHM6Ly9hc3ltZnNraG4uYWNjb3VudHMuY2xvdWQuc2FwL3NhbWwyL2lkcC9zc28vYXN5bWZza2huLmFjY291bnRzLm9uZGVtYW5kLmNvbSIgRm9yY2VBdXRobj0iZmFsc2UiIElzUGFzc2l2ZT0iZmFsc2UiIEFzc2VydGlvbkNvbnN1bWVyU2VydmljZUluZGV4PSIwIiB4bWxuczpzYW1scD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnByb3RvY29sIj48c2FtbDpJc3N1ZXIgeG1sbnM6c2FtbD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFzc2VydGlvbiI&#x2b;aHR0cHM6Ly9teTQyODEwMC5zNGhhbmEuY2xvdWQuc2FwPC9zYW1sOklzc3Vlcj48ZHM6U2lnbmF0dXJlIHhtbG5zOmRzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjIj48ZHM6U2lnbmVkSW5mbz48ZHM6Q2Fub25pY2FsaXphdGlvbk1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvMTAveG1sLWV4Yy1jMTRuIyIvPjxkczpTaWduYXR1cmVNZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjcnNhLXNoYTEiLz48ZHM6UmVmZXJlbmNlIFVSST0iI1NmYTE2M2ViZC1kOWVlLTFmZTEtYTU5OS1jZGFkMzY5NzJmNmUiPjxkczpUcmFuc2Zvcm1zPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjZW52ZWxvcGVkLXNpZ25hdHVyZSIvPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzEwL3htbC1leGMtYzE0biMiLz48L2RzOlRyYW5zZm9ybXM&#x2b;PGRzOkRpZ2VzdE1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyNzaGExIi8&#x2b;PGRzOkRpZ2VzdFZhbHVlPmhxR2QzajBFQ3dJZmh5Q2hKR3R1UStHMmMwOD08L2RzOkRpZ2VzdFZhbHVlPjwvZHM6UmVmZXJlbmNlPjwvZHM6U2lnbmVkSW5mbz48ZHM6U2lnbmF0dXJlVmFsdWU&#x2b;RGs2Z3YvY3RERHF1b3IwbFJseWFrbkE3RlZmQmFISkNlL1liT0lTaHlwUC9QNkJHTEZmNkRQNEdhVlFFeUZ0NHNBZk1OUjZ2cHBvNgptUGVMeThqTFhWMTN6aktWS2RTOHQwam5BV1YzcWV0aHZqcmZmYVVReVliQ01WN0l5V0Q3YVV5ZW5aUTRzN2FuWDZwbnJyaW92YmZDCmpvZThlM1F6T05GamZ2MzhSZFZhMzNwclRrdWpMYXZLWU9JL0JmWG9hRTZ4anhHYjE1aitvWnd4NlZhNTdTRXdVZWFsNTZBOXB5aU4KUDBHemhRNVBTR3BqTnpEYTMvbXJFL3FxVXFjOU9EV0pPZTFlSlRQRmNIV3owYVo5cUtqRFV6Z2NqNTVJZ1dSbEJlK0k0NU9xMVBvSApFRjRpUHpyYy9WNG9xd2xUd0EraUk3U1dkTzJJV2FERVFmZ0ZMS1g5cnNrWjJoRG1IdHpvRytRdW4zQmVVYmpQbmpmalNrS3A2YlFaCit0SmlBOUlKWEJZdFNoemZYUG0xNG9kaXpyOWR0bEsyS2g5aS8vV2xvb2lFQUI0bWFUNVFMQ1d0eXVjbTlsVnhJdHZCVmtxQzc5MkQKWDFvQWJIVU5ld2N3M0JMVGg4L2xyTGpTdDZJdUhhSVY1WmZwbllyODNJeHN6MnNkRlRiV2s5c1A8L2RzOlNpZ25hdHVyZVZhbHVlPjwvZHM6U2lnbmF0dXJlPjwvc2FtbHA6QXV0aG5SZXF1ZXN0Pg&#x3d;&#x3d;"><input type="hidden" name="RelayState" value="oucfarwtebdodzeeorferoavzzocdadtwzxsfwe"><noscript><input type="submit" value="Continue"></noscript></form></body></html>
```