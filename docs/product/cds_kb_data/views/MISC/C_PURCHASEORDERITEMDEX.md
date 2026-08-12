---
name: C_PURCHASEORDERITEMDEX
description: "Data Extraction View for PO Item"
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
semantic_en: "Data Extraction View for PO Item — Consumption CDS view based on I_PurchaseOrderItemAPI01."
semantic_vi: "Data Extraction View for PO Item — CDS view tiêu dùng dựa trên I_PurchaseOrderItemAPI01."
keywords:
  - "data"
  - "extraction"
  - "for"
  - "item"
  - "purchasing"
  - "group"
  - "organization"
  - "document"
  - "origin"
  - "supplier"
tags:
  - AC
  - bo:purchaseorder
  - component:AC
  - consumption-view
---
# C_PURCHASEORDERITEMDEX

**Data Extraction View for PO Item**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseOrder` | ✓ | |  |  |  |  |
| `PurchaseOrderItem` | ✓ | |  |  |  |  |
| `PurchaseOrderType` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchasingDocumentOrigin` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `SupplyingSupplier` |  | |  |  |  |  |
| `SupplyingPlant` |  | |  |  |  |  |
| `DocumentCurrency` |  | |  |  |  |  |
| `ExchangeRate` |  | |  |  |  |  |
| `InvoicingParty` |  | |  |  |  |  |
| `PurchaseOrderDate` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `PurgDocumentItemDeletionCode` |  | |  | `PurchasingDocumentDeletionCode` |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `ManufacturerMaterial` |  | |  |  |  |  |
| `PurchaseOrderCategory` |  | |  |  |  |  |
| `PurchasingOrderReason` |  | |  |  |  |  |
| `PurchaseOrderItemText` |  | |  |  |  |  |
| `PurchaseOrderItemCategory` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `StorageLocation` |  | |  |  |  |  |
| `PurchaseContract` |  | |  |  |  |  |
| `PurchaseContractItem` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `OrderQuantity` |  | |  |  |  |  |
| `PurchaseOrderQuantityUnit` |  | |  |  |  |  |
| `NetPriceAmount` |  | |  |  |  |  |
| `NetAmount` |  | |  |  |  |  |
| `LocalCurrency` |  | |  | `Currency` |  |  |
| `NetPriceQuantity` |  | |  |  |  |  |
| `OrderPriceUnit` |  | |  |  |  |  |
| `RequisitionerName` |  | |  |  |  |  |
| `RetailPromotion` |  | |  |  |  |  |
| `IsCompletelyDelivered` |  | |  |  |  |  |
| `IsReturnsItem` |  | |  |  |  |  |
| `IsFinallyInvoiced` |  | |  |  |  |  |
| `InvoiceIsExpected` |  | |  |  |  |  |
| `OrderItemQtyToBaseQtyDnmntr` |  | |  |  |  |  |
| `OrderItemQtyToBaseQtyNmrtr` |  | |  | `cast ( item.OrderItemQtyToBaseQtyNmrtr as umbsz_ll preserving type)` |  |  |
| `InvoiceIsGoodsReceiptBased` |  | |  |  |  |  |
| `GoodsReceiptIsExpected` |  | |  |  |  |  |
| `EvaldRcptSettlmtIsAllowed` |  | |  |  |  |  |
| `AccountAssignmentCategory` |  | |  |  |  |  |
| `GoodsReceiptIsNonValuated` |  | |  |  |  |  |
| `MaterialType` |  | |  |  |  |  |
| `OverdelivTolrtdLmtRatioInPct` |  | |  |  |  |  |
| `ServicePerformer` |  | |  |  |  |  |
| `TaxCode` |  | |  |  |  |  |
| `UnderdelivTolrtdLmtRatioInPct` |  | |  |  |  |  |
| `UnlimitedOverdeliveryIsAllowed` |  | |  |  |  |  |
| `SupplierMaterialNumber` |  | |  |  |  |  |
| `ProductTypeCode` |  | |  | `ProductType` |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `ExpectedOverallLimitAmount` |  | |  |  |  |  |
| `OverallLimitAmount` |  | |  |  |  |  |
| `RequirementSegment` |  | |  |  |  |  |
| `ReleaseIsNotCompleted` |  | |  |  |  |  |
| `PurchasingCompletenessStatus` |  | |  |  |  |  |
| `IsStatisticalItem` |  | |  |  |  |  |
| `MultipleAcctAssgmtDistribution` |  | |  |  |  |  |
| `PurchaseRequisition` |  | |  |  |  |  |
| `PurchaseRequisitionItem` |  | |  |  |  |  |
| `SupplierConfirmationControlKey` |  | |  |  |  |  |
| `PurchasingDocumentDeletionCode` |  | |  |  |  |  |
| `_PurchaseOrderDEX` | | ✓ | | | | |
| `_ScheduleLineDEX` | | ✓ | | | | |
| `_AccountAssignmentDEX` | | ✓ | | | | |
| `_POSupplierConfirmationDEX` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_PurchaseOrderType` | | ✓ | | | | |
| `_ItemCategory` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_SupplyingSupplier` | | ✓ | | | | |
| `_InvoicingParty` | | ✓ | | | | |
| `_PurchasingOrganization` | | ✓ | | | | |
| `_PurchasingGroup` | | ✓ | | | | |
| `_DocumentCurrency` | | ✓ | | | | |
| `_LocalCurrency` | | ✓ | | | | |
| `_SupplyingPlant` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_StorageLocation` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ProductTypeCode` | | ✓ | | | | |
| `_ManufacturerMaterial` | | ✓ | | | | |
| `_ProductGroup` | | ✓ | | | | |
| `_ProductType` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_OrderPriceUnit` | | ✓ | | | | |
| `_OrderQuantityUnit` | | ✓ | | | | |
| `_PurchaseContract` | | ✓ | | | | |
| `_PurchaseContractItem` | | ✓ | | | | |
| `_PurchaseRequisitionItem` | | ✓ | | | | |

## Source Code

```abap
@AccessControl:{
                 authorizationCheck: #CHECK,
                 personalData.blocking: #BLOCKED_DATA_EXCLUDED
                }
