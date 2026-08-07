---
name: I_PURORDHISTDELIVERYCOSTAPI01
description: Purordhistdeliverycostapi 01
app_component: MM-PUR-PO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-PO
  - interface-view
  - delivery
  - component:MM-PUR-PO-2CL
  - lob:Sourcing & Procurement
---
# I_PURORDHISTDELIVERYCOSTAPI01

**Purordhistdeliverycostapi 01**

| Property | Value |
|---|---|
| App Component | `MM-PUR-PO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseOrder` | ✓ | |  |  |  |  |
| `PurchaseOrderItem` | ✓ | |  |  |  |  |
| `PricingProcedureStep` | ✓ | |  |  |  |  |
| `PricingProcedureCounter` | ✓ | |  |  |  |  |
| `PurchasingHistoryDocumentType` | ✓ | |  |  |  |  |
| `PurchasingHistoryDocumentYear` | ✓ | |  |  |  |  |
| `PurchasingHistoryDocument` | ✓ | |  |  |  |  |
| `PurchasingHistoryDocumentItem` | ✓ | |  |  |  |  |
| `PurchasingHistoryCategory` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `Quantity` |  | |  |  |  |  |
| `PurOrdAmountInCompanyCodeCrcy` |  | |  |  |  |  |
| `PurchaseOrderAmount` |  | |  |  |  |  |
| `Currency` |  | |  |  |  |  |
| `GRIRAcctClrgAmtInCoCodeCrcy` |  | |  |  |  |  |
| `DebitCreditCode` |  | |  |  |  |  |
| `DocumentReferenceID` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `PurgHistDocumentCreationDate` |  | |  |  |  |  |
| `PurgHistDocumentCreationTime` |  | |  |  |  |  |
| `InvoiceAmtInCoCodeCrcy` |  | |  |  |  |  |
| `InvoiceAmountInFrgnCurrency` |  | |  |  |  |  |
| `InventoryValuationType` |  | |  |  |  |  |
| `ConditionType` |  | |  |  |  |  |
| `QtyInPurchaseOrderPriceUnit` |  | |  |  |  |  |
| `GRIRAcctClrgAmtInTransacCrcy` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `GRIRAcctClrgAmtInOrdTrnsacCrcy` |  | |  |  |  |  |
| `InvoiceAmtInPurOrdTransacCrcy` |  | |  |  |  |  |
| `ExchangeRateDifferenceAmount` |  | |  |  |  |  |
| `ExchangeRate` |  | |  |  |  |  |
| `OrderPriceUnit` |  | |  |  |  |  |
| `OrderQuantityUnit` |  | |  |  |  |  |
| `DocumentCurrency` |  | |  |  |  |  |
| `CompanyCodeCurrency` |  | |  |  |  |  |
| `_PurchaseOrder` | | ✓ | | | | |
| `_PurchaseOrderItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurchaseOrder` | `I_PurchaseOrderAPI01` | [1..1] |
| `_PurchaseOrderItem` | `I_PurchaseOrderItemAPI01` | [1..1] |

## Source Code

```abap
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'IMMPURORDHDCAP01'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK 
@VDM.viewType : #COMPOSITE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.modelingPattern:#NONE
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, 
                                      #CDS_MODELING_DATA_SOURCE, 
                                      #CDS_MODELING_ASSOCIATION_TARGET ]
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations:true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Purchase Order History Delivery Cost'

define view I_PurOrdHistDeliveryCostAPI01
  as select from R_PurOrdHistoryDeliveryCost as HistoryDeliveryCost
  
  association [1..1] to I_PurchaseOrderAPI01     as _PurchaseOrder     on  HistoryDeliveryCost.PurchaseOrder = _PurchaseOrder.PurchaseOrder
  association [1..1] to I_PurchaseOrderItemAPI01 as _PurchaseOrderItem on  HistoryDeliveryCost.PurchaseOrder     = _PurchaseOrderItem.PurchaseOrder
                                                                       and HistoryDeliveryCost.PurchaseOrderItem = _PurchaseOrderItem.PurchaseOrderItem
{
  key PurchaseOrder,
  key PurchaseOrderItem,

  key PricingProcedureStep,
  key PricingProcedureCounter,
  key PurchasingHistoryDocumentType,
  key PurchasingHistoryDocumentYear,
  key PurchasingHistoryDocument,
  key PurchasingHistoryDocumentItem,

      PurchasingHistoryCategory,
      PostingDate,

      @Semantics.quantity.unitOfMeasure:'OrderQuantityUnit'
      Quantity,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      PurOrdAmountInCompanyCodeCrcy,

      @Semantics.amount.currencyCode: 'Currency'
      PurchaseOrderAmount,

      @Semantics.currencyCode: true 
      Currency,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      GRIRAcctClrgAmtInCoCodeCrcy,

      DebitCreditCode,
      DocumentReferenceID,

      HistoryDeliveryCost.Supplier,

      PurgHistDocumentCreationDate,
      PurgHistDocumentCreationTime,
     
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'  
      InvoiceAmtInCoCodeCrcy,

      @Semantics.amount.currencyCode: 'Currency'
      InvoiceAmountInFrgnCurrency,

      InventoryValuationType,

      ConditionType,

      @Semantics.quantity.unitOfMeasure:'OrderPriceUnit'
      QtyInPurchaseOrderPriceUnit,

      @Semantics.amount.currencyCode: 'Currency'
      GRIRAcctClrgAmtInTransacCrcy,

      CreatedByUser,

      @Semantics.amount.currencyCode: 'DocumentCurrency'
      GRIRAcctClrgAmtInOrdTrnsacCrcy,

      @Semantics.amount.currencyCode: 'DocumentCurrency'
      InvoiceAmtInPurOrdTransacCrcy,

      @Semantics.amount.currencyCode: 'Currency'
      ExchangeRateDifferenceAmount,

      ExchangeRate,

      @Semantics.unitOfMeasure: true
      OrderPriceUnit,
      @Semantics.unitOfMeasure: true
      OrderQuantityUnit,
      @Semantics.currencyCode: true
      DocumentCurrency,
      @Semantics.currencyCode: true
      CompanyCodeCurrency,

      _PurchaseOrder,
      _PurchaseOrderItem
}
```
