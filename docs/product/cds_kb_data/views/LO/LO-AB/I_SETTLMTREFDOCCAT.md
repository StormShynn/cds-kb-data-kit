---
name: I_SETTLMTREFDOCCAT
description: "This CDS view is used to select the reference document category. This CDS view provides the parameters for the domain WLF_REF_TYPE with the following values: 01 Invoice 02 Invoice Reversal 03 Credit Memo 04 Credit Memo Reversal 05 Settlement Document List 06 Credit Memo List 07 Settlement Management Document with Journal Entry 10 Trading Contract 11 Settlement Management Document 12 Sales Order/Contract 13 Delivery 14 Billing Document 15 Inbound Delivery 16 Goods Receipt 17 Purchase Order/Contract 18 Shipment Document 19 Internal Order (CO) 20 Pro Forma Customer Sales Document 21 CRM Billing Document 22 Provider Contract 23 Convergent Invoicing 30 Incoming Invoice 31 Service Entry Sheet 60 Nomination 61 Nomination Item 70 Condition Contract 71 Claim Request Document 72 Claim Resolution Document 80 Freight Settlement 81 Freight Order 82 Internal Settlement Document"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTREFDOCCAT')/$value
semantic_en: "This CDS view is used to select the reference document category. This CDS view provides the parameters for the domain WLF_REF_TYPE with the following values: 01 Invoice 02 Invoice Reversal 03 Credit Memo 04 Credit Memo Reversal 05 Settlement Document List 06 Credit Memo List 07 Settlement Management Document with Journal Entry 10 Trading Contract 11 Settlement Management Document 12 Sales Order/Contract 13 Delivery 14 Billing Document 15 Inbound Delivery 16 Goods Receipt 17 Purchase Order/Contract 18 Shipment Document 19 Internal Order (CO) 20 Pro Forma Customer Sales Document 21 CRM Billing Document 22 Provider Contract 23 Convergent Invoicing 30 Incoming Invoice 31 Service Entry Sheet 60 Nomination 61 Nomination Item 70 Condition Contract 71 Claim Request Document 72 Claim Resolution Document 80 Freight Settlement 81 Freight Order 82 Internal Settlement Document"
semantic_vi: "I_SETTLMTREFDOCCAT — CDS view giao diện dựa trên I_SETTLMTREFDOCCAT."
keywords:
  - "settlmtrefdoccat"
  - "+escape(url)+&quot"
  - "secure"
  - "partitioned&quot"
tags:
  - LO
  - billing
  - bo:billingdocument
  - claim
  - component:LO-AB
  - contract
  - customer
  - delivery
  - document
  - goods-receipt
  - interface-view
  - invoice
  - LO-AB
  - lob:logistics general
  - order
  - purchase-order
  - sales-order
---
# I_SETTLMTREFDOCCAT

**This CDS view is used to select the reference document category. This CDS view provides the parameters for the domain WLF_REF_TYPE with the following values: 01 Invoice 02 Invoice Reversal 03 Credit Memo 04 Credit Memo Reversal 05 Settlement Document List 06 Credit Memo List 07 Settlement Management Document with Journal Entry 10 Trading Contract 11 Settlement Management Document 12 Sales Order/Contract 13 Delivery 14 Billing Document 15 Inbound Delivery 16 Goods Receipt 17 Purchase Order/Contract 18 Shipment Document 19 Internal Order (CO) 20 Pro Forma Customer Sales Document 21 CRM Billing Document 22 Provider Contract 23 Convergent Invoicing 30 Incoming Invoice 31 Service Entry Sheet 60 Nomination 61 Nomination Item 70 Condition Contract 71 Claim Request Document 72 Claim Resolution Document 80 Freight Settlement 81 Freight Order 82 Internal Settlement Document**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTREFDOCCAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `+escape(url)+&quot` |  | |  |  |  |  |
| `secure` |  | |  |  |  |  |
| `partitioned&quot` |  | |  |  |  |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTREFDOCCAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTREFDOCCAT')/$value)*

