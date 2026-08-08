---
name: I_FREIGHTBOOKINGTP
description: "Freightbookingtp"
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
  - freight
  - component:TM-FRM-FRB-2CL
  - lob:Other
---
# I_FREIGHTBOOKINGTP

**Freightbookingtp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRB-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationOrderUUID` | ✓ | |  |  |  |  |
| `TransportationOrder` |  | |  |  |  |  |
| `TransportationOrderType` |  | |  |  |  |  |
| `TransportationOrderCategory` |  | |  |  |  |  |
| `TransportationShippingType` |  | |  |  |  |  |
| `MovementType` |  | |  |  |  |  |
| `TransportationMode` |  | |  |  |  |  |
| `TransportationModeCategory` |  | |  |  |  |  |
| `CarrierUUID` |  | |  |  |  |  |
| `Carrier` |  | |  |  |  |  |
| `StandardCarrierAlphaCode` |  | |  |  |  |  |
| `TranspOrdExecutingCarrierUUID` |  | |  |  |  |  |
| `TranspOrdExecutingCarrier` |  | |  |  |  |  |
| `ShipperUUID` |  | |  |  |  |  |
| `Shipper` |  | |  |  |  |  |
| `ShipperAddressID` |  | |  |  |  |  |
| `ConsigneeUUID` |  | |  |  |  |  |
| `Consignee` |  | |  |  |  |  |
| `ConsigneeAddressID` |  | |  |  |  |  |
| `TranspPurgOrg` |  | |  |  |  |  |
| `TranspPurgOrgExtID` |  | |  |  |  |  |
| `TranspPurgGroup` |  | |  |  |  |  |
| `TranspPurgGroupExtID` |  | |  |  |  |  |
| `PurgOrgCompanyCode` |  | |  |  |  |  |
| `CarrierAccountNumber` |  | |  |  |  |  |
| `TranspOrdPartnerReference` |  | |  |  |  |  |
| `MasterBillOfLading` |  | |  |  |  |  |
| `TranspOrdResponsiblePerson` |  | |  |  |  |  |
| `TranspOrdHasMltplExectgPties` |  | |  |  |  |  |
| `TranspOrdInvoicingCarrierLevel` |  | |  |  |  |  |
| `TranspOrdOrderDateTime` |  | |  |  |  |  |
| `TranspOrdLifeCycleStatus` |  | |  |  |  |  |
| `TranspOrderSubcontrgSts` |  | |  |  |  |  |
| `TransportationOrderConfSts` |  | |  |  |  |  |
| `TransportationOrderExecSts` |  | |  |  |  |  |
| `TranspOrdGoodsMovementStatus` |  | |  |  |  |  |
| `TranspOrdWhseProcessingStatus` |  | |  |  |  |  |
| `TranspOrderDngrsGdsSts` |  | |  |  |  |  |
| `TranspOrdExecutionIsBlocked` |  | |  |  |  |  |
| `TransportationOrderCrtnType` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `ChangedDateTime` |  | |  |  |  |  |
| `I_FreightBookingBPTP` |  | |  | `FreightBooking._TransportationOrderBP as _FreightBookingBusinessPartner : redirected to composition child I_FreightBookingBPTP` |  |  |
| `I_FreightBookingDocRefTP` |  | |  | `FreightBooking._TranspOrdDocumentReference as _FreightBookingDocRef : redirected to composition child I_FreightBookingDocRefTP` |  |  |
| `I_FreightBookingItemTP` |  | |  | `FreightBooking._TransportationOrderItem as _FreightBookingItem : redirected to composition child I_FreightBookingItemTP` |  |  |
| `I_FreightBookingStopTP` |  | |  | `FreightBooking._TransportationOrderStop as _FreightBookingStop : redirected to composition child I_FreightBookingStopTP` |  |  |
| `I_FreightBookingEventTP` |  | |  | `FreightBooking._TransportationOrderEvent as _FreightBookingEvent : redirected to composition child I_FreightBookingEventTP` |  |  |
| `I_FreightBookingChargeTP` |  | |  | `FreightBooking._TransportationOrderCharge as _FreightBookingCharge : redirected to composition child I_FreightBookingChargeTP` |  |  |
| `I_FrtBkgMainBPAddrDfltRprstnTP` |  | |  | `FreightBooking._TrOrdMainBPAddrDfltRprstn as _FrtBkgMainBPAddrDfltRprstn : redirected to composition child I_FrtBkgMainBPAddrDfltRprstnTP` |  |  |

## Source Code

```abap
@EndUserText.label: 'Freight Booking - TP'
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
   semanticKey: ['TransportationOrder'],
   representativeKey: 'TransportationOrderUUID',
   sapObjectNodeType.name: 'FreightBooking'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY

