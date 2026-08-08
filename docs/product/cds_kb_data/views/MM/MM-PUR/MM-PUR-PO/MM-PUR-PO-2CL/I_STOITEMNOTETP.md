---
name: I_STOITEMNOTETP
description: "Stoitemnotetp"
app_component: MM-PUR-PO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-PO
  - interface-view
  - transactional-processing
  - note
  - item-level
  - component:MM-PUR-PO-2CL
  - lob:Sourcing & Procurement
---
# I_STOITEMNOTETP

**Stoitemnotetp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-PO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `StockTransportOrder` | ✓ | |  |  |  |  |
| `StockTransportOrderItem` | ✓ | |  |  |  |  |
| `TextObjectType` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `PlainLongText` |  | |  |  |  |  |
| `STOItemUniqueID` |  | |  |  |  |  |
| `_StockTransportOrderItem` | | ✓ | | | | |
| `_StockTransportOrder` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

@ObjectModel: {
  usageType: {
    dataClass:      #TRANSACTIONAL,
    serviceQuality: #C,
    sizeCategory:   #L
  },

  modelingPattern: #TRANSACTIONAL_INTERFACE,
  semanticKey: ['StockTransportOrder', 'StockTransportOrderItem', 'TextObjectType', 'Language'],
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}

@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #BLOCKED_DATA_EXCLUDED
}

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Item Note for Stock Transport Order - TP'

define view entity I_STOItemNoteTP
  as projection on R_STOItemNoteTP
{
  key StockTransportOrder,
  key StockTransportOrderItem,
  key TextObjectType,
  key Language,

      PlainLongText,
      STOItemUniqueID,

      /* Composition */
      _StockTransportOrderItem : redirected to parent I_StockTransportOrderItemTP,
      _StockTransportOrder     : redirected to I_StockTransportOrderTP,

      /* Associations */
      _Language
}
```
