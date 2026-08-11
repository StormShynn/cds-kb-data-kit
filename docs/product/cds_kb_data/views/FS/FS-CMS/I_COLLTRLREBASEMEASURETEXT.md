---
name: I_COLLTRLREBASEMEASURETEXT
description: "Base Measure for Collateral RE - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREBASEMEASURETEXT')/$value
semantic_en: "Base Measure for Collateral RE - Text"
semantic_vi: "Base Measure for Collateral RE - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "base"
  - "measure"
  - "for"
  - "collateral"
  - "text"
  - "language"
  - "colltrl"
  - "real"
  - "estate"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLTRLREBASEMEASURETEXT

**Base Measure for Collateral RE - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREBASEMEASURETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `ColltrlRealEstateBaseMeasure` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as cms_re_dte_base_meas preserving type )` | `CHAR(1)` | Base Measure |
| `ColltrlREBaseMeasureText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |
| `_ColltrlREBaseMeasure` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_ColltrlREBaseMeasure` | `I_ColltrlREBaseMeasure` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREBASEMEASURETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREBASEMEASURETEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ICREBASEMSRETXT',
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
    representativeKey: 'ColltrlRealEstateBaseMeasure'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Base Measure for Collateral RE - Text'
define view I_ColltrlREBaseMeasureText
  as select from dd07t
  association [0..1] to I_Language              as _Language              on $projection.Language = _Language.Language
  association [0..1] to I_ColltrlREBaseMeasure as _ColltrlREBaseMeasure on $projection.ColltrlRealEstateBaseMeasure = _ColltrlREBaseMeasure.ColltrlRealEstateBaseMeasure
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key ddlanguage                                                                 as Language,
     @ObjectModel.foreignKey.association: '_ColltrlREBaseMeasure'
  key cast(substring(domvalue_l, 1, 1) as cms_re_dte_base_meas preserving type ) as ColltrlRealEstateBaseMeasure,

      @Semantics.text: true
      ddtext                                                                     as ColltrlREBaseMeasureText,

      _Language,
     _ColltrlREBaseMeasure
}
where
      dd07t.domname  = 'CMS_RE_BASE_MEAS'
  and dd07t.as4local = 'A'
```
