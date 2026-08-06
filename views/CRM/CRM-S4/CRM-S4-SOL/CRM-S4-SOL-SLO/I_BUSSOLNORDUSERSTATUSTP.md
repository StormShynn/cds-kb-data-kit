---
name: I_BUSSOLNORDUSERSTATUSTP
description: Bussolnorduserstatustp
app_component: CRM-S4-SOL-SLO
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
  - component:CRM-S4-SOL-SLO
  - lob:Other
---
# I_BUSSOLNORDUSERSTATUSTP

**Bussolnorduserstatustp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SOL-SLO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BusinessSolutionOrder` | `BusinessSolutionOrder` |
| key `UserStatus` | `UserStatus` |
| `StatusProfile` | `StatusProfile` |
| `_BusinessSolutionOrderTP` | *Association* |
| `_StatusCode` | *Association* |
| `_StatusProfile` | *Association* |
| `_UserStatusText` | *Association* |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   usageType: {
    dataClass:      #TRANSACTIONAL,
    serviceQuality: #C,
    sizeCategory:   #L
    }
}

@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@EndUserText.label: 'Business Solution Order User Status - TP'
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

define view entity I_BusSolnOrdUserStatusTP
  as projection on R_BusSolnOrdUserStatusTP
{

  key BusinessSolutionOrder,
  @ObjectModel.text.association: '_UserStatusText'
  key UserStatus,
      
      StatusProfile,

      // Associations
      _BusinessSolutionOrderTP : redirected to parent I_BusinessSolutionOrderTP,
      _StatusCode,
      _StatusProfile,
      _UserStatusText
}
```
