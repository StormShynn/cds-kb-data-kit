---
name: I_PHYSINVTRYSTOCKTYPE
description: Physinvtrystocktype
app_component: MM-IM-VDM-PI-2CL
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
  - component:MM-IM-VDM-PI-2CL
  - lob:Sourcing & Procurement
---
# I_PHYSINVTRYSTOCKTYPE

**Physinvtrystocktype**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-PI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `PhysicalInventoryStockType` | ✓ | |  | `bstar` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PhysInvtryStockTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
 @EndUserText.label: 'Physical Inventory Stock Type'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:{
               usageType:{
                           sizeCategory: #S,
                           serviceQuality: #A,
                           dataClass: #CUSTOMIZING
                         },
                representativeKey: 'PhysicalInventoryStockType',
                dataCategory: #VALUE_HELP,
                sapObjectNodeType: {
                                     name: 'PhysicalInventoryStockType'
                                   },
                modelingPattern: #ANALYTICAL_DIMENSION,
                supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #VALUE_HELP_PROVIDER, #EXTRACTION_DATA_SOURCE]
}
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IPISTOCKTYPE'
@Analytics.dataExtraction.enabled: true
@VDM:{
       viewType: #BASIC,
       lifecycle.contract.type: #PUBLIC_LOCAL_API
     }
@Search.searchable: true
@Consumption.ranked: true
@Metadata: {
             ignorePropagatedAnnotations: true
           }

define view entity I_PhysInvtryStockType

  as select from t064a

  association [0..*] to I_PhysInvtryStockTypeText as _Text on $projection.PhysicalInventoryStockType = _Text.PhysicalInventoryStockType

{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key bstar as PhysicalInventoryStockType,

      _Text
}
```
