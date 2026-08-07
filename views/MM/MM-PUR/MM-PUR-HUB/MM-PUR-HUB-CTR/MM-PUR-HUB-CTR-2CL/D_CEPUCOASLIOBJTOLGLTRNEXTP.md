---
name: D_CEPUCOASLIOBJTOLGLTRNEXTP
description: D Cepucoasliobjtolgltrnextp
app_component: MM-PUR-HUB-CTR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-HUB
  - transactional-processing
  - component:MM-PUR-HUB-CTR-2CL
  - lob:Sourcing & Procurement
---
# D_CEPUCOASLIOBJTOLGLTRNEXTP

**D Cepucoasliobjtolgltrnextp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LegalTransaction` |  | |  | `lcm_legaltr_id` |  |  |

## Source Code

```abap
@EndUserText.label: 'Cntrl Pur Contr Assg Lgl Trans Parameter'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_CePuCoAsLiObjToLglTrnExtP {
    LegalTransaction : lcm_legaltr_id;    
}
```
