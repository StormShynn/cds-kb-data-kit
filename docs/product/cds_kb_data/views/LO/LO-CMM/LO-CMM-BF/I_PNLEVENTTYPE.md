---
name: I_PNLEVENTTYPE
description: "Profit and Loss Event Type"
app_component: LO-CMM-BF
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PNLEVENTTYPE')/$value
semantic_en: "Profit and Loss Event Type"
semantic_vi: "Profit and Loss Event Type — CDS view giao diện dựa trên cmm_tpl_events."
keywords:
  - "profit"
  - "and"
  - "loss"
  - "event"
  - "type"
  - "category"
tags:
  - LO
  - bo:companycode
  - component:LO-CMM-BF
  - interface-view
  - LO-CMM
  - LO-CMM-BF
  - lob:logistics general
  - lob:sourcing & procurement
---
# I_PNLEVENTTYPE

**Profit and Loss Event Type**

| Property | Value |
|---|---|
| App Component | `LO-CMM-BF` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PNLEVENTTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PnLEventType` | ✓ | |  | `event` | `CHAR(10)` | Profit and Loss Event Type |
| `PnLEventCategory` |  | |  | `event_cat` | `CHAR(10)` | Profit and Loss Event Category |
| `_Text` | | ✓ | | | | |
| `_PnLEventCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PnLEventTypeText` | [0..*] |
| `_PnLEventCategory` | `I_PnLEventCategory` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PNLEVENTTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PNLEVENTTYPE')/$value)*

```abap
@EndUserText.label: 'Profit and Loss Event Type'
@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ITPLEVTTYP'
@ObjectModel.representativeKey: 'PnLEventType'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION]
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true

define view I_PnLEventType
   as select from cmm_tpl_events

  association [0..*] to I_PnLEventTypeText as _Text
       on $projection.PnLEventType = _Text.PnLEventType

  association [1..1] to I_PnLEventCategory  as _PnLEventCategory
       on $projection.PnLEventCategory = _PnLEventCategory.PnLEventCategory

{ 
@ObjectModel.text.association: '_Text'
key cmm_tpl_events.event as PnLEventType,
    cmm_tpl_events.event_cat as PnLEventCategory,
    _Text,
    _PnLEventCategory
}
```
