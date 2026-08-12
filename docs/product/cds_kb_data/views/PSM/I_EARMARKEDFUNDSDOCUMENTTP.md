---
name: I_EARMARKEDFUNDSDOCUMENTTP
description: "Earmarkedfundsdocumenttp"
app_component: PSM
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PSM
  - interface-view
  - transactional-processing
  - document
  - component:PSM
  - lob:Other
---
# I_EARMARKEDFUNDSDOCUMENTTP

**Earmarkedfundsdocumenttp**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EarmarkedFundsDocument` | ✓ | |  |  |  |  |
| `EarmarkedFundsDocumentForEdit` |  | |  |  |  |  |
| `EarmarkedFundsDocumentCategory` |  | |  |  |  |  |
| `EarmarkedFundsDocumentType` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `FinancialManagementArea` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `CompanyCodeCurrency` |  | |  |  |  |  |
| `EarmarkedFundsDocReference` |  | |  |  |  |  |
| `EarmarkedFundsDocReference2` |  | |  |  |  |  |
| `EarmarkedFundsDocReference3` |  | |  |  |  |  |
| `EarmarkedFundsHeaderText` |  | |  |  |  |  |
| `EarmarkedFundsHasLongText` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `DocumentDate` |  | |  |  |  |  |
| `ExchangeRateDate` |  | |  |  |  |  |
| `AbsoluteExchangeRate` |  | |  |  |  |  |
| `ExchRateIsIndirectQuotation` |  | |  |  |  |  |
| `EmrkdFndsDocCreatedByUser` |  | |  |  |  |  |
| `EmrkdFndsDocCreationDate` |  | |  |  |  |  |
| `EmrkdFndsDocLastChangedByUser` |  | |  |  |  |  |
| `EmrkdFndsDocLastChangeDate` |  | |  |  |  |  |
| `EmrkdFndsDocLastChangeDateTime` |  | |  |  |  |  |
| `OrgnlBusinessTransactionType` |  | |  |  |  |  |
| `ReferenceDocumentType` |  | |  |  |  |  |
| `ReferenceDocument` |  | |  |  |  |  |
| `ReferenceDocumentContext` |  | |  |  |  |  |
| `ReferenceDocumentLogicalSystem` |  | |  |  |  |  |
| `EmrkdFndsIsMarkedForArchiving` |  | |  |  |  |  |
| `EmrkdFndsHasNegativeAmounts` |  | |  |  |  |  |
| `EmrkdFndsIsBlockedAgainstUsage` |  | |  |  |  |  |
| `EarmarkedFundsIsCompleted` |  | |  |  |  |  |
| `EarmarkedFundsIsApproved` |  | |  |  |  |  |
| `EmrkdFndsWasAlreadyAprvdOnce` |  | |  |  |  |  |
| `EmrkdFndsHasAddlCnsmpnLogic` |  | |  |  |  |  |
| `EarmarkedFundsDecisionReason` |  | |  |  |  |  |
| `EarmarkedFundsStartWorkflow` |  | |  |  |  |  |
| `EarmarkedFundsManualEditBlock` |  | |  |  |  |  |
| `EmrkdFndsMnlEditBlkForEdit` |  | |  |  |  |  |
| `EmrkdFndsHasValueAdjustments` |  | |  |  |  |  |
| `EarmarkedFundsDocEntryStatus` |  | |  |  |  |  |
| `EmrkdFndsTotalInTransCrcy` |  | |  |  |  |  |
| `EmrkdFndsRelTotalInTransCrcy` |  | |  |  |  |  |
| `EmrkdFndsOpenTotalInTransCrcy` |  | |  |  |  |  |
| `EmrkdFndsChgdTotalInTransCrcy` |  | |  |  |  |  |
| `EmrkdFndsCnsmdTotalInTransCrcy` |  | |  |  |  |  |
| `EmrkdFndsOriglTotalInTransCrcy` |  | |  |  |  |  |
| `I_EarmarkedFundsDocumentItemTP` |  | |  | `efdoc._EarmarkedFundsDocumentItem : redirected to composition child I_EarmarkedFundsDocumentItemTP` |  |  |

## Source Code

```abap
@ObjectModel.supportedCapabilities: [ #TRANSACTIONAL_PROVIDER ]
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
  }
@ObjectModel:{
   usageType: {
     serviceQuality: #C,
     sizeCategory: #M,
     dataClass: #TRANSACTIONAL }
 }
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
  }
