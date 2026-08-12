---
name: I_DEPRECIATIONKEYTEXT
description: "Depreciation Key - Text"
app_component: FI-FIO-AA-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRECIATIONKEYTEXT')/$value
semantic_en: "Depreciation Key - Text"
semantic_vi: "Depreciation Key - Text — CDS view giao diện dựa trên t090nat."
keywords:
  - "depreciation"
  - "key"
  - "text"
  - "chart"
  - "language"
  - "name"
tags:
  - FI
  - bo:asset
  - component:FI-FIO-AA-ANA-2CL
  - FI-FIO
  - FI-FIO-AA
  - FI-FIO-AA-ANA
  - FI-FIO-AA-ANA-2CL
  - interface-view
  - lob:finance
---
# I_DEPRECIATIONKEYTEXT

**Depreciation Key - Text**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AA-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRECIATIONKEYTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChartOfDepreciation` | ✓ | |  | `afapl` | `CHAR(4)` | Chart of Depreciaton for Asset Valuation |
| `DepreciationKey` | ✓ | |  | `afasl` | `CHAR(4)` | Depreciation Key |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `DepreciationKeyName` |  | |  | `cast(t090nat.afatxt as fis_afatxt)` | `CHAR(50)` | Depreciation Key Name |
| `_ChartOfDepreciation` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ChartOfDepreciation` | `I_ChartOfDepreciation` | [1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRECIATIONKEYTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRECIATIONKEYTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFIDEPRKEYT'
@EndUserText.label: 'Depreciation Key - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: { representativeKey: 'DepreciationKey',
                dataCategory: #TEXT,
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT, #SEARCHABLE_ENTITY]
              }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define view I_DepreciationKeyText
  as select from t090nat

  association [1]    to I_ChartOfDepreciation as _ChartOfDepreciation on $projection.ChartOfDepreciation = _ChartOfDepreciation.ChartOfDepreciation
  association [0..1] to I_Language            as _Language            on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_ChartOfDepreciation'
  key t090nat.afapl                      as ChartOfDepreciation,
  key t090nat.afasl                      as DepreciationKey,
      @Semantics.language
  key t090nat.spras                      as Language,

      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      cast(t090nat.afatxt as fis_afatxt) as DepreciationKeyName,

      _ChartOfDepreciation,
      _Language
}
```
