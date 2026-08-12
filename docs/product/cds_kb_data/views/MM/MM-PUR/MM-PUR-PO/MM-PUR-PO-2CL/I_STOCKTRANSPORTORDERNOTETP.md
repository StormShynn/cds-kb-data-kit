---
name: I_STOCKTRANSPORTORDERNOTETP
description: "Stocktransportordernotetp"
app_component: MM-PUR-PO-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-PO
  - interface-view
  - transactional-processing
  - transport
  - note
  - component:MM-PUR-PO-2CL
  - lob:Sourcing & Procurement
---
# I_STOCKTRANSPORTORDERNOTETP

**Stocktransportordernotetp**

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
| `TextObjectType` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `PlainLongText` |  | |  |  |  |  |
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
  semanticKey: ['StockTransportOrder', 'TextObjectType', 'Language'],
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}

@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #BLOCKED_DATA_EXCLUDED
}

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Note for Stock Transport Order - TP'

define view entity I_StockTransportOrderNoteTP
  as projection on R_StockTransportOrderNoteTP
{
  key StockTransportOrder,
  key TextObjectType,
  key Language,
      PlainLongText,

      /* Composition */
      _StockTransportOrder : redirected to parent I_StockTransportOrderTP,

      /* Associations */
      _Language
}
```
