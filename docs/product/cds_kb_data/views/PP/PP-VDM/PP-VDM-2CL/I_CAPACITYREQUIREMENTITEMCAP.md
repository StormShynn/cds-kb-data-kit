---
name: I_CAPACITYREQUIREMENTITEMCAP
description: "Capacityrequirementitemcap"
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
  - item-level
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_CAPACITYREQUIREMENTITEMCAP

**Capacityrequirementitemcap**

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
| `CapacityRequirement` | ✓ | |  | `bedid` |  |  |
| `CapacityRequirementItem` | ✓ | |  | `cast(kbed.bedzl as pph_bedzl preserving type)` |  |  |
| `CapacityRqmtItemCapacity` | ✓ | |  | `cast(kbed.canum as pph_canum preserving type)` |  |  |
| `CapacityRqmtConfirmation` |  | |  | `bstkz` |  |  |
| `WorkCenterInternalID` |  | |  | `arbid` |  |  |
| `WorkCenterTypeCode` |  | |  | `cast('A' as pph_arbty preserving type)` |  |  |
| `WorkCenterTypeCode_2` |  | |  | `cast('A ' as vdm_arbty preserving type)` |  |  |
| `CapacityInternalID` |  | |  | `kapid` |  |  |
| `PlannedOrder` |  | |  | `plnum` |  |  |
| `OrderInternalID` |  | |  | `cast(kbed.aufpl as pph_aufpl preserving type)` |  |  |
| `OrderID` |  | |  | `aufnr` |  |  |
| `OrderOperationInternalID` |  | |  | `cast(kbed.aplzl as operationinternalid preserving type)` |  |  |
| `Operation` |  | |  | `vornr` |  |  |
| `Operation_2` |  | |  | `cast(kbed.vornr as vdm_vornr preserving type)` |  |  |
| `SalesOperationsPlanningOrder` |  | |  | `safnr` |  |  |
| `PersonnelNumber` |  | |  | `pernr` |  |  |
| `CapacityRequirementDistrKey` |  | |  | `kpver` |  |  |
| `OperationIsPhase` |  | |  | `phase_kz` |  |  |
| `OperationPhaseCode` |  | |  | `phase_kz` |  |  |
| `SuperiorOperationInternalID` |  | |  | `cast(kbed.bedzlf as pph_sumnr preserving type)` |  |  |
| `BillOfOperationsType` |  | |  | `cast(kbed.plnty as billofoperationstype preserving type)` |  |  |
| `BillOfOperationsGroup` |  | |  | `cast(kbed.plnnr as billofoperations preserving type)` |  |  |
| `BillOfOperations` |  | |  | `cast(kbed.plnal as billofoperationsvariant preserving type)` |  |  |
| `BillOfOperationsChangeStateID` |  | |  | `cast(kbed.zaehl as billofoperationschgstate preserving type)` |  |  |
| `BillOfOperationsSequence` |  | |  | `plnfl` |  |  |
| `BOOOperationInternalID` |  | |  | `plnkn` |  |  |
| `BOOOpInternalVersionCounter` |  | |  | `zaehp` |  |  |
| `BOOSubOperationInternalID` |  | |  | `splkn` |  |  |
| `BOOSubOperationInternalVersion` |  | |  | `szaehl` |  |  |
| `CapacityRequirementUnit` |  | |  | `keinh` |  |  |
| `ScheduledCapReqOpSegSetupDurn` |  | |  | `kruesoll` |  |  |
| `RemainingCapReqOpSegSetupDurn` |  | |  | `kruerest` |  |  |
| `ScheduledCapReqOpSegProcgDurn` |  | |  | `kbeasoll` |  |  |
| `RemainingCapReqOpSegProcgDurn` |  | |  | `kbearest` |  |  |
| `ScheduledCapReqOpSegTrdwnDurn` |  | |  | `kabrsoll` |  |  |
| `RemainingCapReqOpSegTrdwnDurn` |  | |  | `kabrrest` |  |  |
| `OperationStandardDurationUnit` |  | |  | `daune` |  |  |
| `OperationStandardDuration` |  | |  | `dauno` |  |  |
| `ActualForecastDurationUnit` |  | |  | `cast(kbez.pdae as pph_pdae preserving type)` |  |  |
| `ActualForecastDuration` |  | |  | `cast(kbez.pdau as pph_pdau preserving type)` |  |  |
| `OperationEarliestStartDate` |  | |  | `fstad` |  |  |
| `OperationEarliestStartTime` |  | |  | `fstau` |  |  |
| `OperationEarliestEndDate` |  | |  | `fendd` |  |  |
| `OperationEarliestEndTime` |  | |  | `fendu` |  |  |
| `OperationLatestStartDate` |  | |  | `sstad` |  |  |
| `OperationLatestStartTime` |  | |  | `sstau` |  |  |
| `OperationLatestEndDate` |  | |  | `sendd` |  |  |
| `OperationLatestEndTime` |  | |  | `sendu` |  |  |
| `ActualStartDate` |  | |  | `istad` |  |  |
| `ActualStartTime` |  | |  | `istau` |  |  |
| `ActualEndDate` |  | |  | `iendd` |  |  |
| `ActualEndTime` |  | |  | `iendu` |  |  |
| `ActualForecastEndDate` |  | |  | `cast(kbed.pendd as pph_pedd preserving type)` |  |  |
| `ActualForecastEndTime` |  | |  | `cast(kbed.pendu as pph_pedz preserving type)` |  |  |
| `ErlstSchedldProcStrtDte` |  | |  | `cast(kbed.fssbd as pph_fssbd preserving type)` |  |  |
| `ErlstSchedldProcStrtTime` |  | |  | `cast(kbed.fssbz as pph_fssbz preserving type)` |  |  |
| `ErlstSchedldTrdwnStrtDte` |  | |  | `cast(kbed.fssad as pph_fssad preserving type)` |  |  |
| `ErlstSchedldTrdwnStrtTime` |  | |  | `cast(kbed.fssaz as pph_fssaz preserving type)` |  |  |
| `LtstSchedldProcStrtDte` |  | |  | `cast(kbed.sssbd as pph_sssbd preserving type)` |  |  |
| `LtstSchedldProcStrtTime` |  | |  | `cast(kbed.sssbz as pph_sssbz preserving type)` |  |  |
| `LtstSchedldTrdwnStrtDte` |  | |  | `cast(kbed.sssad as pph_sssad preserving type)` |  |  |
| `LtstSchedldTrdwnStrtTime` |  | |  | `cast(kbed.sssaz as pph_sssaz preserving type)` |  |  |
| `ActualNumberOfSplits` |  | |  | `ispli` |  |  |
| `CapacityRequirementSplit` |  | |  | `cast(kbed.split as pph_split preserving type)` |  |  |
| `ObjectInternalID` |  | |  | `kbsta` |  |  |
| `OrderObjectInternalID` |  | |  | `cast(kbed.obsta as pph_obsta preserving type)` |  |  |
| `StandardWorkQuantityUnit1` |  | |  | `cast(kbez.vge01 as pph_vge01 preserving type)` |  |  |
| `StandardWorkQuantity1` |  | |  | `cast(kbez.vgw01 as vdm_vgw01 preserving type)` |  |  |
| `StandardWorkQuantityUnit2` |  | |  | `cast(kbez.vge02 as pph_vge02 preserving type)` |  |  |
| `StandardWorkQuantity2` |  | |  | `cast(kbez.vgw02 as vdm_vgw02 preserving type)` |  |  |
| `StandardWorkQuantityUnit3` |  | |  | `cast(kbez.vge03 as pph_vge03 preserving type)` |  |  |
| `StandardWorkQuantity3` |  | |  | `cast(kbez.vgw03 as vdm_vgw03 preserving type)` |  |  |
| `StandardWorkQuantityUnit4` |  | |  | `cast(kbez.vge04 as pph_vge04 preserving type)` |  |  |
| `StandardWorkQuantity4` |  | |  | `cast(kbez.vgw04 as vdm_vgw04 preserving type)` |  |  |
| `StandardWorkQuantityUnit5` |  | |  | `cast(kbez.vge05 as pph_vge05 preserving type)` |  |  |
| `StandardWorkQuantity5` |  | |  | `cast(kbez.vgw05 as vdm_vgw05 preserving type)` |  |  |
| `StandardWorkQuantityUnit6` |  | |  | `cast(kbez.vge06 as pph_vge06 preserving type)` |  |  |
| `StandardWorkQuantity6` |  | |  | `cast(kbez.vgw06 as vdm_vgw06 preserving type)` |  |  |
| `StandardWorkQuantityUnit` |  | |  | `arbeh` |  |  |
| `PlannedWorkQuantity` |  | |  | `arbei` |  |  |
| `ActualWorkQuantity` |  | |  | `ismnw` |  |  |
| `ForecastedWorkQty` |  | |  | `ofmnw` |  |  |
| `_CapacityRequirement` | | ✓ | | | | |
| `_CapacityRequirementItem` | | ✓ | | | | |
| `_CapacityRequirementConf` | | ✓ | | | | |
| `_Capacity` | | ✓ | | | | |
| `_WorkCenter` | | ✓ | | | | |
| `_WorkCenterType` | | ✓ | | | | |
| `_WorkCenter_2` | | ✓ | | | | |
| `_WorkCenterType_2` | | ✓ | | | | |
| `_PlannedOrder` | | ✓ | | | | |
| `_OrderInternalID` | | ✓ | | | | |
| `_Order` | | ✓ | | | | |
| `_OrderItem` | | ✓ | | | | |
| `_OrderOperation` | | ✓ | | | | |
| `_SalesOperationsPlanningOrder` | | ✓ | | | | |
| `_BillOfOperationsType` | | ✓ | | | | |
| `_BillOfOperationsGroup` | | ✓ | | | | |
| `_BillOfOperations` | | ✓ | | | | |
| `_BillOfOperationsChangeState` | | ✓ | | | | |
| `_BillOfOperationsSequence` | | ✓ | | | | |
| `_BillOfOperationsSequence2` | | ✓ | | | | |
| `_BOOOperationInternalID` | | ✓ | | | | |
| `_BOOOperationInternalVersion` | | ✓ | | | | |
| `_BOOSubOperationInternalID` | | ✓ | | | | |
| `_BOOSubOperationInternalVers` | | ✓ | | | | |
| `_Employee` | | ✓ | | | | |
| `_Employment` | | ✓ | | | | |
| `_StatusObject` | | ✓ | | | | |
| `_StatusObjectStatus` | | ✓ | | | | |
| `_OrderStatusObjectStatus` | | ✓ | | | | |
| `_WorkQuantityUnit1` | | ✓ | | | | |
| `_WorkQuantityUnit2` | | ✓ | | | | |
| `_WorkQuantityUnit3` | | ✓ | | | | |
| `_WorkQuantityUnit4` | | ✓ | | | | |
| `_WorkQuantityUnit5` | | ✓ | | | | |
| `_WorkQuantityUnit6` | | ✓ | | | | |
| `_StandardDurationUnit` | | ✓ | | | | |
| `_ForecastDurationUnit` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CapacityRequirement` | `I_CapacityRequirement` | [1..1] |
| `_CapacityRequirementItem` | `I_CapacityRequirementItem` | [1..1] |
| `_CapacityRequirementConf` | `I_CapacityRequirementConf` | [1..1] |
| `_Capacity` | `I_Capacity` | [1..1] |
| `_WorkCenter` | `I_WorkCenter` | [0..1] |
| `_WorkCenterType` | `I_WorkCenterType` | [1..1] |
| `_WorkCenter_2` | `I_WorkCenter` | [0..1] |
| `_WorkCenterType_2` | `I_WorkCenterType` | [1..1] |
| `_PlannedOrder` | `I_PlannedOrder` | [0..1] |
| `_OrderInternalID` | `I_OrderInternalID` | [0..1] |
| `_Order` | `I_LogisticsOrder` | [0..1] |
| `_OrderItem` | `I_OrderItem` | [0..1] |
| `_OrderOperation` | `I_OrderOperation` | [0..1] |
| `_SalesOperationsPlanningOrder` | `I_SalesOperationsPlanningOrder` | [0..1] |
| `_BillOfOperationsType` | `I_BillOfOperationsType` | [0..1] |
| `_BillOfOperationsGroup` | `I_BillOfOperationsGroup` | [0..1] |
| `_BillOfOperations` | `I_BillOfOperations` | [0..1] |
| `_BillOfOperationsChangeState` | `I_BillOfOperationsChangeState` | [0..1] |
| `_BillOfOperationsSequence` | `I_MfgBillOfOperationsSequence` | [0..1] |
| `_BillOfOperationsSequence2` | `I_BillOfOperationsSequence` | [0..1] |
| `_BOOOperationInternalID` | `I_BOOOperationInternalID` | [0..1] |
| `_BOOOperationInternalVersion` | `I_BillOfOperationsOpBasic` | [0..1] |
| `_BOOSubOperationInternalID` | `I_BOOOperationInternalID` | [0..1] |
| `_BOOSubOperationInternalVers` | `I_BillOfOperationsOpBasic` | [0..1] |
| `_Employee` | `I_WorkforcePerson` | [0..1] |
| `_Employment` | `I_PersonWorkAgreement_1` | [0..1] |
| `_StatusObject` | `I_StatusObject` | [1..1] |
| `_StatusObjectStatus` | `I_StatusObjectStatus` | [0..1] |
| `_OrderStatusObjectStatus` | `I_StatusObjectStatus` | [0..1] |
| `_WorkQuantityUnit1` | `I_UnitOfMeasure` | [0..1] |
| `_WorkQuantityUnit2` | `I_UnitOfMeasure` | [0..1] |
| `_WorkQuantityUnit3` | `I_UnitOfMeasure` | [0..1] |
| `_WorkQuantityUnit4` | `I_UnitOfMeasure` | [0..1] |
| `_WorkQuantityUnit5` | `I_UnitOfMeasure` | [0..1] |
| `_WorkQuantityUnit6` | `I_UnitOfMeasure` | [0..1] |
| `_StandardDurationUnit` | `I_UnitOfMeasure` | [0..1] |
| `_ForecastDurationUnit` | `I_UnitOfMeasure` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPCAPRQMTITMCAP'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.privilegedAssociations: ['_StatusObjectStatus', '_OrderStatusObjectStatus', '_StatusObject']
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION]
@ObjectModel.representativeKey: 'CapacityRqmtItemCapacity'
@ObjectModel.sapObjectNodeType.name: 'WorkOrderCapacityRqmtCapacity'
@ObjectModel.semanticKey: ['CapacityRequirement', 'CapacityRequirementItem', 'CapacityRqmtItemCapacity']
@ObjectModel.usageType: {serviceQuality: #B, sizeCategory: #XL, dataClass: #TRANSACTIONAL}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Capacity Requirement Item Capacity'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "CARDINALITY_CHECK" ]  } */
define view I_CapacityRequirementItemCap
  as select from           kbed as kbed
    left outer to one join kbez as kbez on  kbed.bedid = kbez.bedid 
                                        and kbed.bedzl = kbez.bedzl
                                        and kbed.canum = kbez.canum
    left outer to one join afko as afko on  kbed.aufpl = afko.aufpl 
                                        and kbed.aufpl > '0000000000'

  association [1..1] to I_CapacityRequirement          as _CapacityRequirement          on  $projection.CapacityRequirement = _CapacityRequirement.CapacityRequirement
  association [1..1] to I_CapacityRequirementItem      as _CapacityRequirementItem      on  $projection.CapacityRequirement     = _CapacityRequirementItem.CapacityRequirement
                                                                                        and $projection.CapacityRequirementItem = _CapacityRequirementItem.CapacityRequirementItem
  association [1..1] to I_CapacityRequirementConf      as _CapacityRequirementConf      on  $projection.CapacityRqmtConfirmation= _CapacityRequirementConf.CapacityRqmtConfirmation
  association [1..1] to I_Capacity                     as _Capacity                     on  $projection.CapacityInternalID = _Capacity.CapacityInternalID
  association [0..1] to I_WorkCenter                   as _WorkCenter                   on  $projection.WorkCenterTypeCode = _WorkCenter.WorkCenterTypeCode 
                                                                                        and $projection.WorkCenterInternalID = _WorkCenter.WorkCenterInternalID
  association [1..1] to I_WorkCenterType               as _WorkCenterType               on  $projection.WorkCenterTypeCode = _WorkCenterType.WorkCenterTypeCode
  association [0..1] to I_WorkCenter                   as _WorkCenter_2                 on  $projection.WorkCenterTypeCode_2 = _WorkCenter_2.WorkCenterTypeCode 
                                                                                        and $projection.WorkCenterInternalID = _WorkCenter_2.WorkCenterInternalID
  association [1..1] to I_WorkCenterType               as _WorkCenterType_2             on  $projection.WorkCenterTypeCode_2 = _WorkCenterType_2.WorkCenterTypeCode
  association [0..1] to I_PlannedOrder                 as _PlannedOrder                 on  $projection.PlannedOrder = _PlannedOrder.PlannedOrder
  association [0..1] to I_OrderInternalID              as _OrderInternalID              on  $projection.OrderInternalID = _OrderInternalID.OrderInternalID
  association [0..1] to I_LogisticsOrder               as _Order                        on  $projection.OrderID = _Order.OrderID
  association [0..1] to I_OrderItem                    as _OrderItem                    on  $projection.OrderID  = _OrderItem.OrderID
                                                                                        and _OrderItem.OrderItem = '0001'
  association [0..1] to I_OrderOperation               as _OrderOperation               on  $projection.OrderInternalID          = _OrderOperation.OrderInternalID
                                                                                        and $projection.OrderOperationInternalID = _OrderOperation.OrderOperationInternalID
  association [0..1] to I_SalesOperationsPlanningOrder as _SalesOperationsPlanningOrder on  $projection.SalesOperationsPlanningOrder= _SalesOperationsPlanningOrder.SalesOperationsPlanningOrder
  association [0..1] to I_BillOfOperationsType         as _BillOfOperationsType         on  $projection.BillOfOperationsType = _BillOfOperationsType.BillOfOperationsType
  association [0..1] to I_BillOfOperationsGroup        as _BillOfOperationsGroup        on  $projection.BillOfOperationsType  = _BillOfOperationsGroup.BillOfOperationsType
                                                                                        and $projection.BillOfOperationsGroup = _BillOfOperationsGroup.BillOfOperationsGroup
  association [0..1] to I_BillOfOperations             as _BillOfOperations             on  $projection.BillOfOperationsType  = _BillOfOperations.BillOfOperationsType
                                                                                        and $projection.BillOfOperationsGroup = _BillOfOperations.BillOfOperationsGroup
                                                                                        and $projection.BillOfOperations      = _BillOfOperations.BillOfOperationsVariant
  association [0..1] to I_BillOfOperationsChangeState  as _BillOfOperationsChangeState  on  $projection.BillOfOperationsType          = _BillOfOperationsChangeState.BillOfOperationsType
                                                                                        and $projection.BillOfOperationsGroup         = _BillOfOperationsChangeState.BillOfOperationsGroup
                                                                                        and $projection.BillOfOperations              = _BillOfOperationsChangeState.BillOfOperationsVariant
                                                                                        and $projection.BillOfOperationsChangeStateID = _BillOfOperationsChangeState.BOOInternalVersionCounter
  association [0..1] to I_MfgBillOfOperationsSequence  as _BillOfOperationsSequence     on  $projection.BillOfOperationsType     = _BillOfOperationsSequence.BillOfOperationsType
                                                                                        and $projection.BillOfOperationsGroup    = _BillOfOperationsSequence.BillOfOperationsGroup
                                                                                        and $projection.BillOfOperations         = _BillOfOperationsSequence.BillOfOperationsVariant
                                                                                        and $projection.BillOfOperationsSequence = _BillOfOperationsSequence.BillOfOperationsSequence
  association [0..1] to I_BillOfOperationsSequence     as _BillOfOperationsSequence2    on  $projection.BillOfOperationsType     = _BillOfOperationsSequence2.BillOfOperationsType
                                                                                        and $projection.BillOfOperationsGroup    = _BillOfOperationsSequence2.BillOfOperationsGroup
                                                                                        and $projection.BillOfOperations         = _BillOfOperationsSequence2.BillOfOperationsVariant
                                                                                        and $projection.BillOfOperationsSequence = _BillOfOperationsSequence2.BillOfOperationsSequence
  association [0..1] to I_BOOOperationInternalID       as _BOOOperationInternalID       on  $projection.BillOfOperationsType   = _BOOOperationInternalID.BillOfOperationsType
                                                                                        and $projection.BillOfOperationsGroup  = _BOOOperationInternalID.BillOfOperationsGroup
                                                                                        and $projection.BOOOperationInternalID = _BOOOperationInternalID.BOOOperationInternalID
  association [0..1] to I_BillOfOperationsOpBasic      as _BOOOperationInternalVersion  on  $projection.BillOfOperationsType        = _BOOOperationInternalVersion.BillOfOperationsType
                                                                                        and $projection.BillOfOperationsGroup       = _BOOOperationInternalVersion.BillOfOperationsGroup
                                                                                        and $projection.BOOOperationInternalID      = _BOOOperationInternalVersion.BOOOperationInternalID
                                                                                        and $projection.BOOOpInternalVersionCounter = _BOOOperationInternalVersion.BOOOpInternalVersionCounter
  association [0..1] to I_BOOOperationInternalID       as _BOOSubOperationInternalID    on  $projection.BillOfOperationsType      = _BOOSubOperationInternalID.BillOfOperationsType
                                                                                        and $projection.BillOfOperationsGroup     = _BOOSubOperationInternalID.BillOfOperationsGroup
                                                                                        and $projection.BOOSubOperationInternalID = _BOOSubOperationInternalID.BOOOperationInternalID
  association [0..1] to I_BillOfOperationsOpBasic      as _BOOSubOperationInternalVers  on  $projection.BillOfOperationsType           = _BOOSubOperationInternalVers.BillOfOperationsType
                                                                                        and $projection.BillOfOperationsGroup          = _BOOSubOperationInternalVers.BillOfOperationsGroup
                                                                                        and $projection.BOOSubOperationInternalID      = _BOOSubOperationInternalVers.BOOOperationInternalID
                                                                                        and $projection.BOOSubOperationInternalVersion = _BOOSubOperationInternalVers.BOOOpInternalVersionCounter
--association [0..1] to I_Employee                     as _Employee                     on  $projection.PersonnelNumber = _Employee.Employee
  association [0..1] to I_WorkforcePerson              as _Employee                     on  $projection.PersonnelNumber = _Employee.PersonExternalID
--association [0..1] to I_Employment                   as _Employment                   on  $projection.PersonnelNumber = _Employment.EmploymentInternalID
  association [0..1] to I_PersonWorkAgreement_1        as _Employment                   on  $projection.PersonnelNumber = _Employment.PersonWorkAgreement
  association [1..1] to I_StatusObject                 as _StatusObject                 on  $projection.ObjectInternalID = _StatusObject.StatusObject
  association [0..1] to I_StatusObjectStatus           as _StatusObjectStatus           on  $projection.ObjectInternalID = _StatusObjectStatus.StatusObject 
                                                                                        and _StatusObjectStatus.StatusCode = 'I0117'
  association [0..1] to I_StatusObjectStatus           as _OrderStatusObjectStatus      on  $projection.OrderObjectInternalID = _OrderStatusObjectStatus.StatusObject 
                                                                                        and _OrderStatusObjectStatus.StatusCode = 'I0117'
  association [0..1] to I_UnitOfMeasure                as _WorkQuantityUnit1            on  $projection.StandardWorkQuantityUnit1 = _WorkQuantityUnit1.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _WorkQuantityUnit2            on  $projection.StandardWorkQuantityUnit2 = _WorkQuantityUnit2.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _WorkQuantityUnit3            on  $projection.StandardWorkQuantityUnit3 = _WorkQuantityUnit3.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _WorkQuantityUnit4            on  $projection.StandardWorkQuantityUnit4 = _WorkQuantityUnit4.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _WorkQuantityUnit5            on  $projection.StandardWorkQuantityUnit5 = _WorkQuantityUnit5.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _WorkQuantityUnit6            on  $projection.StandardWorkQuantityUnit6 = _WorkQuantityUnit6.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _StandardDurationUnit         on  $projection.OperationStandardDurationUnit = _StandardDurationUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _ForecastDurationUnit         on  $projection.ActualForecastDurationUnit = _ForecastDurationUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _UnitOfMeasure                on  $projection.CapacityRequirementUnit = _UnitOfMeasure.UnitOfMeasure
{
      // Key
      @ObjectModel.foreignKey.association: '_CapacityRequirement'
  key kbed.bedid as CapacityRequirement,
      @ObjectModel.foreignKey.association: '_CapacityRequirementItem'
  key cast(kbed.bedzl as pph_bedzl preserving type) as CapacityRequirementItem,
      -- representative key
  key cast(kbed.canum as pph_canum preserving type) as CapacityRqmtItemCapacity,

      // Assignments
      @ObjectModel.foreignKey.association: '_CapacityRequirementConf'    
      kbed.bstkz as CapacityRqmtConfirmation,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WorkCenterStdVH', element: 'WorkCenterInternalID' } } ]
      @ObjectModel.foreignKey.association: '_WorkCenter_2'
      kbed.arbid as WorkCenterInternalID,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'WorkCenterTypeCode_2'
      @ObjectModel.foreignKey.association: '_WorkCenterType'
      cast('A' as pph_arbty preserving type)                  as WorkCenterTypeCode,
      @ObjectModel.foreignKey.association: '_WorkCenterType_2'
      cast('A ' as vdm_arbty preserving type)                 as WorkCenterTypeCode_2,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CapacityStdVH', element: 'CapacityInternalID' } } ]
      @ObjectModel.foreignKey.association: '_Capacity'
      kbed.kapid as CapacityInternalID,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlannedOrderStdVH', element: 'PlannedOrder' } } ]
      @ObjectModel.foreignKey.association: '_PlannedOrder'
      @ObjectModel.sapObjectNodeTypeReference: 'PlannedOrder'
      kbed.plnum as PlannedOrder,
      @ObjectModel.foreignKey.association: '_OrderInternalID'
      cast(kbed.aufpl as pph_aufpl preserving type)           as OrderInternalID,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_LogisticsOrderStdVH', element: 'OrderID' } } ]
      @ObjectModel.foreignKey.association: '_Order'
      afko.aufnr as OrderID,
      @ObjectModel.foreignKey.association: '_OrderOperation'
      cast(kbed.aplzl as operationinternalid preserving type) as OrderOperationInternalID,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'Operation_2'
      kbed.vornr as Operation,                                                // with conv. exit NUMCV
      cast(kbed.vornr as vdm_vornr preserving type)           as Operation_2, // without conversion exit
      @ObjectModel.foreignKey.association: '_SalesOperationsPlanningOrder'
      kbed.safnr as SalesOperationsPlanningOrder,
      @ObjectModel.foreignKey.association: '_Employment'
      kbed.pernr as PersonnelNumber,
      kbed.kpver as CapacityRequirementDistrKey,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'OperationPhaseCode'
      kbed.phase_kz as OperationIsPhase,
      kbed.phase_kz as OperationPhaseCode,     
      cast(kbed.bedzlf as pph_sumnr preserving type)          as SuperiorOperationInternalID,

      // Assignments BOO Header
      @ObjectModel.foreignKey.association: '_BillOfOperationsType'
      cast(kbed.plnty as billofoperationstype    preserving type)  as BillOfOperationsType,
      @ObjectModel.foreignKey.association: '_BillOfOperationsGroup'
      cast(kbed.plnnr as billofoperations        preserving type)  as BillOfOperationsGroup,
      @ObjectModel.foreignKey.association: '_BillOfOperations'
      cast(kbed.plnal as billofoperationsvariant preserving type)  as BillOfOperations,
      @ObjectModel.foreignKey.association: '_BillOfOperationsChangeState'
      cast(kbed.zaehl as billofoperationschgstate preserving type) as BillOfOperationsChangeStateID,
      // Assignments BOO Sequence
      @ObjectModel.foreignKey.association: '_BillOfOperationsSequence2'
      kbed.plnfl                                                   as BillOfOperationsSequence,
      // Assignments BOO Operation
      @ObjectModel.foreignKey.association: '_BOOOperationInternalID'
      kbed.plnkn                                                   as BOOOperationInternalID,
      @ObjectModel.foreignKey.association: '_BOOOperationInternalVersion'
      kbed.zaehp                                                   as BOOOpInternalVersionCounter,
      // Assignments BOO SubOperation
      @ObjectModel.foreignKey.association: '_BOOSubOperationInternalID'
      kbed.splkn                                                   as BOOSubOperationInternalID,
      @ObjectModel.foreignKey.association: '_BOOSubOperationInternalVers'
      kbed.szaehl                                                  as BOOSubOperationInternalVersion,

      // Capacity Durations
      @Semantics.unitOfMeasure: true
      kbed.keinh    as CapacityRequirementUnit,
      kbed.kruesoll as ScheduledCapReqOpSegSetupDurn,
      kbed.kruerest as RemainingCapReqOpSegSetupDurn,
      kbed.kbeasoll as ScheduledCapReqOpSegProcgDurn,
      kbed.kbearest as RemainingCapReqOpSegProcgDurn,
      kbed.kabrsoll as ScheduledCapReqOpSegTrdwnDurn,
      kbed.kabrrest as RemainingCapReqOpSegTrdwnDurn,

      // other durations
      @Semantics.unitOfMeasure: true
      kbez.daune as OperationStandardDurationUnit,
      kbez.dauno as OperationStandardDuration,
      @Semantics.unitOfMeasure: true
      cast(kbez.pdae as pph_pdae preserving type) as ActualForecastDurationUnit,
      cast(kbez.pdau as pph_pdau preserving type) as ActualForecastDuration,         

      // Dates and Times
      kbed.fstad as OperationEarliestStartDate,
      kbed.fstau as OperationEarliestStartTime,
      kbed.fendd as OperationEarliestEndDate,
      kbed.fendu as OperationEarliestEndTime,
      kbed.sstad as OperationLatestStartDate,
      kbed.sstau as OperationLatestStartTime,
      kbed.sendd as OperationLatestEndDate,
      kbed.sendu as OperationLatestEndTime,
      kbed.istad as ActualStartDate,
      kbed.istau as ActualStartTime,
      kbed.iendd as ActualEndDate,
      kbed.iendu as ActualEndTime,
      cast(kbed.pendd as pph_pedd preserving type)  as ActualForecastEndDate,
      cast(kbed.pendu as pph_pedz preserving type)  as ActualForecastEndTime,

      // Time Events
      cast(kbed.fssbd as pph_fssbd preserving type) as ErlstSchedldProcStrtDte,
      cast(kbed.fssbz as pph_fssbz preserving type) as ErlstSchedldProcStrtTime,
      cast(kbed.fssad as pph_fssad preserving type) as ErlstSchedldTrdwnStrtDte,
      cast(kbed.fssaz as pph_fssaz preserving type) as ErlstSchedldTrdwnStrtTime,
      cast(kbed.sssbd as pph_sssbd preserving type) as LtstSchedldProcStrtDte,
      cast(kbed.sssbz as pph_sssbz preserving type) as LtstSchedldProcStrtTime,
      cast(kbed.sssad as pph_sssad preserving type) as LtstSchedldTrdwnStrtDte,
      cast(kbed.sssaz as pph_sssaz preserving type) as LtstSchedldTrdwnStrtTime,

      // Split data
      kbed.ispli                                    as ActualNumberOfSplits,
      cast(kbed.split as pph_split preserving type) as CapacityRequirementSplit,
      
      // Object status
      @ObjectModel.foreignKey.association: '_StatusObject'
      kbed.kbsta                                    as ObjectInternalID,
      cast(kbed.obsta as pph_obsta preserving type) as OrderObjectInternalID,

      // Work Quantities 1-6
      @Semantics.unitOfMeasure: true
      cast(kbez.vge01 as pph_vge01 preserving type) as StandardWorkQuantityUnit1,
      @Semantics.quantity.unitOfMeasure: 'StandardWorkQuantityUnit1'
      @Aggregation.default: #SUM
      cast(kbez.vgw01 as vdm_vgw01 preserving type) as StandardWorkQuantity1,
      @Semantics.unitOfMeasure: true
      cast(kbez.vge02 as pph_vge02 preserving type) as StandardWorkQuantityUnit2,
      @Semantics.quantity.unitOfMeasure: 'StandardWorkQuantityUnit2'
      @Aggregation.default: #SUM
      cast(kbez.vgw02 as vdm_vgw02 preserving type) as StandardWorkQuantity2,
      @Semantics.unitOfMeasure: true
      cast(kbez.vge03 as pph_vge03 preserving type) as StandardWorkQuantityUnit3,
      @Semantics.quantity.unitOfMeasure: 'StandardWorkQuantityUnit3'
      @Aggregation.default: #SUM
      cast(kbez.vgw03 as vdm_vgw03 preserving type) as StandardWorkQuantity3,
      @Semantics.unitOfMeasure: true
      cast(kbez.vge04 as pph_vge04 preserving type) as StandardWorkQuantityUnit4,
      @Semantics.quantity.unitOfMeasure: 'StandardWorkQuantityUnit4'
      @Aggregation.default: #SUM
      cast(kbez.vgw04 as vdm_vgw04 preserving type) as StandardWorkQuantity4,
      @Semantics.unitOfMeasure: true
      cast(kbez.vge05 as pph_vge05 preserving type) as StandardWorkQuantityUnit5,
      @Semantics.quantity.unitOfMeasure: 'StandardWorkQuantityUnit5'
      @Aggregation.default: #SUM
      cast(kbez.vgw05 as vdm_vgw05 preserving type) as StandardWorkQuantity5,
      @Semantics.unitOfMeasure: true
      cast(kbez.vge06 as pph_vge06 preserving type) as StandardWorkQuantityUnit6,
      @Semantics.quantity.unitOfMeasure: 'StandardWorkQuantityUnit6'
      @Aggregation.default: #SUM
      cast(kbez.vgw06 as vdm_vgw06 preserving type) as StandardWorkQuantity6,         

      // Work Quantity PM & PS
      @Semantics.unitOfMeasure: true
      kbez.arbeh as StandardWorkQuantityUnit,
      @Semantics.quantity.unitOfMeasure: 'StandardWorkQuantityUnit'
      @Aggregation.default: #SUM
      kbez.arbei as PlannedWorkQuantity,
      @Semantics.quantity.unitOfMeasure: 'StandardWorkQuantityUnit'
      @Aggregation.default: #SUM
      kbez.ismnw as ActualWorkQuantity,
      @Semantics.quantity.unitOfMeasure: 'StandardWorkQuantityUnit'
      @Aggregation.default: #SUM
      kbez.ofmnw as ForecastedWorkQty,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_ROOT]
      _CapacityRequirement,
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT]
      _CapacityRequirementItem,
      _CapacityRequirementConf,
      _Capacity,
      _PlannedOrder,
      _Order,
      _OrderItem,
      _OrderOperation,
      @Consumption.hidden: true
      _OrderInternalID,
      _SalesOperationsPlanningOrder,
      _Employee,
      _Employment,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_WorkCenter_2'
      _WorkCenter,
      _WorkCenter_2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_WorkCenterType_2'
      @Consumption.hidden: true
      _WorkCenterType,
      @Consumption.hidden: true
      _WorkCenterType_2,      
      _BillOfOperationsType,
      _BillOfOperationsGroup,
      _BillOfOperations,
      _BillOfOperationsChangeState,
      _BillOfOperationsSequence,
      _BillOfOperationsSequence2,
      @Consumption.hidden: true
      _BOOOperationInternalID,
      _BOOOperationInternalVersion,
      @Consumption.hidden: true
      _BOOSubOperationInternalID,
      _BOOSubOperationInternalVers,
      _StatusObject,
      _StatusObjectStatus,
      _OrderStatusObjectStatus,
      _WorkQuantityUnit1,
      _WorkQuantityUnit2,
      _WorkQuantityUnit3,
      _WorkQuantityUnit4,
      _WorkQuantityUnit5,
      _WorkQuantityUnit6,
      _StandardDurationUnit,
      _ForecastDurationUnit,
      _UnitOfMeasure
};
```
