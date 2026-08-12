---
name: I_PUBSECPLANNINGCATEGORY
description: "Pubsecplanningcategory"
app_component: PSM-FM-IS
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PlanningCategory` | ✓ | |  | `category` |  |  |
| `PlanningCategoryUsage` |  | |  | `category_usage` |  |  |
| `AvailabilityControlIsActive` |  | |  | `availability_control` |  |  |
| `_Text` | | ✓ | | | | |

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
