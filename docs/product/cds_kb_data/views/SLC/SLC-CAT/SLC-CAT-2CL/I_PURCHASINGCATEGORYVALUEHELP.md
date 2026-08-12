---
name: I_PURCHASINGCATEGORYVALUEHELP
description: "Purchasingcategoryvaluehelp"
app_component: SLC-CAT-2CL
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
  - SLC
  - SLC-CAT
  - interface-view
  - value-help
  - component:SLC-CAT-2CL
  - lob:Other
---
# I_PURCHASINGCATEGORYVALUEHELP

**Purchasingcategoryvaluehelp**

| Property | Value |
|---|---|
| App Component | `SLC-CAT-2CL` |
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
| `PurchasingCategory` | ✓ | |  | `cast(I_PurchasingCategory.PurchasingCategory as /srmsmc/generic_id preserving type)` |  |  |
| `PurgCatName` |  | |  | `cast(I_PurchasingCategory.PurgCatName as /srmsmc/medium_name preserving type)` |  |  |
| `PurgCatDescription` |  | |  | `cast(I_PurchasingCategory._PurchasingCategoryDesc[1: Language = $session.system_language].PurgCatDescription as /srmsmc/description_char60 preserving type)` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPUCVH'
@EndUserText.label: 'Purchasing Category'
@AbapCatalog.preserveKey:true 
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Search.searchable: true
@Consumption.ranked: true
@ObjectModel.representativeKey: 'PurchasingCategory'
@Analytics.dataCategory: #DIMENSION                         //3344975
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER, #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET]
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true

define view I_PurchasingCategoryValueHelp
  as select distinct from I_PurchasingCategory
{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.9
      @ObjectModel.text.element: 'PurgCatName'
       key cast(I_PurchasingCategory.PurchasingCategory as /srmsmc/generic_id preserving type) as PurchasingCategory,
      
      @Search.defaultSearchElement: true
      @Semantics.text: true
      @Search.ranking: #LOW
      @Search.fuzzinessThreshold: 0.8
      cast(I_PurchasingCategory.PurgCatName as /srmsmc/medium_name preserving type) as PurgCatName,
      
      @Search.defaultSearchElement: true
      @Semantics.text: true
      @Search.ranking: #LOW
      @Search.fuzzinessThreshold: 0.8
      cast(I_PurchasingCategory._PurchasingCategoryDesc[1: Language = $session.system_language].PurgCatDescription as /srmsmc/description_char60 preserving type) as PurgCatDescription
      

}
```
