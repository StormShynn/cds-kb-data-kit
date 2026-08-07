---
name: I_PLANNINGCATSOURCEPLANNINGCAT
description: Planningcatsourceplanningcat
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
# I_PLANNINGCATSOURCEPLANNINGCAT

**Planningcatsourceplanningcat**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PlanningCategory` | ✓ | |  |  |  |  |
| `SourcePlanningCategory` | ✓ | |  |  |  |  |
| `_PlanningCategory` | | ✓ | | | | |
| `_PlanningCategoryText` | | ✓ | | | | |
| `_SourcePlanningCategory` | | ✓ | | | | |
| `_SourcePlanningCategoryText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PlanningCategory` | `I_PlanningCategory` | [1..1] |
| `_PlanningCategoryText` | `I_PlanningCategoryText` | [0..*] |
| `_SourcePlanningCategory` | `I_PlanningCategory` | [1..1] |
| `_SourcePlanningCategoryText` | `I_PlanningCategoryText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Src Category Assignment to Plan Category'
@Analytics : {dataCategory: #DIMENSION, dataExtraction.enabled : true} //switching off delta
@Analytics.internalName:#LOCAL 

@ObjectModel.representativeKey: 'PlanningCategory'
@VDM.viewType: #COMPOSITE
@AbapCatalog.sqlViewName: 'IFIPLNCATSRCCAT'
@AbapCatalog.compiler.compareFilter:true 
@AbapCatalog.preserveKey:true 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true

@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'PlngCatSourcePlanningCategory'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING

define view I_PlanningCatSourcePlanningCat as select from I_VirtualPlanningCategory
  association [1..1] to I_PlanningCategory     as _PlanningCategory     on $projection.PlanningCategory = _PlanningCategory.PlanningCategory
  association [0..*] to I_PlanningCategoryText as _PlanningCategoryText on $projection.PlanningCategory = _PlanningCategoryText.PlanningCategory
  
  association [1..1] to I_PlanningCategory     as _SourcePlanningCategory     on $projection.SourcePlanningCategory = _SourcePlanningCategory.PlanningCategory
  association [0..*] to I_PlanningCategoryText as _SourcePlanningCategoryText on $projection.SourcePlanningCategory = _SourcePlanningCategoryText.PlanningCategory
{
  //@ObjectModel.foreignKey.association: '_PlanningCategory'
  //key cast (fcomc_cat_assgmt.virtual_category as fcom_category preserving type) as PlanningCategory,
  key I_VirtualPlanningCategory.PlanningCategory,

  @ObjectModel.foreignKey.association: '_SourcePlanningCategory'
  //@ObjectModel.text.association: '_SourcePlanningCategoryText'
  //key fcomc_cat_assgmt.source_category  as SourcePlanningCategory,
  key I_VirtualPlanningCategory.SourcePlanningCategory,
  
      _PlanningCategory,
      _PlanningCategoryText,
      _SourcePlanningCategory,
      _SourcePlanningCategoryText
  }

union all select from I_PlanningCategory
  association [1..1] to I_PlanningCategory     as _PlanningCategory     on $projection.PlanningCategory = _PlanningCategory.PlanningCategory
  association [0..*] to I_PlanningCategoryText as _PlanningCategoryText on $projection.PlanningCategory = _PlanningCategoryText.PlanningCategory

  association [1..1] to I_PlanningCategory     as _SourcePlanningCategory     on $projection.SourcePlanningCategory = _SourcePlanningCategory.PlanningCategory
  association [0..*] to I_PlanningCategoryText as _SourcePlanningCategoryText on $projection.SourcePlanningCategory = _SourcePlanningCategoryText.PlanningCategory
{
  @ObjectModel.foreignKey.association: '_PlanningCategory'
  @ObjectModel.text.association: '_PlanningCategoryText'
  key cast (PlanningCategory as fcom_category preserving type) as PlanningCategory,

  @ObjectModel.foreignKey.association: '_SourcePlanningCategory'
  @ObjectModel.text.association: '_SourcePlanningCategoryText'
  key PlanningCategory as SourcePlanningCategory,

      _PlanningCategory,
      _PlanningCategoryText,
      _SourcePlanningCategory,
      _SourcePlanningCategoryText

}
```
