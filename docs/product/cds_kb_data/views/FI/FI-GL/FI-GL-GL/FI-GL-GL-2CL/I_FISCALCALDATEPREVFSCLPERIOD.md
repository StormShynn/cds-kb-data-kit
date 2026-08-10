---
name: I_FISCALCALDATEPREVFSCLPERIOD
description: "This CDS view provides access both to the relevant fiscal calendar details of a fiscal year and a fiscal week in a fiscal year variant and to the details of the corresponding previous fiscal period. The most important attributes of business entities are included, such as fiscal year, fiscal quarter, fiscal period, fiscal week with the corresponding start and end date, but also the previous fiscal period together with the corresponding fiscal year with start and end date. This CDS view provides the prerequisites for answering the following business questions: What are the fiscal time frames of a calendar date? What is the previous fiscal period and the corresponding fiscal year of a calendar date?"
app_component: FI-GL-GL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FISCALCALDATEPREVFSCLPERIOD')/$value
semantic_en: "This CDS view provides access both to the relevant fiscal calendar details of a fiscal year and a fiscal week in a fiscal year variant and to the details of the corresponding previous fiscal period. The most important attributes of business entities are included, such as fiscal year, fiscal quarter, fiscal period, fiscal week with the corresponding start and end date, but also the previous fiscal period together with the corresponding fiscal year with start and end date. This CDS view provides the prerequisites for answering the following business questions: What are the fiscal time frames of a calendar date? What is the previous fiscal period and the corresponding fiscal year of a calendar date?"
semantic_vi: "I_FISCALCALDATEPREVFSCLPERIOD — CDS view giao diện dựa trên I_FISCALCALDATEPREVFSCLPERIOD."
keywords:
  - "fiscalcaldateprevfsclperiod"
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
# I_FISCALCALDATEPREVFSCLPERIOD

**This CDS view provides access both to the relevant fiscal calendar details of a fiscal year and a fiscal week in a fiscal year variant and to the details of the corresponding previous fiscal period. The most important attributes of business entities are included, such as fiscal year, fiscal quarter, fiscal period, fiscal week with the corresponding start and end date, but also the previous fiscal period together with the corresponding fiscal year with start and end date. This CDS view provides the prerequisites for answering the following business questions: What are the fiscal time frames of a calendar date? What is the previous fiscal period and the corresponding fiscal year of a calendar date?**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FISCALCALDATEPREVFSCLPERIOD')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `+escape(url)+&quot` |  | |  |  |  |  |
| `secure` |  | |  |  |  |  |
| `partitioned&quot` |  | |  |  |  |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FISCALCALDATEPREVFSCLPERIOD')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FISCALCALDATEPREVFSCLPERIOD')/$value)*

