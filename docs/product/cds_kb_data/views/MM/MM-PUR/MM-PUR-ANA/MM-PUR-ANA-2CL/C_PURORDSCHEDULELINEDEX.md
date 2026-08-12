---
name: C_PURORDSCHEDULELINEDEX
description: "PURORDSchedule LineDEX"
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - consumption-view
  - data-extraction
  - schedule-line
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# C_PURORDSCHEDULELINEDEX

**PURORDSchedule LineDEX**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseOrder` | ✓ | |  |  |  |  |
| `PurchaseOrderItem` | ✓ | |  |  |  |  |
| `PurchaseOrderScheduleLine` | ✓ | |  |  |  |  |
| `ScheduleLineDeliveryDate` |  | |  |  |  |  |
| `SchedLineStscDeliveryDate` |  | |  |  |  |  |
| `ScheduleLineDeliveryTime` |  | |  |  |  |  |
| `PurchaseRequisition` |  | |  |  |  |  |
| `PurchaseRequisitionItem` |  | |  |  |  |  |
| `Batch` |  | |  |  |  |  |
| `PurchasingSchdLnNrOfReminders` |  | |  | `NoOfRemindersOfScheduleLine` |  |  |
| `RequisitionerName` |  | | `_PurchaseOrderItem` | `RequisitionerName` |  |  |
| `RetailPromotion` |  | | `_PurchaseOrderItem` | `RetailPromotion` |  |  |
| `ArticleCategory` |  | | `_PurchaseOrderItem` | `ArticleCategory` |  |  |
| `PurchasingOrderReason` |  | | `_PurchaseOrderItem` | `PurchasingOrderReason` |  |  |
| `IsCompletelyDelivered` |  | | `_PurchaseOrderItem` | `IsCompletelyDelivered` |  |  |
| `ManufacturerMaterial` |  | | `_PurchaseOrderItem` | `ManufacturerMaterial` |  |  |
| `IsFinallyInvoiced` |  | | `_PurchaseOrderItem` | `IsFinallyInvoiced` |  |  |
| `PurchaseContract` |  | | `_PurchaseOrderItem` | `PurchaseContract` |  |  |
| `PurchaseContractItem` |  | | `_PurchaseOrderItem` | `PurchaseContractItem` |  |  |
| `StorageLocation` |  | | `_PurchaseOrderItem` | `StorageLocation` |  |  |
| `BaseUnit` |  | | `_PurchaseOrderItem` | `BaseUnit` |  |  |
| `MaterialGroup` |  | | `_PurchaseOrderItem` | `MaterialGroup` |  |  |
| `Material` |  | | `_PurchaseOrderItem` | `Material` |  |  |
| `PurchaseOrderQuantityUnit` |  | | `_PurchaseOrderItem` | `PurchaseOrderQuantityUnit` |  |  |
| `PurchaseOrderItemCategory` |  | | `_PurchaseOrderItem` | `PurchaseOrderItemCategory` |  |  |
| `IssuingStorageLocation` |  | | `_PurchaseOrderItem` | `IssuingStorageLocation` |  |  |
| `PurchaseOrderItemText` |  | | `_PurchaseOrderItem` | `PurchaseOrderItemText` |  |  |
| `PurchasingParentItem` |  | | `_PurchaseOrderItem` | `PurchasingParentItem` |  |  |
| `OrderItemQtyToBaseQtyDnmntr` |  | | `_PurchaseOrderItem` | `OrderItemQtyToBaseQtyDnmntr` |  |  |
| `OrderItemQtyToBaseQtyNmrtr` |  | |  | `cast ( _PurchaseOrderItem.OrderItemQtyToBaseQtyNmrtr as umbsz_ll preserving type)` |  |  |
| `InvoiceIsGoodsReceiptBased` |  | | `_PurchaseOrderItem` | `InvoiceIsGoodsReceiptBased` |  |  |
| `GoodsReceiptIsExpected` |  | | `_PurchaseOrderItem` | `GoodsReceiptIsExpected` |  |  |
| `Plant` |  | | `_PurchaseOrderItem` | `Plant` |  |  |
| `EvaldRcptSettlmtIsAllowed` |  | | `_PurchaseOrderItem` | `EvaldRcptSettlmtIsAllowed` |  |  |
| `PurchaseOrderDate` |  | | `_PurchaseOrder` | `PurchaseOrderDate` |  |  |
| `PurchaseOrderType` |  | | `_PurchaseOrder` | `PurchaseOrderType` |  |  |
| `PurchasingGroup` |  | | `_PurchaseOrder` | `PurchasingGroup` |  |  |
| `PurchasingOrganization` |  | | `_PurchaseOrder` | `PurchasingOrganization` |  |  |
| `ValidityStartDate` |  | | `_PurchaseOrder` | `ValidityStartDate` |  |  |
| `ValidityEndDate` |  | | `_PurchaseOrder` | `ValidityEndDate` |  |  |
| `Supplier` |  | | `_PurchaseOrder` | `Supplier` |  |  |
| `InvoicingParty` |  | | `_PurchaseOrder` | `InvoicingParty` |  |  |
| `SupplyingSupplier` |  | | `_PurchaseOrder` | `SupplyingSupplier` |  |  |
| `SupplyingPlant` |  | | `_PurchaseOrder` | `SupplyingPlant` |  |  |
| `PurchasingDocumentOrigin` |  | | `_PurchaseOrder` | `PurchasingDocumentOrigin` |  |  |
| `DocumentCurrency` |  | | `_PurchaseOrder` | `DocumentCurrency` |  |  |
| `ExchangeRate` |  | |  | `cast ( _PurchaseOrder.ExchangeRate as fis_exchange_rate preserving type)` |  |  |
| `DelivDateCategory` |  | |  |  |  |  |
| `ScheduleLineOrderQuantity` |  | |  |  |  |  |
| `PrevDelivQtyOfScheduleLine` |  | |  |  |  |  |
| `RoughGoodsReceiptQty` |  | |  |  |  |  |
| `ScheduleLineIssuedQuantity` |  | |  |  |  |  |
| `SourceOfCreation` |  | |  |  |  |  |
| `Reservation` |  | |  |  |  |  |
| `ScheduleLineIsFixed` |  | |  |  |  |  |
| `StockTransferDeliveredQuantity` |  | |  |  |  |  |
| `ScheduleLineCommittedQuantity` |  | |  |  |  |  |
| `ProductAvailabilityDate` |  | |  |  |  |  |
| `ProductAvailabilityTime` |  | |  | `MaterialStagingTime` |  |  |
| `LoadingDate` |  | |  |  |  |  |
| `LoadingTime` |  | |  |  |  |  |
| `TransportationPlanningDate` |  | |  |  |  |  |
| `TransportationPlanningTime` |  | |  |  |  |  |
| `GoodsIssueDate` |  | |  |  |  |  |
| `GoodsIssueTime` |  | |  |  |  |  |
| `STOLatestPossibleGRDate` |  | |  |  |  |  |
| `STOLatestPossibleGRTime` |  | |  |  |  |  |
| `OpenPurchaseOrderNetAmount` |  | |  | `case when ( _PurchaseOrderItem.OrderQuantity = 0 ) then 0 else cast(( ScheduleLineOrderQuantity - RoughGoodsReceiptQty) * division( _PurchaseOrderItem.NetAmount , _PurchaseOrderItem.OrderQuantity, 3 ) as abap.curr( 21, 2)) end` |  |  |
| `IsReturnsItem` |  | | `_PurchaseOrderItem` | `IsReturnsItem` |  |  |
| `CompanyCode` |  | | `_PurchaseOrder` | `CompanyCode` |  |  |
| `ProductTypeCode` |  | | `_PurchaseOrderItem` | `ProductType` |  |  |
| `PurchasingDocumentDeletionCode` |  | | `_PurchaseOrder` | `PurchasingDocumentDeletionCode` |  |  |
| `PurgDocumentItemDeletionCode` |  | | `_PurchaseOrderItem` | `PurchasingDocumentDeletionCode` |  |  |
| `ReleaseIsNotCompleted` |  | | `_PurchaseOrder` | `ReleaseIsNotCompleted` |  |  |
| `PurchasingCompletenessStatus` |  | | `_PurchaseOrder` | `PurchasingCompletenessStatus` |  |  |
| `SupplierConfirmationControlKey` |  | | `_PurchaseOrderItem` | `SupplierConfirmationControlKey` |  |  |
| `IsStatisticalItem` |  | | `_PurchaseOrderItem` | `IsStatisticalItem` |  |  |
| `ScheduleLineOpenQuantity` |  | |  | `case when RoughGoodsReceiptQty is null then ScheduleLineOrderQuantity else ScheduleLineOrderQuantity - RoughGoodsReceiptQty end` |  |  |
| `_PurchaseOrderDEX` | | ✓ | | | | |
| `_PurchaseOrderItemDEX` | | ✓ | | | | |
| `_PurchaseOrderType` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_SupplyingSupplier` | | ✓ | | | | |
| `_InvoicingParty` | | ✓ | | | | |
| `_DocumentCurrency` | | ✓ | | | | |
| `_SupplyingPlant` | | ✓ | | | | |
| `_PurchasingOrganization` | | ✓ | | | | |
| `_PurchasingGroup` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_StorageLocation` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ManufacturerMaterial` | | ✓ | | | | |
| `_ProductGroup` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_OrderQuantityUnit` | | ✓ | | | | |
| `_PurchaseContract` | | ✓ | | | | |
| `_PurchaseContractItem` | | ✓ | | | | |
| `_PurchaseRequisitionItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurchaseOrderDEX` | `C_PurchaseOrderDEX` | [1..1] |
| `_PurchaseOrderItemDEX` | `C_PurchaseOrderItemDEX` | [1..1] |
| `_PurchaseOrderType` | `I_PurchaseOrderType` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_SupplyingSupplier` | `I_Supplier` | [0..1] |
| `_InvoicingParty` | `I_Supplier` | [0..1] |
| `_DocumentCurrency` | `I_Currency` | [0..1] |
| `_SupplyingPlant` | `I_Plant` | [0..1] |
| `_PurchasingOrganization` | `I_PurchasingOrganization` | [0..1] |
| `_PurchasingGroup` | `I_PurchasingGroup` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_StorageLocation` | `I_StorageLocation` | [0..1] |
| `_Product` | `I_Product` | [0..1] |
| `_ManufacturerMaterial` | `I_Product` | [0..1] |
| `_ProductGroup` | `I_ProductGroup_2` | [0..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_OrderQuantityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_PurchaseContract` | `C_PurchaseContractDEX` | [0..1] |
| `_PurchaseContractItem` | `C_PurchaseContractItemDEX` | [0..1] |
| `_PurchaseRequisitionItem` | `C_PurchaseRequisitionItemDEX` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName                        : 'CMMPURORDSLDEX'
@AbapCatalog.compiler.compareFilter             : true
@AccessControl:{ authorizationCheck             : #CHECK,
                 personalData.blocking          : #BLOCKED_DATA_EXCLUDED
               }
