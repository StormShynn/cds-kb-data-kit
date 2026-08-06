---
name: I_FRTUNITITEMSERIALNUMBERTP
description: FRTUNITITEMSerial NumberTP
app_component: TM-PLN-FU-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-PLN
  - TM-PLN-FU
  - interface-view
  - transactional-processing
  - serial-number
  - item-level
  - component:TM-PLN-FU-2CL
  - lob:Other
---
# I_FRTUNITITEMSERIALNUMBERTP

**FRTUNITITEMSerial NumberTP**

| Property | Value |
|---|---|
| App Component | `TM-PLN-FU-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TranspOrdItemSerialNumberUUID` | `TranspOrdItemSerialNumberUUID` |
| `TransportationOrderUUID` | `TransportationOrderUUID` |
| `TransportationOrderItemUUID` | `TransportationOrderItemUUID` |
| `TranspOrdItemSerialNumber` | `TranspOrdItemSerialNumber` |
| `I_FreightUnitTP` | `FreightUnitItemSerialNumber._TransportationOrder as _FreightUnit : redirected to I_FreightUnitTP` |
| `I_FreightUnitItemTP` | `FreightUnitItemSerialNumber._TransportationOrderItem as _FreightUnitItem : redirected to parent I_FreightUnitItemTP` |

## Source Code

```abap
@EndUserText.label: 'Freight Unit Item Serial Number - TP'

@ObjectModel: { modelingPattern:       #TRANSACTIONAL_INTERFACE,
                supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
                usageType: { sizeCategory:   #L,
                             serviceQuality: #B,
                             dataClass:      #TRANSACTIONAL },
                semanticKey: ['TranspOrdItemSerialNumber'],
                representativeKey: 'TranspOrdItemSerialNumberUUID',
                sapObjectNodeType.name: 'FreightUnitItemSerialNumber' }

@AccessControl: { authorizationCheck:    #MANDATORY,
                  personalData.blocking: #('TRANSACTIONAL_DATA') }

@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #TRANSACTIONAL }

@Metadata.ignorePropagatedAnnotations: true

define view entity I_FrtUnitItemSerialNumberTP
  as projection on R_TranspOrdItemSerialNumberTP as FreightUnitItemSerialNumber
{
      /* Attributes */
  key TranspOrdItemSerialNumberUUID,
      TransportationOrderUUID,
      TransportationOrderItemUUID,
      TranspOrdItemSerialNumber,

      /* Redirections */
      FreightUnitItemSerialNumber._TransportationOrder     as _FreightUnit     : redirected to I_FreightUnitTP,
      FreightUnitItemSerialNumber._TransportationOrderItem as _FreightUnitItem : redirected to parent I_FreightUnitItemTP
}
where
  FreightUnitItemSerialNumber.TransportationOrderCategory = 'FU'
```
