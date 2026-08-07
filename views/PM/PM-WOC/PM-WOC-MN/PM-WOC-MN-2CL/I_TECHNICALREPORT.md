---
name: I_TECHNICALREPORT
description: Technicalreport
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MN
  - interface-view
  - component:PM-WOC-MN-2CL
  - lob:Plant Maintenance
---
# I_TECHNICALREPORT

**Technicalreport**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CatalogProfile` | ✓ | |  | `rbnr` |  |  |
| `NotificationCategory` |  | |  | `qmtyp` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_TechnicalReportText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Technical Report'
@Analytics:{
  dataCategory: #DIMENSION,
  dataExtraction:{enabled: true,delta.changeDataCapture.automatic: true}
}
@Analytics.technicalName: 'ITECHREP'
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'CatalogProfile'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING }
@Metadata.ignorePropagatedAnnotations: true
@Consumption.ranked: true 
@Search.searchable: true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE ]

@ObjectModel.sapObjectNodeType.name:'MaintenanceCatalogProfile'

define view entity I_TechnicalReport
  as select from t352b
  association [0..*] to I_TechnicalReportText as _Text on $projection.CatalogProfile = _Text.CatalogProfile
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key t352b.rbnr as CatalogProfile,

      qmtyp      as NotificationCategory,

      _Text
}
```