@EndUserText.label                              : 'Data Extraction for Purchase Order Schedule Lines'
@ClientHandling.algorithm                       : #SESSION_VARIABLE
@ObjectModel :{ usageType.dataClass             : #TRANSACTIONAL,
                usageType.sizeCategory          : #L,
                usageType.serviceQuality        : #D,
                supportedCapabilities           : [ #EXTRACTION_DATA_SOURCE ]
              }

@VDM.viewType                                   : #CONSUMPTION
//@ObjectModel.representativeKey                  : ['PurchaseOrder', 'PurchaseOrderItem', 'PurchaseOrderScheduleLine']
@Metadata.ignorePropagatedAnnotations           : true

//@VDM.lifecycle.contract.type                    : #PUBLIC_LOCAL_API
@Analytics: { dataCategory                      : #FACT,
              dataExtraction: {
                enabled                         : true,
                delta.changeDataCapture         : {
                    mapping:[ { table           : 'eket', role: #MAIN,
                                viewElement     : ['PurchaseOrder', 'PurchaseOrderItem', 'PurchaseOrderScheduleLine'],
                                tableElement    : ['ebeln', 'ebelp', 'etenr']
                              },
                              { table           : 'ekpo', role: #LEFT_OUTER_TO_ONE_JOIN,
                                viewElement     : ['PurchaseOrder', 'PurchaseOrderItem'],
                                tableElement    : ['ebeln', 'ebelp']
                              },
                              {
                                table           : 'ekko', role: #LEFT_OUTER_TO_ONE_JOIN,
                                viewElement     : ['PurchaseOrder'],
                                tableElement    : ['ebeln']
                              }
                            ]
                }
              }
}
@ObjectModel.sapObjectNodeType.name: 'PurchaseOrder'
@ObjectModel.modelingPattern: #ANALYTICAL_FACT
define view C_PurOrdScheduleLineDEX
  as select from I_PurOrdScheduleLineAPI01

    association [1..1] to C_PurchaseOrderDEX           as _PurchaseOrderDEX          on  $projection.PurchaseOrder     = _PurchaseOrderDEX .PurchaseOrder
    association [1..1] to C_PurchaseOrderItemDEX       as _PurchaseOrderItemDEX      on  $projection.PurchaseOrder     = _PurchaseOrderItemDEX .PurchaseOrder
                                                                                     and $projection.PurchaseOrderItem = _PurchaseOrderItemDEX .PurchaseOrderItem  
                                                                                     
  association [0..1] to I_PurchaseOrderType          as _PurchaseOrderType         on _PurchaseOrderType.PurchaseOrderType = $projection.PurchaseOrderType
  
  association [0..1] to  I_Supplier                   as _Supplier                   on  $projection.Supplier = _Supplier.Supplier

  association [0..1] to I_Supplier                   as _SupplyingSupplier          on  $projection.SupplyingSupplier = _SupplyingSupplier.Supplier

  association [0..1] to I_Supplier                   as _InvoicingParty             on  $projection.InvoicingParty = _InvoicingParty.Supplier 
  
  association [0..1] to I_Currency                   as _DocumentCurrency           on  $projection.DocumentCurrency = _DocumentCurrency.Currency
  
  association [0..1] to I_Plant                      as _SupplyingPlant             on  $projection.SupplyingPlant = _SupplyingPlant.Plant
  
  association [0..1] to I_PurchasingOrganization     as _PurchasingOrganization     on  $projection.PurchasingOrganization = _PurchasingOrganization.PurchasingOrganization

  association [0..1] to I_PurchasingGroup            as _PurchasingGroup            on  $projection.PurchasingGroup = _PurchasingGroup.PurchasingGroup
  
  association [0..1] to I_CompanyCode                as _CompanyCode                on  $projection.CompanyCode = _CompanyCode.CompanyCode
  
  association [0..1] to I_Plant                      as _Plant                     on  $projection.Plant = _Plant.Plant
    
  association [0..1] to I_StorageLocation            as _StorageLocation           on  $projection.Plant           = _StorageLocation.Plant
                                                                                   and $projection.StorageLocation = _StorageLocation.StorageLocation
                                                                                   
  association [0..1] to I_Product                    as _Product                   on  $projection.Material = _Product.Product
   
  association [0..1] to I_Product                    as _ManufacturerMaterial      on  $projection.ManufacturerMaterial = _ManufacturerMaterial.Product   
 
  association [0..1] to I_ProductGroup_2             as _ProductGroup              on  $projection.MaterialGroup = _ProductGroup.ProductGroup
  
  association [0..1] to I_UnitOfMeasure              as _BaseUnit                  on  $projection.BaseUnit = _BaseUnit.UnitOfMeasure

  association [0..1] to I_UnitOfMeasure              as _OrderQuantityUnit         on  $projection.PurchaseOrderQuantityUnit = _OrderQuantityUnit.UnitOfMeasure
                                                                                  
  association [0..1] to C_PurchaseContractDEX           as _PurchaseContract          on  $projection.PurchaseContract = _PurchaseContract.PurchaseContract

  association [0..1] to C_PurchaseContractItemDEX        as _PurchaseContractItem      on  $projection.PurchaseContract     = _PurchaseContractItem.PurchaseContract
                                                                                       and $projection.PurchaseContractItem = _PurchaseContractItem.PurchaseContractItem

  association [0..1] to C_PurchaseRequisitionItemDEX    as _PurchaseRequisitionItem   on  $projection.PurchaseRequisition     = _PurchaseRequisitionItem.PurchaseRequisition
                                                                                      and $projection.PurchaseRequisitionItem = _PurchaseRequisitionItem.PurchaseRequisitionItem




  
{
  key PurchaseOrder                                                                     as PurchaseOrder,

  key PurchaseOrderItem                                                                 as PurchaseOrderItem,

  key PurchaseOrderScheduleLine                                                         as PurchaseOrderScheduleLine,

      ScheduleLineDeliveryDate                                                          as ScheduleLineDeliveryDate,

      SchedLineStscDeliveryDate                                                         as SchedLineStscDeliveryDate,

      ScheduleLineDeliveryTime                                                          as ScheduleLineDeliveryTime,

      @ObjectModel.sapObjectNodeTypeReference: 'PurchaseRequisition'
      PurchaseRequisition                                                               as PurchaseRequisition,

      @ObjectModel.sapObjectNodeTypeReference: 'PurchaseRequisitionItem'
      PurchaseRequisitionItem                                                           as PurchaseRequisitionItem,

      Batch                                                                             as Batch,

      NoOfRemindersOfScheduleLine                                                       as PurchasingSchdLnNrOfReminders,

      _PurchaseOrderItem.RequisitionerName                                              as RequisitionerName,

      _PurchaseOrderItem.RetailPromotion                                                as RetailPromotion,

      _PurchaseOrderItem.ArticleCategory                                                as ArticleCategory,

      _PurchaseOrderItem.PurchasingOrderReason                                          as PurchasingOrderReason,

      _PurchaseOrderItem.IsCompletelyDelivered                                          as IsCompletelyDelivered,

      @ObjectModel.foreignKey.association: '_ManufacturerMaterial'
      _PurchaseOrderItem.ManufacturerMaterial                                           as ManufacturerMaterial,

      _PurchaseOrderItem.IsFinallyInvoiced                                              as IsFinallyInvoiced,

      @ObjectModel.sapObjectNodeTypeReference: 'PurchaseContract'
      _PurchaseOrderItem.PurchaseContract                                               as PurchaseContract,

       @ObjectModel.sapObjectNodeTypeReference: 'PurchaseContractItem'
      _PurchaseOrderItem.PurchaseContractItem                                           as PurchaseContractItem,

      @ObjectModel.foreignKey.association: '_StorageLocation'
      _PurchaseOrderItem.StorageLocation                                                as StorageLocation,

      @ObjectModel.foreignKey.association: '_BaseUnit'
      @Semantics.unitOfMeasure: true
      _PurchaseOrderItem.BaseUnit                                                       as BaseUnit,

      @ObjectModel.foreignKey.association: '_ProductGroup'
      _PurchaseOrderItem.MaterialGroup                                                  as MaterialGroup,

      @ObjectModel.foreignKey.association: '_Product'
      _PurchaseOrderItem.Material                                                       as Material,

       @ObjectModel.foreignKey.association: '_OrderQuantityUnit'
      @Semantics.unitOfMeasure: true
      _PurchaseOrderItem.PurchaseOrderQuantityUnit                                      as PurchaseOrderQuantityUnit,

      _PurchaseOrderItem.PurchaseOrderItemCategory                                      as PurchaseOrderItemCategory,

      _PurchaseOrderItem.IssuingStorageLocation                                         as IssuingStorageLocation,

      _PurchaseOrderItem.PurchaseOrderItemText                                          as PurchaseOrderItemText,

      _PurchaseOrderItem.PurchasingParentItem                                           as PurchasingParentItem,

      _PurchaseOrderItem.OrderItemQtyToBaseQtyDnmntr                                    as OrderItemQtyToBaseQtyDnmntr,

      cast ( _PurchaseOrderItem.OrderItemQtyToBaseQtyNmrtr as umbsz_ll preserving type) as OrderItemQtyToBaseQtyNmrtr,

      _PurchaseOrderItem.InvoiceIsGoodsReceiptBased                                     as InvoiceIsGoodsReceiptBased,

      _PurchaseOrderItem.GoodsReceiptIsExpected                                         as GoodsReceiptIsExpected,

      @ObjectModel.foreignKey.association: '_Plant'
      _PurchaseOrderItem.Plant                                                          as Plant,

      _PurchaseOrderItem.EvaldRcptSettlmtIsAllowed                                      as EvaldRcptSettlmtIsAllowed,

      @Semantics.businessDate.at: true
      _PurchaseOrder.PurchaseOrderDate                                                  as PurchaseOrderDate,
      
      @ObjectModel.foreignKey.association: '_PurchaseOrderType' 
      _PurchaseOrder.PurchaseOrderType                                                  as PurchaseOrderType,

      @ObjectModel.foreignKey.association: '_PurchasingGroup' 
      _PurchaseOrder.PurchasingGroup                                                    as PurchasingGroup,

      @ObjectModel.foreignKey.association: '_PurchasingOrganization'
      _PurchaseOrder.PurchasingOrganization                                             as PurchasingOrganization,

      _PurchaseOrder.ValidityStartDate                                                  as ValidityStartDate,

      _PurchaseOrder.ValidityEndDate                                                    as ValidityEndDate,

      @ObjectModel.foreignKey.association: '_Supplier'
      _PurchaseOrder.Supplier                                                           as Supplier,

      @ObjectModel.foreignKey.association: '_InvoicingParty' 
      _PurchaseOrder.InvoicingParty                                                     as InvoicingParty,

      @ObjectModel.foreignKey.association: '_SupplyingSupplier'
      _PurchaseOrder.SupplyingSupplier                                                  as SupplyingSupplier,

      @ObjectModel.foreignKey.association: '_SupplyingPlant'
      _PurchaseOrder.SupplyingPlant                                                     as SupplyingPlant,

      _PurchaseOrder.PurchasingDocumentOrigin                                           as PurchasingDocumentOrigin,

      @Semantics.currencyCode: true
      _PurchaseOrder.DocumentCurrency                                                   as DocumentCurrency,

      cast ( _PurchaseOrder.ExchangeRate as fis_exchange_rate preserving type)          as ExchangeRate,

      DelivDateCategory                                                                 as DelivDateCategory,

      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderQuantityUnit'
      ScheduleLineOrderQuantity                                                         as ScheduleLineOrderQuantity,

      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderQuantityUnit'
      PrevDelivQtyOfScheduleLine                                                        as PrevDelivQtyOfScheduleLine,

      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderQuantityUnit'
      RoughGoodsReceiptQty                                                              as RoughGoodsReceiptQty,

      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderQuantityUnit'
      ScheduleLineIssuedQuantity                                                        as ScheduleLineIssuedQuantity,

      SourceOfCreation                                                                  as SourceOfCreation,

      Reservation                                                                       as Reservation,

      ScheduleLineIsFixed                                                               as ScheduleLineIsFixed,

      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderQuantityUnit'
      StockTransferDeliveredQuantity                                                    as StockTransferDeliveredQuantity,

      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderQuantityUnit'
      ScheduleLineCommittedQuantity                                                     as ScheduleLineCommittedQuantity,

      @Semantics.businessDate.at: true
      ProductAvailabilityDate                                                           as ProductAvailabilityDate,

      MaterialStagingTime                                                               as ProductAvailabilityTime,


      LoadingDate                                                                       as LoadingDate,


      LoadingTime                                                                       as LoadingTime,

      @Semantics.businessDate.at: true
      TransportationPlanningDate                                                        as TransportationPlanningDate,


      TransportationPlanningTime                                                        as TransportationPlanningTime,

      @Semantics.businessDate.at: true
      GoodsIssueDate                                                                    as GoodsIssueDate,


      GoodsIssueTime                                                                    as GoodsIssueTime,

      @Semantics.businessDate.at: true
      STOLatestPossibleGRDate                                                           as STOLatestPossibleGRDate,

      STOLatestPossibleGRTime                                                           as STOLatestPossibleGRTime,

      @Semantics.amount.currencyCode: 'DocumentCurrency'
      case
          when (  _PurchaseOrderItem.OrderQuantity = 0 ) // prevent division by 0
              then
                  0
              else
      cast((  ScheduleLineOrderQuantity - RoughGoodsReceiptQty) *
              division( _PurchaseOrderItem.NetAmount , _PurchaseOrderItem.OrderQuantity, 3 )
      as abap.curr( 21, 2))
      end                                                                               as OpenPurchaseOrderNetAmount,

      // Jira 14008    
      _PurchaseOrderItem.IsReturnsItem                                                  as IsReturnsItem,

      @ObjectModel.foreignKey.association: '_CompanyCode' 
      _PurchaseOrder.CompanyCode                                                        as CompanyCode,

      _PurchaseOrderItem.ProductType                                                    as ProductTypeCode,

      _PurchaseOrder.PurchasingDocumentDeletionCode                                     as PurchasingDocumentDeletionCode,

      _PurchaseOrderItem.PurchasingDocumentDeletionCode                                 as PurgDocumentItemDeletionCode,

      _PurchaseOrder.ReleaseIsNotCompleted                                              as ReleaseIsNotCompleted,

      _PurchaseOrder.PurchasingCompletenessStatus                                       as PurchasingCompletenessStatus,

      _PurchaseOrderItem.SupplierConfirmationControlKey                                 as SupplierConfirmationControlKey,

      _PurchaseOrderItem.IsStatisticalItem                                              as IsStatisticalItem,

      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderQuantityUnit'
      case when RoughGoodsReceiptQty is null
          then ScheduleLineOrderQuantity
          else ScheduleLineOrderQuantity - RoughGoodsReceiptQty
          end                                                                           as ScheduleLineOpenQuantity,
          
       @ObjectModel.association.type: [#TO_COMPOSITION_ROOT]
       _PurchaseOrderDEX,
       
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT]
       _PurchaseOrderItemDEX,   
       
      _CompanyCode,
      _PurchaseOrderType,
      _Supplier,
      _SupplyingSupplier,
      _InvoicingParty,
      _PurchasingOrganization,
      _PurchasingGroup,
      _DocumentCurrency,
      _SupplyingPlant,
      _Plant,
      _StorageLocation,
      _Product,
      _ManufacturerMaterial,
      _ProductGroup ,
      _BaseUnit,
      _OrderQuantityUnit,
      _PurchaseContract,
      _PurchaseContractItem,
      _PurchaseRequisitionItem       



}
```
