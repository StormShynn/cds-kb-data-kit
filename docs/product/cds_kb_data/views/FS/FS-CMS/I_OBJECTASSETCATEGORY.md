---
name: I_OBJECTASSETCATEGORY
description: "Object Asset Category"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTASSETCATEGORY')/$value
semantic_en: "Object Asset Category"
semantic_vi: "Object Asset Category — CDS view giao diện dựa trên tcms_ast_cat."
keywords:
  - "object"
  - "asset"
  - "category"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_OBJECTASSETCATEGORY

**Object Asset Category**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTASSETCATEGORY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ObjectAssetCategory` | ✓ | |  | `categoryid` | `CHAR(6)` | Asset Category Identification No |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ObjectAssetCategoryText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTASSETCATEGORY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTASSETCATEGORY')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'IOBJASTCAT',
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
    representativeKey: 'ObjectAssetCategory'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Object Asset Category'
define view I_ObjectAssetCategory
  as select from tcms_ast_cat
  association [0..*] to I_ObjectAssetCategoryText as _Text on $projection.ObjectAssetCategory = _Text.ObjectAssetCategory
{
      @ObjectModel.text.association: '_Text'
  key categoryid as ObjectAssetCategory,

      _Text
}
```
