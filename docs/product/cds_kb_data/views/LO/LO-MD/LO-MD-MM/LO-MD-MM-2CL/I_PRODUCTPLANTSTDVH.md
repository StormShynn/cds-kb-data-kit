---
name: I_PRODUCTPLANTSTDVH
description: "Productplantstdvh"
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
  - value-help
  - standard-value-help
  - product
  - plant
  - component:LO-MD-MM-2CL
  - lob:Logistics General
  - bo:Plant
---
# I_PRODUCTPLANTSTDVH

**Productplantstdvh**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` | ✓ | |  |  |  |  |
| `Plant` | ✓ | |  |  |  |  |
| `_Plant` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |

## Source Code

```abap
//GENERATED:005:GFBfhxvv7jY0djC{h{ANI0
@AbapCatalog.sqlViewName: 'IPP__VH'
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #COMPOSITE

@ObjectModel: {
   dataCategory: #VALUE_HELP,
   supportedCapabilities: [ #SQL_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #VALUE_HELP_PROVIDER
   ],
   usageType: {
        serviceQuality: #C,
        sizeCategory: #XL,
        dataClass: #MASTER
   }
}

@AccessControl.authorizationCheck: #CHECK

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Product Plant Active Core Entity'

@Search.searchable: true
@Consumption.ranked: true 

define view I_ProductPlantStdVH
  as select from I_ProductPlantBasic
{
 @Search: {defaultSearchElement: true, ranking: #MEDIUM, fuzzinessThreshold: 0.8}
  key Product,
 @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      @ObjectModel.foreignKey.association: '_Plant'
  key Plant,


      @Consumption.hidden: true
      _Plant,
      @Consumption.hidden: true
      _Product
}
```
