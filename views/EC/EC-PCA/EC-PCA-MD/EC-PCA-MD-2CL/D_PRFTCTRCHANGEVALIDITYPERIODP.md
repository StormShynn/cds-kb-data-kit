---
name: D_PRFTCTRCHANGEVALIDITYPERIODP
description: D Prftctrchangevalidityperiodp
app_component: EC-PCA-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - EC
  - EC-PCA
  - EC-PCA-MD
  - component:EC-PCA-MD-2CL
  - lob:Other
---
# D_PRFTCTRCHANGEVALIDITYPERIODP

**D Prftctrchangevalidityperiodp**

| Property | Value |
|---|---|
| App Component | `EC-PCA-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `NewValidityStartDate` | `datab` |
| `NewValidityEndDate` | `datbi` |

## Source Code

```abap
@EndUserText.label: 'Change Validity Period Parameter'
@Metadata.allowExtensions: true
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
define abstract entity D_PrftCtrChangeValidityPeriodP
{
  NewValidityStartDate : datab;
  NewValidityEndDate   : datbi;
}
```
