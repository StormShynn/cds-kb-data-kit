---
name: I_SRVCORDTMPLAPPOINTMENTTP
description: "Srvcordtmplappointmenttp"
app_component: CRM-S4-SRV-SVT-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - transactional-processing
  - component:CRM-S4-SRV-SVT-2CL
  - lob:Other
---
# I_SRVCORDTMPLAPPOINTMENTTP

**Srvcordtmplappointmenttp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SVT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceOrderTemplate` | ✓ | |  |  |  |  |
| `SrvcDocAppointmentType` | ✓ | |  |  |  |  |
| `SrvcDocApptStartDateTime` |  | |  |  |  |  |
| `SrvcDocApptEndDateTime` |  | |  |  |  |  |
| `_ServiceOrderTemplateTP` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Service Order Template Appointment - TP'
@AccessControl: {
  authorizationCheck: #MANDATORY,
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

define view entity I_SrvcOrdTmplAppointmentTP
  as projection on R_SrvcOrdTmplAppointmentTP
{
  key ServiceOrderTemplate,
  key SrvcDocAppointmentType,
      SrvcDocApptStartDateTime,
      SrvcDocApptEndDateTime,
      
      /* Associations */
      _ServiceOrderTemplateTP : redirected to parent I_ServiceOrderTemplateTP
}
```
