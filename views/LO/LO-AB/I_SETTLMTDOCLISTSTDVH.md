---
name: I_SETTLMTDOCLISTSTDVH
description: Settlement Document List
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCLISTSTDVH')/$value
semantic_en: Settlement Document List
tags:
  - LO
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
  - metadata-only
---
# I_SETTLMTDOCLISTSTDVH

**Settlement Document List**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCLISTSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtDocList` |  | |  |  | `CHAR(10)` | Document Number of Settlement Document List |
| `AlternativeInvoicingParty` |  | |  |  | `CHAR(10)` | Alternative Supplier |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BillToParty` |  | |  |  | `CHAR(10)` | Customer in Settlement Management |
| `InvoicingParty` |  | |  |  | `CHAR(10)` | Supplier in Settlement Management |
| `PayeeParty` |  | |  |  | `CHAR(10)` | Payee |
| `PayerParty` |  | |  |  | `CHAR(10)` | Payer |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `SettlmtDocType` |  | |  |  | `CHAR(4)` | Settlement Document Type |
