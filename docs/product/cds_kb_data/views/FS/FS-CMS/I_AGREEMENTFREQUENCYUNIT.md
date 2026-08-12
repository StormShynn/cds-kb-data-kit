---
name: I_AGREEMENTFREQUENCYUNIT
description: "Agreement Frequency Unit"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTFREQUENCYUNIT')/$value
semantic_en: "Agreement Frequency Unit"
semantic_vi: "Agreement Frequency Unit — CDS view giao diện dựa trên dd07l."
keywords:
  - "agreement"
  - "frequency"
  - "unit"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_AGREEMENTFREQUENCYUNIT

**Agreement Frequency Unit**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTFREQUENCYUNIT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AgreementFrequencyUnit` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as cms_dte_ind_cag_rel_freq_unit preserving type )` | `CHAR(2)` | The unit for period of Release Frequency |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AgreementFrequencyUnitText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTFREQUENCYUNIT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTFREQUENCYUNIT')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICAGFREQUNIT',
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
    representativeKey: 'AgreementFrequencyUnit'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Agreement Frequency Unit'
define view I_AgreementFrequencyUnit
  as select from dd07l
  association [0..*] to I_AgreementFrequencyUnitText as _Text on $projection.AgreementFrequencyUnit = _Text.AgreementFrequencyUnit
{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 2) as cms_dte_ind_cag_rel_freq_unit preserving type ) as AgreementFrequencyUnit,

      _Text
}
where
      dd07l.domname  = 'CMS_IND_CAG_FREQ_UNIT'
  and dd07l.as4local = 'A'
```
