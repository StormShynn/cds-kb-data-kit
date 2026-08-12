---
name: I_TECHOBJISEQUIPORFUNCNLLOC
description: "Techobjisequiporfuncnlloc"
app_component: PM-EQM-EQ-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TechObjIsEquipOrFuncnlLoc` | ✓ | |  | `cast( dd07l.domvalue_l as eams_tec_obj_type_value )` |  |  |
| `_Text` | | ✓ | | | | |

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
