---
name: I_IN_ACCUMULATIONHEADER
description: This CDS view provides the data to answer the following business questions: What is the Total Sales Accumulation Amount and Tax Collected at Source amount for the Seller ID and Buyer ID combination? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FI-LOC-LO-IN
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_IN_ACCUMULATIONHEADER')/$value
semantic_en: This CDS view provides the data to answer the following business questions: What is the Total Sales Accumulation Amount and Tax Collected at Source amount for the Seller ID and Buyer ID combination? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - FI
  - bo:companycode
  - component:FI-LOC-LO-IN
  - FI-LOC
  - FI-LOC-LO
  - FI-LOC-LO-IN
  - interface-view
  - lob:finance
  - lob:logistics general
  - metadata-only
---
# I_IN_ACCUMULATIONHEADER

**This CDS view provides the data to answer the following business questions: What is the Total Sales Accumulation Amount and Tax Collected at Source amount for the Seller ID and Buyer ID combination? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-IN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_IN_ACCUMULATIONHEADER')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `IN_ThresholdAmountCategory` | `CHAR(4)` | Category for Threshold amount |
| `IN_SellerPan` | `CHAR(10)` | Permanent account number - Company code |
| `IN_BuyerIdentificationType` | `CHAR(2)` | Type of ID Number |
| `IN_BuyerIdentificationNumber` | `CHAR(40)` | Identification Number |
| `Customer` | `CHAR(10)` | Customer Number |
| `IN_ThresholdValidFromDate` | `DATS(8)` | Valid From Date |
| `IN_AccumulationAmount` | `CURR(23)` | Accumulation Amount |
| `IN_TaxCollectedAtSourceAmount` | `CURR(23)` | TCS Amount |
| `IN_AccumulationDate` | `DATS(8)` | Last Accumulation date |
| `TransactionCurrency` | `CUKY(5)` |  |
