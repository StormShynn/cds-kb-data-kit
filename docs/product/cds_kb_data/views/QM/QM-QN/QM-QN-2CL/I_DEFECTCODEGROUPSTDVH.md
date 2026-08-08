---
name: I_DEFECTCODEGROUPSTDVH
description: "Defectcodegroupstdvh"
app_component: QM-QN-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-QN
  - interface-view
  - value-help
  - standard-value-help
  - component:QM-QN-2CL
  - lob:Quality Management
---
# I_DEFECTCODEGROUPSTDVH

**Defectcodegroupstdvh**

| Property | Value |
|---|---|
| App Component | `QM-QN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DefectCodeGroup` | ✓ | |  |  |  |  |
| `CodeGroupStatus` |  | |  |  |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@VDM: { 
    viewType: #COMPOSITE,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@ObjectModel.dataCategory: #VALUE_HELP
@Analytics.technicalName: 'IDCG__VH'
@ObjectModel.representativeKey: 'DefectCodeGroup'

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.privilegedAssociations: ['_Text']

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Defect Code Group'

@Consumption.ranked: true 
@Search.searchable: true
define view entity I_DefectCodeGroupStdVH as select from I_DefectCodeGroup {
  @ObjectModel.text.element: [ 'DefectCodeGroupText' ]
  @Search: {
    defaultSearchElement: true,
    fuzzinessThreshold: 0.8,
    ranking: #HIGH
  }
  key DefectCodeGroup,

  @Semantics.text: true
  @Search: {
    defaultSearchElement: true,
    fuzzinessThreshold: 0.8,
    ranking: #LOW
  }
  _Text[ 1:Language = $session.system_language ].DefectCodeGroupText,
  
  // Association for text is no needed any longer (after adding DefectCodeGroupText),
  // but it cannot be removed as the DDLS is C1 released.
  _Text,
  
  @Consumption.hidden: true
  CodeGroupStatus
  
}
```
