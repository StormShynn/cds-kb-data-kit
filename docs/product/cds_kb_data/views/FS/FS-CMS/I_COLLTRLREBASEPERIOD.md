---
name: I_COLLTRLREBASEPERIOD
description: "Base Period for Collateral Real Estate"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREBASEPERIOD')/$value
semantic_en: "Base Period for Collateral Real Estate"
semantic_vi: "Base Period for Collateral Real Estate — CDS view giao diện dựa trên dd07l."
keywords:
  - "base"
  - "period"
  - "for"
  - "collateral"
  - "real"
  - "estate"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLTRLREBASEPERIOD

**Base Period for Collateral Real Estate**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREBASEPERIOD')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralRealEstateBasePeriod` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as cms_re_dte_base_period preserving type )` | `CHAR(1)` | Base period for the rent |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ColltrlREBasePeriodText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREBASEPERIOD')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREBASEPERIOD')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICREBASEPERIOD',
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
    modelingPattern: #ANALYTICAL_DIMENSION,                       
    representativeKey: 'CollateralRealEstateBasePeriod'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Base Period for Collateral Real Estate'
define view I_ColltrlREBasePeriod
  as select from dd07l
  association [0..*] to I_ColltrlREBasePeriodText as _Text on $projection.CollateralRealEstateBasePeriod = _Text.CollateralRealEstateBasePeriod
{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 1) as cms_re_dte_base_period preserving type ) as CollateralRealEstateBasePeriod,

      _Text
}
where
      dd07l.domname  = 'CMS_RE_BASE_PERIOD'
  and dd07l.as4local = 'A'
```
