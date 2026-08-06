---
name: I_CNTRLPURCONTRACTITEMBASIC
description: Cntrlpurcontractitembasic
app_component: MM-PUR-HUB-CTR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-HUB
  - interface-view
  - contract
  - item-level
  - component:MM-PUR-HUB-CTR-2CL
  - lob:Sourcing & Procurement
---
# I_CNTRLPURCONTRACTITEMBASIC

**Cntrlpurcontractitembasic**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CentralPurchaseContract` | `ActivePurchasingDocument` |
| key `CentralPurchaseContractItem` | `Item.CentralPurchaseContractItem` |
| `CntrlPurContractItemText` | `Item.PurchaseContractItemText` |
| `PurchasingDocumentItemCategory` | `Item.PurchasingDocumentItemCategory` |
| `MaterialGroup` | `cast ( Item.ProductGroup as matkl preserving type )` |
| `ProcmtHubExtReferencedMaterial` | `Item.ProcmtHubExtReferencedMaterial` |
| `NetPriceQuantity` | `Item.NetPriceQuantity` |
| `OrderPriceUnit` | `Item.OrderPriceUnit` |
| `TargetQuantity` | `Item.TargetQuantity` |
| `CntrlPurContrItmTargetAmount` | `Item.CntrlPurContrItmTargetAmount` |
| `ContractNetPriceAmount` | `Item.ContractNetPriceAmount` |
| `OrderQuantityUnit` | `Item.OrderQuantityUnit` |
| `PurgDocReleaseOrderQuantity` | `Item.PurgDocReleaseOrderQuantity` |
| `OrdPriceUnitToOrderUnitDnmntr` | `Item.OrdPriceUnitToOrderUnitDnmntr` |
| `OrderPriceUnitToOrderUnitNmrtr` | `Item.OrderPriceUnitToOrderUnitNmrtr` |
| `DocumentCurrency` | `Item.DocumentCurrency` |
| `TaxCode` | `Item.TaxCode` |
| `EvaldRcptSettlmtIsAllowed` | `Item.EvaldRcptSettlmtIsAllowed` |
| `PurchasingContractDeletionCode` | `Item.PurchasingContractDeletionCode` |
| `PurgDocItmBlkRsnCode` | `Item.PurgDocItmBlkRsnCode` |
| `PurchasingParentItem` | `Item.PurchasingParentItem` |
| `IsOutline` | `Item.IsStatisticalItem` |
| `_CentralPurchaseContractBasic` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CentralPurchaseContractBasic` | `I_CentralPurchaseContractBasic` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Item in Central Purchase Contract'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}
@VDM.viewType : #BASIC
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
define view entity I_CntrlPurContractItemBasic
  as select from R_CntrlPurchaseContractItem as Item
                                                              
 association [1..1] to I_CentralPurchaseContractBasic as _CentralPurchaseContractBasic on $projection.CentralPurchaseContract = _CentralPurchaseContractBasic.CentralPurchaseContract
 
{

  key ActivePurchasingDocument              as CentralPurchaseContract,
  key Item.CentralPurchaseContractItem,
      Item.PurchaseContractItemText                       as CntrlPurContractItemText,
      Item.PurchasingDocumentItemCategory,
      cast ( Item.ProductGroup as matkl preserving type ) as MaterialGroup,
      Item.ProcmtHubExtReferencedMaterial,
      @Semantics.quantity.unitOfMeasure: 'OrderPriceUnit'
      Item.NetPriceQuantity,
      Item.OrderPriceUnit,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      Item.TargetQuantity,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      Item.CntrlPurContrItmTargetAmount,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      Item.ContractNetPriceAmount,
      Item.OrderQuantityUnit,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      Item.PurgDocReleaseOrderQuantity,
      Item.OrdPriceUnitToOrderUnitDnmntr,
      Item.OrderPriceUnitToOrderUnitNmrtr,
      Item.DocumentCurrency,
      Item.TaxCode,
      Item.EvaldRcptSettlmtIsAllowed,
      Item.PurchasingContractDeletionCode,
      Item.PurgDocItmBlkRsnCode,
      Item.PurchasingParentItem,
      Item.IsStatisticalItem                              as IsOutline,
      
      @ObjectModel.association.type: [ #TO_COMPOSITION_CHILD]
      _CentralPurchaseContractBasic

}

 where 
  (
     PurgDocChangeRequestStatus = '' or
     PurgDocChangeRequestStatus = '2'
  )
```
