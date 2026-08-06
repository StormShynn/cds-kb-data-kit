---
name: I_BUSSOLNORDITMAPPOINTMENTTP
description: Bussolnorditmappointmenttp
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
# I_BUSSOLNORDITMAPPOINTMENTTP

**Bussolnorditmappointmenttp**

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
| key `BusinessSolutionOrderItem` | `BusinessSolutionOrderItem` |
| key `SrvcDocAppointmentType` | `SrvcDocAppointmentType` |
| `SrvcDocApptStartDateTime` | `SrvcDocApptStartDateTime` |
| `SrvcDocApptEndDateTime` | `SrvcDocApptEndDateTime` |
| `_SrvcDocAppointmentTypeText` | *Association* |
| `_BusinessSolutionOrderItemTP` | *Association* |
| `_BusinessSolutionOrderTP` | *Association* |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@EndUserText.label: 'Business Solution Order Item Appointment - TP'

@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
//  representativeKey: 'BusinessSolutionOrder',
   usageType: {dataClass:      #TRANSACTIONAL,
                serviceQuality: #C,
                sizeCategory:   #L}
}

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

define view entity I_BusSolnOrdItmAppointmentTP 
as projection on R_BusSolnOrdItmAppointmentTP
{
 key BusinessSolutionOrder,
 key BusinessSolutionOrderItem,
 @ObjectModel.text.association: '_SrvcDocAppointmentTypeText'
 @Consumption.valueHelpDefinition: [{ entity : { name: 'I_SrvcDocAppointmentType' , element:'SrvcDocAppointmentType'}, useAsTemplate: true  }]
 key SrvcDocAppointmentType,
 SrvcDocApptStartDateTime,
 SrvcDocApptEndDateTime,
 /* Associations */
 _SrvcDocAppointmentTypeText,
 _BusinessSolutionOrderItemTP : redirected to parent I_BusinessSolutionOrderItemTP,
 _BusinessSolutionOrderTP : redirected to I_BusinessSolutionOrderTP
 
}
```
