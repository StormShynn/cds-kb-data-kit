---
name: I_SUPLRSETTLMTLISTITEMSTDVH
description: "Supplier Settlement List Item"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTLISTITEMSTDVH')/$value
semantic_en: "Supplier Settlement List Item"
semantic_vi: "Supplier Settlement List Item — CDS view giao diện dựa trên I_SuplrSettlmtListItem."
keywords:
  - "supplier"
  - "settlement"
  - "list"
  - "item"
  - "suplr"
  - "settlmt"
tags:
  - LO
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
  - supplier
---
# I_SUPLRSETTLMTLISTITEMSTDVH

**Supplier Settlement List Item**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTLISTITEMSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrSettlmtList` | ✓ | |  |  | `CHAR(10)` | Supplier Settlement List |
| `SuplrSettlmtListItem` | ✓ | |  |  | `NUMC(6)` | Item in List |
| `RefSettlmtDoc` |  | |  |  | `CHAR(10)` | Settlement Document Number |
| `_SuplrSettlmtList` | | ✓ | | | | |
| `_RefSettlmtDoc` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTLISTITEMSTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTLISTITEMSTDVH')/$value)*

```abap
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@ObjectModel.dataCategory: #VALUE_HELP
@Analytics.technicalName: 'IWLFSLRSTLIT_SVH'
@ObjectModel.representativeKey: 'SuplrSettlmtListItem'
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER]

@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.sizeCategory: #XL

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@Analytics.internalName: #LOCAL

@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@EndUserText.label: 'Supplier Settlement List Item'

define view entity I_SuplrSettlmtListItemStdVH
  as select from I_SuplrSettlmtListItem
{
      @ObjectModel.foreignKey.association: '_SuplrSettlmtList'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 1
      @Search.ranking: #HIGH
  key SuplrSettlmtList,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
  key SuplrSettlmtListItem,

      @Consumption.hidden: true
      RefSettlmtDoc,

      @Consumption.hidden: true
      _SuplrSettlmtList,
      @Consumption.hidden: true
      _RefSettlmtDoc
}
```
