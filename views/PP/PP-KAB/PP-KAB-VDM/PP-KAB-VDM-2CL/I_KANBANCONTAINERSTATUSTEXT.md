---
name: I_KANBANCONTAINERSTATUSTEXT
description: Kanbancontainerstatustext
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
  - text-view
  - text
  - status
  - component:PP-KAB-VDM-2CL
  - lob:Manufacturing
---
# I_KANBANCONTAINERSTATUSTEXT

**Kanbancontainerstatustext**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `KanbanContainerStatus` | ✓ | |  | `pkbst` |
| `Language` | ✓ | |  | `spras` |
| `KnbnCtnStatusText` |  | |  | `cast(bhskt as bhskt_6)` |
| `KnbnCtnStatusText_2` |  | |  | `cast(bhskt as pk_ctn_status_text)` |
| `_KanbanContainerStatus` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_KanbanContainerStatus` | `I_KanbanContainerStatus` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPKNBNCTNSTSTXT'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Kanban Container Status - Text'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL

@Metadata.ignorePropagatedAnnotations: true
 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType: { sizeCategory: #S, serviceQuality: #A, dataClass: #META }
@ObjectModel.representativeKey: 'KanbanContainerStatus'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE
 
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics.dataExtraction.enabled: true

define view I_KanbanContainerStatusText
  as select from tpktx
 
  association [1..1] to I_KanbanContainerStatus as _KanbanContainerStatus on $projection.KanbanContainerStatus = _KanbanContainerStatus.KanbanContainerStatus
 
  association [0..1] to I_Language              as _Language              on $projection.Language              = _Language.Language
{
      @ObjectModel.foreignKey.association: '_KanbanContainerStatus'
  key pkbst              as KanbanContainerStatus,
      @Semantics.language: true
  key spras              as Language,
 
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'KnbnCtnStatusText_2'
      cast(bhskt as bhskt_6) as KnbnCtnStatusText,
      @Semantics.text: true
      cast(bhskt as pk_ctn_status_text) as KnbnCtnStatusText_2,
 
      _KanbanContainerStatus,
      _Language
}
```
