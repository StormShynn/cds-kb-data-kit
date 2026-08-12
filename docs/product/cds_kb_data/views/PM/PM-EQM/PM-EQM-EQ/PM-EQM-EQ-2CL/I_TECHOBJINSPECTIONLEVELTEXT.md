---
name: I_TECHOBJINSPECTIONLEVELTEXT
description: "Techobjinspectionleveltext"
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
  - text-view
  - inspection
  - text
  - component:PM-EQM-EQ-2CL
  - lob:Plant Maintenance
---
# I_TECHOBJINSPECTIONLEVELTEXT

**Techobjinspectionleveltext**

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
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `TechObjInspectionLevelCode` | ✓ | |  | `cast(dd07t.domvalue_l as eame_idms_type)` |  |  |
| `TechObjInspectionLevelDesc` |  | |  | `ddtext` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog: {
  sqlViewName: 'ITECHOBJINSPLVLT',
  compiler.compareFilter: true,
  preserveKey: true
}

@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Technical Object Inspection Level - Text'

@ObjectModel: {
  usageType:
  {
     dataClass: #META,
     serviceQuality: #A,
     sizeCategory: #S
  },
  dataCategory: #TEXT,
  modelingPattern: #NONE,
  representativeKey: 'TechObjInspectionLevelCode',
  supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET,#EXTRACTION_DATA_SOURCE]
}

@VDM.viewType: #BASIC

@ClientHandling.algorithm: #SESSION_VARIABLE  

@Analytics.dataExtraction.enabled: true

@Metadata.ignorePropagatedAnnotations: true

define view I_TechObjInspectionLevelText
  as select from dd07t
  association [0..1] to I_Language  as _Language on $projection.Language = _Language.Language

{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage   as Language,
  key cast(dd07t.domvalue_l as eame_idms_type) as TechObjInspectionLevelCode,
  
      @Semantics.text: true
      dd07t.ddtext as TechObjInspectionLevelDesc,
      _Language

}
where
      dd07t.domname  = 'EAM_IDMS_TYPE_D'
  and dd07t.as4local = 'A'
  and dd07t.as4vers = '0000'
```
