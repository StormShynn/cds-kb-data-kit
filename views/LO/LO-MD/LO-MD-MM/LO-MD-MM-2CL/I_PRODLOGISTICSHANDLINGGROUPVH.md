---
name: I_PRODLOGISTICSHANDLINGGROUPVH
description: Prodlogisticshandlinggroupvh
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - value-help
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODLOGISTICSHANDLINGGROUPVH

**Prodlogisticshandlinggroupvh**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ProductLogisticsHandlingGroup` | ✓ | |  | `loggr` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ProdLogisticsHandlingGroupT` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPLOGHNDLGGRP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Analytics.internalName: #LOCAL
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Logistics Handling Group'
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'ProductLogisticsHandlingGroup'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
//@Consumption.ranked: true
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name:'ProductLogisticsHandlingGroup'
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SEARCHABLE_ENTITY ]

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */

define view I_ProdLogisticsHandlingGroupVH
  as select from tlog
  association [0..*] to I_ProdLogisticsHandlingGroupT as _Text 
  on $projection.ProductLogisticsHandlingGroup = _Text.ProductLogisticsHandlingGroup
{

        @ObjectModel.text.association: '_Text'
//      @Consumption.hidden: true
        @Search.defaultSearchElement: true
        @Search.fuzzinessThreshold: 0.8
        @Search.ranking: #HIGH
  key   loggr  as ProductLogisticsHandlingGroup,
  
       _Text
}
```
