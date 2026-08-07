---
name: I_STOSHIPPINGTP
description: Stoshippingtp
app_component: MM-PUR-PO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-PO
  - interface-view
  - transactional-processing
  - component:MM-PUR-PO-2CL
  - lob:Sourcing & Procurement
---
# I_STOSHIPPINGTP

**Stoshippingtp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-PO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `StockTransportOrder` | ✓ | |  |  |
| `StockTransportOrderItem` | ✓ | |  |  |
| `ShippingCondition` |  | |  |  |
| `ShippingPoint` |  | |  |  |
| `Route` |  | |  |  |
| `LoadingGroup` |  | |  |  |
| `TransportationGroup` |  | |  |  |
| `DeliveryPriority` |  | |  |  |
| `UnloadingPointName` |  | |  |  |
| `StockTransportOrderType` |  | |  |  |
| `PurchasingOrganization` |  | |  |  |
| `PurchasingGroup` |  | |  |  |
| `Plant` |  | |  |  |
| `_StockTransportOrderItem` | | ✓ | | |
| `_StockTransportOrder` | | ✓ | | |
| `_PurchasingDocument` | | ✓ | | |
| `_PurchasingDocumentItem` | | ✓ | | |
| `_ShippingCondition` | | ✓ | | |
| `_ShippingPoint` | | ✓ | | |

## Source Code

```abap
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

@ObjectModel: {
  usageType: {
    dataClass:      #TRANSACTIONAL,
    serviceQuality: #C,
    sizeCategory:   #L
  },

  modelingPattern: #TRANSACTIONAL_INTERFACE,
  semanticKey: ['StockTransportOrder', 'StockTransportOrderItem'],
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}

@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #BLOCKED_DATA_EXCLUDED
}

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Shipping Data for STO - TP'

define view entity I_STOShippingTP
  as projection on R_STOShippingTP
{
  key StockTransportOrder,
  key StockTransportOrderItem,
//      @ObjectModel.text.association: '_ShippingConditionText'
      ShippingCondition,
//      @ObjectModel.text.association: '_ShippingPointText'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_ShippingPointStdVH', element: 'ShippingPoint' }, useAsTemplate: true }]       //CustomUI
      ShippingPoint,
//      @ObjectModel.text.association: '_RouteText'
      Route,
//      @ObjectModel.text.association: '_LoadingGroupText'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_LoadingGroup', element: 'LoadingGroup' }, useAsTemplate: true }]       //CustomUI
      LoadingGroup,
//      @ObjectModel.text.association: '_TransportationGroupText'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_TransportationGroup', element: 'TransportationGroup' }, useAsTemplate: true }]       //CustomUI
      TransportationGroup,
//      @ObjectModel.text.association: '_DeliveryPriorityText'
      DeliveryPriority,
      UnloadingPointName,
      StockTransportOrderType,
      PurchasingOrganization,
      PurchasingGroup,
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_PlantStdVH', element: 'Plant' }, useAsTemplate: true }]       //CustomUI
      Plant,

      /* Composition */
      _StockTransportOrderItem : redirected to parent I_StockTransportOrderItemTP,
      _StockTransportOrder     : redirected to I_StockTransportOrderTP,

      /* Associations */
      _PurchasingDocument,
      _PurchasingDocumentItem,
      _ShippingCondition,
      _ShippingPoint
    
      /* Text associations for CustomUI */
//      _ShippingConditionText,
//      _ShippingPointText,
//      _RouteText,
//      _LoadingGroupText,
//      _TransportationGroupText,
//      _DeliveryPriorityText

}
```
