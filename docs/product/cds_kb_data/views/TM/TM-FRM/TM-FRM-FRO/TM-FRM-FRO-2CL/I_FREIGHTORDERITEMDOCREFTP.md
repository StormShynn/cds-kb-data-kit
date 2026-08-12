---
name: I_FREIGHTORDERITEMDOCREFTP
description: "Freightorderitemdocreftp"
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
# I_FREIGHTORDERITEMDOCREFTP

**Freightorderitemdocreftp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRO-2CL` |
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
| `I_FreightOrderTP` |  | |  | `FreightOrderItemDocRef._TransportationOrder as _FreightOrder : redirected to I_FreightOrderTP` |  |  |
| `I_FreightOrderItemTP` |  | |  | `FreightOrderItemDocRef._TransportationOrderItem as _FreightOrderItem : redirected to parent I_FreightOrderItemTP` |  |  |

## Source Code

```abap
@EndUserText.label: 'Freight Order Item Doc Ref - TP'
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
   semanticKey: ['TranspOrdItemDocReferenceID'],
   representativeKey: 'TranspOrdItemDocReferenceUUID',
   sapObjectNodeType.name: 'FreightOrderItemDocRef'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY
                 
define view entity I_FreightOrderItemDocRefTP
  as projection on R_TranspOrdItemDocRefTP as FreightOrderItemDocRef
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
      FreightOrderItemDocRef._TransportationOrder as _FreightOrder : redirected to  I_FreightOrderTP,
      FreightOrderItemDocRef._TransportationOrderItem as _FreightOrderItem : redirected to parent I_FreightOrderItemTP
}
where FreightOrderItemDocRef.TransportationOrderCategory = 'TO'
```
