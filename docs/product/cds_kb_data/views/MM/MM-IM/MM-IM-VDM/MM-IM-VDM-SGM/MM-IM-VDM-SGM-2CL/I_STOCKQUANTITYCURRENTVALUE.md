---
name: I_STOCKQUANTITYCURRENTVALUE
description: "This CDS view provides the prerequisites for answering the following business question: What is the current material stock quantity and the current material stock value for a particular stock where \"the stock value is valuated\" by the price at period end?"
app_component: MM-IM-VDM-SGM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOCKQUANTITYCURRENTVALUE')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business question: What is the current material stock quantity and the current material stock value for a particular stock where \"the stock value is valuated\" by the price at period end?"
semantic_vi: "I_STOCKQUANTITYCURRENTVALUE — CDS view giao diện dựa trên I_STOCKQUANTITYCURRENTVALUE."
keywords:
  - "stockquantitycurrentvalue"
  - "+escape(url)+&quot"
  - "secure"
  - "partitioned&quot"
tags:
  - MM
  - bo:inventory
  - component:MM-IM-VDM-SGM-2CL
  - interface-view
  - lob:sourcing & procurement
  - material
  - MM-IM
  - MM-IM-VDM
  - MM-IM-VDM-SGM
  - MM-IM-VDM-SGM-2CL
  - stock
---
# I_STOCKQUANTITYCURRENTVALUE

**This CDS view provides the prerequisites for answering the following business question: What is the current material stock quantity and the current material stock value for a particular stock where "the stock value is valuated" by the price at period end?**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-SGM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOCKQUANTITYCURRENTVALUE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `+escape(url)+&quot` |  | |  |  |  |  |
| `secure` |  | |  |  |  |  |
| `partitioned&quot` |  | |  |  |  |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOCKQUANTITYCURRENTVALUE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOCKQUANTITYCURRENTVALUE')/$value)*

```abap
<html><head><meta http-equiv="cache-control" content="no-cache" /><meta http-equiv="pragma" content="no-cache" /></head><body onload="javascript:var url=window.location.hash;if(url&&(0!==url.length)){document.cookie=&quot;oucfarwtebdodzeeorferoavzzoesewuwbwefwe_anchor=&quot;+escape(url)+&quot;; path=/; secure; samesite=none; partitioned&quot;}document.forms[0].submit()"><noscript><p><strong>Note:</strong> Since your browser does notsupport JavaScript, you must press the Continuebutton once to</p></noscript><form method="POST" action="https://asymfskhn.accounts.cloud.sap/saml2/idp/sso/asymfskhn.accounts.ondemand.com"><input type="hidden" name="SAMLRequest" value="PHNhbWxwOkF1dGhuUmVxdWVzdCBJRD0iU2ZhMTYzZWJkLWQ5ZWUtMWZlMS1hNTk5LWUyZTY0NmI2ZWY2ZSIgVmVyc2lvbj0iMi4wIiBJc3N1ZUluc3RhbnQ9IjIwMjYtMDgtMTBUMTU6MjA6NTlaIiBEZXN0aW5hdGlvbj0iaHR0cHM6Ly9hc3ltZnNraG4uYWNjb3VudHMuY2xvdWQuc2FwL3NhbWwyL2lkcC9zc28vYXN5bWZza2huLmFjY291bnRzLm9uZGVtYW5kLmNvbSIgRm9yY2VBdXRobj0iZmFsc2UiIElzUGFzc2l2ZT0iZmFsc2UiIEFzc2VydGlvbkNvbnN1bWVyU2VydmljZUluZGV4PSIwIiB4bWxuczpzYW1scD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnByb3RvY29sIj48c2FtbDpJc3N1ZXIgeG1sbnM6c2FtbD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFzc2VydGlvbiI&#x2b;aHR0cHM6Ly9teTQyODEwMC5zNGhhbmEuY2xvdWQuc2FwPC9zYW1sOklzc3Vlcj48ZHM6U2lnbmF0dXJlIHhtbG5zOmRzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjIj48ZHM6U2lnbmVkSW5mbz48ZHM6Q2Fub25pY2FsaXphdGlvbk1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvMTAveG1sLWV4Yy1jMTRuIyIvPjxkczpTaWduYXR1cmVNZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjcnNhLXNoYTEiLz48ZHM6UmVmZXJlbmNlIFVSST0iI1NmYTE2M2ViZC1kOWVlLTFmZTEtYTU5OS1lMmU2NDZiNmVmNmUiPjxkczpUcmFuc2Zvcm1zPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjZW52ZWxvcGVkLXNpZ25hdHVyZSIvPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzEwL3htbC1leGMtYzE0biMiLz48L2RzOlRyYW5zZm9ybXM&#x2b;PGRzOkRpZ2VzdE1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyNzaGExIi8&#x2b;PGRzOkRpZ2VzdFZhbHVlPlhJbWFjQmtyakpLRDV0ek5SRkRBNENEeHo3QT08L2RzOkRpZ2VzdFZhbHVlPjwvZHM6UmVmZXJlbmNlPjwvZHM6U2lnbmVkSW5mbz48ZHM6U2lnbmF0dXJlVmFsdWU&#x2b;aVBNdUVvQ01xU0s4eWltZEZ3NTlaNUM5bmozMnFWbVNFZXFTVnVPN2R4SG1Edys5UkROQ0tTKzJQeTk3NDNUeXNXaDJZSG9KSi8yZwoxcy8rZktib3l6ai81TkY1Znl2UTZmVHJoVnEvcDVlTC9oMXlMTjdOOWdUK256d2V3K25xZnJJWkxWN2JvNWRGYU1SS0pMdVJVRWVvCi8vdlg4aDJSM1dHZHFWZTZoQURIL0o0a3dxRUtFdjczVFNiYjBPYmV5dXUwUG1wbDFSc2htT3ZMaUxDRG11dnRkRFZ3ZTd0RzNhb2YKaEpnRXAyQTBxQU1WcmRUOFZKM2FHQzc0U0RiNWZ3UVBnR3l3UkZZUjNJNUpvVFNucllsTXVybmVIclkyVTkyT1RjSXpNTjNibWpUeQpDSzdzWVhHMlRaaTZHbDk0SjVhWWxxRzhJRlBzT1BJNzk1MEVBSkpnVE1Jc3VaTFg5c09pOWVvQ1lEQXFWUkk5WkVpYURQQ0tHWDlsCjI1dVB6UzlNamJpK2pEQ2ZYUk41QmxPai93QWVsUERUMS95MWl3ZXU4b3FPR01CVzJMd3RhcUI0RG9NRHdVdTdIUmZGZkxDUzlEb2cKTUtEQjF1T2RDajN1eDN4dXVRS3VrRWlzK1lEck9mUVU5N1JPbXNpMEQ3QVNNVWdlOEF1V29HdVg8L2RzOlNpZ25hdHVyZVZhbHVlPjwvZHM6U2lnbmF0dXJlPjwvc2FtbHA6QXV0aG5SZXF1ZXN0Pg&#x3d;&#x3d;"><input type="hidden" name="RelayState" value="oucfarwtebdodzeeorferoavzzoesewuwbwefwe"><noscript><input type="submit" value="Continue"></noscript></form></body></html>
```