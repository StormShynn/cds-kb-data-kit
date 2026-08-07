---
name: I_FREIGHTUNITITEMDOCREFTP
description: "Freightunititemdocreftp"
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
  - freight
  - item-level
  - component:TM-PLN-FU-2CL
  - lob:Other
---
# I_FREIGHTUNITITEMDOCREFTP

**Freightunititemdocreftp**

| Property | Value |
|---|---|
| App Component | `TM-PLN-FU-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdItemDocReferenceUUID` | ✓ | |  |  |  |  |
| `TransportationOrderItemUUID` |  | |  |  |  |  |
| `TransportationOrderUUID` |  | |  |  |  |  |
| `TranspOrdItemDocReferenceID` |  | |  |  |  |  |
| `TranspOrdItemDocReferenceType` |  | |  |  |  |  |
| `TranspOrdItmDocReferenceItemID` |  | |  |  |  |  |
| `TranspOrdItmDocRefItemType` |  | |  |  |  |  |
| `TranspOrdItmDocRefDate` |  | |  |  |  |  |
| `TranspOrdItemDocRefIssuerName` |  | |  |  |  |  |
| `I_FreightUnitTP` |  | |  | `FreightUnitItemDocRef._TransportationOrder as _FreightUnit : redirected to I_FreightUnitTP` |  |  |
| `I_FreightUnitItemTP` |  | |  | `FreightUnitItemDocRef._TransportationOrderItem as _FreightUnitItem: redirected to parent I_FreightUnitItemTP` |  |  |

## Source Code

```abap
@EndUserText.label: 'Freight Unit Item Doc Ref - TP'
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@ObjectModel: {
   modelingPattern: #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     sizeCategory:   #L,
     serviceQuality: #C,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['TranspOrdItemDocReferenceID'],
   representativeKey: 'TranspOrdItemDocReferenceUUID',
   sapObjectNodeType.name: 'FreightUnitItemDocRef'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY

define view entity I_FreightUnitItemDocRefTP
  as projection on R_TranspOrdItemDocRefTP as FreightUnitItemDocRef
{
      /* Attributes */
  key TranspOrdItemDocReferenceUUID,
      TransportationOrderItemUUID,
      TransportationOrderUUID,
      TranspOrdItemDocReferenceID,
      TranspOrdItemDocReferenceType,
      TranspOrdItmDocReferenceItemID,
      TranspOrdItmDocRefItemType,
      TranspOrdItmDocRefDate,
      TranspOrdItemDocRefIssuerName,

      /* Redirections */
      FreightUnitItemDocRef._TransportationOrder as _FreightUnit : redirected to I_FreightUnitTP,
      FreightUnitItemDocRef._TransportationOrderItem as _FreightUnitItem: redirected to parent I_FreightUnitItemTP
}
where FreightUnitItemDocRef.TransportationOrderCategory = 'FU'
```
