---
name: I_MANUFACTURINGORDERLONGTEXT
description: "Manufacturingorderlongtext"
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
# I_MANUFACTURINGORDERLONGTEXT

**Manufacturingorderlongtext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ManufacturingOrder` | ✓ | |  | `cast(text.OrderID as manufacturingorder preserving type)` |  |  |
| `LongTextLanguage` | ✓ | |  |  |  |  |
| `ManufacturingOrderText` |  | |  | `OrderDescription` |  |  |
| `ManufacturingOrderLongText` |  | |  | `PlainLongText` |  |  |
| `_LongTextLanguage` | | ✓ | | | | |
| `_MfgOrder` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LongTextLanguage` | `I_Language` | [1..1] |
| `_MfgOrder` | `I_ManufacturingOrder` | [1..1] |

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
@EndUserText.label: 'Manufacturing Order - Text'

define view entity I_ManufacturingOrderLongText
    as select from I_OrderLongText as text
        inner join I_OrderBasic    as head on head.OrderID = text.OrderID

    association [1..1] to I_Language   as _LongTextLanguage on $projection.LongTextLanguage = _LongTextLanguage.Language
 -- to root:  Header
    association [1..1] to I_ManufacturingOrder as _MfgOrder on $projection.ManufacturingOrder = _MfgOrder.ManufacturingOrder
{
      // Key
      @ObjectModel.text.element: ['ManufacturingOrderText', 'ManufacturingOrderLongText']
  key cast(text.OrderID as manufacturingorder preserving type) as ManufacturingOrder,
      @Semantics.language: true
  key head.LongTextLanguage                                    as LongTextLanguage,

      //Text
      @Semantics.text: true
      head.OrderDescription                                    as ManufacturingOrderText,
      @Semantics.text: true
      text.PlainLongText                                       as ManufacturingOrderLongText,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_ROOT, #TO_COMPOSITION_PARENT]
      _MfgOrder,
      _LongTextLanguage
}
where 
  (  head.OrderCategory = '10' or
     head.OrderCategory = '40' ) and
     head.OrderHasLongText = 'X';
```
