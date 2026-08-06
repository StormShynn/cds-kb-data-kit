---
name: I_PURSCHEDGAGRMTHISTORYAPI01
description: Purschedgagrmthistoryapi 01
app_component: MM-PUR-OA-SCH-2CL
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
  - component:MM-PUR-OA-SCH-2CL
  - lob:Sourcing & Procurement
---
# I_PURSCHEDGAGRMTHISTORYAPI01

**Purschedgagrmthistoryapi 01**

| Property | Value |
|---|---|
| App Component | `MM-PUR-OA-SCH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SchedulingAgreement` | `History.SchedulingAgreement` |
| key `SchedulingAgreementItem` | `SchedulingAgreementItem` |
| key `AccountAssignmentNumber` | `AccountAssignmentNumber` |
| key `PurchasingHistoryDocumentType` | `PurchaseOrderTransactionType` |
| key `MaterialDocumentYear` | `MaterialDocumentYear` |
| key `MaterialDocument` | `MaterialDocument` |
| key `MaterialDocumentItem` | `MaterialDocumentItem` |
| `PurchasingHistoryCategory` | `PurchaseOrderHistCategory` |
| `GoodsMovementType` | `GoodsMovementType` |
| `PostingDate` | `PostingDate` |
| `Currency` | `Currency` |
| `DebitCreditCode` | `DebitCreditCode` |
| `IsCompletelyDelivered` | `IsCompletelyDelivered` |
| `ReferenceDocumentFiscalYear` | `ReferenceDocumentFiscalYear` |
| `ReferenceDocument` | `ReferenceDocument` |
| `ReferenceDocumentItem` | `ReferenceDocumentItem` |
| `Material` | `Material` |
| `Plant` | `Plant` |
| `RvslOfGoodsReceiptIsAllowed` | `RvslOfGoodsReceiptIsAllowed` |
| `PricingDocument` | `PricingDocument` |
| `TaxCode` | `TaxCode` |
| `DocumentDate` | `DocumentDate` |
| `CreatedByUser` | `CreatedByUser` |
| `InventoryValuationType` | `InventoryValuationType` |
| `DocumentReferenceID` | `DocumentReferenceID` |
| `DeliveryQuantityUnit` | `DeliveryQuantityUnit` |
| `ManufacturerMaterial` | `ManufacturerMaterial` |
| `AccountingDocumentCreationDate` | `AccountingDocumentCreationDate` |
| `PurgHistDocumentCreationTime` | `PurgHistDocumentCreationTime` |
| `Quantity` | `Quantity` |
| `PurOrdAmountInCompanyCodeCrcy` | `PurOrdAmountInCompanyCodeCrcy` |
| `PurchaseOrderAmount` | `PurchaseOrderAmount` |
| `QtyInPurchaseOrderPriceUnit` | `QtyInPurchaseOrderPriceUnit` |
| `GRIRAcctClrgAmtInCoCodeCrcy` | `GRIRAcctClrgAmtInCoCodeCrcy` |
| `GdsRcptBlkdStkQtyInOrdQtyUnit` | `GdsRcptBlkdStkQtyInOrdQtyUnit` |
| `GdsRcptBlkdStkQtyInOrdPrcUnit` | `GdsRcptBlkdStkQtyInOrdPrcUnit` |
| `InvoiceAmtInCoCodeCrcy` | `InvoiceAmtInCoCodeCrcy` |
| `ShipgInstrnSupplierCompliance` | `ShipgInstrnSupplierCompliance` |
| `InvoiceAmountInFrgnCurrency` | `InvoiceAmountInFrgnCurrency` |
| `QuantityInDeliveryQtyUnit` | `QuantityInDeliveryQtyUnit` |
| `GRIRAcctClrgAmtInTransacCrcy` | `GRIRAcctClrgAmtInTransacCrcy` |
| `QuantityInBaseUnit` | `QuantityInBaseUnit` |
| `Batch` | `Batch` |
| `GRIRAcctClrgAmtInOrdTrnsacCrcy` | `GRIRAcctClrgAmtInOrdTrnsacCrcy` |
| `InvoiceAmtInPurOrdTransacCrcy` | `InvoiceAmtInPurOrdTransacCrcy` |
| `VltdGdsRcptBlkdStkQtyInOrdUnit` | `VltdGdsRcptBlkdStkQtyInOrdUnit` |
| `VltdGdsRcptBlkdQtyInOrdPrcUnit` | `VltdGdsRcptBlkdQtyInOrdPrcUnit` |
| `IsToBeAcceptedAtOrigin` | `IsToBeAcceptedAtOrigin` |
| `ExchangeRateDifferenceAmount` | `ExchangeRateDifferenceAmount` |
| `ExchangeRate` | `ExchangeRate` |
| `DeliveryDocument` | `DeliveryDocument` |
| `DeliveryDocumentItem` | `DeliveryDocumentItem` |
| `BaseUnit` | `BaseUnit` |
| `OrderQuantityUnit` | `_SchedulingAgreementItem.OrderQuantityUnit` |
| `OrderPriceUnit` | `_SchedulingAgreementItem.OrderPriceUnit` |
| `_SchedulingAgreement` | *Association* |
| `_SchedulingAgreementItem` | *Association* |
| `_PurchaseOrderHistCategory` | *Association* |
| `_Currency` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SchedulingAgreement` | `I_SchedgagrmthdrApi01` | [1..1] |
| `_SchedulingAgreementItem` | `I_SchedgAgrmtItmApi01` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType : #COMPOSITE
@EndUserText.label: 'Follow on documents for Scheduling Agreement'
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations:true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view entity I_PurSchedgAgrmtHistoryAPI01 as select from I_SchedulingAgreementHistory as History 
       
       association [1..1] to I_SchedgagrmthdrApi01    as _SchedulingAgreement        on  $projection.SchedulingAgreement      = _SchedulingAgreement.SchedulingAgreement
       association [1..1] to I_SchedgAgrmtItmApi01    as _SchedulingAgreementItem        on  $projection.SchedulingAgreement  = _SchedulingAgreementItem.SchedulingAgreement
                                                                                and $projection.SchedulingAgreementItem  = _SchedulingAgreementItem.SchedulingAgreementItem     
{

  key History.SchedulingAgreement as SchedulingAgreement,

  key SchedulingAgreementItem,

  key AccountAssignmentNumber,

  key PurchaseOrderTransactionType as PurchasingHistoryDocumentType,

  key MaterialDocumentYear,

  key MaterialDocument,

  key MaterialDocumentItem,

      PurchaseOrderHistCategory as PurchasingHistoryCategory,

      GoodsMovementType,

      PostingDate,
      Currency,

      DebitCreditCode,

      IsCompletelyDelivered,

      ReferenceDocumentFiscalYear,

      ReferenceDocument,

      ReferenceDocumentItem,

      Material,

      Plant,

      RvslOfGoodsReceiptIsAllowed,

      PricingDocument,

      TaxCode,

      DocumentDate,
      
      CreatedByUser,

      InventoryValuationType,

      DocumentReferenceID,

      DeliveryQuantityUnit,

      ManufacturerMaterial,

      AccountingDocumentCreationDate,
      
      PurgHistDocumentCreationTime,

      @Semantics.quantity.unitOfMeasure:'OrderQuantityUnit'
      Quantity,
      
      @Semantics.amount.currencyCode: 'Currency'
      PurOrdAmountInCompanyCodeCrcy,
      
      @Semantics.amount.currencyCode: 'Currency'
      PurchaseOrderAmount,
      
      @Semantics.quantity.unitOfMeasure:'OrderPriceUnit'
      QtyInPurchaseOrderPriceUnit,
      
      @Semantics.amount.currencyCode: 'Currency'
      GRIRAcctClrgAmtInCoCodeCrcy,
      
      @Semantics.quantity.unitOfMeasure:'OrderQuantityUnit'
      GdsRcptBlkdStkQtyInOrdQtyUnit,
      
      @Semantics.quantity.unitOfMeasure:'OrderPriceUnit'
      GdsRcptBlkdStkQtyInOrdPrcUnit,
      
      @Semantics.amount.currencyCode: 'Currency'
      InvoiceAmtInCoCodeCrcy,

      ShipgInstrnSupplierCompliance,
      
      @Semantics.amount.currencyCode: 'Currency'
      InvoiceAmountInFrgnCurrency,
      
      @Semantics.quantity.unitOfMeasure:'OrderQuantityUnit'
      QuantityInDeliveryQtyUnit,
      
      @Semantics.amount.currencyCode: 'Currency'
      GRIRAcctClrgAmtInTransacCrcy,
      
      @Semantics.quantity.unitOfMeasure:'BaseUnit'
      QuantityInBaseUnit,
      
      Batch,
      
      @Semantics.amount.currencyCode: 'Currency'
      GRIRAcctClrgAmtInOrdTrnsacCrcy,
      
      @Semantics.amount.currencyCode: 'Currency'
      InvoiceAmtInPurOrdTransacCrcy,
      
      @Semantics.quantity.unitOfMeasure:'OrderQuantityUnit'
      VltdGdsRcptBlkdStkQtyInOrdUnit,
      
      @Semantics.quantity.unitOfMeasure:'OrderPriceUnit'
      VltdGdsRcptBlkdQtyInOrdPrcUnit,

      IsToBeAcceptedAtOrigin,
      
      @Semantics.amount.currencyCode: 'Currency'
      ExchangeRateDifferenceAmount,

      ExchangeRate,
      
      DeliveryDocument,
      
      DeliveryDocumentItem,
      
      BaseUnit,
      
      _SchedulingAgreementItem.OrderQuantityUnit,
      _SchedulingAgreementItem.OrderPriceUnit,
      

      _SchedulingAgreement,
      _SchedulingAgreementItem,
      _PurchaseOrderHistCategory,
      _Currency

          
}
```
