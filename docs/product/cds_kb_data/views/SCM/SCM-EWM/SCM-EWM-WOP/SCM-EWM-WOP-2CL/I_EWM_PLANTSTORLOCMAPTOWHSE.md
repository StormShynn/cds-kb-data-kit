---
name: I_EWM_PLANTSTORLOCMAPTOWHSE
description: "Ewm Plantstorlocmaptowhse"
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SCM
  - SCM-EWM
  - SCM-EWM-WOP
  - interface-view
  - plant
  - component:SCM-EWM-WOP-2CL
  - lob:Other
  - bo:Plant
---
# I_EWM_PLANTSTORLOCMAPTOWHSE

**Ewm Plantstorlocmaptowhse**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Plant` | ✓ | |  | `plant` |  |  |
| `StorageLocation` | ✓ | |  | `stge_loc` |  |  |
| `ERPLogicalSystem` |  | | `_Client` | `LogicalSystem` |  |  |
| `EWMWarehouse` |  | |  | `lgnum` |  |  |
| `EWMAvailabilityGroup` |  | |  | `avlgrp` |  |  |
| `_Plant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [0..1] |
| `_Client` | `I_SAPClient` | [1..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@EndUserText.label: 'Mapping of Plnt and Stor Loc to Whse'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #CUSTOMIZING
}
@ObjectModel.representativeKey: 'StorageLocation'
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #SQL_DATA_SOURCE,                                      
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET ]
                                      
@ObjectModel.modelingPattern: #NONE                                   
                                    
define view entity I_EWM_PlantStorLocMapToWhse as select from /scwm/tmapstloc 
association [0..1] to I_Plant  as _Plant on  $projection.Plant = _Plant.Plant
association [1..1] to I_SAPClient                 as _Client        on  1 = 1 // Dummy Condition as Mandt = Mandt is sufficient and done implicitly
{
@ObjectModel.foreignKey.association: '_Plant'
key plant as Plant,
key stge_loc as StorageLocation,
_Client.LogicalSystem as ERPLogicalSystem,
lgnum as EWMWarehouse,
avlgrp as EWMAvailabilityGroup,
_Plant
}
```
