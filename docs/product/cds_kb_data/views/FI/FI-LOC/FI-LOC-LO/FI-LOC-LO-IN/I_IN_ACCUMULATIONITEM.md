---
name: I_IN_ACCUMULATIONITEM
description: "This CDS view provides the prerequisites for answering the following business questions against a Seller ID, Buyer ID and Accounting Document Tax Item combination: What is the previous and current sales accumulation amount? What is the previous and current tax collected at source amount? What is the tax base amount? What is the tax adjustment amount? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-LOC-LO-IN
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_IN_ACCUMULATIONITEM')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions against a Seller ID, Buyer ID and Accounting Document Tax Item combination: What is the previous and current sales accumulation amount? What is the previous and current tax collected at source amount? What is the tax base amount? What is the tax adjustment amount? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "India Tax Collection Accumulation Detail — CDS view giao diện dựa trên I_IN_AccumulationItemData."
keywords:
  - "india"
  - "tax"
  - "collection"
  - "accumulation"
  - "detail"
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
  - account
  - bo:companycode
  - component:FI-LOC-LO-IN
  - document
  - FI-LOC
  - FI-LOC-LO
  - FI-LOC-LO-IN
  - interface-view
  - lob:finance
  - lob:logistics general
---
# I_IN_ACCUMULATIONITEM

**This CDS view provides the prerequisites for answering the following business questions against a Seller ID, Buyer ID and Accounting Document Tax Item combination: What is the previous and current sales accumulation amount? What is the previous and current tax collected at source amount? What is the tax base amount? What is the tax adjustment amount? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-IN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_IN_ACCUMULATIONITEM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IN_ThresholdAmountCategory` | ✓ | |  |  | `CHAR(4)` | Category for Threshold amount |
| `IN_SellerPan` | ✓ | |  |  | `CHAR(10)` | Permanent account number - Company code |
| `IN_BuyerIdentificationType` | ✓ | |  |  | `CHAR(2)` | Type of ID Number |
| `IN_BuyerIdentificationNumber` | ✓ | |  |  | `CHAR(40)` | Identification Number |
| `Customer` | ✓ | |  |  | `CHAR(10)` | Customer Number |
| `IN_ThresholdValidFromDate` | ✓ | |  |  | `DATS(8)` | Valid From Date |
| `IN_AccumulationSequenceNumber` | ✓ | |  |  | `NUMC(8)` | Sequence number for accumulation |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Document Number of an Accounting Document |
| `PostingFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocumentItem` |  | |  |  | `NUMC(3)` | Number of Line Item Within Accounting Document |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Document Type |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date in the Document |
| `IN_PreviousAccumulationAmount` |  | |  |  | `CURR(23)` | Previous Accumulation Amount |
| `IN_PrevTxColltdAtSrceAmt` |  | |  |  | `CURR(23)` | Previous TCS Amount |
| `IN_ItemAmount` |  | |  |  | `CURR(23)` | Item Amount |
| `IN_TaxCollectedAtSourceBaseAmt` |  | |  |  | `CURR(23)` | TCS Base Amount |
| `IN_TxColltdAtSrceCndnRateAmt` |  | |  |  | `CURR(11)` | Condition Amount or Percentage |
| `IN_TaxCollectedAtSourceAmount` |  | |  |  | `CURR(23)` | TCS Amount |
| `IN_CurrentAccumulationAmount` |  | |  |  | `CURR(23)` | Current Accumulation Amount |
| `IN_CurTxColltdSrceAmt` |  | |  |  | `CURR(23)` | Current TCS Tax Amount |
| `IN_AdjustmentAmount` |  | |  |  | `CURR(23)` | Adjustment Amount |
| `IN_NetAdvanceAmount` |  | |  |  | `CURR(23)` | Net Advance Amount |
| `IN_TaxAdjustmentDocumentNumber` |  | |  |  | `CHAR(10)` | Tax adjustment document Number |
| `IN_JournalVoucherStatus` |  | |  |  | `CHAR(1)` | JV Status for TCS adjustment amount |
| `IN_ThresholdAmount` |  | |  |  | `CURR(23)` | Threshold Amount |
| `IN_CertificateCategory` |  | |  |  | `CHAR(10)` | Certificate Category |
| `IN_CertificateNumber` |  | |  |  | `CHAR(30)` | Certificate Number |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_IN_ACCUMULATIONITEM')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_IN_ACCUMULATIONITEM')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IACCUMITEM'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #COMPOSITE
@ObjectModel.usageType: {
    sizeCategory: #L,
    serviceQuality: #C,
    dataClass: #MIXED }
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@EndUserText.label: 'India Tax Collection Accumulation Detail'

define view I_IN_AccumulationItem
  with parameters
    P_IN_ThresholdAmountCategory : j_1ig_thld_cat,
    P_CompanyCode                : bukrs,
    P_PostingFiscalYear          : gjahr

  as select from I_IN_AccumulationItemData

{
  key IN_ThresholdAmountCategory,
  key IN_SellerPan,
  key IN_BuyerIdentificationType,
  key IN_BuyerIdentificationNumber,
  key Customer,
  key IN_ThresholdValidFromDate,
  key IN_AccumulationSequenceNumber,
      CompanyCode,
      AccountingDocument,
      PostingFiscalYear,
      AccountingDocumentItem,
      AccountingDocumentType,
      PostingDate,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      IN_PreviousAccumulationAmount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      IN_PrevTxColltdAtSrceAmt,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      IN_ItemAmount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      IN_TaxCollectedAtSourceBaseAmt,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      IN_TxColltdAtSrceCndnRateAmt,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      IN_TaxCollectedAtSourceAmount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      IN_CurrentAccumulationAmount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      IN_CurTxColltdSrceAmt,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      IN_AdjustmentAmount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      IN_NetAdvanceAmount,
      IN_TaxAdjustmentDocumentNumber,
      IN_JournalVoucherStatus,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      IN_ThresholdAmount,
      IN_CertificateCategory,
      IN_CertificateNumber,
      @EndUserText.label: 'TransactionCurrency'
      TransactionCurrency

}

where
      IN_ThresholdAmountCategory = :P_IN_ThresholdAmountCategory
  and CompanyCode                = :P_CompanyCode
  and PostingFiscalYear          = :P_PostingFiscalYear
```
