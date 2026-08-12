---
name: I_SETTLMTDOCITEMSTDVH
description: "This CDS view provides the standard value help of the settlement document item."
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCITEMSTDVH')/$value
semantic_en: "This CDS view provides the standard value help of the settlement document item."
semantic_vi: "Settlement Document Item — CDS view tổng hợp dựa trên I_SettlmtDocItem."
keywords:
  - "settlement"
  - "document"
  - "item"
  - "settlmt"
  - "customer"
  - "recipient"
  - "prior"
  - "supplier"
tags:
  - LO
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_SETTLMTDOCITEMSTDVH

**This CDS view provides the standard value help of the settlement document item.**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCITEMSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtDoc` | ✓ | |  |  | `CHAR(10)` | Settlement Document Number |
| `SettlmtDocItem` | ✓ | |  |  | `NUMC(6)` | Document Item |
| `CustomerSettlmtRecipient` |  | |  |  | `CHAR(10)` | Customer Settlement Recipient |
| `PriorSupplier` |  | |  |  | `CHAR(10)` | Prior Supplier |
| `_SettlmtDoc` | | ✓ | | | | |
| `_CustomerSettlmtRecipient` | | ✓ | | | | |
| `_PriorSupplier` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCITEMSTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCITEMSTDVH')/$value)*

```abap
@VDM: { 
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@ObjectModel: {
   dataCategory: #VALUE_HELP,
   representativeKey: 'SettlmtDocItem',
   modelingPattern:       #VALUE_HELP_PROVIDER,
  supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY ],
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #B,
     sizeCategory:   #XXL
   }
}
@Analytics.technicalName: 'IWLFSDOCIT_SVH'
@Search.searchable: true
@Analytics: {
    internalName: #LOCAL
}
@EndUserText.label: 'Settlement Document Item' 
@Metadata.ignorePropagatedAnnotations: true

define view entity I_SettlmtDocItemStdVH
  as select from I_SettlmtDocItem
{
      @ObjectModel.foreignKey.association: '_SettlmtDoc'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key SettlmtDoc,
  key SettlmtDocItem,

      @Consumption.hidden: true
      CustomerSettlmtRecipient,
      @Consumption.hidden: true
      PriorSupplier,

      @Consumption.hidden: true
      _SettlmtDoc,
      @Consumption.hidden: true
      _CustomerSettlmtRecipient,
      @Consumption.hidden: true
      _PriorSupplier
}
```
