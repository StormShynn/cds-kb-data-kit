---
name: I_LIQUIDATIONCASHFLOWTYPETEXT
description: "Liquidation Cash Flow Type - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONCASHFLOWTYPETEXT')/$value
semantic_en: "Liquidation Cash Flow Type - Text"
semantic_vi: "Liquidation Cash Flow Type - Text — CDS view giao diện dựa trên tcms_liq_c_typ_t."
keywords:
  - "liquidation"
  - "cash"
  - "flow"
  - "type"
  - "text"
  - "language"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_LIQUIDATIONCASHFLOWTYPETEXT

**Liquidation Cash Flow Type - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONCASHFLOWTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LiquidationCashFlowType` | ✓ | |  | `liq_cflow_typ` | `CHAR(6)` | Cash Flow Type |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language in which Description is Required |
| `LiquidationCashFlowTypeText` |  | |  | `name` | `CHAR(40)` | Description cashflow types |
| `_Language` | | ✓ | | | | |
| `_LiquidationCashFlowType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_LiquidationCashFlowType` | `I_LiquidationCashFlowType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONCASHFLOWTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONCASHFLOWTYPETEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILIQCFLOWTYPETXT',
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
    representativeKey: 'LiquidationCashFlowType'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Liquidation Cash Flow Type - Text'
define view I_LiquidationCashFlowTypeText
  as select from tcms_liq_c_typ_t
  association [0..1] to I_Language                as _Language                on $projection.Language = _Language.Language
  association [0..1] to I_LiquidationCashFlowType as _LiquidationCashFlowType on $projection.LiquidationCashFlowType = _LiquidationCashFlowType.LiquidationCashFlowType

{
      @ObjectModel.foreignKey.association: '_LiquidationCashFlowType'
  key liq_cflow_typ as LiquidationCashFlowType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key language      as Language,
      @Semantics.text: true
      name          as LiquidationCashFlowTypeText,

      _Language,
      _LiquidationCashFlowType
}
```
