---
name: I_PUBSECPLANNINGCATEGORY
description: Pubsecplanningcategory
app_component: PSM-FM-IS
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PSM
  - PSM-FM
  - PSM-FM-IS
  - interface-view
  - component:PSM-FM-IS
  - lob:Other
---
# I_PUBSECPLANNINGCATEGORY

**Pubsecplanningcategory**

| Property | Value |
|---|---|
| App Component | `PSM-FM-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PlanningCategory` | `fcomc_category.category` |
| `PlanningCategoryUsage` | `fcomc_category.category_usage` |
| `AvailabilityControlIsActive` | `fcomc_category.availability_control` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PlanningCategoryText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPUBSECPLANCAT'
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #BASIC
@Analytics.internalName:#LOCAL
@Analytics: { dataCategory: #DIMENSION }
@AbapCatalog.preserveKey: true
@ObjectModel.representativeKey: 'PlanningCategory'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:  [#VALUE_HELP_PROVIDER, #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.sapObjectNodeType.name: 'PlanningCategory'
//@ObjectModel.dataCategory: #DIMENSION
@ObjectModel.dataCategory: #VALUE_HELP
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Planning Category for PSM'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@Search.searchable: true
define view I_PubSecPlanningCategory
  as select from fcomc_category
  association [0..*] to I_PlanningCategoryText as _Text on $projection.PlanningCategory = _Text.PlanningCategory
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key fcomc_category.category             as PlanningCategory,
      fcomc_category.category_usage       as PlanningCategoryUsage,
      fcomc_category.availability_control as AvailabilityControlIsActive,
      _Text
}
where
  fcomc_category.category_usage = '003'
```
