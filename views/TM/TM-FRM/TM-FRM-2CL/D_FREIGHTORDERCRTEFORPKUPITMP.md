---
name: D_FREIGHTORDERCRTEFORPKUPITMP
description: D Freightordercrteforpkupitmp
app_component: TM-FRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRM
  - freight
  - component:TM-FRM-2CL
  - lob:Other
---
# D_FREIGHTORDERCRTEFORPKUPITMP

**D Freightordercrteforpkupitmp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FreightBookingItemUUID` |  | |  | `/scmtms/vdm_frt_bkg_item_uuid` |  |  |

## Source Code

```abap
@EndUserText.label: 'FreightOrderCrteForPkup Item Parameter'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_FreightOrderCrteForPkupItmP 
{
    FreightBookingItemUUID  : /scmtms/vdm_frt_bkg_item_uuid;
}
```
