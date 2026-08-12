---
name: I_FINSGLERRORITEMDETAIL
description: "Finsglerroritemdetail"
app_component: AC-INT-ECS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - AC
  - AC-INT
  - AC-INT-ECS
  - interface-view
  - item-level
  - component:AC-INT-ECS-2CL
  - lob:Other
---
# I_FINSGLERRORITEMDETAIL

**Finsglerroritemdetail**

| Property | Value |
|---|---|
| App Component | `AC-INT-ECS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinSGLErrorItemUUID` | ✓ | |  |  | `RAW(16)` | ID of Error Correction Item |
| `FinSGLCompoundErrorCategory` |  | |  |  | `CHAR(5)` | Compound Error Category |
| `FinSGLErrorItemStatus` |  | |  |  | `CHAR(1)` | Status of ECS Item |
| `FinSGLErrorItemSeverity` |  | |  |  | `CHAR(1)` | Severity of Errors in ECS Items |
| `FinSGLPostedCompanyCode` |  | |  |  | `CHAR(4)` | Company Code of Posted Document |
| `FinSGLPostedDocument` |  | |  |  | `CHAR(10)` | Document Number of Posted (Suspense) Document |
| `FinSGLPostedFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Posted Document |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` |  |
| `FinSGLErrorDocument` |  | |  |  | `CHAR(10)` | ECS Internal Ref. for ECS Items in the Same FI Document |
| `FinSGLErrorFiscalYear` |  | |  |  | `NUMC(4)` | Year in which ECS item was entered (rel. for int. doc. no.) |
| `AccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `FinSGLOriginalPostingDate` |  | |  |  | `DATS(8)` | Original Posting Date of FI Document |
| `FinSGLOriginalAccount` |  | |  |  | `CHAR(10)` | Original General Ledger Account of Imported Document |
| `FinSGLOriginalProfitCenter` |  | |  |  | `CHAR(10)` | Original Profit Center of Imported Document |
| `FinSGLOriginalCostCenter` |  | |  |  | `CHAR(10)` | Original Cost Center of Imported Document |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount in document currency |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `FinSGLPostedPostingDate` |  | |  |  | `DATS(8)` | Posting Date of Posted FI Document |
| `FinSGLPostedAccount` |  | |  |  | `CHAR(10)` | General Ledger Account of Posted Document |
| `FinSGLPostedCostCenter` |  | |  |  | `CHAR(10)` | Cost Center of Posted Document |
| `FinSGLPostedProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center of Posted Document |
| `FinSGLCorrectionCompanyCode` |  | |  |  | `CHAR(4)` | Company Code of Correction Document |
| `FinSGLCorrectionDocument` |  | |  |  | `CHAR(10)` | Document Number of Correction Document |
| `FinSGLCorrectionFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Correction Document |
| `FinSGLCrrtnRvslCompanyCode` |  | |  |  | `CHAR(4)` | Company Code of Correction Document for Reversal Document |
| `FinSGLCrrtnReversalDocument` |  | |  |  | `CHAR(10)` | Document Number of Correction Document for Reversal Document |
| `FinSGLCrrtnRvslFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Correction Document for Reversal Document |
| `FinSGLErrCrrtnEnvrmt` |  | |  |  | `CHAR(10)` | ECS Environment |
| `FinSGLRunID` |  | |  |  | `CHAR(12)` | Run ID |
| `FinSGLErrorItemCreatedBy` |  | |  |  | `CHAR(12)` | Created By |
| `FinSGLErrorItemCreatedOnDate` |  | |  |  | `DATS(8)` | Start Date |
| `FinSGLErrorItemChangedBy` |  | |  |  | `CHAR(12)` | Last Changed By |
| `FinSGLErrorItemChangedOnDate` |  | |  |  | `DATS(8)` | Start Date |
| `FinSGLErrorItemProcessor` |  | |  |  | `CHAR(12)` | ECS item owner for processing |
| `FinSGLErrorItemTeamName` |  | |  |  | `CHAR(40)` | Data Element for Team |
| `Note` |  | |  |  | `CHAR(40)` | Comments of Workflow |
| `_ModifiedItem` | | ✓ | | | | |
| `_OriginalItem` | | ✓ | | | | |
| `_PostedItem` | | ✓ | | | | |
| `_ErrorMessage` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_Severity` | | ✓ | | | | |
| `_Status` | | ✓ | | | | |
| `_ErrorCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ModifiedItem` | `I_FinSGLModifiedItem` | [1] |
| `_OriginalItem` | `I_FinSGLOriginalItem` | [1] |
| `_PostedItem` | `I_FinSGLPostedItem` | [1] |
| `_ErrorMessage` | `I_FinSGLErrorMessage` | [0..*] |
| `_CompanyCode` | `I_CompanyCode` | [1] |
| `_Severity` | `I_FinSGLErrorItemSeverityVH` | [1] |
| `_Status` | `I_FinSGLErrItmProcStsVH` | [1] |
| `_ErrorCategory` | `I_FinSGLCompndErrCatVH` | [1] |
| `_ErrorItemExtension` | `E_FinSGLErrorItem` | [1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Financial Services GL Error Item Detail'
@Metadata: {
  ignorePropagatedAnnotations: true,
  allowExtensions: true
}
@VDM: {
  viewType:#BASIC,
  lifecycle.contract.type:#PUBLIC_LOCAL_API
}
@ObjectModel: {
  representativeKey: 'FinSGLErrorItemUUID',
  usageType: {
    serviceQuality: #B,
    sizeCategory: #XL,
    dataClass: #TRANSACTIONAL
  },
  sapObjectNodeType.name: 'FinSGLErrorItem'
}
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SQL_DATA_SOURCE]

define view entity I_FinSGLErrorItemDetail
  as select from I_FinSGLErrorItem

  association [1]    to I_FinSGLModifiedItem        as _ModifiedItem       on $projection.FinSGLErrorItemUUID = _ModifiedItem.FinSGLErrorItemUUID
  association [1]    to I_FinSGLOriginalItem        as _OriginalItem       on $projection.FinSGLErrorItemUUID = _OriginalItem.FinSGLErrorItemUUID
  association [1]    to I_FinSGLPostedItem          as _PostedItem         on $projection.FinSGLErrorItemUUID = _PostedItem.FinSGLErrorItemUUID
  association [0..*] to I_FinSGLErrorMessage        as _ErrorMessage       on $projection.FinSGLErrorItemUUID = _ErrorMessage.FinSGLErrorItemUUID
  association [1]    to I_CompanyCode               as _CompanyCode        on $projection.FinSGLPostedCompanyCode = _CompanyCode.CompanyCode
  association [1]    to I_FinSGLErrorItemSeverityVH as _Severity           on $projection.FinSGLErrorItemSeverity = _Severity.FinSGLErrorItemSeverity
  association [1]    to I_FinSGLErrItmProcStsVH     as _Status             on $projection.FinSGLErrorItemStatus = _Status.FinSGLErrorItemStatus
  association [1]    to I_FinSGLCompndErrCatVH      as _ErrorCategory      on $projection.FinSGLCompoundErrorCategory = _ErrorCategory.FinSGLCompoundErrorCategory
  association [1]    to E_FinSGLErrorItem           as _ErrorItemExtension on $projection.FinSGLErrorItemUUID = _ErrorItemExtension.FinSGLErrorItemUUID

{

  key I_FinSGLErrorItem.FinSGLErrorItemUUID,

      @ObjectModel.foreignKey.association: '_ErrorCategory'
      I_FinSGLErrorItem.FinSGLCompoundErrorCategory,

      @ObjectModel.foreignKey.association: '_Status'
      I_FinSGLErrorItem.FinSGLErrorItemStatus,

      @ObjectModel.foreignKey.association: '_Severity'
      I_FinSGLErrorItem.FinSGLErrorItemSeverity,

      @ObjectModel.foreignKey.association: '_CompanyCode'
      I_FinSGLErrorItem.FinSGLPostedCompanyCode,

      @Consumption.semanticObject: 'AccountingDocument'
      I_FinSGLErrorItem.FinSGLPostedDocument,

      I_FinSGLErrorItem.FinSGLPostedFiscalYear,

      @EndUserText.label: 'Accounting Doc. Line Item No.'
      I_FinSGLErrorItem.LedgerGLLineItem,

      @Consumption.semanticObject: 'FinSGLErrorItem'
      I_FinSGLErrorItem.FinSGLErrorDocument,

      I_FinSGLErrorItem.FinSGLErrorFiscalYear,

      I_FinSGLErrorItem.AccountType,

      I_FinSGLErrorItem.FinSGLOriginalPostingDate,

      I_FinSGLErrorItem.FinSGLOriginalAccount,

      I_FinSGLErrorItem.FinSGLOriginalProfitCenter,

      I_FinSGLErrorItem.FinSGLOriginalCostCenter,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      I_FinSGLErrorItem.AmountInTransactionCurrency,

      I_FinSGLErrorItem.TransactionCurrency,

      I_FinSGLErrorItem.FinSGLPostedPostingDate,

      I_FinSGLErrorItem.FinSGLPostedAccount,

      I_FinSGLErrorItem.FinSGLPostedCostCenter,

      I_FinSGLErrorItem.FinSGLPostedProfitCenter,

      I_FinSGLErrorItem.FinSGLCorrectionCompanyCode,

      I_FinSGLErrorItem.FinSGLCorrectionDocument,

      I_FinSGLErrorItem.FinSGLCorrectionFiscalYear,

      I_FinSGLErrorItem.FinSGLCrrtnRvslCompanyCode,

      I_FinSGLErrorItem.FinSGLCrrtnReversalDocument,

      I_FinSGLErrorItem.FinSGLCrrtnRvslFiscalYear,

      I_FinSGLErrorItem.FinSGLErrCrrtnEnvrmt,

      I_FinSGLErrorItem.FinSGLRunID,

      I_FinSGLErrorItem.FinSGLErrorItemCreatedBy,

      I_FinSGLErrorItem.FinSGLErrorItemCreatedOnDate,

      I_FinSGLErrorItem.FinSGLErrorItemChangedBy,

      I_FinSGLErrorItem.FinSGLErrorItemChangedOnDate,

      I_FinSGLErrorItem.FinSGLErrorItemProcessor,

      I_FinSGLErrorItem.FinSGLErrorItemTeamName,

      I_FinSGLErrorItem.Note,

      _ModifiedItem,

      _OriginalItem,

      _PostedItem,

      _ErrorMessage,

      _CompanyCode,

      _Severity,

      _Status,

      _ErrorCategory
}
```
