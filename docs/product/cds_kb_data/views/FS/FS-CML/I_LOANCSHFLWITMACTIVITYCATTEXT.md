---
name: I_LOANCSHFLWITMACTIVITYCATTEXT
description: "Loan Cash Flow Item Activity Category - Text"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCSHFLWITMACTIVITYCATTEXT')/$value
semantic_en: "Loan Cash Flow Item Activity Category - Text"
semantic_vi: "Loan Cash Flow Item Activity Category - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "loan"
  - "cash"
  - "flow"
  - "item"
  - "activity"
  - "category"
  - "text"
  - "language"
tags:
  - FS
  - component:FS-CML
  - FS-CML
  - interface-view
---
# I_LOANCSHFLWITMACTIVITYCATTEXT

**Loan Cash Flow Item Activity Category - Text**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCSHFLWITMACTIVITYCATTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `LoanCshFlwItmActivityCat` | ✓ | |  | `cast(substring(domvalue_l, 1, 4) as vorgtyp_lo preserving type)` | `CHAR(4)` | Activity Category (Posting Area) |
| `LoanCshFlwItmActivityCatText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |
| `_LoanCshFlwItmActivityCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_LoanCshFlwItmActivityCat` | `I_LoanCshFlwItmActivityCat` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCSHFLWITMACTIVITYCATTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCSHFLWITMACTIVITYCATTEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILCFIACTCATTXT',
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
    representativeKey: 'LoanCshFlwItmActivityCat'
}
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Cash Flow Item Activity Category - Text'
define view I_LoanCshFlwItmActivityCatText
  as select from dd07t
  association [0..1] to I_Language                 as _Language                 on $projection.Language = _Language.Language
  association [0..1] to I_LoanCshFlwItmActivityCat as _LoanCshFlwItmActivityCat on $projection.LoanCshFlwItmActivityCat = _LoanCshFlwItmActivityCat.LoanCshFlwItmActivityCat
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key ddlanguage                                                      as Language,
      @ObjectModel.foreignKey.association: '_LoanCshFlwItmActivityCat'
  key cast(substring(domvalue_l, 1, 4) as vorgtyp_lo preserving type) as LoanCshFlwItmActivityCat,

      @Semantics.text: true
      ddtext                                                          as LoanCshFlwItmActivityCatText,

      _Language,
      _LoanCshFlwItmActivityCat
}
where
      domname  = 'VORGTYP_LO'
  and as4local = 'A'
```
