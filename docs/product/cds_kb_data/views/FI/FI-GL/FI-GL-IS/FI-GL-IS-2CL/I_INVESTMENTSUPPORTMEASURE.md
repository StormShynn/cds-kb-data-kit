---
name: I_INVESTMENTSUPPORTMEASURE
description: "This CDS view provides the prerequisites for answering the following business question: How many investment support measures are defined?"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INVESTMENTSUPPORTMEASURE')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business question: How many investment support measures are defined?"
semantic_vi: "Investment Support Measure — CDS view giao diện dựa trên t085."
keywords:
  - "investment"
  - "support"
  - "measure"
  - "chart"
  - "depreciation"
tags:
  - FI
  - bo:companycode
  - component:FI-GL-IS-2CL
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
  - bo:purchaseorder
---
# I_INVESTMENTSUPPORTMEASURE

**This CDS view provides the prerequisites for answering the following business question: How many investment support measures are defined?**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INVESTMENTSUPPORTMEASURE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChartOfDepreciation` | ✓ | |  | `afapl` | `CHAR(4)` | Chart of Depreciaton for Asset Valuation |
| `InvestmentSupportMeasure` | ✓ | |  | `invsl` | `CHAR(2)` | Investment Support Key |
| `_ChartOfDepreciation` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ChartOfDepreciation` | `I_ChartOfDepreciation` | [0..1] |
| `_Text` | `I_InvestmentSupportMeasureText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INVESTMENTSUPPORTMEASURE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INVESTMENTSUPPORTMEASURE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFIINVMTSUPPMSR'
@Analytics: {dataCategory: #DIMENSION }
@EndUserText.label: 'Investment Support Measure'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: { representativeKey: 'InvestmentSupportMeasure',
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                modelingPattern: #ANALYTICAL_DIMENSION,
                supportedCapabilities: [#ANALYTICAL_DIMENSION]
              }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

define view I_InvestmentSupportMeasure
  as select from t085
  association [0..1] to I_ChartOfDepreciation          as _ChartOfDepreciation on  $projection.ChartOfDepreciation = _ChartOfDepreciation.ChartOfDepreciation
  association [0..*] to I_InvestmentSupportMeasureText as _Text                on  $projection.ChartOfDepreciation      = _Text.ChartOfDepreciation
                                                                               and $projection.InvestmentSupportMeasure = _Text.InvestmentSupportMeasure
{

      @ObjectModel.foreignKey.association: '_ChartOfDepreciation'
  key t085.afapl as ChartOfDepreciation,
      @ObjectModel.text.association: '_Text'
  key t085.invsl as InvestmentSupportMeasure,

      _ChartOfDepreciation,
      _Text

}
```
