---
name: I_PROCESSORDERRELATIONSHIPTP
description: Processorderrelationshiptp
app_component: PP-PI-POR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-PI
  - PP-PI-POR
  - interface-view
  - transactional-processing
  - component:PP-PI-POR-2CL
  - lob:Manufacturing
---
# I_PROCESSORDERRELATIONSHIPTP

**Processorderrelationshiptp**

| Property | Value |
|---|---|
| App Component | `PP-PI-POR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PredecessorOrderInternalID` | `PredecessorOrderInternalID` |
| key `PredecessorPhaseInternalID` | `PredecessorPhaseInternalID` |
| key `SuccessorOrderInternalID` | `SuccessorOrderInternalID` |
| key `SuccessorPhaseInternalID` | `SuccessorPhaseInternalID` |
| key `OrderPhaseRelationshipIntType` | `OrderPhaseRelationshipIntType` |
| key `MaxTimeIntvlIsUsedForSchedg` | `MaxTimeIntvlIsUsedForSchedg` |
| `PredecessorOrder` | `PredecessorOrder` |
| `PredecessorOrderPhase` | `PredecessorOrderPhase` |
| `SuccessorOrder` | `SuccessorOrder` |
| `SuccessorOrderPhase` | `SuccessorOrderPhase` |
| `ManufacturingOrderCategory` | `ManufacturingOrderCategory` |
| `PhaseRelshpTimeIntervalUnit` | `PhaseRelshpTimeIntervalUnit` |
| `PhaseRelshpTimeIntervalDurn` | `PhaseRelshpTimeIntervalDurn` |
| `PhaseRelshpTimeIntervalDurnMax` | `PhaseRelshpTimeIntervalDurnMax` |
| `TimeIntvlBtwnRelshpInPct` | `TimeIntvlBtwnRelshpInPct` |
| `TimeInterval` | `TimeInterval` |
| `ObjectInternalID` | `ObjectInternalID` |
| `ObjectIsDeleted` | `ObjectIsDeleted` |
| `FactoryCalendar` | `FactoryCalendar` |
| `Plant` | `Plant` |
| `ProductionResourceInternalID` | `ProductionResourceInternalID` |
| `ProductionResource` | `ProductionResource` |
| `_SuccessorPhase` | *Association* |
| `_SuccessorOrder` | *Association* |
| `_PredecessorPhase` | *Association* |
| `_PredecessorOrder` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED //#('TRANSACTIONAL_DATA')

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #XL, dataClass: #TRANSACTIONAL}
@ObjectModel.sapObjectNodeType.name: 'ProcessOrderRelationship'

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@EndUserText.label: 'Process Order Relationship - TP'

define view entity I_ProcessOrderRelationshipTP
  as projection on R_ProcessOrderRelationshipTP as Relationship

{
      // Key
  key PredecessorOrderInternalID,
  key PredecessorPhaseInternalID,
  key SuccessorOrderInternalID,
  key SuccessorPhaseInternalID,
  key OrderPhaseRelationshipIntType,
      @Semantics.booleanIndicator: true
  key MaxTimeIntvlIsUsedForSchedg,

      // External ID of predecessor
      PredecessorOrder,
      PredecessorOrderPhase,

      // External ID of successor
      SuccessorOrder,
      SuccessorOrderPhase,

      @Consumption.hidden: true // for DCLS
      ManufacturingOrderCategory,

      // Time interval Duration
      PhaseRelshpTimeIntervalUnit,
      @Semantics.quantity.unitOfMeasure: 'PhaseRelshpTimeIntervalUnit'
      PhaseRelshpTimeIntervalDurn,
      @Semantics.quantity.unitOfMeasure: 'PhaseRelshpTimeIntervalUnit'
      PhaseRelshpTimeIntervalDurnMax,
      TimeIntvlBtwnRelshpInPct,
      TimeInterval,

      // Others
      ObjectInternalID,
      ObjectIsDeleted, // not changeable - deprecate/remove in subsequent version
      FactoryCalendar,
      Plant,
      ProductionResourceInternalID,
      ProductionResource,

      // Relations
      _SuccessorPhase   : redirected to parent I_ProcessOrderPhaseTP,
      _SuccessorOrder   : redirected to I_ProcessOrderTP,
      _PredecessorPhase : redirected to I_ProcessOrderPhaseTP,
      _PredecessorOrder : redirected to I_ProcessOrderTP
}
```
