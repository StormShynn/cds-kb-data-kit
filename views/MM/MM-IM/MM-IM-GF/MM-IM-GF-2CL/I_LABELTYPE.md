---
name: I_LABELTYPE
description: Labeltype
app_component: MM-IM-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-GF
  - interface-view
  - component:MM-IM-GF-2CL
  - lob:Sourcing & Procurement
---
# I_LABELTYPE

**Labeltype**

| Property | Value |
|---|---|
| App Component | `MM-IM-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LabelType` | ✓ | |  | `cast( etiar as labeltype preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
 @EndUserText.label: 'Label Type'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
                dataCategory: #VALUE_HELP,
                compositionRoot: true,
                representativeKey: 'LabelType',
                sapObjectNodeType: {
                                     name: 'MaterialDocumentPrintLabelType'
                                   },
                usageType: {
                             serviceQuality: #A,
                             sizeCategory: #S,
                             dataClass: #CUSTOMIZING
                           },
                modelingPattern: #ANALYTICAL_DIMENSION,
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
              }
@Search.searchable: true
@Consumption.ranked: true
@VDM: {
        viewType: #BASIC,
        lifecycle.contract.type: #PUBLIC_LOCAL_API
      }
@Analytics:{
             dataCategory: #DIMENSION,
             internalName: #LOCAL,
             technicalName: 'ILABELTYPE',
             dataExtraction.enabled: true
           }
define root view entity I_LabelType
  as select from t6wp3
  composition [0..*] of I_LabelTypeText as _Text
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key cast( etiar as labeltype preserving type ) as LabelType,

      _Text
}
```
