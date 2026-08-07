---
name: I_MATERIALVALUATIONTYPEVH
description: Materialvaluationtypevh
app_component: CO-PC-ML-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-PC
  - CO-PC-ML
  - interface-view
  - value-help
  - material
  - component:CO-PC-ML-2CL
  - lob:Controlling
  - bo:Material
---
# I_MATERIALVALUATIONTYPEVH

**Materialvaluationtypevh**

| Property | Value |
|---|---|
| App Component | `CO-PC-ML-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `InventoryValuationType` | ✓ | |  | `BWTAR` |
| `Plant` | ✓ | |  | `BWKEY` |
| `InventoryValuationCategory` |  | |  | `BWTTY` |
| `InventoryValuationCategoryName` |  | | `_InventoryValCategoryText` | `InventoryValuationCategoryName` |
| `ValuationArea` |  | |  | `BWKEY` |
| `_Plant` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [0..1] |
| `_InventoryValCategoryText` | `P_T149T` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMATLVALNTYPEVH'
@ObjectModel.representativeKey: 'InventoryValuationType'
@VDM.viewType: #BASIC
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION, #VALUE_HELP_PROVIDER ]
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions:true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.usageType: {
  dataClass: #META,
  serviceQuality: #A,
  sizeCategory: #M
  }
@ObjectModel.sapObjectNodeType.name: 'MaterialValuation'  
@EndUserText.label: 'Inventory Valuation Type'
@Search.searchable: true
define view I_MaterialValuationTypeVH
  as select from P_T149B as vb

  association [0..1] to I_Plant as _Plant                    on  $projection.Plant = _Plant.Plant
  association [0..1] to P_T149T as _InventoryValCategoryText on  $projection.InventoryValuationCategory = _InventoryValCategoryText.InventoryValuationCategory
                                                             and _InventoryValCategoryText.Language     = $session.system_language
{
           @Search.defaultSearchElement: true
  key      vb.BWTAR                                                 as InventoryValuationType,
           @ObjectModel.foreignKey.association: '_Plant'
           @Search.defaultSearchElement: true
  key      vb.BWKEY                                                 as Plant,

           @ObjectModel.text.element: ['InventoryValuationCategoryName']
           vb.BWTTY                                                 as InventoryValuationCategory,
           _InventoryValCategoryText.InventoryValuationCategoryName as InventoryValuationCategoryName,
           @UI.hidden: true
           vb.BWKEY                                                 as ValuationArea,
           _Plant

}

group by
  vb.BWTAR,
  vb.BWTTY,
  vb.BWKEY,
  _InventoryValCategoryText.InventoryValuationCategoryName
```
