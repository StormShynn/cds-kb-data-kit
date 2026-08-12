---
name: I_COLLATERALVALUATIONTYPE
description: "Collateral Valuation Type"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALVALUATIONTYPE')/$value
semantic_en: "Collateral Valuation Type"
semantic_vi: "Collateral Valuation Type — CDS view giao diện dựa trên dd07l."
keywords:
  - "collateral"
  - "valuation"
  - "type"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLATERALVALUATIONTYPE

**Collateral Valuation Type**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALVALUATIONTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralValuationType` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as cms_dte_ind_valn_typ preserving type )` | `CHAR(2)` | Type of Valuation Check performed on Collateral Object |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CollateralValuationTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALVALUATIONTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALVALUATIONTYPE')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICOLVALNTYPE',
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
    representativeKey: 'CollateralValuationType'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Collateral Valuation Type'
define view I_CollateralValuationType
  as select from dd07l
  association [0..*] to I_CollateralValuationTypeText as _Text on $projection.CollateralValuationType = _Text.CollateralValuationType
{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 2) as cms_dte_ind_valn_typ preserving type ) as CollateralValuationType,

      _Text
}
where
      dd07l.domname  = 'CMS_VALN_TYP'
  and dd07l.as4local = 'A'
```
