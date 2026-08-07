---
name: I_SRVCCONFITEMAPPOINTMENTTP
description: Srvcconfitemappointmenttp
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
# I_SRVCCONFITEMAPPOINTMENTTP

**Srvcconfitemappointmenttp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SCO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ServiceConfirmation` | ✓ | |  |  |
| `ServiceConfirmationItem` | ✓ | |  |  |
| `SrvcDocAppointmentType` | ✓ | |  |  |
| `SrvcDocApptStartDateTime` |  | |  |  |
| `SrvcDocApptEndDateTime` |  | |  |  |
| `_ServiceConfItemTP` | | ✓ | | |
| `_ServiceConfTP` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Service Confirmation Item Dates - TP'
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
//   representativeKey: 'ServiceConfirmation',
   usageType: {dataClass:      #TRANSACTIONAL,
                serviceQuality: #C,
                sizeCategory:   #L}
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

define view entity I_SrvcConfItemAppointmentTP
  as projection on R_SrvcConfItemAppointmentTP
{
  key ServiceConfirmation,
  key ServiceConfirmationItem,
  key SrvcDocAppointmentType,
      SrvcDocApptStartDateTime,
      SrvcDocApptEndDateTime,

      /* Associations */
      _ServiceConfItemTP : redirected to parent I_ServiceConfirmationItemTP,
      _ServiceConfTP     : redirected to I_ServiceConfirmationTP
}
```
