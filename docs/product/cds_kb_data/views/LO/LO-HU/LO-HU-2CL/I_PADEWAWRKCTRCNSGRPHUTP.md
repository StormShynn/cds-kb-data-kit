---
name: I_PADEWAWRKCTRCNSGRPHUTP
description: "Padewawrkctrcnsgrphutp"
app_component: LO-HU-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-HU
  - interface-view
  - transactional-processing
  - component:LO-HU-2CL
  - lob:Logistics General
---
# I_PADEWAWRKCTRCNSGRPHUTP

**Padewawrkctrcnsgrphutp**

| Property | Value |
|---|---|
| App Component | `LO-HU-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConditionType` | ✓ | |  | `kschl` |  |  |
| `EWMWarehouse` | ✓ | |  | `ewm_warehouse_number` |  |  |
| `EWMWorkCenter` | ✓ | |  | `workcenter` |  |  |
| `EWMConsolidationGroup` | ✓ | |  | `consolidation_group` |  |  |
| `EWMHandlingUnitType` | ✓ | |  | `ewm_handling_unit_type` |  |  |
| `ConditionValidityEndDate` | ✓ | |  | `datbi` |  |  |
| `ConditionValidityStartDate` |  | |  | `datab` |  |  |
| `ConditionRecord` |  | |  | `knumh` |  |  |
| `PackingInstructionSystemUUID` |  | |  | `cast( Conditions.packnr as pl_packinstnr preserving type )` |  |  |
| `PackingInstructionAlt1SystUUID` |  | |  | `cast( Conditions.packnr1 as pl_altpacknr1 preserving type )` |  |  |
| `PackingInstructionAlt2SystUUID` |  | |  | `cast( Conditions.packnr2 as pl_altpacknr2 preserving type )` |  |  |
| `PackingInstructionAlt3SystUUID` |  | |  | `cast( Conditions.packnr3 as pl_altpacknr3 preserving type )` |  |  |
| `PackingInstructionAlt4SystUUID` |  | |  | `cast( Conditions.packnr4 as pl_altpacknr4 preserving type )` |  |  |
| `_ConditionType` | | ✓ | | | | |
| `_EWMWarehouse` | | ✓ | | | | |
| `_PackingInstructionHeader` | | ✓ | | | | |
| `_PackingInstructionHeaderAlt1` | | ✓ | | | | |
| `_PackingInstructionHeaderAlt2` | | ✓ | | | | |
| `_PackingInstructionHeaderAlt3` | | ✓ | | | | |
| `_PackingInstructionHeaderAlt4` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ConditionType` | `I_ConditionType` | [1..1] |
| `_EWMWarehouse` | `I_EWM_WarehouseNumber_2` | [0..1] |
| `_PackingInstructionHeader` | `I_PackingInstructionHeader` | [0..1] |
| `_PackingInstructionHeaderAlt1` | `I_PackingInstructionHeader` | [0..1] |
| `_PackingInstructionHeaderAlt2` | `I_PackingInstructionHeader` | [0..1] |
| `_PackingInstructionHeaderAlt3` | `I_PackingInstructionHeader` | [0..1] |
| `_PackingInstructionHeaderAlt4` | `I_PackingInstructionHeader` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'PaDeWa for WrkCtr/CnsGrp/Hndlg Unit Type'
@Metadata.ignorePropagatedAnnotations: true

@VDM.viewType: #BASIC

@VDM.lifecycle.contract.type:  #PUBLIC_LOCAL_API

@ObjectModel: {
     usageType: {
         serviceQuality: #A,
         sizeCategory: #L,
         dataClass: #TRANSACTIONAL
     },
     supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ],
     modelingPattern: #NONE
}

define view entity I_PaDeWaWrkCtrCnsGrpHUTp
  as select from kotp482 as PaInDetRec
    join         kondp   as Conditions on PaInDetRec.knumh = Conditions.knumh
  association [1..1] to I_ConditionType            as _ConditionType                on  $projection.ConditionType           = _ConditionType.ConditionType
                                                                                    and _ConditionType.ConditionUsage       = 'P'
                                                                                    and _ConditionType.ConditionApplication = 'PO'
  association [0..1] to I_EWM_WarehouseNumber_2    as _EWMWarehouse                 on  $projection.EWMWarehouse = _EWMWarehouse.EWMWarehouse
  association [0..1] to I_PackingInstructionHeader as _PackingInstructionHeader     on  $projection.PackingInstructionSystemUUID = _PackingInstructionHeader.PackingInstructionSystemUUID
  association [0..1] to I_PackingInstructionHeader as _PackingInstructionHeaderAlt1 on  $projection.PackingInstructionAlt1SystUUID = _PackingInstructionHeaderAlt1.PackingInstructionSystemUUID
  association [0..1] to I_PackingInstructionHeader as _PackingInstructionHeaderAlt2 on  $projection.PackingInstructionAlt2SystUUID = _PackingInstructionHeaderAlt2.PackingInstructionSystemUUID
  association [0..1] to I_PackingInstructionHeader as _PackingInstructionHeaderAlt3 on  $projection.PackingInstructionAlt3SystUUID = _PackingInstructionHeaderAlt3.PackingInstructionSystemUUID
  association [0..1] to I_PackingInstructionHeader as _PackingInstructionHeaderAlt4 on  $projection.PackingInstructionAlt4SystUUID = _PackingInstructionHeaderAlt4.PackingInstructionSystemUUID


{
       @ObjectModel.foreignKey.association: '_ConditionType'
  key  PaInDetRec.kschl                                            as ConditionType,
       @ObjectModel.foreignKey.association: '_EWMWarehouse'
  key  PaInDetRec.ewm_warehouse_number                             as EWMWarehouse,
  key  PaInDetRec.workcenter                                       as EWMWorkCenter,
  key  PaInDetRec.consolidation_group                              as EWMConsolidationGroup,
  key  PaInDetRec.ewm_handling_unit_type                           as EWMHandlingUnitType,
  key  PaInDetRec.datbi                                            as ConditionValidityEndDate,
       PaInDetRec.datab                                            as ConditionValidityStartDate,
       PaInDetRec.knumh                                            as ConditionRecord,

       cast( Conditions.packnr  as pl_packinstnr preserving type ) as PackingInstructionSystemUUID,
       cast( Conditions.packnr1 as pl_altpacknr1 preserving type ) as PackingInstructionAlt1SystUUID,
       cast( Conditions.packnr2 as pl_altpacknr2 preserving type ) as PackingInstructionAlt2SystUUID,
       cast( Conditions.packnr3 as pl_altpacknr3 preserving type ) as PackingInstructionAlt3SystUUID,
       cast( Conditions.packnr4 as pl_altpacknr4 preserving type ) as PackingInstructionAlt4SystUUID,

       /* Associations */
       _ConditionType,
       _EWMWarehouse,
       _PackingInstructionHeader,
       _PackingInstructionHeaderAlt1,
       _PackingInstructionHeaderAlt2,
       _PackingInstructionHeaderAlt3,
       _PackingInstructionHeaderAlt4

}
where
  PaInDetRec.kappl = 'PO'
```
