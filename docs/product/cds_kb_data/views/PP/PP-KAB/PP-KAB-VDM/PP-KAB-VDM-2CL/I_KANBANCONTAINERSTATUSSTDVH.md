---
name: I_KANBANCONTAINERSTATUSSTDVH
description: "Kanbancontainerstatusstdvh"
app_component: PP-KAB-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-KAB
  - PP-KAB-VDM
  - interface-view
  - value-help
  - standard-value-help
  - status
  - component:PP-KAB-VDM-2CL
  - lob:Manufacturing
---
# I_KANBANCONTAINERSTATUSSTDVH

**Kanbancontainerstatusstdvh**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `KanbanContainerStatus` | ✓ | |  |  |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPKNBNCTNSTSVH'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Kanban Container Status'

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'KanbanContainerStatus'
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType: { sizeCategory: #S, serviceQuality: #A, dataClass: #META }
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #COMPOSITE
@Metadata.ignorePropagatedAnnotations:true

define view I_KanbanContainerStatusStdVH as select from I_KanbanContainerStatus {
  @ObjectModel.text.association: '_Text'
  @UI.textArrangement: #TEXT_FIRST
  key KanbanContainerStatus,
      _Text
}
```
