---
name: I_FRTORDERITEMSERIALNUMBERTP
description: FRTORDERITEMSerial NumberTP
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
  - serial-number
  - item-level
  - component:TM-FRM-FRO-2CL
  - lob:Other
---
# I_FRTORDERITEMSERIALNUMBERTP

**FRTORDERITEMSerial NumberTP**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRO-2CL` |
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
| `I_FreightOrderTP` |  | |  | `FreightOrderItemSerialNumber._TransportationOrder as _FreightOrder : redirected to I_FreightOrderTP` |  |  |
| `I_FreightOrderItemTP` |  | |  | `FreightOrderItemSerialNumber._TransportationOrderItem as _FreightOrderItem : redirected to parent I_FreightOrderItemTP` |  |  |

## Source Code

```abap
@EndUserText.label: 'Freight Order Item Serial Number - TP'

@ObjectModel: { modelingPattern:       #TRANSACTIONAL_INTERFACE,
                supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
                usageType: { sizeCategory:   #L,
                             serviceQuality: #B,
                             dataClass:      #TRANSACTIONAL },
                semanticKey: ['TranspOrdItemSerialNumber'],
                representativeKey: 'TranspOrdItemSerialNumberUUID',
                sapObjectNodeType.name: 'FreightOrderItemSerialNumber' }

@AccessControl: { authorizationCheck: #MANDATORY,
                  personalData.blocking: #('TRANSACTIONAL_DATA') }

@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #TRANSACTIONAL }

@Metadata.ignorePropagatedAnnotations: true

define view entity I_FrtOrderItemSerialNumberTP
  as projection on R_TranspOrdItemSerialNumberTP as FreightOrderItemSerialNumber
{
      /* Attributes */
  key TranspOrdItemSerialNumberUUID,
      TransportationOrderUUID,
      TransportationOrderItemUUID,
      TranspOrdItemSerialNumber,
      
      /* Redirections */
      FreightOrderItemSerialNumber._TransportationOrder     as _FreightOrder     : redirected to        I_FreightOrderTP,
      FreightOrderItemSerialNumber._TransportationOrderItem as _FreightOrderItem : redirected to parent I_FreightOrderItemTP
}
where 
  FreightOrderItemSerialNumber.TransportationOrderCategory = 'TO'
```
