---
name: I_PURCHASECONTRACTITEMAPI01
description: Purchase ContractITEMAPI 01
app_component: MM-PUR-OA-CON-2CL
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
  - purchase-contract
  - contract
  - item-level
  - component:MM-PUR-OA-CON-2CL
  - lob:Sourcing & Procurement
---
# I_PURCHASECONTRACTITEMAPI01

**Purchase ContractITEMAPI 01**

| Property | Value |
|---|---|
| App Component | `MM-PUR-OA-CON-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PurchaseContract` | `I_PurchaseContractItem.PurchaseContract` |
| key `PurchaseContractItem` | `I_PurchaseContractItem.PurchaseContractItem` |
| `Material` | `I_PurchaseContractItem.Material` |
| `PurchaseContractItemText` | `I_PurchaseContractItem.PurchaseContractItemText` |
| `ContractNetPriceAmount` | `I_PurchaseContractItem.ContractNetPriceAmount` |
| `OrderPriceUnit` | `I_PurchaseContractItem.OrderPriceUnit` |
| `VolumeUnit` | `I_PurchaseContractItem.VolumeUnit` |
| `OrderQuantityUnit` | `I_PurchaseContractItem.OrderQuantityUnit` |
| `MaterialGroup` | `I_PurchaseContractItem.MaterialGroup` |
| `Customer` | `I_PurchaseContractItem.Customer` |
| `Subcontractor` | `I_PurchaseContractItem.Subcontractor` |
| `ReferenceDeliveryAddressID` | `I_PurchaseContractItem.ReferenceDeliveryAddressID` |
| `ManualDeliveryAddressID` | `I_PurchaseContractItem.ManualDeliveryAddressID` |
| `DeliveryAddressID` | `cast(I_PurchaseContractItem.DeliveryAddressID as contactcardaddress)` |
| `DeliveryAddressID_2` | `I_PurchaseContractItem.DeliveryAddressID` |
| `Plant` | `I_PurchaseContractItem.Plant` |
| `StorageLocation` | `I_PurchaseContractItem.StorageLocation` |
| `AccountAssignmentCategory` | `I_PurchaseContractItem.AccountAssignmentCategory` |
| `GoodsReceiptIsExpected` | `I_PurchaseContractItem.GoodsReceiptIsExpected` |
| `NetPriceQuantity` | `I_PurchaseContractItem.NetPriceQuantity` |
| `MultipleAcctAssgmtDistribution` | `I_PurchaseContractItem.MultipleAcctAssgmtDistribution` |
| `TargetQuantity` | `I_PurchaseContractItem.TargetQuantity` |
| `TargetAmount` | `I_PurchaseContractItem.TargetAmount` |
| `DocumentCurrency` | `I_PurchaseContractItem.DocumentCurrency` |
| `OrdPriceUnitToOrderUnitDnmntr` | `I_PurchaseContractItem.OrdPriceUnitToOrderUnitDnmntr` |
| `OrderPriceUnitToOrderUnitNmrtr` | `I_PurchaseContractItem.OrderPriceUnitToOrderUnitNmrtr` |
| `PurchasingDocumentItemCategory` | `I_PurchaseContractItem.PurchasingDocumentItemCategory` |
| `SupplierMaterialNumber` | `I_PurchaseContractItem.SupplierMaterialNumber` |
| `EvaldRcptSettlmtIsAllowed` | `I_PurchaseContractItem.EvaldRcptSettlmtIsAllowed` |
| `UnderdelivTolrtdLmtRatioInPct` | `I_PurchaseContractItem.UnderdelivTolrtdLmtRatioInPct` |
| `PriceIsToBePrinted` | `I_PurchaseContractItem.PriceIsToBePrinted` |
| `SupplierConfirmationControlKey` | `I_PurchaseContractItem.SupplierConfirmationControlKey` |
| `OverdelivTolrtdLmtRatioInPct` | `I_PurchaseContractItem.OverdelivTolrtdLmtRatioInPct` |
| `UnlimitedOverdeliveryIsAllowed` | `I_PurchaseContractItem.UnlimitedOverdeliveryIsAllowed` |
| `InvoiceIsExpected` | `I_PurchaseContractItem.InvoiceIsExpected` |
| `InvoiceIsGoodsReceiptBased` | `I_PurchaseContractItem.InvoiceIsGoodsReceiptBased` |
| `PurgDocPriceDate` | `I_PurchaseContractItem.PurgDocPriceDate` |
| `IsInfoRecordUpdated` | `I_PurchaseContractItem.IsInfoRecordUpdated` |
| `PurchasingInfoRecordUpdateCode` | `I_PurchaseContractItem.PurchasingInfoRecordUpdateCode` |
| `PurgDocReleaseOrderQuantity` | `I_PurchaseContractItem.PurgDocReleaseOrderQuantity` |
| `PurgDocOrderAcknNumber` | `I_PurchaseContractItem.PurgDocOrderAcknNumber` |
| `PurgDocEstimatedPrice` | `I_PurchaseContractItem.PurgDocEstimatedPrice` |
| `IsInfoAtRegistration` | `I_PurchaseContractItem.IsInfoAtRegistration` |
| `NoDaysReminder1` | `I_PurchaseContractItem.NoDaysReminder1` |
| `NoDaysReminder2` | `I_PurchaseContractItem.NoDaysReminder2` |
| `NoDaysReminder3` | `I_PurchaseContractItem.NoDaysReminder3` |
| `StockType` | `I_PurchaseContractItem.StockType` |
| `TaxCode` | `I_PurchaseContractItem.TaxCode` |
| `RequirementTracking` | `I_PurchaseContractItem.RequirementTracking` |
| `IsOrderAcknRqd` | `I_PurchaseContractItem.IsOrderAcknRqd` |
| `ShippingInstruction` | `I_PurchaseContractItem.ShippingInstruction` |
| `ShippingType` | `I_PurchaseContractItem.ShippingType` |
| `GoodsReceiptIsNonValuated` | `I_PurchaseContractItem.GoodsReceiptIsNonValuated` |
| `ServicePerformer` | `I_PurchaseContractItem.ServicePerformer` |
| `ProductType` | `I_PurchaseContractItem.ProductType` |
| `ProductTypeCode` | `I_PurchaseContractItem.ProductTypeCode` |
| `MaterialType` | `I_PurchaseContractItem.MaterialType` |
| `FormattedPurchaseContractItem` | `I_PurchaseContractItem.FormattedPurchaseContractItem` |
| `PurchaseContractItemFormatted` | `I_PurchaseContractItem.PurchaseContractItemFormatted` |
| `PurchasingContractDeletionCode` | `I_PurchaseContractItem.PurchasingContractDeletionCode` |
| `PurchaseContractItemUniqueID` | `I_PurchaseContractItem.PurchaseContractItemUniqueID` |
| `PlannedDeliveryDurationInDays` | `I_PurchaseContractItem.PlannedDeliveryDurationInDays` |
| `GoodsReceiptDurationInDays` | `I_PurchaseContractItem.GoodsReceiptDurationInDays` |
| `CompanyCode` | `I_PurchaseContractItem.CompanyCode` |
| `PurchaseContractType` | `I_PurchaseContractItem.PurchaseContractType` |
| `IsToBeAcceptedAtOrigin` | `I_PurchaseContractItem.IsToBeAcceptedAtOrigin` |
| `PartialInvoiceDistribution` | `I_PurchaseContractItem.PartialInvoiceDistribution` |
| `IncotermsClassification` | `I_PurchaseContractItem.IncotermsClassification` |
| `IncotermsLocation1` | `I_PurchaseContractItem.IncotermsLocation1` |
| `IncotermsLocation2` | `I_PurchaseContractItem.IncotermsLocation2` |
| `SupplierSubrange` | `I_PurchaseContractItem.SupplierSubrange` |
| `PurchasingInfoRecord` | `I_PurchaseContractItem.PurchasingInfoRecord` |
| `TaxCountry` | `I_PurchaseContractItem.TaxCountry` |
| `TaxDeterminationDate` | `I_PurchaseContractItem.TaxDeterminationDate` |
| `PurchaseRequisition` | `I_PurchaseContractItem.PurchaseRequisition` |
| `PurchaseRequisitionItem` | `I_PurchaseContractItem.PurchaseRequisitionItem` |
| `PurContractItmReplnmtElmntType` | `I_PurchaseContractItem.PurContractItmReplnmtElmntType` |
| `PurgProdCmplncSupplierStatus` | `I_PurchaseContractItem.PurgProdCmplncSupplierStatus` |
| `PurchasingIsCatalogRelevant` | `I_PurchaseContractItem.PurchasingIsCatalogRelevant` |
| `PurchasingParentItem` | `I_PurchaseContractItem.PurchasingParentItem` |
| `IsStatisticalItem` | `I_PurchaseContractItem.IsStatisticalItem` |
| `PurgConfigurableItemNumber` | `I_PurchaseContractItem.PurgConfigurableItemNumber` |
| `PurgDocAggrgdSubitemCategory` | `I_PurchaseContractItem.PurgDocAggrgdSubitemCategory` |
| `PurgExternalSortNumber` | `I_PurchaseContractItem.PurgExternalSortNumber` |
| `PurchasingCategory` | `_PurchasingCategoryMatlGroup._PurchasingCategory.PurchasingCategory` |
| `PurgCatName` | `_PurchasingCategoryMatlGroup._PurchasingCategory.PurgCatName` |
| `_PurchaseContractAPI01` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurchaseContractAPI01` | `I_PurchaseContractAPI01` | [1..1] |
| `_PurchasingCategoryMatlGroup` | `I_PurchasingCategoryMatlGroup` | [1..1] |
| `_ItemExtension` | `E_PurchasingDocumentItem` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPURCONTRITEMAPI'
@VDM.viewType : #COMPOSITE
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Purchase Contract Item'

@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]

@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

define view I_PurchaseContractItemAPI01
  as select from I_PurchaseContractItem

  association [1..1] to I_PurchaseContractAPI01       as _PurchaseContractAPI01       on  $projection.PurchaseContract = _PurchaseContractAPI01.PurchaseContract
  association [1..1] to I_PurchasingCategoryMatlGroup as _PurchasingCategoryMatlGroup on  $projection.MaterialGroup = _PurchasingCategoryMatlGroup.MaterialGroup
  association [0..1] to E_PurchasingDocumentItem      as _ItemExtension               on  $projection.PurchaseContract = _ItemExtension.PurchasingDocument
                                                                                      and $projection.PurchaseContract = _ItemExtension.PurchasingDocumentItem
{

  key I_PurchaseContractItem.PurchaseContract,
  key I_PurchaseContractItem.PurchaseContractItem,
      I_PurchaseContractItem.Material,
      I_PurchaseContractItem.PurchaseContractItemText,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      I_PurchaseContractItem.ContractNetPriceAmount,
      I_PurchaseContractItem.OrderPriceUnit,
      I_PurchaseContractItem.VolumeUnit,
      I_PurchaseContractItem.OrderQuantityUnit,
      I_PurchaseContractItem.MaterialGroup,
      I_PurchaseContractItem.Customer,
      I_PurchaseContractItem.Subcontractor,
      I_PurchaseContractItem.ReferenceDeliveryAddressID,
      I_PurchaseContractItem.ManualDeliveryAddressID,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'DeliveryAddressID_2'
      cast(I_PurchaseContractItem.DeliveryAddressID as contactcardaddress) as DeliveryAddressID,
      I_PurchaseContractItem.DeliveryAddressID                             as DeliveryAddressID_2,
      I_PurchaseContractItem.Plant,
      I_PurchaseContractItem.StorageLocation,
      I_PurchaseContractItem.AccountAssignmentCategory,
      I_PurchaseContractItem.GoodsReceiptIsExpected,
      @Semantics.quantity.unitOfMeasure: 'OrderPriceUnit'
      I_PurchaseContractItem.NetPriceQuantity,
      I_PurchaseContractItem.MultipleAcctAssgmtDistribution,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      I_PurchaseContractItem.TargetQuantity,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      I_PurchaseContractItem.TargetAmount,
      I_PurchaseContractItem.DocumentCurrency,
      I_PurchaseContractItem.OrdPriceUnitToOrderUnitDnmntr,
      I_PurchaseContractItem.OrderPriceUnitToOrderUnitNmrtr,
      I_PurchaseContractItem.PurchasingDocumentItemCategory,
      I_PurchaseContractItem.SupplierMaterialNumber,
      I_PurchaseContractItem.EvaldRcptSettlmtIsAllowed,
      I_PurchaseContractItem.UnderdelivTolrtdLmtRatioInPct,
      I_PurchaseContractItem.PriceIsToBePrinted,
      I_PurchaseContractItem.SupplierConfirmationControlKey,
      I_PurchaseContractItem.OverdelivTolrtdLmtRatioInPct,
      I_PurchaseContractItem.UnlimitedOverdeliveryIsAllowed,
      I_PurchaseContractItem.InvoiceIsExpected,
      I_PurchaseContractItem.InvoiceIsGoodsReceiptBased,
      I_PurchaseContractItem.PurgDocPriceDate,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'PurchasingInfoRecordUpdateCode'
      I_PurchaseContractItem.IsInfoRecordUpdated,
      I_PurchaseContractItem.PurchasingInfoRecordUpdateCode,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      I_PurchaseContractItem.PurgDocReleaseOrderQuantity,
      I_PurchaseContractItem.PurgDocOrderAcknNumber,
      I_PurchaseContractItem.PurgDocEstimatedPrice,
      I_PurchaseContractItem.IsInfoAtRegistration,
      I_PurchaseContractItem.NoDaysReminder1,
      I_PurchaseContractItem.NoDaysReminder2,
      I_PurchaseContractItem.NoDaysReminder3,
      I_PurchaseContractItem.StockType,
      I_PurchaseContractItem.TaxCode,
      I_PurchaseContractItem.RequirementTracking,
      I_PurchaseContractItem.IsOrderAcknRqd,
      I_PurchaseContractItem.ShippingInstruction,
      I_PurchaseContractItem.ShippingType,
      I_PurchaseContractItem.GoodsReceiptIsNonValuated,
      I_PurchaseContractItem.ServicePerformer,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'ProductTypeCode'
      I_PurchaseContractItem.ProductType,
      I_PurchaseContractItem.ProductTypeCode,
      I_PurchaseContractItem.MaterialType,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'PurchaseContractItemFormatted'
      I_PurchaseContractItem.FormattedPurchaseContractItem,
      I_PurchaseContractItem.PurchaseContractItemFormatted,
      I_PurchaseContractItem.PurchasingContractDeletionCode,
      I_PurchaseContractItem.PurchaseContractItemUniqueID,
      I_PurchaseContractItem.PlannedDeliveryDurationInDays,
      I_PurchaseContractItem.GoodsReceiptDurationInDays,
      I_PurchaseContractItem.CompanyCode,
      I_PurchaseContractItem.PurchaseContractType,
      I_PurchaseContractItem.IsToBeAcceptedAtOrigin,
      I_PurchaseContractItem.PartialInvoiceDistribution,
      I_PurchaseContractItem.IncotermsClassification,
      I_PurchaseContractItem.IncotermsLocation1,
      I_PurchaseContractItem.IncotermsLocation2,
      I_PurchaseContractItem.SupplierSubrange,
      I_PurchaseContractItem.PurchasingInfoRecord,
      I_PurchaseContractItem.TaxCountry,
      I_PurchaseContractItem.TaxDeterminationDate,
      I_PurchaseContractItem.PurchaseRequisition,
      I_PurchaseContractItem.PurchaseRequisitionItem,
      I_PurchaseContractItem.PurContractItmReplnmtElmntType,
      I_PurchaseContractItem.PurgProdCmplncSupplierStatus,
      I_PurchaseContractItem.PurchasingIsCatalogRelevant,

      //Added for item hierarchy
      I_PurchaseContractItem.PurchasingParentItem,
      I_PurchaseContractItem.IsStatisticalItem,
      I_PurchaseContractItem.PurgConfigurableItemNumber,
      I_PurchaseContractItem.PurgDocAggrgdSubitemCategory,
      I_PurchaseContractItem.PurgExternalSortNumber,

      _PurchasingCategoryMatlGroup._PurchasingCategory.PurchasingCategory,
      _PurchasingCategoryMatlGroup._PurchasingCategory.PurgCatName,
      _PurchaseContractAPI01
}
```
