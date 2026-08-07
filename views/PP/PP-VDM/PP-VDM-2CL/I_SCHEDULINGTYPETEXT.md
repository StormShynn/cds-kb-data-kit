---
name: I_SCHEDULINGTYPETEXT
description: Schedulingtypetext
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
# I_SCHEDULINGTYPETEXT

**Schedulingtypetext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SchedulingType` | ✓ | |  | `cast(txt.termkz as pph_termkz preserving type)` |
| `Language` | ✓ | |  | `cast(txt.spras as spras preserving type)` |
| `SchedulingTypeName` |  | |  | `cast(txt.txt as termkz_txt preserving type)` |
| `_SchedulingType` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SchedulingType` | `I_SchedulingType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPSCHEDTYPETEXT'
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'SchedulingType'
@ObjectModel.sapObjectNodeType.name: 'SchedulingTypeText'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@Search.searchable: true
@EndUserText.label: 'Scheduling Type - Text'

define view I_SchedulingTypeText
  as select from t482t as txt
  association [1..1] to I_SchedulingType as _SchedulingType on $projection.SchedulingType = _SchedulingType.SchedulingType
  association [0..1] to I_Language       as _Language       on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_SchedulingType'
      @ObjectModel.text.element: ['SchedulingTypeName']
  key cast(txt.termkz as pph_termkz preserving type) as SchedulingType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast(txt.spras as spras preserving type)       as Language,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      cast(txt.txt as termkz_txt preserving type)    as SchedulingTypeName,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _SchedulingType,
      _Language
};
```