@EndUserText.label: 'Data Extraction View for PO Item'
@ObjectModel :{ usageType.dataClass: #TRANSACTIONAL,
                usageType.sizeCategory: #L,
                usageType.serviceQuality: #D,
                supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ],
                representativeKey: 'PurchaseOrderItem'            
                }

@VDM.viewType : #CONSUMPTION
@Metadata.ignorePropagatedAnnotations:true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics: {
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
                    table: 'ekpo', role: #MAIN,
                    viewElement: ['PurchaseOrder', 'PurchaseOrderItem'],
                    tableElement: ['ebeln', 'ebelp']
                },
                {
                    table: 'ekko', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['PurchaseOrder'],
                    tableElement: ['ebeln']}
            ]
        }
    }
    }
@Analytics.technicalName: 'CMMPOITMDX'
@ObjectModel.sapObjectNodeType.name: 'PurchaseOrderItem'
@ObjectModel.modelingPattern: #ANALYTICAL_FACT
define view entity C_PurchaseOrderItemDEX
  as select from           I_PurchaseOrderItemAPI01 as item
    left outer to one join I_CompanyCode            as CompanyCode on item.CompanyCode = CompanyCode.CompanyCode
  //  association [0..1] to I_CompanyCode as _CompanyCode on $projection.CompanyCode = _CompanyCode.CompanyCode

association to exact one C_PurchaseOrderDEX           as _PurchaseOrderDEX                on  $projection.PurchaseOrder     = _PurchaseOrderDEX.PurchaseOrder
association to many      C_PurOrdScheduleLineDEX      as _ScheduleLineDEX                 on  $projection.PurchaseOrder     = _ScheduleLineDEX.PurchaseOrder
                                                                                      and  $projection.PurchaseOrderItem = _ScheduleLineDEX.PurchaseOrderItem
association to many      C_PurOrdAccountAssignmentDEX as _AccountAssignmentDEX                 on  $projection.PurchaseOrder= _AccountAssignmentDEX .PurchaseOrder
                                                                                      and  $projection.PurchaseOrderItem = _AccountAssignmentDEX .PurchaseOrderItem       