```abap
<html><head><meta http-equiv="cache-control" content="no-cache" /><meta http-equiv="pragma" content="no-cache" /></head><body onload="javascript:var url=window.location.hash;if(url&&(0!==url.length)){document.cookie=&quot;oucfarwtebdodzeeorferoavzzoccufauwwafwe_anchor=&quot;+escape(url)+&quot;; path=/; secure; samesite=none; partitioned&quot;}document.forms[0].submit()"><noscript><p><strong>Note:</strong> Since your browser does notsupport JavaScript, you must press the Continuebutton once to</p></noscript><form method="POST" action="https://asymfskhn.accounts.cloud.sap/saml2/idp/sso/asymfskhn.accounts.ondemand.com"><input type="hidden" name="SAMLRequest" value="PHNhbWxwOkF1dGhuUmVxdWVzdCBJRD0iU2ZhMTYzZWJkLWQ5ZWUtMWZlMS1hNTk5LWNjNGZhNDY2YWY2ZSIgVmVyc2lvbj0iMi4wIiBJc3N1ZUluc3RhbnQ9IjIwMjYtMDgtMTBUMTU6MTU6NTdaIiBEZXN0aW5hdGlvbj0iaHR0cHM6Ly9hc3ltZnNraG4uYWNjb3VudHMuY2xvdWQuc2FwL3NhbWwyL2lkcC9zc28vYXN5bWZza2huLmFjY291bnRzLm9uZGVtYW5kLmNvbSIgRm9yY2VBdXRobj0iZmFsc2UiIElzUGFzc2l2ZT0iZmFsc2UiIEFzc2VydGlvbkNvbnN1bWVyU2VydmljZUluZGV4PSIwIiB4bWxuczpzYW1scD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnByb3RvY29sIj48c2FtbDpJc3N1ZXIgeG1sbnM6c2FtbD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFzc2VydGlvbiI&#x2b;aHR0cHM6Ly9teTQyODEwMC5zNGhhbmEuY2xvdWQuc2FwPC9zYW1sOklzc3Vlcj48ZHM6U2lnbmF0dXJlIHhtbG5zOmRzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjIj48ZHM6U2lnbmVkSW5mbz48ZHM6Q2Fub25pY2FsaXphdGlvbk1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvMTAveG1sLWV4Yy1jMTRuIyIvPjxkczpTaWduYXR1cmVNZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjcnNhLXNoYTEiLz48ZHM6UmVmZXJlbmNlIFVSST0iI1NmYTE2M2ViZC1kOWVlLTFmZTEtYTU5OS1jYzRmYTQ2NmFmNmUiPjxkczpUcmFuc2Zvcm1zPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjZW52ZWxvcGVkLXNpZ25hdHVyZSIvPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzEwL3htbC1leGMtYzE0biMiLz48L2RzOlRyYW5zZm9ybXM&#x2b;PGRzOkRpZ2VzdE1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyNzaGExIi8&#x2b;PGRzOkRpZ2VzdFZhbHVlPk5JK2JkN1VxeXl5YlErWkhBNERIaEp4VHgrbz08L2RzOkRpZ2VzdFZhbHVlPjwvZHM6UmVmZXJlbmNlPjwvZHM6U2lnbmVkSW5mbz48ZHM6U2lnbmF0dXJlVmFsdWU&#x2b;Vy9OUGptKytJNlo2dm8zSGQ5NWRZOENRT0pVUWNRSFlvTVdqYnphZ0xVS2kvUUdjV3JOSys5dkV2VGRURzRrUUJ5RzYvUTZQV3UzRQpxM0NwdFBjVjlxTWsrN1BWcm9EVmtJUXB0TlVxQVpkM3dDbTYzQ0h6RXdsT3JBNzRHbDJuQXpDczA3TjdNR0I3cEw4KzZudFlpcEs3ClNYdnZ0aWRHUktud2lWc0FGZmxzWEkrT3VCdFdLWGQwanJnVE9hWnBzTWxyenRmUmt0UC9oQmN3ZjZGNis4RnFtK0RPV1BSNkdCTEYKY2Q1M2x1UGsrb1IvZTBBRDU5RHFSRVZ1Q3VsVlVtKzBwMUZFL2pJcThUTG5WNXd6N09hQXQrcEoxc1JCQzlWNXBWYnhqdGk0bTdhYQpaSzlEekxOcU0rbm9NYU05MmRIcEpBMnlPTHJqMWphYVBBQ3E0N1diSXJLR0NkMW9CUEpkd3poVG5xREp1RmNwMllNa1YxUFEvQkhxClpNdmZmOVZsVDVUTDRHQ01MTXJnNlZqVlVSbDcrdTFtRUpVZjlPcWYxbUVzbjAzTkh5eDdjR0RHckp2blV1V1hGTU9ZdVNhRFM1ZmwKUDVBUmxvSXZNS1NzcXVPQUFOVFB0NkFkM3lUOXlVem1CeXN0d2NTYklEeHl5a3ZKRFR5QmVERXY8L2RzOlNpZ25hdHVyZVZhbHVlPjwvZHM6U2lnbmF0dXJlPjwvc2FtbHA6QXV0aG5SZXF1ZXN0Pg&#x3d;&#x3d;"><input type="hidden" name="RelayState" value="oucfarwtebdodzeeorferoavzzoccufauwwafwe"><noscript><input type="submit" value="Continue"></noscript></form></body></html>
```