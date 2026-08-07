---
name: I_FREIGHTORDEREVENTTP
description: Freightordereventtp
app_component: TM-FRM-FRO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRM
  - TM-FRM-FRO
  - interface-view
  - transactional-processing
  - freight
  - component:TM-FRM-FRO-2CL
  - lob:Other
---
# I_FREIGHTORDEREVENTTP

**Freightordereventtp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationOrderEventUUID` | ✓ | |  |  |  |  |
| `TransportationOrderUUID` |  | |  |  |  |  |
| `TransportationOrderEvent` |  | |  |  |  |  |
| `TranspOrdEventCode` |  | |  |  |  |  |
| `TranspOrdEvtActualDateTime` |  | |  |  |  |  |
| `TranspOrdEvtActualDateTimeZone` |  | |  |  |  |  |
| `TranspOrdEvtEstimatedDateTime` |  | |  |  |  |  |
| `LocationAdditionalUUID` |  | |  |  |  |  |
| `TransportationOrderStopUUID` |  | |  |  |  |  |
| `TransportationOrderItemUUID` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `ChangedDateTime` |  | |  |  |  |  |
| `I_FreightOrderTP` |  | |  | `FreightOrderEvent._TransportationOrder as _FreightOrder : redirected to parent I_FreightOrderTP` |  |  |

## Source Code

```abap
@EndUserText.label: 'Freight Order Event - TP'
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     sizeCategory:   #L,
     serviceQuality: #C,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['TransportationOrderEvent'],
   representativeKey: 'TransportationOrderEventUUID',
   sapObjectNodeType.name: 'FreightOrderEvent'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY

define view entity I_FreightOrderEventTP
  as projection on R_TransportationOrderEventTP as FreightOrderEvent
{
      /* Attributes */
      // Identification
  key TransportationOrderEventUUID,
      TransportationOrderUUID,
      TransportationOrderEvent,
      TranspOrdEventCode,
      
      // Dates and Times
      TranspOrdEvtActualDateTime,
      TranspOrdEvtActualDateTimeZone,
      TranspOrdEvtEstimatedDateTime,

      // Location
      LocationAdditionalUUID,
            
      // Event References
      TransportationOrderStopUUID,
      TransportationOrderItemUUID,

      // Administrative Data
      CreatedByUser,
      CreationDateTime,
      LastChangedByUser,
      ChangedDateTime,

      /* Redirections */
      FreightOrderEvent._TransportationOrder as _FreightOrder : redirected to parent I_FreightOrderTP
}
where FreightOrderEvent.TransportationOrderCategory = 'TO'
```
