---
name: D_TRANSPRATETABLEVALIDITYCOPYP
description: D Transpratetablevaliditycopyp
app_component: TM-MD-CM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-MD
  - TM-MD-CM
  - component:TM-MD-CM-2CL
  - lob:Other
---
# D_TRANSPRATETABLEVALIDITYCOPYP

**D Transpratetablevaliditycopyp**

| Property | Value |
|---|---|
| App Component | `TM-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspRateValidityCpyStartDate` |  | |  | `/scmtms/val_date_from` |  |  |
| `TranspRateValidityCpyEndDate` |  | |  | `/scmtms/val_date_to` |  |  |

## Source Code

```abap
@EndUserText.label: 'Action Parameter for Copy Rates Validity'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_TranspRateTableValidityCopyP
{
  TranspRateValidityCpyStartDate : /scmtms/val_date_from;
  TranspRateValidityCpyEndDate   : /scmtms/val_date_to;
}
```
