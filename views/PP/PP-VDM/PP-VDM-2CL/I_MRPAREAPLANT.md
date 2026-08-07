---
name: I_MRPAREAPLANT
description: Mrpareaplant
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - plant
  - component:PP-VDM-2CL
  - lob:Manufacturing
  - bo:Plant
---
# I_MRPAREAPLANT

**Mrpareaplant**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MRPArea` | ✓ | |  | `berid` |  |  |
| `MRPAreaPlant` | ✓ | |  | `cast(mdlw.werks as werzg preserving type)` |  |  |
| `_Plant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMRPAREAPLANT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
@ObjectModel.representativeKey: 'MRPArea'
@ObjectModel.semanticKey: ['MRPArea', 'MRPAreaPlant']
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #MASTER}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'MRP Area Plant'

define view I_MRPAreaPlant
  as select from mdlw as mdlw
         
  association [1..1] to I_Plant as _Plant on $projection.MRPAreaPlant = _Plant.Plant
{
      // Key
  key mdlw.berid                                as MRPArea,
      @ObjectModel.foreignKey.association: '_Plant'
  key cast(mdlw.werks as werzg preserving type) as MRPAreaPlant,

      // Associations
      _Plant
};
```
