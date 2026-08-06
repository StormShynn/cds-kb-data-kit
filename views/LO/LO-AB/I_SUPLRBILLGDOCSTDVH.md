---
name: I_SUPLRBILLGDOCSTDVH
description: Supplier Billing Document
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRBILLGDOCSTDVH')/$value
semantic_en: Supplier Billing Document
tags:
  - LO
  - billing
  - bo:billingdocument
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
  - supplier
  - metadata-only
---
# I_SUPLRBILLGDOCSTDVH

**Supplier Billing Document**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRBILLGDOCSTDVH')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `SuplrBillgDoc` | `CHAR(10)` | Supplier Billing Document Number |
| `AlternativeInvoicingParty` | `CHAR(10)` | Alternative Supplier |
| `SuplrSettlmtCompanyCode` | `CHAR(4)` | Company Code |
| `InvoicingParty` | `CHAR(10)` | Supplier in Settlement Management |
| `PayeeParty` | `CHAR(10)` | Payee |
| `PurchasingGroup` | `CHAR(3)` | Purchasing Group |
| `PurchasingOrganization` | `CHAR(4)` | Purchasing Organization |
| `SettlmtDocType` | `CHAR(4)` | Settlement Document Type |
