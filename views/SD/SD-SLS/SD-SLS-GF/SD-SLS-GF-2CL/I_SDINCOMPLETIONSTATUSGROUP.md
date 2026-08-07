---
name: I_SDINCOMPLETIONSTATUSGROUP
description: Sdincompletionstatusgroup
app_component: SD-SLS-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-GF
  - interface-view
  - status
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_SDINCOMPLETIONSTATUSGROUP

**Sdincompletionstatusgroup**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `IncompletionStatusGroup` | ✓ | |  | `statg` |
| `OverallIsIncomplete` |  | |  | `uvall` |
| `DeliveryIsIncomplete` |  | |  | `uvvlk` |
| `BillingIsIncomplete` |  | |  | `uvfak` |
| `PricingIsIncomplete` |  | |  | `uvprs` |
| `GoodsMovementIsIncomplete` |  | |  | `uvwak` |
| `PickingIsIncomplete` |  | |  | `uvpik` |
| `PackingIsIncomplete` |  | |  | `uvpak` |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE

@AbapCatalog: {
  sqlViewName: 'ISDINCOMPSTSGRP',
  compiler.compareFilter: true,
  preserveKey: true,
  buffering.status: #ACTIVE,
  buffering.type: #FULL
}

@VDM.viewType: #BASIC

@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel: {
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  },
  supportedCapabilities: [ #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET ]
  }
  
@Metadata.ignorePropagatedAnnotations:true

@EndUserText.label: 'Incompletion Status Group'
define view I_SDIncompletionStatusGroup 
  as select from tvuvs
{
  key statg   as IncompletionStatusGroup,
  
      uvall   as OverallIsIncomplete,
      
      uvvlk   as DeliveryIsIncomplete,
      
      uvfak   as BillingIsIncomplete,
      
      uvprs   as PricingIsIncomplete,
      
      uvwak   as GoodsMovementIsIncomplete,
      
      uvpik   as PickingIsIncomplete,
      
      uvpak   as PackingIsIncomplete    
}
```
