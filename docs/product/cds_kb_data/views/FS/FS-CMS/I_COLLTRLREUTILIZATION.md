---
name: I_COLLTRLREUTILIZATION
description: "Utilization for Collateral Real Estate"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREUTILIZATION')/$value
semantic_en: "Utilization for Collateral Real Estate"
semantic_vi: "Utilization for Collateral Real Estate — CDS view giao diện dựa trên dd07l."
keywords:
  - "utilization"
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
# I_COLLTRLREUTILIZATION

**Utilization for Collateral Real Estate**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREUTILIZATION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ColltrlRealEstateUtilization` | ✓ | |  | `cast(substring(domvalue_l, 1, 6) as cms_re_dte_prt_utilization preserving type )` | `CHAR(6)` | Utilization of the Object |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ColltrlREUtilizationText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREUTILIZATION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREUTILIZATION')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICREUTILZTN',
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
    representativeKey: 'ColltrlRealEstateUtilization'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Utilization for Collateral Real Estate'
define view I_ColltrlREUtilization
  as select from dd07l
  association [0..*] to I_ColltrlREUtilizationText as _Text on $projection.ColltrlRealEstateUtilization = _Text.ColltrlRealEstateUtilization

{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 6) as cms_re_dte_prt_utilization preserving type ) as ColltrlRealEstateUtilization,

      _Text
}
where
      dd07l.domname  = 'CMS_RE_UTIL'
  and dd07l.as4local = 'A'
```
