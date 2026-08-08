---
name: D_CONTRACTACCOUNTCREATED
description: "D Contractaccountcreated"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - contract
  - component:FI-CA-2CL
  - lob:Finance
---
# D_CONTRACTACCOUNTCREATED

**D Contractaccountcreated**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ContractAccountCategory` |  | |  | `vktyp_kk` |  |  |
| `ContractAccountExtReference` |  | |  | `vkona_kk` |  |  |

## Source Code

```abap
@EndUserText.label: 'Contract Account Created'

@Metadata.allowExtensions: true

@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]

@VDM.usage.type: [#EVENT_SIGNATURE]

define abstract entity D_ContractAccountCreated
{
  ContractAccountCategory     : vktyp_kk;
  ContractAccountExtReference : vkona_kk;
}
```
