---
name: I_SERVICEENTRYSHEETITEMTP_2
description: "Serviceentrysheetitemtp 2"
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

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceEntrySheet` | ✓ | |  |  |  |  |
| `ServiceEntrySheetItem` | ✓ | |  |  |  |  |
| `PurchaseOrder` |  | |  |  |  |  |
| `PurchaseOrderItem` |  | |  |  |  |  |
| `PurgDocumentItemDeletionCode` |  | |  |  |  |  |
| `Service` |  | |  |  |  |  |
| `ServiceEntrySheetItemDesc` |  | |  |  |  |  |
| `ServicePerformer` |  | |  |  |  |  |
| `AccountAssignmentCategory` |  | |  |  |  |  |
| `MultipleAcctAssgmtDistribution` |  | |  |  |  |  |
| `WorkItem` |  | |  |  |  |  |
| `ConfirmedQuantity` |  | |  |  |  |  |
| `QuantityUnit` |  | |  |  |  |  |
| `OrderPriceUnit` |  | |  |  |  |  |
| `OrderPriceUnitToOrderUnitNmrtr` |  | |  |  |  |  |
| `OrdPriceUnitToOrderUnitDnmntr` |  | |  |  |  |  |
| `QtyInPurchaseOrderPriceUnit` |  | |  |  |  |  |
| `NetPriceQuantity` |  | |  |  |  |  |
| `ServicePerformanceDate` |  | |  |  |  |  |
| `ServicePerformanceEndDate` |  | |  |  |  |  |
| `PerformancePeriodStartDate` |  | |  |  |  |  |
| `PerformancePeriodEndDate` |  | |  |  |  |  |
| `OriginObject` |  | |  |  |  |  |
| `Currency` |  | |  |  |  |  |
| `NetPriceAmount` |  | |  |  |  |  |
| `SESItemMaterialGroupIsInitial` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `IsEndOfPurposeBlocked` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `PurgDocItemExternalReference` |  | |  |  |  |  |
| `PurchaseContract` |  | |  |  |  |  |
| `PurchaseContractItem` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `ParentObjectIsDeleted` |  | |  |  |  |  |
| `PurOrderItemPlant` |  | |  |  |  |  |
| `PurchaseOrderType` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `PurchaseOrderItemMaterialGroup` |  | |  |  |  |  |
| `PurchaseOrderItemQuantity` |  | |  |  |  |  |
| `PurchaseOrderItemQuantityUnit` |  | |  |  |  |  |
| `PurchaseOrderItemNetAmount` |  | |  |  |  |  |
| `PurchaseOrderCurrency` |  | |  |  |  |  |
| `PurchaseOrderItemCompanyCode` |  | |  |  |  |  |
| `OverdelivTolrtdLmtRatioInPct` |  | |  |  |  |  |
| `PurchaseOrderItemCategory` |  | |  |  |  |  |
| `ExpectedOverallLimitAmount` |  | |  |  |  |  |
| `OverallLimitAmount` |  | |  |  |  |  |
| `TotalConfirmedQuantity` |  | |  |  |  |  |
| `OpenQuantity` |  | |  |  |  |  |
| `OpenAmountInPurchaseOrderCrcy` |  | |  |  |  |  |
| `NetAmount` |  | |  |  |  |  |
| `NetAmountInPurchaseOrderCrcy` |  | |  |  |  |  |
| `NonDeductibleInputTaxAmount` |  | |  |  |  |  |
| `SESNetAmountInclSalesTax` |  | |  |  |  |  |
| `TaxCode` |  | |  |  |  |  |
| `TaxCountry` |  | |  |  |  |  |
| `TaxDeterminationDate` |  | |  |  |  |  |
| `TaxJurisdiction` |  | |  |  |  |  |
| `TaxCalculationProcedure` |  | |  |  |  |  |
| `MaterialType` |  | |  |  |  |  |
| `ConsumptionPosting` |  | |  |  |  |  |
| `InventorySpecialStockType` |  | |  |  |  |  |
| `PurgDocProductType` |  | |  |  |  |  |
| `SESItemIsFinalEntry` |  | |  |  |  |  |
| `_ServiceEntrySheet` | | ✓ | | | | |
| `_AccountAssignment` | | ✓ | | | | |
| `_SESPricingElement` | | ✓ | | | | |
| `_ServiceEntrySheetItemNote` | | ✓ | | | | |

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
