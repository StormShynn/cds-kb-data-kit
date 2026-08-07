---
name: I_MAINTORDERCONFIRMATIONTP
description: "Maintorderconfirmationtp"
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
  - transactional-processing
  - component:PM-WOC-MO-2CL
  - lob:Plant Maintenance
---
# I_MAINTORDERCONFIRMATIONTP

**Maintorderconfirmationtp**

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
| `MaintenanceOrder` |  | |  |  |  |  |
| `MaintenanceOrderOperation` |  | |  |  |  |  |
| `MaintenanceOrderSubOperation` |  | |  |  |  |  |
| `PersonnelNumber` |  | |  |  |  |  |
| `ActualWorkQuantity` |  | |  |  |  |  |
| `ActualWorkQuantityUnit` |  | |  |  |  |  |
| `ActualDuration` |  | |  |  |  |  |
| `ActualDurationUnit` |  | |  |  |  |  |
| `OperationConfirmedStartDate` |  | |  |  |  |  |
| `OperationConfirmedStartTime` |  | |  |  |  |  |
| `OperationConfirmedEndDate` |  | |  |  |  |  |
| `OperationConfirmedEndTime` |  | |  |  |  |  |
| `IsFinalConfirmation` |  | |  |  |  |  |
| `NoFurtherWorkQuantityIsExpd` |  | |  |  |  |  |
| `RemainingWorkQuantity` |  | |  |  |  |  |
| `RemainingWorkQuantityUnit` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `ActivityType` |  | |  |  |  |  |
| `OpenReservationsIsCleared` |  | |  |  |  |  |
| `ConfirmationText` |  | |  |  |  |  |
| `EmployeeWageType` |  | |  |  |  |  |
| `EmployeeWageGroup` |  | |  |  |  |  |
| `VarianceReasonCode` |  | |  |  |  |  |
| `CapacityInternalID` |  | |  |  |  |  |
| `NmbrOfMaintTechnicianCapSplits` |  | |  |  |  |  |
| `MaterialDocument` |  | |  |  |  |  |
| `AccountingIndicatorCode` |  | |  |  |  |  |
| `ActyConfFcstdEndDate` |  | |  |  |  |  |
| `ActyConfFcstdEndTime` |  | |  |  |  |  |
| `IsReversed` |  | |  |  |  |  |
| `IsReversal` |  | |  |  |  |  |
| `CancldMaintOrderConfCntrValue` |  | |  |  |  |  |
| `_LongText` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Maintenance Order Confirmation - TP'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
   sapObjectNodeType:{
      name: 'MaintenanceOrderConfirmation'},
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #M,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['MaintOrderConf','MaintOrderConfCntrValue']
 }
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define root view entity I_MaintOrderConfirmationTP
  provider contract transactional_interface
  as projection on R_MaintOrderConfirmationTP as MaintOrderConfirmation
{

  key MaintOrderConf,
  key MaintOrderConfCntrValue,

      MaintenanceOrder,
      MaintenanceOrderOperation,

      MaintenanceOrderSubOperation,

      PersonnelNumber,

      @Semantics.quantity.unitOfMeasure: 'ActualWorkQuantityUnit'
      ActualWorkQuantity,
      ActualWorkQuantityUnit,

      @Semantics.quantity.unitOfMeasure: 'ActualDurationUnit'
      ActualDuration,
      ActualDurationUnit,

      OperationConfirmedStartDate,
      OperationConfirmedStartTime,
      OperationConfirmedEndDate,
      OperationConfirmedEndTime,

      IsFinalConfirmation,
      NoFurtherWorkQuantityIsExpd,

      @Semantics.quantity.unitOfMeasure: 'RemainingWorkQuantityUnit'
      RemainingWorkQuantity,
      RemainingWorkQuantityUnit,

      PostingDate,
      ActivityType,
      OpenReservationsIsCleared,
      ConfirmationText,

      EmployeeWageType,
      EmployeeWageGroup,
      VarianceReasonCode,
      CapacityInternalID,
      NmbrOfMaintTechnicianCapSplits,
      MaterialDocument,

      AccountingIndicatorCode,
      ActyConfFcstdEndDate,
      ActyConfFcstdEndTime,
      //      "Exposing the reversal fields to this API
      IsReversed,
      IsReversal,
      CancldMaintOrderConfCntrValue,
      //Exposing Cancel Longtext field
//      MaintOrdConfCanclnLongText,

      _LongText : redirected to composition child I_MaintOrdConfLongTextTP

}
```
