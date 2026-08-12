---
name: I_PHYSINVTRYSPECIALSTOCKTYPEVH
description: "Physinvtryspecialstocktypevh"
app_component: MM-IM-PI-2CL
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
  - MM-IM-PI
  - interface-view
  - value-help
  - component:MM-IM-PI-2CL
  - lob:Sourcing & Procurement
---
# I_PHYSINVTRYSPECIALSTOCKTYPEVH

**Physinvtryspecialstocktypevh**

| Property | Value |
|---|---|
| App Component | `MM-IM-PI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InventorySpecialStockType` | ✓ | |  |  |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Special Stock types relevant for PI'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
                usageType: {
                             sizeCategory: #S,
                             serviceQuality: #A,
                             dataClass:#CUSTOMIZING
                           },
                dataCategory: #VALUE_HELP,
                representativeKey: 'InventorySpecialStockType',
                modelingPattern: #ANALYTICAL_DIMENSION,
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
                sapObjectNodeType.name: 'InventorySpecialStockType'
              }
@Analytics.technicalName:'IPISpecialStockTypeVH'
@Analytics: {
              dataCategory: #DIMENSION,
              internalName: #LOCAL
            }
@VDM:{
       viewType: #BASIC,
       lifecycle.contract.type: #PUBLIC_LOCAL_API
     }
@Search.searchable: true
define view entity I_PhysInvtrySpecialStockTypeVH
  as select from I_InventorySpecialStockType
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key InventorySpecialStockType,
      _Text
}
where
      InventorySpecialStockType <> 'P' // Pipeline Stock and Stock in Transit are not support in PI process
  and InventorySpecialStockType <> 'T'
```
