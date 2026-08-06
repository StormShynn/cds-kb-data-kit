---
name: I_PLNDINDEPRQMTTYPETEXT
description: Plndindeprqmttypetext
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - text-view
  - text
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_PLNDINDEPRQMTTYPETEXT

**Plndindeprqmttypetext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PlndIndepRqmtType` | `txt.bedae` |
| key `Language` | `txt.spras` |
| `PlndIndepRqmtTypeName` | `cast(txt.bdtxt as pph_bdtxt preserving type)` |
| `_PlndIndepRqmtType` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PlndIndepRqmtType` | `I_PlndIndepRqmtType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPLNDINDRQMTTYPT'
@AbapCatalog.buffering: {status: #ACTIVE, type: #FULL, numberOfKeyFields: 000}
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'PlndIndepRqmtType'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Planned Independent Requirement Type - Text'

define view I_PlndIndepRqmtTypeText
  as select from t459w as txt
  association [1..1] to I_PlndIndepRqmtType as _PlndIndepRqmtType on $projection.PlndIndepRqmtType = _PlndIndepRqmtType.PlndIndepRqmtType
  association [0..1] to I_Language          as _Language          on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_PlndIndepRqmtType'
      @ObjectModel.text.element: ['PlndIndepRqmtTypeName']
  key txt.bedae as PlndIndepRqmtType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key txt.spras as Language,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      cast(txt.bdtxt as pph_bdtxt preserving type) as PlndIndepRqmtTypeName,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _PlndIndepRqmtType,
      _Language
};
```