association to many C_POSupplierConfirmationDEX     as _POSupplierConfirmationDEX    on  $projection.PurchaseOrder     = _POSupplierConfirmationDEX.PurchaseOrder
                                                                                          and $projection.PurchaseOrderItem = _POSupplierConfirmationDEX.PurchaseOrderItem                                                                                                                                                                     




  association to one I_PurchaseOrderType              as _PurchaseOrderType         on _PurchaseOrderType.PurchaseOrderType = $projection.PurchaseOrderType
  
  association to one I_Supplier                       as _Supplier                   on  $projection.Supplier = _Supplier.Supplier

  association to one I_Supplier                       as _SupplyingSupplier          on  $projection.SupplyingSupplier = _SupplyingSupplier.Supplier

  association to one I_Supplier                       as _InvoicingParty             on  $projection.InvoicingParty = _InvoicingParty.Supplier 
  
  association to one I_Currency                       as _DocumentCurrency           on  $projection.DocumentCurrency = _DocumentCurrency.Currency
  
  association to one I_Currency                       as _LocalCurrency              on  $projection.LocalCurrency = _LocalCurrency.Currency
  
  association to one I_Plant                          as _SupplyingPlant             on  $projection.SupplyingPlant = _SupplyingPlant.Plant
  
  association to one I_PurchasingOrganization         as _PurchasingOrganization     on  $projection.PurchasingOrganization = _PurchasingOrganization.PurchasingOrganization

  association to one I_PurchasingGroup                as _PurchasingGroup            on  $projection.PurchasingGroup = _PurchasingGroup.PurchasingGroup
  
  association to one I_CompanyCode                    as _CompanyCode                on  $projection.CompanyCode = _CompanyCode.CompanyCode
  
  association to one I_Plant                          as _Plant                     on  $projection.Plant = _Plant.Plant
  
  association to one I_PurgDocumentItemCategory       as _ItemCategory               on  $projection.PurchaseOrderItemCategory = _ItemCategory.PurchasingDocumentItemCategory
    
  association to one I_StorageLocation                as _StorageLocation           on  $projection.Plant           = _StorageLocation.Plant
                                                                                   and $projection.StorageLocation = _StorageLocation.StorageLocation
                                                                                   
  association to one I_Product                        as _Product                   on  $projection.Material = _Product.Product
   
  association to one I_Product                        as _ManufacturerMaterial      on  $projection.ManufacturerMaterial = _ManufacturerMaterial.Product   
 
  association to one I_ProductGroup_2                 as _ProductGroup              on  $projection.MaterialGroup = _ProductGroup.ProductGroup
  
  association to one I_ProductType_2                  as _ProductType                on  $projection.MaterialType = _ProductType.ProductType
  
  association to one I_BusinessPartner                as _BusinessPartner              on  $projection.ServicePerformer = _BusinessPartner.BusinessPartner

  association to one I_UnitOfMeasure                  as _BaseUnit                  on  $projection.BaseUnit = _BaseUnit.UnitOfMeasure

  association to one I_UnitOfMeasure                  as _OrderQuantityUnit         on  $projection.PurchaseOrderQuantityUnit = _OrderQuantityUnit.UnitOfMeasure

  association to one I_UnitOfMeasure                  as _OrderPriceUnit            on  $projection.OrderPriceUnit = _OrderPriceUnit.UnitOfMeasure  
  
  association to one I_ProductTypeCode                as _ProductTypeCode           on  $projection.ProductTypeCode = _ProductTypeCode.ProductTypeCode 
                                                                                     
  association to one C_PurchaseContractDEX            as _PurchaseContract          on  $projection.PurchaseContract = _PurchaseContract.PurchaseContract

  association to one C_PurchaseContractItemDEX        as _PurchaseContractItem      on  $projection.PurchaseContract     = _PurchaseContractItem.PurchaseContract
                                                                                       and $projection.PurchaseContractItem = _PurchaseContractItem.PurchaseContractItem

  association to one C_PurchaseRequisitionItemDEX     as _PurchaseRequisitionItem   on  $projection.PurchaseRequisition     = _PurchaseRequisitionItem.PurchaseRequisition
                                                                                      and $projection.PurchaseRequisitionItem = _PurchaseRequisitionItem.PurchaseRequisitionItem





