---
name: I_SUPLRSETTLMTITEMSTDVH
description: "Supplier Settlement Item"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTITEMSTDVH')/$value
semantic_en: "Supplier Settlement Item"
semantic_vi: "Supplier Settlement Item — CDS view giao diện dựa trên I_SuplrSettlmtItem."
keywords:
  - "supplier"
  - "settlement"
  - "item"
  - "suplr"
  - "settlmt"
  - "customer"
  - "recipient"
  - "prior"
tags:
  - LO
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
  - supplier
---
# I_SUPLRSETTLMTITEMSTDVH

**Supplier Settlement Item**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTITEMSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrSettlmt` | ✓ | |  |  | `CHAR(10)` | Supplier Settlement |
| `SuplrSettlmtItem` | ✓ | |  |  | `NUMC(6)` | Document Item |
| `CustomerSettlmtRecipient` |  | |  |  | `CHAR(10)` | Customer Settlement Recipient |
| `PriorSupplier` |  | |  |  | `CHAR(10)` | Prior Supplier |
| `_SuplrSettlmt` | | ✓ | | | | |
| `_CustomerSettlmtRecipient` | | ✓ | | | | |
| `_PriorSupplier` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTITEMSTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTITEMSTDVH')/$value)*

```abap
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@ObjectModel.dataCategory: #VALUE_HELP
@Analytics.technicalName: 'IWLFSLRSMTIT_SVH'
@ObjectModel.representativeKey: 'SuplrSettlmtItem'
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER]

@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.sizeCategory: #XXL

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@Analytics.internalName: #LOCAL

@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@EndUserText.label: 'Supplier Settlement Item'

define view entity I_SuplrSettlmtItemStdVH
  as select from I_SuplrSettlmtItem
{
      @ObjectModel.foreignKey.association: '_SuplrSettlmt'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 1
      @Search.ranking: #HIGH
  key SuplrSettlmt,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
  key SuplrSettlmtItem,

      @Consumption.hidden: true
      CustomerSettlmtRecipient,
      @Consumption.hidden: true
      PriorSupplier,

      @Consumption.hidden: true
      _SuplrSettlmt,
      @Consumption.hidden: true
      _CustomerSettlmtRecipient,
      @Consumption.hidden: true
      _PriorSupplier
}
```
