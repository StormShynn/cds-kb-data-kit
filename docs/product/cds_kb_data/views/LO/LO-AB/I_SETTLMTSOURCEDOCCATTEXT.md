---
name: I_SETTLMTSOURCEDOCCATTEXT
description: "This CDS view exposes fixed values of the field Document Category of Source Document. The following fixed values have been maintained: 01 External Document 02 External Delivery Note 03 External Sales Order 04 External Purchase Order 05 External Invoice 10 Trading Contract 11 Settlement Management Document 12 Sales Order/Contract 13 Delivery 14 Billing Document 15 Inbound Delivery 16 Goods Receipt 17 Purchase Order 18 Shipment Document 20 Pro Forma Customer Sales Document 30 Incoming Invoice 31 Service Entry Sheet 40 Enterprise SOA Purchase Order 41 Enterprise SOA Sales Order 42 Enterprise SOA Inbound Delivery 43 Enterprise SOA Outbound Delivery 44 Enterprise SOA Original Invoice 45 Enterprise SOA Customer Invoice 46 Enterprise SOA Incoming Invoice 47 eSOA Basis Customer Invoice (Doc. in a Collective Invoice) 48 Enterprise SOA Original Credit Memo 49 Enterprise SOA Customer Credit Memo 50 Enterprise SOA Credit Memo 51 eSOA Basis Cust. Credit Memo (Doc. in a Collective Invoice) 60 Nomination 71 Claim Request Document 72 Claim Resolution Document 99 External Document"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTSOURCEDOCCATTEXT')/$value
semantic_en: "This CDS view exposes fixed values of the field Document Category of Source Document. The following fixed values have been maintained: 01 External Document 02 External Delivery Note 03 External Sales Order 04 External Purchase Order 05 External Invoice 10 Trading Contract 11 Settlement Management Document 12 Sales Order/Contract 13 Delivery 14 Billing Document 15 Inbound Delivery 16 Goods Receipt 17 Purchase Order 18 Shipment Document 20 Pro Forma Customer Sales Document 30 Incoming Invoice 31 Service Entry Sheet 40 Enterprise SOA Purchase Order 41 Enterprise SOA Sales Order 42 Enterprise SOA Inbound Delivery 43 Enterprise SOA Outbound Delivery 44 Enterprise SOA Original Invoice 45 Enterprise SOA Customer Invoice 46 Enterprise SOA Incoming Invoice 47 eSOA Basis Customer Invoice (Doc. in a Collective Invoice) 48 Enterprise SOA Original Credit Memo 49 Enterprise SOA Customer Credit Memo 50 Enterprise SOA Credit Memo 51 eSOA Basis Cust. Credit Memo (Doc. in a Collective Invoice) 60 Nomination 71 Claim Request Document 72 Claim Resolution Document 99 External Document"
semantic_vi: "I_SETTLMTSOURCEDOCCATTEXT — CDS view giao diện dựa trên I_SETTLMTSOURCEDOCCATTEXT."
keywords:
  - "settlmtsourcedoccattext"
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
  - bo:salesorder
---
# I_SETTLMTSOURCEDOCCATTEXT

**This CDS view exposes fixed values of the field Document Category of Source Document. The following fixed values have been maintained: 01 External Document 02 External Delivery Note 03 External Sales Order 04 External Purchase Order 05 External Invoice 10 Trading Contract 11 Settlement Management Document 12 Sales Order/Contract 13 Delivery 14 Billing Document 15 Inbound Delivery 16 Goods Receipt 17 Purchase Order 18 Shipment Document 20 Pro Forma Customer Sales Document 30 Incoming Invoice 31 Service Entry Sheet 40 Enterprise SOA Purchase Order 41 Enterprise SOA Sales Order 42 Enterprise SOA Inbound Delivery 43 Enterprise SOA Outbound Delivery 44 Enterprise SOA Original Invoice 45 Enterprise SOA Customer Invoice 46 Enterprise SOA Incoming Invoice 47 eSOA Basis Customer Invoice (Doc. in a Collective Invoice) 48 Enterprise SOA Original Credit Memo 49 Enterprise SOA Customer Credit Memo 50 Enterprise SOA Credit Memo 51 eSOA Basis Cust. Credit Memo (Doc. in a Collective Invoice) 60 Nomination 71 Claim Request Document 72 Claim Resolution Document 99 External Document**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTSOURCEDOCCATTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `+escape(url)+&quot` |  | |  |  |  |  |
| `secure` |  | |  |  |  |  |
| `partitioned&quot` |  | |  |  |  |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTSOURCEDOCCATTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTSOURCEDOCCATTEXT')/$value)*

