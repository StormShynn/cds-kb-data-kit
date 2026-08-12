---
name: I_ENTPROJSTATUSAREATRENDTEXT
description: "Entprojstatusareatrendtext"
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-STR
  - interface-view
  - text-view
  - text
  - status
  - component:PPM-SCL-STR
  - lob:Other
---
# I_ENTPROJSTATUSAREATRENDTEXT

**Entprojstatusareatrendtext**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `StatusTrend` | ✓ | |  | `trend` |  |  |
| `Language` | ✓ | |  | `langu` |  |  |
| `StatusTrendDescription` |  | |  | `description` |  |  |
| `_Language` | | ✓ | | | | |
| `_Key` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED 

@Analytics: { 
  dataExtraction.enabled: true 
} 

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { 
  dataCategory: #TEXT , 
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT ,
  sapObjectNodeType.name: 'EntProjectStatusAreaTrendText',  
  supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SEARCHABLE_ENTITY, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE ], 
  representativeKey: 'StatusTrend', 
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
  
@EndUserText.label: 'Trend of Ent Project Status Area - Text'

define view entity I_EntProjStatusAreaTrendText as select from /s4ppm/stat_trdt
  association to parent I_EntProjStatusAreaTrend as _Key on $projection.StatusTrend = _Key.StatusTrend
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  @ObjectModel.text.element:['StatusTrendDescription']
  @ObjectModel.foreignKey.association: '_Key'
  key trend       as StatusTrend,
  @ObjectModel.foreignKey.association: '_Language'
  @Semantics.language: true
  key langu       as Language, 
  @Semantics.text: true
  @EndUserText.label: 'Status Description'
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #LOW  
      description as StatusTrendDescription,
      
  _Key,
  _Language
      
}
```
