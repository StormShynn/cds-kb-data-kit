---
name: I_SCHEDGAGRMTACCTTP_2
description: Schedgagrmtaccttp 2
app_component: MM-PUR-OA-SCH-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-OA
  - interface-view
  - transactional-processing
  - component:MM-PUR-OA-SCH-2CL
  - lob:Sourcing & Procurement
---
# I_SCHEDGAGRMTACCTTP_2

**Schedgagrmtaccttp 2**

| Property | Value |
|---|---|
| App Component | `MM-PUR-OA-SCH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `AccountAssignmentNumber` | `AccountAssignmentNumber` |
| key `SchedulingAgreementItem` | `SchedulingAgreementItem` |
| key `SchedulingAgreement` | `SchedulingAgreement` |
| `CostCenter` | `CostCenter` |
| `MasterFixedAsset` | `MasterFixedAsset` |
| `ProjectNetwork` | `ProjectNetwork` |
| `NetworkActivity` | `NetworkActivity` |
| `NetworkActivityDescription` | `NetworkActivityDescription` |
| `OrderQuantityUnit` | `OrderQuantityUnit` |
| `Quantity` | `Quantity` |
| `MultipleAcctAssgmtDistrPercent` | `MultipleAcctAssgmtDistrPercent` |
| `DocumentCurrency` | `DocumentCurrency` |
| `PurgDocNetAmount` | `PurgDocNetAmount` |
| `IsDeleted` | `IsDeleted` |
| `GLAccount` | `GLAccount` |
| `BusinessArea` | `BusinessArea` |
| `SalesOrder` | `SalesOrder` |
| `SalesOrderItem` | `SalesOrderItem` |
| `SalesOrderScheduleLine` | `SalesOrderScheduleLine` |
| `FixedAsset` | `FixedAsset` |
| `OrderID` | `OrderID` |
| `UnloadingPointName` | `UnloadingPointName` |
| `ControllingArea` | `ControllingArea` |
| `CostObject` | `CostObject` |
| `ProfitCenter` | `ProfitCenter` |
| `WBSElementInternalID` | `WBSElementInternalID` |
| `CompanyCode` | `CompanyCode` |
| `ProjectNetworkInternalID` | `ProjectNetworkInternalID` |
| `CommitmentItem` | `CommitmentItem` |
| `CommitmentItemShortID` | `CommitmentItemShortID` |
| `FundsCenter` | `FundsCenter` |
| `FunctionalArea` | `FunctionalArea` |
| `LastChangedDate` | `LastChangedDate` |
| `GoodsRecipientName` | `GoodsRecipientName` |
| `IsFinallyInvoiced` | `IsFinallyInvoiced` |
| `REInternalFinNumber` | `REInternalFinNumber` |
| `NetworkActivityInternalID` | `NetworkActivityInternalID` |
| `PartnerAccountNumber` | `PartnerAccountNumber` |
| `JointVentureRecoveryCode` | `JointVentureRecoveryCode` |
| `SettlementReferenceDate` | `SettlementReferenceDate` |
| `OrderInternalID` | `OrderInternalID` |
| `OrderIntBillOfOperationsItem` | `OrderIntBillOfOperationsItem` |
| `TaxCode` | `TaxCode` |
| `TaxJurisdiction` | `TaxJurisdiction` |
| `NonDeductibleInputTaxAmount` | `NonDeductibleInputTaxAmount` |
| `CostCtrActivityType` | `CostCtrActivityType` |
| `BusinessProcess` | `BusinessProcess` |
| `GrantID` | `GrantID` |
| `BudgetPeriod` | `BudgetPeriod` |
| `EarmarkedFundsDocument` | `EarmarkedFundsDocument` |
| `ValidityDate` | `ValidityDate` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `_SchedgAgrmtItm` | *Association* |
| `_PurSchedgAgrmt` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Scheduling Agreement Account Assignment'
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey: ['AccountAssignmentNumber','SchedulingAgreementItem','SchedulingAgreement']

@ObjectModel: {
    usageType: {
      sizeCategory: #L,
      serviceQuality: #C,
      dataClass: #MIXED
    }
  }

@Metadata.ignorePropagatedAnnotations: true

define view entity I_SchedgAgrmtAcctTP_2
  as projection on R_SchedgAgrmtAcctTP
{
  key AccountAssignmentNumber,
  key SchedulingAgreementItem,
  key SchedulingAgreement,
      CostCenter,
      MasterFixedAsset,
      ProjectNetwork,
      NetworkActivity,
      NetworkActivityDescription,
      OrderQuantityUnit,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      Quantity,
      MultipleAcctAssgmtDistrPercent,
      DocumentCurrency,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      PurgDocNetAmount,
      IsDeleted,
      GLAccount,
      BusinessArea,
      SalesOrder,
      SalesOrderItem,
      SalesOrderScheduleLine,
      FixedAsset,
      OrderID,
      UnloadingPointName,
      ControllingArea,
      CostObject,
//      ProfitabilitySegment,
      ProfitCenter,
      WBSElementInternalID,
      CompanyCode,
      ProjectNetworkInternalID,
      CommitmentItem,
      CommitmentItemShortID,
      FundsCenter,
      FunctionalArea,
      LastChangedDate,
      GoodsRecipientName,
      IsFinallyInvoiced,
//      RealEstateObject,
      REInternalFinNumber,
      NetworkActivityInternalID,
      PartnerAccountNumber,
      JointVentureRecoveryCode,
      SettlementReferenceDate,
      OrderInternalID,
      OrderIntBillOfOperationsItem,
      TaxCode,
      TaxJurisdiction,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      NonDeductibleInputTaxAmount,
      CostCtrActivityType,
      BusinessProcess,
      GrantID,
      BudgetPeriod,
      EarmarkedFundsDocument,
      ValidityDate,
      LastChangeDateTime,

      /* Associations */
      _SchedgAgrmtItm : redirected to parent I_SchedgAgrmtItmTP_2,
      _PurSchedgAgrmt : redirected to I_SchedgAgrmtHdrTP_2

}
```
