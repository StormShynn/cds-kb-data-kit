---
name: I_FRTBKGITEMCOMMODITYCODETP
description: "Frtbkgitemcommoditycodetp"
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
  - commodity
  - item-level
  - component:TM-FRM-FRB-2CL
  - lob:Other
---
# I_FRTBKGITEMCOMMODITYCODETP

**Frtbkgitemcommoditycodetp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRB-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdItemCommodityCodeUUID` | ✓ | |  |  |  |  |
| `TransportationOrderItemUUID` |  | |  |  |  |  |
| `TransportationOrderUUID` |  | |  |  |  |  |
| `TranspOrdItemCommodityCode` |  | |  |  |  |  |
| `TrOrdItmCmmdtyCodeNmbrngSchm` |  | |  |  |  |  |
| `I_FreightBookingTP` |  | |  | `FrtBookingItemCommodityCode._TransportationOrder as _FreightBooking : redirected to I_FreightBookingTP` |  |  |
| `I_FreightBookingItemTP` |  | |  | `FrtBookingItemCommodityCode._TransportationOrderItem as _FreightBookingItem : redirected to parent I_FreightBookingItemTP` |  |  |

## Source Code

```abap
@EndUserText.label: 'Freight Booking Item Commodity Code - TP'
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
   representativeKey: 'TranspOrdItemCommodityCodeUUID',
   sapObjectNodeType.name: 'FrtBookingItemCommodityCode'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY
                 
define view entity I_FrtBkgItemCommodityCodeTP
  as projection on R_TranspOrdItemCommodityCodeTP as FrtBookingItemCommodityCode
{
      /* Attributes */
  key TranspOrdItemCommodityCodeUUID,
      TransportationOrderItemUUID,
      TransportationOrderUUID,
      TranspOrdItemCommodityCode,
      TrOrdItmCmmdtyCodeNmbrngSchm,

      /* Redirections */
      FrtBookingItemCommodityCode._TransportationOrder as _FreightBooking : redirected to  I_FreightBookingTP,
      FrtBookingItemCommodityCode._TransportationOrderItem as _FreightBookingItem : redirected to parent I_FreightBookingItemTP
}
where FrtBookingItemCommodityCode.TransportationOrderCategory = 'BO'
```
