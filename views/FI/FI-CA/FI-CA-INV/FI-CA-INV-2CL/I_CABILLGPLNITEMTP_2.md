---
name: I_CABILLGPLNITEMTP_2
description: Cabillgplnitemtp 2
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - FI-CA-INV
  - interface-view
  - transactional-processing
  - item-level
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CABILLGPLNITEMTP_2

**Cabillgplnitemtp 2**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CABillgPlnNumber` | `CABillgPlnNumber` |
| key `CABillgPlnItem` | `CABillgPlnItem` |
| `CABillgPlnItmCat` | `CABillgPlnItmCat` |
| `CABillgPlnItmType` | `CABillgPlnItmType` |
| `CABillgPlnItmTxt` | `CABillgPlnItmTxt` |
| `CABillgPlnItemExtRef` | `CABillgPlnItemExtRef` |
| `CABillgPlnItemAmount` | `CABillgPlnItemAmount` |
| `TransactionCurrency` | `TransactionCurrency` |
| `CATaxIsIncluded` | `CATaxIsIncluded` |
| `CABillgPlnItemQuantity` | `CABillgPlnItemQuantity` |
| `CABillgPlnItemQuantityUnit` | `CABillgPlnItemQuantityUnit` |
| `CATaxDeterminationCode` | `CATaxDeterminationCode` |
| `TaxCode` | `TaxCode` |
| `CABillgPlnItemStartDate` | `CABillgPlnItemStartDate` |
| `CABillgPlnItmEndDate` | `CABillgPlnItmEndDate` |
| `CABillgPlnItemTermStartDate` | `CABillgPlnItemTermStartDate` |
| `CABillgPlnItemTermEndDate` | `CABillgPlnItemTermEndDate` |
| `CABillgPlnItemRecurring` | `CABillgPlnItemRecurring` |
| `CABillgCycle` | `CABillgCycle` |
| `CAStartDateForBillingPeriod` | `CAStartDateForBillingPeriod` |
| `CAConditionType` | `CAConditionType` |
| `CABillgPlnItemAmountDetnType` | `CABillgPlnItemAmountDetnType` |
| `CABillgPlnItemAmountDateType` | `CABillgPlnItemAmountDateType` |
| `CABillgPlnItemPriceDateType` | `CABillgPlnItemPriceDateType` |
| `CAContract` | `CAContract` |
| `CAProviderContractItemNumber` | `CAProviderContractItemNumber` |
| `CASubApplication` | `CASubApplication` |
| `CAProviderContractItemUUID` | `CAProviderContractItemUUID` |
| `Division` | `Division` |
| `CompanyCode` | `CompanyCode` |
| `BusinessArea` | `BusinessArea` |
| `Segment` | `Segment` |
| `CAMainTransaction` | `CAMainTransaction` |
| `CASubTransaction` | `CASubTransaction` |
| `CABillgPlnItemServiceType` | `CABillgPlnItemServiceType` |
| `CADependentItemType` | `CADependentItemType` |
| `Material` | `Material` |
| `SalesOrganization` | `SalesOrganization` |
| `DistributionChannel` | `DistributionChannel` |
| `CAAccountDeterminationCode` | `CAAccountDeterminationCode` |
| `CAInvcgOffsettingAction` | `CAInvcgOffsettingAction` |
| `CAInvcgOffsettingCategory` | `CAInvcgOffsettingCategory` |
| `CAInvcgOffsettingProcedure` | `CAInvcgOffsettingProcedure` |
| `CAInvcgOffsettingReferenceKey` | `CAInvcgOffsettingReferenceKey` |
| `CABillgPlnItemReqDteLast` | `CABillgPlnItemReqDteLast` |
| `CABillgPlnItemReqDteNext` | `CABillgPlnItemReqDteNext` |
| `CABillgPlnDvtgNextRequestDate` | `CABillgPlnDvtgNextRequestDate` |
| `CABillgPlnItemRequestedToDte` | `CABillgPlnItemRequestedToDte` |
| `CABillgPlnItemCanceled` | `CABillgPlnItemCanceled` |
| `CABillgPlnSubItmExist` | `CABillgPlnSubItmExist` |
| `CABillgPlnItemMain` | `CABillgPlnItemMain` |
| `CABillgPlnItmExcptnReason` | `CABillgPlnItmExcptnReason` |
| `CABillgPlnItemChildExist` | `CABillgPlnItemChildExist` |
| `CABillgPlnItemParent` | `CABillgPlnItemParent` |
| `CABillgPlnItemStatus` | `CABillgPlnItemStatus` |
| `CABillgPlnItemNrOfBllbleItm` | `CABillgPlnItemNrOfBllbleItm` |
| `CAIsRevnAcctgTransfRecordRlvt` | `CAIsRevnAcctgTransfRecordRlvt` |
| `ConditionType` | `ConditionType` |
| `ConditionIsForStatistics` | `ConditionIsForStatistics` |
| `CANetDueDate` | `CANetDueDate` |
| `CABillgPlnItmIsNotToBeReqd` | `CABillgPlnItmIsNotToBeReqd` |
| `CABllbleItmCostType` | `CABllbleItmCostType` |
| `CABllbleItmCostSubType` | `CABllbleItmCostSubType` |
| `CAIntcoCompanyCodeRequesting` | `CAIntcoCompanyCodeRequesting` |
| `CAIntcoCompanyCodeSupplying` | `CAIntcoCompanyCodeSupplying` |
| `CAIntcoType` | `CAIntcoType` |
| `CAIntcoSubtype` | `CAIntcoSubtype` |
| `TaxCalculationProcedure` | `TaxCalculationProcedure` |
| `CAApplicationArea` | `CAApplicationArea` |
| `_CABillgPln` | *Association* |

## Source Code

```abap
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@VDM.usage.type:[#TRANSACTIONAL_PROCESSING_SERVICE]

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.serviceQuality: #C

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Billing Plan Item - TP'
define view entity I_CABillgPlnItemTP_2
  as projection on R_CABillgPlnItemTP as _CABillgPlnItemTP
{
  key CABillgPlnNumber,
  key CABillgPlnItem,
      CABillgPlnItmCat,
      CABillgPlnItmType,
      CABillgPlnItmTxt,
      CABillgPlnItemExtRef,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      CABillgPlnItemAmount,
      TransactionCurrency,
      CATaxIsIncluded,
      @Semantics.quantity.unitOfMeasure: 'CABillgPlnItemQuantityUnit'
      CABillgPlnItemQuantity,
      CABillgPlnItemQuantityUnit,
      CATaxDeterminationCode,
      TaxCode,
      CABillgPlnItemStartDate,
      CABillgPlnItmEndDate,
      CABillgPlnItemTermStartDate,
      CABillgPlnItemTermEndDate,
      CABillgPlnItemRecurring,
      CABillgCycle,
      CAStartDateForBillingPeriod,
      CAConditionType,
      CABillgPlnItemAmountDetnType,
      CABillgPlnItemAmountDateType,
      CABillgPlnItemPriceDateType,
      CAContract,
      CAProviderContractItemNumber,
      CASubApplication,
      CAProviderContractItemUUID,
      Division,
      CompanyCode,
      BusinessArea,
      Segment,
      CAMainTransaction,
      CASubTransaction,
      CABillgPlnItemServiceType,
      CADependentItemType,
      Material,
      SalesOrganization,
      DistributionChannel,
      CAAccountDeterminationCode,
      CAInvcgOffsettingAction,
      CAInvcgOffsettingCategory,
      CAInvcgOffsettingProcedure,
      CAInvcgOffsettingReferenceKey,
      CABillgPlnItemReqDteLast,
      CABillgPlnItemReqDteNext,
      CABillgPlnDvtgNextRequestDate,
      CABillgPlnItemRequestedToDte,
      CABillgPlnItemCanceled,
      CABillgPlnSubItmExist,
      CABillgPlnItemMain,
      CABillgPlnItmExcptnReason,
      CABillgPlnItemChildExist,
      CABillgPlnItemParent,
      CABillgPlnItemStatus,
      CABillgPlnItemNrOfBllbleItm,
      CAIsRevnAcctgTransfRecordRlvt,
      ConditionType,
      ConditionIsForStatistics,
      CANetDueDate,
      CABillgPlnItmIsNotToBeReqd,
      CABllbleItmCostType,
      CABllbleItmCostSubType,
      CAIntcoCompanyCodeRequesting,
      CAIntcoCompanyCodeSupplying,
      CAIntcoType,
      CAIntcoSubtype,
      TaxCalculationProcedure,
      CAApplicationArea,

      /* Associations */
      _CABillgPln : redirected to parent I_CABillgPlnTP_2
}
```
