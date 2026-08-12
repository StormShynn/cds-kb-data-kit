---
name: I_LIQUIDATIONPROCESSTYPETEXT
description: "Liquidation Process Type - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONPROCESSTYPETEXT')/$value
semantic_en: "Liquidation Process Type - Text"
semantic_vi: "Liquidation Process Type - Text — CDS view giao diện dựa trên tcms_liq_p_typ_t."
keywords:
  - "liquidation"
  - "process"
  - "type"
  - "text"
  - "language"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_LIQUIDATIONPROCESSTYPETEXT

**Liquidation Process Type - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONPROCESSTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LiquidationProcessType` | ✓ | |  | `liq_proc_typ` | `CHAR(6)` | Process Date Types |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language in which Description is Required |
| `LiquidationProcessTypeText` |  | |  | `name` | `CHAR(40)` | Data: Process date type |
| `_Language` | | ✓ | | | | |
| `_LiquidationProcessType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_LiquidationProcessType` | `I_LiquidationProcessType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONPROCESSTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONPROCESSTYPETEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILIQPTYPETXT',
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
    representativeKey: 'LiquidationProcessType'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Liquidation Process Type - Text'
define view I_LiquidationProcessTypeText
  as select from tcms_liq_p_typ_t
  association [0..1] to I_Language               as _Language               on $projection.Language = _Language.Language
  association [0..1] to I_LiquidationProcessType as _LiquidationProcessType on $projection.LiquidationProcessType = _LiquidationProcessType.LiquidationProcessType
{
      @ObjectModel.foreignKey.association: '_LiquidationProcessType'
  key liq_proc_typ as LiquidationProcessType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key language     as Language,
      @Semantics.text: true
      name         as LiquidationProcessTypeText,

      _Language,
      _LiquidationProcessType

}
```
