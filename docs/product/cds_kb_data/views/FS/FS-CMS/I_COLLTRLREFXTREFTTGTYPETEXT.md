---
name: I_COLLTRLREFXTREFTTGTYPETEXT
description: "Fxtre Fitting Type for Colltrl RE - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREFXTREFTTGTYPETEXT')/$value
semantic_en: "Fxtre Fitting Type for Colltrl RE - Text"
semantic_vi: "Fxtre Fitting Type for Colltrl RE - Text — CDS view giao diện dựa trên tcms_re_fx_fit_t."
keywords:
  - "fxtre"
  - "fitting"
  - "type"
  - "for"
  - "colltrl"
  - "text"
  - "fixture"
  - "language"
tags:
  - FS
  - bo:companycode
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLTRLREFXTREFTTGTYPETEXT

**Fxtre Fitting Type for Colltrl RE - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREFXTREFTTGTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ColltrlREFixtureFittingType` | ✓ | |  | `fix_fitting_type` | `CHAR(6)` | Fixtures and Fittings Type ID |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language in which description is needed |
| `ColltrlREFxtreFittingTypeText` |  | |  | `name` | `CHAR(40)` | Name in a specified language |
| `_Language` | | ✓ | | | | |
| `_ColltrlREFixtureFittingType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_ColltrlREFixtureFittingType` | `I_ColltrlREFixtureFittingType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREFXTREFTTGTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREFXTREFTTGTYPETEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ICREFIXFITTYPTXT',
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
    representativeKey: 'ColltrlREFixtureFittingType'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Fxtre Fitting Type for Colltrl RE - Text'
define view I_ColltrlREFxtreFttgTypeText
  as select from tcms_re_fx_fit_t
  association [0..1] to I_Language                     as _Language                     on $projection.Language = _Language.Language
  association [0..1] to I_ColltrlREFixtureFittingType as _ColltrlREFixtureFittingType on $projection.ColltrlREFixtureFittingType = _ColltrlREFixtureFittingType.ColltrlREFixtureFittingType
  {
      @ObjectModel.foreignKey.association: '_ColltrlREFixtureFittingType'
  key fix_fitting_type as ColltrlREFixtureFittingType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key language         as Language,
      @Semantics.text: true
      name             as ColltrlREFxtreFittingTypeText,

      _Language,
      _ColltrlREFixtureFittingType
}
```
