---
name: I_CABILLGDOCTAX
description: "This CDS view retrieves the tax items of a billing document in Convergent Invoicing. This CDS view provides the data to answer the following business questions: Is tax included in the billing document? How was the tax determined? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CABILLGDOCTAX')/$value
semantic_en: "This CDS view retrieves the tax items of a billing document in Convergent Invoicing. This CDS view provides the data to answer the following business questions: Is tax included in the billing document? How was the tax determined? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
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

**This CDS view retrieves the tax items of a billing document in Convergent Invoicing. This CDS view provides the data to answer the following business questions: Is tax included in the billing document? How was the tax determined? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
