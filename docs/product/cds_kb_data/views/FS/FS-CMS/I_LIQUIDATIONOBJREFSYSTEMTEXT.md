---
name: I_LIQUIDATIONOBJREFSYSTEMTEXT
description: "Liquidation Object Ref System - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONOBJREFSYSTEMTEXT')/$value
semantic_en: "Liquidation Object Ref System - Text"
semantic_vi: "Liquidation Object Ref System - Text — CDS view giao diện dựa trên tcms_liq_o_sys_t."
keywords:
  - "liquidation"
  - "object"
  - "ref"
  - "system"
  - "text"
  - "language"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_LIQUIDATIONOBJREFSYSTEMTEXT

**Liquidation Object Ref System - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONOBJREFSYSTEMTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LiquidationObjectRefSystem` | ✓ | |  | `objsystemid` | `CHAR(6)` | Object System Reference ID for Liquidation |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language in which Description is Required |
| `LiquidationObjRefSystemText` |  | |  | `name` | `CHAR(40)` | Object System Name |
| `_Language` | | ✓ | | | | |
| `_LiquidationObjectRefSystem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_LiquidationObjectRefSystem` | `I_LiquidationObjectRefSystem` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONOBJREFSYSTEMTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONOBJREFSYSTEMTEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILIQOBJREFSYSTXT',
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
    representativeKey: 'LiquidationObjectRefSystem'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Liquidation Object Ref System - Text'
define view I_LiquidationObjRefSystemText
  as select from tcms_liq_o_sys_t
  association [0..1] to I_Language                   as _Language                   on $projection.Language = _Language.Language
  association [0..1] to I_LiquidationObjectRefSystem as _LiquidationObjectRefSystem on $projection.LiquidationObjectRefSystem = _LiquidationObjectRefSystem.LiquidationObjectRefSystem
{
      @ObjectModel.foreignKey.association: '_LiquidationObjectRefSystem'
  key objsystemid as LiquidationObjectRefSystem,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key language    as Language,
      @Semantics.text: true
      name        as LiquidationObjRefSystemText,

      _Language,
      _LiquidationObjectRefSystem
}
```
