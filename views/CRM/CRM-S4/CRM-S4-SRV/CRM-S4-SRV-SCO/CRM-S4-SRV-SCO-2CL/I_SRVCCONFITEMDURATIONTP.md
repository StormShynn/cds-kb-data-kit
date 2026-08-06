---
name: I_SRVCCONFITEMDURATIONTP
description: Srvcconfitemdurationtp
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
  - item-level
  - component:CRM-S4-SRV-SCO-2CL
  - lob:Other
---
# I_SRVCCONFITEMDURATIONTP

**Srvcconfitemdurationtp**

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
| key `SrvcDocDurationType` | `SrvcDocDurationType` |
| `SrvcDocDurationValue` | `SrvcDocDurationValue` |
| `SrvcDocDurationUnit` | `SrvcDocDurationUnit` |
| `_ServiceConfItemTP` | *Association* |
| `_ServiceConfTP` | *Association* |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@EndUserText.label: 'Service Confirmation Item Duration - TP'
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {

   usageType: {dataClass:      #TRANSACTIONAL,
                serviceQuality: #C,
                sizeCategory:   #L}
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

define view entity I_SrvcConfItemDurationTP
  as projection on R_SrvcConfItemDurationTP
{
  key ServiceConfirmation,
  key ServiceConfirmationItem,
  key SrvcDocDurationType,
      SrvcDocDurationValue,
      SrvcDocDurationUnit,
      /* Associations */
      _ServiceConfItemTP : redirected to parent I_ServiceConfirmationItemTP,
      _ServiceConfTP     : redirected to I_ServiceConfirmationTP
}
```
