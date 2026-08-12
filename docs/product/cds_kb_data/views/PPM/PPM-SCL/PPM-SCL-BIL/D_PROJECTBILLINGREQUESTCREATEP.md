---
name: D_PROJECTBILLINGREQUESTCREATEP
description: "D Projectbillingrequestcreatep"
app_component: PPM-SCL-BIL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-BIL
  - billing
  - project
  - component:PPM-SCL-BIL
  - lob:Other
  - bo:Project
---
# D_PROJECTBILLINGREQUESTCREATEP

**D Projectbillingrequestcreatep**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-BIL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillingWBSElementInternalID` |  | |  | `ps_s4_pspnr` |  |  |
| `OnAccountItemsAreIncluded` |  | |  | `boolean` |  |  |

## Source Code

```abap
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
//@ObjectModel.modelingPattern: #DATA_STRUCTURE
@EndUserText.label: 'Abstract entity for Create PBR'

define abstract entity D_ProjectBillingRequestCreateP
{
  BillingWBSElementInternalID : ps_s4_pspnr;
  OnAccountItemsAreIncluded   : boolean;
}
```
