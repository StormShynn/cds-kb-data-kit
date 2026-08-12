---
name: I_MAINTCOMPONENTITEMCATEGORY
description: "Maintcomponentitemcategory"
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MO
  - interface-view
  - item-level
  - component:PM-WOC-MO-2CL
  - lob:Plant Maintenance
---
# I_MAINTCOMPONENTITEMCATEGORY

**Maintcomponentitemcategory**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintComponentItemCategory` | ✓ | |  | `postp` |  |  |
| `MaterialIsInventoryManaged` |  | |  | `kzbsf` |  |  |
| `ItemCatRequiresMaterialEntry` |  | |  | `matin` |  |  |
| `ItemIsVariableSized` |  | |  | `rtpos` |  |  |
| `MaterialIsTextItem` |  | |  | `txpos` |  |  |
| `ItemCategoryControlKey` |  | |  | `pstrg` |  |  |
| `ItemIsIntraMaterial` |  | |  | `inpos` |  |  |
| `ItemCatIsUsedForEnhancedLimits` |  | |  | `itemcatisusedforenhancedlimits` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IMCOMPITMCAT'
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@Consumption.ranked: true
@EndUserText.label: 'Maintenance Component Item Category'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'MaintComponentItemCategory'
@ObjectModel.sapObjectNodeType.name: 'MaintComponentItemCategory'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE,
                                     #VALUE_HELP_PROVIDER]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@ObjectModel.compositionRoot: true

define root view entity I_MaintComponentItemCategory
  as select from t418
  composition [0..*] of I_MaintCompItemCategoryTxt as _Text
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
  key postp                               as MaintComponentItemCategory,
      @Analytics.hidden: true
      @Consumption.hidden: true
      t418.kzbsf                          as MaterialIsInventoryManaged,
      @Analytics.hidden: true
      @Consumption.hidden: true
      t418.matin                          as ItemCatRequiresMaterialEntry,
      @Analytics.hidden: true
      @Consumption.hidden: true
      t418.rtpos                          as ItemIsVariableSized,
      @Analytics.hidden: true
      @Consumption.hidden: true
      t418.txpos                          as MaterialIsTextItem,
      @Analytics.hidden: true
      @Consumption.hidden: true
      t418.pstrg                          as ItemCategoryControlKey,
      @Analytics.hidden: true
      @Consumption.hidden: true
      t418.inpos                          as ItemIsIntraMaterial,
      @Analytics.hidden: true
      @Consumption.hidden: true
      t418.itemcatisusedforenhancedlimits as ItemCatIsUsedForEnhancedLimits,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text
}
where
      dkpos is initial
  and klpos is initial
  and btpos is initial
```
