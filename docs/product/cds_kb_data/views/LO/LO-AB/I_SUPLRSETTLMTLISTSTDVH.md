---
name: I_SUPLRSETTLMTLISTSTDVH
description: "Supplier Settlement List"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTLISTSTDVH')/$value
semantic_en: "Supplier Settlement List"
tags:
  - LO
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
  - supplier
  - metadata-only
---
# I_SUPLRSETTLMTLISTSTDVH

**Supplier Settlement List**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTLISTSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrSettlmtList` |  | |  |  | `CHAR(10)` | Supplier Settlement List |
| `AlternativeInvoicingParty` |  | |  |  | `CHAR(10)` | Alternative Supplier |
| `SuplrSettlmtCompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `InvoicingParty` |  | |  |  | `CHAR(10)` | Supplier in Settlement Management |
| `PayeeParty` |  | |  |  | `CHAR(10)` | Payee |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `SettlmtDocType` |  | |  |  | `CHAR(4)` | Settlement Document Type |
