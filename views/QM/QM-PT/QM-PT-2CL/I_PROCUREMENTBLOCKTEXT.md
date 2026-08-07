---
name: I_PROCUREMENTBLOCKTEXT
description: Procurementblocktext
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-PT
  - interface-view
  - text-view
  - text
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_PROCUREMENTBLOCKTEXT

**Procurementblocktext**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProcurementBlock` | ✓ | |  | `sperrfkt` |  |  |
| `Language` | ✓ | |  | `sprache` |  |  |
| `ProcurementBlockText` |  | |  | `cast( tq04s.kurztext as vdm_qprocurementblock_text preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_ProcurementBlock` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_ProcurementBlock` | `I_ProcurementBlock` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Procurement Block - Text'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel: {
    dataCategory: #TEXT,
    representativeKey: 'ProcurementBlock',
    usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING }
}
@Analytics.technicalName: 'IPROCMTBLOCKT'
@Metadata.ignorePropagatedAnnotations: true
define view entity I_ProcurementBlockText as select from tq04s 

  association [0..1] to I_Language as _Language
      on  $projection.Language = _Language.Language
      
  association [1..1] to I_ProcurementBlock as _ProcurementBlock
      on  $projection.ProcurementBlock = _ProcurementBlock.ProcurementBlock

{
  key tq04s.sperrfkt as ProcurementBlock, 
  @Semantics.language: true
  key tq04s.sprache as Language, 
  @Semantics.text: true
  cast( tq04s.kurztext as vdm_qprocurementblock_text preserving type  )      as ProcurementBlockText,

  /* Associations */
  _ProcurementBlock,
  _Language  
}
```
