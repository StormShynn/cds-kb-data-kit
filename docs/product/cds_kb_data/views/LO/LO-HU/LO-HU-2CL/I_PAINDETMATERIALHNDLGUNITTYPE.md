---
name: I_PAINDETMATERIALHNDLGUNITTYPE
description: "Paindetmaterialhndlgunittype"
app_component: LO-HU-2CL
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
  - LO
  - LO-HU
  - interface-view
  - material
  - component:LO-HU-2CL
  - lob:Logistics General
  - bo:Material
---
# I_PAINDETMATERIALHNDLGUNITTYPE

**Paindetmaterialhndlgunittype**

| Property | Value |
|---|---|
| App Component | `LO-HU-2CL` |
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
| `ConditionType` | ✓ | |  | `kschl` |  |  |
| `Material` | ✓ | |  | `matnr` |  |  |
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
| `_Material` | | ✓ | | | | |
| `_PackingInstructionHeader` | | ✓ | | | | |
| `_PackingInstructionHeaderAlt1` | | ✓ | | | | |
| `_PackingInstructionHeaderAlt2` | | ✓ | | | | |
| `_PackingInstructionHeaderAlt3` | | ✓ | | | | |
| `_PackingInstructionHeaderAlt4` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ConditionType` | `I_ConditionType` | [1..1] |
| `_Material` | `I_Material` | [0..1] |
| `_PackingInstructionHeader` | `I_PackingInstructionHeader` | [0..1] |
| `_PackingInstructionHeaderAlt1` | `I_PackingInstructionHeader` | [0..1] |
| `_PackingInstructionHeaderAlt2` | `I_PackingInstructionHeader` | [0..1] |
| `_PackingInstructionHeaderAlt3` | `I_PackingInstructionHeader` | [0..1] |
| `_PackingInstructionHeaderAlt4` | `I_PackingInstructionHeader` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'PaInDet for Material/Handling Unit Type'
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

define view entity I_PaInDetMaterialHndlgUnitType
  as select from kotp485 as PaInDetRec
    join         kondp   as Conditions on PaInDetRec.knumh = Conditions.knumh
  association [1..1] to I_ConditionType            as _ConditionType                on  $projection.ConditionType           = _ConditionType.ConditionType
                                                                                    and _ConditionType.ConditionUsage       = 'P'
                                                                                    and _ConditionType.ConditionApplication = 'PO'
  association [0..1] to I_Material                 as _Material                     on  $projection.Material = _Material.Material
  association [0..1] to I_PackingInstructionHeader as _PackingInstructionHeader     on  $projection.PackingInstructionSystemUUID = _PackingInstructionHeader.PackingInstructionSystemUUID
  association [0..1] to I_PackingInstructionHeader as _PackingInstructionHeaderAlt1 on  $projection.PackingInstructionAlt1SystUUID = _PackingInstructionHeaderAlt1.PackingInstructionSystemUUID
  association [0..1] to I_PackingInstructionHeader as _PackingInstructionHeaderAlt2 on  $projection.PackingInstructionAlt2SystUUID = _PackingInstructionHeaderAlt2.PackingInstructionSystemUUID
  association [0..1] to I_PackingInstructionHeader as _PackingInstructionHeaderAlt3 on  $projection.PackingInstructionAlt3SystUUID = _PackingInstructionHeaderAlt3.PackingInstructionSystemUUID
  association [0..1] to I_PackingInstructionHeader as _PackingInstructionHeaderAlt4 on  $projection.PackingInstructionAlt4SystUUID = _PackingInstructionHeaderAlt4.PackingInstructionSystemUUID


{
       @ObjectModel.foreignKey.association: '_ConditionType'
  key  PaInDetRec.kschl                                            as ConditionType,
       @ObjectModel.foreignKey.association: '_Material'
  key  PaInDetRec.matnr                                            as Material,
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
       _Material,
       _PackingInstructionHeader,
       _PackingInstructionHeaderAlt1,
       _PackingInstructionHeaderAlt2,
       _PackingInstructionHeaderAlt3,
       _PackingInstructionHeaderAlt4

}
where
  PaInDetRec.kappl = 'PO'
```
