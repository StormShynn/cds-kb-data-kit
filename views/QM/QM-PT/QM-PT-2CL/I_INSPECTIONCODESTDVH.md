---
name: I_INSPECTIONCODESTDVH
description: Inspectioncodestdvh
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
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
# I_INSPECTIONCODESTDVH

**Inspectioncodestdvh**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspectionCatalog` | ✓ | |  |  |  |  |
| `InspectionCodeGroup` | ✓ | |  |  |  |  |
| `InspectionCode` | ✓ | |  |  |  |  |
| `_Text` | | ✓ | | | | |
| `_InspectionCatalog` | | ✓ | | | | |
| `_InspectionCodeGroup` | | ✓ | | | | |

## Source Code

```abap
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@ObjectModel.dataCategory: #VALUE_HELP
@Analytics.technicalName: 'IIC__VH2'
@ObjectModel.representativeKey: 'InspectionCode'

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_Text']

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Inspection Code'
-- this CDS view seems not to be used productively in any app
define view entity I_InspectionCodeStdVH as select from I_InspectionCode {
  @ObjectModel.foreignKey.association: '_InspectionCatalog'
  key InspectionCatalog,
  @ObjectModel.foreignKey.association: '_InspectionCodeGroup'
  key InspectionCodeGroup,
  @ObjectModel.text.association: '_Text'
  key InspectionCode,

  _Text,

  @Consumption.hidden: true
  _InspectionCatalog,
  @Consumption.hidden: true
  _InspectionCodeGroup
}
```
