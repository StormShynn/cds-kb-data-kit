---
name: I_RIGHTSOBJECTTYPE
description: "Rights Type"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RIGHTSOBJECTTYPE')/$value
semantic_en: "Rights Type"
semantic_vi: "Rights Type — CDS view giao diện dựa trên tcms_rig_typ."
keywords:
  - "rights"
  - "type"
  - "object"
  - "category"
  - "collateral"
  - "process"
  - "control"
tags:
  - FS
  - bo:salesorder
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_RIGHTSOBJECTTYPE

**Rights Type**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RIGHTSOBJECTTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RightsObjectCategory` | ✓ | |  | `rig_category` | `CHAR(6)` | Object Category |
| `RightsObjectType` | ✓ | |  | `rig_typ` | `CHAR(6)` | Right Type |
| `CollateralProcessControlKey` |  | |  | `proc_cky` | `CHAR(10)` | Process Control Key |
| `_RightsObjectCategory` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_CollateralProcessControlKey` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RightsObjectCategory` | `I_CollateralObjectCategory` | [0..1] |
| `_Text` | `I_RightsObjectTypeText` | [0..*] |
| `_CollateralProcessControlKey` | `I_CollateralProcessControlKey` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RIGHTSOBJECTTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RIGHTSOBJECTTYPE')/$value)*

```abap
@AbapCatalog: {
sqlViewName: 'IRIGHTSOBJTYP',
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
    representativeKey: 'RightsObjectType'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Rights Type'
define view I_RightsObjectType
  as select from tcms_rig_typ
  association [0..1] to I_CollateralObjectCategory    as _RightsObjectCategory        on  $projection.RightsObjectCategory = _RightsObjectCategory.CollateralObjectCategory
  association [0..*] to I_RightsObjectTypeText        as _Text                        on  $projection.RightsObjectCategory = _Text.RightsObjectCategory
                                                                                      and $projection.RightsObjectType     = _Text.RightsObjectType
  association [0..1] to I_CollateralProcessControlKey as _CollateralProcessControlKey on  $projection.CollateralProcessControlKey               = _CollateralProcessControlKey.CollateralProcessControlKey
                                                                                      and _CollateralProcessControlKey.CollateralProcessCtrlObj = 'OMS'
{
      @ObjectModel.foreignKey.association: '_RightsObjectCategory'
  key rig_category as RightsObjectCategory,
      @ObjectModel.text.association: '_Text'
  key rig_typ      as RightsObjectType,
      @ObjectModel.foreignKey.association: '_CollateralProcessControlKey'
      proc_cky     as CollateralProcessControlKey,

      _RightsObjectCategory,
      _Text,
      _CollateralProcessControlKey
}
```
