---
name: I_FRTBOOKINGITEMSERIALNUMBERTP
description: "FRTBOOKINGITEMSerial NumberTP"
app_component: TM-FRM-FRB-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRM
  - TM-FRM-FRB
  - interface-view
  - transactional-processing
  - serial-number
  - item-level
  - component:TM-FRM-FRB-2CL
  - lob:Other
---
# I_FRTBOOKINGITEMSERIALNUMBERTP

**FRTBOOKINGITEMSerial NumberTP**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRB-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdItemSerialNumberUUID` | ✓ | |  |  |  |  |
| `TransportationOrderUUID` |  | |  |  |  |  |
| `TransportationOrderItemUUID` |  | |  |  |  |  |
| `TranspOrdItemSerialNumber` |  | |  |  |  |  |
| `I_FreightBookingTP` |  | |  | `FrtBookingItemSerialNumber._TransportationOrder as _FreightBooking : redirected to I_FreightBookingTP` |  |  |
| `I_FreightBookingItemTP` |  | |  | `FrtBookingItemSerialNumber._TransportationOrderItem as _FreightBookingItem : redirected to parent I_FreightBookingItemTP` |  |  |

## Source Code

```abap
@EndUserText.label: 'Freight Booking Item Serial Number - TP'

@ObjectModel: { modelingPattern:       #TRANSACTIONAL_INTERFACE,
                supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
                usageType: { sizeCategory:   #L,
                             serviceQuality: #B,
                             dataClass:      #TRANSACTIONAL },
                 semanticKey: ['TranspOrdItemSerialNumber'],
                 representativeKey: 'TranspOrdItemSerialNumberUUID',
                 sapObjectNodeType.name: 'FreightBookingItemSerialNumber' }

@AccessControl: { authorizationCheck:    #MANDATORY,
                  personalData.blocking: #('TRANSACTIONAL_DATA') }

@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #TRANSACTIONAL }

@Metadata.ignorePropagatedAnnotations: true

define view entity I_FrtBookingItemSerialNumberTP
  as projection on R_TranspOrdItemSerialNumberTP as FrtBookingItemSerialNumber
{
      /* Attributes */
  key TranspOrdItemSerialNumberUUID,
      TransportationOrderUUID,
      TransportationOrderItemUUID,
      TranspOrdItemSerialNumber,

      /* Redirections */
      FrtBookingItemSerialNumber._TransportationOrder     as _FreightBooking     : redirected to I_FreightBookingTP,
      FrtBookingItemSerialNumber._TransportationOrderItem as _FreightBookingItem : redirected to parent I_FreightBookingItemTP
}
where
  FrtBookingItemSerialNumber.TransportationOrderCategory = 'BO'
```
