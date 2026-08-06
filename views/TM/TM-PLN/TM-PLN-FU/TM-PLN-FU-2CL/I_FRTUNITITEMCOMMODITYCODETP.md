---
name: I_FRTUNITITEMCOMMODITYCODETP
description: Frtunititemcommoditycodetp
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
  - commodity
  - item-level
  - component:TM-PLN-FU-2CL
  - lob:Other
---
# I_FRTUNITITEMCOMMODITYCODETP

**Frtunititemcommoditycodetp**

| Property | Value |
|---|---|
| App Component | `TM-PLN-FU-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TranspOrdItemCommodityCodeUUID` | `TranspOrdItemCommodityCodeUUID` |
| `TransportationOrderItemUUID` | `TransportationOrderItemUUID` |
| `TransportationOrderUUID` | `TransportationOrderUUID` |
| `TranspOrdItemCommodityCode` | `TranspOrdItemCommodityCode` |
| `TrOrdItmCmmdtyCodeNmbrngSchm` | `TrOrdItmCmmdtyCodeNmbrngSchm` |
| `I_FreightUnitTP` | `FreightUnitItemCommodityCode._TransportationOrder as _FreightUnit : redirected to I_FreightUnitTP` |
| `I_FreightUnitItemTP` | `FreightUnitItemCommodityCode._TransportationOrderItem as _FreightUnitItem : redirected to parent I_FreightUnitItemTP` |

## Source Code

```abap
@EndUserText.label: 'Freight Unit Item Commodity Code - TP'
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
   representativeKey: 'TranspOrdItemCommodityCodeUUID',
   sapObjectNodeType.name: 'FreightUnitItemCommodityCode'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY
                 
define view entity I_FrtUnitItemCommodityCodeTP
  as projection on R_TranspOrdItemCommodityCodeTP as FreightUnitItemCommodityCode
{
      /* Attributes */
  key TranspOrdItemCommodityCodeUUID,
      TransportationOrderItemUUID,
      TransportationOrderUUID,
      TranspOrdItemCommodityCode,
      TrOrdItmCmmdtyCodeNmbrngSchm,

      /* Redirections */
      FreightUnitItemCommodityCode._TransportationOrder as _FreightUnit : redirected to  I_FreightUnitTP,
      FreightUnitItemCommodityCode._TransportationOrderItem as _FreightUnitItem : redirected to parent I_FreightUnitItemTP
}
where FreightUnitItemCommodityCode.TransportationOrderCategory = 'FU'
```
