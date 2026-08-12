---
name: I_OBJECTASSETVERIFICATIONFRQCY
description: "Object Asset Verification Frequency"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTASSETVERIFICATIONFRQCY')/$value
semantic_en: "Object Asset Verification Frequency"
semantic_vi: "Object Asset Verification Frequency — CDS view giao diện dựa trên dd07l."
keywords:
  - "object"
  - "asset"
  - "verification"
  - "frequency"
  - "frqcy"
tags:
  - FS
  - bo:companycode
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_OBJECTASSETVERIFICATIONFRQCY

**Object Asset Verification Frequency**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTASSETVERIFICATIONFRQCY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ObjectAssetVerificationFrqcy` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as cms_dte_ind_ast_verf_freq_unit preserving type )` | `CHAR(2)` | Indicator: Units of time for verification of an asset |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ObjAssetVerificationFrqcyTxt` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTASSETVERIFICATIONFRQCY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTASSETVERIFICATIONFRQCY')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'IOBJASTVFRQCY',
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
    representativeKey: 'ObjectAssetVerificationFrqcy'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Object Asset Verification Frequency'
define view I_ObjectAssetVerificationFrqcy
  as select from dd07l
  association [0..*] to I_ObjAssetVerificationFrqcyTxt as _Text on $projection.ObjectAssetVerificationFrqcy = _Text.ObjectAssetVerificationFrqcy
{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 2) as cms_dte_ind_ast_verf_freq_unit preserving type ) as ObjectAssetVerificationFrqcy,

      _Text
}
where
      dd07l.domname  = 'CMS_IND_AST_VERF_FREQ_UNIT'
  and dd07l.as4local = 'A'
```
