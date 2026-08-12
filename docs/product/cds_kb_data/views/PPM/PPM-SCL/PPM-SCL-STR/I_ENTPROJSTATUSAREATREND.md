---
name: I_ENTPROJSTATUSAREATREND
description: "Entprojstatusareatrend"
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
# I_ENTPROJSTATUSAREATREND

**Entprojstatusareatrend**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `StatusTrend` | ✓ | |  | `trend` |  |  |
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
  sapObjectNodeType.name: 'EntProjectStatusAreaTrend',  
  supportedCapabilities: [ #ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER, #EXTRACTION_DATA_SOURCE ], 
  resultSet.sizeCategory: #XS, 
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
 
@EndUserText.label: 'Trend of Enterprise Project Status Area'

define root view entity I_EntProjStatusAreaTrend as select from /s4ppm/stat_trd 
  composition [*] of I_EntProjStatusAreaTrendText as _Text 
{
  @ObjectModel.text.association: '_Text'
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH
  key trend as StatusTrend,

      criticality as Criticality, 

      sort_number as StatusAreaSortNumber,

  @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]      
      _Text
}
```
