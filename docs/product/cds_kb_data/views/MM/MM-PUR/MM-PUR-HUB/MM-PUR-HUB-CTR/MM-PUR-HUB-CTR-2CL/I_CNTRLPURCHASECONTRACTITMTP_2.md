---
name: I_CNTRLPURCHASECONTRACTITMTP_2
description: "CNTRLPurchase ContractITMTP 2"
app_component: MM-PUR-HUB-CTR-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-HUB
  - interface-view
  - transactional-processing
  - purchase-contract
  - contract
  - component:MM-PUR-HUB-CTR-2CL
  - lob:Sourcing & Procurement
---
# I_CNTRLPURCHASECONTRACTITMTP_2

**CNTRLPurchase ContractITMTP 2**

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
| `PurchaseContractItemText` |  | |  |  |  |  |
| `ContractNetPriceAmount` |  | |  |  |  |  |
| `OrderPriceUnit` |  | |  |  |  |  |
| `VolumeUnit` |  | |  |  |  |  |
| `OrderQuantityUnit` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `GoodsReceiptIsExpected` |  | |  |  |  |  |
| `NetPriceQuantity` |  | |  |  |  |  |
| `TargetQuantity` |  | |  |  |  |  |
| `DocumentCurrency` |  | |  |  |  |  |
| `OrdPriceUnitToOrderUnitDnmntr` |  | |  |  |  |  |
| `OrderPriceUnitToOrderUnitNmrtr` |  | |  |  |  |  |
| `PurchasingDocumentItemCategory` |  | |  |  |  |  |
| `SupplierMaterialNumber` |  | |  |  |  |  |
| `EvaldRcptSettlmtIsAllowed` |  | |  |  |  |  |
| `UnderdelivTolrtdLmtRatioInPct` |  | |  |  |  |  |
| `PriceIsToBePrinted` |  | |  |  |  |  |
| `SupplierConfirmationControlKey` |  | |  |  |  |  |
| `OverdelivTolrtdLmtRatioInPct` |  | |  |  |  |  |
| `UnlimitedOverdeliveryIsAllowed` |  | |  |  |  |  |
| `InvoiceIsExpected` |  | |  |  |  |  |
| `InvoiceIsGoodsReceiptBased` |  | |  |  |  |  |
| `PurchasingInfoRecordUpdateCode` |  | |  |  |  |  |
| `PurgDocReleaseOrderQuantity` |  | |  |  |  |  |
| `PurgDocOrderAcknNumber` |  | |  |  |  |  |
| `PurchasingPriceIsEstimated` |  | |  |  |  |  |
| `IsInfoAtRegistration` |  | |  |  |  |  |
| `NoDaysReminder1` |  | |  |  |  |  |
| `NoDaysReminder2` |  | |  |  |  |  |
| `NoDaysReminder3` |  | |  |  |  |  |
| `StockType` |  | |  |  |  |  |
| `TaxCode` |  | |  |  |  |  |
| `RequirementTracking` |  | |  |  |  |  |
| `IsOrderAcknRqd` |  | |  |  |  |  |
| `ShippingInstruction` |  | |  |  |  |  |
| `GoodsReceiptIsNonValuated` |  | |  |  |  |  |
| `PurgDocProductType` |  | |  |  |  |  |
| `ProductTypeCode` |  | |  |  |  |  |
| `PurchasingContractDeletionCode` |  | |  |  |  |  |
| `PurchasingCentralMaterial` |  | |  |  |  |  |
| `CntrlPurContrItmTargetAmount` |  | |  |  |  |  |
| `ActivePurchasingDocument` |  | |  |  |  |  |
| `PurgDocItmBlkRsnCode` |  | |  |  |  |  |
| `PurchasingParentItem` |  | |  |  |  |  |
| `IsOutline` |  | |  |  |  |  |
| `PurgConfigurableItemNumber` |  | |  |  |  |  |
| `ProcmtHubRefcdConnectedSystem` |  | |  |  |  |  |
| `_CntrlPurchaseContract` | | ✓ | | | | |
| `_CentralPurchaseContItemDist` | | ✓ | | | | |
| `_CentrlPurContrItmCndnValdty` | | ✓ | | | | |
| `_CntrlPurContrItmNotes` | | ✓ | | | | |
| `_CntrlPurContrItmCmmdtyQty` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'CCTR Item - TP'
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey: ['CentralPurchaseContract','CentralPurchaseContractItem']

@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL

@Metadata.ignorePropagatedAnnotations: true

define view entity I_CntrlPurchaseContractItmTP_2
  as projection on R_CntrlPurchaseContractItemTP as CentralPurchaseContractItem
{
     
  key CentralPurchaseContract,
  key CentralPurchaseContractItem,
      PurchaseContractItemText,
      @Semantics.amount.currencyCode : 'DocumentCurrency'
      ContractNetPriceAmount,
      OrderPriceUnit,
      VolumeUnit,
      OrderQuantityUnit,
      MaterialGroup,
      GoodsReceiptIsExpected,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      NetPriceQuantity,                                    
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      TargetQuantity,
      DocumentCurrency,
      OrdPriceUnitToOrderUnitDnmntr,
      OrderPriceUnitToOrderUnitNmrtr,
      PurchasingDocumentItemCategory,
      SupplierMaterialNumber,
      EvaldRcptSettlmtIsAllowed,
      UnderdelivTolrtdLmtRatioInPct,
      PriceIsToBePrinted,
      SupplierConfirmationControlKey,
      OverdelivTolrtdLmtRatioInPct,
      UnlimitedOverdeliveryIsAllowed,
      InvoiceIsExpected,
      InvoiceIsGoodsReceiptBased,
      @Semantics.booleanIndicator: true
      PurchasingInfoRecordUpdateCode,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      PurgDocReleaseOrderQuantity,
      PurgDocOrderAcknNumber,
      PurchasingPriceIsEstimated,
      IsInfoAtRegistration,
      NoDaysReminder1,
      NoDaysReminder2,
      NoDaysReminder3,
      StockType,
      TaxCode,
      RequirementTracking,
      IsOrderAcknRqd,
      ShippingInstruction,
      GoodsReceiptIsNonValuated,
      PurgDocProductType,
      ProductTypeCode,
      PurchasingContractDeletionCode,
      PurchasingCentralMaterial,
      @Semantics.amount.currencyCode : 'DocumentCurrency'
      CntrlPurContrItmTargetAmount,
      ActivePurchasingDocument,
      PurgDocItmBlkRsnCode,
      PurchasingParentItem,
      IsOutline,
      PurgConfigurableItemNumber,
      ProcmtHubRefcdConnectedSystem,
      /* Associations */

      _CntrlPurchaseContract       : redirected to parent I_CntrlPurchaseContractTP_2,
      _CentralPurchaseContItemDist : redirected to composition child I_CntrlPurContrItemDistrTP_2,
      _CentrlPurContrItmCndnValdty : redirected to composition child I_CePuCoItmCndnValidityTP_2,
      _CntrlPurContrItmNotes       : redirected to composition child I_CntrlPurContrItemNotesTP_2,
      _CntrlPurContrItmCmmdtyQty   : redirected to composition child I_CePuCoItmCmmdtyQtyTP_2
}
```
