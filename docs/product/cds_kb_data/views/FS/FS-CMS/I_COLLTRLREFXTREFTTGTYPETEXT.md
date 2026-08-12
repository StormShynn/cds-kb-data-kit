---
name: I_COLLTRLREFXTREFTTGTYPETEXT
description: "Fxtre Fitting Type for Colltrl RE - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
