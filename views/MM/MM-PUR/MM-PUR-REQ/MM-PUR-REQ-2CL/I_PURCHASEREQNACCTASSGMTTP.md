---
name: I_PURCHASEREQNACCTASSGMTTP
description: Purchase RequisitionNACCTASSGMTTP
app_component: MM-PUR-REQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-REQ
  - interface-view
  - transactional-processing
  - purchase-requisition
  - component:MM-PUR-REQ-2CL
  - lob:Sourcing & Procurement
---
# I_PURCHASEREQNACCTASSGMTTP

**Purchase RequisitionNACCTASSGMTTP**

| Property | Value |
|---|---|
| App Component | `MM-PUR-REQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PurchaseRequisition` | `PurchaseRequisition` |
| key `PurchaseRequisitionItem` | `PurchaseRequisitionItem` |
| key `PurchaseReqnAcctAssgmtNumber` | `PurchaseReqnAcctAssgmtNumber` |
| `CostCenter` | `CostCenter` |
| `MasterFixedAsset` | `MasterFixedAsset` |
| `ProjectNetwork` | `ProjectNetwork` |
| `BaseUnit` | `BaseUnit` |
| `Quantity` | `Quantity` |
| `MultipleAcctAssgmtDistrPercent` | `MultipleAcctAssgmtDistrPercent` |
| `PurReqnItemCurrency` | `PurReqnItemCurrency` |
| `PurReqnNetAmount` | `PurReqnNetAmount` |
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
| `ProjectNetworkInternalID` | `ProjectNetworkInternalID` |
| `CommitmentItem` | `CommitmentItem` |
| `CommitmentItemShortID` | `CommitmentItemShortID` |
| `FundsCenter` | `FundsCenter` |
| `Fund` | `Fund` |
| `FunctionalArea` | `FunctionalArea` |
| `CreationDate` | `CreationDate` |
| `GoodsRecipientName` | `GoodsRecipientName` |
| `REInternalFinNumber` | `REInternalFinNumber` |
| `NetworkActivityInternalID` | `NetworkActivityInternalID` |
| `PartnerAccountNumber` | `PartnerAccountNumber` |
| `JointVentureRecoveryCode` | `JointVentureRecoveryCode` |
| `SettlementReferenceDate` | `SettlementReferenceDate` |
| `OrderInternalID` | `OrderInternalID` |
| `OrderIntBillOfOperationsItem` | `OrderIntBillOfOperationsItem` |
| `EarmarkedFundsDocument` | `EarmarkedFundsDocument` |
| `CostCtrActivityType` | `CostCtrActivityType` |
| `BusinessProcess` | `BusinessProcess` |
| `GrantID` | `GrantID` |
| `ValidityDate` | `ValidityDate` |
| `ChartOfAccounts` | `ChartOfAccounts` |
| `WBSElementInternalID` | `WBSElementInternalID` |
| `WBSElementExternalID` | `WBSElementExternalID` |
| `PurchaseRequisitionType` | `PurchaseRequisitionType` |
| `Plant` | `Plant` |
| `PurchasingOrganization` | `PurchasingOrganization` |
| `PurchasingGroup` | `PurchasingGroup` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `_Currency` | *Association* |
| `_UnitOfMeasure` | *Association* |
| `_PurchaseRequisitionItem` | *Association* |
| `_PurReqn` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Purchase Reqn Account Assignment - TP'

@AccessControl.authorizationCheck: #CHECK

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

//@ObjectModel.modelingPattern: #TRANSACTIONAL_PROJECTED_ENTITY
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel: {
    usageType: {
        sizeCategory: #L,
        serviceQuality: #C,
        dataClass:#MIXED
    }
  }
  
@ObjectModel.semanticKey: ['PurchaseRequisition', 'PurchaseRequisitionItem', 'PurchaseReqnAcctAssgmtNumber']
@ObjectModel.representativeKey: 'PurchaseReqnAcctAssgmtNumber'

@Metadata.ignorePropagatedAnnotations: true

@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

define view entity I_PurchaseReqnAcctAssgmtTP
  as projection on R_PurchaseReqnAcctAssgmtTP as _PurchaseReqnAcctAssgmt
{
  @ObjectModel.foreignKey.association: '_PurReqn'
  key PurchaseRequisition,
  @ObjectModel.foreignKey.association: '_PurchaseRequisitionItem'
  key PurchaseRequisitionItem,
  key PurchaseReqnAcctAssgmtNumber,
      CostCenter,
      MasterFixedAsset,
      ProjectNetwork,
      @ObjectModel.foreignKey.association: '_UnitOfMeasure'
      //@Semantics.unitOfMeasure: true
      BaseUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      Quantity,
      MultipleAcctAssgmtDistrPercent,
      @ObjectModel.foreignKey.association: '_Currency'
      //@Semantics.currencyCode: true
      PurReqnItemCurrency,
      @Semantics.amount.currencyCode: 'PurReqnItemCurrency'
      PurReqnNetAmount,
      @Semantics.booleanIndicator: true
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
      //ProfitabilitySegment,
      ProfitCenter,
      ProjectNetworkInternalID,
      CommitmentItem,
      CommitmentItemShortID,
      FundsCenter,
      Fund,
      FunctionalArea,
      CreationDate,
      GoodsRecipientName,
      REInternalFinNumber,
      NetworkActivityInternalID,
      PartnerAccountNumber,
      JointVentureRecoveryCode,
      SettlementReferenceDate,
      OrderInternalID,
      OrderIntBillOfOperationsItem,
      EarmarkedFundsDocument,
      CostCtrActivityType,
      BusinessProcess,
      GrantID,
      ValidityDate,
      ChartOfAccounts,
      WBSElementInternalID,
      WBSElementExternalID,
      PurchaseRequisitionType,
      Plant,
      PurchasingOrganization,
      PurchasingGroup,
      
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,
      
      /* Associations */
      _Currency,
      _UnitOfMeasure,
      _PurchaseRequisitionItem : redirected to parent I_PurchaseReqnItemTP,
      _PurReqn                 : redirected to I_PurchaseRequisitionTP
}
```
