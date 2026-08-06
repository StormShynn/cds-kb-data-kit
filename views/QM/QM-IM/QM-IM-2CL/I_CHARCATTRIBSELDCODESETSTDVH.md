---
name: I_CHARCATTRIBSELDCODESETSTDVH
description: Charcattribseldcodesetstdvh
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
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_CHARCATTRIBSELDCODESETSTDVH

**Charcattribseldcodesetstdvh**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SelectedCodeSetPlant` | `SelectedCodeSetPlant` |
| key `SelectedCodeSet` | `SelectedCodeSet` |
| `SelectedCodeSetText` | `SelectedCodeSetText` |
| `InspectionSelectedSetStatus` | `InspectionSelectedSetStatus` |
| `_SelectedCodeSetPlant` | *Association* |

## Source Code

```abap
@VDM.viewType: #COMPOSITE

@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@ObjectModel.dataCategory: #VALUE_HELP
@Analytics.technicalName: 'ICASCS__VH'
@ObjectModel.representativeKey: 'SelectedCodeSet'

@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A

@AccessControl.authorizationCheck: #CHECK

@Metadata.ignorePropagatedAnnotations: true

@Search.searchable: true
@Consumption.ranked: true

@EndUserText.label: 'Selected Set for Characteristic Attribute'
define view entity I_CharcAttribSeldCodeSetStdVH as select from I_CharcAttribSelectedCodeSet {
  @ObjectModel.foreignKey.association: '_SelectedCodeSetPlant'
  @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8 }
  key SelectedCodeSetPlant,
  @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
  key SelectedCodeSet,
  
  @Semantics.text: true
  SelectedCodeSetText,

  @Consumption.hidden: true
  InspectionSelectedSetStatus,

  @Consumption.hidden: true
  _SelectedCodeSetPlant
}
```
