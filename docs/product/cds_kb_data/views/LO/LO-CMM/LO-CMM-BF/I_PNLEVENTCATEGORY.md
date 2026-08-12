---
name: I_PNLEVENTCATEGORY
description: "Profit and Loss Event Category"
app_component: LO-CMM-BF
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PNLEVENTCATEGORY')/$value
semantic_en: "Profit and Loss Event Category"
semantic_vi: "Profit and Loss Event Category — CDS view giao diện dựa trên cmm_tpl_evnt_cat."
keywords:
  - "profit"
  - "and"
  - "loss"
  - "event"
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
# I_PNLEVENTCATEGORY

**Profit and Loss Event Category**

| Property | Value |
|---|---|
| App Component | `LO-CMM-BF` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PNLEVENTCATEGORY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PnLEventCategory` | ✓ | |  | `event_cat` | `CHAR(10)` | Profit and Loss Event Category |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PnLEventCategoryText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PNLEVENTCATEGORY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PNLEVENTCATEGORY')/$value)*

```abap
@EndUserText.label: 'Profit and Loss Event Category'
@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ITPLEVTCAT'
@ObjectModel.representativeKey: 'PnLEventCategory'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION]
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true

define view I_PnLEventCategory
   as select from cmm_tpl_evnt_cat

   association [0..*] to I_PnLEventCategoryText as _Text
       on $projection.PnLEventCategory = _Text.PnLEventCategory
{
@ObjectModel.text.association: '_Text'

key cmm_tpl_evnt_cat.event_cat as PnLEventCategory,
_Text

}
```
