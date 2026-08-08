---
name: I_USAGEDECISIONCODEGROUPSTDVH
description: "Usagedecisioncodegroupstdvh"
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
# I_USAGEDECISIONCODEGROUPSTDVH

**Usagedecisioncodegroupstdvh**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `UsageDecisionCodeGroup` | ✓ | |  |  |  |  |
| `CodeGroupStatus` |  | |  |  |  |  |

## Source Code

```abap
@VDM.viewType: #COMPOSITE

@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@ObjectModel.dataCategory: #VALUE_HELP
@Analytics.technicalName: 'IUDCG__VH'
@ObjectModel.representativeKey: 'UsageDecisionCodeGroup'

@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #A

@AccessControl.authorizationCheck: #CHECK

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Usage Decision Code Group'
@Search.searchable: true
@Consumption.ranked: true

define view entity I_UsageDecisionCodeGroupStdVH as select from I_UsageDecisionCodeGroup {
  @Search:{
    defaultSearchElement: true,
    fuzzinessThreshold: 0.8,
    ranking: #HIGH
  }
  @ObjectModel.text.element: ['UsageDecisionCodeGroupText']
  key UsageDecisionCodeGroup,
  
  _Text[1: Language = $session.system_language ].UsageDecisionCodeGroupText,

  @Consumption.hidden: true
  CodeGroupStatus
}
```
