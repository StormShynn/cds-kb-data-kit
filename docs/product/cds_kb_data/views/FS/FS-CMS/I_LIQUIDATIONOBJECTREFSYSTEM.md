---
name: I_LIQUIDATIONOBJECTREFSYSTEM
description: "Liquidation Object Reference System"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONOBJECTREFSYSTEM')/$value
semantic_en: "Liquidation Object Reference System"
semantic_vi: "Liquidation Object Reference System — CDS view giao diện dựa trên tcms_liq_obj_sys."
keywords:
  - "liquidation"
  - "object"
  - "reference"
  - "system"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_LIQUIDATIONOBJECTREFSYSTEM

**Liquidation Object Reference System**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONOBJECTREFSYSTEM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LiquidationObjectRefSystem` | ✓ | |  | `objsystemid` | `CHAR(6)` | Object System Reference ID for Liquidation |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_LiquidationObjRefSystemText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONOBJECTREFSYSTEM')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONOBJECTREFSYSTEM')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ILIQOBJREFSYS',
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
    representativeKey: 'LiquidationObjectRefSystem'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Liquidation Object Reference System'
define view I_LiquidationObjectRefSystem
  as select from tcms_liq_obj_sys
  association [0..*] to I_LiquidationObjRefSystemText as _Text on $projection.LiquidationObjectRefSystem = _Text.LiquidationObjectRefSystem
{
      @ObjectModel.text.association: '_Text'
  key objsystemid as LiquidationObjectRefSystem,

      _Text
}
```
