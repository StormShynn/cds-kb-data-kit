---
name: I_AGREEMENTFREQUENCYUNITTEXT
description: "Agreement Frequency Unit - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTFREQUENCYUNITTEXT')/$value
semantic_en: "Agreement Frequency Unit - Text"
semantic_vi: "Agreement Frequency Unit - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "agreement"
  - "frequency"
  - "unit"
  - "text"
  - "language"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_AGREEMENTFREQUENCYUNITTEXT

**Agreement Frequency Unit - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTFREQUENCYUNITTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `AgreementFrequencyUnit` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as cms_dte_ind_cag_rel_freq_unit preserving type )` | `CHAR(2)` | The unit for period of Release Frequency |
| `AgreementFrequencyUnitText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |
| `_AgreementFrequencyUnit` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_AgreementFrequencyUnit` | `I_AgreementFrequencyUnit` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTFREQUENCYUNITTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTFREQUENCYUNITTEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ICAGFREQUNITTEXT',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:{
    dataCategory: #TEXT,
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'S',
        dataClass: 'CUSTOMIZING'
    },
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    representativeKey: 'AgreementFrequencyUnit'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Agreement Frequency Unit - Text'
define view I_AgreementFrequencyUnitText
  as select from dd07t
  association [0..1] to I_Language               as _Language               on $projection.Language = _Language.Language
  association [0..1] to I_AgreementFrequencyUnit as _AgreementFrequencyUnit on $projection.AgreementFrequencyUnit = _AgreementFrequencyUnit.AgreementFrequencyUnit
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key ddlanguage                                                                          as Language,
      @ObjectModel.foreignKey.association: '_AgreementFrequencyUnit'
  key cast(substring(domvalue_l, 1, 2) as cms_dte_ind_cag_rel_freq_unit preserving type ) as AgreementFrequencyUnit,
      @Semantics.text: true
      ddtext                                                                              as AgreementFrequencyUnitText,

      _Language,
      _AgreementFrequencyUnit
}
where
      dd07t.domname  = 'CMS_IND_CAG_FREQ_UNIT'
  and dd07t.as4local = 'A'
```
