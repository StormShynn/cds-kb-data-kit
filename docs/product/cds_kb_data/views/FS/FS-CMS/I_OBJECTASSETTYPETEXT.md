---
name: I_OBJECTASSETTYPETEXT
description: "Asset Type - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTASSETTYPETEXT')/$value
semantic_en: "Asset Type - Text"
semantic_vi: "Asset Type - Text — CDS view giao diện dựa trên tcms_ast_typ_t."
keywords:
  - "asset"
  - "type"
  - "text"
  - "object"
  - "language"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_OBJECTASSETTYPETEXT

**Asset Type - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTASSETTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ObjectAssetType` | ✓ | |  | `ast_typ` | `CHAR(6)` | Asset Type |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language in which Description is Required |
| `ObjectAssetTypeText` |  | |  | `name` | `CHAR(40)` | Asset Type Name in a Specified Language |
| `_Language` | | ✓ | | | | |
| `_ObjectAssetType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_ObjectAssetType` | `I_ObjectAssetType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTASSETTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTASSETTYPETEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'IOBJASTTYPTXT',
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
    representativeKey: 'ObjectAssetType'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Asset Type - Text'
define view I_ObjectAssetTypeText
  as select from tcms_ast_typ_t
  association [0..1] to I_Language        as _Language        on $projection.Language = _Language.Language
  association [0..1] to I_ObjectAssetType as _ObjectAssetType on $projection.ObjectAssetType = _ObjectAssetType.ObjectAssetType
{
      @ObjectModel.foreignKey.association: '_ObjectAssetType'
  key ast_typ  as ObjectAssetType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key language as Language,
      @Semantics.text: true
      name     as ObjectAssetTypeText,

      _Language,
      _ObjectAssetType
}
```
