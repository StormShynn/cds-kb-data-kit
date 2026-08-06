---
name: I_SETTLMTSOURCEDOCCAT
description: This CDS view exposes fixed values of the field Document Category of Source Document. The following fixed values have been maintained: 01 External Document 02 External Delivery Note 03 External Sales Order 04 External Purchase Order 05 External Invoice 10 Trading Contract 11 Settlement Management Document 12 Sales Order/Contract 13 Delivery 14 Billing Document 15 Inbound Delivery 16 Goods Receipt 17 Purchase Order 18 Shipment Document 20 Pro Forma Customer Sales Document 30 Incoming Invoice 31 Service Entry Sheet 40 Enterprise SOA Purchase Order 41 Enterprise SOA Sales Order 42 Enterprise SOA Inbound Delivery 43 Enterprise SOA Outbound Delivery 44 Enterprise SOA Original Invoice 45 Enterprise SOA Customer Invoice 46 Enterprise SOA Incoming Invoice 47 eSOA Basis Customer Invoice (Doc. in a Collective Invoice) 48 Enterprise SOA Original Credit Memo 49 Enterprise SOA Customer Credit Memo 50 Enterprise SOA Credit Memo 51 eSOA Basis Cust. Credit Memo (Doc. in a Collective Invoice) 60 Nomination 71 Claim Request Document 72 Claim Resolution Document 99 External Document
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTSOURCEDOCCAT')/$value
semantic_en: This CDS view exposes fixed values of the field Document Category of Source Document. The following fixed values have been maintained: 01 External Document 02 External Delivery Note 03 External Sales Order 04 External Purchase Order 05 External Invoice 10 Trading Contract 11 Settlement Management Document 12 Sales Order/Contract 13 Delivery 14 Billing Document 15 Inbound Delivery 16 Goods Receipt 17 Purchase Order 18 Shipment Document 20 Pro Forma Customer Sales Document 30 Incoming Invoice 31 Service Entry Sheet 40 Enterprise SOA Purchase Order 41 Enterprise SOA Sales Order 42 Enterprise SOA Inbound Delivery 43 Enterprise SOA Outbound Delivery 44 Enterprise SOA Original Invoice 45 Enterprise SOA Customer Invoice 46 Enterprise SOA Incoming Invoice 47 eSOA Basis Customer Invoice (Doc. in a Collective Invoice) 48 Enterprise SOA Original Credit Memo 49 Enterprise SOA Customer Credit Memo 50 Enterprise SOA Credit Memo 51 eSOA Basis Cust. Credit Memo (Doc. in a Collective Invoice) 60 Nomination 71 Claim Request Document 72 Claim Resolution Document 99 External Document
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
# I_SETTLMTSOURCEDOCCAT

**This CDS view exposes fixed values of the field Document Category of Source Document. The following fixed values have been maintained: 01 External Document 02 External Delivery Note 03 External Sales Order 04 External Purchase Order 05 External Invoice 10 Trading Contract 11 Settlement Management Document 12 Sales Order/Contract 13 Delivery 14 Billing Document 15 Inbound Delivery 16 Goods Receipt 17 Purchase Order 18 Shipment Document 20 Pro Forma Customer Sales Document 30 Incoming Invoice 31 Service Entry Sheet 40 Enterprise SOA Purchase Order 41 Enterprise SOA Sales Order 42 Enterprise SOA Inbound Delivery 43 Enterprise SOA Outbound Delivery 44 Enterprise SOA Original Invoice 45 Enterprise SOA Customer Invoice 46 Enterprise SOA Incoming Invoice 47 eSOA Basis Customer Invoice (Doc. in a Collective Invoice) 48 Enterprise SOA Original Credit Memo 49 Enterprise SOA Customer Credit Memo 50 Enterprise SOA Credit Memo 51 eSOA Basis Cust. Credit Memo (Doc. in a Collective Invoice) 60 Nomination 71 Claim Request Document 72 Claim Resolution Document 99 External Document**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTSOURCEDOCCAT')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `SettlmtSourceDocCat` | `CHAR(2)` | Document Category of Source Document |
| `DomainValue` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
