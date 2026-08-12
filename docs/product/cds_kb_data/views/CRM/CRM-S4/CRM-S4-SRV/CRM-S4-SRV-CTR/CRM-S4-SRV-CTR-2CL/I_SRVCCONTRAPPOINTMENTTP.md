---
name: I_SRVCCONTRAPPOINTMENTTP
description: "Srvccontrappointmenttp"
app_component: CRM-S4-SRV-CTR-2CL
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
  - component:CRM-S4-SRV-CTR-2CL
  - lob:Other
---
# I_SRVCCONTRAPPOINTMENTTP

**Srvccontrappointmenttp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceContract` | ✓ | |  |  |  |  |
| `SrvcDocAppointmentType` | ✓ | |  |  |  |  |
| `SrvcDocApptStartDateTime` |  | |  |  |  |  |
| `SrvcDocApptEndDateTime` |  | |  |  |  |  |
| `_ServiceContractTP` | | ✓ | | | | |
| `_SrvcDocAppointmentTypeText` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Service Contract Appointment - TP'
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

define view entity I_SrvcContrAppointmentTP
  as projection on R_SrvcContrAppointmentTP

{
  key ServiceContract,

      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SrvcDocAppointmentType', element: 'SrvcDocAppointmentType' },
                                            useAsTemplate: true } ]
      @ObjectModel.text.association: '_SrvcDocAppointmentTypeText'
  key SrvcDocAppointmentType,

      SrvcDocApptStartDateTime,
      SrvcDocApptEndDateTime,

      /* Associations */
      _ServiceContractTP : redirected to parent I_ServiceContractTP,

      _SrvcDocAppointmentTypeText
}
```
