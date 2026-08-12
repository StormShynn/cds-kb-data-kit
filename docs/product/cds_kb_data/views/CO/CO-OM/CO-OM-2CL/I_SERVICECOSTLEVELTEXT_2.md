---
name: I_SERVICECOSTLEVELTEXT_2
description: "Servicecostleveltext 2"
app_component: CO-OM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-OM
  - interface-view
  - service
  - text
  - component:CO-OM-2CL
  - lob:Controlling
---
# I_SERVICECOSTLEVELTEXT_2

**Servicecostleveltext 2**

| Property | Value |
|---|---|
| App Component | `CO-OM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceCostLevel` | ✓ | |  | `srv_cost_level` |  |  |
| `Language` | ✓ | |  | `langu` |  |  |
| `ServiceCostLevelName` |  | |  | `name` |  |  |
| `ServiceCostLevelShortName` |  | |  | `short_name` |  |  |
| `ValidityStartDate` |  | |  | `start_date` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Service Cost Level - Text'
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'ServiceCostLevel'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ]

@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics:{
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture.automatic: true
    }
  }

@Search.searchable: true

define view entity I_ServiceCostLevelText_2
  as select from fcoc_sc_levelt
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key fcoc_sc_levelt.srv_cost_level as ServiceCostLevel,
  
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key fcoc_sc_levelt.langu          as Language,

      @Semantics.text: true
      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #LOW }
      fcoc_sc_levelt.name           as ServiceCostLevelName,
      fcoc_sc_levelt.short_name     as ServiceCostLevelShortName,
      
      fcoc_sc_levelt.start_date     as ValidityStartDate,

      _Language
}
```
