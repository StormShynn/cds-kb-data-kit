---
name: I_LIQUIDATIONTYPETEXT
description: "Liquidation Type - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONTYPETEXT')/$value
semantic_en: "Liquidation Type - Text"
semantic_vi: "Liquidation Type - Text — CDS view giao diện dựa trên tcms_liq_typ_t."
keywords:
  - "liquidation"
  - "type"
  - "text"
  - "language"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_LIQUIDATIONTYPETEXT

**Liquidation Type - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LiquidationType` | ✓ | |  | `liq_typ` | `CHAR(6)` | Liquidation Measure Type ID |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language in which Description is Required |
| `LiquidationTypeText` |  | |  | `name` | `CHAR(40)` | Name of the Liquidation type |
| `_Language` | | ✓ | | | | |
| `_LiquidationType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_LiquidationType` | `I_LiquidationType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONTYPETEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILIQTYPETXT',
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
    representativeKey: 'LiquidationType'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Liquidation Type - Text'
define view I_LiquidationTypeText
  as select from tcms_liq_typ_t
  association [0..1] to I_Language        as _Language        on $projection.Language = _Language.Language
  association [0..1] to I_LiquidationType as _LiquidationType on $projection.LiquidationType = _LiquidationType.LiquidationType
{
      @ObjectModel.foreignKey.association: '_LiquidationType'
  key liq_typ  as LiquidationType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key language as Language,
      @Semantics.text: true
      name     as LiquidationTypeText,

      _Language,
      _LiquidationType
}
```
