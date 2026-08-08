---
name: I_INVENTORYSTOCKTYPE
description: "Inventorystocktype"
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
# I_INVENTORYSTOCKTYPE

**Inventorystocktype**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-SGM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InventoryStockType` | ✓ | |  | `cast(substring( domvalue_l, 1, 2 ) as nsdm_lbbsa)` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_InventoryStockTypeT` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Inventory Stock Type'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
                usageType: {
                             sizeCategory: #S,
                             serviceQuality: #A,
                             dataClass:#CUSTOMIZING
                           },
                representativeKey: 'InventoryStockType',
                modelingPattern: #ANALYTICAL_DIMENSION,
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE],
                sapObjectNodeType.name: 'InventoryStockType'
              }

@VDM: {
        viewType: #BASIC,
        lifecycle.contract.type: #PUBLIC_LOCAL_API
      }
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IINVSTOCKTYPE'
@Analytics.dataExtraction.enabled: true
@Metadata: {
             ignorePropagatedAnnotations: true
           }

define view entity I_InventoryStockType
  as select from dd07l
  association [0..*] to I_InventoryStockTypeT as _Text on $projection.InventoryStockType = _Text.InventoryStockType
{
      @ObjectModel.text.association: '_Text'
  key cast(substring( domvalue_l, 1, 2 ) as nsdm_lbbsa) as InventoryStockType, //casting to have the right label for consumers
      _Text
}
where
      domname  = 'NSDM_LBBSA'
  and as4local = 'A'
```
