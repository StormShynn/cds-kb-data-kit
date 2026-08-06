---
name: I_MAINTTASKLISTSUBOPTP
description: Maintenance Task ListSUBOPTP
app_component: PM-PRM-TL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-PRM
  - PM-PRM-TL
  - interface-view
  - transactional-processing
  - component:PM-PRM-TL-2CL
  - lob:Plant Maintenance
---
# I_MAINTTASKLISTSUBOPTP

**Maintenance Task ListSUBOPTP**

| Property | Value |
|---|---|
| App Component | `PM-PRM-TL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TaskListType` | `TaskListType` |
| key `TaskListGroup` | `TaskListGroup` |
| key `TaskListGroupCounter` | `TaskListGroupCounter` |
| key `TaskListSequence` | `TaskListSequence` |
| key `TaskListOperationInternalId` | `TaskListOperationInternalId` |
| key `TaskListOpBOMItmIntVersCounter` | `TaskListOpBOMItmIntVersCounter` |
| `MaintOperationExecStageCode` | `MaintOperationExecStageCode` |
| `MaintenanceTaskListOperation` | `MaintenanceTaskListOperation` |
| `WorkCenter` | `WorkCenter` |
| `SubOperation` | `SubOperation` |
| `SuperiorOperationInternalID` | `SuperiorOperationInternalID` |
| `SubOperationText` | `SubOperationText` |
| `LongTextLanguageCode` | `LongTextLanguageCode` |
| `Plant` | `Plant` |
| `OperationControlProfile` | `OperationControlProfile` |
| `FactoryCalendar` | `FactoryCalendar` |
| `CreationDate` | `CreationDate` |
| `CreatedByUser` | `CreatedByUser` |
| `LastChangeDate` | `LastChangeDate` |
| `LastChangedByUser` | `LastChangedByUser` |
| `ChangeNumber` | `ChangeNumber` |
| `ValidityStartDate` | `ValidityStartDate` |
| `ValidityEndDate` | `ValidityEndDate` |
| `PurchasingInfoRecord` | `PurchasingInfoRecord` |
| `PurchasingOrganization` | `PurchasingOrganization` |
| `PurchaseContract` | `PurchaseContract` |
| `PurchaseContractItem` | `PurchaseContractItem` |
| `PurchasingInfoRecdAddlGrpgName` | `PurchasingInfoRecdAddlGrpgName` |
| `MaterialGroup` | `MaterialGroup` |
| `PurchasingGroup` | `PurchasingGroup` |
| `Supplier` | `Supplier` |
| `PlannedDeliveryDuration` | `PlannedDeliveryDuration` |
| `NumberOfOperationPriceUnits` | `NumberOfOperationPriceUnits` |
| `OpExternalProcessingPrice` | `OpExternalProcessingPrice` |
| `OpExternalProcessingCurrency` | `OpExternalProcessingCurrency` |
| `OperationCostingRelevancyType` | `OperationCostingRelevancyType` |
| `_Header` | *Association* |
| `_NonHistOp` | *Association* |

## Source Code

```abap
@EndUserText.label: 'SubOperations - TP'
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   modelingPattern:        #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #L,
     dataClass:      #TRANSACTIONAL
   }
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_MaintTaskListSubOpTP
  as projection on R_MaintTaskListSubOpTP
{
  key TaskListType,
  key TaskListGroup,
  key TaskListGroupCounter,
  key TaskListSequence,
  key TaskListOperationInternalId,
  key TaskListOpBOMItmIntVersCounter,
      MaintOperationExecStageCode,
      MaintenanceTaskListOperation,
      WorkCenter,
      SubOperation,
      SuperiorOperationInternalID,
      SubOperationText,
      LongTextLanguageCode,
      Plant,
      OperationControlProfile,
      FactoryCalendar,
      CreationDate,
      CreatedByUser,
      LastChangeDate,
      LastChangedByUser,
      @Consumption.hidden: true
      ChangeNumber,
      ValidityStartDate,
      ValidityEndDate,
      PurchasingInfoRecord,
      PurchasingOrganization,
      PurchaseContract,
      PurchaseContractItem,
      PurchasingInfoRecdAddlGrpgName,
      MaterialGroup,
      PurchasingGroup,
      Supplier,
      PlannedDeliveryDuration,
      NumberOfOperationPriceUnits,
      @Semantics.amount.currencyCode : 'OpExternalProcessingCurrency'
      OpExternalProcessingPrice,
      OpExternalProcessingCurrency,
      OperationCostingRelevancyType,
      _Header    : redirected to I_MaintenanceTaskListTP_2,
      _NonHistOp : redirected to parent I_MaintTaskListOperationTP_2
}
```
