---
name: I_USAGEDECISIONCODESTDVH
description: "Usagedecisioncodestdvh"
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
# I_USAGEDECISIONCODESTDVH

**Usagedecisioncodestdvh**

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
| `UsageDecisionCode` | ✓ | |  |  |  |  |
| `_Text` | | ✓ | | | | |
| `_UsageDecisionCodeGroup` | | ✓ | | | | |

## Source Code

```abap
@VDM.viewType: #COMPOSITE

@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ] 
@ObjectModel.dataCategory: #VALUE_HELP
@Analytics.technicalName: 'IUDC__VH'
@ObjectModel.representativeKey: 'UsageDecisionCode'

@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #A

@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_Text']

@Search.searchable: true
@Consumption.ranked: true 
@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Usage Decision Code'
define view entity I_UsageDecisionCodeStdVH as select from I_UsageDecisionCode {
    @ObjectModel.foreignKey.association: '_UsageDecisionCodeGroup'
  @Search: {
    defaultSearchElement: true,
    fuzzinessThreshold: 0.8,
    ranking: #LOW
  }
  key UsageDecisionCodeGroup,
  @ObjectModel.text.association: '_Text'
  @Search: {
    defaultSearchElement: true,
    fuzzinessThreshold: 0.8,
    ranking: #HIGH
  }
  @UI.lineItem:[{ position: 1 }]
  key UsageDecisionCode,
  

  _Text,

  @Consumption.hidden: true
  _UsageDecisionCodeGroup
}
```
