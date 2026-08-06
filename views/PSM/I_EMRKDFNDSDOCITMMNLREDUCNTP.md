---
name: I_EMRKDFNDSDOCITMMNLREDUCNTP
description: Emrkdfndsdocitmmnlreducntp
app_component: PSM
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PSM
  - interface-view
  - transactional-processing
  - component:PSM
  - lob:Other
---
# I_EMRKDFNDSDOCITMMNLREDUCNTP

**Emrkdfndsdocitmmnlreducntp**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `EarmarkedFundsDocument` | `EarmarkedFundsDocument` |
| key `EarmarkedFundsDocumentItem` | `EarmarkedFundsDocumentItem` |
| key `EmrkdFndsDocItmMnlReducn` | `EmrkdFndsDocItmMnlReducn` |
| `CompanyCode` | `CompanyCode` |
| `BusinessTransactionType` | `BusinessTransactionType` |
| `CreatedByUser` | `CreatedByUser` |
| `CreationDate` | `CreationDate` |
| `LastChangedByUser` | `LastChangedByUser` |
| `LastChangeDate` | `LastChangeDate` |
| `ReferenceDocumentType` | `ReferenceDocumentType` |
| `ReferenceDocument` | `ReferenceDocument` |
| `ReferenceDocumentContext` | `ReferenceDocumentContext` |
| `ReferenceDocumentLogicalSystem` | `ReferenceDocumentLogicalSystem` |
| `FiscalYear` | `FiscalYear` |
| `AccountingDocument` | `AccountingDocument` |
| `AccountingDocumentItem` | `AccountingDocumentItem` |
| `PurchasingDocument` | `PurchasingDocument` |
| `PurchasingDocumentItem` | `PurchasingDocumentItem` |
| `AccountAssignmentNumber` | `AccountAssignmentNumber` |
| `ScheduleLine` | `ScheduleLine` |
| `PurchaseRequisition` | `PurchaseRequisition` |
| `PurchaseRequisitionItem` | `PurchaseRequisitionItem` |
| `PurchaseReqnAcctAssgmtNumber` | `PurchaseReqnAcctAssgmtNumber` |
| `EmrkdFndsItmProcgIsStatistical` | `EmrkdFndsItmProcgIsStatistical` |
| `IsReversed` | `IsReversed` |
| `EarmarkedFundsDocItmProcgText` | `EarmarkedFundsDocItmProcgText` |
| `TransactionCurrency` | `TransactionCurrency` |
| `EmrkdFndsProcgAmtInTransCrcy` | `EmrkdFndsProcgAmtInTransCrcy` |
| `CompanyCodeCurrency` | `CompanyCodeCurrency` |
| `EmrkdFndsProcgAmtInCCCrcy` | `EmrkdFndsProcgAmtInCCCrcy` |
| `I_EarmarkedFundsDocumentItemTP` | `efitmred._EarmarkedFundsDocumentItem : redirected to parent I_EarmarkedFundsDocumentItemTP` |
| `I_EarmarkedFundsDocumentTP` | `efitmred._EarmarkedFundsDocument : redirected to I_EarmarkedFundsDocumentTP` |

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
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
  }
@EndUserText.label: 'EarmarkedFundsDocument Mnl Reducn - TP'
@Metadata.ignorePropagatedAnnotations: true

define view entity I_EmrkdFndsDocItmMnlReducnTP 
 as projection on  R_EmrkdFndsDocItmMnlReducnTP as efitmred

{
  key EarmarkedFundsDocument,
  key EarmarkedFundsDocumentItem,
  key EmrkdFndsDocItmMnlReducn,
  CompanyCode,
  BusinessTransactionType,
  CreatedByUser,
  CreationDate,
  LastChangedByUser,
  LastChangeDate,
  ReferenceDocumentType,
  ReferenceDocument,
  ReferenceDocumentContext,
  ReferenceDocumentLogicalSystem,
  //  ReferenceDocumentItem,
  FiscalYear,
  AccountingDocument,
  AccountingDocumentItem,
  PurchasingDocument,
  PurchasingDocumentItem,
  AccountAssignmentNumber,
  ScheduleLine,
  PurchaseRequisition,
  PurchaseRequisitionItem,
  PurchaseReqnAcctAssgmtNumber,
  EmrkdFndsItmProcgIsStatistical,
  IsReversed,
  EarmarkedFundsDocItmProcgText,
  TransactionCurrency,
  @Semantics.amount.currencyCode: 'TransactionCurrency'
  EmrkdFndsProcgAmtInTransCrcy,
  CompanyCodeCurrency,
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  EmrkdFndsProcgAmtInCCCrcy,
  /* Associations */
//  _CompanyCode,
//  _ControllingBusTransacType,
//  _CreatedByUser,
//  _EarmarkedFundsDocument,
//  _EarmarkedFundsDocumentItem,
//  _FiscalYear,
//  _JournalEntry,
//  _LastChangedByUser,
//  _PurchaseRequisition,
//  _PurchaseRequisitionItem,
//  _PurchasingDocument,
//  _PurchasingDocumentItem,
//  _RefDocumentLogicalSystem,
//  _ReferenceDocumentType,
//  _ReferenceDocumentTypeText,
//  _TransactionCurrency,
  
  efitmred._EarmarkedFundsDocumentItem : redirected to parent I_EarmarkedFundsDocumentItemTP,
  efitmred._EarmarkedFundsDocument : redirected to I_EarmarkedFundsDocumentTP
//  _association_name // Make association public
}
```
