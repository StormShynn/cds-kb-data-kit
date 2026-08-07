---
name: I_ENTPROJSTATUSAREASTATUS
description: Entprojstatusareastatus
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
  - status
  - component:PPM-SCL-STR
  - lob:Other
---
# I_ENTPROJSTATUSAREASTATUS

**Entprojstatusareastatus**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `StatusAreaStatus` | ✓ | |  | `status` |  |  |
| `Criticality` |  | |  | `criticality` |  |  |
| `StatusAreaSortNumber` |  | |  | `sort_number` |  |  |
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
  sapObjectNodeType.name: 'EntProjectStatusAreaStatus',  
  supportedCapabilities: [ #ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER, #EXTRACTION_DATA_SOURCE ], 
  resultSet.sizeCategory: #XS, 
  representativeKey: 'StatusAreaStatus', 
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
 
@EndUserText.label: 'Status of Enterprise Project Status Area'

define root view entity I_EntProjStatusAreaStatus as select from /s4ppm/stat_val 
  composition [*] of I_EntProjStatusAreaStatusTxt as _Text 
{
  @ObjectModel.text.association: '_Text'
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH
  key status as StatusAreaStatus,

      criticality as Criticality, 

      sort_number as StatusAreaSortNumber,
      
      _Text
}
```
