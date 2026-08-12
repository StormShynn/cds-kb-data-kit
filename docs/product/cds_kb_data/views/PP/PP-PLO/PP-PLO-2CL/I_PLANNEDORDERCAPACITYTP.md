---
name: I_PLANNEDORDERCAPACITYTP
description: "Planned OrderCAPACITYTP"
app_component: PP-PLO-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-PLO
  - interface-view
  - transactional-processing
  - planned-order
  - component:PP-PLO-2CL
  - lob:Manufacturing
---
# I_PLANNEDORDERCAPACITYTP

**Planned OrderCAPACITYTP**

| Property | Value |
|---|---|
| App Component | `PP-PLO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PlannedOrder` | ✓ | |  |  |  |  |
| `CapacityRequirement` | ✓ | |  |  |  |  |
| `CapacityRequirementItem` | ✓ | |  |  |  |  |
| `CapacityRqmtItemCapacity` | ✓ | |  |  |  |  |
| `Sequence` |  | |  |  |  |  |
| `Operation` |  | |  |  |  |  |
| `SubOperation` |  | |  |  |  |  |
| `WorkCenter` |  | |  |  |  |  |
| `MRPController` |  | |  |  |  |  |
| `MRPPlant` |  | |  |  |  |  |
| `OperationLatestStartDate` |  | |  |  |  |  |
| `OperationLatestStartTime` |  | |  |  |  |  |
| `OperationLatestEndDate` |  | |  |  |  |  |
| `OperationLatestEndTime` |  | |  |  |  |  |
| `OperationEarliestStartDate` |  | |  |  |  |  |
| `OperationEarliestStartTime` |  | |  |  |  |  |
| `OperationEarliestEndDate` |  | |  |  |  |  |
| `OperationEarliestEndTime` |  | |  |  |  |  |
| `OpLtstSchedldProcgStrtDte` |  | |  |  |  |  |
| `OpLtstSchedldProcgStrtTme` |  | |  |  |  |  |
| `OpLtstSchedldTrdwnStrtDte` |  | |  |  |  |  |
| `OpLtstSchedldTrdwnStrtTme` |  | |  |  |  |  |
| `CapacityRequirementUnit` |  | |  |  |  |  |
| `ScheduledCapReqOpSegSetupDurn` |  | |  |  |  |  |
| `RemainingCapReqOpSegSetupDurn` |  | |  |  |  |  |
| `ScheduledCapReqOpSegProcgDurn` |  | |  |  |  |  |
| `RemainingCapReqOpSegProcgDurn` |  | |  |  |  |  |
| `ScheduledCapReqOpSegTrdwnDurn` |  | |  |  |  |  |
| `RemainingCapReqOpSegTrdwnDurn` |  | |  |  |  |  |
| `WrkCtrHasLeadingCapacity` |  | |  |  |  |  |
| `OperationText` |  | |  |  |  |  |
| `PlannedOrderLastChangeDateTime` |  | |  |  |  |  |
| `WorkCenterText` |  | |  |  |  |  |
| `MRPControllerName` |  | |  |  |  |  |
| `PlantName` |  | |  |  |  |  |
| `I_PlannedOrderTP` |  | |  | `PlannedOrderCapacity._PlannedOrder : redirected to parent I_PlannedOrderTP` |  |  |

## Source Code

```abap
@EndUserText.label: 'Interface for Capacity entity of BO PlannedOrder - TP'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #MIXED}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

define view entity I_PlannedOrderCapacityTP
  as projection on R_PlannedOrderCapacityTP as PlannedOrderCapacity
{
  key PlannedOrderCapacity.PlannedOrder,
  key PlannedOrderCapacity.CapacityRequirement,
  key PlannedOrderCapacity.CapacityRequirementItem,
  key PlannedOrderCapacity.CapacityRqmtItemCapacity,

      // Basic information
      PlannedOrderCapacity.Sequence,
      PlannedOrderCapacity.Operation,
      @EndUserText.label: 'SubOperation'
      PlannedOrderCapacity.SubOperation,
      @ObjectModel.text.element: ['WorkCenterText']
      PlannedOrderCapacity.WorkCenter,
      @ObjectModel.text.element: ['MRPControllerName']
      PlannedOrderCapacity.MRPController, // - Make it read only in BDEF
      @ObjectModel.text.element: ['PlantName']
      PlannedOrderCapacity.MRPPlant,      // - Make it read only in BDEF

      PlannedOrderCapacity.OperationLatestStartDate,
      PlannedOrderCapacity.OperationLatestStartTime,
      PlannedOrderCapacity.OperationLatestEndDate,
      PlannedOrderCapacity.OperationLatestEndTime,

      PlannedOrderCapacity.OperationEarliestStartDate,
      PlannedOrderCapacity.OperationEarliestStartTime,
      PlannedOrderCapacity.OperationEarliestEndDate,
      PlannedOrderCapacity.OperationEarliestEndTime,
      
      @EndUserText.label: 'Processing Start Date'
      PlannedOrderCapacity.OpLtstSchedldProcgStrtDte,
      @EndUserText.label: 'Processing Start Date'
      PlannedOrderCapacity.OpLtstSchedldProcgStrtTme,
      PlannedOrderCapacity.OpLtstSchedldTrdwnStrtDte,
      PlannedOrderCapacity.OpLtstSchedldTrdwnStrtTme,

      // Capacity durations
      //@Semantics.unitOfMeasure: true
      PlannedOrderCapacity.CapacityRequirementUnit,
      PlannedOrderCapacity.ScheduledCapReqOpSegSetupDurn,
      PlannedOrderCapacity.RemainingCapReqOpSegSetupDurn,
      PlannedOrderCapacity.ScheduledCapReqOpSegProcgDurn,
      PlannedOrderCapacity.RemainingCapReqOpSegProcgDurn,
      PlannedOrderCapacity.ScheduledCapReqOpSegTrdwnDurn,
      PlannedOrderCapacity.RemainingCapReqOpSegTrdwnDurn,

      PlannedOrderCapacity.WrkCtrHasLeadingCapacity,
      @Consumption.filter.hidden: true
      PlannedOrderCapacity.OperationText,
      
      @Consumption.filter.hidden: true
      PlannedOrderCapacity.PlannedOrderLastChangeDateTime,
      
      //exposing below fields for custom ui service
      @Consumption.filter.hidden: true
      PlannedOrderCapacity.WorkCenterText,
      @Consumption.filter.hidden: true
      PlannedOrderCapacity.MRPControllerName,
      @Consumption.filter.hidden: true
      PlannedOrderCapacity.PlantName,
      
      PlannedOrderCapacity._PlannedOrder : redirected to parent I_PlannedOrderTP
}
```
