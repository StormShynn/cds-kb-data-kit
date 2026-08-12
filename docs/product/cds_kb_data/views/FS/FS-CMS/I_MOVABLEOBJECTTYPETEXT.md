---
name: I_MOVABLEOBJECTTYPETEXT
description: "Movable Type - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MOVABLEOBJECTTYPETEXT')/$value
semantic_en: "Movable Type - Text"
semantic_vi: "Movable Type - Text — CDS view giao diện dựa trên tcms_mov_typ_t."
keywords:
  - "movable"
  - "type"
  - "text"
  - "object"
  - "category"
  - "language"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_MOVABLEOBJECTTYPETEXT

**Movable Type - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MOVABLEOBJECTTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MovableObjectCategory` | ✓ | |  | `mov_category` | `CHAR(6)` | Object Category |
| `MovableObjectType` | ✓ | |  | `mov_typ` | `CHAR(6)` | Movable types |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language in which description is needed |
| `MovableObjectTypeText` |  | |  | `name` | `CHAR(40)` | Name in a specified language |
| `_Language` | | ✓ | | | | |
| `_MovableObjectType` | | ✓ | | | | |
| `_MovableObjectCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_MovableObjectType` | `I_MovableObjectType` | [0..1] |
| `_MovableObjectCategory` | `I_CollateralObjectCategory` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MOVABLEOBJECTTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MOVABLEOBJECTTYPETEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'IMOVOBJTYPTXT',
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
    representativeKey: 'MovableObjectType'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Movable Type - Text'
define view I_MovableObjectTypeText
  as select from tcms_mov_typ_t
  association [0..1] to I_Language                 as _Language              on  $projection.Language = _Language.Language
  association [0..1] to I_MovableObjectType        as _MovableObjectType     on  $projection.MovableObjectCategory = _MovableObjectType.MovableObjectCategory
                                                                             and $projection.MovableObjectType     = _MovableObjectType.MovableObjectType
  association [0..1] to I_CollateralObjectCategory as _MovableObjectCategory on  $projection.MovableObjectCategory = _MovableObjectCategory.CollateralObjectCategory
{
      @ObjectModel.foreignKey.association: '_MovableObjectCategory'
  key mov_category as MovableObjectCategory,
      @ObjectModel.foreignKey.association: '_MovableObjectType'
  key mov_typ      as MovableObjectType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key language     as Language,
      @Semantics.text: true
      name         as MovableObjectTypeText,

      _Language,
      _MovableObjectType,
      _MovableObjectCategory
}
```
