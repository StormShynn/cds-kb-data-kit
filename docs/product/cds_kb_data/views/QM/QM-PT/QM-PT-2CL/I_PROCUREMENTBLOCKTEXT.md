---
name: I_PROCUREMENTBLOCKTEXT
description: "Procurementblocktext"
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
