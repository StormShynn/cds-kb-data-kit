---
name: I_IN_ACCUMULATIONHEADER
description: "This CDS view provides the data to answer the following business questions: What is the Total Sales Accumulation Amount and Tax Collected at Source amount for the Seller ID and Buyer ID combination? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-LOC-LO-IN
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_IN_ACCUMULATIONHEADER')/$value
semantic_en: "This CDS view provides the data to answer the following business questions: What is the Total Sales Accumulation Amount and Tax Collected at Source amount for the Seller ID and Buyer ID combination? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "India Tax Collection Accumulation Header — CDS view giao diện dựa trên I_IN_AccumulationHeaderData."
keywords:
  - "india"
  - "tax"
  - "collection"
  - "accumulation"
  - "header"
  - "threshold"
  - "amount"
  - "category"
  - "seller"
  - "buyer"
  - "identification"
  - "type"
  - "number"
  - "customer"
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
---
# I_IN_ACCUMULATIONHEADER

**This CDS view provides the data to answer the following business questions: What is the Total Sales Accumulation Amount and Tax Collected at Source amount for the Seller ID and Buyer ID combination? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-IN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_IN_ACCUMULATIONHEADER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IN_ThresholdAmountCategory` | ✓ | |  |  | `CHAR(4)` | Category for Threshold amount |
| `IN_SellerPan` | ✓ | |  |  | `CHAR(10)` | Permanent account number - Company code |
| `IN_BuyerIdentificationType` | ✓ | |  |  | `CHAR(2)` | Type of ID Number |
| `IN_BuyerIdentificationNumber` | ✓ | |  |  | `CHAR(40)` | Identification Number |
| `Customer` | ✓ | |  |  | `CHAR(10)` | Customer Number |
| `IN_ThresholdValidFromDate` | ✓ | |  |  | `DATS(8)` | Valid From Date |
| `IN_AccumulationAmount` |  | |  |  | `CURR(23)` | Accumulation Amount |
| `IN_TaxCollectedAtSourceAmount` |  | |  |  | `CURR(23)` | TCS Amount |
| `IN_AccumulationDate` |  | |  |  | `DATS(8)` | Last Accumulation date |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_IN_ACCUMULATIONHEADER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_IN_ACCUMULATIONHEADER')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IACCUMHDR'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@ObjectModel.usageType: {
    sizeCategory: #L,
    serviceQuality: #C,
    dataClass: #MIXED }
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #COMPOSITE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@EndUserText.label: 'India Tax Collection Accumulation Header'
  
define view I_IN_AccumulationHeader
  with parameters
    P_IN_ThresholdAmountCategory : j_1ig_thld_cat

  as select from I_IN_AccumulationHeaderData
{
  key IN_ThresholdAmountCategory,
  key IN_SellerPan,
  key IN_BuyerIdentificationType,
  key IN_BuyerIdentificationNumber,
  key Customer,
  key IN_ThresholdValidFromDate,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      IN_AccumulationAmount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      IN_TaxCollectedAtSourceAmount,
      IN_AccumulationDate,
      @EndUserText.label: 'TransactionCurrency'
      TransactionCurrency
}

where
  IN_ThresholdAmountCategory = :P_IN_ThresholdAmountCategory
```
