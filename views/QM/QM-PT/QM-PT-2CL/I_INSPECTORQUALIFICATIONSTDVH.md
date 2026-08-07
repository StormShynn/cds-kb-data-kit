---
name: I_INSPECTORQUALIFICATIONSTDVH
description: Inspectorqualificationstdvh
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
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_INSPECTORQUALIFICATIONSTDVH

**Inspectorqualificationstdvh**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `InspectorQualification` | ✓ | |  |  |

## Source Code

```abap
@VDM: {
    viewType: #COMPOSITE,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@ObjectModel.dataCategory: #VALUE_HELP
@Analytics.technicalName: 'IIQ__VH'
@ObjectModel.representativeKey: 'InspectorQualification'

@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #A

@AccessControl.authorizationCheck: #CHECK

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Inspector Qualification'

@Search.searchable: true
@Consumption.ranked: true
define view entity I_InspectorQualificationStdVH as select from I_InspectorQualification {
  
  @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.7 }
  key InspectorQualification,
  
  @Semantics.text: true
  @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.7 }
  I_InspectorQualification._InspectorQualificationText[1:Language = $session.system_language].InspectorQualificationText
  
}
```
