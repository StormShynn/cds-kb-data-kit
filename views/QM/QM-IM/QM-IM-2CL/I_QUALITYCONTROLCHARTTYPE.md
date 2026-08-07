---
name: I_QUALITYCONTROLCHARTTYPE
description: "Qualitycontrolcharttype"
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
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_QUALITYCONTROLCHARTTYPE

**Qualitycontrolcharttype**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `QualityControlChartType` | ✓ | |  | `qrkart` |  |  |
| `ControlChartAxisType` |  | |  | `xgroup` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_QualityControlChartTypeText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Type of Quality Control Chart'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.representativeKey: 'QualityControlChartType'
@Analytics.technicalName: 'IQLTYCTRLCHRTTP'
@ObjectModel.usageType: { dataClass: #CUSTOMIZING, sizeCategory: #M, serviceQuality: #A }
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
define view entity I_QualityControlChartType
  as select from qpsh
  association [0..*] to I_QualityControlChartTypeText as _Text on $projection.QualityControlChartType = _Text.QualityControlChartType
{
      @ObjectModel.text.association: '_Text'
      @Search: { defaultSearchElement: true, ranking: #HIGH }
  key qrkart as QualityControlChartType,
      xgroup as ControlChartAxisType,

      //Associations
      _Text

}
```
