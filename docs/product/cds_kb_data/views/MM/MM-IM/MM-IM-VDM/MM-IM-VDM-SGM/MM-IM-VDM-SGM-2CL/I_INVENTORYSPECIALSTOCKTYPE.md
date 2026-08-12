---
name: I_INVENTORYSPECIALSTOCKTYPE
description: "Inventoryspecialstocktype"
app_component: MM-IM-VDM-SGM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-VDM
  - interface-view
  - inventory
  - component:MM-IM-VDM-SGM-2CL
  - lob:Sourcing & Procurement
  - bo:Inventory
---
# I_INVENTORYSPECIALSTOCKTYPE

**Inventoryspecialstocktype**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-SGM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InventorySpecialStockType` | ✓ | |  | `sobkz` |  |  |
| `SpclStkLogisticsAssignment` |  | |  | `soblo` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_InventorySpecialStockTypeT` | [0..*] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
 @EndUserText.label: 'Inventory Special Stock Type'
@AccessControl: { authorizationCheck: #NOT_REQUIRED }
@ObjectModel: {
                usageType: {
                             sizeCategory: #S,
                             serviceQuality: #A,
                             dataClass:#CUSTOMIZING
                           },
                representativeKey: 'InventorySpecialStockType',
                modelingPattern: #ANALYTICAL_DIMENSION,
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE],
                sapObjectNodeType.name: 'InventorySpecialStockType'
              }
@VDM: {
        viewType: #BASIC,
        lifecycle.contract.type: #PUBLIC_LOCAL_API
      }
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IINVSPECSTOCKTY'
@Analytics.dataExtraction.enabled: true
@Metadata: {
             ignorePropagatedAnnotations: true
           }
@Search.searchable: true
define view entity I_InventorySpecialStockType
  as select from t148
  association [0..*] to I_InventorySpecialStockTypeT as _Text on $projection.InventorySpecialStockType = _Text.InventorySpecialStockType
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key sobkz as InventorySpecialStockType,
      soblo as SpclStkLogisticsAssignment,
      _Text
}
```
