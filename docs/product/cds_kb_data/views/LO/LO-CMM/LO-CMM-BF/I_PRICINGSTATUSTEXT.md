---
name: I_PRICINGSTATUSTEXT
description: "Pricing Status - Text"
app_component: LO-CMM-BF
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRICINGSTATUSTEXT')/$value
semantic_en: "Pricing Status - Text"
semantic_vi: "Pricing Status - Text — CDS view giao diện dựa trên cmm_fbfix_sttxt."
keywords:
  - "pricing"
  - "status"
  - "text"
  - "language"
  - "name"
  - "short"
tags:
  - LO
  - bo:pricingcondition
  - component:LO-CMM-BF
  - interface-view
  - LO-CMM
  - LO-CMM-BF
  - lob:logistics general
  - lob:sourcing & procurement
  - pricing
  - bo:companycode
---
# I_PRICINGSTATUSTEXT

**Pricing Status - Text**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRICINGSTATUSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PricingStatus` | ✓ | |  | `status` | `CHAR(2)` | Future/Basis Price Fixation Status |
| `Language` | ✓ | |  | `cast ( language as spras )` | `LANG(1)` | Language Key |
| `PricingStatusName` |  | |  | `ltxt` | `CHAR(50)` | Future/Basis Price Fixation Status - Long Text |
| `PricingStatusShortName` |  | |  | `stxt` | `CHAR(5)` | Future/Basis Price Fixation Status - Short Text |
| `_Language` | | ✓ | | | | |
| `_PricingStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_PricingStatus` | `I_PricingStatus` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRICINGSTATUSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRICINGSTATUSTEXT')/$value)*

```abap
@EndUserText.label: 'Pricing Status - Text'
//@Analytics.dataCategory: #TEXT
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED //or #CHECK
@AbapCatalog.sqlViewName: 'IPRICINGSTATUST'
@ObjectModel.representativeKey: 'PricingStatus'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE]
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

define view I_PricingStatusText
   as select from cmm_fbfix_sttxt

   association [0..1] to I_Language as _Language  on $projection.Language = _Language.Language
   association [1..1] to I_PricingStatus as _PricingStatus
       on $projection.PricingStatus = _PricingStatus.PricingStatus

{

   key status as PricingStatus,
   @Semantics.language: true
   key cast ( language as spras ) as Language,
   @Semantics.text: true
       ltxt as PricingStatusName,
       stxt as PricingStatusShortName,
       _PricingStatus,
       _Language
  
}
```
