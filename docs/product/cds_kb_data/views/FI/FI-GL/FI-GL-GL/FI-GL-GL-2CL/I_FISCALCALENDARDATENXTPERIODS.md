---
name: I_FISCALCALENDARDATENXTPERIODS
description: "This CDS view provides access both to the relevant fiscal calendar details of a fiscal year and a fiscal week in a fiscal year variant and to the details of the corresponding next fiscal time frames. The most important attributes of business entities are included, such as fiscal year, fiscal quarter, fiscal period, fiscal week with the corresponding start and end date, but also the next fiscal year, the next fiscal period (together with the corresponding fiscal year), the next fiscal quarter and the next fiscal week with start and end date. This CDS view provides the prerequisites for answering the following business questions: What are the fiscal time frames of a calendar date? What is the next fiscal time frames of a calendar date?"
app_component: FI-GL-GL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FISCALCALENDARDATENXTPERIODS')/$value
semantic_en: "This CDS view provides access both to the relevant fiscal calendar details of a fiscal year and a fiscal week in a fiscal year variant and to the details of the corresponding next fiscal time frames. The most important attributes of business entities are included, such as fiscal year, fiscal quarter, fiscal period, fiscal week with the corresponding start and end date, but also the next fiscal year, the next fiscal period (together with the corresponding fiscal year), the next fiscal quarter and the next fiscal week with start and end date. This CDS view provides the prerequisites for answering the following business questions: What are the fiscal time frames of a calendar date? What is the next fiscal time frames of a calendar date?"
semantic_vi: "I_FISCALCALENDARDATENXTPERIODS — CDS view giao diện dựa trên I_FISCALCALENDARDATENXTPERIODS."
keywords:
  - "fiscalcalendardatenxtperiods"
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
# I_FISCALCALENDARDATENXTPERIODS

**This CDS view provides access both to the relevant fiscal calendar details of a fiscal year and a fiscal week in a fiscal year variant and to the details of the corresponding next fiscal time frames. The most important attributes of business entities are included, such as fiscal year, fiscal quarter, fiscal period, fiscal week with the corresponding start and end date, but also the next fiscal year, the next fiscal period (together with the corresponding fiscal year), the next fiscal quarter and the next fiscal week with start and end date. This CDS view provides the prerequisites for answering the following business questions: What are the fiscal time frames of a calendar date? What is the next fiscal time frames of a calendar date?**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FISCALCALENDARDATENXTPERIODS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `+escape(url)+&quot` |  | |  |  |  |  |
| `secure` |  | |  |  |  |  |
| `partitioned&quot` |  | |  |  |  |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FISCALCALENDARDATENXTPERIODS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FISCALCALENDARDATENXTPERIODS')/$value)*

