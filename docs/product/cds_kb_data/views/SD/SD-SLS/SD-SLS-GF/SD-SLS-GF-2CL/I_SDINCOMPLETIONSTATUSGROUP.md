---
name: I_SDINCOMPLETIONSTATUSGROUP
description: "Sdincompletionstatusgroup"
app_component: SD-SLS-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IncompletionStatusGroup` | ✓ | |  | `statg` |  |  |
| `OverallIsIncomplete` |  | |  | `uvall` |  |  |
| `DeliveryIsIncomplete` |  | |  | `uvvlk` |  |  |
| `BillingIsIncomplete` |  | |  | `uvfak` |  |  |
| `PricingIsIncomplete` |  | |  | `uvprs` |  |  |
| `GoodsMovementIsIncomplete` |  | |  | `uvwak` |  |  |
| `PickingIsIncomplete` |  | |  | `uvpik` |  |  |
| `PackingIsIncomplete` |  | |  | `uvpak` |  |  |

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
