---
name: I_TRANSPORTATIONGROUP
description: "Transportationgroup"
app_component: TM-MD-PR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-MD
  - TM-MD-PR
  - interface-view
  - transport
  - component:TM-MD-PR-2CL
  - lob:Other
---
# I_TRANSPORTATIONGROUP

**Transportationgroup**

| Property | Value |
|---|---|
| App Component | `TM-MD-PR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationGroup` | ✓ | |  | `tragr` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_TransportationGroupText` | [0..*] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
 @ObjectModel.representativeKey: 'TransportationGroup'
@Analytics.technicalName: 'ISDTRANSPGRP'
@Analytics.dataCategory:#DIMENSION 
@Analytics.internalName:#LOCAL
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,                                
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE, 
                                     #VALUE_HELP_PROVIDER]
@EndUserText.label: 'Transportation Group'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@Search.searchable: true
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations:true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.sapObjectNodeType.name: 'TransportationGroup'

define view entity I_TransportationGroup
as select from
ttgr
association [0..*] to I_TransportationGroupText as _Text on $projection.TransportationGroup = _Text.TransportationGroup
{
    @Search.defaultSearchElement: true
    @Search.ranking: #HIGH
    @ObjectModel.text.association: '_Text'
    key tragr as TransportationGroup,

    _Text
};
```
