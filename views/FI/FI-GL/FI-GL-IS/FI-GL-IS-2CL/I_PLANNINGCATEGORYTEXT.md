---
name: I_PLANNINGCATEGORYTEXT
description: Planningcategorytext
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
  - text-view
  - text
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_PLANNINGCATEGORYTEXT

**Planningcategorytext**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PlanningCategory` | ✓ | |  | `category` |  |  |
| `Language` | ✓ | |  | `langu` |  |  |
| `PlanningCategoryName` |  | |  | `cast(text as fcom_category_t preserving type )` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Planning Category - Text'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'PlanningCategory'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFIPLANNINGCATT'
@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@Analytics: { dataExtraction: { enabled: true, delta.changeDataCapture.automatic: true } }

@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE ]

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@Search.searchable: true

define view I_PlanningCategoryText as select from fcomc_category_t
association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{   
  key fcomc_category_t.category as PlanningCategory,
  @ObjectModel.foreignKey.association: '_Language' 
  @Semantics.language
  key langu as Language,
  @Semantics.text: true
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8    
  @Search.ranking: #HIGH
  cast(text as fcom_category_t preserving type ) as PlanningCategoryName,
  
  _Language
}
```
