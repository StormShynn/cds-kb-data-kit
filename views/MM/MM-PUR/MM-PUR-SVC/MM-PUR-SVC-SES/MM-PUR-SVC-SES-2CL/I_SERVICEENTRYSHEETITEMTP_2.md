---
name: I_SERVICEENTRYSHEETITEMTP_2
description: Serviceentrysheetitemtp 2
app_component: MM-PUR-SVC-SES-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-SVC
  - interface-view
  - transactional-processing
  - service
  - item-level
  - component:MM-PUR-SVC-SES-2CL
  - lob:Sourcing & Procurement
---
# I_SERVICEENTRYSHEETITEMTP_2

**Serviceentrysheetitemtp 2**

| Property | Value |
|---|---|
| App Component | `MM-PUR-SVC-SES-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ServiceEntrySheet` | `ServiceEntrySheet` |
| key `ServiceEntrySheetItem` | `ServiceEntrySheetItem` |
| `PurchaseOrder` | `PurchaseOrder` |
| `PurchaseOrderItem` | `PurchaseOrderItem` |
| `PurgDocumentItemDeletionCode` | `PurgDocumentItemDeletionCode` |
| `Service` | `Service` |
| `ServiceEntrySheetItemDesc` | `ServiceEntrySheetItemDesc` |
| `ServicePerformer` | `ServicePerformer` |
| `AccountAssignmentCategory` | `AccountAssignmentCategory` |
| `MultipleAcctAssgmtDistribution` | `MultipleAcctAssgmtDistribution` |
| `WorkItem` | `WorkItem` |
| `ConfirmedQuantity` | `ConfirmedQuantity` |
| `QuantityUnit` | `QuantityUnit` |
| `OrderPriceUnit` | `OrderPriceUnit` |
| `OrderPriceUnitToOrderUnitNmrtr` | `OrderPriceUnitToOrderUnitNmrtr` |
| `OrdPriceUnitToOrderUnitDnmntr` | `OrdPriceUnitToOrderUnitDnmntr` |
| `QtyInPurchaseOrderPriceUnit` | `QtyInPurchaseOrderPriceUnit` |
| `NetPriceQuantity` | `NetPriceQuantity` |
| `ServicePerformanceDate` | `ServicePerformanceDate` |
| `ServicePerformanceEndDate` | `ServicePerformanceEndDate` |
| `PerformancePeriodStartDate` | `PerformancePeriodStartDate` |
| `PerformancePeriodEndDate` | `PerformancePeriodEndDate` |
| `OriginObject` | `OriginObject` |
| `Currency` | `Currency` |
| `NetPriceAmount` | `NetPriceAmount` |
| `SESItemMaterialGroupIsInitial` | `SESItemMaterialGroupIsInitial` |
| `MaterialGroup` | `MaterialGroup` |
| `IsEndOfPurposeBlocked` | `IsEndOfPurposeBlocked` |
| `CreationDateTime` | `CreationDateTime` |
| `CreatedByUser` | `CreatedByUser` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `LastChangedByUser` | `LastChangedByUser` |
| `Plant` | `Plant` |
| `PurgDocItemExternalReference` | `PurgDocItemExternalReference` |
| `PurchaseContract` | `PurchaseContract` |
| `PurchaseContractItem` | `PurchaseContractItem` |
| `PurchasingOrganization` | `PurchasingOrganization` |
| `PurchasingGroup` | `PurchasingGroup` |
| `ParentObjectIsDeleted` | `ParentObjectIsDeleted` |
| `PurOrderItemPlant` | `PurOrderItemPlant` |
| `PurchaseOrderType` | `PurchaseOrderType` |
| `Supplier` | `Supplier` |
| `PurchaseOrderItemMaterialGroup` | `PurchaseOrderItemMaterialGroup` |
| `PurchaseOrderItemQuantity` | `PurchaseOrderItemQuantity` |
| `PurchaseOrderItemQuantityUnit` | `PurchaseOrderItemQuantityUnit` |
| `PurchaseOrderItemNetAmount` | `PurchaseOrderItemNetAmount` |
| `PurchaseOrderCurrency` | `PurchaseOrderCurrency` |
| `PurchaseOrderItemCompanyCode` | `PurchaseOrderItemCompanyCode` |
| `OverdelivTolrtdLmtRatioInPct` | `OverdelivTolrtdLmtRatioInPct` |
| `PurchaseOrderItemCategory` | `PurchaseOrderItemCategory` |
| `ExpectedOverallLimitAmount` | `ExpectedOverallLimitAmount` |
| `OverallLimitAmount` | `OverallLimitAmount` |
| `TotalConfirmedQuantity` | `TotalConfirmedQuantity` |
| `OpenQuantity` | `OpenQuantity` |
| `OpenAmountInPurchaseOrderCrcy` | `OpenAmountInPurchaseOrderCrcy` |
| `NetAmount` | `NetAmount` |
| `NetAmountInPurchaseOrderCrcy` | `NetAmountInPurchaseOrderCrcy` |
| `NonDeductibleInputTaxAmount` | `NonDeductibleInputTaxAmount` |
| `SESNetAmountInclSalesTax` | `SESNetAmountInclSalesTax` |
| `TaxCode` | `TaxCode` |
| `TaxCountry` | `TaxCountry` |
| `TaxDeterminationDate` | `TaxDeterminationDate` |
| `TaxJurisdiction` | `TaxJurisdiction` |
| `TaxCalculationProcedure` | `TaxCalculationProcedure` |
| `MaterialType` | `MaterialType` |
| `ConsumptionPosting` | `ConsumptionPosting` |
| `InventorySpecialStockType` | `InventorySpecialStockType` |
| `PurgDocProductType` | `PurgDocProductType` |
| `SESItemIsFinalEntry` | `SESItemIsFinalEntry` |
| `_ServiceEntrySheet` | *Association* |
| `_AccountAssignment` | *Association* |
| `_SESPricingElement` | *Association* |
| `_ServiceEntrySheetItemNote` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Service Entry Sheet Item'
@AccessControl.authorizationCheck: #MANDATORY

