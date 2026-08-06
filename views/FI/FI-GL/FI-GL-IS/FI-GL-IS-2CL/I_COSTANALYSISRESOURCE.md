---
name: I_COSTANALYSISRESOURCE
description: Costanalysisresource
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_COSTANALYSISRESOURCE

**Costanalysisresource**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ControllingArea` | `cast( cskr.kokrs as fis_kokrs preserving type )` |
| key `CostAnalysisResource` | `cast( cskr.resrc as fis_co_resource preserving type )` |
| key `ValidityEndDate` | `cast( cskr.datbi as fis_datbi preserving type )` |
| `ValidityStartDate` | `cast( cskr.datab as fis_datab preserving type )` |
| `_ControllingAreaText` | *Association* |
| `_ControllingArea` | *Association* |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ControllingAreaText` | `I_ControllingArea` | [1..1] |
| `_ControllingArea` | `I_ControllingArea` | [1..1] |
| `_Text` | `I_CostAnalysisResourceText` | [0..*] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @EndUserText.label: 'Cost Analysis Resource'
@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
        automatic: true
        }
    }
}
@Analytics.technicalName: 'IFICOANLYSRESRC'

@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@ObjectModel: { usageType.sizeCategory: #S,
                usageType.dataClass:  #MASTER,
                usageType.serviceQuality: #A,
                representativeKey: 'CostAnalysisResource',
                sapObjectNodeType.name: 'CostAnalysisResource',                
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY],
                modelingPattern: #ANALYTICAL_DIMENSION }                    
@Metadata.ignorePropagatedAnnotations: true

@Search.searchable: true
@Consumption.ranked: true
@Metadata.allowExtensions:true

//--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
@AccessControl.privilegedAssociations: ['_ControllingAreaText']
// ]--GENERATED

define view entity I_CostAnalysisResource
  as select from cskr

  
  //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
  association [1..1] to I_ControllingArea      as _ControllingAreaText on   $projection.ControllingArea = _ControllingAreaText.ControllingArea
  // ]--GENERATED
  association [1..1] to I_ControllingArea          as _ControllingArea on  $projection.ControllingArea = _ControllingArea.ControllingArea
  association [0..*] to I_CostAnalysisResourceText as _Text            on  $projection.ControllingArea      = _Text.ControllingArea
                                                                       and $projection.CostAnalysisResource = _Text.CostAnalysisResource


{
      //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_ControllingAreaStdVH',
                     element: 'ControllingArea' }
        }]
      @ObjectModel.text.association: '_ControllingAreaText'
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_ControllingArea'
  key cast( cskr.kokrs as fis_kokrs preserving type )        as ControllingArea,
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key cast( cskr.resrc as fis_co_resource preserving type )  as CostAnalysisResource,

      @Semantics.businessDate.to: true
  key cast( cskr.datbi as fis_datbi preserving type )        as ValidityEndDate,
      @Semantics.businessDate.from: true
      cast( cskr.datab as fis_datab preserving type )        as ValidityStartDate,

      _ControllingArea,
      _Text,
      //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
      @Consumption.hidden: true
      _ControllingAreaText
      // ]--GENERATED


}
```
