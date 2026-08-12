---
name: I_PURCHASEORDITMTRANSPSETTLMT
description: "Purchaseorditmtranspsettlmt"
app_component: TM-FRS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseOrder` | ✓ | |  | `PurchasingDocument` |  |  |
| `PurchaseOrderItem` | ✓ | |  | `PurchasingDocumentItem` |  |  |
| `TransportationOrder` |  | |  |  |  |  |
| `ServiceProvider` |  | |  | `Carrier` |  |  |
| `TransportationShippingType` |  | |  |  |  |  |
| `TransportationModeCategory` |  | |  |  |  |  |
| `TranspChargeType` |  | |  |  |  |  |
| `TransportationOrderStop` |  | |  |  |  |  |
| `TranspOrdItem` |  | |  |  |  |  |
| `TranspOrdStageSrceLocation` |  | |  |  |  |  |
| `TranspOrdStageDestLocation` |  | |  |  |  |  |
| `_PurchaseOrderItem` | | ✓ | | | | |

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
