---
name: I_SALESOFFICESALESGROUP
description: Salesofficesalesgroup
app_component: SD-CRF-ORG-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-CRF
  - SD-CRF-ORG
  - interface-view
  - component:SD-CRF-ORG-2CL
  - lob:Sales & Distribution
---
# I_SALESOFFICESALESGROUP

**Salesofficesalesgroup**

| Property | Value |
|---|---|
| App Component | `SD-CRF-ORG-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SalesOffice` | `vkbur` |
| key `SalesGroup` | `vkgrp` |
| `_SalesOffice` | *Association* |
| `_SalesGroup` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesOffice` | `I_SalesOffice` | [0..1] |
| `_SalesGroup` | `I_SalesGroup` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.usageType.dataClass: #ORGANIZATIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Sales Groups for Sales office'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDSLSOFFICEGRP'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET  ]
define view I_SalesOfficeSalesGroup
as select from tvbvk  

association[0..1] to I_SalesOffice as _SalesOffice on $projection.SalesOffice = _SalesOffice.SalesOffice
association[0..1] to I_SalesGroup as _SalesGroup on $projection.SalesGroup = _SalesGroup.SalesGroup
{
    
    @ObjectModel.foreignKey.association: '_SalesOffice'
    key vkbur as SalesOffice,
    
    @ObjectModel.foreignKey.association: '_SalesGroup'
    key vkgrp as SalesGroup,
    
    _SalesOffice,
    _SalesGroup
};
```