```abap
<html><head><meta http-equiv="cache-control" content="no-cache" /><meta http-equiv="pragma" content="no-cache" /></head><body onload="javascript:var url=window.location.hash;if(url&&(0!==url.length)){document.cookie=&quot;oucfarwtebdodzeeorferoavzzoeqztsxcbefwe_anchor=&quot;+escape(url)+&quot;; path=/; secure; samesite=none; partitioned&quot;}document.forms[0].submit()"><noscript><p><strong>Note:</strong> Since your browser does notsupport JavaScript, you must press the Continuebutton once to</p></noscript><form method="POST" action="https://asymfskhn.accounts.cloud.sap/saml2/idp/sso/asymfskhn.accounts.ondemand.com"><input type="hidden" name="SAMLRequest" value="PHNhbWxwOkF1dGhuUmVxdWVzdCBJRD0iU2ZhMTYzZWJkLWQ5ZWUtMWZlMS1hNTk5LWUwOTMyN2NiZWY2ZSIgVmVyc2lvbj0iMi4wIiBJc3N1ZUluc3RhbnQ9IjIwMjYtMDgtMTBUMTU6MjA6MjhaIiBEZXN0aW5hdGlvbj0iaHR0cHM6Ly9hc3ltZnNraG4uYWNjb3VudHMuY2xvdWQuc2FwL3NhbWwyL2lkcC9zc28vYXN5bWZza2huLmFjY291bnRzLm9uZGVtYW5kLmNvbSIgRm9yY2VBdXRobj0iZmFsc2UiIElzUGFzc2l2ZT0iZmFsc2UiIEFzc2VydGlvbkNvbnN1bWVyU2VydmljZUluZGV4PSIwIiB4bWxuczpzYW1scD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnByb3RvY29sIj48c2FtbDpJc3N1ZXIgeG1sbnM6c2FtbD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFzc2VydGlvbiI&#x2b;aHR0cHM6Ly9teTQyODEwMC5zNGhhbmEuY2xvdWQuc2FwPC9zYW1sOklzc3Vlcj48ZHM6U2lnbmF0dXJlIHhtbG5zOmRzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjIj48ZHM6U2lnbmVkSW5mbz48ZHM6Q2Fub25pY2FsaXphdGlvbk1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvMTAveG1sLWV4Yy1jMTRuIyIvPjxkczpTaWduYXR1cmVNZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjcnNhLXNoYTEiLz48ZHM6UmVmZXJlbmNlIFVSST0iI1NmYTE2M2ViZC1kOWVlLTFmZTEtYTU5OS1lMDkzMjdjYmVmNmUiPjxkczpUcmFuc2Zvcm1zPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjZW52ZWxvcGVkLXNpZ25hdHVyZSIvPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzEwL3htbC1leGMtYzE0biMiLz48L2RzOlRyYW5zZm9ybXM&#x2b;PGRzOkRpZ2VzdE1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyNzaGExIi8&#x2b;PGRzOkRpZ2VzdFZhbHVlPjdMdEg3UTM0bFNzNmZOVW93amZZNm0wV0NxST08L2RzOkRpZ2VzdFZhbHVlPjwvZHM6UmVmZXJlbmNlPjwvZHM6U2lnbmVkSW5mbz48ZHM6U2lnbmF0dXJlVmFsdWU&#x2b;Qy91ZDlVL2hzdE1obTRJYmt3aVRHMGtuRlpMS3E4RmxxeEhRdmlSRm81VHFEd0ZrMnFzUDVmMzhyWGtIalNBVm1FdGhsOGdnQzg0QQp2UnFleEVwdWFRU2JWRC9oS3lyY20xTXdKZGp6WjFaT2JqWkFQTW9sbGpVRVhQcFNsV2IwczlONHZHbGFyZnFLcE5Xd0JVVjhJYWp1ClV3aVB1MHIxSndBclRaaU5iQTU3bjlRRXB6MlRhZlAzamdiQVRxbDlLa3BmcUJJRmlmdjY2S1d5VVVnNVNqUzZhL28rRU9HQm5vVTYKWXh6TStBNzlRK2k0TGZRM3RQTkVRSkhKY0VCenNYUkluZmxUZ25VR3Zvb25uQk0xNXNwK092UjVUdTBmbWdrMVl2SEtKSWdZUmdlVwptMmhRbmNZcVlTSkh5Yml3TjBxNi9EbVlKYjlaRUNqT2FNc3BhZUhWckYxVVlmK2VHQ0M4c0FERzc2YU5qb1JnY3l5UC9Ld1NPRGhrCktyVUd0OVBGcmJicSsyR3lnR0l5RWpXc0Y1Ry9iU0o3MmtiSFlLQWt6alZwUHZ1OXpQUGxCaGVjblpIRmtBWUtCNWVaVzY4VklIS0kKcGZZWDAyeU5tUHdxWktIWjg5UEJaaHhBb1p0TklINk5hcnd3YzdYUWQzOVJYcloxa0Vpd1U4ZnM8L2RzOlNpZ25hdHVyZVZhbHVlPjwvZHM6U2lnbmF0dXJlPjwvc2FtbHA6QXV0aG5SZXF1ZXN0Pg&#x3d;&#x3d;"><input type="hidden" name="RelayState" value="oucfarwtebdodzeeorferoavzzoeqztsxcbefwe"><noscript><input type="submit" value="Continue"></noscript></form></body></html>
```