---
name: I_PURCHASEREQUISITIONITEMAPI01
description: Purchase RequisitionUISITIONITEMAPI 01
app_component: MM-PUR-REQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-REQ
  - interface-view
  - purchase-requisition
  - item-level
  - component:MM-PUR-REQ-2CL
  - lob:Sourcing & Procurement
---
# I_PURCHASEREQUISITIONITEMAPI01

**Purchase RequisitionUISITIONITEMAPI 01**

| Property | Value |
|---|---|
| App Component | `MM-PUR-REQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `PurchaseRequisition` | ✓ | |  |  |
| `PurchaseRequisitionItem` | ✓ | |  |  |
| `PurchaseReqnItemUniqueID` |  | |  |  |
| `PurchasingDocument` |  | |  |  |
| `PurchasingDocumentItem` |  | |  |  |
| `PurReqnReleaseStatus` |  | |  |  |
| `PurchaseRequisitionType` |  | |  |  |
| `PurchasingDocumentSubtype` |  | |  |  |
| `PurchasingDocumentItemCategory` |  | |  |  |
| `PurchaseRequisitionItemText` |  | |  |  |
| `AccountAssignmentCategory` |  | |  |  |
| `Material` |  | |  |  |
| `MaterialGroup` |  | |  |  |
| `PurchasingDocumentCategory` |  | |  |  |
| `RequestedQuantity` |  | |  |  |
| `BaseUnit` |  | |  |  |
| `PurchaseRequisitionPrice` |  | |  |  |
| `PurReqnPriceQuantity` |  | |  |  |
| `MaterialGoodsReceiptDuration` |  | |  |  |
| `ReleaseCode` |  | |  |  |
| `PurchaseRequisitionReleaseDate` |  | |  |  |
| `PurchasingOrganization` |  | |  |  |
| `PurchasingGroup` |  | |  |  |
| `Plant` |  | |  |  |
| `SourceOfSupplyIsAssigned` |  | |  |  |
| `SupplyingPlant` |  | |  |  |
| `OrderedQuantity` |  | |  |  |
| `PurReqnLimitConsumptionAmt` |  | |  |  |
| `DeliveryDate` |  | |  |  |
| `CreationDate` |  | |  |  |
| `PurchaseReqnCreationDate` |  | |  |  |
| `CreationTime` |  | |  |  |
| `ProcessingStatus` |  | |  |  |
| `PurchasingInfoRecord` |  | |  |  |
| `Supplier` |  | |  |  |
| `IsDeleted` |  | |  |  |
| `FixedSupplier` |  | |  |  |
| `RequisitionerName` |  | |  |  |
| `CreatedByUser` |  | |  |  |
| `PurReqCreationDate` |  | |  |  |
| `DeliveryAddressID` |  | |  |  |
| `ManualDeliveryAddressID` |  | |  |  |
| `PurReqnItemCurrency` |  | |  |  |
| `MaterialPlannedDeliveryDurn` |  | |  |  |
| `DelivDateCategory` |  | |  |  |
| `MultipleAcctAssgmtDistribution` |  | |  |  |
| `StorageLocation` |  | |  |  |
| `PurReqnSSPRequestor` |  | |  |  |
| `PurReqnSSPAuthor` |  | |  |  |
| `PurchaseContract` |  | |  |  |
| `PurReqnSourceOfSupplyType` |  | |  |  |
| `PurchaseContractItem` |  | |  |  |
| `ConsumptionPosting` |  | |  |  |
| `PurReqnOrigin` |  | |  |  |
| `PurReqnSSPCatalog` |  | |  |  |
| `PurReqnSSPCatalogItem` |  | |  |  |
| `PurReqnSSPCrossCatalogItem` |  | |  |  |
| `IsPurReqnBlocked` |  | |  |  |
| `ItemDeliveryAddressID` |  | |  |  |
| `Language` |  | |  |  |
| `IsClosed` |  | |  |  |
| `Reservation` |  | |  |  |
| `ReleaseIsNotCompleted` |  | |  |  |
| `ServicePerformer` |  | |  |  |
| `ProductType` |  | |  |  |
| `PurchaseRequisitionStatus` |  | |  |  |
| `ReleaseStrategy` |  | |  |  |
| `PerformancePeriodStartDate` |  | |  |  |
| `PerformancePeriodEndDate` |  | |  |  |
| `CompanyCode` |  | |  |  |
| `SupplierMaterialNumber` |  | |  |  |
| `Batch` |  | |  |  |
| `MaterialRevisionLevel` |  | |  | `cast( I_Purchaserequisitionitem.MaterialRevisionLevel as revlv )` |
| `MaterialRevisionLevel_2` |  | |  | `MaterialRevisionLevel` |
| `MinRemainingShelfLife` |  | |  |  |
| `ItemNetAmount` |  | |  |  |
| `GoodsReceiptIsExpected` |  | |  |  |
| `InvoiceIsExpected` |  | |  |  |
| `GoodsReceiptIsNonValuated` |  | |  |  |
| `RequirementTracking` |  | |  |  |
| `MRPArea` |  | |  |  |
| `MRPController` |  | |  |  |
| `TaxCode` |  | |  |  |
| `PurchaseRequisitionIsFixed` |  | |  |  |
| `AddressID` |  | |  |  |
| `LastChangeDateTime` |  | |  |  |
| `ExpectedOverallLimitAmount` |  | |  |  |
| `OverallLimitAmount` |  | |  |  |
| `PurContractForOverallLimit` |  | |  |  |
| `PurContractItemForOverallLimit` |  | |  |  |
| `ProcurementHubSourceSystem` |  | |  |  |
| `ExtPurgOrgForPurg` |  | |  |  |
| `ExtCompanyCodeForPurg` |  | |  |  |
| `ExtPlantForPurg` |  | |  |  |
| `ExtInfoRecordForPurg` |  | |  |  |
| `ExtContractItemForPurg` |  | |  |  |
| `ExtContractForPurg` |  | |  |  |
| `ExtDesiredSupplierForPurg` |  | |  |  |
| `ExtFixedSupplierForPurg` |  | |  |  |
| `ExtMaterialForPurg` |  | |  |  |
| `IsOutline` |  | |  |  |
| `PurchasingParentItem` |  | |  |  |
| `PurgConfigurableItemNumber` |  | |  |  |
| `PurgExternalSortNumber` |  | |  |  |
| `IsPurReqnCmplt` |  | |  |  |
| `PurReqnItemBlockingReasonText` |  | |  |  |
| `InventorySpecialStockType` |  | |  |  |
| `QuotaArrangement` |  | |  |  |
| `QuotaArrangementItem` |  | |  |  |
| `_PurchaseRequisition` | | ✓ | | |
| `_PurReqnAcctAssgmt` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurchaseRequisition` | `I_PurchaseRequisitionAPI01` | [1..1] |
| `_PurReqnAcctAssgmt` | `I_PurReqnAcctAssgmtAPI01` | [0..*] |
| `_Extension` | `E_Purchaserequisitionitem` | [0..1] |

