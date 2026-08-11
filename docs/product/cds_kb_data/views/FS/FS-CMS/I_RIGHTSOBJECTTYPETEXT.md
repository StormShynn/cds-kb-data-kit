---
name: I_RIGHTSOBJECTTYPETEXT
description: "Rights Type - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RIGHTSOBJECTTYPETEXT')/$value
semantic_en: "Rights Type - Text"
semantic_vi: "Rights Type - Text — CDS view giao diện dựa trên tcms_rig_typ_t."
keywords:
  - "rights"
  - "type"
  - "text"
  - "object"
  - "category"
  - "language"
tags:
  - FS
  - bo:salesorder
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_RIGHTSOBJECTTYPETEXT

**Rights Type - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RIGHTSOBJECTTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RightsObjectCategory` | ✓ | |  | `rig_category` | `CHAR(6)` | Object Category |
| `RightsObjectType` | ✓ | |  | `rig_typ` | `CHAR(6)` | Right Type |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language Key |
| `RightsObjectTypeText` |  | |  | `name` | `CHAR(40)` | Right  Type Name |
| `_RightsObjectCategory` | | ✓ | | | | |
| `_RightsObjectType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RightsObjectCategory` | `I_CollateralObjectCategory` | [0..1] |
| `_RightsObjectType` | `I_RightsObjectType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RIGHTSOBJECTTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RIGHTSOBJECTTYPETEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'IRIGHTSOBJTYPTXT',
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
    representativeKey: 'RightsObjectType'
}
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Rights Type - Text'
define view I_RightsObjectTypeText
  as select from tcms_rig_typ_t
  association [0..1] to I_CollateralObjectCategory as _RightsObjectCategory on  $projection.RightsObjectCategory = _RightsObjectCategory.CollateralObjectCategory
  association [0..1] to I_RightsObjectType         as _RightsObjectType     on  $projection.RightsObjectCategory   = _RightsObjectType.RightsObjectCategory
                                                                            and $projection.RightsObjectType = _RightsObjectType.RightsObjectType
  association [0..1] to I_Language                 as _Language             on  $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_RightsObjectCategory'
  key rig_category as RightsObjectCategory,
      @ObjectModel.foreignKey.association: '_RightsObjectType'
  key rig_typ      as RightsObjectType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key language     as Language,
      @Semantics.text: true
      name         as RightsObjectTypeText,

      _RightsObjectCategory,
      _RightsObjectType,
      _Language
}
```
