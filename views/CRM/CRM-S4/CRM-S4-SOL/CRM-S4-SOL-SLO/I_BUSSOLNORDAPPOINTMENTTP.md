---
name: I_BUSSOLNORDAPPOINTMENTTP
description: Bussolnordappointmenttp
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
  - component:CRM-S4-SOL-SLO
  - lob:Other
---
# I_BUSSOLNORDAPPOINTMENTTP

**Bussolnordappointmenttp**

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
| key `SrvcDocAppointmentType` | `SrvcDocAppointmentType` |
| `SrvcDocApptStartDateTime` | `SrvcDocApptStartDateTime` |
| `SrvcDocApptEndDateTime` | `SrvcDocApptEndDateTime` |
| `_SrvcDocAppointmentTypeText` | *Association* |
| `_BusinessSolutionOrderTP` | *Association* |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #C,
     sizeCategory:   #L
   },
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}
@EndUserText.label: 'Business Solution Order Appointment - TP'
define view entity I_BusSolnOrdAppointmentTP 
as projection on R_BusSolnOrdAppointmentTP
{
  key BusinessSolutionOrder,
  @Consumption.valueHelpDefinition: [{ entity : { name: 'I_SrvcDocAppointmentType' , element:'SrvcDocAppointmentType'}, useAsTemplate: true  }]
  @ObjectModel.text.association: '_SrvcDocAppointmentTypeText'
  key SrvcDocAppointmentType, 
    SrvcDocApptStartDateTime,
    SrvcDocApptEndDateTime,
    

    _SrvcDocAppointmentTypeText,
    
    _BusinessSolutionOrderTP : redirected to parent I_BusinessSolutionOrderTP
}
```
