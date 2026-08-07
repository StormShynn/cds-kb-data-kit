---
name: I_SRVCCONFFUPTIMESHEETTP
description: Srvcconffuptimesheettp
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
# I_SRVCCONFFUPTIMESHEETTP

**Srvcconffuptimesheettp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SCO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceConfirmation` | ✓ | |  |  |  |  |
| `TimeSheetRecord` | ✓ | |  |  |  |  |
| `_ServiceConfirmationTP` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Follow-Up Time Sheet - TP'
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

define view entity I_SrvcConfFUPTimeSheetTP as projection on R_SrvcConfFUPTimeSheetTP {
  key ServiceConfirmation,
  key TimeSheetRecord,
  /* Associations */
  _ServiceConfirmationTP : redirected to parent I_ServiceConfirmationTP
}
```
