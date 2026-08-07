---
name: I_SRVCORDITEMUSERSTATUSTP
description: "Srvcorditemuserstatustp"
app_component: CRM-S4-SRV-SVO-2CL
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
  - item-level
  - component:CRM-S4-SRV-SVO-2CL
  - lob:Other
---
# I_SRVCORDITEMUSERSTATUSTP

**Srvcorditemuserstatustp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SVO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceOrder` | ✓ | |  |  |  |  |
| `ServiceOrderItem` | ✓ | |  |  |  |  |
| `UserStatus` | ✓ | |  |  |  |  |
| `StatusProfile` |  | |  |  |  |  |
| `_StatusCode` | | ✓ | | | | |
| `_StatusProfile` | | ✓ | | | | |
| `_ServiceOrderItemTP` | | ✓ | | | | |
| `_ServiceOrderTP` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Service Order Item User Status - TP'
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
   usageType: {dataClass:      #TRANSACTIONAL,
                serviceQuality: #B,
                sizeCategory:   #L}
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
define view entity I_SrvcOrdItemUserStatusTP
  as projection on R_SrvcOrdItemUserStatusTP
{
  key ServiceOrder,
  key ServiceOrderItem,
  key UserStatus,
      StatusProfile,

      /* Associations */
      _StatusCode,
      _StatusProfile,

      _ServiceOrderItemTP : redirected to parent I_ServiceOrderItemTP,
      _ServiceOrderTP     : redirected to I_ServiceOrderTP
}
```
