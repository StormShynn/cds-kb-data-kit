---
name: I_INVENTORYSTOCKTYPET
description: Inventorystocktypet
app_component: MM-IM-VDM-SGM-2CL
software_component: SAPSCORE
release_state: released
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
# I_INVENTORYSTOCKTYPET

**Inventorystocktypet**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-SGM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `InventoryStockType` | `cast(substring( domvalue_l, 1, 2 ) as nsdm_lbbsa)` |
| key `Language` | `ddlanguage` |
| `InventoryStockTypeName` | `cast(ddtext as nsdm_stock_type_name)` |
| `_InventoryStockType` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InventoryStockType` | `I_InventoryStockType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Type of Inventory Stock - Text'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
                usageType: {
                             sizeCategory: #S,
                             serviceQuality: #A,
                             dataClass:#CUSTOMIZING
                           },
                dataCategory: #TEXT,
                representativeKey: 'InventoryStockType',
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                sapObjectNodeType.name: 'InventoryStockTypeText',
                supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
              }

@VDM: {
        viewType: #BASIC,
        lifecycle.contract.type: #PUBLIC_LOCAL_API
      }
@Metadata: {
             ignorePropagatedAnnotations: true
           }
@Analytics.dataExtraction.enabled: true


define view entity I_InventoryStockTypeT
  as select from dd07t
  association [0..1] to I_InventoryStockType as _InventoryStockType on $projection.InventoryStockType = _InventoryStockType.InventoryStockType
  association [0..1] to I_Language           as _Language           on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_InventoryStockType'
  key cast(substring( domvalue_l, 1, 2 ) as nsdm_lbbsa) as InventoryStockType, //casting to have the right label for consumers
      @Semantics.language: true
  key ddlanguage                                        as Language,
      @Semantics.text: true
      cast(ddtext as nsdm_stock_type_name)              as InventoryStockTypeName,

      _InventoryStockType,
      _Language
}
where
      domname  = 'NSDM_LBBSA'
  and as4local = 'A'
```
