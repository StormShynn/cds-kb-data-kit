---
name: I_PERFORMANCEEFFICIENCYRATIO
description: "Performance Efficiency Ratio"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERFORMANCEEFFICIENCYRATIO')/$value
semantic_en: "Performance Efficiency Ratio"
semantic_vi: "Performance Efficiency Ratio — CDS view giao diện dựa trên tc31."
keywords:
  - "performance"
  - "efficiency"
  - "ratio"
  - "code"
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
# I_PERFORMANCEEFFICIENCYRATIO

**Performance Efficiency Ratio**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERFORMANCEEFFICIENCYRATIO')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PerformanceEfficiencyRatioCode` | ✓ | |  | `id` | `CHAR(3)` | Key for performance efficiency rate |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PerfEfficiencyRatioText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERFORMANCEEFFICIENCYRATIO')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERFORMANCEEFFICIENCYRATIO')/$value)*

```abap
//@AbapCatalog.sqlViewName: 'IPERFEFFNCYRATIO'
//@AbapCatalog.compiler.compareFilter: true
//@AbapCatalog.preserveKey: true
//@AbapCatalog.buffering: { status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001 }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@Analytics.technicalName: 'IPERFEFFNCYRATIO'
//@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true 
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE,#EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'PerformanceEfficiencyRatioCode'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Performance Efficiency Ratio'
@ObjectModel.sapObjectNodeType.name: 'PerformanceEfficiencyRatio'
@Analytics.dataExtraction.enabled: true

//define view I_PerformanceEfficiencyRatio
define view entity I_PerformanceEfficiencyRatio
  as select from tc31

  association [0..*] to I_PerfEfficiencyRatioText as _Text on $projection.PerformanceEfficiencyRatioCode = _Text.PerformanceEfficiencyRatioCode

{
      @ObjectModel.text.association: '_Text'
  key id      as PerformanceEfficiencyRatioCode,

      --- Associations ---
      _Text
};
```
