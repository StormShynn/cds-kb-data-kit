---
name: I_MEASURINGPOINTCATEGORY
description: Measuringpointcategory
app_component: PM-EQM-SF-MPC-2CL
software_component: SAPSCORE
release_state: released
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
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `MeasuringPointCategory` | `mptyp` |
| `MeasurementPositionNumber` | `suniq` |
| `MeasuringPointCatalogType` | `codct` |
| `OnlineMessageType` | `mrmes` |
| `MsmtDocumentTimeDiffThreshold` | `toler` |
| `MsrgPtCategoryIsValid` | `valid` |
| `MsrgPtHasLinearAttributes` | `lfe_ind` |
| `MsrgPtCategoryIsBusEvtEnabled` | `event_ind` |
| `_MeasuringPointCategoryText` | *Association* |
| `_MeasuringPointCatalog` | *Association* |

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
