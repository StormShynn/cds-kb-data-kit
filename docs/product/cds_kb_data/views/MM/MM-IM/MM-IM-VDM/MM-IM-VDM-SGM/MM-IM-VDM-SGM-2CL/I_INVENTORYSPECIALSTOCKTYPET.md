---
name: I_INVENTORYSPECIALSTOCKTYPET
description: "Inventoryspecialstocktypet"
app_component: MM-IM-VDM-SGM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_INVENTORYSPECIALSTOCKTYPET

**Inventoryspecialstocktypet**

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
| `Language` | ✓ | |  | `spras` |  |  |
| `InventorySpecialStockTypeName` |  | |  | `cast ( sotxt as nsdm_spcl_stock_type_name preserving type )` |  |  |
| `_InventorySpecialStockType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InventorySpecialStockType` | `I_InventorySpecialStockType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
 @EndUserText.label: 'Type of Inventory Special Stock - Text'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
                usageType: {
                             sizeCategory: #S,
                             serviceQuality: #A,
                             dataClass:#CUSTOMIZING
                           },
                dataCategory: #TEXT,
                representativeKey: 'InventorySpecialStockType',
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                sapObjectNodeType.name: 'InventorySpecialStockTypeText',
                supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
              }

@VDM: {
        viewType: #BASIC,
        lifecycle.contract.type: #PUBLIC_LOCAL_API
      }
@Metadata: {
             ignorePropagatedAnnotations: true
           }
@Search.searchable: true
@Analytics.dataExtraction.enabled: true

define view entity I_InventorySpecialStockTypeT
  as select from t148t
  association [0..1] to I_InventorySpecialStockType as _InventorySpecialStockType on $projection.InventorySpecialStockType = _InventorySpecialStockType.InventorySpecialStockType
  association [0..1] to I_Language                  as _Language                  on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_InventorySpecialStockType'
  key sobkz as InventorySpecialStockType,
      @Semantics.language: true
  key spras as Language,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      cast ( sotxt as nsdm_spcl_stock_type_name preserving type ) as InventorySpecialStockTypeName,

      _InventorySpecialStockType,
      _Language
}
```
