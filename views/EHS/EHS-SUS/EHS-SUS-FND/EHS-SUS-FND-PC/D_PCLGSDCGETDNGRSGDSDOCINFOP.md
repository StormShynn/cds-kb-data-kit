---
name: D_PCLGSDCGETDNGRSGDSDOCINFOP
description: D Pclgsdcgetdngrsgdsdocinfop
app_component: EHS-SUS-FND-PC
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - EHS
  - EHS-SUS
  - EHS-SUS-FND
  - component:EHS-SUS-FND-PC
  - lob:Other
---
# D_PCLGSDCGETDNGRSGDSDOCINFOP

**D Pclgsdcgetdngrsgdsdocinfop**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-PC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OutputScenario` |  | |  | `ehdgm_output_scenario` |  |  |
| `CompanyCode` |  | |  | `bukrs` |  |  |
| `D_PCLgsDcGetDaGdsDocInfoItemP` |  | |  | `_Items : composition [0..*] of D_PCLgsDcGetDaGdsDocInfoItemP` |  |  |

## Source Code

```abap
@EndUserText.label: 'DG Document Info Parameter'
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
define root abstract entity D_PCLgsDcGetDngrsGdsDocInfoP
{
  OutputScenario : ehdgm_output_scenario;  // Output scenario (mandatory)
  CompanyCode    : bukrs;                  // Company Code  
  _Items         : composition [0..*] of D_PCLgsDcGetDaGdsDocInfoItemP; // ttyp  List of item IDs (optional)
}
```
