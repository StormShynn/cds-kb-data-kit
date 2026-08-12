---
name: I_MOVABLEOBJECTTYPE
description: "Movable Type"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MOVABLEOBJECTTYPE')/$value
semantic_en: "Movable Type"
semantic_vi: "Movable Type — CDS view giao diện dựa trên tcms_mov_typ."
keywords:
  - "movable"
  - "type"
  - "object"
  - "category"
  - "collateral"
  - "process"
  - "control"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_MOVABLEOBJECTTYPE

**Movable Type**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MOVABLEOBJECTTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MovableObjectCategory` | ✓ | |  | `mov_category` | `CHAR(6)` | Object Category |
| `MovableObjectType` | ✓ | |  | `mov_typ` | `CHAR(6)` | Movable types |
| `CollateralProcessControlKey` |  | |  | `proc_cky` | `CHAR(10)` | Process Control Key |
| `_Text` | | ✓ | | | | |
| `_MovableObjectCategory` | | ✓ | | | | |
| `_CollateralProcessControlKey` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_MovableObjectTypeText` | [0..*] |
| `_MovableObjectCategory` | `I_CollateralObjectCategory` | [0..1] |
| `_CollateralProcessControlKey` | `I_CollateralProcessControlKey` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MOVABLEOBJECTTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MOVABLEOBJECTTYPE')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'IMOVOBJTYP',
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
    representativeKey: 'MovableObjectType'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Movable Type'
define view I_MovableObjectType
  as select from tcms_mov_typ
  association [0..*] to I_MovableObjectTypeText       as _Text                        on  $projection.MovableObjectCategory = _Text.MovableObjectCategory
                                                                                      and $projection.MovableObjectType     = _Text.MovableObjectType
  association [0..1] to I_CollateralObjectCategory    as _MovableObjectCategory       on  $projection.MovableObjectCategory = _MovableObjectCategory.CollateralObjectCategory

  association [0..1] to I_CollateralProcessControlKey as _CollateralProcessControlKey on  $projection.CollateralProcessControlKey               = _CollateralProcessControlKey.CollateralProcessControlKey
                                                                                      and _CollateralProcessControlKey.CollateralProcessCtrlObj = 'OMS'
{
      @ObjectModel.foreignKey.association: '_MovableObjectCategory'
  key mov_category as MovableObjectCategory,
      @ObjectModel.text.association: '_Text'
  key mov_typ      as MovableObjectType,
      @ObjectModel.foreignKey.association: '_CollateralProcessControlKey'
      proc_cky     as CollateralProcessControlKey,

      _Text,
      _MovableObjectCategory,
      _CollateralProcessControlKey
}
```
