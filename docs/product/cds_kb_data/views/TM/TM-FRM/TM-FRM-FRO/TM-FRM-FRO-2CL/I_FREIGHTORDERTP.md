---
name: I_FREIGHTORDERTP
description: "Freightordertp"
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
  - component:TM-FRM-FRO-2CL
  - lob:Other
---
# I_FREIGHTORDERTP

**Freightordertp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRO-2CL` |
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
| `TranspMeansOfTransport` |  | |  |  |  |  |
| `TranspOrdPartnerReference` |  | |  |  |  |  |
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
| `I_FreightOrderBPTP` |  | |  | `FreightOrder._TransportationOrderBP as _FreightOrderBusinessPartner : redirected to composition child I_FreightOrderBPTP` |  |  |
| `I_FreightOrderDocRefTP` |  | |  | `FreightOrder._TranspOrdDocumentReference as _FreightOrderDocumentReference : redirected to composition child I_FreightOrderDocRefTP` |  |  |
| `I_FreightOrderItemTP` |  | |  | `FreightOrder._TransportationOrderItem as _FreightOrderItem : redirected to composition child I_FreightOrderItemTP` |  |  |
| `I_FreightOrderStopTP` |  | |  | `FreightOrder._TransportationOrderStop as _FreightOrderStop : redirected to composition child I_FreightOrderStopTP` |  |  |
| `I_FreightOrderEventTP` |  | |  | `FreightOrder._TransportationOrderEvent as _FreightOrderEvent : redirected to composition child I_FreightOrderEventTP` |  |  |
| `I_FreightOrderChargeTP` |  | |  | `FreightOrder._TransportationOrderCharge as _FreightOrderCharge : redirected to composition child I_FreightOrderChargeTP` |  |  |
| `I_FrtOrdMainBPAddrDfltRprstnTP` |  | |  | `FreightOrder._TrOrdMainBPAddrDfltRprstn as _FrtOrdMainBPAddrDfltRprstn : redirected to composition child I_FrtOrdMainBPAddrDfltRprstnTP` |  |  |

## Source Code

```abap
@EndUserText.label: 'Freight Order - TP'
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
   sapObjectNodeType.name: 'FreightOrder'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY

define root view entity I_FreightOrderTP
  provider contract transactional_interface
  as projection on R_TransportationOrderTP as FreightOrder

{
      /* Attributes */
      // Identification
  key TransportationOrderUUID,
      TransportationOrder,

      // Key Characteristics
      TransportationOrderType,
      TransportationOrderCategory,
      TransportationShippingType,
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

      // Further Attributes
      TranspMeansOfTransport,
      TranspOrdPartnerReference,
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
      FreightOrder._TransportationOrderBP       as _FreightOrderBusinessPartner   : redirected to composition child I_FreightOrderBPTP,
      FreightOrder._TranspOrdDocumentReference  as _FreightOrderDocumentReference : redirected to composition child I_FreightOrderDocRefTP,
      FreightOrder._TransportationOrderItem     as _FreightOrderItem              : redirected to composition child I_FreightOrderItemTP,
      FreightOrder._TransportationOrderStop     as _FreightOrderStop              : redirected to composition child I_FreightOrderStopTP,
      FreightOrder._TransportationOrderEvent    as _FreightOrderEvent             : redirected to composition child I_FreightOrderEventTP,
      FreightOrder._TransportationOrderCharge   as _FreightOrderCharge            : redirected to composition child I_FreightOrderChargeTP,
      FreightOrder._TrOrdMainBPAddrDfltRprstn   as _FrtOrdMainBPAddrDfltRprstn    : redirected to composition child I_FrtOrdMainBPAddrDfltRprstnTP,

      /* Association redirections */
      FreightOrder._CarrierAddrDfltRprstn       as _CarrierAddrDfltRprstn         : redirected to I_FrtOrdMainBPAddrDfltRprstnTP,
      FreightOrder._ShipperAddrDfltRprstn       as _ShipperAddrDfltRprstn         : redirected to I_FrtOrdMainBPAddrDfltRprstnTP,
      FreightOrder._ConsigneeAddrDfltRprstn     as _ConsigneeAddrDfltRprstn       : redirected to I_FrtOrdMainBPAddrDfltRprstnTP,
      FreightOrder._ExectgCarrierAddrDfltRprstn as _ExectgCarrierAddrDfltRprstn   : redirected to I_FrtOrdMainBPAddrDfltRprstnTP

}
where
  TransportationOrderCategory = 'TO'
```
