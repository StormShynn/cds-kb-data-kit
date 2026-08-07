---
name: I_SETTLMTPRECDGDOCCAT
description: This CDS view exposes fixed values of the field Document Category of Preceding Document. The following fixed values have been maintained: 01 Invoice 02 Invoice Reversal 03 Credit Memo 04 Credit Memo Reversal 05 Settlement Document List 06 Credit Memo List 07 Settlement Management Document with Journal Entry 10 Trading Contract 11 Settlement Management Document 12 Sales Order/Contract 13 Delivery 14 Billing Document 15 Inbound Delivery 16 Goods Receipt 17 Purchase Order/Contact 18 Shipment Document 19 Internal Order (CO) 20 Pro Forma Customer Sales Document 21 CRM Billing Document 30 Incoming Invoice 31 Service Entry Sheet 60 Nomination 61 Nomination Item 70 Condition Contract 71 Claim Request Document 72 Claim Resolution Document 80 Freight Settlement 81 Freight Order 82 Internal Settlement Document 99 External Document
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTPRECDGDOCCAT')/$value
semantic_en: This CDS view exposes fixed values of the field Document Category of Preceding Document. The following fixed values have been maintained: 01 Invoice 02 Invoice Reversal 03 Credit Memo 04 Credit Memo Reversal 05 Settlement Document List 06 Credit Memo List 07 Settlement Management Document with Journal Entry 10 Trading Contract 11 Settlement Management Document 12 Sales Order/Contract 13 Delivery 14 Billing Document 15 Inbound Delivery 16 Goods Receipt 17 Purchase Order/Contact 18 Shipment Document 19 Internal Order (CO) 20 Pro Forma Customer Sales Document 21 CRM Billing Document 30 Incoming Invoice 31 Service Entry Sheet 60 Nomination 61 Nomination Item 70 Condition Contract 71 Claim Request Document 72 Claim Resolution Document 80 Freight Settlement 81 Freight Order 82 Internal Settlement Document 99 External Document
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
  - metadata-only
---
# I_SETTLMTPRECDGDOCCAT

**This CDS view exposes fixed values of the field Document Category of Preceding Document. The following fixed values have been maintained: 01 Invoice 02 Invoice Reversal 03 Credit Memo 04 Credit Memo Reversal 05 Settlement Document List 06 Credit Memo List 07 Settlement Management Document with Journal Entry 10 Trading Contract 11 Settlement Management Document 12 Sales Order/Contract 13 Delivery 14 Billing Document 15 Inbound Delivery 16 Goods Receipt 17 Purchase Order/Contact 18 Shipment Document 19 Internal Order (CO) 20 Pro Forma Customer Sales Document 21 CRM Billing Document 30 Incoming Invoice 31 Service Entry Sheet 60 Nomination 61 Nomination Item 70 Condition Contract 71 Claim Request Document 72 Claim Resolution Document 80 Freight Settlement 81 Freight Order 82 Internal Settlement Document 99 External Document**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTPRECDGDOCCAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtPrecdgDocCat` |  | |  |  | `CHAR(2)` | Document Category of Preceding Document |
| `DomainValue` |  | |  |  | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
