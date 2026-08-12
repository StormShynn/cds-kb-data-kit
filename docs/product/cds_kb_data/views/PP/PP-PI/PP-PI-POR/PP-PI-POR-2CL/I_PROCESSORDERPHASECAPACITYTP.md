---
name: I_PROCESSORDERPHASECAPACITYTP
description: "Processorderphasecapacitytp"
app_component: PP-PI-POR-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-PI
  - PP-PI-POR
  - interface-view
  - transactional-processing
  - component:PP-PI-POR-2CL
  - lob:Manufacturing
---
# I_PROCESSORDERPHASECAPACITYTP

**Processorderphasecapacitytp**

| Property | Value |
|---|---|
| App Component | `PP-PI-POR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CapacityRequirement` | ✓ | |  |  |  |  |
| `CapacityRequirementItem` | ✓ | |  |  |  |  |
| `CapacityRqmtItemCapacity` | ✓ | |  |  |  |  |
| `ProcessOrder` |  | |  |  |  |  |
| `OrderInternalID` |  | |  |  |  |  |
| `OrderPhaseInternalID` |  | |  |  |  |  |
| `ManufacturingOrderCategory` |  | |  |  |  |  |
| `ProcessOrderType` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `ProcessOrderPhase` |  | |  |  |  |  |
| `SuperiorOperationIntIDOfPhase` |  | |  |  |  |  |
| `WorkCenterInternalID` |  | |  |  |  |  |
| `WorkCenterTypeCode` |  | |  |  |  |  |
| `CapacityRqmtConfirmation` |  | |  |  |  |  |
| `CapacityInternalID` |  | |  |  |  |  |
| `CapacityRequirementDistrKey` |  | |  |  |  |  |
| `SuperiorOperationInternalID` |  | |  |  |  |  |
| `CapacityRequirementUnit` |  | |  |  |  |  |
| `ScheduledCapReqOpSegProcgDurn` |  | |  |  |  |  |
| `RemainingCapReqOpSegProcgDurn` |  | |  |  |  |  |
| `OperationEarliestStartDate` |  | |  |  |  |  |
| `OperationEarliestStartTime` |  | |  |  |  |  |
| `OperationEarliestEndDate` |  | |  |  |  |  |
| `OperationEarliestEndTime` |  | |  |  |  |  |
| `OperationLatestStartDate` |  | |  |  |  |  |
| `OperationLatestStartTime` |  | |  |  |  |  |
| `OperationLatestEndDate` |  | |  |  |  |  |
| `OperationLatestEndTime` |  | |  |  |  |  |
| `ActualStartDate` |  | |  |  |  |  |
| `ActualStartTime` |  | |  |  |  |  |
| `ActualEndDate` |  | |  |  |  |  |
| `ActualEndTime` |  | |  |  |  |  |
| `ErlstSchedldProcStrtDte` |  | |  |  |  |  |
| `ErlstSchedldProcStrtTime` |  | |  |  |  |  |
| `ErlstSchedldTrdwnStrtDte` |  | |  |  |  |  |
| `ErlstSchedldTrdwnStrtTime` |  | |  |  |  |  |
| `LtstSchedldProcStrtDte` |  | |  |  |  |  |
| `LtstSchedldProcStrtTime` |  | |  |  |  |  |
| `LtstSchedldTrdwnStrtDte` |  | |  |  |  |  |
| `LtstSchedldTrdwnStrtTime` |  | |  |  |  |  |
| `_OrderInternalID` | | ✓ | | | | |
| `_ProcessOrderType` | | ✓ | | | | |
| `_ProcessOrderOperation` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_WorkCenter` | | ✓ | | | | |
| `_CapacityRequirement` | | ✓ | | | | |
| `_CapacityRequirementItem` | | ✓ | | | | |
| `_CapacityRequirementConf` | | ✓ | | | | |
| `_Capacity` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_Order` | | ✓ | | | | |
| `_Operation` | | ✓ | | | | |
| `_Phase` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #XL, dataClass: #TRANSACTIONAL}
@ObjectModel.sapObjectNodeType.name: 'ProcessOrderPhaseCapacity'

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@EndUserText.label: 'Individual Capacity of Process Order Phase - TP'

define view entity I_ProcessOrderPhaseCapacityTP
  as projection on R_ProcessOrderPhaseCapacityTP as IndividualCapacity

{
      // Key
  key CapacityRequirement,
  key CapacityRequirementItem,
      -- representative key
  key CapacityRqmtItemCapacity,

      // Order Data
      ProcessOrder,
      OrderInternalID,
      OrderPhaseInternalID,
      @Consumption.hidden: true
      ManufacturingOrderCategory,
      ProcessOrderType,
      Plant,
      ProcessOrderPhase,
      SuperiorOperationIntIDOfPhase,
      WorkCenterInternalID,
      WorkCenterTypeCode,

      // Assignments
      CapacityRqmtConfirmation,
      CapacityInternalID,
      CapacityRequirementDistrKey,
      SuperiorOperationInternalID,

      // Only processing duration in process order phase / No Capacity split
      @ObjectModel.foreignKey.association: '_UnitOfMeasure'
      CapacityRequirementUnit,
      ScheduledCapReqOpSegProcgDurn,
      RemainingCapReqOpSegProcgDurn,

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

      // Order Data
      _OrderInternalID,
      _ProcessOrderType,
      _ProcessOrderOperation,
      _Plant,
      _WorkCenter,

      // Associations
      _CapacityRequirement,
      _CapacityRequirementItem,
      _CapacityRequirementConf,
      _Capacity,
      _UnitOfMeasure,

      // BO relation
      _Order     : redirected to I_ProcessOrderTP,
      _Operation : redirected to I_ProcessOrderOperationTP,
      _Phase     : redirected to parent I_ProcessOrderPhaseTP

}
```
