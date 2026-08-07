---
name: D_PURCONTRVALDTYPERDCHANGED
description: D Purcontrvaldtyperdchanged
app_component: MM-PUR-OA-CON-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-OA
  - component:MM-PUR-OA-CON-2CL
  - lob:Sourcing & Procurement
---
# D_PURCONTRVALDTYPERDCHANGED

**D Purcontrvaldtyperdchanged**

| Property | Value |
|---|---|
| App Component | `MM-PUR-OA-CON-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurContrValidityStartDate` |  | |  | `kdatb` |  |  |
| `PurContrValidityEndDate` |  | |  | `kdate` |  |  |
| `PurContrPrevValidityStartDate` |  | |  | `kdatb` |  |  |
| `PurContrPrevValidityEndDate` |  | |  | `kdate` |  |  |

## Source Code

```abap
@Event.sapObjectNodeType: 'PurchaseContract'
@VDM.usage.type: [#EVENT_SIGNATURE]
@Event.implementedBy: ['ABAP:RAP_EVENT']
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@EndUserText.label: 'Purchase Contract Validity Changed'
define abstract entity D_PurContrValdtyPerdChanged 
{
   @Event.previousValue.element:'PurContrPrevValidityStartDate'
   PurContrValidityStartDate : kdatb;
   
   @Event.previousValue.element:'PurContrPrevValidityEndDate'
   PurContrValidityEndDate : kdate;
   
   PurContrPrevValidityStartDate : kdatb;
   
   PurContrPrevValidityEndDate : kdate;

}
```
