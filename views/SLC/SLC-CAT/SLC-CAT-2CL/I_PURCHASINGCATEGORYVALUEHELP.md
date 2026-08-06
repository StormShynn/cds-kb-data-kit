---
name: I_PURCHASINGCATEGORYVALUEHELP
description: Purchasingcategoryvaluehelp
app_component: SLC-CAT-2CL
software_component: SAPSCORE
release_state: released
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
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PurchasingCategory` | `cast(I_PurchasingCategory.PurchasingCategory as /srmsmc/generic_id preserving type)` |
| `PurgCatName` | `cast(I_PurchasingCategory.PurgCatName as /srmsmc/medium_name preserving type)` |
| `PurgCatDescription` | `cast(I_PurchasingCategory._PurchasingCategoryDesc[1: Language = $session.system_language].PurgCatDescription as /srmsmc/description_char60 preserving type)` |

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
