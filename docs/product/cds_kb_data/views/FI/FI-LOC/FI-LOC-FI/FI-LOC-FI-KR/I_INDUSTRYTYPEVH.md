---
name: I_INDUSTRYTYPEVH
description: "Industrytypevh"
app_component: FI-LOC-FI-KR
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-FI
  - interface-view
  - value-help
  - component:FI-LOC-FI-KR
  - lob:Finance
---
# I_INDUSTRYTYPEVH

**Industrytypevh**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI-KR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IndustryType` | ✓ | |  | `indtype` |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Type of Industry'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType:#BASIC

@ObjectModel: {
  dataCategory: #VALUE_HELP,
  representativeKey: 'IndustryType',
  usageType: { dataClass: #MASTER,
               serviceQuality: #A,
               sizeCategory: #S
  }
}
@ObjectModel.supportedCapabilities: 
   [  #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #UI_PROVIDER_PROJECTION_SOURCE ] 
define view entity I_IndustryTypeVH as select from industype
{
  key indtype as IndustryType
}
```
