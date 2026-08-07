---
name: I_PROCORDEROPERATIONCAPACITY
description: "Procorderoperationcapacity"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_PROCORDEROPERATIONCAPACITY

**Procorderoperationcapacity**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CapacityRequirement` | ✓ | |  |  |  |  |
| `CapacityRequirementItem` | ✓ | |  |  |  |  |
| `CapacityRqmtItemCapacity` | ✓ | |  |  |  |  |
| `ProcessOrder` |  | |  | `cast(MfgOrderOperation.ManufacturingOrder as co_bid preserving type)` |  |  |
| `OrderInternalID` |  | |  | `OrderInternalBillOfOperations` |  |  |
| `OrderOperationInternalID` |  | |  | `OrderIntBillOfOperationsItem` |  |  |
| `ManufacturingOrderCategory` |  | |  |  |  |  |
| `ProcessOrderType` |  | |  | `ManufacturingOrderType` |  |  |
| `Plant` |  | |  | `ProductionPlant` |  |  |
| `ProcessOrderOperation` |  | |  | `ManufacturingOrderOperation_2` |  |  |
| `OperationIsPhase` |  | |  | `MfgOrderOperationIsPhase` |  |  |
| `SuperiorOperationIntIDOfPhase` |  | |  |  |  |  |
| `WorkCenterInternalID` |  | |  |  |  |  |
| `WorkCenterTypeCode` |  | |  | `WorkCenterTypeCode_2` |  |  |
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
| `_ProcessOrder` | | ✓ | | | | |
| `_OrderInternalID` | | ✓ | | | | |
| `_ProcessOrderOperation` | | ✓ | | | | |
| `_ProcessOrderType` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_WorkCenter` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProcessOrder` | `I_ManufacturingOrder` | [1..1] |
| `_OrderInternalID` | `I_OrderInternalID` | [1..1] |
| `_ProcessOrderOperation` | `I_ManufacturingOrderOperation` | [1..1] |
| `_ProcessOrderType` | `I_MfgOrderType` | [1..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_WorkCenter` | `I_WorkCenter` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Analytics.technicalName: 'IPROCORDOPCAP'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name: 'ProcessOrderOperationCapacity'
@ObjectModel.semanticKey: ['CapacityRequirement', 'CapacityRequirementItem', 'CapacityRqmtItemCapacity']
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #XL, dataClass: #TRANSACTIONAL}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Individual Capacity of Process Order Operation'

define view entity I_ProcOrderOperationCapacity
  as select from       I_MfgOrderOperationBasic     as MfgOrderOperation
    inner to many join I_CapacityRequirementItemCap as CapReq on  MfgOrderOperation.CapacityRequirement     = CapReq.CapacityRequirement
                                                              and MfgOrderOperation.CapacityRequirementItem = CapReq.CapacityRequirementItem

  association [1..1] to I_ManufacturingOrder          as _ProcessOrder          on  $projection.ProcessOrder = _ProcessOrder.ManufacturingOrder
  association [1..1] to I_OrderInternalID             as _OrderInternalID       on  $projection.OrderInternalID = _OrderInternalID.OrderInternalID
  association [1..1] to I_ManufacturingOrderOperation as _ProcessOrderOperation on  $projection.OrderInternalID          = _ProcessOrderOperation.MfgOrderInternalID
                                                                                and $projection.OrderOperationInternalID = _ProcessOrderOperation.OrderOperationInternalID
  association [1..1] to I_MfgOrderType                as _ProcessOrderType      on  $projection.ProcessOrderType = _ProcessOrderType.ManufacturingOrderType
  association [1..1] to I_Plant                       as _Plant                 on  $projection.Plant = _Plant.Plant
  association [0..1] to I_WorkCenter                  as _WorkCenter            on  _WorkCenter.WorkCenterTypeCode   = 'A '
                                                                                and $projection.WorkCenterInternalID = _WorkCenter.WorkCenterInternalID

