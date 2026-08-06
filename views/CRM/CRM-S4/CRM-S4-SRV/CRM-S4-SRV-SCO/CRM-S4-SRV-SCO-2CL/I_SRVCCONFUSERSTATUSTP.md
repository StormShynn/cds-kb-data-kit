---
name: I_SRVCCONFUSERSTATUSTP
description: Srvcconfuserstatustp
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
  - status
  - component:CRM-S4-SRV-SCO-2CL
  - lob:Other
---
# I_SRVCCONFUSERSTATUSTP

**Srvcconfuserstatustp**

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
| key `UserStatus` | `UserStatus` |
| `StatusProfile` | `StatusProfile` |
| `_StatusCode` | *Association* |
| `_StatusProfile` | *Association* |
| `_ServiceConfirmationTP` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Service Confirmation User Status - TP'
@AccessControl.authorizationCheck: #CHECK
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel: {
   
   usageType: { dataClass:      #TRANSACTIONAL,
                serviceQuality: #B,
                sizeCategory:   #L}
}

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

define view entity I_SrvcConfUserStatusTP
  as projection on R_SrvcConfUserStatusTP
{
  key ServiceConfirmation,
  key UserStatus,
      StatusProfile,

      /* Associations */
      _StatusCode,
      _StatusProfile,

      _ServiceConfirmationTP : redirected to parent I_ServiceConfirmationTP
}
```
