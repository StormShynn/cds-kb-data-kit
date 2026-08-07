---
name: I_PRODNORDOPERATIONCAPACITYTP
description: Prodnordoperationcapacitytp
app_component: PP-SFC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-SFC
  - interface-view
  - transactional-processing
  - component:PP-SFC-2CL
  - lob:Manufacturing
---
# I_PRODNORDOPERATIONCAPACITYTP

**Prodnordoperationcapacitytp**

| Property | Value |
|---|---|
| App Component | `PP-SFC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CapacityRequirement` | ✓ | |  |  |
| `CapacityRequirementItem` | ✓ | |  |  |
| `CapacityRqmtItemCapacity` | ✓ | |  |  |
| `ProductionOrder` |  | |  |  |
| `OrderInternalID` |  | |  |  |
| `OrderOperationInternalID` |  | |  |  |
| `ManufacturingOrderCategory` |  | |  |  |
| `ProductionOrderType` |  | |  |  |
| `ProductionOrderSequence` |  | |  |  |
| `Plant` |  | |  |  |
| `ProductionOrderOperation` |  | |  |  |
| `WorkCenterInternalID` |  | |  |  |
| `WorkCenterTypeCode` |  | |  |  |
| `CapacityRqmtConfirmation` |  | |  |  |
| `CapacityInternalID` |  | |  |  |
| `CapacityRequirementDistrKey` |  | |  |  |
| `CapacityRequirementUnit` |  | |  |  |
| `ScheduledCapReqOpSegSetupDurn` |  | |  |  |
| `RemainingCapReqOpSegSetupDurn` |  | |  |  |
| `ScheduledCapReqOpSegProcgDurn` |  | |  |  |
| `RemainingCapReqOpSegProcgDurn` |  | |  |  |
| `ScheduledCapReqOpSegTrdwnDurn` |  | |  |  |
| `RemainingCapReqOpSegTrdwnDurn` |  | |  |  |
| `OperationEarliestStartDate` |  | |  |  |
| `OperationEarliestStartTime` |  | |  |  |
| `OperationEarliestEndDate` |  | |  |  |
| `OperationEarliestEndTime` |  | |  |  |
| `OperationLatestStartDate` |  | |  |  |
| `OperationLatestStartTime` |  | |  |  |
| `OperationLatestEndDate` |  | |  |  |
| `OperationLatestEndTime` |  | |  |  |
| `ActualStartDate` |  | |  |  |
| `ActualStartTime` |  | |  |  |
| `ActualEndDate` |  | |  |  |
| `ActualEndTime` |  | |  |  |
| `ErlstSchedldProcStrtDte` |  | |  |  |
| `ErlstSchedldProcStrtTime` |  | |  |  |
| `ErlstSchedldTrdwnStrtDte` |  | |  |  |
| `ErlstSchedldTrdwnStrtTime` |  | |  |  |
| `LtstSchedldProcStrtDte` |  | |  |  |
| `LtstSchedldProcStrtTime` |  | |  |  |
| `LtstSchedldTrdwnStrtDte` |  | |  |  |
| `LtstSchedldTrdwnStrtTime` |  | |  |  |
| `ActualNumberOfSplits` |  | |  |  |
| `CapacityRequirementSplit` |  | |  |  |
| `ObjectInternalID` |  | |  |  |
| `_OrderInternalID` | | ✓ | | |
| `_ProductionOrderType` | | ✓ | | |
| `_ProductionOrderSequence` | | ✓ | | |
| `_ProductionOrderOperation` | | ✓ | | |
| `_Plant` | | ✓ | | |
| `_WorkCenter` | | ✓ | | |
| `_CapacityRequirement` | | ✓ | | |
| `_CapacityRequirementItem` | | ✓ | | |
| `_CapacityRequirementConf` | | ✓ | | |
| `_Capacity` | | ✓ | | |
| `_UnitOfMeasure` | | ✓ | | |
| `_Operation` | | ✓ | | |
| `_ProductionOrder` | | ✓ | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #XL, dataClass: #TRANSACTIONAL}
@ObjectModel.sapObjectNodeType.name: 'ProdnOrderOperationCapacity'

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@EndUserText.label: 'Individual Capacity of Production Order Operation - TP'

define view entity I_ProdnOrdOperationCapacityTP
  as projection on R_ProdnOrdOperationCapacityTP as IndividualCapacity

{
      // Key
  key CapacityRequirement,
  key CapacityRequirementItem,
      -- representative key
  key CapacityRqmtItemCapacity,

      // Order Data
      ProductionOrder,
      OrderInternalID,
      OrderOperationInternalID,
      @Consumption.hidden: true
      ManufacturingOrderCategory,
      ProductionOrderType,
      ProductionOrderSequence,
      Plant,
      ProductionOrderOperation,
      WorkCenterInternalID,
      WorkCenterTypeCode,

      // Assignments
      CapacityRqmtConfirmation,
      CapacityInternalID,
      CapacityRequirementDistrKey,

      // Capacity Durations
      @ObjectModel.foreignKey.association: '_UnitOfMeasure'
      CapacityRequirementUnit,
      ScheduledCapReqOpSegSetupDurn,
      RemainingCapReqOpSegSetupDurn,
      ScheduledCapReqOpSegProcgDurn,
      RemainingCapReqOpSegProcgDurn,
      ScheduledCapReqOpSegTrdwnDurn,
      RemainingCapReqOpSegTrdwnDurn,

      // Dates and Times
      OperationEarliestStartDate,
      OperationEarliestStartTime,
      OperationEarliestEndDate,
      OperationEarliestEndTime,
      OperationLatestStartDate,
      OperationLatestStartTime,
      OperationLatestEndDate,
      OperationLatestEndTime,
      ActualStartDate,
      ActualStartTime,
      ActualEndDate,
      ActualEndTime,

      // Time Events
      ErlstSchedldProcStrtDte,
      ErlstSchedldProcStrtTime,
      ErlstSchedldTrdwnStrtDte,
      ErlstSchedldTrdwnStrtTime,
      LtstSchedldProcStrtDte,
      LtstSchedldProcStrtTime,
      LtstSchedldTrdwnStrtDte,
      LtstSchedldTrdwnStrtTime,

      // Split data
      ActualNumberOfSplits,
      CapacityRequirementSplit,
      ObjectInternalID,

      // Order Data
      _OrderInternalID,
      _ProductionOrderType,
      _ProductionOrderSequence,
      _ProductionOrderOperation,
      _Plant,
      _WorkCenter,

      // Associations
      _CapacityRequirement,
      _CapacityRequirementItem,
      _CapacityRequirementConf,
      _Capacity,
      _UnitOfMeasure,

      // BO relations
      _Operation : redirected to parent I_ProductionOrderOperationTP,
      _ProductionOrder : redirected to I_ProductionOrderTP

}
```
