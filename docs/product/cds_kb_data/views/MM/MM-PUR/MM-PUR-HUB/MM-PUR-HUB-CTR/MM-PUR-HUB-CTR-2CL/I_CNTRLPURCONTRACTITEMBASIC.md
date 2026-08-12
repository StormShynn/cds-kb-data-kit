---
name: I_CNTRLPURCONTRACTITEMBASIC
description: "Cntrlpurcontractitembasic"
app_component: MM-PUR-HUB-CTR-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CentralPurchaseContract` | ✓ | |  | `ActivePurchasingDocument` |  |  |
| `CentralPurchaseContractItem` | ✓ | |  |  |  |  |
| `CntrlPurContractItemText` |  | |  | `PurchaseContractItemText` |  |  |
| `PurchasingDocumentItemCategory` |  | |  |  |  |  |
| `MaterialGroup` |  | |  | `cast ( Item.ProductGroup as matkl preserving type )` |  |  |
| `ProcmtHubExtReferencedMaterial` |  | |  |  |  |  |
| `NetPriceQuantity` |  | |  |  |  |  |
| `OrderPriceUnit` |  | |  |  |  |  |
| `TargetQuantity` |  | |  |  |  |  |
| `CntrlPurContrItmTargetAmount` |  | |  |  |  |  |
| `ContractNetPriceAmount` |  | |  |  |  |  |
| `OrderQuantityUnit` |  | |  |  |  |  |
| `PurgDocReleaseOrderQuantity` |  | |  |  |  |  |
| `OrdPriceUnitToOrderUnitDnmntr` |  | |  |  |  |  |
| `OrderPriceUnitToOrderUnitNmrtr` |  | |  |  |  |  |
| `DocumentCurrency` |  | |  |  |  |  |
| `TaxCode` |  | |  |  |  |  |
| `EvaldRcptSettlmtIsAllowed` |  | |  |  |  |  |
| `PurchasingContractDeletionCode` |  | |  |  |  |  |
| `PurgDocItmBlkRsnCode` |  | |  |  |  |  |
| `PurchasingParentItem` |  | |  |  |  |  |
| `IsOutline` |  | |  | `IsStatisticalItem` |  |  |
| `_CentralPurchaseContractBasic` | | ✓ | | | | |

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
