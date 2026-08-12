---
name: I_MAINTORDCONFIRMATIONCUBE
description: "Maintordconfirmationcube"
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintOrderConf` | ✓ | |  |  |  |  |
| `MaintOrderConfCntrValue` | ✓ | |  |  |  |  |
| `MaintOrderConfirmationEntryDte` |  | |  |  |  |  |
| `MaintOrderOperationCounter` |  | |  |  |  |  |
| `EnteredByUser` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `WorkCenterInternalID` |  | |  |  |  |  |
| `ConfirmationText` |  | |  |  |  |  |
| `Language` |  | |  |  |  |  |
| `LongTextExists` |  | |  |  |  |  |
| `ActualWorkQuantity` |  | |  |  |  |  |
| `ActualWorkQuantityUnit` |  | |  |  |  |  |
| `ActivityType` |  | |  |  |  |  |
| `EmployeeWageType` |  | |  |  |  |  |
| `ConfirmationUnit` |  | |  |  |  |  |
| `VarianceReasonCode` |  | |  |  |  |  |
| `PersonnelNumber` |  | |  |  |  |  |
| `OperationConfirmedStartDate` |  | |  |  |  |  |
| `OperationConfirmedStartTime` |  | |  |  |  |  |
| `MaintOrderRoutingNumber` |  | |  |  |  |  |
| `MaintOrdOpWrkExecStartDateTime` |  | |  |  |  |  |
| `OperationConfirmedEndDate` |  | |  |  |  |  |
| `OperationConfirmedEndTime` |  | |  |  |  |  |
| `MaintOrdOpWrkExecEndDateTime` |  | |  |  |  |  |
| `ActyConfFcstdEndDate` |  | |  |  |  |  |
| `ActyConfFcstdEndTime` |  | |  |  |  |  |
| `MaintOrdOpFcstdEndDateTime` |  | |  |  |  |  |
| `IsFinalConfirmation` |  | |  |  |  |  |
| `OpenReservationsIsCleared` |  | |  |  |  |  |
| `MaintenanceOrder` |  | |  |  |  |  |
| `MaintenanceOrderOperation` |  | |  |  |  |  |
| `MaintenanceOrderSubOperation` |  | |  |  |  |  |
| `RemainingWorkQuantity` |  | |  |  |  |  |
| `RemainingWorkQuantityUnit` |  | |  |  |  |  |
| `NoFurtherWorkQuantityIsExpd` |  | |  |  |  |  |
| `IsReversed` |  | |  |  |  |  |
| `IsReversal` |  | |  |  |  |  |
| `CancldMaintOrderConfCntrValue` |  | |  |  |  |  |
| `AccountingIndicatorCode` |  | |  |  |  |  |
| `EnteredByExternalUser` |  | |  |  |  |  |
| `ConfirmationExternalEntryDate` |  | |  |  |  |  |
| `ConfirmationExternalEntryTime` |  | |  |  |  |  |
| `ActualWorkExternalQuantityUnit` |  | |  |  |  |  |
| `RemainingWorkExtQuantityUnit` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `FactoryCalendar` |  | |  |  |  |  |
| `MaintOrderOperationInternalID` |  | |  |  |  |  |
| `CapacityInternalID` |  | |  |  |  |  |
| `EmployeeWageGroup` |  | |  |  |  |  |
| `NmbrOfMaintTechnicianCapSplits` |  | |  |  |  |  |
| `MaterialDocument` |  | |  |  |  |  |
| `AddressTimeZone` |  | |  |  |  |  |
| `UserEnteredTimeZone` |  | |  |  |  |  |
| `PlantTimeZone` |  | |  |  |  |  |
| `_ActualWorkCenter` | | ✓ | | | | |
| `_ActualWorkExtQuantityUnit` | | ✓ | | | | |
| `_ConfirmationGroup` | | ✓ | | | | |
| `_EnteredByUser` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_LastChangeByUser` | | ✓ | | | | |
| `_MaintenanceOrder` | | ✓ | | | | |
| `_MaintenanceOrderOperation` | | ✓ | | | | |
| `_MaintOrderConfGoodsMovement` | | ✓ | | | | |
| `_OrderConfLongText` | | ✓ | | | | |
| `_PersonnelName` | | ✓ | | | | |
| `_PersonResponsible` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_RemainingWorkExtQuantityUnit` | | ✓ | | | | |
| `_VarianceReason` | | ✓ | | | | |

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
