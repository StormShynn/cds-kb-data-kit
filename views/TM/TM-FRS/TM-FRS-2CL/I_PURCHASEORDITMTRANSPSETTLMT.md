---
name: I_PURCHASEORDITMTRANSPSETTLMT
description: Purchaseorditmtranspsettlmt
app_component: TM-FRS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRS
  - interface-view
  - component:TM-FRS-2CL
  - lob:Other
---
# I_PURCHASEORDITMTRANSPSETTLMT

**Purchaseorditmtranspsettlmt**

| Property | Value |
|---|---|
| App Component | `TM-FRS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PurchaseOrder` | `PurchasingDocument` |
| key `PurchaseOrderItem` | `PurchasingDocumentItem` |
| `TransportationOrder` | `TransportationOrder` |
| `ServiceProvider` | `Carrier` |
| `TransportationShippingType` | `TransportationShippingType` |
| `TransportationModeCategory` | `TransportationModeCategory` |
| `TranspChargeType` | `TranspChargeType` |
| `TransportationOrderStop` | `TransportationOrderStop` |
| `TranspOrdItem` | `TranspOrdItem` |
| `TranspOrdStageSrceLocation` | `TranspOrdStageSrceLocation` |
| `TranspOrdStageDestLocation` | `TranspOrdStageDestLocation` |
| `_PurchaseOrderItem` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurchaseOrderItem` | `I_PurchaseOrderItemAPI01` | [1..1] |

## Source Code

```abap
@VDM.viewType:#COMPOSITE
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API
@ObjectModel:   {   usageType:          { serviceQuality: #B,
                                          sizeCategory:   #XL,
                                          dataClass:      #TRANSACTIONAL}}
@ObjectModel.supportedCapabilities:[#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.semanticKey: ['PurchaseOrder','PurchaseOrderItem']
@ObjectModel.modelingPattern:#NONE
@AccessControl.authorizationCheck:#MANDATORY
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Purchase order Item Transportation sett'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] } */
define view entity I_PurchaseOrdItmTranspSettlmt
  as select from I_TranspInvcPreparationData
  association [1..1] to I_PurchaseOrderItemAPI01 as _PurchaseOrderItem on  $projection.PurchaseOrder     = _PurchaseOrderItem.PurchaseOrder
                                                                       and $projection.PurchaseOrderItem = _PurchaseOrderItem.PurchaseOrderItem
{
  key PurchasingDocument                                       as PurchaseOrder,
  key PurchasingDocumentItem                                   as PurchaseOrderItem,
      TransportationOrder,
      Carrier                                                  as ServiceProvider,
      TransportationShippingType,
      TransportationModeCategory,
      TranspChargeType,
      TransportationOrderStop,
      TranspOrdItem,
      TranspOrdStageSrceLocation,
      TranspOrdStageDestLocation,
/* Associations */      
      _PurchaseOrderItem
}
where
  TranspInvcPrepIsInactive = ''
```
