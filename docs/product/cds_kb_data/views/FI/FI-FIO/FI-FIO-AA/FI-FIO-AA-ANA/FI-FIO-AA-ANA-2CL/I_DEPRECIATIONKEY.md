---
name: I_DEPRECIATIONKEY
description: "This CDS view provides the prerequisites for answering the following business question: How many depreciation keys are defined?"
app_component: FI-FIO-AA-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRECIATIONKEY')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business question: How many depreciation keys are defined?"
semantic_vi: "Depreciation Key — CDS view giao diện dựa trên t090na."
keywords:
  - "depreciation"
  - "key"
  - "chart"
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
# I_DEPRECIATIONKEY

**This CDS view provides the prerequisites for answering the following business question: How many depreciation keys are defined?**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AA-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRECIATIONKEY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChartOfDepreciation` | ✓ | |  | `afapl` | `CHAR(4)` | Chart of Depreciaton for Asset Valuation |
| `DepreciationKey` | ✓ | |  | `afasl` | `CHAR(4)` | Depreciation Key |
| `_ChartOfDepreciation` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ChartOfDepreciation` | `I_ChartOfDepreciation` | [1] |
| `_Text` | `I_DepreciationKeyText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRECIATIONKEY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRECIATIONKEY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFIDEPRKEY'
@Analytics: { dataCategory: #DIMENSION }
@EndUserText.label: 'Depreciation Key'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: { representativeKey: 'DepreciationKey',
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                modelingPattern: #ANALYTICAL_DIMENSION,
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY]
              }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define view I_DepreciationKey
  as select from t090na

  association [1]    to I_ChartOfDepreciation as _ChartOfDepreciation on  $projection.ChartOfDepreciation = _ChartOfDepreciation.ChartOfDepreciation
  association [0..*] to I_DepreciationKeyText as _Text                on  $projection.ChartOfDepreciation = _Text.ChartOfDepreciation
                                                                      and $projection.DepreciationKey     = _Text.DepreciationKey

{
      @ObjectModel.foreignKey.association: '_ChartOfDepreciation'
  key t090na.afapl as ChartOfDepreciation,
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key t090na.afasl as DepreciationKey,

      _ChartOfDepreciation,
      _Text
}
```
