---
name: I_MFGORDEROPERATIONLONGTEXT
description: Mfgorderoperationlongtext
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
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
# I_MFGORDEROPERATIONLONGTEXT

**Mfgorderoperationlongtext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `MfgOrderInternalID` | `oper.OrderInternalBillOfOperations` |
| key `OrderOperationInternalID` | `oper.OrderIntBillOfOperationsItem` |
| key `LongTextLanguage` | `cast(oper.Language as pph_longtextlang preserving type)` |
| `ManufacturingOrder` | `cast(oper.ManufacturingOrder as co_aufnr preserving type)` |
| `ManufacturingOrderSequence` | `oper.ManufacturingOrderSequence` |
| `ManufacturingOrderOperation` | `oper.ManufacturingOrderOperation_2` |
| `MfgOrderOperationText` | `oper.MfgOrderOperationText` |
| `OrderOperationLongText` | `text.OrderOperationLongText` |
| `_LongTextLanguage` | *Association* |
| `_MfgOrder` | *Association* |
| `_MfgOrderOperation` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LongTextLanguage` | `I_Language` | [1..1] |
| `_MfgOrder` | `I_ManufacturingOrder` | [1..1] |
| `_MfgOrderOperation` | `I_ManufacturingOrderOperation` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #XL, dataClass: #MIXED}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Manufacturing Order Operation - Text'

define view entity I_MfgOrderOperationLongText
    as select from I_OrderOperationLongText as text
        inner join I_MfgOrderOperationBasic as oper on  oper.OrderInternalBillOfOperations = text.OrderInternalID
                                                    and oper.OrderIntBillOfOperationsItem  = text.OrderOperationInternalID

    association [1..1] to I_Language                    as _LongTextLanguage  on  $projection.LongTextLanguage = _LongTextLanguage.Language
--  to root: Header
    association [1..1] to I_ManufacturingOrder          as _MfgOrder          on  $projection.ManufacturingOrder = _MfgOrder.ManufacturingOrder
--  to parent: Operation
    association [1..1] to I_ManufacturingOrderOperation as _MfgOrderOperation on  $projection.MfgOrderInternalID       = _MfgOrderOperation.MfgOrderInternalID
                                                                              and $projection.OrderOperationInternalID = _MfgOrderOperation.OrderOperationInternalID
{
      // Key
  key oper.OrderInternalBillOfOperations                        as MfgOrderInternalID,
      @ObjectModel.text.element: ['MfgOrderOperationText', 'OrderOperationLongText']
  key oper.OrderIntBillOfOperationsItem                         as OrderOperationInternalID,
      @Semantics.language: true
  key cast(oper.Language as pph_longtextlang preserving type)   as LongTextLanguage,

      // Semantic key
      cast(oper.ManufacturingOrder as co_aufnr preserving type) as ManufacturingOrder,
      oper.ManufacturingOrderSequence                           as ManufacturingOrderSequence,
      @ObjectModel.text.element: ['MfgOrderOperationText', 'OrderOperationLongText']
      oper.ManufacturingOrderOperation_2                        as ManufacturingOrderOperation,

      // Text
      @Semantics.text: true
      oper.MfgOrderOperationText,
      @Semantics.text: true
      text.OrderOperationLongText,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_ROOT]
      _MfgOrder,
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT]     
      _MfgOrderOperation,
      _LongTextLanguage
}
where 
  oper.OperationHasLongText = 'X';
```