@ObjectModel.sapObjectNodeType.name: 'EarmarkedFundsDocument'
@EndUserText.label: 'EarmarkedFundsDocument - TP'
@Metadata.ignorePropagatedAnnotations: true


define root view entity I_EarmarkedFundsDocumentTP
  provider contract transactional_interface

  as projection on R_EarmarkedFundsDocumentTP as efdoc
{
  key EarmarkedFundsDocument,
      @ObjectModel.editableFieldFor: 'EarmarkedFundsDocument'
      EarmarkedFundsDocumentForEdit,
      EarmarkedFundsDocumentCategory,
      EarmarkedFundsDocumentType,
      CompanyCode,
      FinancialManagementArea,
      ControllingArea,
      TransactionCurrency,
      CompanyCodeCurrency,
      EarmarkedFundsDocReference,
      EarmarkedFundsDocReference2,
      EarmarkedFundsDocReference3,
      EarmarkedFundsHeaderText,
      EarmarkedFundsHasLongText,
      PostingDate,
      DocumentDate,
      ExchangeRateDate,
      AbsoluteExchangeRate,
      ExchRateIsIndirectQuotation,
      EmrkdFndsDocCreatedByUser,
      EmrkdFndsDocCreationDate,
      EmrkdFndsDocLastChangedByUser,
      EmrkdFndsDocLastChangeDate,
      EmrkdFndsDocLastChangeDateTime,
      OrgnlBusinessTransactionType,
      ReferenceDocumentType,
      ReferenceDocument,
      ReferenceDocumentContext,
      ReferenceDocumentLogicalSystem,
      EmrkdFndsIsMarkedForArchiving,
      EmrkdFndsHasNegativeAmounts,
      EmrkdFndsIsBlockedAgainstUsage,
      EarmarkedFundsIsCompleted,
      @Semantics.booleanIndicator
      EarmarkedFundsIsApproved,
      @Semantics.booleanIndicator
      EmrkdFndsWasAlreadyAprvdOnce,
      EmrkdFndsHasAddlCnsmpnLogic,
      EarmarkedFundsDecisionReason,
      EarmarkedFundsStartWorkflow,
      EarmarkedFundsManualEditBlock,
      @ObjectModel.editableFieldFor: 'EarmarkedFundsManualEditBlock'
      EmrkdFndsMnlEditBlkForEdit,
      EmrkdFndsHasValueAdjustments,
      EarmarkedFundsDocEntryStatus,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      EmrkdFndsTotalInTransCrcy,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      EmrkdFndsRelTotalInTransCrcy,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      EmrkdFndsOpenTotalInTransCrcy,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      EmrkdFndsChgdTotalInTransCrcy,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      EmrkdFndsCnsmdTotalInTransCrcy,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      EmrkdFndsOriglTotalInTransCrcy,
      //      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      //      EmrkdFndsTotalInCCCrcy,
      //      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      //      EmrkdFndsRelTotalInCCCrcy,
      //      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      //      EmrkdFndsOpenTotalInCCCrcy,
      //      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      //      EmrkdFndsChgdTotalInCCCrcy,
      //      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      //      EmrkdFndsCnsmdTotalInCCCrcy,
      //      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      //      EmrkdFndsOriglTotalInCCCrcy,
      /* Associations */
      //      _CompanyCode,
      //      _CompanyCodeCurrency,
      //      _ControllingArea,
      //      _EarmarkedFundsDcsnReason,
      //      _EarmarkedFundsDocCategory,
      //      _EarmarkedFundsDocCatText,
      //      _EarmarkedFundsDocEntryStatus,
      //      _EarmarkedFundsDocTotals,
      //      _EarmarkedFundsDocType,
      //      _EarmarkedFundsDocTypeText,
      //      _EarmarkedFundsDocumentItem,
      //      _EarmarkedFundsMnlEditBlk,
      //      _EmrkdFndsDocCreatedByUser,
      //      _EmrkdFndsDocLastChangedByUser,
      //      _FinancialManagementArea,
      //      _FiscalCalDateForFinMgmtArea,
      //      _FiscalYearForCompanyCode,
      //      _RefDocumentLogicalSystem,
      //      _ReferenceDocumentType,
      //      _ReferenceDocumentTypeText,
      //      _TransactionCurrency,


      efdoc._EarmarkedFundsDocumentItem : redirected to composition child I_EarmarkedFundsDocumentItemTP
      //  _association_name // Make association public
}
```
