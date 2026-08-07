---
name: I_KANBANCALCADOPTIONSTRATEGY
description: Kanbancalcadoptionstrategy
app_component: PP-KAB-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-KAB
  - PP-KAB-VDM
  - interface-view
  - component:PP-KAB-VDM-2CL
  - lob:Manufacturing
---
# I_KANBANCALCADOPTIONSTRATEGY

**Kanbancalcadoptionstrategy**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Plant` | ✓ | |  | `werks` |  |  |
| `KanbanCtnUnlockingSequence` |  | |  | `rfent` |  |  |
| `NmbrAssignmentForNewKanbanCtns` |  | |  | `nknum` |  |  |
| `KanbanContainerLockingSequence` |  | |  | `rfspr` |  |  |
| `InitKnbnCtnsAreDeltdFirst` |  | |  | `loewn` |  |  |
| `LockedKnbnCtnsAreDeltdFirst` |  | |  | `loewg` |  |  |
| `LockStrategyForNewKanbanCtns` |  | |  | `nlock` |  |  |
| `_Plant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IKNBCALCADPSTRGY'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Kanban Calculation Adoption Strategy'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL

@Metadata.ignorePropagatedAnnotations: true

@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view I_KanbanCalcAdoptionStrategy 
  as select from tpkbu
  association [0..1] to I_Plant  as _Plant on  $projection.Plant = _Plant.Plant
{
  key werks as Plant,
      rfent as KanbanCtnUnlockingSequence,
      nknum as NmbrAssignmentForNewKanbanCtns,
      rfspr as KanbanContainerLockingSequence,
      @Semantics.booleanIndicator 
      loewn as InitKnbnCtnsAreDeltdFirst,
      @Semantics.booleanIndicator 
      loewg as LockedKnbnCtnsAreDeltdFirst, 
      nlock as LockStrategyForNewKanbanCtns,
      
      // Associations
      _Plant  
}
```
