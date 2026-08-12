---
name: I_MEASURINGPOINTCATTEXT
description: "Measuringpointcattext"
app_component: PM-EQM-SF-MPC-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-EQM
  - PM-EQM-SF
  - interface-view
  - text-view
  - text
  - component:PM-EQM-SF-MPC-2CL
  - lob:Plant Maintenance
---
# I_MEASURINGPOINTCATTEXT

**Measuringpointcattext**

| Property | Value |
|---|---|
| App Component | `PM-EQM-SF-MPC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MeasuringPointCategory` | ✓ | |  | `mptyp` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `MeasuringPointCategoryDesc` |  | |  | `mpttx` |  |  |
| `_MeasuringPointCategory` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MeasuringPointCategory` | `I_MeasuringPointCategory` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Measuring Point Category - Text'

@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IMEASPOINTCATTXT'
@ObjectModel.representativeKey: 'MeasuringPointCategory'

@ObjectModel: {
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  }
}
@Metadata.ignorePropagatedAnnotations:true
@Analytics: {dataExtraction.enabled: true }
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT , #EXTRACTION_DATA_SOURCE ]

define view entity I_MeasuringPointCatText
  as select from t370p_t
  association [0..1] to I_MeasuringPointCategory as _MeasuringPointCategory on _MeasuringPointCategory.MeasuringPointCategory = $projection.MeasuringPointCategory
  association [0..1] to I_Language               as _Language               on _Language.Language = $projection.Language
{
      @ObjectModel.foreignKey.association: '_MeasuringPointCategory'
  key mptyp as MeasuringPointCategory,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras as Language,

      @Semantics.text: true
      mpttx as MeasuringPointCategoryDesc,

      // Propagate association(s)
      _MeasuringPointCategory,
      _Language
}
```
