---
name: I_STATISTICALKEYFIGURECATTEXT
description: "This CDS view provides the prerequisites for answering the following business questions: What’s the descriptive name of statistical key figure categories?"
app_component: CO-OM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STATISTICALKEYFIGURECATTEXT')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What’s the descriptive name of statistical key figure categories?"
semantic_vi: "Statistical Key Figure Category - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "statistical"
  - "key"
  - "figure"
  - "category"
  - "text"
  - "ststc"
  - "language"
  - "desc"
tags:
  - CO
  - bo:companycode
  - CO-OM
  - CO-OM-2CL
  - component:CO-OM-2CL
  - interface-view
  - lob:controlling
---
# I_STATISTICALKEYFIGURECATTEXT

**This CDS view provides the prerequisites for answering the following business questions: What’s the descriptive name of statistical key figure categories?**

| Property | Value |
|---|---|
| App Component | `CO-OM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STATISTICALKEYFIGURECATTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `StstcKeyFigCategory` | ✓ | |  | `cast( domvalue_l as grtyp )` | `CHAR(1)` | Statistical Key Figure Category |
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` | `LANG(1)` | Language Key |
| `StstcKeyFigCategoryDesc` |  | |  | `cast(ddtext as fis_grtyp_text)` | `CHAR(60)` | Statistical Key Figure Category Description |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STATISTICALKEYFIGURECATTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STATISTICALKEYFIGURECATTEXT')/$value)*

```abap
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'StstcKeyFigCategory' 
@EndUserText.label: 'Statistical Key Figure Category - Text'
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFISTSTKFIGCATT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.type: #INHERITED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #META
@AbapCatalog.buffering: {type: #NONE, numberOfKeyFields: 0, status: #NOT_ALLOWED}
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.compiler.compareFilter: true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,#LANGUAGE_DEPENDENT_TEXT]

define view I_StatisticalKeyFigureCatText as select from dd07t 
association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    key cast( domvalue_l as grtyp ) as StstcKeyFigCategory, 
    @Semantics.language
@ObjectModel.foreignKey.association: '_Language' //Inserted by VDM CDS Suite Plugin
    key cast( ddlanguage as spras ) as Language, 
    @Semantics.text
    cast(ddtext as fis_grtyp_text) as StstcKeyFigCategoryDesc,
    _Language
}
where domname = 'GRTYP' and as4local = 'A';
```
