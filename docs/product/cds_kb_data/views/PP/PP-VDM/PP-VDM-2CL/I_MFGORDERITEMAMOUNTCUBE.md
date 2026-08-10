---
name: I_MFGORDERITEMAMOUNTCUBE
description: "With this CDS view you can retrieve data, such as the following: Scrap or yield quantity of a manufacturing order item Corresponding amounts in company code Display currency based on the material inventory price This CDS view also provides the ratio between planned and confirmed quantities in percent. This CDS view provides the prerequisites for answering the following business questions: What are the planned and confirmed quantities of a manufacturing order item? What are the amounts of the confirmed scrap and rework quantities? What is the inventory price of a manufacturing order item material at the current date?"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MFGORDERITEMAMOUNTCUBE')/$value
semantic_en: "With this CDS view you can retrieve data, such as the following: Scrap or yield quantity of a manufacturing order item Corresponding amounts in company code Display currency based on the material inventory price This CDS view also provides the ratio between planned and confirmed quantities in percent. This CDS view provides the prerequisites for answering the following business questions: What are the planned and confirmed quantities of a manufacturing order item? What are the amounts of the confirmed scrap and rework quantities? What is the inventory price of a manufacturing order item material at the current date?"
semantic_vi: "I_MFGORDERITEMAMOUNTCUBE — CDS view giao diện dựa trên I_MFGORDERITEMAMOUNTCUBE."
keywords:
  - "mfgorderitemamountcube"
  - "+escape(url)+&quot"
  - "secure"
  - "partitioned&quot"
tags:
  - PP
  - bo:companycode
  - component:PP-VDM-2CL
  - interface-view
  - inventory
  - lob:manufacturing
  - material
  - order
  - plan
  - PP-VDM
  - PP-VDM-2CL
---
# I_MFGORDERITEMAMOUNTCUBE

**With this CDS view you can retrieve data, such as the following: Scrap or yield quantity of a manufacturing order item Corresponding amounts in company code Display currency based on the material inventory price This CDS view also provides the ratio between planned and confirmed quantities in percent. This CDS view provides the prerequisites for answering the following business questions: What are the planned and confirmed quantities of a manufacturing order item? What are the amounts of the confirmed scrap and rework quantities? What is the inventory price of a manufacturing order item material at the current date?**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MFGORDERITEMAMOUNTCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `+escape(url)+&quot` |  | |  |  |  |  |
| `secure` |  | |  |  |  |  |
| `partitioned&quot` |  | |  |  |  |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MFGORDERITEMAMOUNTCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MFGORDERITEMAMOUNTCUBE')/$value)*

