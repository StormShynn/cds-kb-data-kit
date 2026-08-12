---
name: I_AGREEMENTTERMNNTCFRQCY
description: "Agreement Termination Notice Frequency"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTTERMNNTCFRQCY')/$value
semantic_en: "Agreement Termination Notice Frequency"
semantic_vi: "Agreement Termination Notice Frequency — CDS view giao diện dựa trên dd07l."
keywords:
  - "agreement"
  - "termination"
  - "notice"
  - "frequency"
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
# I_AGREEMENTTERMNNTCFRQCY

**Agreement Termination Notice Frequency**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTTERMNNTCFRQCY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ColltrlAgrmtTermnNoticeFrqcy` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as cms_dte_ind_cag_notice_unit preserving type )` | `CHAR(2)` | The Unit for the Termination Notice Period |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AgreementTermnNtcFrqcyText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTTERMNNTCFRQCY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTTERMNNTCFRQCY')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICAGTNTCFRQCY',
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
    representativeKey: 'ColltrlAgrmtTermnNoticeFrqcy'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Agreement Termination Notice Frequency'
define view I_AgreementTermnNtcFrqcy
  as select from dd07l
  association [0..*] to I_AgreementTermnNtcFrqcyText as _Text on $projection.ColltrlAgrmtTermnNoticeFrqcy = _Text.ColltrlAgrmtTermnNoticeFrqcy
{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 2) as cms_dte_ind_cag_notice_unit preserving type ) as ColltrlAgrmtTermnNoticeFrqcy,

      _Text
}
where
      dd07l.domname  = 'CMS_IND_CAG_TIME_PRD_UNIT'
  and dd07l.as4local = 'A'
```
