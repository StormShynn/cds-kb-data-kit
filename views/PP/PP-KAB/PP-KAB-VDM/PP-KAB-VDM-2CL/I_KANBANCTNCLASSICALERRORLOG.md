---
name: I_KANBANCTNCLASSICALERRORLOG
description: Kanbanctnclassicalerrorlog
app_component: PP-KAB-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-KAB
  - PP-KAB-VDM
  - interface-view
  - component:PP-KAB-VDM-2CL
  - lob:Manufacturing
---
# I_KANBANCTNCLASSICALERRORLOG

**Kanbanctnclassicalerrorlog**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `KanbanControlCycle` | ✓ | |  | `pknum` |
| `KanbanControlCycleItem` | ✓ | |  | `pkpos` |
| `KanbanContainer` | ✓ | | `_KanbanContainer` | `KanbanContainer` |
| `Plant` |  | | `_KanbanControlCycle` | `Plant` |
| `SystemMessageClass` |  | |  | `msgid` |
| `SystemMessageNumber` |  | |  | `msgnr` |
| `SystemMessageType` |  | |  | `msgty` |
| `SystemMessageVariable1` |  | |  | `cast(msgv1 as vdm_pk_msg_var_1 preserving type)` |
| `SystemMessageVariable2` |  | |  | `cast(msgv2 as vdm_pk_msg_var_2 preserving type)` |
| `SystemMessageVariable3` |  | |  | `cast(msgv3 as vdm_pk_msg_var_3 preserving type)` |
| `SystemMessageVariable4` |  | |  | `cast(msgv4 as vdm_pk_msg_var_4 preserving type)` |
| `ErrorOccurrenceDate` |  | |  | `saedt` |
| `ErrorOccurrenceTime` |  | |  | `saeuz` |
| `PreviousKanbanContainerStatus` |  | |  | `sfgsv` |
| `TargetKanbanContainerStatus` |  | |  | `sfgsn` |
| `Supplier` |  | | `_KanbanContainer` | `Supplier` |
| `_KanbanControlCycle` | | ✓ | | |
| `_KanbanControlCycleItem` | | ✓ | | |
| `_KanbanContainer` | | ✓ | | |
| `_Supplier` | | ✓ | | |
| `_SupplierCompanyByPlant` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_KanbanControlCycle` | `I_KanbanControlCycle` | [1..1] |
| `_KanbanControlCycleItem` | `I_KanbanControlCycleItem` | [1..1] |
| `_KanbanContainer` | `I_KanbanContainer` | [1..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_SupplierCompanyByPlant` | `I_SupplierCompanyByPlant` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPKNBNCNTCLERR'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Kanban Container Classical Error Log'

@Metadata.ignorePropagatedAnnotations:true

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel.usageType: { serviceQuality: #B, sizeCategory: #L, dataClass: #MIXED }
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.sapObjectNodeType.name: 'KanbanCtnClassicalErrorLog'
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true

@Search.searchable: true


define view I_KanbanCtnClassicalErrorLog 
  as select from pker 

  association [1..1] to I_KanbanControlCycle     as _KanbanControlCycle     on  $projection.KanbanControlCycle = _KanbanControlCycle.KanbanControlCycle
  association [1..1] to I_KanbanControlCycleItem as _KanbanControlCycleItem on  $projection.KanbanControlCycle     = _KanbanControlCycleItem.KanbanControlCycle
                                                                            and $projection.KanbanControlCycleItem = _KanbanControlCycleItem.KanbanControlCycleItem
  association [1..1] to I_KanbanContainer        as _KanbanContainer        on  $projection.KanbanControlCycle     = _KanbanContainer.KanbanControlCycle
                                                                            and $projection.KanbanControlCycleItem = _KanbanContainer.KanbanControlCycleItem

  // Only for DCL
  association [0..1] to I_Supplier               as _Supplier               on  $projection.supplier = _Supplier.Supplier
  association [0..1] to I_SupplierCompanyByPlant as _SupplierCompanyByPlant on  $projection.supplier = _SupplierCompanyByPlant.Supplier
                                                                            and $projection.plant    = _SupplierCompanyByPlant.Plant

{
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key pknum as KanbanControlCycle,
  key pkpos as KanbanControlCycleItem,
  key _KanbanContainer.KanbanContainer as KanbanContainer,

      //for ACL
      _KanbanControlCycle.Plant,

      msgid as SystemMessageClass,
      msgnr as SystemMessageNumber,
      msgty as SystemMessageType,
      cast(msgv1 as vdm_pk_msg_var_1 preserving type) as SystemMessageVariable1,
      cast(msgv2 as vdm_pk_msg_var_2 preserving type) as SystemMessageVariable2,
      cast(msgv3 as vdm_pk_msg_var_3 preserving type) as SystemMessageVariable3,
      cast(msgv4 as vdm_pk_msg_var_4 preserving type) as SystemMessageVariable4,

      saedt as ErrorOccurrenceDate,
      saeuz as ErrorOccurrenceTime,
      sfgsv as PreviousKanbanContainerStatus,
      sfgsn as TargetKanbanContainerStatus,

      _KanbanControlCycle,
      _KanbanControlCycleItem,
      _KanbanContainer,

      // Only for DCL
      @Consumption.hidden: true
      _KanbanContainer.Supplier,
      @Consumption.hidden: true
      _Supplier,
      @Consumption.hidden: true
      _SupplierCompanyByPlant
  
}
```
