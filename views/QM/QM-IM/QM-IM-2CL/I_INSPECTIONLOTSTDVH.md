---
name: I_INSPECTIONLOTSTDVH
description: Inspectionlotstdvh
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
  - value-help
  - standard-value-help
  - inspection
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_INSPECTIONLOTSTDVH

**Inspectionlotstdvh**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `InspectionLot` | `InspectionLot` |
| `InspectionLotType` | `InspectionLotType` |
| `IsBusinessPurposeCompleted` | `IsBusinessPurposeCompleted` |
| `MatlQualityAuthorizationGroup` | `MatlQualityAuthorizationGroup` |
| `Plant` | `Plant` |

## Source Code

```abap
//GENERATED:003:GFBfhyK17jU{x0YpWBss2W
@AbapCatalog.sqlViewName: 'IIL__VH'
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #COMPOSITE

@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'InspectionLot'

@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #A

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED

@Consumption.ranked: true
@Search.searchable: true 
 
@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Inspection Lot'
define view I_InspectionLotStdVH as select from I_InspectionLot {
  @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #HIGH }
  key InspectionLot,

  @Consumption.hidden: true
  InspectionLotType,
  @Consumption.hidden: true
  IsBusinessPurposeCompleted,
  @Consumption.hidden: true
  MatlQualityAuthorizationGroup,
  @Consumption.hidden: true
  Plant
}
```
