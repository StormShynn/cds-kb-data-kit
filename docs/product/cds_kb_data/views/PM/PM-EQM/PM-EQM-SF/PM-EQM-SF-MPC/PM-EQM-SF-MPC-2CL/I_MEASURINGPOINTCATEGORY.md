---
name: I_MEASURINGPOINTCATEGORY
description: "Measuringpointcategory"
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
  - component:PM-EQM-SF-MPC-2CL
  - lob:Plant Maintenance
---
# I_MEASURINGPOINTCATEGORY

**Measuringpointcategory**

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
| `MeasurementPositionNumber` |  | |  | `suniq` |  |  |
| `MeasuringPointCatalogType` |  | |  | `codct` |  |  |
| `OnlineMessageType` |  | |  | `mrmes` |  |  |
| `MsmtDocumentTimeDiffThreshold` |  | |  | `toler` |  |  |
| `MsrgPtCategoryIsValid` |  | |  | `valid` |  |  |
| `MsrgPtHasLinearAttributes` |  | |  | `lfe_ind` |  |  |
| `MsrgPtCategoryIsBusEvtEnabled` |  | |  | `event_ind` |  |  |
| `_MeasuringPointCategoryText` | | ✓ | | | | |
| `_MeasuringPointCatalog` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MeasuringPointCategoryText` | `I_MeasuringPointCatText` | [0..*] |
| `_MeasuringPointCatalog` | `I_Inspectioncatalog` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Measuring Point Category'

@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'MeasuringPointCategory'
@Analytics.technicalName: 'IMEASPOINTCAT'

@ObjectModel: {
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  }
}
@ObjectModel.sapObjectNodeType.name:'MeasuringPointCategory'
@Metadata.ignorePropagatedAnnotations:true
@Analytics: {dataExtraction.enabled: true }
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE , #EXTRACTION_DATA_SOURCE ]

define view entity I_MeasuringPointCategory
  as select from t370p
  association [0..*] to I_MeasuringPointCatText as _MeasuringPointCategoryText on $projection.MeasuringPointCategory = _MeasuringPointCategoryText.MeasuringPointCategory
  association [0..1] to I_Inspectioncatalog     as _MeasuringPointCatalog      on $projection.MeasuringPointCatalogType = _MeasuringPointCatalog.InspectionCatalog
{
      @ObjectModel.text.association: '_MeasuringPointCategoryText'
  key mptyp     as MeasuringPointCategory,

      suniq     as MeasurementPositionNumber,

      @ObjectModel.foreignKey.association: '_MeasuringPointCatalog'
      codct     as MeasuringPointCatalogType,

      mrmes     as OnlineMessageType,

      toler     as MsmtDocumentTimeDiffThreshold,

      valid     as MsrgPtCategoryIsValid,

      lfe_ind   as MsrgPtHasLinearAttributes,

      event_ind as MsrgPtCategoryIsBusEvtEnabled,

      // Propagate association(s)
      _MeasuringPointCategoryText,
      _MeasuringPointCatalog

}
```
