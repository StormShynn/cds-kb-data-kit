---
name: I_TECHOBJISEQUIPORFUNCNLLOC
description: Techobjisequiporfuncnlloc
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
# I_TECHOBJISEQUIPORFUNCNLLOC

**Techobjisequiporfuncnlloc**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `TechObjIsEquipOrFuncnlLoc` | ✓ | |  | `cast( dd07l.domvalue_l as eams_tec_obj_type_value )` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_TechObjIsEquipOrFuncnlLocT` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Technical Object is Equi or Func Loc'
@Analytics:{ dataCategory:  #DIMENSION }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ITECHOBJISEQORFL'
@ObjectModel.representativeKey: 'TechObjIsEquipOrFuncnlLoc'

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.resultSet.sizeCategory: #XS

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]

define view I_TechObjIsEquipOrFuncnlLoc
  as select from dd07l
  association [0..*] to I_TechObjIsEquipOrFuncnlLocT as _Text on $projection.TechObjIsEquipOrFuncnlLoc = _Text.TechObjIsEquipOrFuncnlLoc
{
      @ObjectModel.text.association: '_Text'
      @UI.textArrangement: #TEXT_ONLY
  key cast( dd07l.domvalue_l as eams_tec_obj_type_value ) as TechObjIsEquipOrFuncnlLoc,
      _Text
}
where
      dd07l.domname  = 'EAMS_VB_TECHOBJ_TYPE'
  and dd07l.as4local = 'A'
```
