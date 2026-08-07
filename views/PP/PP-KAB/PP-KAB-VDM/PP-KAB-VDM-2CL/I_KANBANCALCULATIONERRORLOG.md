---
name: I_KANBANCALCULATIONERRORLOG
description: "Kanbancalculationerrorlog"
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
# I_KANBANCALCULATIONERRORLOG

**Kanbancalculationerrorlog**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `KanbanControlCycle` | ✓ | |  | `pknum` |  |  |
| `KnbnCalcChgPrpslCreationDate` |  | |  | `kcedt` |  |  |
| `SystemMessageClass` |  | |  | `msgid` |  |  |
| `SystemMessageType` |  | |  | `msgty` |  |  |
| `SystemMessageNumber` |  | |  | `msgnr` |  |  |
| `SystemMessageVariable1` |  | |  | `cast(msgv1 as vdm_pk_msg_var_1 preserving type)` |  |  |
| `SystemMessageVariable2` |  | |  | `cast(msgv2 as vdm_pk_msg_var_2 preserving type)` |  |  |
| `SystemMessageVariable3` |  | |  | `cast(msgv3 as vdm_pk_msg_var_3 preserving type)` |  |  |
| `SystemMessageVariable4` |  | |  | `cast(msgv4 as vdm_pk_msg_var_4 preserving type)` |  |  |
| `Plant` |  | | `_KanbanControlCycle` | `Plant` |  |  |
| `Supplier` |  | | `_KanbanControlCycle` | `Supplier` |  |  |
| `_KanbanControlCycle` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_SupplierCompanyByPlant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_KanbanControlCycle` | `I_KanbanControlCycle` | [1..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_SupplierCompanyByPlant` | `I_SupplierCompanyByPlant` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IKNBNCALCERRLOG'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Kanban Calculation Error Log'

@Metadata.ignorePropagatedAnnotations: true

@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel.representativeKey: 'KanbanControlCycle'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #TRANSACTIONAL }
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view I_KanbanCalculationErrorLog
  as select from pkec 
  association [1..1] to I_KanbanControlCycle     as _KanbanControlCycle     on  $projection.KanbanControlCycle = _KanbanControlCycle.KanbanControlCycle
 
  // Only for DCL
  association [0..1] to I_Supplier               as _Supplier               on  $projection.supplier = _Supplier.Supplier
  association [0..1] to I_SupplierCompanyByPlant as _SupplierCompanyByPlant on  $projection.supplier = _SupplierCompanyByPlant.Supplier
                                                                            and $projection.plant    = _SupplierCompanyByPlant.Plant
{
    key pknum as KanbanControlCycle,
        kcedt as KnbnCalcChgPrpslCreationDate,
        msgid as SystemMessageClass, 
        msgty as SystemMessageType,
        msgnr as SystemMessageNumber,
        cast(msgv1 as vdm_pk_msg_var_1 preserving type) as SystemMessageVariable1,
        cast(msgv2 as vdm_pk_msg_var_2 preserving type) as SystemMessageVariable2,
        cast(msgv3 as vdm_pk_msg_var_3 preserving type) as SystemMessageVariable3,
        cast(msgv4 as vdm_pk_msg_var_4 preserving type) as SystemMessageVariable4,
                
        // Associations
        _KanbanControlCycle,

        
        // Only for DCL 
        @Consumption.hidden: true      
        _KanbanControlCycle.Plant,
        @Consumption.hidden: true
        _KanbanControlCycle.Supplier,
        @Consumption.hidden: true
        _Supplier,
        @Consumption.hidden: true
        _SupplierCompanyByPlant
}
```
