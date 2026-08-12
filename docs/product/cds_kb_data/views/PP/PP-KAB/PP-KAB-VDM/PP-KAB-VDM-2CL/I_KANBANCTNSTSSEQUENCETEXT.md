---
name: I_KANBANCTNSTSSEQUENCETEXT
description: "Kanbanctnstssequencetext"
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
  - text-view
  - text
  - component:PP-KAB-VDM-2CL
  - lob:Manufacturing
---
# I_KANBANCTNSTSSEQUENCETEXT

**Kanbanctnstssequencetext**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `KanbanContainerStatusSequence` | ✓ | |  | `pksfg` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `KnbnCtnStatusSequenceName` |  | |  | `sfkt` |  |  |
| `_KanbanContainerStsSequence` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_KanbanContainerStsSequence` | `I_KanbanContainerStsSequence` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IKNBCNTSTSSEQTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Kanban Container Status Sequence - Text'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL

@Metadata.ignorePropagatedAnnotations: true

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'KanbanContainerStatusSequence'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.dataCategory: #TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view I_KanbanCtnStsSequenceText 
  as select from tpksftx
   association [1..1] to I_KanbanContainerStsSequence as _KanbanContainerStsSequence on $projection.KanbanContainerStatusSequence = _KanbanContainerStsSequence.KanbanContainerStatusSequence
 
   association [0..1] to I_Language              as _Language              on $projection.Language = _Language.Language
{
   @ObjectModel.text.element: 'KnbnCtnStatusSequenceName'
  key pksfg  as KanbanContainerStatusSequence,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras  as Language,
      @Semantics.text: true
      sfkt as KnbnCtnStatusSequenceName,

      // Associations
      _KanbanContainerStsSequence,
      _Language
  
  
}
```
