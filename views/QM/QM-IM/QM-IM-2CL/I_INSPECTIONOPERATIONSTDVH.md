---
name: I_INSPECTIONOPERATIONSTDVH
description: Inspectionoperationstdvh
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
# I_INSPECTIONOPERATIONSTDVH

**Inspectionoperationstdvh**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `InspectionLot` | ✓ | |  |  |
| `InspPlanOperationInternalID` | ✓ | |  |  |
| `InspectionOperation` |  | |  |  |
| `OperationText` |  | |  |  |
| `InspectionOperationPlant` |  | |  |  |
| `_InspectionLot` | | ✓ | | |

## Source Code

```abap
@VDM: {
    viewType: #COMPOSITE,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@ObjectModel.dataCategory: #VALUE_HELP
@Analytics.technicalName: 'IIO__VH'
@ObjectModel.representativeKey: 'InspPlanOperationInternalID'

@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Inspection Operation'

@Search.searchable: true
@Consumption.ranked: true
define view entity I_InspectionOperationStdVH as select from I_InspectionOperation {
  @ObjectModel.foreignKey.association: '_InspectionLot'
  @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #HIGH }
  key InspectionLot,
  key InspPlanOperationInternalID,

  @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #LOW }
  InspectionOperation,
  @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #LOW }
  OperationText,
  
  @Consumption.hidden: true
  InspectionOperationPlant,

  @Consumption.hidden: true
  _InspectionLot
}
```
