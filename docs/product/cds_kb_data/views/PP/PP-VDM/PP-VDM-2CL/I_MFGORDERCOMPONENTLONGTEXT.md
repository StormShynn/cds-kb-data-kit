---
name: I_MFGORDERCOMPONENTLONGTEXT
description: "Mfgordercomponentlongtext"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_MFGORDERCOMPONENTLONGTEXT

**Mfgordercomponentlongtext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Reservation` | ✓ | |  |  |  |  |
| `ReservationItem` | ✓ | |  |  |  |  |
| `RecordType` | ✓ | |  |  |  |  |
| `LongTextLanguage` | ✓ | |  | `cast(comp.LongTextLanguage as pph_longtextlang preserving type)` |  |  |
| `ManufacturingOrder` |  | |  | `cast(comp.OrderID as co_aufnr preserving type)` |  |  |
| `ManufacturingOrderSequence` |  | |  | `Sequence` |  |  |
| `ManufacturingOrderOperation` |  | |  | `OrderOperation` |  |  |
| `ManufacturingOrderComponent` |  | |  | `cast(comp.BillOfMaterialItemNumber as eam_order_component preserving type)` |  |  |
| `MaterialComponentText` |  | |  |  |  |  |
| `MaterialComponentSecondText` |  | |  |  |  |  |
| `OrderComponentLongText` |  | |  |  |  |  |
| `_LongTextLanguage` | | ✓ | | | | |
| `_MfgOrder` | | ✓ | | | | |
| `_MfgOrderComponent` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LongTextLanguage` | `I_Language` | [1..1] |
| `_MfgOrder` | `I_ManufacturingOrder` | [1..1] |
| `_MfgOrderComponent` | `I_ManufacturingOrderComponent` | [1..1] |

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
@EndUserText.label: 'Manufacturing Order Component - Text'

define view entity I_MfgOrderComponentLongText
    as select from I_OrderComponentLongText as text
        inner join I_OrderComponent         as comp on  comp.Reservation     = text.Reservation
                                                    and comp.ReservationItem = text.ReservationItem
                                                    and comp.RecordType      = text.RecordType

    association [1..1] to I_Language                    as _LongTextLanguage  on  $projection.LongTextLanguage = _LongTextLanguage.Language
--  to root: Header
    association [1..1] to I_ManufacturingOrder          as _MfgOrder          on  $projection.ManufacturingOrder = _MfgOrder.ManufacturingOrder
--  to parent: Operation
    association [1..1] to I_ManufacturingOrderComponent as _MfgOrderComponent on  $projection.Reservation     = _MfgOrderComponent.Reservation
                                                                              and $projection.ReservationItem = _MfgOrderComponent.ReservationItem
                                                                              and $projection.RecordType      = _MfgOrderComponent.ReservationRecordType
{
      // Key
  key comp.Reservation,
      @ObjectModel.text.element: ['MaterialComponentText', 'MaterialComponentSecondText', 'OrderComponentLongText']
  key comp.ReservationItem,
  key comp.RecordType,
      @Semantics.language: true
  key cast(comp.LongTextLanguage as pph_longtextlang preserving type)            as LongTextLanguage,

      // Semantic keys
      cast(comp.OrderID as co_aufnr preserving type)                             as ManufacturingOrder,
      comp.Sequence                                                              as ManufacturingOrderSequence,
      comp.OrderOperation                                                        as ManufacturingOrderOperation,
      @ObjectModel.text.element: ['MaterialComponentText', 'MaterialComponentSecondText', 'OrderComponentLongText']
      cast(comp.BillOfMaterialItemNumber as eam_order_component preserving type) as ManufacturingOrderComponent,

      // Text
      @Semantics.text: true
      comp.MaterialComponentText,
      @Semantics.text: true
      comp.MaterialComponentSecondText,
      @Semantics.text: true
      text.OrderComponentLongText,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_ROOT]
      _MfgOrder,
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT]     
      _MfgOrderComponent,
      _LongTextLanguage
}
where 
  (  comp.OrderCategory = '10' or
     comp.OrderCategory = '40' ) and
     comp.MaterialComponentHasLongText = 'X';
```
