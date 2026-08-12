---
name: I_PRODUCTVALUATIONCATEGORYTEXT
description: "Productvaluationcategorytext"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - text-view
  - product
  - text
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTVALUATIONCATEGORYTEXT

**Productvaluationcategorytext**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InventoryValuationCategory` | ✓ | |  | `bwtty` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `InventoryValuationCategoryName` |  | |  | `cast( t149t.btbez as inventoryvaluationcategoryname )` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRODVALCATT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Product Valuation Category - Text'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #S
@ObjectModel.usageType.dataClass: #META
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@Search.searchable: true
@ObjectModel.representativeKey: 'InventoryValuationCategory'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE, 
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] } */

define view I_ProductValuationCategoryText
  as select from t149t
{
  key bwtty                                                      as InventoryValuationCategory,
      @Semantics.language: true
  key t149t.spras                                                as Language,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @EndUserText.label: 'Valuation Category Name'
      cast( t149t.btbez as inventoryvaluationcategoryname )      as InventoryValuationCategoryName
}
```
