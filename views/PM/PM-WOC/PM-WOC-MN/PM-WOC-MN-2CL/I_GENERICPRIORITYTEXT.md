---
name: I_GENERICPRIORITYTEXT
description: Genericprioritytext
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MN
  - interface-view
  - text-view
  - text
  - component:PM-WOC-MN-2CL
  - lob:Plant Maintenance
---
# I_GENERICPRIORITYTEXT

**Genericprioritytext**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `GenericPriorityType` | ✓ | |  | `artpr` |  |  |
| `PriorityCode` | ✓ | |  | `priok` |  |  |
| `GenericPriorityDesc` |  | |  | `priokx` |  |  |
| `_GenericPriority` | | ✓ | | | | |
| `_GenericPriorityType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_GenericPriority` | `I_GenericPriority` | [0..1] |
| `_GenericPriorityType` | `I_GenericPriorityType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Generic Priority - Text'

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API }

@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'PriorityCode',
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S },
    supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_ASSOCIATION_TARGET],
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT
     }
@Analytics.technicalName: 'IGENPRIOTEXT'
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations

define view entity I_GenericPriorityText
  as select from t356_t
  association [0..1] to I_GenericPriority     as _GenericPriority     on  _GenericPriority.GenericPriorityType = $projection.GenericPriorityType
                                                                      and _GenericPriority.PriorityCode        = $projection.PriorityCode

  association [0..1] to I_GenericPriorityType as _GenericPriorityType on  _GenericPriorityType.GenericPriorityType = $projection.GenericPriorityType

  association [0..1] to I_Language            as _Language            on  _Language.Language = $projection.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key t356_t.spras  as Language,

      @ObjectModel.foreignKey.association: '_GenericPriorityType'
  key t356_t.artpr  as GenericPriorityType,

      @ObjectModel.foreignKey.association: '_GenericPriority'
      @ObjectModel.text.element: ['GenericPriorityDesc']
  key t356_t.priok  as PriorityCode,

      @Semantics.text: true
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 } 
      t356_t.priokx as GenericPriorityDesc,
             
      // Propagate association(s)
      _GenericPriority,
      _GenericPriorityType,
      _Language
}
```
