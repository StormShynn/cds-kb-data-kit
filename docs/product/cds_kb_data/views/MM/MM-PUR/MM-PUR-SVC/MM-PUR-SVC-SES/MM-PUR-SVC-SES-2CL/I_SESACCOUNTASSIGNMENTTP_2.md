---
name: I_SESACCOUNTASSIGNMENTTP_2
description: "Sesaccountassignmenttp 2"
app_component: MM-PUR-SVC-SES-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
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

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceEntrySheet` | ✓ | |  |  |  |  |
| `ServiceEntrySheetItem` | ✓ | |  |  |  |  |
| `AccountAssignment` | ✓ | |  |  |  |  |
| `RefDocAccountAssignment` |  | |  |  |  |  |
| `IsDeleted` |  | |  |  |  |  |
| `QuantityUnit` |  | |  |  |  |  |
| `Quantity` |  | |  |  |  |  |
| `NetAmount` |  | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `MultipleAcctAssgmtDistrPercent` |  | |  |  |  |  |
| `GLAccount` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `SalesOrder` |  | |  |  |  |  |
| `SalesOrderItem` |  | |  |  |  |  |
| `SalesOrderScheduleLine` |  | |  |  |  |  |
| `MasterFixedAsset` |  | |  |  |  |  |
| `FixedAsset` |  | |  |  |  |  |
| `OrderID` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `CostObject` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `ProjectNetwork` |  | |  |  |  |  |
| `ProjectNetworkInternalID` |  | |  |  |  |  |
| `NetworkActivityInternalID` |  | |  |  |  |  |
| `NetworkActivity` |  | |  |  |  |  |
| `REInternalFinNumber` |  | |  |  |  |  |
| `CostCtrActivityType` |  | |  |  |  |  |
| `BusinessProcess` |  | |  |  |  |  |
| `SettlementReferenceDate` |  | |  |  |  |  |
| `GoodsRecipientName` |  | |  |  |  |  |
| `UnloadingPointName` |  | |  |  |  |  |
| `OrderInternalID` |  | |  |  |  |  |
| `OrderIntBillOfOperationsItem` |  | |  |  |  |  |
| `CommitmentItem` |  | |  |  |  |  |
| `FundsCenter` |  | |  |  |  |  |
| `Fund` |  | |  |  |  |  |
| `FunctionalArea` |  | |  |  |  |  |
| `EarmarkedFundsDocument` |  | |  |  |  |  |
| `EarmarkedFundsDocumentItem` |  | |  |  |  |  |
| `BudgetPeriod` |  | |  |  |  |  |
| `GrantID` |  | |  |  |  |  |
| `FundedProgram` |  | |  |  |  |  |
| `ServiceDocumentType` |  | |  |  |  |  |
| `ServiceDocument` |  | |  |  |  |  |
| `ServiceDocumentItem` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `IsEndOfPurposeBlocked` |  | |  |  |  |  |
| `ValidityDate` |  | |  |  |  |  |
| `Currency` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `ChartOfAccounts` |  | |  |  |  |  |
| `_ServiceEntrySheetItem` | | ✓ | | | | |
| `_SESHeader` | | ✓ | | | | |

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
