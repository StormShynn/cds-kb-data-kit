---
name: I_SRVCCONFITMFUPTIMESHEETTP
description: Srvcconfitmfuptimesheettp
app_component: CRM-S4-SRV-SCO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - transactional-processing
  - component:CRM-S4-SRV-SCO-2CL
  - lob:Other
---
# I_SRVCCONFITMFUPTIMESHEETTP

**Srvcconfitmfuptimesheettp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SCO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ServiceConfirmation` | `ServiceConfirmation` |
| key `ServiceConfirmationItem` | `ServiceConfirmationItem` |
| key `TimeSheetRecord` | `TimeSheetRecord` |
| `_ServiceConfirmationItem` | *Association* |
| `_ServiceConfirmationTP` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Item Follow-Up Time Sheet - TP'
@AccessControl.authorizationCheck: #CHECK
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel: {
   
   usageType: { dataClass:      #TRANSACTIONAL,
                serviceQuality: #C,
                sizeCategory:   #L}
}

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

define view entity I_SrvcConfItmFUPTimeSheetTP as projection on R_SrvcConfItmFUPTimeSheetTP {
  key ServiceConfirmation,
  key ServiceConfirmationItem,
  key TimeSheetRecord,

  /* Associations */
  _ServiceConfirmationItem : redirected to parent I_ServiceConfirmationItemTP,
  _ServiceConfirmationTP   : redirected to I_ServiceConfirmationTP
}
```
