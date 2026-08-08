---
name: I_PURCHASECONTRACTITEMTP
description: "Purchase ContractITEMTP"
app_component: MM-PUR-OA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-OA
  - interface-view
  - transactional-processing
  - purchase-contract
  - contract
  - item-level
  - component:MM-PUR-OA-2CL
  - lob:Sourcing & Procurement
---
# I_PURCHASECONTRACTITEMTP

**Purchase ContractITEMTP**

| Property | Value |
|---|---|
| App Component | `MM-PUR-OA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseContract` | ✓ | |  |  |  |  |
| `PurchaseContractItem` | ✓ | |  |  |  |  |
| `PurchaseContractItemUniqueID` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `ManufacturerMaterial` |  | |  |  |  |  |
| `PurchaseContractItemText` |  | |  |  |  |  |
| `ContractNetPriceAmount` |  | |  |  |  |  |
| `OrderPriceUnit` |  | |  |  |  |  |
| `VolumeUnit` |  | |  |  |  |  |
| `OrderQuantityUnit` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `Subcontractor` |  | |  |  |  |  |
| `ReferenceDeliveryAddressID` |  | |  |  |  |  |
| `ManualDeliveryAddressID` |  | |  |  |  |  |
| `DeliveryAddressID` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `StorageLocation` |  | |  |  |  |  |
| `AccountAssignmentCategory` |  | |  |  |  |  |
| `GoodsReceiptIsExpected` |  | |  |  |  |  |
| `NetPriceQuantity` |  | |  |  |  |  |
| `MultipleAcctAssgmtDistribution` |  | |  |  |  |  |
| `TargetQuantity` |  | |  |  |  |  |
| `TargetAmount` |  | |  |  |  |  |
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
| `PurgDocPriceDate` |  | |  |  |  |  |
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
| `TaxCountry` |  | |  |  |  |  |
| `TaxDeterminationDate` |  | |  |  |  |  |
| `RequirementTracking` |  | |  |  |  |  |
| `IsOrderAcknRqd` |  | |  |  |  |  |
| `ShippingInstruction` |  | |  |  |  |  |
| `GoodsReceiptIsNonValuated` |  | |  |  |  |  |
| `ServicePerformer` |  | |  |  |  |  |
| `ProductTypeCode` |  | |  |  |  |  |
| `MaterialType` |  | |  |  |  |  |
| `PurchaseContractItemFormatted` |  | |  |  |  |  |
| `PurchasingContractDeletionCode` |  | |  |  |  |  |
| `PurchaseRequisition` |  | |  |  |  |  |
| `PurchaseRequisitionItem` |  | |  |  |  |  |
| `PartialInvoiceDistribution` |  | |  |  |  |  |
| `ManufacturerPartNmbr` |  | |  |  |  |  |
| `Manufacturer` |  | |  |  |  |  |
| `PurchasingCategory` |  | |  |  |  |  |
| `PurgCatName` |  | |  |  |  |  |
| `PurchaseContractType` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `PurchasingIsCatalogRelevant` |  | |  |  |  |  |
| `_PurchaseContract` | | ✓ | | | | |
| `_PurCtrAccount` | | ✓ | | | | |
| `_PurCtrAddress` | | ✓ | | | | |
| `_PurCtrItNotes` | | ✓ | | | | |
| `_PurContrItemCndnValdty` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Purchase Contract Item - TP'
@AccessControl.authorizationCheck: #CHECK

@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey: ['PurchaseContract', 'PurchaseContractItem' ]
@ObjectModel.representativeKey: 'PurchaseContractItem'

@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'PurchaseContractItem'
define view entity I_PurchaseContractItemTP
  as projection on R_PurchaseContractItemTP as PurchaseContractItem 
{

      @ObjectModel.foreignKey.association: '_PurchaseContract'
  key PurchaseContract,
  key PurchaseContractItem,
      PurchaseContractItemUniqueID,
      CompanyCode,
      Material,
      ManufacturerMaterial,
      PurchaseContractItemText,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      ContractNetPriceAmount,
      OrderPriceUnit,
      VolumeUnit,
      OrderQuantityUnit,
      MaterialGroup,
      Customer,
      Subcontractor,
      ReferenceDeliveryAddressID,
      ManualDeliveryAddressID,
      DeliveryAddressID,
      Plant,
      StorageLocation,
      AccountAssignmentCategory,
      GoodsReceiptIsExpected,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      NetPriceQuantity,
      MultipleAcctAssgmtDistribution,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      TargetQuantity,

      @Semantics.amount.currencyCode: 'DocumentCurrency'
      TargetAmount,
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
      PurgDocPriceDate,
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
      TaxCountry,
      TaxDeterminationDate,
      RequirementTracking,
      IsOrderAcknRqd,
      ShippingInstruction,
      GoodsReceiptIsNonValuated,
      ServicePerformer,
      ProductTypeCode,
      MaterialType,
      PurchaseContractItemFormatted,
      PurchasingContractDeletionCode,
      PurchaseRequisition,
      PurchaseRequisitionItem,
      PartialInvoiceDistribution,
      ManufacturerPartNmbr,
      Manufacturer,
      PurchasingCategory,
      PurgCatName,
      PurchaseContractType,
      PurchasingOrganization,
      PurchasingGroup,

      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,
      PurchasingIsCatalogRelevant,
      /* Associations */
      _PurchaseContract : redirected to parent I_PurchaseContractTP,
      _PurCtrAccount    : redirected to composition child I_PurContrAccountTP,
      _PurCtrAddress    : redirected to composition child I_PurContrAddressTP,
      _PurCtrItNotes    : redirected to composition child I_PurContrItemNotesTP,
      _PurContrItemCndnValdty : redirected to composition child I_PurContrItemCndnValdtyTP

}
```
