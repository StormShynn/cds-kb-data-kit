---
name: I_PRMTHBRPLDPURREQNITEMAPI01
description: Prmthbrpldpurreqnitemapi 01
app_component: MM-PUR-HUB-PR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-HUB
  - interface-view
  - item-level
  - component:MM-PUR-HUB-PR-2CL
  - lob:Sourcing & Procurement
---
# I_PRMTHBRPLDPURREQNITEMAPI01

**Prmthbrpldpurreqnitemapi 01**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-PR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ProcmtHubPurchaseRequisition` | `ProcmtHubPurchaseRequisition` |
| key `ProcmtHubPurRequisitionItem` | `ProcmtHubPurRequisitionItem` |
| key `ProcurementHubSourceSystem` | `ProcurementHubSourceSystem` |
| `ProcmtHubPurRequisitionType` | `ProcmtHubPurRequisitionType` |
| `ProcessingStatus` | `ProcessingStatus` |
| `ProcmtHubPurchasingGroup` | `ProcmtHubPurchasingGroup` |
| `PurchaseRequisitionItemText` | `PurchaseRequisitionItemText` |
| `ProcmtHubProduct` | `ProcmtHubProduct` |
| `ProcmtHubPlant` | `ProcmtHubPlant` |
| `ProcmtHubProductGroup` | `ProcmtHubProductGroup` |
| `RequestedQuantity` | `RequestedQuantity` |
| `BaseUnit` | `BaseUnit` |
| `DeliveryDate` | `DeliveryDate` |
| `CreationDate` | `CreationDate` |
| `PurchaseRequisitionPrice` | `PurchaseRequisitionPrice` |
| `IsDeleted` | `IsDeleted` |
| `ProcmtHubAcctAssgmtCategory` | `ProcmtHubAcctAssgmtCategory` |
| `ProcmtHubPurgDocItmCategory` | `ProcmtHubPurgDocItmCategory` |
| `GoodsReceiptIsExpected` | `GoodsReceiptIsExpected` |
| `InvoiceIsExpected` | `InvoiceIsExpected` |
| `ProcmtHubSupplier` | `ProcmtHubSupplier` |
| `ProcmtHubFixedSupplier` | `ProcmtHubFixedSupplier` |
| `PurReqnItemCurrency` | `PurReqnItemCurrency` |
| `IsPurReqnBlocked` | `IsPurReqnBlocked` |
| `ProductType` | `ProductType` |
| `RequisitionerName` | `RequisitionerName` |
| `ProcmtHubCreatedByUser` | `ProcmtHubCreatedByUser` |
| `PurchaseRequisitionIsFixed` | `PurchaseRequisitionIsFixed` |
| `LastChangedDate` | `LastChangedDate` |
| `ProcmtHubSupplierProductNumber` | `ProcmtHubSupplierProductNumber` |
| `ProcmtHubBatch` | `ProcmtHubBatch` |
| `ProcmtHubRequirementTracking` | `ProcmtHubRequirementTracking` |
| `PurReqnItemBlockingReason` | `PurReqnItemBlockingReason` |
| `MaterialRevisionLevel` | `cast(MaterialRevisionLevel as revlv)` |
| `MaterialRevisionLevel_2` | `MaterialRevisionLevel` |
| `IsClosed` | `IsClosed` |
| `MaterialPlannedDeliveryDurn` | `MaterialPlannedDeliveryDurn` |
| `MaterialGoodsReceiptDuration` | `MaterialGoodsReceiptDuration` |
| `PurchaseOrderPriceType` | `PurchaseOrderPriceType` |
| `GoodsReceiptIsNonValuated` | `GoodsReceiptIsNonValuated` |
| `ProcmtHubSupplyingPlant` | `ProcmtHubSupplyingPlant` |
| `ProcmtHubPurchaseContract` | `ProcmtHubPurchaseContract` |
| `ProcmtHubPurchaseContractItem` | `ProcmtHubPurchaseContractItem` |
| `ProcmtHubPurchasingInfoRecord` | `ProcmtHubPurchasingInfoRecord` |
| `ProcmtHubMRPController` | `ProcmtHubMRPController` |
| `PurReqnOrigin` | `PurReqnOrigin` |
| `ProcmtHubPurchasingOrg` | `ProcmtHubPurchasingOrg` |
| `ServicePerformer` | `ServicePerformer` |
| `PerformancePeriodStartDate` | `PerformancePeriodStartDate` |
| `PerformancePeriodEndDate` | `PerformancePeriodEndDate` |
| `PurchaseRequisitionReleaseDate` | `PurchaseRequisitionReleaseDate` |
| `OrderedQuantity` | `OrderedQuantity` |
| `PurReqnPriceQuantity` | `PurReqnPriceQuantity` |
| `ProcmtHubCompanyCode` | `ProcmtHubCompanyCode` |
| `PurReqnReleaseStatus` | `PurReqnReleaseStatus` |
| `PreferredSupplierName` | `PreferredSupplierName` |
| `ProcmtHubSupplierName` | `ProcmtHubSupplierName` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `ProcmtHubServicePackage` | `ProcmtHubServicePackage` |
| `StorageLocation` | `StorageLocation` |
| `ItemNetAmount` | `case when PurReqnPriceQuantity = 0 then cast( RequestedQuantity * PurchaseRequisitionPrice as abap.curr(21,2)) when ProcmtHubPurgDocItmCategory = 'A' then ExpectedOverallLimitAmount else cast( division(RequestedQuantity * PurchaseRequisitionPrice , PurReqnPriceQuantity, 2) as abap.curr(21,2)) end` |
| `ExpectedOverallLimitAmount` | `ExpectedOverallLimitAmount` |
| `OverallLimitAmount` | `OverallLimitAmount` |
| `PurContractForOverallLimit` | `PurContractForOverallLimit` |
| `PurContractItemForOverallLimit` | `PurContractItemForOverallLimit` |
| `ConsumptionPosting` | `ConsumptionPosting` |
| `SourceOfSupplyIsAssigned` | `SourceOfSupplyIsAssigned` |
| `UserDescription` | `UserDescription` |
| `IsEndOfPurposeBlocked` | `IsEndOfPurposeBlocked` |
| `HasAttachment` | `HasAttachment` |
| `HasNote` | `HasNote` |
| `PurchaseReqnItemUniqueID` | `PurchaseReqnItemUniqueID` |
| `PurReqnExternalSystemId` | `PurReqnExternalSystemId` |
| `PurReqnCmpltnsCat` | `PurReqnCmpltnsCat` |
| `ItemDeliveryAddressID` | `ItemDeliveryAddressID` |
| `ProcmtHubPurgObjCtrlInd` | `ProcmtHubPurgObjCtrlInd` |
| `ProcmtHubPrpsdFllwOnDoc` | `ProcmtHubPrpsdFllwOnDoc` |
| `ProcmtHubPrpsdFllwOnDocCat` | `ProcmtHubPrpsdFllwOnDocCat` |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PrmtHbRpldPurchaseReqnItem` | `E_PrmtHbRpldPurchaseReqnItem` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRMTHBPRITAPI01'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking : #REQUIRED
@EndUserText.label: 'Replicated Purchase Requisition Item'
@ObjectModel.semanticKey:['ProcmtHubPurchaseRequisition', 'ProcmtHubPurRequisitionItem','ProcurementHubSourceSystem']
@VDM.viewType: #COMPOSITE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: #SQL_DATA_SOURCE
@ObjectModel.modelingPattern : #NONE
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.preserveKey:true
define view I_PrmtHbRpldPurReqnItemAPI01
  as select from I_PrmtHbRpldPurchaseReqnItem 
  association [1..1] to E_PrmtHbRpldPurchaseReqnItem  as _PrmtHbRpldPurchaseReqnItem on  _PrmtHbRpldPurchaseReqnItem.ProcmtHubPurchaseRequisition = $projection.ProcmtHubPurchaseRequisition
                                                                                        and _PrmtHbRpldPurchaseReqnItem.ProcmtHubPurRequisitionItem = $projection.ProcmtHubPurRequisitionItem
                                                                                        and _PrmtHbRpldPurchaseReqnItem.ProcurementHubSourceSystem = $projection.ProcurementHubSourceSystem      
{
  key ProcmtHubPurchaseRequisition,
  key ProcmtHubPurRequisitionItem,
  key ProcurementHubSourceSystem,
      ProcmtHubPurRequisitionType,
      ProcessingStatus,
      ProcmtHubPurchasingGroup,
      PurchaseRequisitionItemText,
      ProcmtHubProduct,
      ProcmtHubPlant,
      ProcmtHubProductGroup,
      @Semantics.quantity.unitOfMeasure : 'BaseUnit'
      RequestedQuantity,
      @Semantics.unitOfMeasure: true
      BaseUnit,
      DeliveryDate,
      CreationDate,
      @Semantics.amount.currencyCode: 'PurReqnItemCurrency'
      PurchaseRequisitionPrice,
      IsDeleted,
      ProcmtHubAcctAssgmtCategory,
      ProcmtHubPurgDocItmCategory,
      GoodsReceiptIsExpected,
      InvoiceIsExpected,
      ProcmtHubSupplier,
      ProcmtHubFixedSupplier,
      @Semantics.currencyCode: true
      PurReqnItemCurrency,
      IsPurReqnBlocked,
      ProductType,
      RequisitionerName,
      ProcmtHubCreatedByUser,
      PurchaseRequisitionIsFixed,
      LastChangedDate,
      ProcmtHubSupplierProductNumber,
      ProcmtHubBatch,
      ProcmtHubRequirementTracking,
      PurReqnItemBlockingReason,
      // Clean-Up VDM conversion exit
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'MaterialRevisionLevel_2'
      cast(MaterialRevisionLevel as revlv) as MaterialRevisionLevel,
      MaterialRevisionLevel as MaterialRevisionLevel_2,
     // MaterialRevisionLevel,
      IsClosed,
      MaterialPlannedDeliveryDurn,
      MaterialGoodsReceiptDuration,
      PurchaseOrderPriceType,
      GoodsReceiptIsNonValuated,
      ProcmtHubSupplyingPlant,
      ProcmtHubPurchaseContract,
      ProcmtHubPurchaseContractItem,
      ProcmtHubPurchasingInfoRecord,
      ProcmtHubMRPController,
      PurReqnOrigin,
      ProcmtHubPurchasingOrg,
      ServicePerformer,
      PerformancePeriodStartDate,
      PerformancePeriodEndDate,
      PurchaseRequisitionReleaseDate,
      @Semantics.quantity.unitOfMeasure : 'BaseUnit'
      OrderedQuantity,
      @Semantics.quantity.unitOfMeasure : 'BaseUnit'
      PurReqnPriceQuantity,
      ProcmtHubCompanyCode,
      PurReqnReleaseStatus,
      PreferredSupplierName,
      ProcmtHubSupplierName,
      LastChangeDateTime,
      ProcmtHubServicePackage,
      StorageLocation,
      @Semantics.amount.currencyCode: 'PurReqnItemCurrency'
      case
            when PurReqnPriceQuantity = 0
                 then cast( RequestedQuantity * PurchaseRequisitionPrice as abap.curr(21,2))

              when ProcmtHubPurgDocItmCategory = 'A'
                  then ExpectedOverallLimitAmount
              else
                  cast( division(RequestedQuantity * PurchaseRequisitionPrice , PurReqnPriceQuantity, 2) as abap.curr(21,2))
           end                                                    as   ItemNetAmount,
      @Semantics.amount.currencyCode: 'PurReqnItemCurrency'
      ExpectedOverallLimitAmount,
      @Semantics.amount.currencyCode: 'PurReqnItemCurrency'
      OverallLimitAmount,
      PurContractForOverallLimit,
      PurContractItemForOverallLimit,
      ConsumptionPosting,
      SourceOfSupplyIsAssigned,
      UserDescription,
      IsEndOfPurposeBlocked,
      HasAttachment,
      HasNote,
      PurchaseReqnItemUniqueID,
      PurReqnExternalSystemId,
      PurReqnCmpltnsCat,
      ItemDeliveryAddressID,
      ProcmtHubPurgObjCtrlInd,
      
      ProcmtHubPrpsdFllwOnDoc,
      ProcmtHubPrpsdFllwOnDocCat
}
```
