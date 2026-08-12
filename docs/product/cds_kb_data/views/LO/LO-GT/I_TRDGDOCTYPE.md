---
name: I_TRDGDOCTYPE
description: "Trading Document Type"
app_component: LO-GT
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCTYPE')/$value
semantic_en: "Trading Document Type"
semantic_vi: "Trading Document Type — CDS view cơ bản dựa trên R_TrdgDocType."
keywords:
  - "trading"
  - "document"
  - "type"
  - "trdg"
  - "ctrl"
  - "purg"
tags:
  - LO
  - component:LO-GT
  - document
  - interface-view
  - LO-GT
  - lob:logistics general
---
# I_TRDGDOCTYPE

**Trading Document Type**

| Property | Value |
|---|---|
| App Component | `LO-GT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TradingDocumentType` | ✓ | |  |  | `CHAR(4)` | Reference Document Type |
| `TrdgDocCtrlGrpPurg` |  | |  |  | `CHAR(4)` | Control Group Purchasing for Trading Contracts |
| `TrdgDocCtrlGrpSls` |  | |  |  | `CHAR(4)` | Control Group Sales for Trading Contracts |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCTYPE')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Trading Document Type'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
  representativeKey: 'TradingDocumentType',
  modelingPattern: #NONE,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE],
  usageType: {
    dataClass:      #CUSTOMIZING,
    serviceQuality: #B,
    sizeCategory:   #S
  }
}
@Metadata.ignorePropagatedAnnotations: true

define root view entity I_TrdgDocType
  as select from R_TrdgDocType

  composition [0..*] of I_TrdgDocTypeText as _Text
{
      @ObjectModel.text.association: '_Text'
  key TradingDocumentType,
      TrdgDocCtrlGrpPurg,
      TrdgDocCtrlGrpSls,
      _Text
}
```