```abap
<html><head><meta http-equiv="cache-control" content="no-cache" /><meta http-equiv="pragma" content="no-cache" /></head><body onload="javascript:var url=window.location.hash;if(url&&(0!==url.length)){document.cookie=&quot;oucfarwtebdodzeeorferoavzzoerarbczvefwe_anchor=&quot;+escape(url)+&quot;; path=/; secure; samesite=none; partitioned&quot;}document.forms[0].submit()"><noscript><p><strong>Note:</strong> Since your browser does notsupport JavaScript, you must press the Continuebutton once to</p></noscript><form method="POST" action="https://asymfskhn.accounts.cloud.sap/saml2/idp/sso/asymfskhn.accounts.ondemand.com"><input type="hidden" name="SAMLRequest" value="PHNhbWxwOkF1dGhuUmVxdWVzdCBJRD0iU2ZhMTYzZWJkLWQ5ZWUtMWZlMS1hNTk5LWUxYTFiYzk1ZWY2ZSIgVmVyc2lvbj0iMi4wIiBJc3N1ZUluc3RhbnQ9IjIwMjYtMDgtMTBUMTU6MjA6NDJaIiBEZXN0aW5hdGlvbj0iaHR0cHM6Ly9hc3ltZnNraG4uYWNjb3VudHMuY2xvdWQuc2FwL3NhbWwyL2lkcC9zc28vYXN5bWZza2huLmFjY291bnRzLm9uZGVtYW5kLmNvbSIgRm9yY2VBdXRobj0iZmFsc2UiIElzUGFzc2l2ZT0iZmFsc2UiIEFzc2VydGlvbkNvbnN1bWVyU2VydmljZUluZGV4PSIwIiB4bWxuczpzYW1scD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnByb3RvY29sIj48c2FtbDpJc3N1ZXIgeG1sbnM6c2FtbD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFzc2VydGlvbiI&#x2b;aHR0cHM6Ly9teTQyODEwMC5zNGhhbmEuY2xvdWQuc2FwPC9zYW1sOklzc3Vlcj48ZHM6U2lnbmF0dXJlIHhtbG5zOmRzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjIj48ZHM6U2lnbmVkSW5mbz48ZHM6Q2Fub25pY2FsaXphdGlvbk1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvMTAveG1sLWV4Yy1jMTRuIyIvPjxkczpTaWduYXR1cmVNZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjcnNhLXNoYTEiLz48ZHM6UmVmZXJlbmNlIFVSST0iI1NmYTE2M2ViZC1kOWVlLTFmZTEtYTU5OS1lMWExYmM5NWVmNmUiPjxkczpUcmFuc2Zvcm1zPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjZW52ZWxvcGVkLXNpZ25hdHVyZSIvPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzEwL3htbC1leGMtYzE0biMiLz48L2RzOlRyYW5zZm9ybXM&#x2b;PGRzOkRpZ2VzdE1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyNzaGExIi8&#x2b;PGRzOkRpZ2VzdFZhbHVlPk5uR0ZiQytBekNsUFR0TjZ5Sy9zK0hOZUJ5ND08L2RzOkRpZ2VzdFZhbHVlPjwvZHM6UmVmZXJlbmNlPjwvZHM6U2lnbmVkSW5mbz48ZHM6U2lnbmF0dXJlVmFsdWU&#x2b;SU9sYXJCblROSnVLbVRQcmpZTkpLa3dYeFdIUUtwME9DTVZ5Q1JGRGVvNFpIYlBwd2NQZ0dmdWY1ZVJMMmNsV0QvRk4xSUwyY2VxeAp2c0c4cmR5YjZqS25MMEU2di80b1ZZQTRVYlBGMCtEajhCWkQzNVJzZ28yUm8yclQ5ZytxODA2TGtaZ242N2UySkNnbHlaK3hqbUcwCm81MnU0UEw0enN6KzV6ODBvbVlmRkJlenYvUnM3ZFptT1kyMHdsemJibVh3VWh4NWN3VlBDZURBb1BXMWl6Snk3TkZNYmRoaVR2QmwKVzBsMWQzaEptVG1hblkwTXF5bzhtS3FGOFM4N09lRlZ6VmkrNDA4czV6dTdSZ3BjZlFjaWVxek9NMjNmZVlSaFVyZG1RM3BmeER6MAphU2JVN0FRdEZlTXppWjQwSDR5OTJLRG9sSFk4aUJ1V3ZjbTN3bjczVUpQWXJDdW1LVlZGVmtvcmtIMmZFTC9kNUVlQmNlSXlqenpyCnh3VmY4WXpRV0FIYnpSbjFadEcyOUlCYkZ4ZCtNak1HLzVKZDJiZVIyTEkzLzVLNVFWU2hEU3VCeCtqV2NQZzIyU0J6OHNzRDJZNG4KOGwyYlZKSlY4aFhGV0JrZzV4eG5pR1RhakYrTzc5bDlxRHVScS83VnZQUzhZY0wycTFFaW5qYzk8L2RzOlNpZ25hdHVyZVZhbHVlPjwvZHM6U2lnbmF0dXJlPjwvc2FtbHA6QXV0aG5SZXF1ZXN0Pg&#x3d;&#x3d;"><input type="hidden" name="RelayState" value="oucfarwtebdodzeeorferoavzzoerarbczvefwe"><noscript><input type="submit" value="Continue"></noscript></form></body></html>
```