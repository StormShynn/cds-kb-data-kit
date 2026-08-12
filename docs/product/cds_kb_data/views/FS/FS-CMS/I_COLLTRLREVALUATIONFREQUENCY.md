---
name: I_COLLTRLREVALUATIONFREQUENCY
description: "Valuation Frequency for Collateral RE"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREVALUATIONFREQUENCY')/$value
semantic_en: "Valuation Frequency for Collateral RE"
semantic_vi: "Valuation Frequency for Collateral RE — CDS view giao diện dựa trên dd07l."
keywords:
  - "valuation"
  - "frequency"
  - "for"
  - "collateral"
  - "colltrl"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLTRLREVALUATIONFREQUENCY

**Valuation Frequency for Collateral RE**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREVALUATIONFREQUENCY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ColltrlREValuationFrequency` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as cms_re_dte_ind_frequency preserving type )` | `CHAR(2)` | Indicator : Valuation Period |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ColltrlREValnFrequencyText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREVALUATIONFREQUENCY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREVALUATIONFREQUENCY')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICREVALNFRQCY',
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
    representativeKey: 'ColltrlREValuationFrequency'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Valuation Frequency for Collateral RE'
define view I_ColltrlREValuationFrequency
  as select from dd07l
  association [0..*] to I_ColltrlREValnFrequencyText as _Text on $projection.ColltrlREValuationFrequency = _Text.ColltrlREValuationFrequency
{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 2) as cms_re_dte_ind_frequency preserving type ) as ColltrlREValuationFrequency,

      _Text
}
where
      dd07l.domname  = 'CMS_RE_IND_FREQUENCY'
  and dd07l.as4local = 'A'
```
