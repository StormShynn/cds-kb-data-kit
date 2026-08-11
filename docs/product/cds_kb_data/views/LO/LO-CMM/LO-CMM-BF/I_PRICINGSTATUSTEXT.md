---
name: I_PRICINGSTATUSTEXT
description: "Pricing Status - Text"
app_component: LO-CMM-BF
software_component: SAPSCORE
release_state: released
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
