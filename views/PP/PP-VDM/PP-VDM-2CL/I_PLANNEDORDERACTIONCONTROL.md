---
name: I_PLANNEDORDERACTIONCONTROL
description: "Planned OrderACTIONCONTROL"
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
  - planned-order
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_PLANNEDORDERACTIONCONTROL

**Planned OrderACTIONCONTROL**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PlannedOrderActionControl` | ✓ | |  | `mdach` |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IPLNDORDACTCTRL'
@Analytics.internalName: #LOCAL 
@Consumption.ranked: true
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'PlannedOrderActionControl'
@ObjectModel.sapObjectNodeType.name: 'PlannedOrderActionControl'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Action Control for Planned Order'
// to be used for foreign key associations on MDACH
// for full content and VH of T46AC refer to I_PlannedOrderActionControlVH

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_PlannedOrderActionControl
  as select distinct from t46ac
  {
    @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
    key mdach as PlannedOrderActionControl
  };
```
