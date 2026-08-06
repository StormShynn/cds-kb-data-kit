---
name: I_BUSVOLDOCCAT
description: This CDS view provides the domain fixed values for the business volume document type. The following values are maintained: 01 Settlement Management Document 02 SD Billing Document 03 Goods Receipt 04 Invoice Verification 05 Purchase Order 06 Sales Order 07 Universal Journal Entry 08 Convergent Invoicing 10 Settlement Document 11 Supplier Billing Document 12 Expense Settlement 13 Customer Settlement 14 Supplier Settlement
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLDOCCAT')/$value
semantic_en: This CDS view provides the domain fixed values for the business volume document type. The following values are maintained: 01 Settlement Management Document 02 SD Billing Document 03 Goods Receipt 04 Invoice Verification 05 Purchase Order 06 Sales Order 07 Universal Journal Entry 08 Convergent Invoicing 10 Settlement Document 11 Supplier Billing Document 12 Expense Settlement 13 Customer Settlement 14 Supplier Settlement
tags:
  - LO
  - billing
  - bo:billingdocument
  - component:LO-AB
  - customer
  - document
  - goods-receipt
  - interface-view
  - invoice
  - LO-AB
  - lob:logistics general
  - order
  - purchase-order
  - sales-order
  - supplier
  - metadata-only
---
# I_BUSVOLDOCCAT

**This CDS view provides the domain fixed values for the business volume document type. The following values are maintained: 01 Settlement Management Document 02 SD Billing Document 03 Goods Receipt 04 Invoice Verification 05 Purchase Order 06 Sales Order 07 Universal Journal Entry 08 Convergent Invoicing 10 Settlement Document 11 Supplier Billing Document 12 Expense Settlement 13 Customer Settlement 14 Supplier Settlement**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLDOCCAT')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `BusVolDocCat` | `CHAR(2)` | Document Type of Business Volume Source Document |
| `DomainValue` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
