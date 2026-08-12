---
name: I_FREIGHTORDERITEMSEALTP
description: "Freightorderitemsealtp"
app_component: TM-FRM-FRO-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
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
  - item-level
  - component:TM-FRM-FRO-2CL
  - lob:Other
---
# I_FREIGHTORDERITEMSEALTP

**Freightorderitemsealtp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdItemSealUUID` | ✓ | |  |  |  |  |
| `TransportationOrderItemUUID` |  | |  |  |  |  |
| `TransportationOrderUUID` |  | |  |  |  |  |
| `TranspOrdItemSealNumber` |  | |  |  |  |  |
| `TranspOrdItemSealingDateTime` |  | |  |  |  |  |
| `I_FreightOrderTP` |  | |  | `FreightOrderItemSeal._TransportationOrder as _FreightOrder : redirected to I_FreightOrderTP` |  |  |
| `I_FreightOrderItemTP` |  | |  | `FreightOrderItemSeal._TransportationOrderItem as _FreightOrderItem : redirected to parent I_FreightOrderItemTP` |  |  |

## Source Code

```abap
@EndUserText.label: 'Freight Order Item Seal - TP'
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
   semanticKey: ['TranspOrdItemSealNumber'],
   representativeKey: 'TranspOrdItemSealUUID',
   sapObjectNodeType.name: 'FreightOrderItemSeal'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY

define view entity I_FreightOrderItemSealTP
  as projection on R_TranspOrdItemSealTP as FreightOrderItemSeal
{
      /* Attributes */
  key TranspOrdItemSealUUID,
      TransportationOrderItemUUID,
      TransportationOrderUUID,
      TranspOrdItemSealNumber,
      TranspOrdItemSealingDateTime,

      /* Redirections */
      FreightOrderItemSeal._TransportationOrder as _FreightOrder : redirected to  I_FreightOrderTP,
      FreightOrderItemSeal._TransportationOrderItem as _FreightOrderItem : redirected to parent I_FreightOrderItemTP
}
where FreightOrderItemSeal.TransportationOrderCategory = 'TO'
```
