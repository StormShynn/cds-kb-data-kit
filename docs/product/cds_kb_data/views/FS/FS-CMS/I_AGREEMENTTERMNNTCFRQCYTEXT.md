---
name: I_AGREEMENTTERMNNTCFRQCYTEXT
description: "Agreement Termination Notice Freq - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTTERMNNTCFRQCYTEXT')/$value
semantic_en: "Agreement Termination Notice Freq - Text"
semantic_vi: "Agreement Termination Notice Freq - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "agreement"
  - "termination"
  - "notice"
  - "freq"
  - "text"
  - "language"
  - "colltrl"
  - "agrmt"
  - "termn"
  - "frqcy"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_AGREEMENTTERMNNTCFRQCYTEXT

**Agreement Termination Notice Freq - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTTERMNNTCFRQCYTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `ColltrlAgrmtTermnNoticeFrqcy` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as cms_dte_ind_cag_notice_unit preserving type )` | `CHAR(2)` | The Unit for the Termination Notice Period |
| `ColltrlAgrmtTermnNtcFrqcyTxt` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |
| `_ColltrlAgrmtTermnNoticeFrqcy` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_ColltrlAgrmtTermnNoticeFrqcy` | `I_AgreementTermnNtcFrqcy` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTTERMNNTCFRQCYTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTTERMNNTCFRQCYTEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ICAGTNTCFRQCYTXT',
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
    representativeKey: 'ColltrlAgrmtTermnNoticeFrqcy'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Agreement Termination Notice Freq - Text'
define view I_AgreementTermnNtcFrqcyText
  as select from dd07t
  association [0..1] to I_Language               as _Language                     on $projection.Language = _Language.Language
  association [0..1] to I_AgreementTermnNtcFrqcy as _ColltrlAgrmtTermnNoticeFrqcy on $projection.ColltrlAgrmtTermnNoticeFrqcy = _ColltrlAgrmtTermnNoticeFrqcy.ColltrlAgrmtTermnNoticeFrqcy
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key ddlanguage                                                                        as Language,
      @ObjectModel.foreignKey.association: '_ColltrlAgrmtTermnNoticeFrqcy'
  key cast(substring(domvalue_l, 1, 2) as cms_dte_ind_cag_notice_unit preserving type ) as ColltrlAgrmtTermnNoticeFrqcy,
      @Semantics.text: true
      ddtext                                                                            as ColltrlAgrmtTermnNtcFrqcyTxt,

      _Language,
      _ColltrlAgrmtTermnNoticeFrqcy
}
where
      dd07t.domname  = 'CMS_IND_CAG_TIME_PRD_UNIT'
  and dd07t.as4local = 'A'
```
