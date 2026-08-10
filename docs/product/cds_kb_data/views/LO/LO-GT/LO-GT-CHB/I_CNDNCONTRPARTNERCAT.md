---
name: I_CNDNCONTRPARTNERCAT
description: "This CDS view is used to select the partner category of a condition contract. The following fixed values are maintained: Values: C - Customer V - Supplier N - No Contract Partner P - Person This CDS view provides the prerequisites for answering the following business questions: Who is the partner of this condition contract?"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPARTNERCAT')/$value
semantic_en: "This CDS view is used to select the partner category of a condition contract. The following fixed values are maintained: Values: C - Customer V - Supplier N - No Contract Partner P - Person This CDS view provides the prerequisites for answering the following business questions: Who is the partner of this condition contract?"
semantic_vi: "I_CNDNCONTRPARTNERCAT — CDS view giao diện dựa trên I_CNDNCONTRPARTNERCAT."
keywords:
  - "cndncontrpartnercat"
  - "+escape(url)+&quot"
  - "secure"
  - "partitioned&quot"
tags:
  - LO
  - bo:businesspartner
  - component:LO-GT-CHB
  - contract
  - customer
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
  - supplier
---
# I_CNDNCONTRPARTNERCAT

**This CDS view is used to select the partner category of a condition contract. The following fixed values are maintained: Values: C - Customer V - Supplier N - No Contract Partner P - Person This CDS view provides the prerequisites for answering the following business questions: Who is the partner of this condition contract?**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPARTNERCAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `+escape(url)+&quot` |  | |  |  |  |  |
| `secure` |  | |  |  |  |  |
| `partitioned&quot` |  | |  |  |  |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPARTNERCAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPARTNERCAT')/$value)*

```abap
<html><head><meta http-equiv="cache-control" content="no-cache" /><meta http-equiv="pragma" content="no-cache" /></head><body onload="javascript:var url=window.location.hash;if(url&&(0!==url.length)){document.cookie=&quot;oucfarwtebdodzeeorferoavzzocurcqdexefwe_anchor=&quot;+escape(url)+&quot;; path=/; secure; samesite=none; partitioned&quot;}document.forms[0].submit()"><noscript><p><strong>Note:</strong> Since your browser does notsupport JavaScript, you must press the Continuebutton once to</p></noscript><form method="POST" action="https://asymfskhn.accounts.cloud.sap/saml2/idp/sso/asymfskhn.accounts.ondemand.com"><input type="hidden" name="SAMLRequest" value="PHNhbWxwOkF1dGhuUmVxdWVzdCBJRD0iU2ZhMTYzZWJkLWQ5ZWUtMWZlMS1hNTk5LWM0MWMwZGU3ZWY2ZSIgVmVyc2lvbj0iMi4wIiBJc3N1ZUluc3RhbnQ9IjIwMjYtMDgtMTBUMTU6MTQ6MDZaIiBEZXN0aW5hdGlvbj0iaHR0cHM6Ly9hc3ltZnNraG4uYWNjb3VudHMuY2xvdWQuc2FwL3NhbWwyL2lkcC9zc28vYXN5bWZza2huLmFjY291bnRzLm9uZGVtYW5kLmNvbSIgRm9yY2VBdXRobj0iZmFsc2UiIElzUGFzc2l2ZT0iZmFsc2UiIEFzc2VydGlvbkNvbnN1bWVyU2VydmljZUluZGV4PSIwIiB4bWxuczpzYW1scD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnByb3RvY29sIj48c2FtbDpJc3N1ZXIgeG1sbnM6c2FtbD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFzc2VydGlvbiI&#x2b;aHR0cHM6Ly9teTQyODEwMC5zNGhhbmEuY2xvdWQuc2FwPC9zYW1sOklzc3Vlcj48ZHM6U2lnbmF0dXJlIHhtbG5zOmRzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjIj48ZHM6U2lnbmVkSW5mbz48ZHM6Q2Fub25pY2FsaXphdGlvbk1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvMTAveG1sLWV4Yy1jMTRuIyIvPjxkczpTaWduYXR1cmVNZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjcnNhLXNoYTEiLz48ZHM6UmVmZXJlbmNlIFVSST0iI1NmYTE2M2ViZC1kOWVlLTFmZTEtYTU5OS1jNDFjMGRlN2VmNmUiPjxkczpUcmFuc2Zvcm1zPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjZW52ZWxvcGVkLXNpZ25hdHVyZSIvPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzEwL3htbC1leGMtYzE0biMiLz48L2RzOlRyYW5zZm9ybXM&#x2b;PGRzOkRpZ2VzdE1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyNzaGExIi8&#x2b;PGRzOkRpZ2VzdFZhbHVlPmtzUTZ1SVVrWFNDMC9md0ZSWWRJdkx2S21iYz08L2RzOkRpZ2VzdFZhbHVlPjwvZHM6UmVmZXJlbmNlPjwvZHM6U2lnbmVkSW5mbz48ZHM6U2lnbmF0dXJlVmFsdWU&#x2b;YlJvYSs0SFlTajNVVzhKZFk0UTMzN2k1NTdBR3RZeng3dEpUbE9vRk1Wd3ZtYWRLa1FBaU9vdGNkTjQyREJVQXhoUmxMQlhCMlJyMQpoejlBaUhrL3l4TkIvWEZBNDhFMmt0eDh6N0wwbHlMaVJGOXRjTHlpWmYvOW9RREpxUXEza2JBbE02eVllcFlVVnlLaGlMNy95MEErCitsLzFhWkoyWUdVR1A5dEc0WEF6aE1Eb2ZTVStHcEZZWGU5dE50aWtvbFhQZ0ZBZU9HeHpDNksvUU1hd1ZiTFZrNTh6RlpQVU5ZU2EKOVl5bnRzM3hGTi9LRklwa1ZKQWV4WlpnK2JxRFp0QytuMWU3WGF1S1pYTE1DRU9TN3FvWmxLcEtidDdnMmlVQlJZa1labWZ0cy9GZwpyaFN2ZEhnTVBjMXdndENvTGZubk9PRlp1ajE0YWJsZUZEc3dhUUt4Kzh5YXg0L0Rlc25CWFJrcUJ1elQ4bit6UE92L2R0UHY0Ukk2CnZVblp0Q0c2aVFObkZaKzY0S3hONVRERmxNQmtvdnpMcGNpczcybzUrR29oclVUNnhUQ1B1bDhJandhZGtxUEhOaURCb3VXN1A3TVoKemJQZEVUdXFXeFpkeXV6VlpabVNpY0VpWDJ5TVlFa3FPejExQzRLOTRheUZqNWlPdlZZaExzZjM8L2RzOlNpZ25hdHVyZVZhbHVlPjwvZHM6U2lnbmF0dXJlPjwvc2FtbHA6QXV0aG5SZXF1ZXN0Pg&#x3d;&#x3d;"><input type="hidden" name="RelayState" value="oucfarwtebdodzeeorferoavzzocurcqdexefwe"><noscript><input type="submit" value="Continue"></noscript></form></body></html>
```