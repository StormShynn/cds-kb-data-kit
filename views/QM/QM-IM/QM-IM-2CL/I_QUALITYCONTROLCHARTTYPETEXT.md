---
name: I_QUALITYCONTROLCHARTTYPETEXT
description: "Qualitycontrolcharttypetext"
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-IM
  - interface-view
  - text-view
  - text
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_QUALITYCONTROLCHARTTYPETEXT

**Qualitycontrolcharttypetext**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `sprache` |  |  |
| `QualityControlChartType` | ✓ | |  | `qrkart` |  |  |
| `QualityControlChartTypeText` |  | |  | `cast(qrktxt as vdm_qrkart_text preserving type )` |  |  |
| `_QualityControlChartType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_QualityControlChartType` | `I_QualityControlChartType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Type of Quality Control Chart - Text'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IQLTYCTRLCHRTTPT'
@ObjectModel.representativeKey: 'QualityControlChartType'
@ObjectModel.usageType: { dataClass: #CUSTOMIZING, sizeCategory: #M, serviceQuality: #A }
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
define view entity I_QualityControlChartTypeText
  as select from qpsht
  association [0..1] to I_QualityControlChartType as _QualityControlChartType on $projection.QualityControlChartType = _QualityControlChartType.QualityControlChartType
  association [0..1] to I_Language                as _Language                on $projection.Language = _Language.Language
{
      @Semantics.language: true
  key sprache                         as Language,
      @Search: { defaultSearchElement: true, ranking: #HIGH }
  key qrkart                          as QualityControlChartType,
      @Semantics.text: true
      @Search: { defaultSearchElement: true, ranking: #MEDIUM, fuzzinessThreshold: 0.8 }
      cast(qrktxt as vdm_qrkart_text preserving type ) as QualityControlChartTypeText,

      //Associations
      _QualityControlChartType,
      _Language
}
```
