---
name: I_OBJECTASSETLIQUIDATIONTYPE
description: "Object Asset Liquidation Type"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTASSETLIQUIDATIONTYPE')/$value
semantic_en: "Object Asset Liquidation Type"
semantic_vi: "Object Asset Liquidation Type — CDS view giao diện dựa trên tcms_ast_ltyp."
keywords:
  - "object"
  - "asset"
  - "liquidation"
  - "type"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_OBJECTASSETLIQUIDATIONTYPE

**Object Asset Liquidation Type**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTASSETLIQUIDATIONTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ObjectAssetLiquidationType` | ✓ | |  | `liqd_typ` | `CHAR(6)` | Liquidation Type |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ObjAssetLiquidationTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTASSETLIQUIDATIONTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTASSETLIQUIDATIONTYPE')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'IOBJASTLIQTYP',
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
    representativeKey: 'ObjectAssetLiquidationType'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Object Asset Liquidation Type'
define view I_ObjectAssetLiquidationType
  as select from tcms_ast_ltyp
  association [0..*] to I_ObjAssetLiquidationTypeText as _Text on $projection.ObjectAssetLiquidationType = _Text.ObjectAssetLiquidationType
{
      @ObjectModel.text.association: '_Text'
  key liqd_typ as ObjectAssetLiquidationType,

      _Text
}
```
