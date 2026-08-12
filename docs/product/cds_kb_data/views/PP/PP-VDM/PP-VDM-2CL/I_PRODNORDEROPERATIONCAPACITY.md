---
name: I_PRODNORDEROPERATIONCAPACITY
description: "Prodnorderoperationcapacity"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
# I_PRODNORDEROPERATIONCAPACITY

**Prodnorderoperationcapacity**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CapacityRequirement` | ✓ | |  |  |  |  |
| `CapacityRequirementItem` | ✓ | |  |  |  |  |
| `CapacityRqmtItemCapacity` | ✓ | |  |  |  |  |
| `OrderInternalID` |  | |  | `OrderInternalBillOfOperations` |  |  |
| `OrderOperationInternalID` |  | |  | `OrderIntBillOfOperationsItem` |  |  |
| `ManufacturingOrderCategory` |  | |  |  |  |  |
| `ProductionOrderType` |  | |  | `cast(OrderOperation.ManufacturingOrderType as vdm_prodnordertype preserving type)` |  |  |
| `ProductionOrder` |  | |  | `cast(OrderOperation.ManufacturingOrder as vdm_manufacturingorder preserving type)` |  |  |
| `ProductionOrderSequence` |  | |  | `cast(OrderOperation.ManufacturingOrderSequence as vdm_prodnordersequence preserving type)` |  |  |
| `ProductionOrderOperation` |  | |  | `cast(OrderOperation.ManufacturingOrderOperation_2 as vdm_prodnorderoperation preserving type)` |  |  |
| `Plant` |  | |  | `ProductionPlant` |  |  |
| `WorkCenterInternalID` |  | |  |  |  |  |
| `WorkCenterTypeCode` |  | |  | `WorkCenterTypeCode_2` |  |  |
| `CapacityRqmtConfirmation` |  | |  |  |  |  |
| `CapacityInternalID` |  | |  |  |  |  |
| `CapacityRequirementDistrKey` |  | |  |  |  |  |
| `CapacityRequirementUnit` |  | |  |  |  |  |
| `ScheduledCapReqOpSegSetupDurn` |  | |  |  |  |  |
| `RemainingCapReqOpSegSetupDurn` |  | |  |  |  |  |
| `ScheduledCapReqOpSegProcgDurn` |  | |  |  |  |  |
| `RemainingCapReqOpSegProcgDurn` |  | |  |  |  |  |
| `ScheduledCapReqOpSegTrdwnDurn` |  | |  |  |  |  |
| `RemainingCapReqOpSegTrdwnDurn` |  | |  |  |  |  |
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
| `ActualNumberOfSplits` |  | |  |  |  |  |
| `CapacityRequirementSplit` |  | |  |  |  |  |
| `ObjectInternalID` |  | |  |  |  |  |
| `_ProductionOrderType` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_WorkCenterType` | | ✓ | | | | |
| `_WorkCenter` | | ✓ | | | | |
| `_ProductionOrderHeader` | | ✓ | | | | |
| `_ProductionOrderSequence` | | ✓ | | | | |
| `_ProductionOrderOperation` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProductionOrderType` | `I_ProductionOrderType` | [1..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_WorkCenterType` | `I_WorkCenterType` | [0..1] |
| `_WorkCenter` | `I_WorkCenter` | [0..1] |
| `_ProductionOrderHeader` | `I_ProductionOrder` | [1..1] |
| `_ProductionOrderSequence` | `I_ProductionOrderSequence` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AccessControl.privilegedAssociations: ['_StatusObject']
@Analytics.dataExtraction.enabled: true
@Analytics.technicalName: 'IPRODORDOPCAP'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name: 'ProdnOrderOperationCapacity'
@ObjectModel.semanticKey: ['CapacityRequirement', 'CapacityRequirementItem', 'CapacityRqmtItemCapacity']
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #XL, dataClass: #TRANSACTIONAL}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Individual Capacity of Production Order Operation'

