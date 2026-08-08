---
name: I_REMEASUREMENTTYPETEXT
description: "Remeasurementtypetext"
app_component: RE-FX-BD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - RE-FX-BD
  - interface-view
  - text-view
  - text
  - component:RE-FX-BD-2CL
  - lob:Other
---
# I_REMEASUREMENTTYPETEXT

**Remeasurementtypetext**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `REMeasurementType` | ✓ | |  | `meas` |  |  |
| `REMeasurementTypeName` |  | |  | `xmmeas` |  |  |
| `_REMeasurementType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REMeasurementType` | `I_REMeasurementType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IREMSMTTYPET'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Measurement Type - Text'
@Analytics.dataExtraction.enabled: true
@ObjectModel: {
  dataCategory:#TEXT,
  representativeKey: 'REMeasurementType',
  semanticKey: ['REMeasurementType'],
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #M
  },
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [
    #LANGUAGE_DEPENDENT_TEXT, 
    #EXTRACTION_DATA_SOURCE
  ]
}
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType:#BASIC
@Search.searchable: true
define view entity I_REMeasurementTypeText
  as select from tivbdmeast
  association [0..1] to I_REMeasurementType as _REMeasurementType on $projection.REMeasurementType = _REMeasurementType.REMeasurementType
  association [0..1] to I_Language          as _Language          on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras  as Language,
      @ObjectModel.foreignKey.association: '_REMeasurementType'
  key meas   as REMeasurementType,
      @Semantics.text: true
      @Search.fuzzinessThreshold: 0.7
      @Search.defaultSearchElement: true
      @Search.ranking: #LOW
      xmmeas as REMeasurementTypeName,

      _REMeasurementType,
      _Language
}
```