{
      @ObjectModel.foreignKey.association: '_PurchaseOrder'
  key item.PurchaseOrder,

  key item.PurchaseOrderItem,

      // PO header fields
      @ObjectModel.foreignKey.association: '_PurchaseOrderType'   
      item._PurchaseOrder.PurchaseOrderType                               as PurchaseOrderType,

      @ObjectModel.foreignKey.association: '_PurchasingGroup'  
      item._PurchaseOrder.PurchasingGroup                                 as PurchasingGroup,

      @ObjectModel.foreignKey.association: '_PurchasingOrganization'  
      item._PurchaseOrder.PurchasingOrganization                          as PurchasingOrganization,

      item._PurchaseOrder.PurchasingDocumentOrigin                        as PurchasingDocumentOrigin,

      @ObjectModel.foreignKey.association: '_Supplier'
      item._PurchaseOrder.Supplier                                        as Supplier,

      @ObjectModel.foreignKey.association: '_SupplyingSupplier'
      item._PurchaseOrder.SupplyingSupplier                               as SupplyingSupplier,

      @ObjectModel.foreignKey.association: '_SupplyingPlant'
      item._PurchaseOrder.SupplyingPlant                                  as SupplyingPlant,

      item._PurchaseOrder.DocumentCurrency                                as DocumentCurrency,

      item._PurchaseOrder.ExchangeRate                                    as ExchangeRate,

      @ObjectModel.foreignKey.association: '_InvoicingParty'    
      item._PurchaseOrder.InvoicingParty                                  as InvoicingParty,

      @Semantics.businessDate.at: true
      item._PurchaseOrder.PurchaseOrderDate                               as PurchaseOrderDate,

      item._PurchaseOrder.ValidityStartDate                               as ValidityStartDate,

      item._PurchaseOrder.ValidityEndDate                                 as ValidityEndDate,

      @Semantics.systemDate.createdAt: true
      item._PurchaseOrder.CreationDate                                    as CreationDate,

      @Semantics.systemDateTime.lastChangedAt: true
      item._PurchaseOrder.LastChangeDateTime                              as LastChangeDateTime,

      //PO item
      //This is Item deletion code.
      item.PurchasingDocumentDeletionCode                                 as PurgDocumentItemDeletionCode,

      @ObjectModel.foreignKey.association: '_ProductGroup'
      item.MaterialGroup                                                  as MaterialGroup,

      @ObjectModel.foreignKey.association: '_Product'
      item.Material                                                       as Material,

      @ObjectModel.foreignKey.association: '_ManufacturerMaterial'
      item.ManufacturerMaterial                                           as ManufacturerMaterial,

      item.PurchaseOrderCategory                                          as PurchaseOrderCategory,

      item.PurchasingOrderReason                                          as PurchasingOrderReason,

      @Semantics.text: true
      item.PurchaseOrderItemText                                          as PurchaseOrderItemText,
      
      @ObjectModel.foreignKey.association: '_ItemCategory'
      item.PurchaseOrderItemCategory                                      as PurchaseOrderItemCategory,

      @ObjectModel.foreignKey.association: '_CompanyCode' 
      CompanyCode.CompanyCode                                             as CompanyCode,

      @ObjectModel.foreignKey.association: '_Plant'
      item.Plant                                                          as Plant,

      @ObjectModel.foreignKey.association: '_StorageLocation'
      item.StorageLocation                                                as StorageLocation,

      @ObjectModel.sapObjectNodeTypeReference: 'PurchaseContract'
      item.PurchaseContract                                               as PurchaseContract,

      @ObjectModel.sapObjectNodeTypeReference: 'PurchaseContractItem'
      item.PurchaseContractItem                                           as PurchaseContractItem,

      @ObjectModel.foreignKey.association: '_BaseUnit'
      item.BaseUnit                                                       as BaseUnit,

      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderQuantityUnit'
      item.OrderQuantity                                                  as OrderQuantity,

      @ObjectModel.foreignKey.association: '_OrderQuantityUnit'
      item.PurchaseOrderQuantityUnit                                      as PurchaseOrderQuantityUnit,

      @Semantics.amount.currencyCode: 'DocumentCurrency'
      item.NetPriceAmount                                                 as NetPriceAmount,

      @Semantics.amount.currencyCode: 'DocumentCurrency'
      item.NetAmount                                                      as NetAmount,

      @ObjectModel.foreignKey.association: '_LocalCurrency'
      CompanyCode.Currency                                                as LocalCurrency,

      @Semantics.quantity.unitOfMeasure: 'OrderPriceUnit'
      item.NetPriceQuantity                                               as NetPriceQuantity,

      item.OrderPriceUnit                                                 as OrderPriceUnit,

      item.RequisitionerName                                              as RequisitionerName,

      item.RetailPromotion                                                as RetailPromotion,

      item.IsCompletelyDelivered                                          as IsCompletelyDelivered,

      item.IsReturnsItem                                                  as IsReturnsItem,

      item.IsFinallyInvoiced                                              as IsFinallyInvoiced,

      item.InvoiceIsExpected                                              as InvoiceIsExpected,

      item.OrderItemQtyToBaseQtyDnmntr                                    as OrderItemQtyToBaseQtyDnmntr,

      cast ( item.OrderItemQtyToBaseQtyNmrtr as umbsz_ll preserving type) as OrderItemQtyToBaseQtyNmrtr,

      item.InvoiceIsGoodsReceiptBased                                     as InvoiceIsGoodsReceiptBased,

      item.GoodsReceiptIsExpected                                         as GoodsReceiptIsExpected,

      item.EvaldRcptSettlmtIsAllowed                                      as EvaldRcptSettlmtIsAllowed,

      item.AccountAssignmentCategory                                      as AccountAssignmentCategory,

      item.GoodsReceiptIsNonValuated                                      as GoodsReceiptIsNonValuated,

      @ObjectModel.foreignKey.association: '_ProductType'
      item.MaterialType                                                   as MaterialType,

      item.OverdelivTolrtdLmtRatioInPct                                   as OverdelivTolrtdLmtRatioInPct,

      @ObjectModel.foreignKey.association: '_BusinessPartner'
      item.ServicePerformer                                               as ServicePerformer,

      item.TaxCode                                                        as TaxCode,

      item.UnderdelivTolrtdLmtRatioInPct                                  as UnderdelivTolrtdLmtRatioInPct,

      item.UnlimitedOverdeliveryIsAllowed                                 as UnlimitedOverdeliveryIsAllowed,

      item.SupplierMaterialNumber                                         as SupplierMaterialNumber,

      @ObjectModel.foreignKey.association: '_ProductTypeCode'
      item.ProductType                                                    as ProductTypeCode,

      item._PurchaseOrder.CreatedByUser                                   as CreatedByUser,

      @Semantics.amount.currencyCode: 'DocumentCurrency'
      item.ExpectedOverallLimitAmount                                     as ExpectedOverallLimitAmount,


      @Semantics.amount.currencyCode: 'DocumentCurrency'
      item.OverallLimitAmount                                             as OverallLimitAmount,

      item.RequirementSegment                                             as RequirementSegment,

      item._PurchaseOrder.ReleaseIsNotCompleted                           as ReleaseIsNotCompleted,

      item._PurchaseOrder.PurchasingCompletenessStatus                    as PurchasingCompletenessStatus,
      
      item.IsStatisticalItem                                              as IsStatisticalItem,

      item.MultipleAcctAssgmtDistribution                                 as MultipleAcctAssgmtDistribution,

      item.PurchaseRequisition                                            as PurchaseRequisition,

      @ObjectModel.sapObjectNodeTypeReference: 'PurchaseRequisitionItem'
      item.PurchaseRequisitionItem                                        as PurchaseRequisitionItem,

      item.SupplierConfirmationControlKey                                 as SupplierConfirmationControlKey,

      item._PurchaseOrder.PurchasingDocumentDeletionCode                  as PurchasingDocumentDeletionCode,

      //Association
      item._PurchaseOrder,
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT,
                                      #TO_COMPOSITION_ROOT]
      _PurchaseOrderDEX,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _ScheduleLineDEX,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]      
      _AccountAssignmentDEX,
      
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _POSupplierConfirmationDEX,
      
      _CompanyCode,
      _PurchaseOrderType,
      _ItemCategory,
      _Supplier,
      _SupplyingSupplier,
      _InvoicingParty,
      _PurchasingOrganization,
      _PurchasingGroup,
      _DocumentCurrency,
      _LocalCurrency,
      _SupplyingPlant,
      _Plant,
      _StorageLocation,
      _Product,
      _ProductTypeCode,
      _ManufacturerMaterial,
      _ProductGroup ,
      _ProductType,
      _BusinessPartner,
      _BaseUnit,
      _OrderPriceUnit,
      _OrderQuantityUnit,
      _PurchaseContract,
      _PurchaseContractItem,
      _PurchaseRequisitionItem
      
}
```
