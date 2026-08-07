---
name: I_PLANNEDORDERACTIONCONTROLVH
description: "Planned OrderACTIONCONTROLVH"
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
  - value-help
  - planned-order
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_PLANNEDORDERACTIONCONTROLVH

**Planned OrderACTIONCONTROLVH**

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
| `PlannedOrderProcgAction` | ✓ | |  | `cast(accfm as vdm_mdacc preserving type)` |  |  |
| `PlannedOrderProcgFllwUpAction` | ✓ | |  | `cast(accto as vdm_mdacn preserving type)` |  |  |
| `_PlannedOrderActionControl` | | ✓ | | | | |
| `_PlannedOrderProcgAction` | | ✓ | | | | |
| `_PlannedOrderProcgFllwUpAction` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PlannedOrderActionControl` | `I_PlannedOrderActionControl` | [1..1] |
| `_PlannedOrderProcgAction` | `I_PlannedOrderProcgAction` | [0..1] |
| `_PlannedOrderProcgFllwUpAction` | `I_PlannedOrderProcgAction` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPLNDORDACTCTLVH'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.buffering: {status: #ACTIVE, type: #FULL, numberOfKeyFields: 000}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER]
@ObjectModel.representativeKey: 'PlannedOrderActionControl'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Action Control for Planned Order'

define view I_PlannedOrderActionControlVH
  as select from t46ac

  association [1..1] to I_PlannedOrderActionControl as _PlannedOrderActionControl     on  $projection.PlannedOrderActionControl     = _PlannedOrderActionControl.PlannedOrderActionControl
  association [0..1] to I_PlannedOrderProcgAction   as _PlannedOrderProcgAction       on  $projection.PlannedOrderProcgAction       = _PlannedOrderProcgAction.PlannedOrderProcgAction
  association [0..1] to I_PlannedOrderProcgAction   as _PlannedOrderProcgFllwUpAction on  $projection.PlannedOrderProcgFllwUpAction = _PlannedOrderProcgFllwUpAction.PlannedOrderProcgAction  
  {
    // Key
    @ObjectModel.foreignKey.association: '_PlannedOrderActionControl'      
    @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
    key mdach as PlannedOrderActionControl,
    @ObjectModel.foreignKey.association: '_PlannedOrderProcgAction'
    @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
    key cast(accfm as vdm_mdacc preserving type) as PlannedOrderProcgAction,
    @ObjectModel.foreignKey.association: '_PlannedOrderProcgFllwUpAction'
    @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
    key cast(accto as vdm_mdacn preserving type) as PlannedOrderProcgFllwUpAction,

    // Associations
    _PlannedOrderActionControl,
    _PlannedOrderProcgAction,
    _PlannedOrderProcgFllwUpAction
  };
```
