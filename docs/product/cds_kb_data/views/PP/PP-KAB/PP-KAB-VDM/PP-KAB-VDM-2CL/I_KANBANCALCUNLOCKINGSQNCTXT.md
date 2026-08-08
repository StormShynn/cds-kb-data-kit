---
name: I_KANBANCALCUNLOCKINGSQNCTXT
description: "Kanbancalcunlockingsqnctxt"
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
  - component:PP-KAB-VDM-2CL
  - lob:Manufacturing
---
# I_KANBANCALCUNLOCKINGSQNCTXT

**Kanbancalcunlockingsqnctxt**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `KanbanCalcUnlockingSequence` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as rfent)` |  |  |
| `Language` | ✓ | |  | `cast(ddlanguage as spras preserving type)` |  |  |
| `KanbanCalcUnlkngSqncName` |  | |  | `cast(ddtext as vdm_unlkngseq_text preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_KnbnCalcUnlkngSequence` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_KnbnCalcUnlkngSequence` | `I_KanbanCalcUnlockingSequence` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IKNBCLCUNLCSTX'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Kanban Calculation Unlocking Sequence - Text'

@Metadata.ignorePropagatedAnnotations: true

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'KanbanCalcUnlockingSequence'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #META }
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.dataCategory: #TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics.dataExtraction.enabled: true

define view I_KanbanCalcUnlockingSqncTxt
  as select from dd07t
  association [1..1] to I_KanbanCalcUnlockingSequence  as _KnbnCalcUnlkngSequence   on $projection.KanbanCalcUnlockingSequence = _KnbnCalcUnlkngSequence.KanbanCalcUnlockingSequence

  association [0..1] to I_Language                     as _Language                 on $projection.Language = _Language.Language


{
      @ObjectModel.foreignKey.association: '_KnbnCalcUnlkngSequence'
  key cast(substring(domvalue_l, 1, 1) as rfent)                    as KanbanCalcUnlockingSequence,
      @Semantics.language: true
  key cast(ddlanguage as spras preserving type)                     as Language,

      @Semantics.text: true
      cast(ddtext as vdm_unlkngseq_text preserving type)            as KanbanCalcUnlkngSqncName,
      
      @Consumption.hidden:true
      @Analytics.hidden:true
      domvalue_l as DomainValue,

      _KnbnCalcUnlkngSequence,
      _Language

}
where
      domname  = 'RFENT'
  and as4local = 'A';
```
