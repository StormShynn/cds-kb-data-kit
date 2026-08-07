---
name: I_ENTPROJECTSTATUSAREACODE
description: "Entprojectstatusareacode"
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-STR
  - interface-view
  - project
  - status
  - component:PPM-SCL-STR
  - lob:Other
  - bo:Project
---
# I_ENTPROJECTSTATUSAREACODE

**Entprojectstatusareacode**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `StatusArea` | ✓ | |  | `status_area_status` |  |  |
| `StatusAreaSequence` |  | |  | `sequence` |  |  |
| `IsOverallStatus` |  | |  | `overall_indicator` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED 

@Analytics: { 
  dataExtraction.enabled: true , 
  dataCategory: #DIMENSION ,
  internalName: #LOCAL  
} 

@Consumption.ranked: true

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { 
  dataCategory: #VALUE_HELP , 
  modelingPattern: #ANALYTICAL_DIMENSION ,
  sapObjectNodeType.name: 'EntProjectStatusAreaCode',  
  supportedCapabilities: [ #ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER, #EXTRACTION_DATA_SOURCE ], 
  resultSet.sizeCategory: #XS, 
  representativeKey: 'StatusArea', 
  usageType: { 
    serviceQuality: #A, 
    dataClass: #CUSTOMIZING, 
    sizeCategory: #S 
  } 
} 

@Search.searchable: true

@VDM: { 
  viewType: #BASIC , 
  lifecycle.contract.type: #PUBLIC_LOCAL_API 
}
 

@EndUserText.label: 'Status Area Code for Enterprise Projects' 
 
define root view entity I_EntProjectStatusAreaCode  as select from /s4ppm/statareac 
  composition [0..*] of I_EntProjStatusAreaCodeText as _Text

{ 

  @ObjectModel.text.association: '_Text'
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH   
  key status_area_status    as StatusArea, 

      sequence              as StatusAreaSequence, 

      overall_indicator     as IsOverallStatus,

  @ObjectModel.association.type: [#TO_COMPOSITION_CHILD] 
      _Text 

}
```
