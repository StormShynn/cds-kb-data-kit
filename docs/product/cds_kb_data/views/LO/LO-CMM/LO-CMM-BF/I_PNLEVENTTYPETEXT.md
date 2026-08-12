---
name: I_PNLEVENTTYPETEXT
description: "Profit and Loss Event Type - Text"
app_component: LO-CMM-BF
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PNLEVENTTYPETEXT')/$value
semantic_en: "Profit and Loss Event Type - Text"
semantic_vi: "Profit and Loss Event Type - Text — CDS view giao diện dựa trên cmm_tpl_events_t."
keywords:
  - "profit"
  - "and"
  - "loss"
  - "event"
  - "type"
  - "text"
  - "language"
  - "name"
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
# I_PNLEVENTTYPETEXT

**Profit and Loss Event Type - Text**

| Property | Value |
|---|---|
| App Component | `LO-CMM-BF` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PNLEVENTTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PnLEventType` | ✓ | |  | `event` | `CHAR(10)` | Profit and Loss Event Type |
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `PnLEventTypeName` |  | |  | `description` | `CHAR(40)` | Profit and Loss Event tEXT |
| `_Language` | | ✓ | | | | |
| `_PnLEventType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_PnLEventType` | `I_PnLEventType` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PNLEVENTTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PNLEVENTTYPETEXT')/$value)*

```abap
@EndUserText.label: 'Profit and Loss Event Type - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ITPLEVTTYPT'
@ObjectModel.representativeKey: 'PnLEventType'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE]
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true

define view I_PnLEventTypeText
  as select from cmm_tpl_events_t
  association [0..1] to I_Language     as _Language     on $projection.Language = _Language.Language
  association [1..1] to I_PnLEventType as _PnLEventType on $projection.PnLEventType = _PnLEventType.PnLEventType
{
  key event       as PnLEventType,
      @Semantics.language: true
  key langu       as Language,
      @Semantics.text: true
      description as PnLEventTypeName,
      _PnLEventType,
      _Language

}
```
