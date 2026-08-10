---
name: I_SETTLMTCAT
description: "This CDS view is used to select the settlement category. Domains: NAFKT Values: A - Final Settlement, Subsequent Settlement B - Correction Settlement, Subsequent Settlement C - Partial Settlement, Subsequent Settlement D - Pro Forma Invoice E - Expenses Settlement F - Material Adjustment G - Expenses Settlement H - Customer/Material Posting"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTCAT')/$value
semantic_en: "This CDS view is used to select the settlement category. Domains: NAFKT Values: A - Final Settlement, Subsequent Settlement B - Correction Settlement, Subsequent Settlement C - Partial Settlement, Subsequent Settlement D - Pro Forma Invoice E - Expenses Settlement F - Material Adjustment G - Expenses Settlement H - Customer/Material Posting"
semantic_vi: "I_SETTLMTCAT — CDS view giao diện dựa trên I_SETTLMTCAT."
keywords:
  - "settlmtcat"
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
# I_SETTLMTCAT

**This CDS view is used to select the settlement category. Domains: NAFKT Values: A - Final Settlement, Subsequent Settlement B - Correction Settlement, Subsequent Settlement C - Partial Settlement, Subsequent Settlement D - Pro Forma Invoice E - Expenses Settlement F - Material Adjustment G - Expenses Settlement H - Customer/Material Posting**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTCAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `+escape(url)+&quot` |  | |  |  |  |  |
| `secure` |  | |  |  |  |  |
| `partitioned&quot` |  | |  |  |  |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTCAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTCAT')/$value)*

```abap
<html><head><meta http-equiv="cache-control" content="no-cache" /><meta http-equiv="pragma" content="no-cache" /></head><body onload="javascript:var url=window.location.hash;if(url&&(0!==url.length)){document.cookie=&quot;oucfarwtebdodzeeorferoavzzodbdfffdssfwe_anchor=&quot;+escape(url)+&quot;; path=/; secure; samesite=none; partitioned&quot;}document.forms[0].submit()"><noscript><p><strong>Note:</strong> Since your browser does notsupport JavaScript, you must press the Continuebutton once to</p></noscript><form method="POST" action="https://asymfskhn.accounts.cloud.sap/saml2/idp/sso/asymfskhn.accounts.ondemand.com"><input type="hidden" name="SAMLRequest" value="PHNhbWxwOkF1dGhuUmVxdWVzdCBJRD0iU2ZhMTYzZWJkLWQ5ZWUtMWZlMS1hNTk5LWRiZGZmZmQyMmY2ZSIgVmVyc2lvbj0iMi4wIiBJc3N1ZUluc3RhbnQ9IjIwMjYtMDgtMTBUMTU6MTk6MjZaIiBEZXN0aW5hdGlvbj0iaHR0cHM6Ly9hc3ltZnNraG4uYWNjb3VudHMuY2xvdWQuc2FwL3NhbWwyL2lkcC9zc28vYXN5bWZza2huLmFjY291bnRzLm9uZGVtYW5kLmNvbSIgRm9yY2VBdXRobj0iZmFsc2UiIElzUGFzc2l2ZT0iZmFsc2UiIEFzc2VydGlvbkNvbnN1bWVyU2VydmljZUluZGV4PSIwIiB4bWxuczpzYW1scD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnByb3RvY29sIj48c2FtbDpJc3N1ZXIgeG1sbnM6c2FtbD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFzc2VydGlvbiI&#x2b;aHR0cHM6Ly9teTQyODEwMC5zNGhhbmEuY2xvdWQuc2FwPC9zYW1sOklzc3Vlcj48ZHM6U2lnbmF0dXJlIHhtbG5zOmRzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjIj48ZHM6U2lnbmVkSW5mbz48ZHM6Q2Fub25pY2FsaXphdGlvbk1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvMTAveG1sLWV4Yy1jMTRuIyIvPjxkczpTaWduYXR1cmVNZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjcnNhLXNoYTEiLz48ZHM6UmVmZXJlbmNlIFVSST0iI1NmYTE2M2ViZC1kOWVlLTFmZTEtYTU5OS1kYmRmZmZkMjJmNmUiPjxkczpUcmFuc2Zvcm1zPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjZW52ZWxvcGVkLXNpZ25hdHVyZSIvPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzEwL3htbC1leGMtYzE0biMiLz48L2RzOlRyYW5zZm9ybXM&#x2b;PGRzOkRpZ2VzdE1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyNzaGExIi8&#x2b;PGRzOkRpZ2VzdFZhbHVlPi9JUlI1UjZpNGQwYVM2ZU5vdXFFS0pIUThEcz08L2RzOkRpZ2VzdFZhbHVlPjwvZHM6UmVmZXJlbmNlPjwvZHM6U2lnbmVkSW5mbz48ZHM6U2lnbmF0dXJlVmFsdWU&#x2b;VG5iWmxSSXhwVER4T2NmdFNmWnd3bzRvalB1V3BzSjU0NldEY3VFSFJrVXo2b1FNdVNMOGtFczBTL1NscitrbStnWWczMGtvOUZFKwpPTldPZ3lhbXU1TThvbitNbExTR3h4Q2U1R0hWWnFIZUZ1eVNwODBkditOSk92SjZqc2ovS3AzM0YwQzZhS1I2dHMvVHNiWFlYTnhjCjBadmVoRW9kemFLbm1lSnZHQitnNlQ5VElXVkVsVnk4TTVpZ004MnB1S1Z6anoyaE5BVDZDWkhON3I5bU1iWnlqS0xzRlZ5RU96MlEKRFE3dEh4bUczTVJjRnpmdFBXS1B4OXJhOFBKa1FZejUreVJpcjRQQ3Q0YUdjbjdxdGZhVmNnZ25yKy90c2lHR3kzOWE0b1Nwd2p4UAptMG5oV0U3cHFTc0xKOW9KVHhyNXg0NHpEMEZzOUl3bzdNN2RoSG5pSkZ0MlBVYWphQ3ozN3VBQmo1OUF3di9qZ3Z2ZHowSEhyNnpHCjRvV1VvMXRIN2V5Z1FyVi93M0tKSlJuc1BhbXdLb1hqdCsrOGtkUXBPZjlpZmZDMDRvcktib1JPd0s4K29Rc0hFbFZGTlk5OW1XcGUKbjhtMm1rSjJWcTRNZTRhMlNZc3dPMGxhZVdNUTdPTEJTT2dlREtZMC84d0hSSytmUExIcHdrS0E8L2RzOlNpZ25hdHVyZVZhbHVlPjwvZHM6U2lnbmF0dXJlPjwvc2FtbHA6QXV0aG5SZXF1ZXN0Pg&#x3d;&#x3d;"><input type="hidden" name="RelayState" value="oucfarwtebdodzeeorferoavzzodbdfffdssfwe"><noscript><input type="submit" value="Continue"></noscript></form></body></html>
```