---
name: D_SESCANCELPARAMETER
description: D Sescancelparameter
app_component: MM-PUR-SVC-SES-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-SVC
  - component:MM-PUR-SVC-SES-2CL
  - lob:Sourcing & Procurement
---
# D_SESCANCELPARAMETER

**D Sescancelparameter**

| Property | Value |
|---|---|
| App Component | `MM-PUR-SVC-SES-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PostingDate` |  | |  | `mmpur_ses_posting_date` |  |  |

## Source Code

```abap
@EndUserText.label: 'SES Cancel Paramters'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE
define root abstract entity D_SESCancelParameter {
  
  PostingDate : mmpur_ses_posting_date ;
    
}
```
