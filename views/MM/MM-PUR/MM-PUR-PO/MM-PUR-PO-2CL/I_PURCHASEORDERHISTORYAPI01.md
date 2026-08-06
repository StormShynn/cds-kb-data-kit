---
name: I_PURCHASEORDERHISTORYAPI01
description: Purchase OrderHISTORYAPI 01
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
  - purchase-order
  - component:MM-PUR-PO-2CL
  - lob:Sourcing & Procurement
  - bo:PurchaseOrder
---
# I_PURCHASEORDERHISTORYAPI01

**Purchase OrderHISTORYAPI 01**

| Property | Value |
|---|---|
| App Component | `MM-PUR-PO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PurchaseOrder` | `history.PurchaseOrder` |
| key `PurchaseOrderItem` | `PurchaseOrderItem` |
| key `AccountAssignmentNumber` | `AccountAssignmentNumber` |
| key `PurchasingHistoryDocumentType` | `PurchasingHistoryDocumentType` |
| key `PurchasingHistoryDocumentYear` | `PurchasingHistoryDocumentYear` |
| key `PurchasingHistoryDocument` | `PurchasingHistoryDocument` |
| key `PurchasingHistoryDocumentItem` | `PurchasingHistoryDocumentItem` |
| `PurchasingHistoryCategory` | `PurchasingHistoryCategory` |
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
| `ExchangeRate` | `history.ExchangeRate` |
| `DeliveryDocument` | `DeliveryDocument` |
| `DeliveryDocumentItem` | `DeliveryDocumentItem` |
| `OrderPriceUnit` | `OrderPriceUnit` |
| `PurchaseOrderQuantityUnit` | `PurchaseOrderQuantityUnit` |
| `BaseUnit` | `BaseUnit` |
| `DocumentCurrency` | `DocumentCurrency` |
| `CompanyCodeCurrency` | `CompanyCodeCurrency` |
| `_PurchaseOrder` | *Association* |
| `_PurchaseOrderItem` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurchaseOrder` | `I_PurchaseOrderAPI01` | [1..1] |
| `_PurchaseOrderItem` | `I_PurchaseOrderItemAPI01` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'IMMPURORDHISAP01'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Purchase Order History'
@VDM.viewType : #COMPOSITE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations:true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view I_PurchaseOrderHistoryAPI01 as select from I_PurchaseOrderHistoryBasic as history

       association [1..1] to I_PurchaseOrderAPI01             as _PurchaseOrder        on  $projection.PurchaseOrder      = _PurchaseOrder.PurchaseOrder
       association [1..1] to I_PurchaseOrderItemAPI01         as _PurchaseOrderItem    on  $projection.PurchaseOrder      = _PurchaseOrderItem.PurchaseOrder
                                                                                       and $projection.PurchaseOrderItem  = _PurchaseOrderItem.PurchaseOrderItem     
{

  key history.PurchaseOrder as PurchaseOrder,

  key PurchaseOrderItem,

  key AccountAssignmentNumber,

  key PurchasingHistoryDocumentType,

  key PurchasingHistoryDocumentYear,

  key PurchasingHistoryDocument,

  key PurchasingHistoryDocumentItem,
      
      //@ObjectModel.text.association: ''
      PurchasingHistoryCategory,

      @ObjectModel.text.association: '_GoodsMovementTypeText'
      GoodsMovementType,

      PostingDate,
      @Semantics.currencyCode: true
      @ObjectModel.text.association: '_CurrencyText'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CurrencyStdVH', element: 'Currency' }, useAsTemplate: true }]       //CustomUI
      Currency,

      @ObjectModel.text.association: '_DebitCreditCodeText'
      DebitCreditCode,

      IsCompletelyDelivered,

      ReferenceDocumentFiscalYear,

      ReferenceDocument,

      ReferenceDocumentItem,

      Material,

      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_PlantStdVH', element: 'Plant' }, useAsTemplate: true }]       //CustomUI
      Plant,
      
      RvslOfGoodsReceiptIsAllowed,      
      
      PricingDocument,
      
      TaxCode,              

      DocumentDate,

      InventoryValuationType,

      DocumentReferenceID,
      @Semantics.unitOfMeasure: true
      @ObjectModel.text.association: '_DeliveryQuantityUnitText'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_UnitOfMeasureStdVH', element: 'UnitOfMeasure' }, useAsTemplate: true }]       //CustomUI
      DeliveryQuantityUnit,
      
      ManufacturerMaterial,         

      AccountingDocumentCreationDate,
      PurgHistDocumentCreationTime,
      
      @Semantics.quantity.unitOfMeasure:'PurchaseOrderQuantityUnit'
      Quantity,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      PurOrdAmountInCompanyCodeCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      PurchaseOrderAmount,
      @Semantics.quantity.unitOfMeasure:'OrderPriceUnit'
      QtyInPurchaseOrderPriceUnit,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      GRIRAcctClrgAmtInCoCodeCrcy,
      @Semantics.quantity.unitOfMeasure:'PurchaseOrderQuantityUnit'
      GdsRcptBlkdStkQtyInOrdQtyUnit,
      @Semantics.quantity.unitOfMeasure:'OrderPriceUnit'
      GdsRcptBlkdStkQtyInOrdPrcUnit,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      InvoiceAmtInCoCodeCrcy,
      
      ShipgInstrnSupplierCompliance,      
      @Semantics.amount.currencyCode: 'Currency'
      InvoiceAmountInFrgnCurrency,
      @Semantics.quantity.unitOfMeasure:'DeliveryQuantityUnit'
      QuantityInDeliveryQtyUnit,
      @Semantics.amount.currencyCode: 'Currency'
      GRIRAcctClrgAmtInTransacCrcy,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      QuantityInBaseUnit,
      Batch,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      GRIRAcctClrgAmtInOrdTrnsacCrcy,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      InvoiceAmtInPurOrdTransacCrcy,
      @Semantics.quantity.unitOfMeasure:'PurchaseOrderQuantityUnit'
      VltdGdsRcptBlkdStkQtyInOrdUnit,
      @Semantics.quantity.unitOfMeasure:'OrderPriceUnit'
      VltdGdsRcptBlkdQtyInOrdPrcUnit,
      
      IsToBeAcceptedAtOrigin,        
      @Semantics.amount.currencyCode: 'Currency'
      ExchangeRateDifferenceAmount,
      
      history.ExchangeRate,
      
      DeliveryDocument,
      
      DeliveryDocumentItem,
      
      @Semantics.unitOfMeasure: true
      @ObjectModel.text.association: '_OrderPriceUnitText'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_UnitOfMeasureStdVH', element: 'UnitOfMeasure' }, useAsTemplate: true }]       //CustomUI
      OrderPriceUnit,
      @Semantics.unitOfMeasure: true
      @ObjectModel.text.association: '_OrderQuantityUnitText'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_UnitOfMeasureStdVH', element: 'UnitOfMeasure' }, useAsTemplate: true }]       //CustomUI
      PurchaseOrderQuantityUnit,
      @Semantics.unitOfMeasure: true
      @ObjectModel.text.association: '_BaseUnitText'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_UnitOfMeasureStdVH', element: 'UnitOfMeasure' }, useAsTemplate: true }]       //CustomUI
      BaseUnit,
      @Semantics.currencyCode: true
      @ObjectModel.text.association: '_DocumentCurrencyText'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CurrencyStdVH', element: 'Currency' }, useAsTemplate: true }]       //CustomUI
      DocumentCurrency,
      @Semantics.currencyCode: true
      @ObjectModel.text.association: '_CompanyCodeCurrencyText'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CurrencyStdVH', element: 'Currency' }, useAsTemplate: true }]       //CustomUI
      CompanyCodeCurrency,

      _PurchaseOrder,
      
      _PurchaseOrderItem,
      
      // Text associations for CustomUI
      history._GoodsMovementTypeText,
      history._CurrencyText,
      history._DebitCreditCodeText,
      history._DeliveryQuantityUnitText,
      history._OrderPriceUnitText,
      history._OrderQuantityUnitText,
      history._BaseUnitText,
      history._DocumentCurrencyText,
      history._CompanyCodeCurrencyText
          
}
```
