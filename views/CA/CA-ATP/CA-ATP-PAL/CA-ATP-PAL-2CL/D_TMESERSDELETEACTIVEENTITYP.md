---
name: D_TMESERSDELETEACTIVEENTITYP
description: D Tmesersdeleteactiveentityp
app_component: CA-ATP-PAL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-ATP
  - CA-ATP-PAL
  - component:CA-ATP-PAL-2CL
  - lob:Cross-Application Components
---
# D_TMESERSDELETEACTIVEENTITYP

**D Tmesersdeleteactiveentityp**

| Property | Value |
|---|---|
| App Component | `CA-ATP-PAL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `TmeSersWthAssgmtIsDeltd` |  | |  | `tmeserswthassgmtisdeltd` |

## Source Code

```abap
@EndUserText.label: 'Time Series Delete Active Entity Parameter'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE
define abstract entity D_TmeSersDeleteActiveEntityP
{
    TmeSersWthAssgmtIsDeltd : tmeserswthassgmtisdeltd;    
}
```
