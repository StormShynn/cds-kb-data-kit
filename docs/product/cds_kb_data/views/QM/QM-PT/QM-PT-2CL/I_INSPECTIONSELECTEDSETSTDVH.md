---
name: I_INSPECTIONSELECTEDSETSTDVH
description: "Inspectionselectedsetstdvh"
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-PT
  - interface-view
  - value-help
  - standard-value-help
  - inspection
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_INSPECTIONSELECTEDSETSTDVH

**Inspectionselectedsetstdvh**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SelectedCodeSetPlant` | ✓ | |  |  |  |  |
| `InspectionCatalog` | ✓ | |  |  |  |  |
| `SelectedCodeSet` | ✓ | |  |  |  |  |
| `InspectionSelectedSetStatus` |  | |  |  |  |  |
| `_SelectedCodeSetPlant` | | ✓ | | | | |
| `_InspectionCatalog` | | ✓ | | | | |

## Source Code

```abap
@VDM.viewType: #COMPOSITE

@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@ObjectModel.dataCategory: #VALUE_HELP
@Analytics.technicalName: 'IISS__VH'
@ObjectModel.representativeKey: 'SelectedCodeSet'

@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #A

@AccessControl.authorizationCheck: #CHECK

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Inspection Selected Set'
define view entity I_InspectionSelectedSetStdVH as select from I_InspectionSelectedSet {
  @ObjectModel.foreignKey.association: '_SelectedCodeSetPlant'
  key SelectedCodeSetPlant,
  @ObjectModel.foreignKey.association: '_InspectionCatalog'
  key InspectionCatalog,
  key SelectedCodeSet,

  @Consumption.hidden: true
  InspectionSelectedSetStatus,

  @Consumption.hidden: true
  _SelectedCodeSetPlant,
  @Consumption.hidden: true
  _InspectionCatalog
}
```
