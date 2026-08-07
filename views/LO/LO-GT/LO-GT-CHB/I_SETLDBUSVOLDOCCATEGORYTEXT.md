---
name: I_SETLDBUSVOLDOCCATEGORYTEXT
description: This CDS view provides the data to answer the following business question: What are the relevant business volume document categories in Settlement Management? The following values are maintained: 01 Settlement Management Document 02 SD Billing Document 03 Goods Receipt 04 Invoice Verification 05 Purchase Order 06 Sales Order 07 Universal Journal Entry 08 Convergent Invoicing 10 Settlement Document 11 Supplier Billing Document 12 Expense Settlement 13 Customer Settlement 14 Supplier Settlement To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLDBUSVOLDOCCATEGORYTEXT')/$value
semantic_en: This CDS view provides the data to answer the following business question: What are the relevant business volume document categories in Settlement Management? The following values are maintained: 01 Settlement Management Document 02 SD Billing Document 03 Goods Receipt 04 Invoice Verification 05 Purchase Order 06 Sales Order 07 Universal Journal Entry 08 Convergent Invoicing 10 Settlement Document 11 Supplier Billing Document 12 Expense Settlement 13 Customer Settlement 14 Supplier Settlement To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - LO
  - billing
  - bo:billingdocument
  - component:LO-GT-CHB
  - customer
  - document
  - goods-receipt
  - interface-view
  - invoice
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
  - order
  - purchase-order
  - sales-order
  - supplier
  - metadata-only
---
# I_SETLDBUSVOLDOCCATEGORYTEXT

**This CDS view provides the data to answer the following business question: What are the relevant business volume document categories in Settlement Management? The following values are maintained: 01 Settlement Management Document 02 SD Billing Document 03 Goods Receipt 04 Invoice Verification 05 Purchase Order 06 Sales Order 07 Universal Journal Entry 08 Convergent Invoicing 10 Settlement Document 11 Supplier Billing Document 12 Expense Settlement 13 Customer Settlement 14 Supplier Settlement To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLDBUSVOLDOCCATEGORYTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SetldBusVolDocCategory` |  | |  |  | `CHAR(2)` | Settled Business Volume Document Type |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `DomainValue` |  | |  |  | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `SetldBusVolDocCategoryName` |  | |  |  | `CHAR(60)` | Settled Business Volume Document Type Text |
