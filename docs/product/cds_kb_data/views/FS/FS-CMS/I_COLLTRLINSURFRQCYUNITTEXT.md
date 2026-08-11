---
name: I_COLLTRLINSURFRQCYUNITTEXT
description: "Frequency Unit for Colltrl Insur - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLINSURFRQCYUNITTEXT')/$value
semantic_en: "Frequency Unit for Colltrl Insur - Text"
semantic_vi: "Frequency Unit for Colltrl Insur - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "frequency"
  - "unit"
  - "for"
  - "colltrl"
  - "insur"
  - "text"
  - "language"
  - "insurance"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLTRLINSURFRQCYUNITTEXT

**Frequency Unit for Colltrl Insur - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLINSURFRQCYUNITTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `ColltrlInsuranceFrequencyUnit` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as cms_dte_ins_freq_unit preserving type )` | `CHAR(2)` | Indicator: Units of time for revaluation |
| `ColltrlInsurFrequencyUnitText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |
| `_ColltrlInsurFrequencyUnit` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_ColltrlInsurFrequencyUnit` | `I_ColltrlInsurFrequencyUnit` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLINSURFRQCYUNITTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLINSURFRQCYUNITTEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ICINSFRQCYUNTTXT',
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
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
    representativeKey: 'ColltrlInsuranceFrequencyUnit'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Frequency Unit for Colltrl Insur - Text'
define view I_ColltrlInsurFrqcyUnitText
  as select from dd07t
  association [0..1] to I_Language                  as _Language                  on $projection.Language = _Language.Language
  association [0..1] to I_ColltrlInsurFrequencyUnit as _ColltrlInsurFrequencyUnit on $projection.ColltrlInsuranceFrequencyUnit = _ColltrlInsurFrequencyUnit.ColltrlInsuranceFrequencyUnit
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key ddlanguage                                                                  as Language,
      @ObjectModel.foreignKey.association: '_ColltrlInsurFrequencyUnit'
  key cast(substring(domvalue_l, 1, 2) as cms_dte_ins_freq_unit preserving type ) as ColltrlInsuranceFrequencyUnit,
      @Semantics.text: true
      ddtext                                                                      as ColltrlInsurFrequencyUnitText,

      _Language,
      _ColltrlInsurFrequencyUnit
}
where
      dd07t.domname  = 'CMS_INS_IND_FREQ_UNT'
  and dd07t.as4local = 'A'
```
