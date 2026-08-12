---
name: I_MFGORDERSEQUENCELONGTEXT
description: "Mfgordersequencelongtext"
app_component: PP-VDM-2CL
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
  - PP
  - PP-VDM
  - interface-view
  - text-view
  - text
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_MFGORDERSEQUENCELONGTEXT

**Mfgordersequencelongtext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
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
| `OrderInternalID` | ✓ | |  |  |  |  |
| `SequenceInternalID` | ✓ | |  |  |  |  |
| `LongTextLanguage` | ✓ | |  | `cast(seq.Language as pph_longtextlang preserving type)` |  |  |
| `ManufacturingOrder` |  | |  | `cast(seq.OrderID as manufacturingorder preserving type)` |  |  |
| `ManufacturingOrderSequence` |  | |  | `cast(seq.Sequence as manufacturingordersequence preserving type)` |  |  |
| `MfgOrderSequenceText` |  | |  | `SequenceText` |  |  |
| `OrderSequenceLongText` |  | |  |  |  |  |
| `_LongTextLanguage` | | ✓ | | | | |
| `_MfgOrder` | | ✓ | | | | |
| `_MfgOrderSequence` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LongTextLanguage` | `I_Language` | [1..1] |
| `_MfgOrder` | `I_ManufacturingOrder` | [1..1] |
| `_MfgOrderSequence` | `I_ManufacturingOrderSequence` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #XL, dataClass: #MIXED}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Manufacturing Order Sequence - Text'

define view entity I_MfgOrderSequenceLongText
    as select from I_OrderSequenceLongText as text
        inner join I_OrderSequence         as seq on  seq.OrderInternalID    = text.OrderInternalID
                                                  and seq.SequenceInternalID = text.SequenceInternalID

    association [1..1] to I_Language                    as _LongTextLanguage on  $projection.LongTextLanguage = _LongTextLanguage.Language
--  to root: Header
    association [1..1] to I_ManufacturingOrder          as _MfgOrder         on  $projection.ManufacturingOrder = _MfgOrder.ManufacturingOrder
--  to parent: Operation
    association [1..1] to I_ManufacturingOrderSequence  as _MfgOrderSequence on  $projection.ManufacturingOrder         = _MfgOrderSequence.ManufacturingOrder 
                                                                             and $projection.ManufacturingOrderSequence = _MfgOrderSequence.ManufacturingOrderSequence
{
      // Key
  key seq.OrderInternalID,
      @ObjectModel.text.element: ['MfgOrderSequenceText', 'OrderSequenceLongText']
  key seq.SequenceInternalID,
      @Semantics.language: true
  key cast(seq.Language as pph_longtextlang preserving type)           as LongTextLanguage,

      // Semantic key
      cast(seq.OrderID  as manufacturingorder preserving type)         as ManufacturingOrder,
      @ObjectModel.text.element: ['MfgOrderSequenceText', 'OrderSequenceLongText']
      cast(seq.Sequence as manufacturingordersequence preserving type) as ManufacturingOrderSequence,

      // Text
      @Semantics.text: true
      seq.SequenceText                                                 as MfgOrderSequenceText,
      @Semantics.text: true
      text.OrderSequenceLongText,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_ROOT]
      _MfgOrder,
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT]     
      _MfgOrderSequence,
      _LongTextLanguage
}
where 
  (  seq.OrderCategory = '10' or
     seq.OrderCategory = '40' ) and
     seq.SequenceHasLongText = 'X';
```
