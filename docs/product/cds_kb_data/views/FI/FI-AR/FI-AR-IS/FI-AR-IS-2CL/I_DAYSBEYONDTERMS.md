---
name: I_DAYSBEYONDTERMS
description: "This CDS view provides you with an insight into the payment history of your customers and indicates how effectively your company collects payments. The result aggregates the weighted payment amount per account (company code and customer). This CDS view provides you with the information you need to answer the following business questions: How long does it take to collect payments? If you have just started a new business, you may find the Days Sales Outstanding Cube more helpful."
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DAYSBEYONDTERMS')/$value
semantic_en: "This CDS view provides you with an insight into the payment history of your customers and indicates how effectively your company collects payments. The result aggregates the weighted payment amount per account (company code and customer). This CDS view provides you with the information you need to answer the following business questions: How long does it take to collect payments? If you have just started a new business, you may find the Days Sales Outstanding Cube more helpful."
semantic_vi: "I_DAYSBEYONDTERMS — CDS view giao diện dựa trên I_DAYSBEYONDTERMS."
keywords:
  - "daysbeyondterms"
  - "+escape(url)+&quot"
  - "secure"
  - "partitioned&quot"
tags:
  - FI
  - account
  - bo:businesspartner
  - component:FI-AR-IS-2CL
  - customer
  - FI-AR
  - FI-AR-IS
  - FI-AR-IS-2CL
  - interface-view
  - lob:finance
  - payment
---
# I_DAYSBEYONDTERMS

**This CDS view provides you with an insight into the payment history of your customers and indicates how effectively your company collects payments. The result aggregates the weighted payment amount per account (company code and customer). This CDS view provides you with the information you need to answer the following business questions: How long does it take to collect payments? If you have just started a new business, you may find the Days Sales Outstanding Cube more helpful.**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DAYSBEYONDTERMS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `+escape(url)+&quot` |  | |  |  |  |  |
| `secure` |  | |  |  |  |  |
| `partitioned&quot` |  | |  |  |  |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DAYSBEYONDTERMS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DAYSBEYONDTERMS')/$value)*

```abap
<html><head><meta http-equiv="cache-control" content="no-cache" /><meta http-equiv="pragma" content="no-cache" /></head><body onload="javascript:var url=window.location.hash;if(url&&(0!==url.length)){document.cookie=&quot;oucfarwtebdodzeeorferoavzzocztsdywvefwe_anchor=&quot;+escape(url)+&quot;; path=/; secure; samesite=none; partitioned&quot;}document.forms[0].submit()"><noscript><p><strong>Note:</strong> Since your browser does notsupport JavaScript, you must press the Continuebutton once to</p></noscript><form method="POST" action="https://asymfskhn.accounts.cloud.sap/saml2/idp/sso/asymfskhn.accounts.ondemand.com"><input type="hidden" name="SAMLRequest" value="PHNhbWxwOkF1dGhuUmVxdWVzdCBJRD0iU2ZhMTYzZWJkLWQ5ZWUtMWZlMS1hNTk5LWM5MzJkODY1ZWY2ZSIgVmVyc2lvbj0iMi4wIiBJc3N1ZUluc3RhbnQ9IjIwMjYtMDgtMTBUMTU6MTU6MTRaIiBEZXN0aW5hdGlvbj0iaHR0cHM6Ly9hc3ltZnNraG4uYWNjb3VudHMuY2xvdWQuc2FwL3NhbWwyL2lkcC9zc28vYXN5bWZza2huLmFjY291bnRzLm9uZGVtYW5kLmNvbSIgRm9yY2VBdXRobj0iZmFsc2UiIElzUGFzc2l2ZT0iZmFsc2UiIEFzc2VydGlvbkNvbnN1bWVyU2VydmljZUluZGV4PSIwIiB4bWxuczpzYW1scD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnByb3RvY29sIj48c2FtbDpJc3N1ZXIgeG1sbnM6c2FtbD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFzc2VydGlvbiI&#x2b;aHR0cHM6Ly9teTQyODEwMC5zNGhhbmEuY2xvdWQuc2FwPC9zYW1sOklzc3Vlcj48ZHM6U2lnbmF0dXJlIHhtbG5zOmRzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjIj48ZHM6U2lnbmVkSW5mbz48ZHM6Q2Fub25pY2FsaXphdGlvbk1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvMTAveG1sLWV4Yy1jMTRuIyIvPjxkczpTaWduYXR1cmVNZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjcnNhLXNoYTEiLz48ZHM6UmVmZXJlbmNlIFVSST0iI1NmYTE2M2ViZC1kOWVlLTFmZTEtYTU5OS1jOTMyZDg2NWVmNmUiPjxkczpUcmFuc2Zvcm1zPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjZW52ZWxvcGVkLXNpZ25hdHVyZSIvPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzEwL3htbC1leGMtYzE0biMiLz48L2RzOlRyYW5zZm9ybXM&#x2b;PGRzOkRpZ2VzdE1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyNzaGExIi8&#x2b;PGRzOkRpZ2VzdFZhbHVlPnY2NUJLTXZOc0d1Z05qK3QycnRPWXdUR01uRT08L2RzOkRpZ2VzdFZhbHVlPjwvZHM6UmVmZXJlbmNlPjwvZHM6U2lnbmVkSW5mbz48ZHM6U2lnbmF0dXJlVmFsdWU&#x2b;a2RNQjNnM3hyV1RPd0tCQ2pFNnFiNyt2OTcrVnMrS1hQYWNPZEQ3c1RmeU0vMndYM1Z2c1YrSGhxMUZKaUMrTkJTWW82bEV4Q1hyRgprNlRUOUV0NFVLMkE1UmdpY1F6QXVSSVpyR2Z0YzluSXV2Q1R5Rmhnd3laeks2b3VJMVAwamdmNWp5b3Z1RjI5aFJsc2EvRVpEd2lTCnpzQnkyZ0lOcGdPUG41MWZNZHdYQUV3QUdzak9RbTRncTI5MkNmbFRSL25CUE8wUUJwVWZJcGFkZXJDNzNaZUNlTUJ4akpaZXZyWU8KMmMxd0wvRDJGUG0wTzRtakVNd0lldDdTSHZWWCtHUER0cG1iZ1BOcFhXOVdPUVZ0c0x3TXZFK0x1bldTU0taSzNCbmlRTVBTb1hTbwpZRktwb1BHZkdodThkWnVsT2FUT3licGE0ZTVNd0xnK0p3MTZUYVRwTWkzRUxTRlQ1SWVHS1RCN1ZWUURvWGFoSWdFVmREZFpMVG1SCkN2MGJUZ0N5d294cStCSExiWk9zSEJ1bTFLNHlUUFhjTDYycnRiOW1jQS9OMnI2bXIzWTIxTXFndDdkQ3VuRjQ2VkJvNlFacHF6QkoKWVZUdGRpWmRWUlMxdUxjcnNYcVdyUVlTdG4wTE9RSzR1RUFsQVJ1SXl0VTVwT1Rnb0RSc1ZTUWU8L2RzOlNpZ25hdHVyZVZhbHVlPjwvZHM6U2lnbmF0dXJlPjwvc2FtbHA6QXV0aG5SZXF1ZXN0Pg&#x3d;&#x3d;"><input type="hidden" name="RelayState" value="oucfarwtebdodzeeorferoavzzocztsdywvefwe"><noscript><input type="submit" value="Continue"></noscript></form></body></html>
```