@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey: ['ServiceEntrySheet', 'ServiceEntrySheetItem' ]
@ObjectModel.representativeKey: 'ServiceEntrySheetItem'

@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #MIXED
}

@Metadata.ignorePropagatedAnnotations: true
define view entity I_ServiceEntrySheetItemTP_2
  as projection on R_ServiceEntrySheetItemTP as _ServiceEntrySheetItem
{
      @ObjectModel.foreignKey.association: '_ServiceEntrySheet'
  key ServiceEntrySheet,
  key ServiceEntrySheetItem,
      PurchaseOrder,
      PurchaseOrderItem,
      PurgDocumentItemDeletionCode,
      Service,
      ServiceEntrySheetItemDesc,
      ServicePerformer,
      AccountAssignmentCategory,
      MultipleAcctAssgmtDistribution,
      WorkItem,
      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderItemQuantityUnit'
      ConfirmedQuantity,
      QuantityUnit,
      OrderPriceUnit,
      OrderPriceUnitToOrderUnitNmrtr,
      OrdPriceUnitToOrderUnitDnmntr,
      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderItemQuantityUnit'
      QtyInPurchaseOrderPriceUnit,
      @Semantics.quantity.unitOfMeasure: 'OrderPriceUnit'
      NetPriceQuantity,
      ServicePerformanceDate,
      ServicePerformanceEndDate,
      PerformancePeriodStartDate,
      PerformancePeriodEndDate,
      OriginObject,
      Currency,
      @Semantics.amount.currencyCode: 'Currency'
      NetPriceAmount,
      SESItemMaterialGroupIsInitial,
      MaterialGroup,
      @Semantics.booleanIndicator:true
      IsEndOfPurposeBlocked,
      CreationDateTime,
      CreatedByUser,
      LastChangeDateTime,
      LastChangedByUser,
      Plant,
      PurgDocItemExternalReference,
      PurchaseContract,
      PurchaseContractItem,
      PurchasingOrganization,
      PurchasingGroup,
      @Semantics.booleanIndicator:true
      ParentObjectIsDeleted,
      PurOrderItemPlant,
      PurchaseOrderType,
      Supplier,
      PurchaseOrderItemMaterialGroup,
      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderItemQuantityUnit'
      PurchaseOrderItemQuantity,
      PurchaseOrderItemQuantityUnit,
      @Semantics.amount.currencyCode: 'PurchaseOrderCurrency'
      PurchaseOrderItemNetAmount,
      PurchaseOrderCurrency,
      PurchaseOrderItemCompanyCode,
      OverdelivTolrtdLmtRatioInPct,
      PurchaseOrderItemCategory,
      @Semantics.amount.currencyCode: 'PurchaseOrderCurrency'
      ExpectedOverallLimitAmount,
      @Semantics.amount.currencyCode: 'PurchaseOrderCurrency'
      OverallLimitAmount,
      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderItemQuantityUnit'
      TotalConfirmedQuantity,
      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderItemQuantityUnit'
      OpenQuantity,
      @Semantics.amount.currencyCode: 'PurchaseOrderCurrency'
      OpenAmountInPurchaseOrderCrcy,
      @Semantics.amount.currencyCode: 'PurchaseOrderCurrency'
      NetAmount,
      @Semantics.amount.currencyCode: 'PurchaseOrderCurrency'
      NetAmountInPurchaseOrderCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      NonDeductibleInputTaxAmount,
      @Semantics.amount.currencyCode: 'PurchaseOrderCurrency'
      SESNetAmountInclSalesTax,
      TaxCode,
      TaxCountry,
      TaxDeterminationDate,
      TaxJurisdiction,
      TaxCalculationProcedure,
      MaterialType,
      ConsumptionPosting,
      InventorySpecialStockType,
      PurgDocProductType,
      SESItemIsFinalEntry,

      /* Associations */
      _ServiceEntrySheet : redirected to parent I_ServiceEntrySheetTP_2,
      _AccountAssignment : redirected to composition child I_SESAccountAssignmentTP_2,
      _SESPricingElement : redirected to composition child I_SESPricingElementTP_2,
      _ServiceEntrySheetItemNote : redirected to composition child I_ServiceEntrySheetItemNoteTP
}
```
