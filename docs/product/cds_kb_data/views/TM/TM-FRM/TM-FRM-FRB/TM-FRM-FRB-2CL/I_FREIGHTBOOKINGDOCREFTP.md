---
name: I_FREIGHTBOOKINGDOCREFTP
description: "Freightbookingdocreftp"
app_component: TM-FRM-FRB-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRM
  - TM-FRM-FRB
  - interface-view
  - transactional-processing
  - freight
  - component:TM-FRM-FRB-2CL
  - lob:Other
---
# I_FREIGHTBOOKINGDOCREFTP

**Freightbookingdocreftp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRB-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationOrderDocRefUUID` | ✓ | |  |  |  |  |
| `TransportationOrderUUID` |  | |  |  |  |  |
| `TranspOrdDocReferenceID` |  | |  |  |  |  |
| `TranspOrdDocReferenceType` |  | |  |  |  |  |
| `TranspOrdDocReferenceItmID` |  | |  |  |  |  |
| `TranspOrdDocReferenceItmType` |  | |  |  |  |  |
| `TranspOrdDocumentReferenceDate` |  | |  |  |  |  |
| `TranspOrdDocRefIssuerName` |  | |  |  |  |  |
| `I_FreightBookingTP` |  | |  | `FreightBookingDocRef._TransportationOrder as _FreightBooking : redirected to parent I_FreightBookingTP` |  |  |

## Source Code

```abap
@EndUserText.label: 'Freight Booking Document Reference - TP'
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
   sapObjectNodeType.name: 'FreightBookingDocRef'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY

define view entity I_FreightBookingDocRefTP
  as projection on R_TranspOrdDocRefTP as FreightBookingDocRef
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
      FreightBookingDocRef._TransportationOrder as _FreightBooking : redirected to parent I_FreightBookingTP
}
where FreightBookingDocRef.TransportationOrderCategory = 'BO'
```
