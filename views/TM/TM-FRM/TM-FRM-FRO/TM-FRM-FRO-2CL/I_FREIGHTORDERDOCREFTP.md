---
name: I_FREIGHTORDERDOCREFTP
description: Freightorderdocreftp
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
# I_FREIGHTORDERDOCREFTP

**Freightorderdocreftp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `TransportationOrderDocRefUUID` | ✓ | |  |  |
| `TransportationOrderUUID` |  | |  |  |
| `TranspOrdDocReferenceID` |  | |  |  |
| `TranspOrdDocReferenceType` |  | |  |  |
| `TranspOrdDocReferenceItmID` |  | |  |  |
| `TranspOrdDocReferenceItmType` |  | |  |  |
| `TranspOrdDocumentReferenceDate` |  | |  |  |
| `TranspOrdDocRefIssuerName` |  | |  |  |
| `I_FreightOrderTP` |  | |  | `FreightOrderDocumentReference._TransportationOrder as _FreightOrder : redirected to parent I_FreightOrderTP` |

## Source Code

```abap
@EndUserText.label: 'Freight Order Document Reference - TP'
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
   semanticKey: ['TranspOrdDocReferenceID'],
   representativeKey: 'TransportationOrderDocRefUUID',
   sapObjectNodeType.name: 'FreightOrderDocumentReference'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY

define view entity I_FreightOrderDocRefTP
  as projection on R_TranspOrdDocRefTP as FreightOrderDocumentReference
{
      /* Attributes */
  key TransportationOrderDocRefUUID,
      TransportationOrderUUID,
      TranspOrdDocReferenceID,
      TranspOrdDocReferenceType,
      TranspOrdDocReferenceItmID,
      TranspOrdDocReferenceItmType,
      TranspOrdDocumentReferenceDate,
      TranspOrdDocRefIssuerName,

      /* Redirections */
      FreightOrderDocumentReference._TransportationOrder as _FreightOrder : redirected to parent I_FreightOrderTP
}
where FreightOrderDocumentReference.TransportationOrderCategory = 'TO'
```
