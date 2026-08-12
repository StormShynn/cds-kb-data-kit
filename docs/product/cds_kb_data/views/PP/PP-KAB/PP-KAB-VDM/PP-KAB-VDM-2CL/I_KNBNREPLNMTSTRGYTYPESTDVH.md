---
name: I_KNBNREPLNMTSTRGYTYPESTDVH
description: "Knbnreplnmtstrgytypestdvh"
app_component: PP-KAB-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_KNBNREPLNMTSTRGYTYPESTDVH

**Knbnreplnmtstrgytypestdvh**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `KanbanReplenishmentStrgyType` | ✓ | |  |  |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPKNBNSTRTYPVH'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Kanban Replenishment Strategy Type'

@Metadata.ignorePropagatedAnnotations: true

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'KanbanReplenishmentStrgyType'
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #META }
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@ObjectModel.resultSet.sizeCategory: #XS
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #COMPOSITE

define view I_KnbnReplnmtStrgyTypeStdVH as select from I_KnbnReplnmtStrgyType {
@ObjectModel.text.association: '_Text'
@UI.textArrangement: #TEXT_ONLY
key KanbanReplenishmentStrgyType,
    _Text  
}
```
