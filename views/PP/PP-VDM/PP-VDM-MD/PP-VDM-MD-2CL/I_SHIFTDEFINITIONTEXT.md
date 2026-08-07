---
name: I_SHIFTDEFINITIONTEXT
description: Shiftdefinitiontext
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
# I_SHIFTDEFINITIONTEXT

**Shiftdefinitiontext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ShiftDefinition` | ✓ | |  | `kaptprog` |
| `ShiftGrouping` | ✓ | |  | `schgrup` |
| `Language` | ✓ | |  | `spras` |
| `ShiftDefinitionName` |  | |  | `ktext` |
| `_ShiftGrouping` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ShiftGrouping` | `I_ShiftGrouping` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPSHIFTDEFTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 003}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY,#EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'ShiftDefinition'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Shift Definition - Text'
@ObjectModel.sapObjectNodeType.name:'ShiftDefinitionText'
@Analytics.dataExtraction.enabled: true

define view I_ShiftDefinitionText
  as select from tc37t as txt 
    association [0..1] to I_ShiftGrouping as _ShiftGrouping on $projection.ShiftGrouping = _ShiftGrouping.ShiftGrouping
    association [0..1] to I_Language      as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.text.element: ['ShiftDefinitionName']
  key txt.kaptprog as ShiftDefinition,
      @ObjectModel.foreignKey.association: '_ShiftGrouping'
  key txt.schgrup  as ShiftGrouping,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key txt.spras as Language,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      txt.ktext as ShiftDefinitionName,

      // Associations
      _ShiftGrouping,
      _Language
};
```
