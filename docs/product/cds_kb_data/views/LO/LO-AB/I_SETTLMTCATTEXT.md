---
name: I_SETTLMTCATTEXT
description: "This CDS view is used to select the settlement category. Domains: NAFKT Values: A - Final Settlement, Subsequent Settlement B - Correction Settlement, Subsequent Settlement C - Partial Settlement, Subsequent Settlement D - Pro Forma Invoice E - Expenses Settlement F - Material Adjustment G - Expenses Settlement H - Customer/Material Posting"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTCATTEXT')/$value
semantic_en: "This CDS view is used to select the settlement category. Domains: NAFKT Values: A - Final Settlement, Subsequent Settlement B - Correction Settlement, Subsequent Settlement C - Partial Settlement, Subsequent Settlement D - Pro Forma Invoice E - Expenses Settlement F - Material Adjustment G - Expenses Settlement H - Customer/Material Posting"
semantic_vi: "I_SETTLMTCATTEXT — CDS view giao diện dựa trên I_SETTLMTCATTEXT."
keywords:
  - "settlmtcattext"
  - "+escape(url)+&quot"
  - "secure"
  - "partitioned&quot"
tags:
  - LO
  - bo:billingdocument
  - component:LO-AB
  - customer
  - interface-view
  - invoice
  - LO-AB
  - lob:logistics general
  - material
---
# I_SETTLMTCATTEXT

**This CDS view is used to select the settlement category. Domains: NAFKT Values: A - Final Settlement, Subsequent Settlement B - Correction Settlement, Subsequent Settlement C - Partial Settlement, Subsequent Settlement D - Pro Forma Invoice E - Expenses Settlement F - Material Adjustment G - Expenses Settlement H - Customer/Material Posting**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTCATTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `+escape(url)+&quot` |  | |  |  |  |  |
| `secure` |  | |  |  |  |  |
| `partitioned&quot` |  | |  |  |  |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTCATTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTCATTEXT')/$value)*

```abap
<html><head><meta http-equiv="cache-control" content="no-cache" /><meta http-equiv="pragma" content="no-cache" /></head><body onload="javascript:var url=window.location.hash;if(url&&(0!==url.length)){document.cookie=&quot;oucfarwtebdodzeeorferoavzzodcqxebxxwfwe_anchor=&quot;+escape(url)+&quot;; path=/; secure; samesite=none; partitioned&quot;}document.forms[0].submit()"><noscript><p><strong>Note:</strong> Since your browser does notsupport JavaScript, you must press the Continuebutton once to</p></noscript><form method="POST" action="https://asymfskhn.accounts.cloud.sap/saml2/idp/sso/asymfskhn.accounts.ondemand.com"><input type="hidden" name="SAMLRequest" value="PHNhbWxwOkF1dGhuUmVxdWVzdCBJRD0iU2ZhMTYzZWJkLWQ5ZWUtMWZlMS1hNTk5LWRjMDdlYjc3NmY2ZSIgVmVyc2lvbj0iMi4wIiBJc3N1ZUluc3RhbnQ9IjIwMjYtMDgtMTBUMTU6MTk6MjdaIiBEZXN0aW5hdGlvbj0iaHR0cHM6Ly9hc3ltZnNraG4uYWNjb3VudHMuY2xvdWQuc2FwL3NhbWwyL2lkcC9zc28vYXN5bWZza2huLmFjY291bnRzLm9uZGVtYW5kLmNvbSIgRm9yY2VBdXRobj0iZmFsc2UiIElzUGFzc2l2ZT0iZmFsc2UiIEFzc2VydGlvbkNvbnN1bWVyU2VydmljZUluZGV4PSIwIiB4bWxuczpzYW1scD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnByb3RvY29sIj48c2FtbDpJc3N1ZXIgeG1sbnM6c2FtbD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFzc2VydGlvbiI&#x2b;aHR0cHM6Ly9teTQyODEwMC5zNGhhbmEuY2xvdWQuc2FwPC9zYW1sOklzc3Vlcj48ZHM6U2lnbmF0dXJlIHhtbG5zOmRzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjIj48ZHM6U2lnbmVkSW5mbz48ZHM6Q2Fub25pY2FsaXphdGlvbk1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvMTAveG1sLWV4Yy1jMTRuIyIvPjxkczpTaWduYXR1cmVNZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjcnNhLXNoYTEiLz48ZHM6UmVmZXJlbmNlIFVSST0iI1NmYTE2M2ViZC1kOWVlLTFmZTEtYTU5OS1kYzA3ZWI3NzZmNmUiPjxkczpUcmFuc2Zvcm1zPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjZW52ZWxvcGVkLXNpZ25hdHVyZSIvPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzEwL3htbC1leGMtYzE0biMiLz48L2RzOlRyYW5zZm9ybXM&#x2b;PGRzOkRpZ2VzdE1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyNzaGExIi8&#x2b;PGRzOkRpZ2VzdFZhbHVlPjZTNFZZUjRFMmc1WWxuZ1VtTVhrODNGYmZDQT08L2RzOkRpZ2VzdFZhbHVlPjwvZHM6UmVmZXJlbmNlPjwvZHM6U2lnbmVkSW5mbz48ZHM6U2lnbmF0dXJlVmFsdWU&#x2b;QmUrSnNrTU52QXdSQm1yRk02RnRNM1hKUEVpY013RzdBaXZueG0yc3BUcVduaXZuZUR3QVlVMS9WTHJTbWR5YWkvdlo4NFU3SGY2bApEV1hGMlU2V2tKMlM3ZXRibFJtV05ET0lQSU5HSVNYRDluSzlkaSsyRkJaZzFYM2dvSVNHdzFWTWJrTjM3V0dTS2M0UGJsM1F5ZzlSCkdyRTFVRSt4S3RtNmd2Q0dnQWhONjlFZS9jQ1hMYWVldkptNjJJUVFZNzE3QldWRC9VUkhMRWp0YkhzQjN4OHFGV0pBYnpTS1ZYZlcKM3J1eURRUE9wSFcyRWlON3FGcC9oZ1FsQnBFbFBxSDlaTmYvaUVINkRpQjNCSzNLaEF5WmM1YTZxYmh1OFA1bXFqbVM5dXczT0M0SwpNN2lXVkp2bi9CYmUwRTV3MHdIRWxqdFJ2cEk0aWdYaElSdjJGY1J1bnlwaFZpbDZ3c2dWL1lJcTFsdmVGV0tyeldkRzdmby8wdWdJCjN6KzgzeDVFVG1ldURoM0N0VWVDTkJ1M2hvbjBOMkdCQ3ZYYmdBU3ZyeUtZWXRtZHk0ejJSUlRTWk9vWkh3d0N5dXVwK09venFaR1oKRFFHdnN4aVQxTk9VdWE2alpRc1BORFU2S3IrUHRyV3doRERiWnlkVnBMTG92Z0xqYktZM1pkSUo8L2RzOlNpZ25hdHVyZVZhbHVlPjwvZHM6U2lnbmF0dXJlPjwvc2FtbHA6QXV0aG5SZXF1ZXN0Pg&#x3d;&#x3d;"><input type="hidden" name="RelayState" value="oucfarwtebdodzeeorferoavzzodcqxebxxwfwe"><noscript><input type="submit" value="Continue"></noscript></form></body></html>
```