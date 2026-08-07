---
name: I_MATERIALDOCUMENTITEM_2
description: "Materialdocumentitem 2"
app_component: MM-IM-VDM-SGM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-VDM
  - interface-view
  - material
  - document
  - item-level
  - component:MM-IM-VDM-SGM-2CL
  - lob:Sourcing & Procurement
  - bo:Material
---
# I_MATERIALDOCUMENTITEM_2

**Materialdocumentitem 2**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-SGM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaterialDocumentYear` | ✓ | |  |  |  |  |
| `MaterialDocument` | ✓ | |  |  |  |  |
| `MaterialDocumentItem` | ✓ | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `StorageLocation` |  | |  |  |  |  |
| `StorageType` |  | |  |  |  |  |
| `StorageBin` |  | |  |  |  |  |
| `Batch` |  | |  |  |  |  |
| `ShelfLifeExpirationDate` |  | |  |  |  |  |
| `ManufactureDate` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `SalesOrder` |  | |  |  |  |  |
| `SalesOrderItem` |  | |  |  |  |  |
| `SalesOrderScheduleLine` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  | `cast(WBSElementInternalID as nsdm_wbselement_internal_id preserving type)` |  |  |
| `Customer` |  | |  |  |  |  |
| `InventorySpecialStockType` |  | |  |  |  |  |
| `InventoryStockType` |  | |  |  |  |  |
| `StockOwner` |  | |  |  |  |  |
| `GoodsMovementType` |  | |  |  |  |  |
| `DebitCreditCode` |  | |  |  |  |  |
| `InventoryUsabilityCode` |  | |  |  |  |  |
| `QuantityInBaseUnit` |  | |  |  |  |  |
| `MaterialBaseUnit` |  | |  |  |  |  |
| `QuantityInEntryUnit` |  | |  |  |  |  |
| `EntryUnit` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `DocumentDate` |  | |  |  |  |  |
| `ReservationItemRecordType` |  | |  | `ReservationRecordType` |  |  |
| `TotalGoodsMvtAmtInCCCrcy` |  | |  |  |  |  |
| `CompanyCodeCurrency` |  | |  |  |  |  |
| `InventoryValuationType` |  | |  |  |  |  |
| `ReservationIsFinallyIssued` |  | |  |  |  |  |
| `PurchaseOrder` |  | |  |  |  |  |
| `PurchaseOrderItem` |  | |  |  |  |  |
| `ProjectNetwork` |  | |  |  |  |  |
| `OrderID` |  | |  |  |  |  |
| `OrderItem` |  | |  |  |  |  |
| `MaintOrderRoutingNumber` |  | |  |  |  |  |
| `MaintOrderOperationCounter` |  | |  |  |  |  |
| `Reservation` |  | |  |  |  |  |
| `ReservationItem` |  | |  |  |  |  |
| `DeliveryDocument` |  | |  |  |  |  |
| `DeliveryDocumentItem` |  | |  |  |  |  |
| `ReversedMaterialDocumentYear` |  | |  |  |  |  |
| `ReversedMaterialDocument` |  | |  |  |  |  |
| `ReversedMaterialDocumentItem` |  | |  |  |  |  |
| `RvslOfGoodsReceiptIsAllowed` |  | |  |  |  |  |
| `GoodsRecipientName` |  | |  |  |  |  |
| `GoodsMovementReasonCode` |  | |  |  |  |  |
| `UnloadingPointName` |  | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `GLAccount` |  | |  |  |  |  |
| `ServicePerformer` |  | |  |  |  |  |
| `PersonWorkAgreement` |  | |  |  |  |  |
| `AccountAssignmentCategory` |  | |  |  |  |  |
| `WorkItem` |  | |  |  |  |  |
| `ServicesRenderedDate` |  | |  |  |  |  |
| `IssgOrRcvgMaterial` |  | |  |  |  |  |
| `IssuingOrReceivingPlant` |  | |  |  |  |  |
| `IssuingOrReceivingStorageLoc` |  | |  |  |  |  |
| `IssgOrRcvgBatch` |  | |  |  |  |  |
| `IssgOrRcvgSpclStockInd` |  | |  |  |  |  |
| `IssuingOrReceivingValType` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `FiscalYearPeriod` |  | |  |  |  |  |
| `FiscalYearVariant` |  | |  |  |  |  |
| `GoodsMovementRefDocType` |  | |  |  |  |  |
| `IsCompletelyDelivered` |  | |  |  |  |  |
| `MaterialDocumentItemText` |  | |  |  |  |  |
| `IsAutomaticallyCreated` |  | |  |  |  |  |
| `SerialNumbersAreCreatedAutomly` |  | |  |  |  |  |
| `GoodsReceiptType` |  | |  |  |  |  |
| `ConsumptionPosting` |  | |  |  |  |  |
| `MultiAcctAssgmtOriglMatlDocItm` |  | |  |  |  |  |
| `MultipleAccountAssignmentCode` |  | |  |  |  |  |
| `GoodsMovementIsCancelled` |  | |  |  |  |  |
| `IssuingOrReceivingStockType` |  | |  |  |  |  |
| `ManufacturingOrder` |  | |  |  |  |  |
| `ManufacturingOrderItem` |  | |  |  |  |  |
| `MaterialDocumentLine` |  | |  |  |  |  |
| `MaterialDocumentParentLine` |  | |  |  |  |  |
| `SpecialStockIdfgSalesOrder` |  | |  |  |  |  |
| `SpecialStockIdfgSalesOrderItem` |  | |  |  |  |  |
| `SpecialStockIdfgWBSElement` |  | |  | `cast(SpecialStockIdfgWBSElement as nsdm_wbselement_internal_id preserving type)` |  |  |
| `QtyInPurchaseOrderPriceUnit` |  | |  |  |  |  |
| `OrderPriceUnit` |  | |  |  |  |  |
| `QuantityInDeliveryQtyUnit` |  | |  |  |  |  |
| `DeliveryQuantityUnit` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `ProductStandardID` |  | | `_Product` | `ProductStandardID` |  |  |
| `GdsMvtExtAmtInCoCodeCrcy` |  | |  |  |  |  |
| `ReferenceDocumentFiscalYear` |  | |  |  |  |  |
| `InvtryMgmtReferenceDocument` |  | |  |  |  |  |
| `InvtryMgmtRefDocumentItem` |  | |  |  |  |  |
| `EWMWarehouse` |  | |  |  |  |  |
| `EWMStorageBin` |  | |  |  |  |  |
| `MaterialDocumentPostingType` |  | |  |  |  |  |
| `OriginalMaterialDocumentItem` |  | |  |  |  |  |
| `_MaterialDocumentYear` | | ✓ | | | | |
| `_MaterialDocumentHeader` | | ✓ | | | | |
| `_ReversedMatDoc` | | ✓ | | | | |
| `_ReversedMatDocItem` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_IssgOrRcvgMaterial` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_IssuingOrReceivingPlant` | | ✓ | | | | |
| `_StorageLocation` | | ✓ | | | | |
| `_IssuingOrReceivingStorageLoc` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_SupplierCompanyByPlant` | | ✓ | | | | |
| `_CustomerCompanyByPlant` | | ✓ | | | | |
| `_BPStockOwner` | | ✓ | | | | |
| `_InventorySpecialStockType` | | ✓ | | | | |
| `_IssgOrRcvgSpclStockInd` | | ✓ | | | | |
| `_InventoryStockType` | | ✓ | | | | |
| `_InventoryValuationType` | | ✓ | | | | |
| `_GoodsMovementType` | | ✓ | | | | |
| `_DebitCreditCode` | | ✓ | | | | |
| `_StockType` | | ✓ | | | | |
| `_StockType_2` | | ✓ | | | | |
| `_MaterialBaseUnit` | | ✓ | | | | |
| `_EntryUnit` | | ✓ | | | | |
| `_GLAccount` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_PersonWorkAgreement` | | ✓ | | | | |
| `_AccountAssignmentCategory` | | ✓ | | | | |
| `_WorkItem` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_SalesOrder` | | ✓ | | | | |
| `_SalesOrderItem` | | ✓ | | | | |
| `_SalesOrderScheduleLine` | | ✓ | | | | |
| `_WBSElement` | | ✓ | | | | |
| `_PurchaseOrder` | | ✓ | | | | |
| `_PurchaseOrderItem` | | ✓ | | | | |
| `_ProjectNetwork` | | ✓ | | | | |
| `_LogisticsOrder` | | ✓ | | | | |
| `_ManufacturingOrder` | | ✓ | | | | |
| `_DeliveryDocument` | | ✓ | | | | |
| `_DeliveryDocumentItem` | | ✓ | | | | |
| `_GoodsMvtTypeBySpclStkIndT` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MaterialDocumentYear` | `I_MaterialDocumentYear` | [1..1] |
| `_MaterialDocumentHeader` | `I_MaterialDocumentHeader_2` | [1..1] |
| `_ReversedMatDoc` | `I_MaterialDocumentHeader_2` | [0..1] |
| `_ReversedMatDocItem` | `I_MaterialDocumentItem_2` | [0..1] |
| `_Product` | `I_Product` | [0..1] |
| `_MaterialDocumentItemExtension` | `E_MaterialDocumentItem_2` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Material Document Item'

@AccessControl: {
                   authorizationCheck: #CHECK,
                   personalData.blocking: #NOT_REQUIRED
                }

@ObjectModel: {
                usageType: {
                             sizeCategory: #XXL,
                             serviceQuality: #C,
                             dataClass:#TRANSACTIONAL
                           },
                representativeKey: 'MaterialDocumentItem',
                semanticKey: ['MaterialDocumentYear', 'MaterialDocument', 'MaterialDocumentItem'],
                modelingPattern: #ANALYTICAL_DIMENSION,
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
}

@Search.searchable: true

@VDM: {
        viewType: #COMPOSITE,
        lifecycle.contract.type: #PUBLIC_LOCAL_API
      }

@Analytics: {
               dataCategory: #DIMENSION,
               internalName:#LOCAL,
               technicalName: 'IMATDOCITEM2'
             }

@Metadata: {
             ignorePropagatedAnnotations: true,
             allowExtensions: true
           }

-- This view is the successor view for the view I_MaterialDocumentItem
define view entity I_MaterialDocumentItem_2
  as select from I_MaterialDocumentRecord
  association [1..1] to I_MaterialDocumentYear     as _MaterialDocumentYear   on  $projection.MaterialDocumentYear = _MaterialDocumentYear.MaterialDocumentYear
  association [1..1] to I_MaterialDocumentHeader_2 as _MaterialDocumentHeader on  $projection.MaterialDocumentYear = _MaterialDocumentHeader.MaterialDocumentYear
                                                                              and $projection.MaterialDocument     = _MaterialDocumentHeader.MaterialDocument
  association [0..1] to I_MaterialDocumentHeader_2 as _ReversedMatDoc         on  $projection.ReversedMaterialDocumentYear = _ReversedMatDoc.MaterialDocumentYear
                                                                              and $projection.ReversedMaterialDocument     = _ReversedMatDoc.MaterialDocument
  association [0..1] to I_MaterialDocumentItem_2   as _ReversedMatDocItem     on  $projection.ReversedMaterialDocumentYear = _ReversedMatDocItem.MaterialDocumentYear
                                                                              and $projection.ReversedMaterialDocument     = _ReversedMatDocItem.MaterialDocument
                                                                              and $projection.ReversedMaterialDocumentItem = _ReversedMatDocItem.MaterialDocumentItem
  association [0..1] to I_Product                  as _Product                on  $projection.Material = _Product.Product
    //Extension
  association [1..1] to E_MaterialDocumentItem_2   as _MaterialDocumentItemExtension  on  $projection.MaterialDocument     = _MaterialDocumentItemExtension.MaterialDocument
                                                                                      and $projection.MaterialDocumentItem = _MaterialDocumentItemExtension.MaterialDocumentItem
                                                                                      and $projection.MaterialDocumentYear = _MaterialDocumentItemExtension.MaterialDocumentYear
                                                                                      and _MaterialDocumentItemExtension.MaterialDocumentRecordType = 'MDOC'
                                                                                         
{
      @ObjectModel.foreignKey.association: '_MaterialDocumentYear'
  key MaterialDocumentYear,
      @Search: {
                    defaultSearchElement: true,
                    fuzzinessThreshold: 0.9,
                    ranking: #HIGH
               }
      @ObjectModel.foreignKey.association: '_MaterialDocumentHeader'
  key MaterialDocument,
  key MaterialDocumentItem,

      @Search: {
                    defaultSearchElement: true,
                    fuzzinessThreshold: 0.7,
                    ranking: #HIGH
               }
      Material,

      @Search: {
                    defaultSearchElement: true,
                    fuzzinessThreshold: 0.9,
                    ranking: #HIGH
               }
      Plant,
      @Search: {
                    defaultSearchElement: true,
                    fuzzinessThreshold: 0.9,
                    ranking: #HIGH
               }
      StorageLocation,
      StorageType,
      StorageBin,

      @Search: {
                    defaultSearchElement: true,
                    fuzzinessThreshold: 0.8,
                    ranking: #MEDIUM
               }
      Batch,
      ShelfLifeExpirationDate,
      ManufactureDate,

      @Search: {
                    defaultSearchElement: true,
                    fuzzinessThreshold: 0.8,
                    ranking: #MEDIUM
               }
      Supplier,

      @Search: {
                    defaultSearchElement: true,
                    fuzzinessThreshold: 0.9,
                    ranking: #MEDIUM
               }
      SalesOrder,
      SalesOrderItem,
      SalesOrderScheduleLine,

      @Search: {
                    defaultSearchElement: true,
                    fuzzinessThreshold: 0.9,
                    ranking: #MEDIUM
               }

      // casting of the WBSElementInternalID to a NSDM data element to get rid of the conversion exit behind the original data element MAT_PSPNR
      // required for the Reservation RAP object which does associate this view
      cast(WBSElementInternalID as nsdm_wbselement_internal_id preserving type)       as WBSElementInternalID,
      @Search: {
                    defaultSearchElement: true,
                    fuzzinessThreshold: 0.8,
                    ranking: #MEDIUM
               }
      Customer,
      InventorySpecialStockType,
      InventoryStockType,

      @Search: {
                    defaultSearchElement: true,
                    fuzzinessThreshold: 0.8,
                    ranking: #MEDIUM
               }
      StockOwner,

      GoodsMovementType,
      DebitCreditCode,
      InventoryUsabilityCode,
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
      @DefaultAggregation: #SUM
      QuantityInBaseUnit,
      MaterialBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'EntryUnit'
      @DefaultAggregation: #SUM
      QuantityInEntryUnit,
      EntryUnit,

      @Semantics.businessDate.at: true
      PostingDate,
      @Semantics.businessDate.at: true
      DocumentDate,
      ReservationRecordType                                                           as ReservationItemRecordType,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      TotalGoodsMvtAmtInCCCrcy,
      CompanyCodeCurrency,

      InventoryValuationType,
      ReservationIsFinallyIssued,

      @Search: {
                    defaultSearchElement: true,
                    fuzzinessThreshold: 0.9,
                    ranking: #MEDIUM
                }
      PurchaseOrder,
      PurchaseOrderItem,

      @Search: {
                    defaultSearchElement: true,
                    fuzzinessThreshold: 0.9,
                    ranking: #MEDIUM
               }
      ProjectNetwork,

      @Search: {
                    defaultSearchElement: true,
                    fuzzinessThreshold: 0.9,
                    ranking: #MEDIUM
               }
      OrderID,
      OrderItem,

      MaintOrderRoutingNumber,
      MaintOrderOperationCounter,

      @Search: {
                    defaultSearchElement: true,
                    fuzzinessThreshold: 0.9,
                    ranking: #MEDIUM
               }
      Reservation,
      ReservationItem,

      @Search: {
                    defaultSearchElement: true,
                    fuzzinessThreshold: 0.9,
                    ranking: #MEDIUM
               }
      DeliveryDocument,
      DeliveryDocumentItem,

      ReversedMaterialDocumentYear,

      @Search: {
                    defaultSearchElement: true,
                    fuzzinessThreshold: 0.9,
                    ranking: #MEDIUM
               }
      ReversedMaterialDocument,
      ReversedMaterialDocumentItem,

      RvslOfGoodsReceiptIsAllowed,

      @Search: {
                    defaultSearchElement: true,
                    fuzzinessThreshold: 0.7,
                    ranking: #MEDIUM
               }
      GoodsRecipientName,

      GoodsMovementReasonCode,

      @Search: {
                    defaultSearchElement: true,
                    fuzzinessThreshold: 0.7,
                    ranking: #MEDIUM
               }
      UnloadingPointName,
      CostCenter,
      GLAccount,

      ServicePerformer,
      PersonWorkAgreement,
      AccountAssignmentCategory,
      WorkItem,
      ServicesRenderedDate,

      IssgOrRcvgMaterial,
      IssuingOrReceivingPlant,
      IssuingOrReceivingStorageLoc,
      IssgOrRcvgBatch,
      IssgOrRcvgSpclStockInd,
      IssuingOrReceivingValType,

      CompanyCode,
      BusinessArea,
      ControllingArea,
      @Semantics.fiscal.yearPeriod: true
      FiscalYearPeriod,
      @Semantics.fiscal.yearVariant: true
      FiscalYearVariant,

      GoodsMovementRefDocType,
      IsCompletelyDelivered,
      MaterialDocumentItemText,
      @Semantics.booleanIndicator
      IsAutomaticallyCreated,

      @Semantics.booleanIndicator
      SerialNumbersAreCreatedAutomly,

      @Consumption.hidden: true
      GoodsReceiptType,
      @Consumption.hidden: true
      ConsumptionPosting,

      @Consumption.hidden: true
      MultiAcctAssgmtOriglMatlDocItm,
      @Consumption.hidden: true
      MultipleAccountAssignmentCode,
      GoodsMovementIsCancelled,
      IssuingOrReceivingStockType,

      ManufacturingOrder,
      ManufacturingOrderItem,

      MaterialDocumentLine,
      MaterialDocumentParentLine,

      SpecialStockIdfgSalesOrder,
      SpecialStockIdfgSalesOrderItem,

      cast(SpecialStockIdfgWBSElement as nsdm_wbselement_internal_id preserving type) as SpecialStockIdfgWBSElement,
      
      @Semantics.quantity.unitOfMeasure: 'OrderPriceUnit'
      @Aggregation.default: #SUM
      QtyInPurchaseOrderPriceUnit,
      OrderPriceUnit,

      @Semantics.quantity.unitOfMeasure: 'DeliveryQuantityUnit'
      @Aggregation.default: #SUM
      QuantityInDeliveryQtyUnit,
      DeliveryQuantityUnit,

      ProfitCenter,

      _Product.ProductStandardID                                                      as ProductStandardID,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      GdsMvtExtAmtInCoCodeCrcy,

      --Reference Fields
      ReferenceDocumentFiscalYear,
      InvtryMgmtReferenceDocument,
      InvtryMgmtRefDocumentItem,

      --EWM Fields
      EWMWarehouse,
      EWMStorageBin,
      
      MaterialDocumentPostingType,
      OriginalMaterialDocumentItem,

      _MaterialDocumentYear,
      @ObjectModel.association.type:[#TO_COMPOSITION_ROOT, #TO_COMPOSITION_PARENT]
      _MaterialDocumentHeader,

      _Material,
      _IssgOrRcvgMaterial,

      //search model
      _Plant,
      _IssuingOrReceivingPlant,
      _StorageLocation,
      _IssuingOrReceivingStorageLoc,

      _Supplier,
      _Customer,

      @Consumption.hidden: true
      _SupplierCompanyByPlant,
      @Consumption.hidden: true
      _CustomerCompanyByPlant,

      _BPStockOwner,

      _InventorySpecialStockType,
      _IssgOrRcvgSpclStockInd,
      _InventoryStockType,
      _InventoryValuationType,

      _GoodsMovementType,
      _DebitCreditCode,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_StockType_2'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_StockType_2'
      _StockType,
      _StockType_2,

      _MaterialBaseUnit,
      _EntryUnit,

      _GLAccount,
      _CostCenter,

      _BusinessPartner,
      _PersonWorkAgreement,
      _AccountAssignmentCategory,
      _WorkItem,

      _CompanyCode,
      _BusinessArea,
      _ControllingArea,

      _SalesOrder,
      _SalesOrderItem,
      _SalesOrderScheduleLine,
      _WBSElement,

      _PurchaseOrder,
      _PurchaseOrderItem,
      _ProjectNetwork,
      _LogisticsOrder,
      _ManufacturingOrder,
      _DeliveryDocument,
      _DeliveryDocumentItem,

      _ReversedMatDoc,
      _ReversedMatDocItem,
      _GoodsMvtTypeBySpclStkIndT,
      _Currency

}
where
  MaterialDocumentRecordType = 'MDOC'
```
