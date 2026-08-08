---
name: I_PROCORDOPERATIONCAPACITYTP
description: "Procordoperationcapacitytp"
app_component: PP-PI-POR-2CL
software_component: SAPSCORE
release_state: released
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
# I_PROCORDOPERATIONCAPACITYTP

**Procordoperationcapacitytp**

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
| `OrderOperationInternalID` |  | |  |  |  |  |
| `ManufacturingOrderCategory` |  | |  |  |  |  |
| `ProcessOrderType` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `ProcessOrderOperation` |  | |  |  |  |  |
| `WorkCenterInternalID` |  | |  |  |  |  |
| `WorkCenterTypeCode` |  | |  |  |  |  |
| `CapacityRqmtConfirmation` |  | |  |  |  |  |
| `CapacityInternalID` |  | |  |  |  |  |
| `CapacityRequirementDistrKey` |  | |  |  |  |  |
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
| `_Order` | | ✓ | | | | |
| `_Operation` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #XL, dataClass: #TRANSACTIONAL}
@ObjectModel.sapObjectNodeType.name: 'ProcessOrderOperationCapacity'

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@EndUserText.label: 'Individual Capacity of Process Order Operation - TP'

define view entity I_ProcOrdOperationCapacityTP
  as projection on R_ProcOrdOperationCapacityTP as IndividualCapacity

{
      // Key
  key CapacityRequirement,
  key CapacityRequirementItem,
      -- representative key
  key CapacityRqmtItemCapacity,

      // Order Data
      ProcessOrder,
      OrderInternalID,
      OrderOperationInternalID,
      @Consumption.hidden: true
      ManufacturingOrderCategory,
      ProcessOrderType,
      Plant,
      ProcessOrderOperation,
      WorkCenterInternalID,
      WorkCenterTypeCode,

      // Assignments
      CapacityRqmtConfirmation,
      CapacityInternalID,
      CapacityRequirementDistrKey,

      // No duration and splits in process order operation

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

      // BO relations
      _Order     : redirected to I_ProcessOrderTP,
      _Operation : redirected to parent I_ProcessOrderOperationTP

}
```
