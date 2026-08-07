---
name: I_MAINTORDEROPRELATIONSHIPTP
description: Maintorderoprelationshiptp
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MO
  - interface-view
  - transactional-processing
  - component:PM-WOC-MO-2CL
  - lob:Plant Maintenance
---
# I_MAINTORDEROPRELATIONSHIPTP

**Maintorderoprelationshiptp**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `MaintenanceOrder` | ✓ | |  |  |
| `MaintenanceOrderOperation` | ✓ | |  |  |
| `MaintenanceOrderSubOperation` | ✓ | |  |  |
| `MaintOrdOperationIsSuccessor` | ✓ | |  |  |
| `RelatedMaintenanceOrder` | ✓ | |  |  |
| `RelatedMaintOrderOperation` | ✓ | |  |  |
| `OrderOpRelationshipIntType` | ✓ | |  |  |
| `PredecessorMaintOrderRouting` |  | |  |  |
| `PredecessorOrderRoutingNode` |  | |  |  |
| `SuccessorMaintOrderRouting` |  | |  |  |
| `SuccessorOrderRoutingNode` |  | |  |  |
| `RelatedMaintOrderRouting` |  | |  |  |
| `RelatedOrderRoutingNode` |  | |  |  |
| `FactoryCalendar` |  | |  |  |
| `OpRelshpOffsetDuration` |  | |  |  |
| `OpRelshpOffsetDurationUnit` |  | |  |  |
| `OpRelshpEarliestStartDate` |  | |  |  |
| `OpRelshpEarliestStartTime` |  | |  |  |
| `OpRelationshipLatestStartDate` |  | |  |  |
| `OpRelationshipLatestStartTime` |  | |  |  |
| `OpRelshpEarliestFinishDate` |  | |  |  |
| `OpRelshpEarliestFinishTime` |  | |  |  |
| `OpRelshpLatestFinishDate` |  | |  |  |
| `OpRelshpLatestFinishTime` |  | |  |  |
| `_MaintenanceOrder` | | ✓ | | |
| `_MaintenanceOrderOperation` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Maintenance Order Relationship - TP'
@AccessControl: { authorizationCheck: #MANDATORY, personalData.blocking: #BLOCKED_DATA_EXCLUDED }
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #L, dataClass: #MIXED }
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

define view entity I_MaintOrderOpRelationshipTP
  as projection on R_MaintOrderOpRelationshipTP

{
  key MaintenanceOrder,
  key MaintenanceOrderOperation,
  key MaintenanceOrderSubOperation,
  key MaintOrdOperationIsSuccessor,
  key RelatedMaintenanceOrder,
  key RelatedMaintOrderOperation,
  key OrderOpRelationshipIntType,

      PredecessorMaintOrderRouting,
      PredecessorOrderRoutingNode,
      SuccessorMaintOrderRouting,
      SuccessorOrderRoutingNode,
      RelatedMaintOrderRouting,
      RelatedOrderRoutingNode,

      FactoryCalendar,
      @Semantics.quantity.unitOfMeasure: 'OpRelshpOffsetDurationUnit'
      OpRelshpOffsetDuration,
      OpRelshpOffsetDurationUnit,
      OpRelshpEarliestStartDate,
      OpRelshpEarliestStartTime,
      OpRelationshipLatestStartDate,
      OpRelationshipLatestStartTime,
      OpRelshpEarliestFinishDate,
      OpRelshpEarliestFinishTime,
      OpRelshpLatestFinishDate,
      OpRelshpLatestFinishTime,
      _MaintenanceOrder          : redirected to I_MaintenanceOrderTP,
      _MaintenanceOrderOperation : redirected to parent I_MaintenanceOrderOperationTP
}
```