## Source Code

```abap
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L //Inserted by VDM CDS Suite Plugin
@ObjectModel.semanticKey:['PurchaseRequisition', 'PurchaseRequisitionItem']
@ObjectModel.representativeKey: 'PurchaseRequisitionItem'
@AbapCatalog.sqlViewName: 'IPRITMAPI01'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Purchase Requisition Item'
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #COMPOSITE
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.preserveKey: true
@VDM.lifecycle.contract.type :#PUBLIC_LOCAL_API
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
define view I_PurchaseRequisitionItemAPI01
  as select from I_Purchaserequisitionitem

  association [1..1] to I_PurchaseRequisitionAPI01 as _PurchaseRequisition on  $projection.PurchaseRequisition = _PurchaseRequisition.PurchaseRequisition

  association [0..*] to I_PurReqnAcctAssgmtAPI01   as _PurReqnAcctAssgmt   on  $projection.PurchaseRequisition     = _PurReqnAcctAssgmt.PurchaseRequisition
                                                                           and $projection.PurchaseRequisitionItem = _PurReqnAcctAssgmt.PurchaseRequisitionItem
  association [0..1] to E_Purchaserequisitionitem  as _Extension           on  $projection.PurchaseRequisition     = _Extension.PurchaseRequisition
                                                                           and $projection.PurchaseRequisitionItem = _Extension.PurchaseRequisitionItem

{
      //Key
      @ObjectModel.foreignKey.association: '_PurchaseRequisition'
  key I_Purchaserequisitionitem.PurchaseRequisition                    as PurchaseRequisition,
  key I_Purchaserequisitionitem.PurchaseRequisitionItem                as PurchaseRequisitionItem,
      I_Purchaserequisitionitem.PurchaseReqnItemUniqueID               as PurchaseReqnItemUniqueID,
      I_Purchaserequisitionitem.PurchasingDocument,
      I_Purchaserequisitionitem.PurchasingDocumentItem,
      I_Purchaserequisitionitem.PurReqnReleaseStatus,
      I_Purchaserequisitionitem.PurchaseRequisitionType,
      I_Purchaserequisitionitem.PurchasingDocumentSubtype,
      I_Purchaserequisitionitem.PurchasingDocumentItemCategory,
      I_Purchaserequisitionitem.PurchaseRequisitionItemText,
      I_Purchaserequisitionitem.AccountAssignmentCategory,
      I_Purchaserequisitionitem.Material,
      I_Purchaserequisitionitem.MaterialGroup,
      I_Purchaserequisitionitem.PurchasingDocumentCategory,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      I_Purchaserequisitionitem.RequestedQuantity,
      @Semantics.unitOfMeasure: true
      I_Purchaserequisitionitem.BaseUnit,
      @Semantics.amount.currencyCode: 'PurReqnItemCurrency'
      I_Purchaserequisitionitem.PurchaseRequisitionPrice,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      I_Purchaserequisitionitem.PurReqnPriceQuantity,
      I_Purchaserequisitionitem.MaterialGoodsReceiptDuration,
      I_Purchaserequisitionitem.ReleaseCode,
      I_Purchaserequisitionitem.PurchaseRequisitionReleaseDate,
      I_Purchaserequisitionitem.PurchasingOrganization,
      I_Purchaserequisitionitem.PurchasingGroup,
      I_Purchaserequisitionitem.Plant,
      I_Purchaserequisitionitem.SourceOfSupplyIsAssigned,
      I_Purchaserequisitionitem.SupplyingPlant,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      I_Purchaserequisitionitem.OrderedQuantity,
      @Semantics.amount.currencyCode: 'PurReqnItemCurrency'
      I_Purchaserequisitionitem.PurReqnLimitConsumptionAmt,
      I_Purchaserequisitionitem.DeliveryDate,
      I_Purchaserequisitionitem.CreationDate,
      I_Purchaserequisitionitem.PurchaseReqnCreationDate,
      I_Purchaserequisitionitem.CreationTime,
      I_Purchaserequisitionitem.ProcessingStatus,
      I_Purchaserequisitionitem.PurchasingInfoRecord,
      I_Purchaserequisitionitem.Supplier,
      @Semantics.booleanIndicator:true
      I_Purchaserequisitionitem.IsDeleted,
      I_Purchaserequisitionitem.FixedSupplier,
      I_Purchaserequisitionitem.RequisitionerName,
      I_Purchaserequisitionitem.CreatedByUser,
      I_Purchaserequisitionitem.PurReqCreationDate,
      I_Purchaserequisitionitem.DeliveryAddressID,
      I_Purchaserequisitionitem.ManualDeliveryAddressID,
      @Semantics.currencyCode: true
      I_Purchaserequisitionitem.PurReqnItemCurrency,
      I_Purchaserequisitionitem.MaterialPlannedDeliveryDurn,
      I_Purchaserequisitionitem.DelivDateCategory,
      I_Purchaserequisitionitem.MultipleAcctAssgmtDistribution,
      I_Purchaserequisitionitem.StorageLocation,
      I_Purchaserequisitionitem.PurReqnSSPRequestor,
      I_Purchaserequisitionitem.PurReqnSSPAuthor,
      I_Purchaserequisitionitem.PurchaseContract,
      I_Purchaserequisitionitem.PurReqnSourceOfSupplyType,
      I_Purchaserequisitionitem.PurchaseContractItem,
      I_Purchaserequisitionitem.ConsumptionPosting,
      I_Purchaserequisitionitem.PurReqnOrigin,
      I_Purchaserequisitionitem.PurReqnSSPCatalog,
      I_Purchaserequisitionitem.PurReqnSSPCatalogItem,
      I_Purchaserequisitionitem.PurReqnSSPCrossCatalogItem,
      @Semantics.booleanIndicator:true
      I_Purchaserequisitionitem.IsPurReqnBlocked,
      I_Purchaserequisitionitem.ItemDeliveryAddressID,
      I_Purchaserequisitionitem.Language,
      I_Purchaserequisitionitem.IsClosed,
      I_Purchaserequisitionitem.Reservation,
      I_Purchaserequisitionitem.ReleaseIsNotCompleted,
      I_Purchaserequisitionitem.ServicePerformer,
      I_Purchaserequisitionitem.ProductType,
      I_Purchaserequisitionitem.PurchaseRequisitionStatus,
      I_Purchaserequisitionitem.ReleaseStrategy,
      I_Purchaserequisitionitem.PerformancePeriodStartDate,
      I_Purchaserequisitionitem.PerformancePeriodEndDate,
      I_Purchaserequisitionitem.CompanyCode,
      I_Purchaserequisitionitem.SupplierMaterialNumber,
      I_Purchaserequisitionitem.Batch,

      @API.element.releaseState:#DEPRECATED
      @API.element.successor:'MaterialRevisionLevel_2'
      cast( I_Purchaserequisitionitem.MaterialRevisionLevel as revlv ) as MaterialRevisionLevel,
      I_Purchaserequisitionitem.MaterialRevisionLevel                  as MaterialRevisionLevel_2,

      I_Purchaserequisitionitem.MinRemainingShelfLife,
      @Semantics.amount.currencyCode: 'PurReqnItemCurrency'
      I_Purchaserequisitionitem.ItemNetAmount,
      I_Purchaserequisitionitem.GoodsReceiptIsExpected,
      I_Purchaserequisitionitem.InvoiceIsExpected,
      I_Purchaserequisitionitem.GoodsReceiptIsNonValuated,
      I_Purchaserequisitionitem.RequirementTracking,
      I_Purchaserequisitionitem.MRPArea, // CFD 2302.3
      I_Purchaserequisitionitem.MRPController,
      I_Purchaserequisitionitem.TaxCode,
      I_Purchaserequisitionitem.PurchaseRequisitionIsFixed,
      I_Purchaserequisitionitem.AddressID,
      I_Purchaserequisitionitem.LastChangeDateTime,
      @Semantics.amount.currencyCode: 'PurReqnItemCurrency'
      ExpectedOverallLimitAmount                                       as ExpectedOverallLimitAmount,

      @Semantics.amount.currencyCode: 'PurReqnItemCurrency'
      OverallLimitAmount                                               as OverallLimitAmount,
      I_Purchaserequisitionitem.PurContractForOverallLimit,
      I_Purchaserequisitionitem.PurContractItemForOverallLimit,
      I_Purchaserequisitionitem.ProcurementHubSourceSystem,
      I_Purchaserequisitionitem.ExtPurgOrgForPurg,
      I_Purchaserequisitionitem.ExtCompanyCodeForPurg,
      I_Purchaserequisitionitem.ExtPlantForPurg,
      I_Purchaserequisitionitem.ExtInfoRecordForPurg,
      I_Purchaserequisitionitem.ExtContractItemForPurg,
      I_Purchaserequisitionitem.ExtContractForPurg,
      I_Purchaserequisitionitem.ExtDesiredSupplierForPurg,
      I_Purchaserequisitionitem.ExtFixedSupplierForPurg,
      I_Purchaserequisitionitem.ExtMaterialForPurg,

      I_Purchaserequisitionitem.IsOutline,
      I_Purchaserequisitionitem.PurchasingParentItem,
      I_Purchaserequisitionitem.PurgConfigurableItemNumber,
      I_Purchaserequisitionitem.PurgExternalSortNumber,
      //@Semantics.booleanIndicator:true
      //I_Purchaserequisitionitem.IsEndOfPurposeBlocked,
      
      I_Purchaserequisitionitem.IsPurReqnCmplt,
      I_Purchaserequisitionitem.PurReqnItemBlockingReasonText,
      I_Purchaserequisitionitem.InventorySpecialStockType,
      I_Purchaserequisitionitem.QuotaArrangement,
      I_Purchaserequisitionitem.QuotaArrangementItem,

      /* Associations */
      _PurchaseRequisition,
      _PurReqnAcctAssgmt
}
```
