---
name: I_COLLTRLREBASEPERIODTEXT
description: "Base Period for Collateral RE - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREBASEPERIODTEXT')/$value
semantic_en: "Base Period for Collateral RE - Text"
semantic_vi: "Base Period for Collateral RE - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "base"
  - "period"
  - "for"
  - "collateral"
  - "text"
  - "language"
  - "real"
  - "estate"
  - "colltrl"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLTRLREBASEPERIODTEXT

**Base Period for Collateral RE - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREBASEPERIODTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `CollateralRealEstateBasePeriod` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as cms_re_dte_base_period preserving type )` | `CHAR(1)` | Base period for the rent |
| `ColltrlREBasePeriodText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |
| `_ColltrlREBasePeriod` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_ColltrlREBasePeriod` | `I_ColltrlREBasePeriod` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREBASEPERIODTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREBASEPERIODTEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ICREBASEPERDTXT',
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
    representativeKey: 'CollateralRealEstateBasePeriod'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Base Period for Collateral RE - Text'
define view I_ColltrlREBasePeriodText
  as select from dd07t
  association [0..1] to I_Language             as _Language             on $projection.Language = _Language.Language
  association [0..1] to I_ColltrlREBasePeriod  as _ColltrlREBasePeriod  on $projection.CollateralRealEstateBasePeriod = _ColltrlREBasePeriod.CollateralRealEstateBasePeriod
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key ddlanguage                                                                   as Language,
      @ObjectModel.foreignKey.association: '_ColltrlREBasePeriod'
  key cast(substring(domvalue_l, 1, 1) as cms_re_dte_base_period preserving type ) as CollateralRealEstateBasePeriod,
      @Semantics.text: true
      ddtext                                                                       as ColltrlREBasePeriodText,

      _Language,
      _ColltrlREBasePeriod
}
where
      dd07t.domname  = 'CMS_RE_BASE_PERIOD'
  and dd07t.as4local = 'A'
```
