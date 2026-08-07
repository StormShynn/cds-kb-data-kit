---
name: I_SRVCQTANAPPOINTMENTTP
description: "Srvcqtanappointmenttp"
app_component: CRM-S4-SRV-SVQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - transactional-processing
  - component:CRM-S4-SRV-SVQ-2CL
  - lob:Other
---
# I_SRVCQTANAPPOINTMENTTP

**Srvcqtanappointmenttp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SVQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceQuotation` | ✓ | |  |  |  |  |
| `SrvcDocAppointmentType` | ✓ | |  |  |  |  |
| `SrvcDocApptStartDateTime` |  | |  |  |  |  |
| `SrvcDocApptEndDateTime` |  | |  |  |  |  |
| `_ServiceQuotationTP` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Service Quotation Appointment - TP'
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
                sizeCategory:   #L},
    modelingPattern:        #TRANSACTIONAL_INTERFACE,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER]                  
}
@Metadata.ignorePropagatedAnnotations: true

define view entity I_SrvcQtanAppointmentTP
  as projection on R_SrvcQtanAppointmentTP
{
  key ServiceQuotation,
  key SrvcDocAppointmentType,
      SrvcDocApptStartDateTime,
      SrvcDocApptEndDateTime,

      /* Associations */
      _ServiceQuotationTP : redirected to parent I_ServiceQuotationTP
}
```