define view entity I_ProdnOrderOperationCapacity
    as select from I_MfgOrderOperationBasic as OrderOperation
      inner to many join I_CapacityRequirementItemCap as CapReq on  OrderOperation.CapacityRequirement     = CapReq.CapacityRequirement
                                                                and OrderOperation.CapacityRequirementItem = CapReq.CapacityRequirementItem

  association [1..1] to I_ProductionOrderType         as _ProductionOrderType        on  $projection.ProductionOrderType = _ProductionOrderType.ProductionOrderType 
  association [1..1] to I_Plant                       as _Plant                      on  $projection.Plant = _Plant.Plant
  association [0..1] to I_WorkCenterType              as _WorkCenterType             on  $projection.WorkCenterTypeCode = _WorkCenterType.WorkCenterTypeCode
  association [0..1] to I_WorkCenter                  as _WorkCenter                 on  $projection.WorkCenterTypeCode   = _WorkCenter.WorkCenterTypeCode
                                                                                     and $projection.WorkCenterInternalID = _WorkCenter.WorkCenterInternalID
  -- SOT relations
  association [1..1] to I_ProductionOrder             as _ProductionOrderHeader      on  $projection.ProductionOrder = _ProductionOrderHeader.ProductionOrder
  association [1..1] to I_ProductionOrderSequence     as _ProductionOrderSequence    on  $projection.ProductionOrder         = _ProductionOrderSequence.ProductionOrder
                                                                                     and $projection.ProductionOrderSequence = _ProductionOrderSequence.ProductionOrderSequence
  association to parent I_ProductionOrderOperation_2  as _ProductionOrderOperation   on  $projection.OrderInternalID          = _ProductionOrderOperation.OrderInternalID
                                                                                     and $projection.OrderOperationInternalID = _ProductionOrderOperation.OrderOperationInternalID
{
      // Key
      @ObjectModel.foreignKey.association: '_CapacityRequirement'
  key CapReq.CapacityRequirement,
      @ObjectModel.foreignKey.association: '_CapacityRequirementItem'
  key CapReq.CapacityRequirementItem,
      -- representative key
  key CapReq.CapacityRqmtItemCapacity,

      // Order Data
      @ObjectModel.foreignKey.association: '_OrderInternalID'
      OrderOperation.OrderInternalBillOfOperations as OrderInternalID,
      OrderOperation.OrderIntBillOfOperationsItem  as OrderOperationInternalID,
      @Consumption.hidden: true
      OrderOperation.ManufacturingOrderCategory,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionOrderTypeStdVH', element: 'ProductionOrderType' } } ]
      @ObjectModel.foreignKey.association: '_ProductionOrderType'
      cast(OrderOperation.ManufacturingOrderType as vdm_prodnordertype preserving type)             as ProductionOrderType,
 
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionOrderStdVH', element: 'ProductionOrder' } } ]
      @ObjectModel.foreignKey.association: '_ProductionOrderHeader'
      cast(OrderOperation.ManufacturingOrder as vdm_manufacturingorder preserving type)             as ProductionOrder,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionOrderSequenceVH', element: 'ProductionOrderSequence' } } ]      
      cast(OrderOperation.ManufacturingOrderSequence as vdm_prodnordersequence preserving type)     as ProductionOrderSequence,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionOrderOperationVH', element: 'ProductionOrderOperation' } } ]
      cast(OrderOperation.ManufacturingOrderOperation_2 as vdm_prodnorderoperation preserving type) as ProductionOrderOperation,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_Plant'
      OrderOperation.ProductionPlant               as Plant,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WorkCenterStdVH', element: 'WorkCenterInternalID' } } ]
      @ObjectModel.foreignKey.association: '_WorkCenter'
      OrderOperation.WorkCenterInternalID,
      @ObjectModel.foreignKey.association: '_WorkCenterType'
      OrderOperation.WorkCenterTypeCode_2          as WorkCenterTypeCode,
      
      // Assignments
      @ObjectModel.foreignKey.association: '_CapacityRequirementConf'    
      CapReq.CapacityRqmtConfirmation,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CapacityStdVH', element: 'CapacityInternalID' } } ]
      @ObjectModel.foreignKey.association: '_Capacity'
      CapReq.CapacityInternalID,
      CapReq.CapacityRequirementDistrKey,

      // Capacity Durations
      @ObjectModel.foreignKey.association: '_UnitOfMeasure'
      CapReq.CapacityRequirementUnit,
      CapReq.ScheduledCapReqOpSegSetupDurn,
      CapReq.RemainingCapReqOpSegSetupDurn,
      CapReq.ScheduledCapReqOpSegProcgDurn,
      CapReq.RemainingCapReqOpSegProcgDurn,
      CapReq.ScheduledCapReqOpSegTrdwnDurn,
      CapReq.RemainingCapReqOpSegTrdwnDurn,

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

      // Split data
      CapReq.ActualNumberOfSplits,
      CapReq.CapacityRequirementSplit,
      @ObjectModel.foreignKey.association: '_StatusObject'
      CapReq.ObjectInternalID,

      // Order Data
      _ProductionOrderHeader,
      _ProductionOrderType,
      _ProductionOrderSequence,
      _ProductionOrderOperation,
      _Plant,
      _WorkCenter,
      _WorkCenterType,
      
      // Associations
      OrderOperation._OrderInternalID,
      CapReq._CapacityRequirement,
      CapReq._CapacityRequirementItem,
      CapReq._CapacityRequirementConf,
      CapReq._Capacity,
      CapReq._StatusObject,
      CapReq._UnitOfMeasure
}
where
  OrderOperation.ManufacturingOrderCategory = '10' and    // Production Order
  OrderOperation.SuperiorOperationInternalID = '00000000' // no sub-operations
```
