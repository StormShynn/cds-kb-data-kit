---
name: I_LIQUIDATIONINITIATEDBYTEXT
description: "Liquidation Intiated By - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONINITIATEDBYTEXT')/$value
semantic_en: "Liquidation Intiated By - Text"
semantic_vi: "Liquidation Intiated By - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "liquidation"
  - "intiated"
  - "text"
  - "language"
  - "initiated"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_LIQUIDATIONINITIATEDBYTEXT

**Liquidation Intiated By - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONINITIATEDBYTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `LiquidationInitiatedBy` | ✓ | |  | `cast(substring(domvalue_l, 1, 6) as cms_dte_liq_ini_by preserving type )` | `CHAR(6)` | Liquidation Initiated By |
| `LiquidationInitiatedByText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |
| `_LiquidationInitiatedBy` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_LiquidationInitiatedBy` | `I_LiquidationInitiatedBy` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONINITIATEDBYTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONINITIATEDBYTEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILIQINITBYTXT',
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
    representativeKey: 'LiquidationInitiatedBy'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Liquidation Intiated By - Text'
define view I_LiquidationInitiatedByText
  as select from dd07t
  association [0..1] to I_Language               as _Language               on $projection.Language = _Language.Language
  association [0..1] to I_LiquidationInitiatedBy as _LiquidationInitiatedBy on $projection.LiquidationInitiatedBy = _LiquidationInitiatedBy.LiquidationInitiatedBy
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key ddlanguage                                                               as Language,
      @ObjectModel.foreignKey.association: '_LiquidationInitiatedBy'
  key cast(substring(domvalue_l, 1, 6) as cms_dte_liq_ini_by preserving type ) as LiquidationInitiatedBy,

      @Semantics.text: true
      ddtext                                                                   as LiquidationInitiatedByText,

      _Language,
      _LiquidationInitiatedBy
}
where
      dd07t.domname  = 'CMS_LIQ_INI_BY'
  and dd07t.as4local = 'A'
```
