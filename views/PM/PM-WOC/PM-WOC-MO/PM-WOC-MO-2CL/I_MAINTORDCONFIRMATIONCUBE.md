---
name: I_MAINTORDCONFIRMATIONCUBE
description: Maintordconfirmationcube
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MO
  - interface-view
  - analytical
  - component:PM-WOC-MO-2CL
  - lob:Plant Maintenance
---
# I_MAINTORDCONFIRMATIONCUBE

**Maintordconfirmationcube**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `MaintOrderConf` | `MaintOrderConf` |
| key `MaintOrderConfCntrValue` | `MaintOrderConfCntrValue` |
| `MaintOrderConfirmationEntryDte` | `MaintOrderConfirmationEntryDte` |
| `MaintOrderOperationCounter` | `MaintOrderOperationCounter` |
| `EnteredByUser` | `EnteredByUser` |
| `LastChangeDate` | `LastChangeDate` |
| `LastChangedByUser` | `LastChangedByUser` |
| `PostingDate` | `PostingDate` |
| `WorkCenterInternalID` | `WorkCenterInternalID` |
| `ConfirmationText` | `ConfirmationText` |
| `Language` | `Language` |
| `LongTextExists` | `LongTextExists` |
| `ActualWorkQuantity` | `ActualWorkQuantity` |
| `ActualWorkQuantityUnit` | `ActualWorkQuantityUnit` |
| `ActivityType` | `ActivityType` |
| `EmployeeWageType` | `EmployeeWageType` |
| `ConfirmationUnit` | `ConfirmationUnit` |
| `VarianceReasonCode` | `VarianceReasonCode` |
| `PersonnelNumber` | `PersonnelNumber` |
| `OperationConfirmedStartDate` | `OperationConfirmedStartDate` |
| `OperationConfirmedStartTime` | `OperationConfirmedStartTime` |
| `MaintOrderRoutingNumber` | `MaintOrderRoutingNumber` |
| `MaintOrdOpWrkExecStartDateTime` | `MaintOrdOpWrkExecStartDateTime` |
| `OperationConfirmedEndDate` | `OperationConfirmedEndDate` |
| `OperationConfirmedEndTime` | `OperationConfirmedEndTime` |
| `MaintOrdOpWrkExecEndDateTime` | `MaintOrdOpWrkExecEndDateTime` |
| `ActyConfFcstdEndDate` | `ActyConfFcstdEndDate` |
| `ActyConfFcstdEndTime` | `ActyConfFcstdEndTime` |
| `MaintOrdOpFcstdEndDateTime` | `MaintOrdOpFcstdEndDateTime` |
| `IsFinalConfirmation` | `IsFinalConfirmation` |
| `OpenReservationsIsCleared` | `OpenReservationsIsCleared` |
| `MaintenanceOrder` | `MaintenanceOrder` |
| `MaintenanceOrderOperation` | `MaintenanceOrderOperation` |
| `MaintenanceOrderSubOperation` | `MaintenanceOrderSubOperation` |
| `RemainingWorkQuantity` | `RemainingWorkQuantity` |
| `RemainingWorkQuantityUnit` | `RemainingWorkQuantityUnit` |
| `NoFurtherWorkQuantityIsExpd` | `NoFurtherWorkQuantityIsExpd` |
| `IsReversed` | `IsReversed` |
| `IsReversal` | `IsReversal` |
| `CancldMaintOrderConfCntrValue` | `CancldMaintOrderConfCntrValue` |
| `AccountingIndicatorCode` | `AccountingIndicatorCode` |
| `EnteredByExternalUser` | `EnteredByExternalUser` |
| `ConfirmationExternalEntryDate` | `ConfirmationExternalEntryDate` |
| `ConfirmationExternalEntryTime` | `ConfirmationExternalEntryTime` |
| `ActualWorkExternalQuantityUnit` | `ActualWorkExternalQuantityUnit` |
| `RemainingWorkExtQuantityUnit` | `RemainingWorkExtQuantityUnit` |
| `Plant` | `Plant` |
| `FactoryCalendar` | `FactoryCalendar` |
| `MaintOrderOperationInternalID` | `MaintOrderOperationInternalID` |
| `CapacityInternalID` | `CapacityInternalID` |
| `EmployeeWageGroup` | `EmployeeWageGroup` |
| `NmbrOfMaintTechnicianCapSplits` | `NmbrOfMaintTechnicianCapSplits` |
| `MaterialDocument` | `MaterialDocument` |
| `AddressTimeZone` | `AddressTimeZone` |
| `UserEnteredTimeZone` | `UserEnteredTimeZone` |
| `PlantTimeZone` | `PlantTimeZone` |
| `_ActualWorkCenter` | *Association* |
| `_ActualWorkExtQuantityUnit` | *Association* |
| `_ConfirmationGroup` | *Association* |
| `_EnteredByUser` | *Association* |
| `_Language` | *Association* |
| `_LastChangeByUser` | *Association* |
| `_MaintenanceOrder` | *Association* |
| `_MaintenanceOrderOperation` | *Association* |
| `_MaintOrderConfGoodsMovement` | *Association* |
| `_OrderConfLongText` | *Association* |
| `_PersonnelName` | *Association* |
| `_PersonResponsible` | *Association* |
| `_Plant` | *Association* |
| `_RemainingWorkExtQuantityUnit` | *Association* |
| `_VarianceReason` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Maintenance Order Confirmation - Cube'
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@VDM.viewType: #COMPOSITE
@AccessControl.personalData.blocking: #('REQUIRED') 
@AccessControl.privilegedAssociations: [ '_EnteredByUser', '_LastChangeByUser' ]
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@Analytics.internalName: #LOCAL
@Analytics.dataCategory: #CUBE
@ObjectModel.usageType:{
  serviceQuality: #D,
  sizeCategory: #XL,
  dataClass: #MIXED
}
define view entity I_MaintOrdConfirmationCube
  as select from I_MaintenanceOrderConfirmation
{
      @ObjectModel.foreignKey.association: '_ConfirmationGroup'
  key MaintOrderConf,
  key MaintOrderConfCntrValue,
      MaintOrderConfirmationEntryDte,
      MaintOrderOperationCounter,
      EnteredByUser,
      LastChangeDate,
      LastChangedByUser,
      PostingDate,
      @ObjectModel.foreignKey.association: '_ActualWorkCenter'
      WorkCenterInternalID,
      ConfirmationText,
      Language,
      LongTextExists,
      @Semantics.quantity.unitOfMeasure: 'ActualWorkQuantityUnit'
      @Aggregation.default: #SUM
      ActualWorkQuantity,
      ActualWorkQuantityUnit,
      ActivityType,
//      @Semantics.quantity.unitOfMeasure: 'ActualDurationUnit'
//      @DefaultAggregation: #SUM
//      ActualDuration,
//      ActualDurationUnit,
      EmployeeWageType,
      ConfirmationUnit,
      @ObjectModel.foreignKey.association: '_VarianceReason'
      VarianceReasonCode,
      @ObjectModel.foreignKey.association: '_PersonResponsible'
      PersonnelNumber,
      OperationConfirmedStartDate,
      OperationConfirmedStartTime,
      MaintOrderRoutingNumber,
      @Semantics.dateTime: true
      @EndUserText.label: 'Execution Start'
      MaintOrdOpWrkExecStartDateTime,
      OperationConfirmedEndDate,
      OperationConfirmedEndTime,
      @Semantics.dateTime: true
      @EndUserText.label: 'Execution End'
      MaintOrdOpWrkExecEndDateTime,
      ActyConfFcstdEndDate,
      ActyConfFcstdEndTime,
      @Semantics.dateTime: true
      @EndUserText.label: 'Forecast Finish'
      MaintOrdOpFcstdEndDateTime,
      IsFinalConfirmation,
      OpenReservationsIsCleared,
      MaintenanceOrder,
      MaintenanceOrderOperation,
      MaintenanceOrderSubOperation,
      @Semantics.quantity.unitOfMeasure: 'RemainingWorkQuantityUnit'
      @Aggregation.default: #SUM
      RemainingWorkQuantity,
      RemainingWorkQuantityUnit,
      NoFurtherWorkQuantityIsExpd,
      IsReversed,
      IsReversal,
      CancldMaintOrderConfCntrValue,
//      MaintOrderConfirmationEntryTme,
      AccountingIndicatorCode,
      EnteredByExternalUser,
      ConfirmationExternalEntryDate,
      ConfirmationExternalEntryTime,
      ActualWorkExternalQuantityUnit,
      RemainingWorkExtQuantityUnit,
      @ObjectModel.foreignKey.association: '_Plant'
      Plant,
      FactoryCalendar,
      MaintOrderOperationInternalID,
      CapacityInternalID,
      EmployeeWageGroup,
      NmbrOfMaintTechnicianCapSplits,
      MaterialDocument,
      @Semantics.timeZone: true
      AddressTimeZone,
      @Semantics.timeZone: true
      UserEnteredTimeZone,
      @Semantics.timeZone: true
      PlantTimeZone,
      /* Associations */
      _ActualWorkCenter,
      _ActualWorkExtQuantityUnit,
      _ConfirmationGroup,
      _EnteredByUser,
      _Language,
      _LastChangeByUser,
      _MaintenanceOrder,
      _MaintenanceOrderOperation,
      _MaintOrderConfGoodsMovement,
      _OrderConfLongText,
      _PersonnelName,
      _PersonResponsible,
      _Plant,
      _RemainingWorkExtQuantityUnit,
      _VarianceReason
}
```
