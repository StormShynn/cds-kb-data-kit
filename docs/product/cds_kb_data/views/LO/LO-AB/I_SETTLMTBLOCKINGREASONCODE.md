---
name: I_SETTLMTBLOCKINGREASONCODE
description: "This CDS view is used to select the settlement blocking reason code."
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTBLOCKINGREASONCODE')/$value
semantic_en: "This CDS view is used to select the settlement blocking reason code."
semantic_vi: "Settlement Blocking Reason Code — CDS view cơ bản dựa trên tmsb."
keywords:
  - "settlement"
  - "blocking"
  - "reason"
  - "code"
  - "settlmt"
tags:
  - LO
  - bo:salesorder
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_SETTLMTBLOCKINGREASONCODE

**This CDS view is used to select the settlement blocking reason code.**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTBLOCKINGREASONCODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtBlockingReason` | ✓ | |  | `settlement_block` | `CHAR(2)` | Reason for Settlement Block |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SettlmtBlockingReasonText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTBLOCKINGREASONCODE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTBLOCKINGREASONCODE')/$value)*

```abap
@AbapCatalog: {
  sqlViewName: 'IWLFSMTBLOCKRSN',
  compiler.compareFilter: true,
  preserveKey: true,
  buffering: {
     status: #ACTIVE,
     type: #GENERIC,
     numberOfKeyFields: 001
  }
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API 
}
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
   representativeKey: 'SettlmtBlockingReason',
   modelingPattern: #ANALYTICAL_DIMENSION,
   supportedCapabilities : [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #A,
     sizeCategory:   #S
   }
}
@ClientHandling: {
     type: #INHERITED,
     algorithm: #SESSION_VARIABLE
}
@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction.enabled: false,
    internalName: #LOCAL
}
@EndUserText.label: 'Settlement Blocking Reason Code'
@Metadata.ignorePropagatedAnnotations: true

define view I_SettlmtBlockingReasonCode
  as select from tmsb
  association [0..*] to I_SettlmtBlockingReasonText as _Text on $projection.SettlmtBlockingReason = _Text.SettlmtBlockingReason
{
      @ObjectModel.text.association: '_Text'
  key settlement_block as SettlmtBlockingReason,

      _Text
}
```
