---
name: I_GHGCATEGORYTEXT
description: "Ghgcategorytext"
app_component: SUS-INT
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SUS
  - SUS-INT
  - interface-view
  - text-view
  - text
  - component:SUS-INT
  - lob:Other
---
# I_GHGCATEGORYTEXT

**Ghgcategorytext**

| Property | Value |
|---|---|
| App Component | `SUS-INT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( sufndd_ghg_catt.langu as spras preserving type )` |  |  |
| `GHGCategory` | ✓ | |  | `id` |  |  |
| `GHGCategoryName` |  | |  | `cast( sufndd_ghg_catt.name as sufnd_vdm_ghgcategoryname preserving type )` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'GHG Category - Text'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'GHGCategory'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE]
                                     
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass:      #META
@ObjectModel.usageType.sizeCategory:   #S
@ObjectModel.sapObjectNodeType.name: 'GreenhouseGasCategoryText'

@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

@Analytics.dataExtraction.enabled: true
define view entity I_GHGCategoryText as select from sufndd_ghg_catt
      association [0..1] to I_Language    as _Language    on $projection.Language    = _Language.Language
{

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( sufndd_ghg_catt.langu as spras preserving type ) as Language, 
      @ObjectModel.text.element: ['GHGCategoryName']
  key sufndd_ghg_catt.id as GHGCategory,
  
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( sufndd_ghg_catt.name as sufnd_vdm_ghgcategoryname preserving type ) as GHGCategoryName,
  
      _Language
}
```
