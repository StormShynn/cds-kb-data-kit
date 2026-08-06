---
name: I_AVAILABLECAPACITYTYPETEXT
description: Availablecapacitytypetext
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - text-view
  - text
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_AVAILABLECAPACITYTYPETEXT

**Availablecapacitytypetext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `AvailableCapacityType` | `cast(txt.versn as availablecapacitytype preserving type)` |
| key `Language` | `cast(txt.spras as spras preserving type)` |
| `AvailableCapacityTypeName` | `cast(txt.txt as availablecapacitytypename preserving type)` |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPAVAILCAPTYPET'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'AvailableCapacityType'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Search.searchable: true
@VDM.viewType: #BASIC
@EndUserText.label: 'Avail Ent Resource Capacity Type - Text'
@ObjectModel.sapObjectNodeType.name: 'AvailEntRsceCapacityTypeText'

define view I_AvailableCapacityTypeText
  as select from tc36t as txt
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.text.element: 'AvailableCapacityTypeName'
  key cast(txt.versn as availablecapacitytype preserving type)   as AvailableCapacityType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast(txt.spras as spras preserving type)                   as Language,
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      cast(txt.txt as availablecapacitytypename preserving type) as AvailableCapacityTypeName,

      // Associations
      _Language
};
```
