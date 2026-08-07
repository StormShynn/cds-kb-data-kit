---
name: I_SRVCORDAPPOINTMENTTP
description: Srvcordappointmenttp
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
  - component:CRM-S4-SRV-SVO-2CL
  - lob:Other
---
# I_SRVCORDAPPOINTMENTTP

**Srvcordappointmenttp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SVO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ServiceOrder` | ✓ | |  |  |
| `SrvcDocAppointmentType` | ✓ | |  |  |
| `SrvcDocApptStartDateTime` |  | |  |  |
| `SrvcDocApptEndDateTime` |  | |  |  |
| `_ServiceOrderTP` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Service Order Appointment - TP'
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
//   representativeKey: 'ServiceOrder',
   usageType: {dataClass:      #TRANSACTIONAL,
                serviceQuality: #B,
                sizeCategory:   #L}
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

define view entity I_SrvcOrdAppointmentTP
  as projection on R_SrvcOrdAppointmentTP
{
  key ServiceOrder,
  key SrvcDocAppointmentType,
      SrvcDocApptStartDateTime,
      SrvcDocApptEndDateTime,
      
      /* Associations */
      _ServiceOrderTP : redirected to parent I_ServiceOrderTP
}
```
