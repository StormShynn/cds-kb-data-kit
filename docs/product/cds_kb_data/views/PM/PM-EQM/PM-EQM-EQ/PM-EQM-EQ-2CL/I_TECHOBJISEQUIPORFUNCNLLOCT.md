---
name: I_TECHOBJISEQUIPORFUNCNLLOCT
description: "Techobjisequiporfuncnlloct"
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-EQM
  - PM-EQM-EQ
  - interface-view
  - component:PM-EQM-EQ-2CL
  - lob:Plant Maintenance
---
# I_TECHOBJISEQUIPORFUNCNLLOCT

**Techobjisequiporfuncnlloct**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TechObjIsEquipOrFuncnlLoc` | ✓ | |  | `cast( dd07t.domvalue_l as eams_tec_obj_type_value )` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `TechObjIsEquipOrFuncnlLocDesc` |  | |  | `cast( dd07t.ddtext as eams_tec_obj_type_desc )` |  |  |
| `_Language` | | ✓ | | | | |
| `_TechObjIsEquipOrFuncnlLoc` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_TechObjIsEquipOrFuncnlLoc` | `I_TechObjIsEquipOrFuncnlLoc` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Tech Object is Equi or Func Loc - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'ITECOBJISEQORFLT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'TechObjIsEquipOrFuncnlLoc'

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]

define view I_TechObjIsEquipOrFuncnlLocT
  as select from dd07t as dd07t
  association [0..1] to I_Language                  as _Language                  on $projection.Language = _Language.Language
  association [0..1] to I_TechObjIsEquipOrFuncnlLoc as _TechObjIsEquipOrFuncnlLoc on $projection.TechObjIsEquipOrFuncnlLoc = _TechObjIsEquipOrFuncnlLoc.TechObjIsEquipOrFuncnlLoc
{
         @ObjectModel.foreignKey.association: '_TechObjIsEquipOrFuncnlLoc'
         @ObjectModel.text.element: 'TechObjIsEquipOrFuncnlLocDesc'
  key    cast( dd07t.domvalue_l as eams_tec_obj_type_value )   as TechObjIsEquipOrFuncnlLoc,

         @ObjectModel.foreignKey.association: '_Language'
         @Semantics.language: true
  key    dd07t.ddlanguage                                      as Language,
         
         @EndUserText.label: 'Technical Object Type Description'
         @Semantics.text: true
         cast( dd07t.ddtext as eams_tec_obj_type_desc )        as TechObjIsEquipOrFuncnlLocDesc,

         // Associations
         _Language,
         _TechObjIsEquipOrFuncnlLoc
}
where
      dd07t.domname  = 'EAMS_VB_TECHOBJ_TYPE'
  and dd07t.as4local = 'A'
```
