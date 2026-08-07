---
name: I_PHYSICALINVTRYISACTVBLKD
description: Physicalinvtryisactvblkd
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
# I_PHYSICALINVTRYISACTVBLKD

**Physicalinvtryisactvblkd**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-PI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PhysicalInventoryActvBlkdStat` | ✓ | |  | `cast( substring( domvalue_l, 1, 3 ) as pi_actblkdflag preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PhysicalInvtryIsActvBlkdT` | [0..*] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Physical Inventory stock indicator'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
               usageType:{
                           serviceQuality: #B,
                           sizeCategory: #S,
                           dataClass: #CUSTOMIZING
                         },
               dataCategory: #VALUE_HELP,
               modelingPattern: #ANALYTICAL_DIMENSION,
               representativeKey: 'PhysicalInventoryActvBlkdStat',
               resultSet.sizeCategory: #XS,
               sapObjectNodeType: {
                                    name: 'PhysicalInventoryStockStatus'
                                  },
               supportedCapabilities: [ #ANALYTICAL_DIMENSION, 
                                        #CDS_MODELING_ASSOCIATION_TARGET, 
                                        #CDS_MODELING_DATA_SOURCE,
                                        #SEARCHABLE_ENTITY,
                                        #SQL_DATA_SOURCE, 
                                        #VALUE_HELP_PROVIDER,
                                        #EXTRACTION_DATA_SOURCE]
             }
@Analytics:{
             dataCategory: #DIMENSION,
             internalName: #LOCAL,
             dataExtraction.enabled: true
           }
@Search.searchable: true
@VDM: {
        lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #BASIC
      }
@Consumption.ranked: true
/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ] } */

define view entity I_PhysicalInvtryIsActvBlkd
  as select from dd07l
  association [0..*] to I_PhysicalInvtryIsActvBlkdT as _Text on $projection.PhysicalInventoryActvBlkdStat = _Text.PhysicalInventoryActvBlkdStat
{
      @ObjectModel.text.association: '_Text'
  key cast( substring( domvalue_l, 1, 3 ) as pi_actblkdflag preserving type ) as PhysicalInventoryActvBlkdStat,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l as DomainValue,
      _Text
} 
where dd07l.domname  = 'PI_ACTBLKDFLAG'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
