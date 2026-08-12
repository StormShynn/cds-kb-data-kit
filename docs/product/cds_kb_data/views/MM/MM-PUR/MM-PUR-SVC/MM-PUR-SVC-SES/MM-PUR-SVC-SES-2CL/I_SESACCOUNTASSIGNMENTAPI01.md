---
name: I_SESACCOUNTASSIGNMENTAPI01
description: "Sesaccountassignmentapi 01"
app_component: MM-PUR-SVC-SES-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-SVC
  - interface-view
  - component:MM-PUR-SVC-SES-2CL
  - lob:Sourcing & Procurement
---
# I_SESACCOUNTASSIGNMENTAPI01

**Sesaccountassignmentapi 01**

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
| `AccountAssignmentNumber` | ✓ | |  | `AccountAssignment` |  |  |
| `SESRefDocAccountAssignment` |  | |  | `RefDocAccountAssignment` |  |  |
| `IsDeleted` |  | |  |  |  |  |
| `Quantity` |  | |  |  |  |  |
| `QuantityUnit` |  | |  |  |  |  |
| `NetAmount` |  | |  |  |  |  |
| `Currency` |  | |  |  |  |  |
| `MultipleAcctAssgmtDistrPercent` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `SalesOrder` |  | |  |  |  |  |
| `SalesOrderItem` |  | |  |  |  |  |
| `SalesOrderScheduleLine` |  | |  |  |  |  |
| `MasterFixedAsset` |  | |  |  |  |  |
| `FixedAsset` |  | |  |  |  |  |
| `OrderID` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `CostObject` |  | |  |  |  |  |
| `ProfitabilitySegment` |  | |  | `cast( ProfitabilitySegment as rkeobjnr_char )` |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `GLAccount` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  | `WBSElementInternalID_2` |  |  |
| `ProjectNetwork` |  | |  |  |  |  |
| `ProjectNetworkInternalID` |  | |  |  |  |  |
| `REInternalFinNumber` |  | |  |  |  |  |
| `NetworkActivityInternalID` |  | |  |  |  |  |
| `PartnerAccountNumber` |  | |  |  |  |  |
| `CostCtrActivityType` |  | |  |  |  |  |
| `BusinessProcess` |  | |  |  |  |  |
| `SettlementReferenceDate` |  | |  |  |  |  |
| `GoodsRecipientName` |  | |  |  |  |  |
| `UnloadingPointName` |  | |  |  |  |  |
| `OrderInternalID` |  | |  |  |  |  |
| `OrderIntBillOfOperationsItem` |  | |  |  |  |  |
| `CommitmentItemShortID` |  | |  |  |  |  |
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
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `IsEndOfPurposeBlocked` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  | `LastChangeUser` |  |  |
| `_ServiceEntrySheet` | | ✓ | | | | |
| `_ServiceEntrySheetItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceEntrySheet` | `I_ServiceEntrySheetAPI01` | [1..1] |
| `_ServiceEntrySheetItem` | `I_ServiceEntrySheetItemAPI01` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'IMMSESACAPI01'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE]

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED

@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Service Entry Sheet Account Assignment'

define view I_SESAccountAssignmentAPI01
  as select from I_SrvEntrySheetAcctAssgmtBasic

  association [1..1] to I_ServiceEntrySheetAPI01     as _ServiceEntrySheet     on  $projection.ServiceEntrySheet = _ServiceEntrySheet.ServiceEntrySheet
  association [1..1] to I_ServiceEntrySheetItemAPI01 as _ServiceEntrySheetItem on  $projection.ServiceEntrySheet     = _ServiceEntrySheetItem.ServiceEntrySheet
                                                                               and $projection.ServiceEntrySheetItem = _ServiceEntrySheetItem.ServiceEntrySheetItem

{
  key ServiceEntrySheet,
  key ServiceEntrySheetItem,
  key AccountAssignment                             as AccountAssignmentNumber,

      RefDocAccountAssignment                       as SESRefDocAccountAssignment,
      IsDeleted,
      @Semantics: { quantity.unitOfMeasure : 'QuantityUnit' }
      Quantity,
      @Semantics.unitOfMeasure: true
      QuantityUnit,
      @Semantics: { amount.currencyCode: 'Currency' }
      NetAmount,
      @Semantics.currencyCode: true
      Currency,
      MultipleAcctAssgmtDistrPercent,
      BusinessArea,
      CostCenter,
      SalesOrder,
      SalesOrderItem,
      SalesOrderScheduleLine,
      MasterFixedAsset,
      FixedAsset,
      OrderID,
      ControllingArea,
      CostObject,
      cast( ProfitabilitySegment as rkeobjnr_char ) as ProfitabilitySegment,
      ProfitCenter,
      GLAccount,
      WBSElementInternalID_2                        as WBSElementInternalID,
      ProjectNetwork,
      ProjectNetworkInternalID,
      REInternalFinNumber,
      NetworkActivityInternalID,
      PartnerAccountNumber,
      CostCtrActivityType,
      BusinessProcess,
      SettlementReferenceDate,
      GoodsRecipientName,
      UnloadingPointName,
      OrderInternalID,
      OrderIntBillOfOperationsItem,
      CommitmentItemShortID,
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

      // Fields for Authorization Checks
      PurchasingOrganization,
      PurchasingGroup,
      Plant,
      @Semantics.booleanIndicator:true
      IsEndOfPurposeBlocked,

      // Admin Data
      CreationDateTime,
      CreatedByUser,
      LastChangeDateTime,
      LastChangeUser                                as LastChangedByUser,

      // Associations
      _ServiceEntrySheet,
      _ServiceEntrySheetItem
}
```
