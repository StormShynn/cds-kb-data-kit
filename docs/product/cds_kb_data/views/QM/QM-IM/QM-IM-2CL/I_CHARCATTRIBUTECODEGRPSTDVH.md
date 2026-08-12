---
name: I_CHARCATTRIBUTECODEGRPSTDVH
description: "Charcattributecodegrpstdvh"
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_CHARCATTRIBUTECODEGRPSTDVH

**Charcattributecodegrpstdvh**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CharacteristicAttributeCodeGrp` | ✓ | |  |  |  |  |
| `CodeGroupStatus` |  | |  |  |  |  |

## Source Code

```abap
@VDM.viewType: #COMPOSITE

@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@ObjectModel.dataCategory: #VALUE_HELP
@Analytics.technicalName: 'ICACG__VH'
@ObjectModel.representativeKey: 'CharacteristicAttributeCodeGrp'

@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A

@AccessControl.authorizationCheck: #CHECK

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Characteristic Attribute Code Group'
define view entity I_CharcAttributeCodeGrpStdVH as select from I_CharcAttributeCodeGrp {
  key CharacteristicAttributeCodeGrp,

  @Consumption.hidden: true
  CodeGroupStatus
}
```
