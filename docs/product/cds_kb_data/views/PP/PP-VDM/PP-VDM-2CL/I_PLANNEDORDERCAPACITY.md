---
name: I_PLANNEDORDERCAPACITY
description: "Planned OrderCAPACITY"
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
  - planned-order
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_PLANNEDORDERCAPACITY

**Planned OrderCAPACITY**

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
| `PlannedOrder` |  | |  |  |  |  |
| `WorkCenterInternalID` |  | |  |  |  |  |
| `WorkCenterType` |  | |  | `WorkCenterTypeCode_2` |  |  |
| `CapacityInternalID` |  | |  |  |  |  |
| `CapacityCategory` |  | |  | `CapacityCategoryCode` |  |  |
| `CapacityRqmtConfirmation` |  | |  |  |  |  |
| `OrderObjectInternalID` |  | |  |  |  |  |
| `Sequence` |  | |  | `BillOfOperationsSequence` |  |  |
| `Operation` |  | |  | `Operation_2` |  |  |
| `SubOperation` |  | |  | `cast( case when BOOSubOp.SuperiorOperationInternalID > '00000000' then BOOSubOp.Operation end as vdm_uvorn preserving type)` |  |  |
| `OperationText` |  | |  | `case when BOOSubOp.SuperiorOperationInternalID > '00000000' then BOOSubOp.OperationText else kbed._BOOOperationInternalVersion.OperationText end` |  |  |
| `ActualNumberOfSplits` |  | |  |  |  |  |
| `CapacityRequirementSplit` |  | |  |  |  |  |
| `OperationLatestStartDate` |  | |  |  |  |  |
| `OperationLatestStartTime` |  | |  |  |  |  |
| `OperationLatestEndDate` |  | |  |  |  |  |
| `OperationLatestEndTime` |  | |  |  |  |  |
| `OperationEarliestStartDate` |  | |  |  |  |  |
| `OperationEarliestStartTime` |  | |  |  |  |  |
| `OperationEarliestEndDate` |  | |  |  |  |  |
| `OperationEarliestEndTime` |  | |  |  |  |  |
| `OpErlstSchedldProcgStrtDte` |  | |  | `ErlstSchedldProcStrtDte` |  |  |
| `OpErlstSchedldProcgStrtTme` |  | |  | `ErlstSchedldProcStrtTime` |  |  |
| `OpErlstSchedldTrdwnStrtDte` |  | |  | `ErlstSchedldTrdwnStrtDte` |  |  |
| `OpErlstSchedldTrdwnStrtTme` |  | |  | `ErlstSchedldTrdwnStrtTime` |  |  |
| `OpLtstSchedldProcgStrtDte` |  | |  | `LtstSchedldProcStrtDte` |  |  |
| `OpLtstSchedldProcgStrtTme` |  | |  | `LtstSchedldProcStrtTime` |  |  |
| `OpLtstSchedldTrdwnStrtDte` |  | |  | `LtstSchedldTrdwnStrtDte` |  |  |
| `OpLtstSchedldTrdwnStrtTme` |  | |  | `LtstSchedldTrdwnStrtTime` |  |  |
| `CapacityRequirementUnit` |  | |  |  |  |  |
| `ScheduledCapReqOpSegSetupDurn` |  | |  |  |  |  |
| `RemainingCapReqOpSegSetupDurn` |  | |  |  |  |  |
| `ScheduledCapReqOpSegProcgDurn` |  | |  |  |  |  |
| `RemainingCapReqOpSegProcgDurn` |  | |  |  |  |  |
| `ScheduledCapReqOpSegTrdwnDurn` |  | |  |  |  |  |
| `RemainingCapReqOpSegTrdwnDurn` |  | |  |  |  |  |
| `_CapacityCategory` | | ✓ | | | | |
| `_WorkCenterType` | | ✓ | | | | |
| `_WorkCenter` | | ✓ | | | | |
| `_OrderStatusObject` | | ✓ | | | | |
| `_PlannedOrder` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CapacityCategory` | `I_CapacityCategory` | [0..1] |
| `_WorkCenterType` | `I_WorkCenterType` | [0..1] |
| `_WorkCenter` | `I_WorkCenter` | [0..1] |
| `_OrderStatusObject` | `I_StatusObject` | [0..1] |
| `_PlannedOrder` | `I_PlannedOrder` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AccessControl.privilegedAssociations: ['_OrderStatusObject']
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IPLNDORDERCAP'
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.representativeKey: 'CapacityRqmtItemCapacity'
@ObjectModel.sapObjectNodeType.name: 'PlannedOrderCapacity'
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Planned Order Capacity'
// This view selects CapReq capacities for planned orders as "pseudo-operations"

define view entity I_PlannedOrderCapacity
  as select from I_CapacityRequirementItemCap         as kbed
    left outer to many join I_BillOfOperationsOpBasic as BOOSubOp on  BOOSubOp.BillOfOperationsType        = kbed.BillOfOperationsType
                                                                  and BOOSubOp.BillOfOperationsGroup       = kbed.BillOfOperationsGroup
                                                                  and BOOSubOp.BOOOperationInternalID      = kbed.BOOSubOperationInternalID
                                                                  and BOOSubOp.BOOOpInternalVersionCounter = kbed.BOOSubOperationInternalVersion
                                                                  
  association [0..1] to I_CapacityCategory as _CapacityCategory  on  $projection.CapacityCategory = _CapacityCategory.CapacityCategoryCode
  association [0..1] to I_WorkCenterType   as _WorkCenterType    on  $projection.WorkCenterType = _WorkCenterType.WorkCenterTypeCode
  association [0..1] to I_WorkCenter       as _WorkCenter        on  $projection.WorkCenterType       = _WorkCenter.WorkCenterTypeCode
                                                                 and $projection.WorkCenterInternalID = _WorkCenter.WorkCenterInternalID
  association [0..1] to I_StatusObject     as _OrderStatusObject on  $projection.OrderObjectInternalID = _OrderStatusObject.StatusObject
  -- to root
  association [1..1] to I_PlannedOrder     as _PlannedOrder     on  $projection.PlannedOrder = _PlannedOrder.PlannedOrder
{
      // Key
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CapacityRequirementStdVH', element: 'CapacityRequirement' } } ]
      @ObjectModel.foreignKey.association: '_CapacityRequirement'
  key kbed.CapacityRequirement,
      @ObjectModel.foreignKey.association: '_CapacityRequirementItem'
  key kbed.CapacityRequirementItem,
  --  representative key
  key kbed.CapacityRqmtItemCapacity,

      // Assignments
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlannedOrderStdVH', element: 'PlannedOrder' } } ]
      @ObjectModel.foreignKey.association: '_PlannedOrder'
      @ObjectModel.sapObjectNodeTypeReference: 'PlannedOrder'
      kbed.PlannedOrder,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WorkCenterStdVH', element: 'WorkCenterInternalID' } } ]
      @ObjectModel.foreignKey.association: '_WorkCenter'
      kbed.WorkCenterInternalID,
      @ObjectModel.foreignKey.association: '_WorkCenterType'
      kbed.WorkCenterTypeCode_2           as WorkCenterType,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CapacityStdVH', element: 'CapacityInternalID' } } ]
      @ObjectModel.foreignKey.association: '_Capacity'
      kbed.CapacityInternalID,
      @ObjectModel.foreignKey.association: '_CapacityCategory'
      kbed._Capacity.CapacityCategoryCode as CapacityCategory,
      @ObjectModel.foreignKey.association: '_CapacityRequirementConf'    
      kbed.CapacityRqmtConfirmation,
      @ObjectModel.foreignKey.association: '_OrderStatusObject'
      kbed.OrderObjectInternalID,

      // Operation Data
      kbed.BillOfOperationsSequence       as Sequence,
      @ObjectModel.text.element: ['OperationText']
      kbed.Operation_2                    as Operation,
      -- sub-operation logic
      @ObjectModel.text.element: ['OperationText']
      cast( case
              when BOOSubOp.SuperiorOperationInternalID > '00000000' 
                then BOOSubOp.Operation
      end as vdm_uvorn preserving type)   as SubOperation,

      // Text
      @Semantics.text: true
      case
        when BOOSubOp.SuperiorOperationInternalID > '00000000'
          then BOOSubOp.OperationText
          else kbed._BOOOperationInternalVersion.OperationText
      end                                 as OperationText,

      // Split data
      kbed.ActualNumberOfSplits,
      kbed.CapacityRequirementSplit,

      // Dates/Times
      kbed.OperationLatestStartDate,
      kbed.OperationLatestStartTime,
      kbed.OperationLatestEndDate,
      kbed.OperationLatestEndTime,
      kbed.OperationEarliestStartDate,
      kbed.OperationEarliestStartTime,
      kbed.OperationEarliestEndDate,
      kbed.OperationEarliestEndTime,

      // Time Events
      kbed.ErlstSchedldProcStrtDte        as OpErlstSchedldProcgStrtDte,
      kbed.ErlstSchedldProcStrtTime       as OpErlstSchedldProcgStrtTme,
      kbed.ErlstSchedldTrdwnStrtDte       as OpErlstSchedldTrdwnStrtDte,
      kbed.ErlstSchedldTrdwnStrtTime      as OpErlstSchedldTrdwnStrtTme,      
      kbed.LtstSchedldProcStrtDte         as OpLtstSchedldProcgStrtDte,
      kbed.LtstSchedldProcStrtTime        as OpLtstSchedldProcgStrtTme,
      kbed.LtstSchedldTrdwnStrtDte        as OpLtstSchedldTrdwnStrtDte,
      kbed.LtstSchedldTrdwnStrtTime       as OpLtstSchedldTrdwnStrtTme,

      // Durations
      kbed.CapacityRequirementUnit,
      kbed.ScheduledCapReqOpSegSetupDurn,
      kbed.RemainingCapReqOpSegSetupDurn,
      kbed.ScheduledCapReqOpSegProcgDurn,
      kbed.RemainingCapReqOpSegProcgDurn,
      kbed.ScheduledCapReqOpSegTrdwnDurn,
      kbed.RemainingCapReqOpSegTrdwnDurn,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_ROOT, #TO_COMPOSITION_PARENT]
      _PlannedOrder,
      _WorkCenter,
      @Consumption.hidden: true
      _WorkCenterType,
      _CapacityCategory,
      _OrderStatusObject,
      kbed._CapacityRequirementConf,
      kbed._CapacityRequirement,
      kbed._CapacityRequirementItem,
      kbed._Capacity,
      kbed._UnitOfMeasure
}
where
  kbed.PlannedOrder is not initial;
```
