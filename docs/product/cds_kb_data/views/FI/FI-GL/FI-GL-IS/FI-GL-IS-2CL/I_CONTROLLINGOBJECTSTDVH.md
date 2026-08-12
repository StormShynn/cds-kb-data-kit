---
name: I_CONTROLLINGOBJECTSTDVH
description: "Controllingobjectstdvh"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - value-help
  - standard-value-help
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_CONTROLLINGOBJECTSTDVH

**Controllingobjectstdvh**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ControllingObject` | ✓ | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |

## Source Code

```abap
//GENERATED:001:GlBfhyFV7jUzaDT}MP9DVm
@AbapCatalog.sqlViewName: 'IFICO__VH'
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'ControllingObject'

@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L

@AccessControl.authorizationCheck: #CHECK

@ClientHandling.algorithm: #SESSION_VARIABLE

@Search.searchable: true
@Consumption.ranked: true

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Controlling Object'

@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE,#VALUE_HELP_PROVIDER,#CDS_MODELING_ASSOCIATION_TARGET,
                                     #VALUE_HELP_PROVIDER,#SEARCHABLE_ENTITY]
define view I_ControllingObjectStdVH as select from I_ControllingObject {
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #HIGH
  key ControllingObject,

  @Consumption.hidden: true
  ControllingArea
}
```
