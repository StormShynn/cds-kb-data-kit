---
name: I_CNTRLPURCONTRACTITEMAPI01
description: "Cntrlpurcontractitemapi 01"
app_component: MM-PUR-HUB-CTR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_CNTRLPURCONTRACTITEMAPI01

**Cntrlpurcontractitemapi 01**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CentralPurchaseContract` | ✓ | |  |  |  |  |
| `CentralPurchaseContractItem` | ✓ | |  |  |  |  |
| `PurchasingDocumentItemCategory` |  | |  |  |  |  |
| `FormattedPurchaseContractItem` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `PurchasingCentralMaterial` |  | |  |  |  |  |
| `ProcmtHubExtReferencedMaterial` |  | |  |  |  |  |
| `CntrlPurContractItemText` |  | |  | `PurchaseContractItemText` |  |  |
| `ProductType` |  | |  |  |  |  |
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
| `NoDaysReminder1` |  | |  |  |  |  |
| `NoDaysReminder2` |  | |  |  |  |  |
| `NoDaysReminder3` |  | |  |  |  |  |
| `PurgDocOrderAcknNumber` |  | |  |  |  |  |
| `RequirementTracking` |  | |  |  |  |  |
| `SupplierMaterialNumber` |  | |  |  |  |  |
| `IsOrderAcknRqd` |  | |  |  |  |  |
| `PurgDocEstimatedPrice` |  | |  |  |  |  |
| `PriceIsToBePrinted` |  | |  |  |  |  |
| `UnderdelivTolrtdLmtRatioInPct` |  | |  |  |  |  |
| `OverdelivTolrtdLmtRatioInPct` |  | |  |  |  |  |
| `UnlimitedOverdeliveryIsAllowed` |  | |  |  |  |  |
| `StockType` |  | |  |  |  |  |
| `TaxCode` |  | |  |  |  |  |
| `ShippingInstruction` |  | |  |  |  |  |
| `GoodsReceiptIsExpected` |  | |  |  |  |  |
| `GoodsReceiptIsNonValuated` |  | |  |  |  |  |
| `InvoiceIsExpected` |  | |  |  |  |  |
| `InvoiceIsGoodsReceiptBased` |  | |  |  |  |  |
| `EvaldRcptSettlmtIsAllowed` |  | |  |  |  |  |
| `PurchasingContractDeletionCode` |  | |  |  |  |  |
| `ActivePurchasingDocument` |  | |  |  |  |  |
| `PurgDocItmBlkRsnCode` |  | |  |  |  |  |
| `PurchasingParentItem` |  | |  |  |  |  |
| `IsOutline` |  | |  | `IsStatisticalItem` |  |  |
| `_CentralPurchaseContract` | | ✓ | | | | |
| `_CntrlPurConItmDistribution` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CentralPurchaseContract` | `I_CentralPurchaseContractAPI01` | [1..1] |
| `_CntrlPurConItmDistribution` | `I_CntrlPurContrDistribution` | [1..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNTRLPCTRIAPI01'
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType : #COMPOSITE
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@AccessControl.personalData.blocking: #REQUIRED
@EndUserText.label: 'Item in Central Purchase Contract'
@AbapCatalog.preserveKey:true 
define view I_CntrlPurContractItemAPI01 as select from I_CntrlPurchaseContractItem
  association [1..1] to I_CentralPurchaseContractAPI01      as _CentralPurchaseContract    on  $projection.CentralPurchaseContract = _CentralPurchaseContract.CentralPurchaseContract

  association [1..*] to I_CntrlPurContrDistribution as _CntrlPurConItmDistribution on  $projection.CentralPurchaseContract     = _CntrlPurConItmDistribution.CentralPurchaseContract
                                                                                      and $projection.CentralPurchaseContractItem = _CntrlPurConItmDistribution.CentralPurchaseContractItem

{
      //@ObjectModel.foreignKey.association: '_CentralPurchaseContract'
  key CentralPurchaseContract,

  key CentralPurchaseContractItem,

      PurchasingDocumentItemCategory,

      FormattedPurchaseContractItem,

      MaterialGroup,

      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'ProcmtHubExtReferencedMaterial'
      PurchasingCentralMaterial,

      ProcmtHubExtReferencedMaterial,

      PurchaseContractItemText as CntrlPurContractItemText,
      
      ProductType,

     // MaterialType,

     // ProductType,        not relevant in 1805
     
     // VolumeUnit,

      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      NetPriceQuantity,
      
      OrderPriceUnit,

      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'  
      TargetQuantity,
      
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      CntrlPurContrItmTargetAmount,
      
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      ContractNetPriceAmount,

      OrderQuantityUnit,

      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      PurgDocReleaseOrderQuantity,

      OrdPriceUnitToOrderUnitDnmntr, // price conversion from

      OrderPriceUnitToOrderUnitNmrtr, // price conversion to

      DocumentCurrency,

      NoDaysReminder1,

      NoDaysReminder2,

      NoDaysReminder3,

      PurgDocOrderAcknNumber,

      RequirementTracking,

      SupplierMaterialNumber,

      IsOrderAcknRqd,
      
      PurgDocEstimatedPrice,

      PriceIsToBePrinted,

      UnderdelivTolrtdLmtRatioInPct,

      OverdelivTolrtdLmtRatioInPct,

      UnlimitedOverdeliveryIsAllowed,

      StockType,

      TaxCode,

      ShippingInstruction,

      // IsInfoRecordUpdated, Not relevant, commented in 1905CE

      GoodsReceiptIsExpected,

      GoodsReceiptIsNonValuated,

      InvoiceIsExpected,

      InvoiceIsGoodsReceiptBased,

      EvaldRcptSettlmtIsAllowed,

      PurchasingContractDeletionCode,
      
      ActivePurchasingDocument,
      
      PurgDocItmBlkRsnCode,
      
      PurchasingParentItem,
      
      IsStatisticalItem as IsOutline,


      //@ObjectModel.association.type:  [ #TO_COMPOSITION_PARENT]
      _CentralPurchaseContract, // Make association public

      //@ObjectModel.association.type:  [ #TO_COMPOSITION_CHILD]
      _CntrlPurConItmDistribution
}
```
