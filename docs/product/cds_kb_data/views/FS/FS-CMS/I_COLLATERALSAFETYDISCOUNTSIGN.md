---
name: I_COLLATERALSAFETYDISCOUNTSIGN
description: "Collateral Safety Discount Sign"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALSAFETYDISCOUNTSIGN')/$value
semantic_en: "Collateral Safety Discount Sign"
semantic_vi: "Collateral Safety Discount Sign — CDS view giao diện dựa trên dd07l."
keywords:
  - "collateral"
  - "safety"
  - "discount"
  - "sign"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLATERALSAFETYDISCOUNTSIGN

**Collateral Safety Discount Sign**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALSAFETYDISCOUNTSIGN')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralSafetyDiscountSign` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as cms_re_dte_ind_sfty_disc preserving type )` | `CHAR(2)` | Indicates that the asset has a default sfty discount or not |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ColltrlSafetyDiscountSignTxt` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALSAFETYDISCOUNTSIGN')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALSAFETYDISCOUNTSIGN')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICOLSFTYDISSIGN',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:{
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'S',
        dataClass: 'CUSTOMIZING'
    },
    supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    representativeKey: 'CollateralSafetyDiscountSign'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Collateral Safety Discount Sign'
define view I_CollateralSafetyDiscountSign
  as select from dd07l
  association [0..*] to I_ColltrlSafetyDiscountSignTxt as _Text on $projection.CollateralSafetyDiscountSign = _Text.CollateralSafetyDiscountSign
{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 2) as cms_re_dte_ind_sfty_disc preserving type ) as CollateralSafetyDiscountSign,

      _Text
}
where
      dd07l.domname  = 'CMS_IND_SFTY'
  and dd07l.as4local = 'A'
```
