---
name: I_BUSSOLNORDITMUSERSTATUSTP
description: "Bussolnorditmuserstatustp"
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
# I_BUSSOLNORDITMUSERSTATUSTP

**Bussolnorditmuserstatustp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SOL-SLO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessSolutionOrder` | ✓ | |  |  |  |  |
| `BusinessSolutionOrderItem` | ✓ | |  |  |  |  |
| `UserStatus` | ✓ | |  |  |  |  |
| `StatusProfile` |  | |  |  |  |  |
| `_BusinessSolutionOrderItemTP` | | ✓ | | | | |
| `_BusinessSolutionOrderTP` | | ✓ | | | | |
| `_StatusCode` | | ✓ | | | | |
| `_StatusProfile` | | ✓ | | | | |
| `_UserStatusText` | | ✓ | | | | |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  usageType:{
    dataClass:      #TRANSACTIONAL,
    serviceQuality: #C,
    sizeCategory:   #L
    }
}

@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@EndUserText.label: 'Business Solution Order User Status - TP'

define view entity I_BusSolnOrdItmUserStatusTP
  as projection on R_BusSolnOrdItmUserStatusTP
{

  key BusinessSolutionOrder,
  key BusinessSolutionOrderItem,
  @ObjectModel.text.association: '_UserStatusText'
  key UserStatus,

      StatusProfile,

      // Associations
      _BusinessSolutionOrderItemTP : redirected to parent I_BusinessSolutionOrderItemTP,
      _BusinessSolutionOrderTP     : redirected to I_BusinessSolutionOrderTP,
      _StatusCode,
      _StatusProfile,
      _UserStatusText
}
```