{
      // Key
      @ObjectModel.foreignKey.association: '_CapacityRequirement'
  key CapReq.CapacityRequirement,
      @ObjectModel.foreignKey.association: '_CapacityRequirementItem'
  key CapReq.CapacityRequirementItem,
      -- representative key
  key CapReq.CapacityRqmtItemCapacity,

      // Order Data
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_LogisticsOrderStdVH', element: 'OrderID' } } ]
      @ObjectModel.foreignKey.association: '_ProcessOrder'
      cast(MfgOrderOperation.ManufacturingOrder as co_bid preserving type) as ProcessOrder,
      @ObjectModel.foreignKey.association: '_OrderInternalID'
      MfgOrderOperation.OrderInternalBillOfOperations as OrderInternalID,
      MfgOrderOperation.OrderIntBillOfOperationsItem  as OrderOperationInternalID,
      @Consumption.hidden: true
      MfgOrderOperation.ManufacturingOrderCategory,
      @ObjectModel.foreignKey.association: '_ProcessOrderType'
      MfgOrderOperation.ManufacturingOrderType        as ProcessOrderType,
      @ObjectModel.foreignKey.association: '_Plant'
      MfgOrderOperation.ProductionPlant               as Plant,
      MfgOrderOperation.ManufacturingOrderOperation_2 as ProcessOrderOperation,
      MfgOrderOperation.MfgOrderOperationIsPhase      as OperationIsPhase,
      MfgOrderOperation.SuperiorOperationIntIDOfPhase,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WorkCenterStdVH', element: 'WorkCenterInternalID' } } ]
      @ObjectModel.foreignKey.association: '_WorkCenter'
      MfgOrderOperation.WorkCenterInternalID,
      MfgOrderOperation.WorkCenterTypeCode_2          as WorkCenterTypeCode,

      // Assignments
      @ObjectModel.foreignKey.association: '_CapacityRequirementConf'
      CapReq.CapacityRqmtConfirmation,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CapacityStdVH', element: 'CapacityInternalID' } } ]
      @ObjectModel.foreignKey.association: '_Capacity'
      CapReq.CapacityInternalID,
      CapReq.CapacityRequirementDistrKey,
      CapReq.SuperiorOperationInternalID,

      // Capacity Durations
      @ObjectModel.foreignKey.association: '_UnitOfMeasure'
      CapReq.CapacityRequirementUnit,
      CapReq.ScheduledCapReqOpSegProcgDurn,
      CapReq.RemainingCapReqOpSegProcgDurn,

      // Dates and Times
      CapReq.OperationEarliestStartDate,
      CapReq.OperationEarliestStartTime,
      CapReq.OperationEarliestEndDate,
      CapReq.OperationEarliestEndTime,
      CapReq.OperationLatestStartDate,
      CapReq.OperationLatestStartTime,
      CapReq.OperationLatestEndDate,
      CapReq.OperationLatestEndTime,
      CapReq.ActualStartDate,
      CapReq.ActualStartTime,
      CapReq.ActualEndDate,
      CapReq.ActualEndTime,

      // Time Events
      CapReq.ErlstSchedldProcStrtDte,
      CapReq.ErlstSchedldProcStrtTime,
      CapReq.ErlstSchedldTrdwnStrtDte,
      CapReq.ErlstSchedldTrdwnStrtTime,
      CapReq.LtstSchedldProcStrtDte,
      CapReq.LtstSchedldProcStrtTime,
      CapReq.LtstSchedldTrdwnStrtDte,
      CapReq.LtstSchedldTrdwnStrtTime,

      // Order Data
      _ProcessOrder,
      _OrderInternalID,
      _ProcessOrderType,
      _ProcessOrderOperation,
      _Plant,
      _WorkCenter,

      // Associations
      CapReq._CapacityRequirement,
      CapReq._CapacityRequirementItem,
      CapReq._CapacityRequirementConf,
      CapReq._Capacity,
      CapReq._UnitOfMeasure
}
where
  MfgOrderOperation.ManufacturingOrderCategory  = '40'
  and                                                        // Process Order
  MfgOrderOperation.SuperiorOperationInternalID = '00000000' // no sub-operations
```
