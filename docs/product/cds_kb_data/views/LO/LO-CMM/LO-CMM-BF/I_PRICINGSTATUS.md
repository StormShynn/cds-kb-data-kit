---
name: I_PRICINGSTATUS
description: "Pricing Status"
app_component: LO-CMM-BF
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRICINGSTATUS')/$value
semantic_en: "Pricing Status"
semantic_vi: "Pricing Status — CDS view giao diện dựa trên dd07l."
keywords:
  - "pricing"
  - "status"
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
---
# I_PRICINGSTATUS

**Pricing Status**

| Property | Value |
|---|---|
| App Component | `LO-CMM-BF` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRICINGSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PricingStatus` | ✓ | |  | `cast ( substring( domvalue_l, 1, 2 ) as cmm_fbfix_status )` | `CHAR(2)` | Future/Basis Price Fixation Status |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PricingStatusText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRICINGSTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRICINGSTATUS')/$value)*

```abap
@EndUserText.label: 'Pricing Status'
@Analytics.dataCategory:#DIMENSION
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED //or #CHECK
@AbapCatalog.sqlViewName: 'IPRICINGSTATUS'
@ObjectModel.representativeKey: 'PricingStatus'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION]
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

define view I_PricingStatus
   as select from dd07l

   association [0..*] to I_PricingStatusText as _Text
        on $projection.PricingStatus = _Text.PricingStatus

{
@ObjectModel.text.association: '_Text'
 
      key cast ( substring( domvalue_l, 1, 2 ) as cmm_fbfix_status ) as PricingStatus,
      _Text

}

where domname  = 'CMM_FBFIX_STATUS'
  and as4local = 'A'
```
