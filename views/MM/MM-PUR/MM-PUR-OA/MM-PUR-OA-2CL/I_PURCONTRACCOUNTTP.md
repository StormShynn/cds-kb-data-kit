---
name: I_PURCONTRACCOUNTTP
description: "Purcontraccounttp"
app_component: MM-PUR-OA-2CL
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
  - component:MM-PUR-OA-2CL
  - lob:Sourcing & Procurement
---
# I_PURCONTRACCOUNTTP

**Purcontraccounttp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-OA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AccountAssignmentNumber` | ✓ | |  |  |  |  |
| `PurchaseContractItem` | ✓ | |  |  |  |  |
| `PurchaseContract` | ✓ | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `MasterFixedAsset` |  | |  |  |  |  |
| `ProjectNetwork` |  | |  |  |  |  |
| `Quantity` |  | |  |  |  |  |
| `OrderQuantityUnit` |  | |  |  |  |  |
| `MultipleAcctAssgmtDistrPercent` |  | |  |  |  |  |
| `PurgDocNetAmount` |  | |  |  |  |  |
| `DocumentCurrency` |  | |  |  |  |  |
| `IsDeleted` |  | |  |  |  |  |
| `GLAccount` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `SalesOrder` |  | |  |  |  |  |
| `SalesOrderItem` |  | |  |  |  |  |
| `SalesOrderScheduleLine` |  | |  |  |  |  |
| `FixedAsset` |  | |  |  |  |  |
| `OrderID` |  | |  |  |  |  |
| `UnloadingPointName` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `CostObject` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `WBSDescription` |  | |  |  |  |  |
| `ProjectNetworkInternalID` |  | |  |  |  |  |
| `CommitmentItemShortID` |  | |  |  |  |  |
| `FundsCenter` |  | |  |  |  |  |
| `Fund` |  | |  |  |  |  |
| `FunctionalArea` |  | |  |  |  |  |
| `LastChangedDate` |  | |  |  |  |  |
| `GoodsRecipientName` |  | |  |  |  |  |
| `IsFinallyInvoiced` |  | |  |  |  |  |
| `NetworkActivityInternalID` |  | |  |  |  |  |
| `PartnerAccountNumber` |  | |  |  |  |  |
| `JointVentureRecoveryCode` |  | |  |  |  |  |
| `SettlementReferenceDate` |  | |  |  |  |  |
| `OrderInternalID` |  | |  |  |  |  |
| `OrderIntBillOfOperationsItem` |  | |  |  |  |  |
| `TaxCode` |  | |  |  |  |  |
| `TaxJurisdiction` |  | |  |  |  |  |
| `NonDeductibleInputTaxAmount` |  | |  |  |  |  |
| `CostCtrActivityType` |  | |  |  |  |  |
| `BusinessProcess` |  | |  |  |  |  |
| `GrantID` |  | |  |  |  |  |
| `BudgetPeriod` |  | |  |  |  |  |
| `EarmarkedFundsDocument` |  | |  |  |  |  |
| `ValidityDate` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `_PurchaseContractItem` | | ✓ | | | | |
| `_PurContract` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Purchase Contract Account - TP'
@AccessControl.authorizationCheck: #CHECK

@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey: ['AccountAssignmentNumber','PurchaseContractItem','PurchaseContract' ]
@ObjectModel.representativeKey: 'AccountAssignmentNumber'

@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #MIXED
}

@Metadata.ignorePropagatedAnnotations: true
define view entity I_PurContrAccountTP
  as projection on R_PurContrAccountTP
{
  key AccountAssignmentNumber,
      @ObjectModel.foreignKey.association: '_PurchaseContractItem'
  key PurchaseContractItem,
      @ObjectModel.foreignKey.association: '_PurContract'
  key PurchaseContract,
      CostCenter,
      MasterFixedAsset,
      ProjectNetwork,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      Quantity,
      OrderQuantityUnit,
      MultipleAcctAssgmtDistrPercent,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      PurgDocNetAmount,
      DocumentCurrency,
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
      //     ProfitabilitySegment,
      ProfitCenter,
      WBSElementInternalID,
      WBSDescription,
      ProjectNetworkInternalID,
      CommitmentItemShortID,
      FundsCenter,
      Fund,
      FunctionalArea,
      LastChangedDate,
      GoodsRecipientName,
      IsFinallyInvoiced,
      //      RealEstateObject,
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
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,

      /* Associations */
      _PurchaseContractItem : redirected to parent I_PurchaseContractItemTP,
      _PurContract          : redirected to I_PurchaseContractTP
}
```
