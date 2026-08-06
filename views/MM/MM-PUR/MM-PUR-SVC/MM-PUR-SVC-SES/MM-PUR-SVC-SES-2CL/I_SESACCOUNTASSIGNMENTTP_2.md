---
name: I_SESACCOUNTASSIGNMENTTP_2
description: Sesaccountassignmenttp 2
app_component: MM-PUR-SVC-SES-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-SVC
  - interface-view
  - transactional-processing
  - component:MM-PUR-SVC-SES-2CL
  - lob:Sourcing & Procurement
---
# I_SESACCOUNTASSIGNMENTTP_2

**Sesaccountassignmenttp 2**

| Property | Value |
|---|---|
| App Component | `MM-PUR-SVC-SES-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ServiceEntrySheet` | `ServiceEntrySheet` |
| key `ServiceEntrySheetItem` | `ServiceEntrySheetItem` |
| key `AccountAssignment` | `AccountAssignment` |
| `RefDocAccountAssignment` | `RefDocAccountAssignment` |
| `IsDeleted` | `IsDeleted` |
| `QuantityUnit` | `QuantityUnit` |
| `Quantity` | `Quantity` |
| `NetAmount` | `NetAmount` |
| `CostCenter` | `CostCenter` |
| `MultipleAcctAssgmtDistrPercent` | `MultipleAcctAssgmtDistrPercent` |
| `GLAccount` | `GLAccount` |
| `BusinessArea` | `BusinessArea` |
| `SalesOrder` | `SalesOrder` |
| `SalesOrderItem` | `SalesOrderItem` |
| `SalesOrderScheduleLine` | `SalesOrderScheduleLine` |
| `MasterFixedAsset` | `MasterFixedAsset` |
| `FixedAsset` | `FixedAsset` |
| `OrderID` | `OrderID` |
| `ControllingArea` | `ControllingArea` |
| `CostObject` | `CostObject` |
| `ProfitCenter` | `ProfitCenter` |
| `WBSElementInternalID` | `WBSElementInternalID` |
| `ProjectNetwork` | `ProjectNetwork` |
| `ProjectNetworkInternalID` | `ProjectNetworkInternalID` |
| `NetworkActivityInternalID` | `NetworkActivityInternalID` |
| `NetworkActivity` | `NetworkActivity` |
| `REInternalFinNumber` | `REInternalFinNumber` |
| `CostCtrActivityType` | `CostCtrActivityType` |
| `BusinessProcess` | `BusinessProcess` |
| `SettlementReferenceDate` | `SettlementReferenceDate` |
| `GoodsRecipientName` | `GoodsRecipientName` |
| `UnloadingPointName` | `UnloadingPointName` |
| `OrderInternalID` | `OrderInternalID` |
| `OrderIntBillOfOperationsItem` | `OrderIntBillOfOperationsItem` |
| `CommitmentItem` | `CommitmentItem` |
| `FundsCenter` | `FundsCenter` |
| `Fund` | `Fund` |
| `FunctionalArea` | `FunctionalArea` |
| `EarmarkedFundsDocument` | `EarmarkedFundsDocument` |
| `EarmarkedFundsDocumentItem` | `EarmarkedFundsDocumentItem` |
| `BudgetPeriod` | `BudgetPeriod` |
| `GrantID` | `GrantID` |
| `FundedProgram` | `FundedProgram` |
| `ServiceDocumentType` | `ServiceDocumentType` |
| `ServiceDocument` | `ServiceDocument` |
| `ServiceDocumentItem` | `ServiceDocumentItem` |
| `CreationDateTime` | `CreationDateTime` |
| `CreatedByUser` | `CreatedByUser` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `LastChangedByUser` | `LastChangedByUser` |
| `PurchasingOrganization` | `PurchasingOrganization` |
| `PurchasingGroup` | `PurchasingGroup` |
| `Plant` | `Plant` |
| `IsEndOfPurposeBlocked` | `IsEndOfPurposeBlocked` |
| `ValidityDate` | `ValidityDate` |
| `Currency` | `Currency` |
| `CompanyCode` | `CompanyCode` |
| `ChartOfAccounts` | `ChartOfAccounts` |
| `_ServiceEntrySheetItem` | *Association* |
| `_SESHeader` | *Association* |

## Source Code

```abap
@EndUserText.label: 'SES Account Assignment'
@AccessControl.authorizationCheck: #MANDATORY

@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey: ['ServiceEntrySheet', 'ServiceEntrySheetItem', 'AccountAssignment']

@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #MIXED
}

@Metadata.ignorePropagatedAnnotations: true
define view entity I_SESAccountAssignmentTP_2
  as projection on R_SESAccountAssignmentTP
{
  key ServiceEntrySheet,
  key ServiceEntrySheetItem,
  key AccountAssignment,
      RefDocAccountAssignment,
      IsDeleted,
      QuantityUnit,
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      Quantity,
      @Semantics.amount.currencyCode: 'Currency'
      NetAmount,
      CostCenter,
      MultipleAcctAssgmtDistrPercent,
      GLAccount,
      BusinessArea,
      SalesOrder,
      SalesOrderItem,
      SalesOrderScheduleLine,
      MasterFixedAsset,
      FixedAsset,
      OrderID,
      ControllingArea,
      CostObject,
//      ProfitabilitySegment,
      ProfitCenter,
      WBSElementInternalID,
      ProjectNetwork,
      ProjectNetworkInternalID,
      NetworkActivityInternalID,
      NetworkActivity,
      REInternalFinNumber,
      CostCtrActivityType,
      BusinessProcess,
      SettlementReferenceDate,
      GoodsRecipientName,
      UnloadingPointName,
      OrderInternalID,
      OrderIntBillOfOperationsItem,
      CommitmentItem,
      //CommitmentItemShortID,
      FundsCenter,
      Fund,
      FunctionalArea,
      EarmarkedFundsDocument,
      EarmarkedFundsDocumentItem,
      BudgetPeriod,
      GrantID,
      FundedProgram,
      ServiceDocumentType,
      ServiceDocument,
      ServiceDocumentItem,
      CreationDateTime,
      CreatedByUser,
      LastChangeDateTime,
      LastChangedByUser,
      PurchasingOrganization,
      PurchasingGroup,
      Plant,
      @Semantics.booleanIndicator
      IsEndOfPurposeBlocked,
      ValidityDate,
      Currency,
      CompanyCode,
      ChartOfAccounts,
      /* Associations */
      _ServiceEntrySheetItem : redirected to parent I_ServiceEntrySheetItemTP_2,
      _SESHeader             : redirected to I_ServiceEntrySheetTP_2
}
```
