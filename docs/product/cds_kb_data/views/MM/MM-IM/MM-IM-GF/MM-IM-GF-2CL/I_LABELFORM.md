---
name: I_LABELFORM
description: "Labelform"
app_component: MM-IM-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_LABELFORM

**Labelform**

| Property | Value |
|---|---|
| App Component | `MM-IM-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LabelForm` | ✓ | |  | `cast( etifo as labelform preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
 @EndUserText.label: 'Label Form'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
                dataCategory: #VALUE_HELP,
                compositionRoot: true,
                representativeKey: 'LabelForm',
                sapObjectNodeType: {
                                     name: 'MaterialDocumentPrintLabelForm'
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
             technicalName: 'ILABELFORM',
             dataExtraction.enabled: true
           }
define root view entity I_LabelForm
  as select from t6wp4
  composition [0..*] of I_LabelFormText as _Text
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key cast( etifo as labelform preserving type ) as LabelForm,

      _Text
}
```
