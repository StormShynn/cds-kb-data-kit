---
name: I_COLLATERALOBJECTTYPETEXT
description: "Collateral Object Type - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALOBJECTTYPETEXT')/$value
semantic_en: "Collateral Object Type - Text"
semantic_vi: "Collateral Object Type - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "collateral"
  - "object"
  - "type"
  - "text"
  - "language"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLATERALOBJECTTYPETEXT

**Collateral Object Type - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALOBJECTTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `CollateralObjectType` | ✓ | |  | `cast(substring(domvalue_l, 1, 3) as cms_dte_calc_obj_typ preserving type )` | `CHAR(3)` | CMS Object Type |
| `CollateralObjectTypeText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |
| `_CollateralObjectType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CollateralObjectType` | `I_CollateralObjectType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALOBJECTTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALOBJECTTYPETEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ICOLOBJTYPETXT',
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
    representativeKey: 'CollateralObjectType'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Collateral Object Type - Text'
define view I_CollateralObjectTypeText
  as select from dd07t
  association [0..1] to I_Language             as _Language             on $projection.Language = _Language.Language
  association [0..1] to I_CollateralObjectType as _CollateralObjectType on $projection.CollateralObjectType = _CollateralObjectType.CollateralObjectType
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key ddlanguage                                                                 as Language,
      @ObjectModel.foreignKey.association: '_CollateralObjectType'
  key cast(substring(domvalue_l, 1, 3) as cms_dte_calc_obj_typ preserving type ) as CollateralObjectType,
      @Semantics.text: true
      ddtext                                                                     as CollateralObjectTypeText,

      _Language,
      _CollateralObjectType
}
where
      dd07t.domname  = 'CMS_CALC_OBJ_TYP'
  and dd07t.as4local = 'A'
```
