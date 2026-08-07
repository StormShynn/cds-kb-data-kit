---
name: I_FREIGHTUNITTP
description: Freightunittp
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
  - component:TM-PLN-FU-2CL
  - lob:Other
---
# I_FREIGHTUNITTP

**Freightunittp**

| Property | Value |
|---|---|
| App Component | `TM-PLN-FU-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `TransportationOrderUUID` | ✓ | |  |  |
| `TransportationOrder` |  | |  |  |
| `TransportationOrderType` |  | |  |  |
| `TransportationOrderCategory` |  | |  |  |
| `TransportationMode` |  | |  |  |
| `TransportationModeCategory` |  | |  |  |
| `ShipperUUID` |  | |  |  |
| `Shipper` |  | |  |  |
| `ShipperAddressID` |  | |  |  |
| `ConsigneeUUID` |  | |  |  |
| `Consignee` |  | |  |  |
| `ConsigneeAddressID` |  | |  |  |
| `TranspOrdResponsiblePerson` |  | |  |  |
| `TranspOrdLifeCycleStatus` |  | |  |  |
| `TranspOrderDngrsGdsSts` |  | |  |  |
| `TranspOrdPlanningBlock` |  | |  |  |
| `TranspOrdExecutionIsBlocked` |  | |  |  |
| `TranspOrdGoodsMovementStatus` |  | |  |  |
| `TranspOrdWhseProcessingStatus` |  | |  |  |
| `TranspOrdPlanningStatus` |  | |  |  |
| `TransportationOrderCrtnType` |  | |  |  |
| `CreatedByUser` |  | |  |  |
| `CreationDateTime` |  | |  |  |
| `LastChangedByUser` |  | |  |  |
| `ChangedDateTime` |  | |  |  |
| `TranspPurgOrgExtID` |  | |  |  |
| `TranspPurgGroupExtID` |  | |  |  |
| `I_FreightUnitBusinessPartnerTP` |  | |  | `FreightUnit._TransportationOrderBP as _FreightUnitBusinessPartner : redirected to composition child I_FreightUnitBusinessPartnerTP` |
| `I_FreightUnitDocRefTP` |  | |  | `FreightUnit._TranspOrdDocumentReference as _FreightUnitDocumentReference : redirected to composition child I_FreightUnitDocRefTP` |
| `I_FreightUnitItemTP` |  | |  | `FreightUnit._TransportationOrderItem as _FreightUnitItem : redirected to composition child I_FreightUnitItemTP` |
| `I_FreightUnitStopTP` |  | |  | `FreightUnit._TransportationOrderStop as _FreightUnitStop : redirected to composition child I_FreightUnitStopTP` |
| `I_FrtUntMainBPAddrDfltRprstnTP` |  | |  | `FreightUnit._TrOrdMainBPAddrDfltRprstn as _FrtUnitMainBPAddrDfltRprstn : redirected to composition child I_FrtUntMainBPAddrDfltRprstnTP` |

## Source Code

```abap
@EndUserText.label: 'Freight Unit - TP'
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
   semanticKey: ['TransportationOrder'],
   representativeKey: 'TransportationOrderUUID',
   sapObjectNodeType.name: 'FreightUnit'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY

define root view entity I_FreightUnitTP
  provider contract transactional_interface
  as projection on R_TransportationOrderTP as FreightUnit

{
      /* Attributes */
      // Identification
  key TransportationOrderUUID,
      TransportationOrder,

      // Key Characteristics
      TransportationOrderType,
      TransportationOrderCategory,
      TransportationMode,
      TransportationModeCategory,

      // Parties
      ShipperUUID,
      Shipper,
      ShipperAddressID,
      ConsigneeUUID,
      Consignee,
      ConsigneeAddressID,

      // Further Attributes
      TranspOrdResponsiblePerson,

      // Status
      TranspOrdLifeCycleStatus,
      TranspOrderDngrsGdsSts,
      TranspOrdPlanningBlock,
      @Semantics.booleanIndicator
      TranspOrdExecutionIsBlocked,
      TranspOrdGoodsMovementStatus,
      TranspOrdWhseProcessingStatus,
      TranspOrdPlanningStatus,

      // Administrative Data
      TransportationOrderCrtnType,
      CreatedByUser,
      CreationDateTime,
      LastChangedByUser,
      ChangedDateTime,

      /* The (generic) access control definition of R_TransportationOrderTP uses the (generic) authorization object
       * T_TOR_PUR which contains the authorization fields TranspPurgOrgExtID and TranspPurgGroupExtID.
       * The projection views shall inherit the access control definition of the underlying transactional processing
       * view and it is (currently) not possible to declare elements as optional which are part of a path expression
       * such as such as _TransportationOrder.TranspPurgOrgExtID
       * This requires, that the elements TranspPurgOrgExtID and TranspPurgGroupExtID must be (technically) defined on
       * I_FreightUnitTP and at the same time hidden from the consumer
       */
      @Consumption.hidden:true
      TranspPurgOrgExtID,
      @Consumption.hidden:true
      TranspPurgGroupExtID,

      /* Redirections */
      FreightUnit._TransportationOrderBP       as _FreightUnitBusinessPartner   : redirected to composition child I_FreightUnitBusinessPartnerTP,
      FreightUnit._TranspOrdDocumentReference  as _FreightUnitDocumentReference : redirected to composition child I_FreightUnitDocRefTP,
      FreightUnit._TransportationOrderItem     as _FreightUnitItem              : redirected to composition child I_FreightUnitItemTP,
      FreightUnit._TransportationOrderStop     as _FreightUnitStop              : redirected to composition child I_FreightUnitStopTP,
      FreightUnit._TrOrdMainBPAddrDfltRprstn   as _FrtUnitMainBPAddrDfltRprstn  : redirected to composition child I_FrtUntMainBPAddrDfltRprstnTP,

      /* Association redirections */

      FreightUnit._ShipperAddrDfltRprstn       as _ShipperAddrDfltRprstn        : redirected to I_FrtUntMainBPAddrDfltRprstnTP,
      FreightUnit._ConsigneeAddrDfltRprstn     as _ConsigneeAddrDfltRprstn      : redirected to I_FrtUntMainBPAddrDfltRprstnTP
//      FreightUnit._CarrierAddrDfltRprstn       as _CarrierAddrDfltRprstn        : redirected to I_FrtUntMainBPAddrDfltRprstnTP,     
//      FreightUnit._ExectgCarrierAddrDfltRprstn as _ExectgCarrierAddrDfltRprstn  : redirected to I_FrtUntMainBPAddrDfltRprstnTP      
}
where
  TransportationOrderCategory = 'FU'
```
