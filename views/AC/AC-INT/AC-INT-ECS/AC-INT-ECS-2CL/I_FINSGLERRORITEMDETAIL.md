---
name: I_FINSGLERRORITEMDETAIL
description: Finsglerroritemdetail
app_component: AC-INT-ECS-2CL
software_component: SAPSCORE
release_state: released
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

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `FinSGLErrorItemUUID` | ✓ | |  |  |
| `FinSGLCompoundErrorCategory` |  | |  |  |
| `FinSGLErrorItemStatus` |  | |  |  |
| `FinSGLErrorItemSeverity` |  | |  |  |
| `FinSGLPostedCompanyCode` |  | |  |  |
| `FinSGLPostedDocument` |  | |  |  |
| `FinSGLPostedFiscalYear` |  | |  |  |
| `LedgerGLLineItem` |  | |  |  |
| `FinSGLErrorDocument` |  | |  |  |
| `FinSGLErrorFiscalYear` |  | |  |  |
| `AccountType` |  | |  |  |
| `FinSGLOriginalPostingDate` |  | |  |  |
| `FinSGLOriginalAccount` |  | |  |  |
| `FinSGLOriginalProfitCenter` |  | |  |  |
| `FinSGLOriginalCostCenter` |  | |  |  |
| `AmountInTransactionCurrency` |  | |  |  |
| `TransactionCurrency` |  | |  |  |
| `FinSGLPostedPostingDate` |  | |  |  |
| `FinSGLPostedAccount` |  | |  |  |
| `FinSGLPostedCostCenter` |  | |  |  |
| `FinSGLPostedProfitCenter` |  | |  |  |
| `FinSGLCorrectionCompanyCode` |  | |  |  |
| `FinSGLCorrectionDocument` |  | |  |  |
| `FinSGLCorrectionFiscalYear` |  | |  |  |
| `FinSGLCrrtnRvslCompanyCode` |  | |  |  |
| `FinSGLCrrtnReversalDocument` |  | |  |  |
| `FinSGLCrrtnRvslFiscalYear` |  | |  |  |
| `FinSGLErrCrrtnEnvrmt` |  | |  |  |
| `FinSGLRunID` |  | |  |  |
| `FinSGLErrorItemCreatedBy` |  | |  |  |
| `FinSGLErrorItemCreatedOnDate` |  | |  |  |
| `FinSGLErrorItemChangedBy` |  | |  |  |
| `FinSGLErrorItemChangedOnDate` |  | |  |  |
| `FinSGLErrorItemProcessor` |  | |  |  |
| `FinSGLErrorItemTeamName` |  | |  |  |
| `Note` |  | |  |  |
| `_ModifiedItem` | | ✓ | | |
| `_OriginalItem` | | ✓ | | |
| `_PostedItem` | | ✓ | | |
| `_ErrorMessage` | | ✓ | | |
| `_CompanyCode` | | ✓ | | |
| `_Severity` | | ✓ | | |
| `_Status` | | ✓ | | |
| `_ErrorCategory` | | ✓ | | |

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