define root view entity I_FreightBookingTP
  provider contract transactional_interface
  as projection on R_TransportationOrderTP as FreightBooking
{
      /* Attributes */
      // Identification
  key TransportationOrderUUID,
      TransportationOrder,

      // Key Characteristics
      TransportationOrderType,
      TransportationOrderCategory,
      TransportationShippingType,
      MovementType,
      TransportationMode,
      TransportationModeCategory,

      // Parties
      CarrierUUID,
      Carrier,
      StandardCarrierAlphaCode,
      TranspOrdExecutingCarrierUUID,
      TranspOrdExecutingCarrier,
      ShipperUUID,
      Shipper,
      ShipperAddressID,
      ConsigneeUUID,
      Consignee,
      ConsigneeAddressID,

      TranspPurgOrg,
      TranspPurgOrgExtID,
      TranspPurgGroup,
      TranspPurgGroupExtID,
      PurgOrgCompanyCode,
      CarrierAccountNumber,

      // Further Characteristics
      TranspOrdPartnerReference,
      MasterBillOfLading,
      TranspOrdResponsiblePerson,
      TranspOrdHasMltplExectgPties,
      TranspOrdInvoicingCarrierLevel,
      TranspOrdOrderDateTime,

      // Status
      TranspOrdLifeCycleStatus,
      TranspOrderSubcontrgSts,
      TransportationOrderConfSts,
      TransportationOrderExecSts,
      TranspOrdGoodsMovementStatus,
      TranspOrdWhseProcessingStatus,
      TranspOrderDngrsGdsSts,
      @Semantics.booleanIndicator: true
      TranspOrdExecutionIsBlocked,

      // Administrative Data
      TransportationOrderCrtnType,
      CreatedByUser,
      CreationDateTime,
      LastChangedByUser,
      ChangedDateTime,

      /* Redirections */
      FreightBooking._TransportationOrderBP       as _FreightBookingBusinessPartner : redirected to composition child I_FreightBookingBPTP,
      FreightBooking._TranspOrdDocumentReference  as _FreightBookingDocRef          : redirected to composition child I_FreightBookingDocRefTP,
      FreightBooking._TransportationOrderItem     as _FreightBookingItem            : redirected to composition child I_FreightBookingItemTP,
      FreightBooking._TransportationOrderStop     as _FreightBookingStop            : redirected to composition child I_FreightBookingStopTP,
      FreightBooking._TransportationOrderEvent    as _FreightBookingEvent           : redirected to composition child I_FreightBookingEventTP,
      FreightBooking._TransportationOrderCharge   as _FreightBookingCharge          : redirected to composition child I_FreightBookingChargeTP,
      FreightBooking._TrOrdMainBPAddrDfltRprstn   as _FrtBkgMainBPAddrDfltRprstn    : redirected to composition child I_FrtBkgMainBPAddrDfltRprstnTP,

      /* Association redirections */
      FreightBooking._CarrierAddrDfltRprstn       as _CarrierAddrDfltRprstn         : redirected to I_FrtBkgMainBPAddrDfltRprstnTP,
      FreightBooking._ShipperAddrDfltRprstn       as _ShipperAddrDfltRprstn         : redirected to I_FrtBkgMainBPAddrDfltRprstnTP,
      FreightBooking._ConsigneeAddrDfltRprstn     as _ConsigneeAddrDfltRprstn       : redirected to I_FrtBkgMainBPAddrDfltRprstnTP,
      FreightBooking._ExectgCarrierAddrDfltRprstn as _ExectgCarrierAddrDfltRprstn   : redirected to I_FrtBkgMainBPAddrDfltRprstnTP
      
}
where
  TransportationOrderCategory = 'BO'
```
