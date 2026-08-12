---
name: I_SETTLMTBLOCKINGREASONTEXT
description: "This CDS view is used to select the settlement blocking reason code."
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTBLOCKINGREASONTEXT')/$value
semantic_en: "This CDS view is used to select the settlement blocking reason code."
semantic_vi: "Settlement Blocking Reason - Text — CDS view cơ bản dựa trên tmsbt."
keywords:
  - "settlement"
  - "blocking"
  - "reason"
  - "text"
  - "settlmt"
  - "language"
  - "desc"
tags:
  - LO
  - bo:salesorder
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_SETTLMTBLOCKINGREASONTEXT

**This CDS view is used to select the settlement blocking reason code.**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTBLOCKINGREASONTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtBlockingReason` | ✓ | |  | `settlement_block` | `CHAR(2)` | Reason for Settlement Block |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `SettlmtBlockingReasonDesc` |  | |  | `text` | `CHAR(40)` | Description |
| `_SettlmtBlockingReason` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SettlmtBlockingReason` | `I_SettlmtBlockingReasonCode` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTBLOCKINGREASONTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTBLOCKINGREASONTEXT')/$value)*

```abap
@AbapCatalog: {
  sqlViewName: 'IWLFSMTBLRSNT', 
  compiler.compareFilter: true,
  preserveKey: true,
  buffering: {
     status: #ACTIVE,
     type: #GENERIC,
     numberOfKeyFields: 002
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
   dataCategory: #TEXT,
   modelingPattern:        #LANGUAGE_DEPENDENT_TEXT,
   supportedCapabilities:  [#LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
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
    internalName: #LOCAL
}   
@EndUserText.label: 'Settlement Blocking Reason - Text'
@Metadata.ignorePropagatedAnnotations: true

define view I_SettlmtBlockingReasonText 
as select from 
tmsbt 
association[0..1] to I_SettlmtBlockingReasonCode as _SettlmtBlockingReason on $projection.SettlmtBlockingReason  = _SettlmtBlockingReason.SettlmtBlockingReason 
association[0..1] to I_Language                  as _Language              on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_SettlmtBlockingReason'
    key settlement_block as SettlmtBlockingReason,
    
    @ObjectModel.foreignKey.association: '_Language'
    @Semantics.language: true
    key spras as Language,
    
    @Semantics.text: true
    text as SettlmtBlockingReasonDesc,
    
    //Associations
    _SettlmtBlockingReason,
    _Language  
}
```
