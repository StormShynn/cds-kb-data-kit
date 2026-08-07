---
name: I_KNBNCTRLCYCLECATEGORYSTDVH
description: Knbnctrlcyclecategorystdvh
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
  - value-help
  - standard-value-help
  - component:PP-KAB-VDM-2CL
  - lob:Manufacturing
---
# I_KNBNCTRLCYCLECATEGORYSTDVH

**Knbnctrlcyclecategorystdvh**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `KanbanControlCycleCategory` | ✓ | |  |  |
| `_Text` | | ✓ | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPKNBNCCCATSVH'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Kanban Control Cycle Category'

@Metadata.ignorePropagatedAnnotations:true

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'KanbanControlCycleCategory'
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.usageType: { sizeCategory: #S, serviceQuality: #A, dataClass: #CUSTOMIZING }
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@ObjectModel.resultSet.sizeCategory: #XS
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #COMPOSITE

define view I_KnbnCtrlCycleCategoryStdVH as select from I_KanbanControlCycleCategory {
  @ObjectModel.text.association: '_Text'
  @UI.textArrangement: #TEXT_ONLY
  key KanbanControlCycleCategory,
      _Text
}
```
