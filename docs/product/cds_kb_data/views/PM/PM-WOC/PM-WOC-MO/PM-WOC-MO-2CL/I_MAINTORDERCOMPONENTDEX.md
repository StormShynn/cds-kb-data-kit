---
name: I_MAINTORDERCOMPONENTDEX
description: "Maintordercomponentdex"
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MO
  - interface-view
  - data-extraction
  - component:PM-WOC-MO-2CL
  - lob:Plant Maintenance
---
# I_MAINTORDERCOMPONENTDEX

**Maintordercomponentdex**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Reservation` | ✓ | |  |  |  |  |
| `ReservationItem` | ✓ | |  |  |  |  |
| `ReservationType` | ✓ | |  |  |  |  |
| `MaintenanceOrder` |  | |  |  |  |  |
| `MaintenanceOrderOperation` |  | |  |  |  |  |
| `MaintenanceOrderSubOperation` |  | |  |  |  |  |
| `MaintOrderComponentInternalID` |  | |  |  |  |  |
| `MaintenanceOrderComponent` |  | |  |  |  |  |
| `ResvnPurchasingDocumentNumber` |  | |  |  |  |  |
| `FunctionalLocation` |  | | `_MaintenanceOrderDEX` | `FunctionalLocation` |  |  |
| `Equipment` |  | | `_MaintenanceOrderDEX` | `Equipment` |  |  |
| `Assembly` |  | | `_MaintenanceOrderDEX` | `Assembly` |  |  |
| `MaintenanceActivityType` |  | | `_MaintenanceOrderDEX` | `MaintenanceActivityType` |  |  |
| `MaintenancePlannerGroup` |  | | `_MaintenanceOrderDEX` | `MaintenancePlannerGroup` |  |  |
| `MaintenancePlanningPlant` |  | | `_MaintenanceOrderDEX` | `MaintenancePlanningPlant` |  |  |
| `MaintenanceOrderType` |  | | `_MaintenanceOrderDEX` | `MaintenanceOrderType` |  |  |
| `MaintenancePlant` |  | | `_MaintenanceOrderDEX` | `MaintenancePlant` |  |  |
| `MaintObjectLocAcctAssgmtNmbr` |  | | `_MaintenanceOrderDEX` | `MaintObjectLocAcctAssgmtNmbr` |  |  |
| `CreationDate` |  | | `_MaintenanceOrder._Order` | `CreationDate` |  |  |
| `LastChangeDateTime` |  | | `_MaintenanceOrderDEX` | `LastChangeDateTime` |  |  |
| `MaintOrdProcessPhaseCode` |  | | `_MaintenanceOrderDEX` | `MaintOrdProcessPhaseCode` |  |  |
| `MaintOrdProcessSubPhaseCode` |  | | `_MaintenanceOrderDEX` | `MaintOrdProcessSubPhaseCode` |  |  |
| `LatestAcceptableCompletionDate` |  | | `_MaintenanceOrderDEX` | `LatestAcceptableCompletionDate` |  |  |
| `PrevLtstAccptblCompletionDate` |  | | `_MaintenanceOrder` | `PrevLtstAccptblCompletionDate` |  |  |
| `MaintOrderProcessingContext` |  | | `_MaintenanceOrderDEX` | `MaintOrderProcessingContext` |  |  |
| `ReservationIsFinallyIssued` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `StorageLocation` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `ComponentDescription` |  | |  |  |  |  |
| `MaintComponentItemCategory` |  | |  |  |  |  |
| `MaintOrdOpCompRequisitioner` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `RequirementQuantityInBaseUnit` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `QuantityInUnitOfEntry` |  | |  |  |  |  |
| `UnitOfEntry` |  | |  |  |  |  |
| `MaintOrderCompDebitCreditCode` |  | |  |  |  |  |
| `PurReqnOrResvnGeneration` |  | |  |  |  |  |
| `MaterialCompIsProcuredDirectly` |  | |  |  |  |  |
| `RequirementDate` |  | |  |  |  |  |
| `RequirementTime` |  | |  |  |  |  |
| `ProductTypeCode` |  | |  |  |  |  |
| `ServicePerformer` |  | |  |  |  |  |
| `PerformancePeriodStartDate` |  | |  |  |  |  |
| `PerformancePeriodEndDate` |  | |  |  |  |  |
| `PerformancePeriodStartTime` |  | |  |  |  |  |
| `PerformancePeriodEndTime` |  | |  |  |  |  |
| `LeanServiceDuration` |  | |  |  |  |  |
| `LeanServiceDurationUnit` |  | |  |  |  |  |
| `DistributionFunction` |  | |  |  |  |  |
| `MaintOrdCompDeliveryDateAdjmt` |  | |  |  |  |  |
| `SrvcSchedgIsAlignedWthOpWrkCtr` |  | |  |  |  |  |
| `PurchaseRequisition` |  | |  |  |  |  |
| `PurchaseRequisitionItem` |  | |  |  |  |  |
| `MaintOrderRoutingNumber` |  | |  |  |  |  |
| `MaintOrderOperationCounter` |  | |  |  |  |  |
| `GoodsMovementType` |  | |  |  |  |  |
| `GoodsMovementIsAllowed` |  | |  |  |  |  |
| `MaintenanceOrderComponentBatch` |  | |  |  |  |  |
| `MaintOrdOpComponentGLAccount` |  | |  |  |  |  |
| `MaintOrdOpCompCostingRelevancy` |  | |  |  |  |  |
| `MaintCompAltvProdUsgeRateInPct` |  | |  |  |  |  |
| `MaintOrderOpComponentSortText` |  | |  |  |  |  |
| `MaintOrdOpCompIsBulkProduct` |  | |  |  |  |  |
| `MaterialProvisionType` |  | |  |  |  |  |
| `MaintOrdOpCompAssgdWBSElmntInt` |  | |  |  |  |  |
| `WBSElement` |  | |  | `cast ( _MaintenanceOrder._WBSElement.WBSElement as vdm_ps_posid preserving type )` |  |  |
| `MaintOrderOpComponentPrice` |  | |  |  |  |  |
| `MaintOrdOpCompPriceUnitQty` |  | |  |  |  |  |
| `MatlCompIsMarkedForBackflush` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `DeliveryTimeInDays` |  | |  |  |  |  |
| `MaintOrdOpCompGdsRecipientName` |  | |  |  |  |  |
| `MaintOrdOpCompUnloadingPtTxt` |  | |  |  |  |  |
| `GoodsReceiptDurationInWorkDays` |  | |  |  |  |  |
| `PurchasingInfoRecord` |  | |  |  |  |  |
| `OperationLeadTimeOffset` |  | |  |  |  |  |
| `OpsLeadTimeOffsetUnit` |  | |  |  |  |  |
| `ResponsiblePurchaseOrg` |  | |  |  |  |  |
| `MaintOrdCompPurOutlineAgrmtItm` |  | |  |  |  |  |
| `IsDeleted` |  | |  |  |  |  |
| `ControllingArea` |  | | `_MaintenanceOrderDEX` | `ControllingArea` |  |  |
| `ResponsibleCostCenter` |  | | `_MaintenanceOrderDEX` | `ResponsibleCostCenter` |  |  |
| `OverallLimitAmount` |  | |  |  |  |  |
| `ExpectedOverallLimitAmount` |  | |  |  |  |  |
| `QuantityIsFixed` |  | |  |  |  |  |
| `MaintOrdOpComponentCurrency` |  | |  |  |  |  |
| `MaintOrdOpCompProcmtTrckgNmbr` |  | |  |  |  |  |
| `MaintOrdOpCompSpecialStockType` |  | |  |  |  |  |
| `VariableSizeDimension1` |  | |  |  |  |  |
| `VariableSizeDimensionUnit` |  | |  |  |  |  |
| `VariableSizeCompFormulaKey` |  | |  |  |  |  |
| `VariableSizeDimension2` |  | |  |  |  |  |
| `NumberOfVariableSizeItem` |  | |  |  |  |  |
| `VariableSizeDimension3` |  | |  |  |  |  |
| `VariableSizeItemQuantity` |  | |  |  |  |  |
| `VariableSizeComponentUnit` |  | |  |  |  |  |
| `RqmtDateIsEnteredManually` |  | |  |  |  |  |
| `SupplierProduct` |  | |  |  |  |  |
| `MaintOrdCompCmtdQtyIsKept` |  | |  |  |  |  |
| `MaintOrdOpCompPurOutlineAgrmt` |  | |  |  |  |  |
| `MaintOrdOpCompProcmtCatalog` |  | |  |  |  |  |
| `MaintOrdOpCompProcmtCatalogItm` |  | |  |  |  |  |
| `QuantityWithdrawnInBaseUnit` |  | |  |  |  |  |
| `ConfirmedAvailableQuantity` |  | |  |  |  |  |
| `RecipientLocationCode` |  | | `_ReservationItem` | `RecipientLocationCode` |  |  |
| `_MaintenanceOrderDEX` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MaintenanceOrderDEX` | `I_MaintenanceOrderDEX` | [0..1] |
| `_MaintenanceOrderExtension` | `E_MaintenanceOrder` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Maintenance Order Component Data'
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #COMPOSITE
@VDM.usage.type: [ #TRANSACTIONAL_PROCESSING_SERVICE ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.usageType: {serviceQuality: #D, sizeCategory: #XL, dataClass: #MIXED}
@ObjectModel.supportedCapabilities:[ #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'MaintenanceOrder'
@Analytics: {
  dataCategory: #FACT,
  dataExtraction: {
    enabled: true,
        delta.changeDataCapture: {
            mapping:[
                      {
                        table: 'RESB', role: #MAIN,
                        viewElement: ['Reservation','ReservationItem','ReservationType'],
                        tableElement: ['RSNUM', 'RSPOS', 'RSART']
                      },
                      {
                        table: 'AUFK', role: #LEFT_OUTER_TO_ONE_JOIN,
                        viewElement: ['MaintenanceOrder'],
                        tableElement: ['AUFNR']
                      },
                      {
                        table: 'rsdb', role: #LEFT_OUTER_TO_ONE_JOIN,
                        viewElement: ['Reservation','ReservationItem','ReservationType','ResvnPurchasingDocumentNumber'],
                        tableElement: ['RSNUM', 'RSPOS', 'RSART', 'RSINZ']
                      },
                      {
                        table: 'rsadd', role:  #LEFT_OUTER_TO_ONE_JOIN,
                        viewElement: ['Reservation','ReservationItem','ReservationType'],
                        tableElement: ['RSNUM', 'RSPOS', 'RSART']
                      }
                    ]
                 }
              }
          }
@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'ORI',
  dataSources: ['_MaintenanceOrderExtension'],
  quota: {
    maximumFields: 250,
    maximumBytes: 5000
  }
}


define view entity I_MaintOrderComponentDEX
  as select from I_MaintenanceOrderComponent_2 as _MaintenanceOrderComponent
  association [0..1] to I_MaintenanceOrderDEX as _MaintenanceOrderDEX       on _MaintenanceOrderComponent.MaintenanceOrder = _MaintenanceOrderDEX.MaintenanceOrder
  -- Extensions, do not expose as association:
  association [0..1] to E_MaintenanceOrder    as _MaintenanceOrderExtension on _MaintenanceOrderComponent.MaintenanceOrder = _MaintenanceOrderExtension.MaintenanceOrder
{
      //keys as underlying main table resb
  key Reservation,
  key ReservationItem,
  key ReservationType,

      //exposing additional keys
      MaintenanceOrder,
      MaintenanceOrderOperation,
      MaintenanceOrderSubOperation,
      MaintOrderComponentInternalID,

      MaintenanceOrderComponent,
      @Consumption.hidden: true
      ResvnPurchasingDocumentNumber,

      // Order Header:
      _MaintenanceOrderDEX.FunctionalLocation                                           as FunctionalLocation,
      _MaintenanceOrderDEX.Equipment                                                    as Equipment,
      _MaintenanceOrderDEX.Assembly                                                     as Assembly,
      _MaintenanceOrderDEX.MaintenanceActivityType                                      as MaintenanceActivityType,
      _MaintenanceOrderDEX.MaintenancePlannerGroup                                      as MaintenancePlannerGroup,
      _MaintenanceOrderDEX.MaintenancePlanningPlant                                     as MaintenancePlanningPlant,
      _MaintenanceOrderDEX.MaintenanceOrderType                                         as MaintenanceOrderType,
      _MaintenanceOrderDEX.MaintenancePlant                                             as MaintenancePlant,
      _MaintenanceOrderDEX.MaintObjectLocAcctAssgmtNmbr                                 as MaintObjectLocAcctAssgmtNmbr,

      @Semantics.systemDate.createdAt: true
      _MaintenanceOrder._Order.CreationDate,
      @Semantics.systemDateTime.lastChangedAt: true
      _MaintenanceOrderDEX.LastChangeDateTime,

      _MaintenanceOrderDEX.MaintOrdProcessPhaseCode                                        as MaintOrdProcessPhaseCode,
      _MaintenanceOrderDEX.MaintOrdProcessSubPhaseCode                                     as MaintOrdProcessSubPhaseCode,
      _MaintenanceOrderDEX.LatestAcceptableCompletionDate                                  as LatestAcceptableCompletionDate,
      _MaintenanceOrder.PrevLtstAccptblCompletionDate                                   as PrevLtstAccptblCompletionDate,
      _MaintenanceOrderDEX.MaintOrderProcessingContext                                     as MaintOrderProcessingContext,

      //Reservation and other
      ReservationIsFinallyIssued,
      Plant,
      StorageLocation,
      Material,
      ComponentDescription,
      MaintComponentItemCategory,
      MaintOrdOpCompRequisitioner,
      MaterialGroup,
      Supplier,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      RequirementQuantityInBaseUnit,
      BaseUnit,
      @Semantics.quantity.unitOfMeasure: 'UnitOfEntry'
      QuantityInUnitOfEntry,
      UnitOfEntry,
      MaintOrderCompDebitCreditCode,
      @Semantics.booleanIndicator: true
      PurReqnOrResvnGeneration,
      MaterialCompIsProcuredDirectly,
      RequirementDate,
      RequirementTime,
      ProductTypeCode,
      ServicePerformer,
      PerformancePeriodStartDate,
      PerformancePeriodEndDate,
      PerformancePeriodStartTime,
      PerformancePeriodEndTime,
      @Semantics.quantity.unitOfMeasure: 'LeanServiceDurationUnit'
      LeanServiceDuration,
      LeanServiceDurationUnit,
      DistributionFunction,
      MaintOrdCompDeliveryDateAdjmt,
      SrvcSchedgIsAlignedWthOpWrkCtr,
      PurchaseRequisition,
      PurchaseRequisitionItem,
      MaintOrderRoutingNumber,
      MaintOrderOperationCounter,
      GoodsMovementType,
      GoodsMovementIsAllowed,

      MaintenanceOrderComponentBatch,
      MaintOrdOpComponentGLAccount,
      MaintOrdOpCompCostingRelevancy,
      MaintCompAltvProdUsgeRateInPct,
      MaintOrderOpComponentSortText,
      MaintOrdOpCompIsBulkProduct,
      MaterialProvisionType,
      MaintOrdOpCompAssgdWBSElmntInt,
      cast ( _MaintenanceOrder._WBSElement.WBSElement as vdm_ps_posid preserving type ) as WBSElement,

      @Semantics.amount.currencyCode: 'MaintOrdOpComponentCurrency'
      MaintOrderOpComponentPrice,

      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      MaintOrdOpCompPriceUnitQty,
      MatlCompIsMarkedForBackflush,
      PurchasingGroup,
      DeliveryTimeInDays,
      MaintOrdOpCompGdsRecipientName,
      MaintOrdOpCompUnloadingPtTxt,
      GoodsReceiptDurationInWorkDays,
      PurchasingInfoRecord,
      OperationLeadTimeOffset,
      OpsLeadTimeOffsetUnit,
      ResponsiblePurchaseOrg,

      MaintOrdCompPurOutlineAgrmtItm,
      IsDeleted,
      _MaintenanceOrderDEX.ControllingArea,
      _MaintenanceOrderDEX.ResponsibleCostCenter,

      @Semantics.amount.currencyCode: 'MaintOrdOpComponentCurrency'
      OverallLimitAmount,
      @Semantics.amount.currencyCode: 'MaintOrdOpComponentCurrency'
      ExpectedOverallLimitAmount,

      QuantityIsFixed,
      MaintOrdOpComponentCurrency,
      MaintOrdOpCompProcmtTrckgNmbr,
      MaintOrdOpCompSpecialStockType,

      @Semantics.quantity.unitOfMeasure: 'VariableSizeDimensionUnit'
      VariableSizeDimension1,
      VariableSizeDimensionUnit,
      VariableSizeCompFormulaKey,
      @Semantics.quantity.unitOfMeasure: 'VariableSizeDimensionUnit'
      VariableSizeDimension2,
      NumberOfVariableSizeItem,
      @Semantics.quantity.unitOfMeasure: 'VariableSizeDimensionUnit'
      VariableSizeDimension3,
      @Semantics.quantity.unitOfMeasure: 'VariableSizeComponentUnit'
      VariableSizeItemQuantity,
      VariableSizeComponentUnit,

      RqmtDateIsEnteredManually,
      SupplierProduct,
      MaintOrdCompCmtdQtyIsKept,
      MaintOrdOpCompPurOutlineAgrmt,
      MaintOrdOpCompProcmtCatalog,
      MaintOrdOpCompProcmtCatalogItm,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      QuantityWithdrawnInBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      ConfirmedAvailableQuantity,
      _ReservationItem.RecipientLocationCode,

      // For DCL:
      _MaintenanceOrderDEX

}
where
  _StatusObjectActiveStatus [1: StatusCode = 'I0013'].StatusCode is null // mark for deletion based on system status
//and IsDeleted
```
