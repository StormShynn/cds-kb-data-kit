---
name: I_PURCHASEREQNITEMTP
description: "Purchase RequisitionNITEMTP"
app_component: MM-PUR-REQ-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-REQ
  - interface-view
  - transactional-processing
  - purchase-requisition
  - item-level
  - component:MM-PUR-REQ-2CL
  - lob:Sourcing & Procurement
---
# I_PURCHASEREQNITEMTP

**Purchase RequisitionNITEMTP**

| Property | Value |
|---|---|
| App Component | `MM-PUR-REQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseRequisition` | ✓ | |  |  |  |  |
| `PurchaseRequisitionItem` | ✓ | |  |  |  |  |
| `PurchasingDocument` |  | |  |  |  |  |
| `PurchasingDocumentItem` |  | |  |  |  |  |
| `PurReqnReleaseStatus` |  | |  |  |  |  |
| `PurchaseRequisitionType` |  | |  |  |  |  |
| `PurchasingDocumentSubtype` |  | |  |  |  |  |
| `PurchasingDocumentItemCategory` |  | |  |  |  |  |
| `PurchaseRequisitionItemText` |  | |  |  |  |  |
| `AccountAssignmentCategory` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `RequestedQuantity` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `PurchaseRequisitionPrice` |  | |  |  |  |  |
| `PurReqnPriceQuantity` |  | |  |  |  |  |
| `MaterialGoodsReceiptDuration` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `SourceOfSupplyIsAssigned` |  | |  |  |  |  |
| `SupplyingPlant` |  | |  |  |  |  |
| `OrderedQuantity` |  | |  |  |  |  |
| `DeliveryDate` |  | |  |  |  |  |
| `ProcessingStatus` |  | |  |  |  |  |
| `ExternalApprovalStatus` |  | |  |  |  |  |
| `PurchasingInfoRecord` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `IsDeleted` |  | |  |  |  |  |
| `FixedSupplier` |  | |  |  |  |  |
| `RequisitionerName` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `PurReqCreationDate` |  | |  |  |  |  |
| `PurReqnItemCurrency` |  | |  |  |  |  |
| `MaterialPlannedDeliveryDurn` |  | |  |  |  |  |
| `DelivDateCategory` |  | |  |  |  |  |
| `MultipleAcctAssgmtDistribution` |  | |  |  |  |  |
| `StorageLocation` |  | |  |  |  |  |
| `PurchaseContract` |  | |  |  |  |  |
| `PurReqnSourceOfSupplyType` |  | |  |  |  |  |
| `PurchaseContractItem` |  | |  |  |  |  |
| `ConsumptionPosting` |  | |  |  |  |  |
| `PurReqnOrigin` |  | |  |  |  |  |
| `PurReqnSSPCatalog` |  | |  |  |  |  |
| `PurReqnSSPCatalogItem` |  | |  |  |  |  |
| `PurReqnSSPCrossCatalogItem` |  | |  |  |  |  |
| `PurReqnItemBlockingStatus` |  | |  |  |  |  |
| `PurReqnItemBlockingReasonText` |  | |  |  |  |  |
| `ItemDeliveryAddressID` |  | |  |  |  |  |
| `Language` |  | |  |  |  |  |
| `IsClosed` |  | |  |  |  |  |
| `ReleaseIsNotCompleted` |  | |  |  |  |  |
| `ServicePerformer` |  | |  |  |  |  |
| `ProductTypeCode` |  | |  |  |  |  |
| `PerformancePeriodStartDate` |  | |  |  |  |  |
| `PerformancePeriodEndDate` |  | |  |  |  |  |
| `PurchaseOrderPriceType` |  | |  |  |  |  |
| `SupplierMaterialNumber` |  | |  |  |  |  |
| `Batch` |  | |  |  |  |  |
| `MaterialRevisionLevel` |  | |  |  |  |  |
| `MinRemainingShelfLife` |  | |  |  |  |  |
| `ItemNetAmount` |  | |  |  |  |  |
| `TaxCode` |  | |  |  |  |  |
| `GoodsReceiptIsExpected` |  | |  |  |  |  |
| `InvoiceIsExpected` |  | |  |  |  |  |
| `GoodsReceiptIsNonValuated` |  | |  |  |  |  |
| `RequirementTracking` |  | |  |  |  |  |
| `MRPController` |  | |  |  |  |  |
| `PurchaseRequisitionIsFixed` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `ExpectedOverallLimitAmount` |  | |  |  |  |  |
| `OverallLimitAmount` |  | |  |  |  |  |
| `PurContractForOverallLimit` |  | |  |  |  |  |
| `PurReqnExternalReference` |  | |  |  |  |  |
| `PurReqnItemExternalReference` |  | |  |  |  |  |
| `PurReqnExternalSystemId` |  | |  |  |  |  |
| `ExtMaterialForPurg` |  | |  |  |  |  |
| `ExtFixedSupplierForPurg` |  | |  |  |  |  |
| `ExtDesiredSupplierForPurg` |  | |  |  |  |  |
| `ExtContractForPurg` |  | |  |  |  |  |
| `ExtContractItemForPurg` |  | |  |  |  |  |
| `ExtInfoRecordForPurg` |  | |  |  |  |  |
| `ExtPlantForPurg` |  | |  |  |  |  |
| `ExtCompanyCodeForPurg` |  | |  |  |  |  |
| `ExtPurgOrgForPurg` |  | |  |  |  |  |
| `ProcurementHubSourceSystem` |  | |  |  |  |  |
| `ProcmtHubPurReqnItmIsChanged` |  | |  |  |  |  |
| `SSPAuthorExternalBPIdnNumber` |  | |  |  |  |  |
| `SSPReqrUserId` |  | |  |  |  |  |
| `PurReqnSSPRequestor` |  | |  |  |  |  |
| `PurReqnSSPAuthor` |  | |  |  |  |  |
| `IsOnBehalfCart` |  | |  |  |  |  |
| `Subcontractor` |  | |  |  |  |  |
| `PurReqnReceivingCustomer` |  | |  |  |  |  |
| `IsPurReqnCmplt` |  | |  |  |  |  |
| `IsPurReqnOvrlRel` |  | |  |  |  |  |
| `LastChangedDate` |  | |  |  |  |  |
| `ManufacturerMaterial` |  | |  |  |  |  |
| `ManufacturerPartProfile` |  | |  |  |  |  |
| `PurchaseReqnItemUniqueID` |  | |  |  |  |  |
| `PurReqnCmpltnsCat` |  | |  |  |  |  |
| `MaterialOrderUnit` |  | |  |  |  |  |
| `MaterialShortageQuantity` |  | |  |  |  |  |
| `MRPArea` |  | |  |  |  |  |
| `PartialInvoiceDistribution` |  | |  |  |  |  |
| `ProcuringPlant` |  | |  |  |  |  |
| `PurchaseOrderDate` |  | |  |  |  |  |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_PurchaseReqnAcctAssgmt` | | ✓ | | | | |
| `_PurchaseReqnDelivAddress` | | ✓ | | | | |
| `_PurchaseReqnItemText` | | ✓ | | | | |
| `_PurReqn` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Purchase Requisition Item - TP'

@AccessControl.authorizationCheck: #CHECK

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

//@ObjectModel.modelingPattern: #TRANSACTIONAL_PROJECTED_ENTITY
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel: {
    usageType: {
        sizeCategory: #L,
        serviceQuality: #C,
        dataClass:#MIXED
    },
    sapObjectNodeType.name: 'PurchaseRequisitionItem'
  }

@ObjectModel.semanticKey: ['PurchaseRequisition', 'PurchaseRequisitionItem']
@ObjectModel.representativeKey: 'PurchaseRequisitionItem'
@Metadata.ignorePropagatedAnnotations: true

@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

define view entity I_PurchaseReqnItemTP 
  as projection on R_PurchaseRequisitionItemTP as _PurchaseRequisitionItem
{
  @ObjectModel.foreignKey.association: '_PurReqn'
  key PurchaseRequisition,
  key PurchaseRequisitionItem,
      PurchasingDocument,
      PurchasingDocumentItem,
      PurReqnReleaseStatus,
      PurchaseRequisitionType,
      PurchasingDocumentSubtype,
      PurchasingDocumentItemCategory,
      @Semantics.text: true
      PurchaseRequisitionItemText,
      AccountAssignmentCategory,
      Material,
      MaterialGroup,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      RequestedQuantity,
      @ObjectModel.foreignKey.association: '_UnitOfMeasure'
      //@Semantics.unitOfMeasure: true
      BaseUnit,
      @Semantics.amount.currencyCode: 'PurReqnItemCurrency'
      PurchaseRequisitionPrice,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      PurReqnPriceQuantity,
      MaterialGoodsReceiptDuration,
      PurchasingOrganization,
      PurchasingGroup,
      Plant,
      CompanyCode,
      SourceOfSupplyIsAssigned,
      SupplyingPlant,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      OrderedQuantity,
      DeliveryDate,
      ProcessingStatus,
      ExternalApprovalStatus,
      PurchasingInfoRecord,
      Supplier,
      @Semantics.booleanIndicator: true
      IsDeleted,
      FixedSupplier,
      RequisitionerName,
      CreatedByUser,
      PurReqCreationDate,
      @ObjectModel.foreignKey.association: '_Currency'
      //@Semantics.currencyCode: true
      PurReqnItemCurrency,
      MaterialPlannedDeliveryDurn,
      DelivDateCategory,
      MultipleAcctAssgmtDistribution,
      StorageLocation,
      PurchaseContract,
      PurReqnSourceOfSupplyType,
      PurchaseContractItem,
      ConsumptionPosting,
      PurReqnOrigin,
      PurReqnSSPCatalog,
      PurReqnSSPCatalogItem,
      PurReqnSSPCrossCatalogItem,
      PurReqnItemBlockingStatus,
      PurReqnItemBlockingReasonText,
      ItemDeliveryAddressID,
      Language,
      IsClosed,
      ReleaseIsNotCompleted,
      ServicePerformer,
      ProductTypeCode,
      //      PurchaseRequisitionStatus,
      //      ReleaseStrategy,
      PerformancePeriodStartDate,
      PerformancePeriodEndDate,
      PurchaseOrderPriceType,
      SupplierMaterialNumber,
      Batch,
      MaterialRevisionLevel,
      MinRemainingShelfLife,
      @Semantics.amount.currencyCode: 'PurReqnItemCurrency'
      ItemNetAmount,
      TaxCode,
      GoodsReceiptIsExpected,
      InvoiceIsExpected,
      GoodsReceiptIsNonValuated,
      RequirementTracking,
      MRPController,
      PurchaseRequisitionIsFixed,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,
      @Semantics.amount.currencyCode: 'PurReqnItemCurrency'
      ExpectedOverallLimitAmount,
      @Semantics.amount.currencyCode: 'PurReqnItemCurrency'
      OverallLimitAmount,
      PurContractForOverallLimit,
      PurReqnExternalReference,
      PurReqnItemExternalReference,
      PurReqnExternalSystemId,
      ExtMaterialForPurg,
      ExtFixedSupplierForPurg,
      ExtDesiredSupplierForPurg,
      ExtContractForPurg,
      ExtContractItemForPurg,
      ExtInfoRecordForPurg,
      ExtPlantForPurg,
      ExtCompanyCodeForPurg,
      ExtPurgOrgForPurg,
      ProcurementHubSourceSystem,
      //      ProcmtHubBackendBusSyst,
      ProcmtHubPurReqnItmIsChanged,
      SSPAuthorExternalBPIdnNumber,
      SSPReqrUserId,
      PurReqnSSPRequestor,
      PurReqnSSPAuthor,
      @Semantics.booleanIndicator: true
      IsOnBehalfCart,
      Subcontractor,
      PurReqnReceivingCustomer,
      IsPurReqnCmplt,
      IsPurReqnOvrlRel,
      LastChangedDate,
      ManufacturerMaterial,
      ManufacturerPartProfile,
      PurchaseReqnItemUniqueID,
      PurReqnCmpltnsCat,
      MaterialOrderUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      MaterialShortageQuantity,
      MRPArea,
      PartialInvoiceDistribution,
      ProcuringPlant,
      PurchaseOrderDate,
      /* Associations */
      _UnitOfMeasure,
      _Currency,
      _PurchaseReqnAcctAssgmt   : redirected to composition child I_PurchaseReqnAcctAssgmtTP,
      _PurchaseReqnDelivAddress : redirected to composition child I_PurchaseReqnDelivAddrTP,
      _PurchaseReqnItemText     : redirected to composition child I_PurchaseReqnItemTextTP,
      _PurReqn                  : redirected to parent I_PurchaseRequisitionTP


}
```
