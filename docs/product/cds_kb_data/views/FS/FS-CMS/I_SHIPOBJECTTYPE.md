---
name: I_SHIPOBJECTTYPE
description: "Ship Type"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SHIPOBJECTTYPE')/$value
semantic_en: "Ship Type"
semantic_vi: "Ship Type — CDS view giao diện dựa trên tcms_shp_typ."
keywords:
  - "ship"
  - "type"
  - "object"
  - "collateral"
  - "process"
  - "control"
tags:
  - FS
  - bo:purchaseorder
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_SHIPOBJECTTYPE

**Ship Type**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SHIPOBJECTTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ShipObjectType` | ✓ | |  | `shp_type` | `CHAR(6)` | Ship Type |
| `CollateralProcessControlKey` |  | |  | `proc_cky` | `CHAR(10)` | Process Control Key |
| `_Text` | | ✓ | | | | |
| `_CollateralProcessControlKey` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ShipObjectTypeText` | [0..*] |
| `_CollateralProcessControlKey` | `I_CollateralProcessControlKey` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SHIPOBJECTTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SHIPOBJECTTYPE')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ISHIPOBJTYPE',
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
    representativeKey: 'ShipObjectType'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Ship Type'
define view I_ShipObjectType
  as select from tcms_shp_typ
  association [0..*] to I_ShipObjectTypeText          as _Text                        on  $projection.ShipObjectType = _Text.ShipObjectType
  association [0..1] to I_CollateralProcessControlKey as _CollateralProcessControlKey on  $projection.CollateralProcessControlKey               = _CollateralProcessControlKey.CollateralProcessControlKey
                                                                                      and _CollateralProcessControlKey.CollateralProcessCtrlObj = 'OMS'
{
      @ObjectModel.text.association: '_Text'
  key shp_type as ShipObjectType,
      @ObjectModel.foreignKey.association: '_CollateralProcessControlKey'
      proc_cky as CollateralProcessControlKey,

      _Text,
      _CollateralProcessControlKey
}
```
