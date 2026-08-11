---
name: I_COLLATERALOBJECTCATEGORYTEXT
description: "Collateral Object Category - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALOBJECTCATEGORYTEXT')/$value
semantic_en: "Collateral Object Category - Text"
semantic_vi: "Collateral Object Category - Text — CDS view giao diện dựa trên tcms_oms_cat_t."
keywords:
  - "collateral"
  - "object"
  - "category"
  - "text"
  - "language"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLATERALOBJECTCATEGORYTEXT

**Collateral Object Category - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALOBJECTCATEGORYTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralObjectCategory` | ✓ | |  | `categoryid` | `CHAR(6)` | Object Category |
| `Language` | ✓ | |  | `langauge` | `LANG(1)` | Language Key |
| `CollateralObjectCategoryText` |  | |  | `name` | `CHAR(40)` | Object Category Name |
| `_Language` | | ✓ | | | | |
| `_CollateralObjectCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CollateralObjectCategory` | `I_CollateralObjectCategory` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALOBJECTCATEGORYTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALOBJECTCATEGORYTEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ICOLOBJCATTXT',
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
    representativeKey: 'CollateralObjectCategory'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Collateral Object Category - Text'
define view I_CollateralObjectCategoryText
  as select from tcms_oms_cat_t
  association [0..1] to I_Language                 as _Language                 on $projection.Language = _Language.Language
  association [0..1] to I_CollateralObjectCategory as _CollateralObjectCategory on $projection.CollateralObjectCategory = _CollateralObjectCategory.CollateralObjectCategory
{
      @ObjectModel.foreignKey.association: '_CollateralObjectCategory'
  key categoryid as CollateralObjectCategory,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key langauge   as Language,
      @Semantics.text: true
      name       as CollateralObjectCategoryText,

      _Language,
      _CollateralObjectCategory
}
```
