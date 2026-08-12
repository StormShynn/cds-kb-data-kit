---
name: I_PNLEVENTCATEGORYTEXT
description: "Profit and Loss Event Category - Text"
app_component: LO-CMM-BF
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PNLEVENTCATEGORYTEXT')/$value
semantic_en: "Profit and Loss Event Category - Text"
semantic_vi: "Profit and Loss Event Category - Text — CDS view giao diện dựa trên cmm_tpl_ev_cat_t."
keywords:
  - "profit"
  - "and"
  - "loss"
  - "event"
  - "category"
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
# I_PNLEVENTCATEGORYTEXT

**Profit and Loss Event Category - Text**

| Property | Value |
|---|---|
| App Component | `LO-CMM-BF` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PNLEVENTCATEGORYTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PnLEventCategory` | ✓ | |  | `event_cat` | `CHAR(10)` | Profit and Loss Event Category |
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `PnLEventCategoryName` |  | |  | `description` | `CHAR(40)` | Profit and Loss Event Category Text |
| `_Language` | | ✓ | | | | |
| `_PnLEventCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_PnLEventCategory` | `I_PnLEventCategory` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PNLEVENTCATEGORYTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PNLEVENTCATEGORYTEXT')/$value)*

```abap
@EndUserText.label: 'Profit and Loss Event Category - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ITPLEVTCATT'
@ObjectModel.representativeKey: 'PnLEventCategory'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE]
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true

define view I_PnLEventCategoryText
  as select from cmm_tpl_ev_cat_t
   association [0..1] to I_Language as _Language  on $projection.Language = _Language.Language
   association [1..1] to I_PnLEventCategory  as _PnLEventCategory
       on $projection.PnLEventCategory = _PnLEventCategory.PnLEventCategory
{
   key event_cat as PnLEventCategory,
   @Semantics.language: true
   key langu as Language,
   @Semantics.text: true
   description as PnLEventCategoryName,
   _PnLEventCategory,
   _Language
  
}
```
