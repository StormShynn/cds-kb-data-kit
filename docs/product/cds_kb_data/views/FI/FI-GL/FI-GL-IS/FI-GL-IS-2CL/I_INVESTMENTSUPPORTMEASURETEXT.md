---
name: I_INVESTMENTSUPPORTMEASURETEXT
description: "This CDS view provides the prerequisites for answering the following business question: How many investment support measures are defined?"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INVESTMENTSUPPORTMEASURETEXT')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business question: How many investment support measures are defined?"
semantic_vi: "Investment Support Measure - Text — CDS view giao diện dựa trên t085s."
keywords:
  - "investment"
  - "support"
  - "measure"
  - "text"
  - "chart"
  - "depreciation"
  - "language"
  - "name"
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
# I_INVESTMENTSUPPORTMEASURETEXT

**This CDS view provides the prerequisites for answering the following business question: How many investment support measures are defined?**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INVESTMENTSUPPORTMEASURETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChartOfDepreciation` | ✓ | |  | `afapl` | `CHAR(4)` | Chart of Depreciaton for Asset Valuation |
| `InvestmentSupportMeasure` | ✓ | |  | `invsl` | `CHAR(2)` | Investment Support Key |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `InvestmentSupportMeasureName` |  | |  | `invetx` | `CHAR(50)` | Investment Support Measure |
| `_ChartOfDepreciation` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ChartOfDepreciation` | `I_ChartOfDepreciation` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INVESTMENTSUPPORTMEASURETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INVESTMENTSUPPORTMEASURETEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFIINVMTSUPPMSRT'
@EndUserText.label: 'Investment Support Measure - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: { representativeKey: 'InvestmentSupportMeasure',
                dataCategory: #TEXT,
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT]
              }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

define view I_InvestmentSupportMeasureText
  as select from t085s
  association [0..1] to I_ChartOfDepreciation as _ChartOfDepreciation on $projection.ChartOfDepreciation = _ChartOfDepreciation.ChartOfDepreciation
  association [0..1] to I_Language            as _Language            on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_ChartOfDepreciation'
  key t085s.afapl  as ChartOfDepreciation,
  key t085s.invsl  as InvestmentSupportMeasure,
      @Semantics.language
  key t085s.spras  as Language,
      @Semantics.text: true
      t085s.invetx as InvestmentSupportMeasureName,

      _Language,
      _ChartOfDepreciation

}
```
