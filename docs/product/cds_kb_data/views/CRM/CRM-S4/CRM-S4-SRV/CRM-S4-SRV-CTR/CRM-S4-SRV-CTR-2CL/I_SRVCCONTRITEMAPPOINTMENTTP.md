---
name: I_SRVCCONTRITEMAPPOINTMENTTP
description: "Srvccontritemappointmenttp"
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
  - item-level
  - component:CRM-S4-SRV-CTR-2CL
  - lob:Other
---
# I_SRVCCONTRITEMAPPOINTMENTTP

**Srvccontritemappointmenttp**

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
| `ServiceContractItem` | ✓ | |  |  |  |  |
| `SrvcDocAppointmentType` | ✓ | |  |  |  |  |
| `SrvcDocApptStartDateTime` |  | |  |  |  |  |
| `SrvcDocApptEndDateTime` |  | |  |  |  |  |
| `_ServiceContractItemTP` | | ✓ | | | | |
| `_ServiceContractTP` | | ✓ | | | | |
| `_SrvcDocAppointmentTypeText` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Service Contract Item Appointment - TP'
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

define view entity I_SrvcContrItemAppointmentTP
  as projection on R_SrvcContrItemAppointmentTP

{
  key ServiceContract,
  key ServiceContractItem,

      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SrvcDocAppointmentType', element: 'SrvcDocAppointmentType' },
                                            useAsTemplate: true } ]
      @ObjectModel.text.association: '_SrvcDocAppointmentTypeText'
  key SrvcDocAppointmentType,

      SrvcDocApptStartDateTime,
      SrvcDocApptEndDateTime,

      /* Associations */
      _ServiceContractItemTP : redirected to parent I_ServiceContractItemTP,
      _ServiceContractTP     : redirected to I_ServiceContractTP,

      _SrvcDocAppointmentTypeText
}
```
