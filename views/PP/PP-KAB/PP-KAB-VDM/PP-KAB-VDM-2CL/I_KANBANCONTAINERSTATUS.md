---
name: I_KANBANCONTAINERSTATUS
description: "Kanbancontainerstatus"
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
  - status
  - component:PP-KAB-VDM-2CL
  - lob:Manufacturing
---
# I_KANBANCONTAINERSTATUS

**Kanbancontainerstatus**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `KanbanContainerStatus` | ✓ | |  | `cast ( right(domvalue_l, 1) as pkbst preserving type)` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_KanbanContainerStatusText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPKNBNCTNSTS'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter:true 
@EndUserText.label: 'Kanban Container Status'

@Metadata.ignorePropagatedAnnotations: true
 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType: { sizeCategory: #S, serviceQuality: #A, dataClass: #META }
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.representativeKey: 'KanbanContainerStatus'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.sapObjectNodeType.name: 'KanbanContainerStatus'
@ClientHandling.algorithm: #SESSION_VARIABLE
 
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true

define view I_KanbanContainerStatus
  as select from dd07l
 
  association [0..*] to I_KanbanContainerStatusText as _Text on $projection.KanbanContainerStatus = _Text.KanbanContainerStatus
  
{
       @ObjectModel.text.association: '_Text'
  key cast ( right(domvalue_l, 1) as pkbst preserving type) as KanbanContainerStatus,

  _Text
}
where
      domname  = 'PKBST'
  and as4local = 'A'
```
