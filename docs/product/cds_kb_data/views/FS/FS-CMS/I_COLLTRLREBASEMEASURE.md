---
name: I_COLLTRLREBASEMEASURE
description: "Base Measure for Collateral Real Estate"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREBASEMEASURE')/$value
semantic_en: "Base Measure for Collateral Real Estate"
semantic_vi: "Base Measure for Collateral Real Estate — CDS view giao diện dựa trên dd07l."
keywords:
  - "base"
  - "measure"
  - "for"
  - "collateral"
  - "real"
  - "estate"
  - "colltrl"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLTRLREBASEMEASURE

**Base Measure for Collateral Real Estate**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREBASEMEASURE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ColltrlRealEstateBaseMeasure` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as cms_re_dte_base_meas preserving type )` | `CHAR(1)` | Base Measure |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ColltrlREBaseMeasureText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREBASEMEASURE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREBASEMEASURE')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICREBASEMEASURE',
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
    representativeKey: 'ColltrlRealEstateBaseMeasure'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Base Measure for Collateral Real Estate'
define view I_ColltrlREBaseMeasure
  as select from dd07l
  association [0..*] to I_ColltrlREBaseMeasureText as _Text on $projection.ColltrlRealEstateBaseMeasure = _Text.ColltrlRealEstateBaseMeasure
{
     @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 1) as cms_re_dte_base_meas preserving type ) as ColltrlRealEstateBaseMeasure,

     _Text
}
where
      dd07l.domname  = 'CMS_RE_BASE_MEAS'
  and dd07l.as4local = 'A'
```
