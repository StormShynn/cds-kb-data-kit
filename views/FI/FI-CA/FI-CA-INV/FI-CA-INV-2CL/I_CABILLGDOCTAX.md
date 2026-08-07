---
name: I_CABILLGDOCTAX
description: Tax Items of Billing Document
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CABILLGDOCTAX')/$value
semantic_en: Tax Items of Billing Document
tags:
  - FI
  - billing
  - bo:billingdocument
  - component:FI-CA-INV-2CL
  - document
  - FI-CA
  - FI-CA-INV
  - FI-CA-INV-2CL
  - interface-view
  - lob:cross_application components
  - lob:finance
  - metadata-only
---
# I_CABILLGDOCTAX

**Tax Items of Billing Document**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CABILLGDOCTAX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CABillgDocument` |  | |  |  | `CHAR(12)` | Number of Billing Document |
| `CABillgDocTaxItem` |  | |  |  | `NUMC(8)` | Sequential Number of Tax Item |
| `CABillgTaxGroup` |  | |  |  | `CHAR(8)` | Grouping of Tax Items |
| `CATaxAmount` |  | |  |  | `CURR(13)` | Tax Amount |
| `CABillgCurrency` |  | |  |  | `CUKY(5)` | Currency of Billing Document |
| `CATaxBaseAmount` |  | |  |  | `CURR(13)` | Tax Base Amount |
| `CATaxDate` |  | |  |  | `DATS(8)` | Tax Date |
| `CABillgTaxItemExternalSystem` |  | |  |  | `CHAR(10)` | Tax Item Number in External System |
| `CABillgDocItemIsReversal` |  | |  |  | `CHAR(1)` | Reversal Item |
| `CATaxRateInPercent` |  | |  |  | `DEC(6)` | Tax Percentage |
| `CATransactionKeyAccountDetn` |  | |  |  | `CHAR(3)` | Transaction Key for Account Determination |
| `CAConditionType` |  | |  |  | `CHAR(4)` | Condition Type |
| `CABillgGroupingSourceItems` |  | |  |  | `CHAR(8)` | Grouping of Source Items |
