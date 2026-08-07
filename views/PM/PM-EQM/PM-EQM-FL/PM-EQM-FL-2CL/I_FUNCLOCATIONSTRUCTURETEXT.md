---
name: I_FUNCLOCATIONSTRUCTURETEXT
description: Funclocationstructuretext
app_component: PM-EQM-FL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-EQM
  - PM-EQM-FL
  - interface-view
  - text-view
  - text
  - component:PM-EQM-FL-2CL
  - lob:Plant Maintenance
---
# I_FUNCLOCATIONSTRUCTURETEXT

**Funclocationstructuretext**

| Property | Value |
|---|---|
| App Component | `PM-EQM-FL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `FuncLocationStructure` | ✓ | |  | `tplkz` |
| `Language` | ✓ | |  | `spras` |
| `FuncLocationStructureDesc` |  | |  | `tplxt` |
| `IdentifyingLabel` |  | |  | `level_kz_desc` |
| `SecondIdentifyingLabel` |  | |  | `level_kz2_desc` |
| `_FuncLocationStructure` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FuncLocationStructure` | `I_FuncLocationStructure` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Functional Location Structure - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFLOCSTRUCTXT'
@AccessControl.authorizationCheck:#NOT_REQUIRED
@ObjectModel.representativeKey: 'FuncLocationStructure'

@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT  ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S

@Metadata.ignorePropagatedAnnotations

define view I_FuncLocationStructureText
  as select from t370s_t

  association [0..1] to I_FuncLocationStructure as _FuncLocationStructure on _FuncLocationStructure.FuncLocationStructure = $projection.FuncLocationStructure
  association [0..1] to I_Language              as _Language              on _Language.Language = $projection.Language
{
      @ObjectModel.foreignKey.association: '_Funclocationstructure'
  key t370s_t.tplkz          as FuncLocationStructure,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key t370s_t.spras          as Language,
      @Semantics.text: true
      t370s_t.tplxt          as FuncLocationStructureDesc,
      t370s_t.level_kz_desc  as IdentifyingLabel,
      t370s_t.level_kz2_desc as SecondIdentifyingLabel,
      _FuncLocationStructure,
      _Language
}
```