```abap
<html><head><meta http-equiv="cache-control" content="no-cache" /><meta http-equiv="pragma" content="no-cache" /></head><body onload="javascript:var url=window.location.hash;if(url&&(0!==url.length)){document.cookie=&quot;oucfarwtebdodzeeorferoavzzoduuecswewfwe_anchor=&quot;+escape(url)+&quot;; path=/; secure; samesite=none; partitioned&quot;}document.forms[0].submit()"><noscript><p><strong>Note:</strong> Since your browser does notsupport JavaScript, you must press the Continuebutton once to</p></noscript><form method="POST" action="https://asymfskhn.accounts.cloud.sap/saml2/idp/sso/asymfskhn.accounts.ondemand.com"><input type="hidden" name="SAMLRequest" value="PHNhbWxwOkF1dGhuUmVxdWVzdCBJRD0iU2ZhMTYzZWJkLWQ5ZWUtMWZlMS1hNTk5LWQ0NGVjMjZlNmY2ZSIgVmVyc2lvbj0iMi4wIiBJc3N1ZUluc3RhbnQ9IjIwMjYtMDgtMTBUMTU6MTc6NDRaIiBEZXN0aW5hdGlvbj0iaHR0cHM6Ly9hc3ltZnNraG4uYWNjb3VudHMuY2xvdWQuc2FwL3NhbWwyL2lkcC9zc28vYXN5bWZza2huLmFjY291bnRzLm9uZGVtYW5kLmNvbSIgRm9yY2VBdXRobj0iZmFsc2UiIElzUGFzc2l2ZT0iZmFsc2UiIEFzc2VydGlvbkNvbnN1bWVyU2VydmljZUluZGV4PSIwIiB4bWxuczpzYW1scD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnByb3RvY29sIj48c2FtbDpJc3N1ZXIgeG1sbnM6c2FtbD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFzc2VydGlvbiI&#x2b;aHR0cHM6Ly9teTQyODEwMC5zNGhhbmEuY2xvdWQuc2FwPC9zYW1sOklzc3Vlcj48ZHM6U2lnbmF0dXJlIHhtbG5zOmRzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjIj48ZHM6U2lnbmVkSW5mbz48ZHM6Q2Fub25pY2FsaXphdGlvbk1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvMTAveG1sLWV4Yy1jMTRuIyIvPjxkczpTaWduYXR1cmVNZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjcnNhLXNoYTEiLz48ZHM6UmVmZXJlbmNlIFVSST0iI1NmYTE2M2ViZC1kOWVlLTFmZTEtYTU5OS1kNDRlYzI2ZTZmNmUiPjxkczpUcmFuc2Zvcm1zPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjZW52ZWxvcGVkLXNpZ25hdHVyZSIvPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzEwL3htbC1leGMtYzE0biMiLz48L2RzOlRyYW5zZm9ybXM&#x2b;PGRzOkRpZ2VzdE1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyNzaGExIi8&#x2b;PGRzOkRpZ2VzdFZhbHVlPi8wSExPdXJwVGJIY2dUSVE5NVk3WGl2UGJJMD08L2RzOkRpZ2VzdFZhbHVlPjwvZHM6UmVmZXJlbmNlPjwvZHM6U2lnbmVkSW5mbz48ZHM6U2lnbmF0dXJlVmFsdWU&#x2b;QTdhcDdyL1puL3FnVXc0amFjdWJvdUc4VmRXTkxXTUc5ajhBbTNINERlNHlORTcwcGZOYm5PVW1tY1hieEVKUDNkSTB2T2pRT1dmego2eWtNcm15d2tTVW9BT0lhY05sQTBuUndGbEVkNWpLS0FiU28ybEZzT2NSVDcvaEdnUjBUOXp1RElMMm1jVExIZGc4OE5XWTZlcWRiCjJqeDUxM05xRm42SGUyeG1qSmV6c2ZlL3RHTXg3WVhIMDdKMXRRMWVYNXluTTdkbDRMTHNBZ3ZpNFNvM205T0djOWtRYkRVbHpyQ2YKZkJZcmlUV1A0c2YxM2M2dVlTN0tyb0YwNXZNT1dKVG5EZWVrcFM4TEJpQ25tZHMzWlhuR3lMMWc4MGRHVVZ6eEtBekxKZDJCN2haKwp3amRnTHVxMWovUUY5cmxBWTRqd1IwekQrRDlMYzZIMDU4dUthV2FjMytYN2kxV1g2TUhPSnU1cWdIOUJsSGhIdmNXNmU3VHpwMzZVClhrbExXaHJQMW5yNWF5VnpPb1ZZZWlRZmtpVU02YnZlQXdvZGQwRFhXVWxZSFVGMUdQYzlWRFA0dEZKQ1QrTkhFb1N6MEFmV0h5a2gKcXNqVnl6dzNxVjNiVVlXMUZ6TVVUeHNtUUhLaUVxblBkRDF4MGJoaklPeXhibWhVZGdxVGZtd2U8L2RzOlNpZ25hdHVyZVZhbHVlPjwvZHM6U2lnbmF0dXJlPjwvc2FtbHA6QXV0aG5SZXF1ZXN0Pg&#x3d;&#x3d;"><input type="hidden" name="RelayState" value="oucfarwtebdodzeeorferoavzzoduuecswewfwe"><noscript><input type="submit" value="Continue"></noscript></form></body></html>
```