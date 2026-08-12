---
name: I_OBJECTASSETCATEGORYTEXT
description: "Object Asset Category - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTASSETCATEGORYTEXT')/$value
semantic_en: "Object Asset Category - Text"
semantic_vi: "Object Asset Category - Text — CDS view giao diện dựa trên tcms_ast_cat_t."
keywords:
  - "object"
  - "asset"
  - "category"
  - "text"
  - "language"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_OBJECTASSETCATEGORYTEXT

**Object Asset Category - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTASSETCATEGORYTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ObjectAssetCategory` | ✓ | |  | `categoryid` | `CHAR(6)` | Asset Category Identification No |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language in which Description is Required |
| `ObjectAssetCategoryText` |  | |  | `name` | `CHAR(40)` |  Asset Category Name in a Specified Language |
| `_Language` | | ✓ | | | | |
| `_ObjectAssetCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_ObjectAssetCategory` | `I_ObjectAssetCategory` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTASSETCATEGORYTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTASSETCATEGORYTEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'IOBJASTCATTXT',
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
    representativeKey: 'ObjectAssetCategory'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Object Asset Category - Text'
define view I_ObjectAssetCategoryText
  as select from tcms_ast_cat_t
  association [0..1] to I_Language            as _Language            on $projection.Language = _Language.Language
  association [0..1] to I_ObjectAssetCategory as _ObjectAssetCategory on $projection.ObjectAssetCategory = _ObjectAssetCategory.ObjectAssetCategory
{
      @ObjectModel.foreignKey.association: '_ObjectAssetCategory'
  key categoryid as ObjectAssetCategory,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key language   as Language,
      @Semantics.text: true
      name       as ObjectAssetCategoryText,

      _Language,
      _ObjectAssetCategory
}
```
