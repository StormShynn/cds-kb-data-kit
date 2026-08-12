---
name: I_PERFEFFICIENCYRATIOTEXT
description: "Performance Efficiency Ratio - Text"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERFEFFICIENCYRATIOTEXT')/$value
semantic_en: "Performance Efficiency Ratio - Text"
semantic_vi: "Performance Efficiency Ratio - Text — CDS view giao diện dựa trên tc31t."
keywords:
  - "performance"
  - "efficiency"
  - "ratio"
  - "text"
  - "code"
  - "language"
tags:
  - PP
  - bo:companycode
  - component:PP-VDM-MD-2CL
  - interface-view
  - lob:manufacturing
  - PP-VDM
  - PP-VDM-MD
  - PP-VDM-MD-2CL
---
# I_PERFEFFICIENCYRATIOTEXT

**Performance Efficiency Ratio - Text**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERFEFFICIENCYRATIOTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PerformanceEfficiencyRatioCode` | ✓ | |  | `zgrad` | `CHAR(3)` | Key for performance efficiency rate |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `PerformanceEfficiencyRatioText` |  | |  | `txt` | `CHAR(20)` | Description of the performance efficiency rate key |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERFEFFICIENCYRATIOTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERFEFFICIENCYRATIOTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPERFEFFRATIOTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 002}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true 
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE,#EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'PerformanceEfficiencyRatioCode'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Performance Efficiency Ratio - Text'
@ObjectModel.sapObjectNodeType.name: 'PerformanceEfficiencyRatioText'
@Analytics.dataExtraction.enabled: true

define view I_PerfEfficiencyRatioText
  as select from tc31t

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
//association [0..1] to I_PerformanceEfficiencyRatio as _PerformanceEfficiencyRatio on $projection.PerformanceEfficiencyRatioCode = _PerformanceEfficiencyRatio.PerformanceEfficiencyRatioCode

{
//    @ObjectModel.foreignKey.association: '_PerformanceEfficiencyRatio'
      @ObjectModel.text.element: 'PerformanceEfficiencyRatioText'
  key zgrad                                               as PerformanceEfficiencyRatioCode,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras                                               as Language,
      @Semantics.text: true
      txt                                                 as PerformanceEfficiencyRatioText,

      --- Associations ---
      _Language
//    _PerformanceEfficiencyRatio
};
```
