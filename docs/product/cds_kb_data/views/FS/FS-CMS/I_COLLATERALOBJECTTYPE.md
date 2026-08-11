---
name: I_COLLATERALOBJECTTYPE
description: "Collateral Object Type"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALOBJECTTYPE')/$value
semantic_en: "Collateral Object Type"
semantic_vi: "Collateral Object Type — CDS view giao diện dựa trên dd07l."
keywords:
  - "collateral"
  - "object"
  - "type"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLATERALOBJECTTYPE

**Collateral Object Type**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALOBJECTTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralObjectType` | ✓ | |  | `cast(substring(domvalue_l, 1, 3) as cms_dte_calc_obj_typ preserving type )` | `CHAR(3)` | CMS Object Type |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CollateralObjectTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALOBJECTTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALOBJECTTYPE')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICOLOBJTYPE',
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
    representativeKey: 'CollateralObjectType'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Collateral Object Type'
define view I_CollateralObjectType
  as select from dd07l
  association [0..*] to I_CollateralObjectTypeText as _Text on $projection.CollateralObjectType = _Text.CollateralObjectType
{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 3) as cms_dte_calc_obj_typ preserving type ) as CollateralObjectType,

      _Text
}
where
      dd07l.domname  = 'CMS_CALC_OBJ_TYP'
  and dd07l.as4local = 'A'
```
