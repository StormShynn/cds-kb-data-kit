---
name: I_PRODUCTVALUATIONCATEGORYVH
description: "Productvaluationcategoryvh"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - value-help
  - product
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTVALUATIONCATEGORYVH

**Productvaluationcategoryvh**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ValuationArea` | ✓ | |  | `bwkey` |  |  |
| `InventoryValuationCategory` | ✓ | |  | `bwtty` |  |  |
| `_Text` | | ✓ | | | | |
| `_ValuationArea` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ProductValuationCategoryText` | [0..*] |
| `_ValuationArea` | `I_ProductValuationAreaVH` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRODVALCAT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Analytics.internalName: #LOCAL
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Product Valuation Category'
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'InventoryValuationCategory'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@Consumption.ranked: true
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name:'ProductValuationCategory'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE, 
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE ]
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER                                     
//@AccessControl: {
//    privilegedAssociations: [ '_ValuationArea' ]
//}

define view I_ProductValuationCategoryVH
  as select from t149

  association [0..*] to I_ProductValuationCategoryText  as _Text          on $projection.InventoryValuationCategory = _Text.InventoryValuationCategory
  association [0..1] to I_ProductValuationAreaVH as _ValuationArea on $projection.ValuationArea = _ValuationArea.ValuationArea
{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #MEDIUM
      @ObjectModel.foreignKey.association:'_ValuationArea' 
      @Consumption.valueHelpDefinition.association:'_ValuationArea' 
  key bwkey as ValuationArea,
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key bwtty as InventoryValuationCategory,
  
      _Text,
      _ValuationArea
}
```
