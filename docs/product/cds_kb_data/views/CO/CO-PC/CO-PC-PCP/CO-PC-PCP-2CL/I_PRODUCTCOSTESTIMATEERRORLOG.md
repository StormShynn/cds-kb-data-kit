---
name: I_PRODUCTCOSTESTIMATEERRORLOG
description: "This CDS view provides information of system messages that were raised during cost calculation. Combined with the product costing header data, the error messages can indicate situations in which calculated prices deviate from the expected ones or could not be calculated. This view can be used for data extraction."
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTCOSTESTIMATEERRORLOG')/$value
semantic_en: "This CDS view provides information of system messages that were raised during cost calculation. Combined with the product costing header data, the error messages can indicate situations in which calculated prices deviate from the expected ones or could not be calculated. This view can be used for data extraction."
semantic_vi: "I_PRODUCTCOSTESTIMATEERRORLOG — CDS view giao diện dựa trên I_PRODUCTCOSTESTIMATEERRORLOG."
keywords:
  - "productcostestimateerrorlog"
  - "+escape(url)+&quot"
  - "secure"
  - "partitioned&quot"
tags:
  - CO
  - bo:material
  - CO-PC
  - CO-PC-PCP
  - CO-PC-PCP-2CL
  - component:CO-PC-PCP-2CL
  - interface-view
  - lob:controlling
  - product
---
# I_PRODUCTCOSTESTIMATEERRORLOG

**This CDS view provides information of system messages that were raised during cost calculation. Combined with the product costing header data, the error messages can indicate situations in which calculated prices deviate from the expected ones or could not be calculated. This view can be used for data extraction.**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTCOSTESTIMATEERRORLOG')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `+escape(url)+&quot` |  | |  |  |  |  |
| `secure` |  | |  |  |  |  |
| `partitioned&quot` |  | |  |  |  |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTCOSTESTIMATEERRORLOG')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTCOSTESTIMATEERRORLOG')/$value)*

```abap
<html><head><meta http-equiv="cache-control" content="no-cache" /><meta http-equiv="pragma" content="no-cache" /></head><body onload="javascript:var url=window.location.hash;if(url&&(0!==url.length)){document.cookie=&quot;oucfarwtebdodzeeorferoavzzodxzxzdrdefwe_anchor=&quot;+escape(url)+&quot;; path=/; secure; samesite=none; partitioned&quot;}document.forms[0].submit()"><noscript><p><strong>Note:</strong> Since your browser does notsupport JavaScript, you must press the Continuebutton once to</p></noscript><form method="POST" action="https://asymfskhn.accounts.cloud.sap/saml2/idp/sso/asymfskhn.accounts.ondemand.com"><input type="hidden" name="SAMLRequest" value="PHNhbWxwOkF1dGhuUmVxdWVzdCBJRD0iU2ZhMTYzZWJkLWQ5ZWUtMWZlMS1hNTk5LWQ3OTc5ZDFkZWY2ZSIgVmVyc2lvbj0iMi4wIiBJc3N1ZUluc3RhbnQ9IjIwMjYtMDgtMTBUMTU6MTg6MjhaIiBEZXN0aW5hdGlvbj0iaHR0cHM6Ly9hc3ltZnNraG4uYWNjb3VudHMuY2xvdWQuc2FwL3NhbWwyL2lkcC9zc28vYXN5bWZza2huLmFjY291bnRzLm9uZGVtYW5kLmNvbSIgRm9yY2VBdXRobj0iZmFsc2UiIElzUGFzc2l2ZT0iZmFsc2UiIEFzc2VydGlvbkNvbnN1bWVyU2VydmljZUluZGV4PSIwIiB4bWxuczpzYW1scD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnByb3RvY29sIj48c2FtbDpJc3N1ZXIgeG1sbnM6c2FtbD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFzc2VydGlvbiI&#x2b;aHR0cHM6Ly9teTQyODEwMC5zNGhhbmEuY2xvdWQuc2FwPC9zYW1sOklzc3Vlcj48ZHM6U2lnbmF0dXJlIHhtbG5zOmRzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjIj48ZHM6U2lnbmVkSW5mbz48ZHM6Q2Fub25pY2FsaXphdGlvbk1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvMTAveG1sLWV4Yy1jMTRuIyIvPjxkczpTaWduYXR1cmVNZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjcnNhLXNoYTEiLz48ZHM6UmVmZXJlbmNlIFVSST0iI1NmYTE2M2ViZC1kOWVlLTFmZTEtYTU5OS1kNzk3OWQxZGVmNmUiPjxkczpUcmFuc2Zvcm1zPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjZW52ZWxvcGVkLXNpZ25hdHVyZSIvPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzEwL3htbC1leGMtYzE0biMiLz48L2RzOlRyYW5zZm9ybXM&#x2b;PGRzOkRpZ2VzdE1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyNzaGExIi8&#x2b;PGRzOkRpZ2VzdFZhbHVlPko5R1Z3V2NiSUVZYnEyNHV0SitIZjhRUS9hTT08L2RzOkRpZ2VzdFZhbHVlPjwvZHM6UmVmZXJlbmNlPjwvZHM6U2lnbmVkSW5mbz48ZHM6U2lnbmF0dXJlVmFsdWU&#x2b;V0pJdWxMUGpnKzg1eWtnSzlrTXpGUmsvaVZiNzdPWjdjVi8zN24yakptaTRTUjgyaTZWa1pLREM0VXhhdzM1YjlKdmZWaVo3ajNiSAoxWTUzTXBJUlNpWDh3Y040UklzN3JHMWNEblpHOXBCTjliMklyUUw4dnc1TENFNko5VFhNMnJHMDNISUpXbkZiTC9NQ3hSUGdjT0F4ClRzaVFOZDV3K3dienUwSG81RmhETGVGNlE2ZGxZUWdWaHgxb1FaTFRyeURZTE9TZFl3Rkg0M0o1WVpTWXErZDk0Z2RBSnNkMS80M2oKY1hZZTYyV2hqOEVnREZkNzBiOWhUUWlEeTZ5Q0lBZXRwRFM4aTRua2FvVC94akxITzZEcjUzTGpJcVJkY1Z1U1dsRXFIaXJhZExRMgpGcHhWTkFGSjlYbjFGUkxhNG5lZ1YyT1Z2VWZoWVJjaFNUelNBMjdJajFvVTltc0NDckYzQW1QRWVsSjJlbnV1TkpWZzhVWVFWTG8yClBsQlhoRmUzUzVFaXVzb2dnT0R2dHdHTmF5VHhWTC9ENHVGM250dVhxUmEzQWwxb2lBTjBmRkp5Nkh5ZzdkZmRKMkRMVldOdWkzNkMKdC9NRWcrUGs3aVg2clZsWGNrYnJrNXV0bUttL0NQTTJQZVNOM0RNS1V3QmpjV0NIOW9uc2ZhdXM8L2RzOlNpZ25hdHVyZVZhbHVlPjwvZHM6U2lnbmF0dXJlPjwvc2FtbHA6QXV0aG5SZXF1ZXN0Pg&#x3d;&#x3d;"><input type="hidden" name="RelayState" value="oucfarwtebdodzeeorferoavzzodxzxzdrdefwe"><noscript><input type="submit" value="Continue"></noscript></form></body></html>
```