```abap
<html><head><meta http-equiv="cache-control" content="no-cache" /><meta http-equiv="pragma" content="no-cache" /></head><body onload="javascript:var url=window.location.hash;if(url&&(0!==url.length)){document.cookie=&quot;oucfarwtebdodzeeorferoavzzoccxzffeeefwe_anchor=&quot;+escape(url)+&quot;; path=/; secure; samesite=none; partitioned&quot;}document.forms[0].submit()"><noscript><p><strong>Note:</strong> Since your browser does notsupport JavaScript, you must press the Continuebutton once to</p></noscript><form method="POST" action="https://asymfskhn.accounts.cloud.sap/saml2/idp/sso/asymfskhn.accounts.ondemand.com"><input type="hidden" name="SAMLRequest" value="PHNhbWxwOkF1dGhuUmVxdWVzdCBJRD0iU2ZhMTYzZWJkLWQ5ZWUtMWZlMS1hNTk5LWNjNzlmZmVlZWY2ZSIgVmVyc2lvbj0iMi4wIiBJc3N1ZUluc3RhbnQ9IjIwMjYtMDgtMTBUMTU6MTU6NThaIiBEZXN0aW5hdGlvbj0iaHR0cHM6Ly9hc3ltZnNraG4uYWNjb3VudHMuY2xvdWQuc2FwL3NhbWwyL2lkcC9zc28vYXN5bWZza2huLmFjY291bnRzLm9uZGVtYW5kLmNvbSIgRm9yY2VBdXRobj0iZmFsc2UiIElzUGFzc2l2ZT0iZmFsc2UiIEFzc2VydGlvbkNvbnN1bWVyU2VydmljZUluZGV4PSIwIiB4bWxuczpzYW1scD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnByb3RvY29sIj48c2FtbDpJc3N1ZXIgeG1sbnM6c2FtbD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFzc2VydGlvbiI&#x2b;aHR0cHM6Ly9teTQyODEwMC5zNGhhbmEuY2xvdWQuc2FwPC9zYW1sOklzc3Vlcj48ZHM6U2lnbmF0dXJlIHhtbG5zOmRzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjIj48ZHM6U2lnbmVkSW5mbz48ZHM6Q2Fub25pY2FsaXphdGlvbk1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvMTAveG1sLWV4Yy1jMTRuIyIvPjxkczpTaWduYXR1cmVNZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjcnNhLXNoYTEiLz48ZHM6UmVmZXJlbmNlIFVSST0iI1NmYTE2M2ViZC1kOWVlLTFmZTEtYTU5OS1jYzc5ZmZlZWVmNmUiPjxkczpUcmFuc2Zvcm1zPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjZW52ZWxvcGVkLXNpZ25hdHVyZSIvPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzEwL3htbC1leGMtYzE0biMiLz48L2RzOlRyYW5zZm9ybXM&#x2b;PGRzOkRpZ2VzdE1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyNzaGExIi8&#x2b;PGRzOkRpZ2VzdFZhbHVlPlRjOUswYnkyekgrNGtJa2dGRGNwQTZsRHR3dz08L2RzOkRpZ2VzdFZhbHVlPjwvZHM6UmVmZXJlbmNlPjwvZHM6U2lnbmVkSW5mbz48ZHM6U2lnbmF0dXJlVmFsdWU&#x2b;UytDeHNpTktLWFZpQ0VzenRwUmVYMVhuWHZKTyszNGRtUWZwWUh3VHJML2xoSnpKZmFPUEVUMHNFeUM5QW9rY1d0VWdScmVLRC9CdQpQYnY3ZEZHVVNHOVJyTHh3Uk9ZaCtNaWdGdlBha2UyU3l6aDVrT2JkODdvOHY1QUNWU29BOVlobHB3WFlCQmZoc0hyeVJQek5jRmptCmR0dVZpdmVxWk1pZTVxMHpzWll3cGxweVVJdnNSd3Z5WlFCckxPVVZYUkdYSmJBZDFFaTl3dnNvZEQwM0duaTYzbjh3bE90cWdJYXAKQWxVbGF3bzlPc2hwMERhWWpmUU11akNEMnNJL09CSG1ERGMrbFgwNm1BQXlrbFZmSElMaFlWb2NkVzVHaExzQ25hRUZSc0pURjg3OQo2Nnhpd3ZWK0xiR2l5M3Bma1NoQ1dwUWNtUVV1ekNSc2ZsYTZJT2c1amJrdWR0MXFyaVlCcGptYUR4QXBmZ3d5SjE2aFpRL3pFT0ZPCjVjTi9SenFXNVJmaWRPdnVMQmFhdHJ5c0RxU1Nxc0ZaYWxEWW5nMElpTWx4MFpodTZqUGJWa3AzTWhKU0loMVdWTzgyTitIaE94ankKNTJBa1FLUE5rOTRORXVEc0ZnWkwzejB6K29TMDViTHp4cnY1c2VheTRXdFVTbVNxZ0NrbkN3ZVM8L2RzOlNpZ25hdHVyZVZhbHVlPjwvZHM6U2lnbmF0dXJlPjwvc2FtbHA6QXV0aG5SZXF1ZXN0Pg&#x3d;&#x3d;"><input type="hidden" name="RelayState" value="oucfarwtebdodzeeorferoavzzoccxzffeeefwe"><noscript><input type="submit" value="Continue"></noscript></form></body></html>
```