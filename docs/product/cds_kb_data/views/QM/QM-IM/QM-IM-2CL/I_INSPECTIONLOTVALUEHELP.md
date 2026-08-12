---
name: I_INSPECTIONLOTVALUEHELP
description: "Inspectionlotvaluehelp"
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-IM
  - interface-view
  - value-help
  - inspection
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_INSPECTIONLOTVALUEHELP

**Inspectionlotvaluehelp**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
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
| `InspectionLot` | ✓ | | `_insplots` | `InspectionLot` |  |  |
| `InspectionOperation` | ✓ | |  |  |  |  |
| `InspectionCharacteristic` | ✓ | |  |  |  |  |
| `Material` |  | | `_insplots` | `Material` |  |  |
| `Batch` |  | | `_insplots` | `Batch` |  |  |
| `Plant` |  | | `_insplots` | `Plant` |  |  |
| `InspectionLotOrigin` |  | | `_insplots` | `InspectionLotOrigin` |  |  |
| `ManufacturingOrder` |  | | `_insplots` | `ManufacturingOrder` |  |  |
| `InspectionLotText` |  | | `_insplots` | `InspectionLotText` |  |  |
| `InspectionLotType` |  | | `_insplots` | `InspectionLotType` |  |  |
| `InspectionLotQuantity` |  | | `_insplots` | `InspectionLotQuantity` |  |  |
| `InspectionLotQuantityUnit` |  | | `_insplots` | `InspectionLotQuantityUnit` |  |  |
| `InspLotCreatedOnLocalDate` |  | |  | `cast(_insplots.InspLotCreatedOnLocalDate as abap.char( 8 ))` |  |  |
| `InspectionLotHasUsageDecision` |  | | `_insplots` | `InspectionLotHasUsageDecision` |  |  |
| `InspLotNmbrOpenLongTermCharc` |  | | `_insplots` | `InspLotNmbrOpenLongTermCharc` |  |  |
| `InspectionLotObjectText` |  | | `_insplots` | `InspectionLotObjectText` |  |  |
| `GoodsReceiptIsMovedToBlkdStock` |  | | `_insplots` | `GoodsReceiptIsMovedToBlkdStock` |  |  |
| `InspectionLotHasQuantity` |  | | `_insplots` | `InspectionLotHasQuantity` |  |  |
| `InspectionLotHasPartialLots` |  | | `_insplots` | `InspectionLotHasPartialLots` |  |  |
| `InspLotIsDocumentationRequired` |  | | `_insplots` | `InspLotIsDocumentationRequired` |  |  |
| `InspectionLotApproval` |  | | `_insplots` | `InspectionLotApproval` |  |  |
| `InspLotDigitalSgntrInUsgeDcsn` |  | | `_insplots` | `InspLotDigitalSgntrInUsgeDcsn` |  |  |
| `InspectionLotIsSkipped` |  | | `_insplots` | `InspectionLotIsSkipped` |  |  |
| `InspectionLotIsFullInspection` |  | | `_insplots` | `InspectionLotIsFullInspection` |  |  |
| `InspLotCreatedOnLocalTime` |  | |  | `cast(_insplots.InspLotCreatedOnLocalTime as abap.char( 6 ))` |  |  |
| `InspectionLotCreatedBy` |  | | `_insplots` | `InspectionLotCreatedBy` |  |  |
| `InspectionLotCreatedOn` |  | |  | `cast(_insplots.InspectionLotCreatedOn as abap.char( 8 ))` |  |  |
| `InspectionLotCreatedOnTime` |  | |  | `cast(_insplots.InspectionLotCreatedOnTime as abap.char( 6 ))` |  |  |
| `InspectionLotChangedBy` |  | | `_insplots` | `InspectionLotChangedBy` |  |  |
| `InspectionLotChangeDate` |  | |  | `cast(_insplots.InspectionLotChangeDate as abap.char( 8 ))` |  |  |
| `InspectionLotChangeTime` |  | |  | `cast(_insplots.InspectionLotChangeTime as abap.char( 6 ))` |  |  |
| `InspectionLotStartDate` |  | |  | `cast(_insplots.InspectionLotStartDate as abap.char( 8 ))` |  |  |
| `InspectionLotStartTime` |  | |  | `cast(_insplots.InspectionLotStartTime as abap.char( 6 ))` |  |  |
| `InspectionLotEndDate` |  | |  | `cast(_insplots.InspectionLotEndDate as abap.char( 8 ))` |  |  |
| `InspectionLotEndTime` |  | |  | `cast(_insplots.InspectionLotEndTime as abap.char( 6 ))` |  |  |
| `BillOfOperationsType` |  | | `_insplots` | `BillOfOperationsType` |  |  |
| `BillOfOperationsGroup` |  | | `_insplots` | `BillOfOperationsGroup` |  |  |
| `BillOfOperationsUsage` |  | | `_insplots` | `BillOfOperationsUsage` |  |  |
| `BillOfOperationsVariant` |  | | `_insplots` | `BillOfOperationsVariant` |  |  |
| `SmplDrawingProcedure` |  | | `_insplots` | `SmplDrawingProcedure` |  |  |
| `SmplDrwgProcedIsConfRequired` |  | | `_insplots` | `SmplDrwgProcedIsConfRequired` |  |  |
| `InspLotSelectionValidFromDate` |  | |  | `cast(_insplots.InspLotSelectionValidFromDate as abap.char( 8 ))` |  |  |
| `ProductionVersion` |  | | `_insplots` | `ProductionVersion` |  |  |
| `Customer` |  | | `_insplots` | `Customer` |  |  |
| `Supplier` |  | | `_insplots` | `Supplier` |  |  |
| `Manufacturer` |  | | `_insplots` | `Manufacturer` |  |  |
| `ManufacturerPartNmbr` |  | | `_insplots` | `ManufacturerPartNmbr` |  |  |
| `MaterialRevisionLevel` |  | | `_insplots` | `MaterialRevisionLevel` |  |  |
| `MaterialIsBatchManaged` |  | | `_insplots` | `MaterialIsBatchManaged` |  |  |
| `BatchStorageLocation` |  | | `_insplots` | `BatchStorageLocation` |  |  |
| `MaterialCompIsSpecialStock` |  | | `_insplots` | `MaterialCompIsSpecialStock` |  |  |
| `PurchasingOrganization` |  | | `_insplots` | `PurchasingOrganization` |  |  |
| `PurchasingDocument` |  | | `_insplots` | `PurchasingDocument` |  |  |
| `AccountingDocumentType` |  | | `_insplots` | `AccountingDocumentType` |  |  |
| `MaterialDocumentYear` |  | | `_insplots` | `MaterialDocumentYear` |  |  |
| `MaterialDocument` |  | | `_insplots` | `MaterialDocument` |  |  |
| `MatlDocLatestPostgDate` |  | |  | `cast(_insplots.MatlDocLatestPostgDate as abap.char( 8 ))` |  |  |
| `GoodsMovementType` |  | | `_insplots` | `GoodsMovementType` |  |  |
| `InspectionLotPlant` |  | | `_insplots` | `InspectionLotPlant` |  |  |
| `InspectionLotStorageLocation` |  | | `_insplots` | `InspectionLotStorageLocation` |  |  |
| `Warehouse` |  | | `_insplots` | `Warehouse` |  |  |
| `StorageType` |  | | `_insplots` | `StorageType` |  |  |
| `StorageBin` |  | | `_insplots` | `StorageBin` |  |  |
| `SalesOrder` |  | | `_insplots` | `SalesOrder` |  |  |
| `DeliveryDocument` |  | | `_insplots` | `DeliveryDocument` |  |  |
| `DeliveryCategory` |  | | `_insplots` | `DeliveryCategory` |  |  |
| `InspectionDeliveryCategory` |  | | `_insplots` | `InspectionDeliveryCategory` |  |  |
| `Route` |  | | `_insplots` | `Route` |  |  |
| `BillToPartyCountry` |  | | `_insplots` | `BillToPartyCountry` |  |  |
| `SoldToParty` |  | | `_insplots` | `SoldToParty` |  |  |
| `SalesOrganization` |  | | `_insplots` | `SalesOrganization` |  |  |
| `MaterialByCustomer` |  | | `_insplots` | `MaterialByCustomer` |  |  |
| `InspLotNmbrAddlRecordedCharc` |  | | `_insplots` | `InspLotNmbrAddlRecordedCharc` |  |  |
| `InspLotNmbrOpenShortTermCharc` |  | | `_insplots` | `InspLotNmbrOpenShortTermCharc` |  |  |
| `InspectionDynamicStage` |  | | `_insplots` | `InspectionDynamicStage` |  |  |
| `InspectionSeverity` |  | | `_insplots` | `InspectionSeverity` |  |  |
| `QualityCostCollector` |  | | `_insplots` | `QualityCostCollector` |  |  |
| `CostCenter` |  | | `_insplots` | `CostCenter` |  |  |
| `SalesOrdStockWBSElement` |  | | `_insplots` | `SalesOrdStockWBSElement` |  |  |
| `ProfitCenter` |  | | `_insplots` | `ProfitCenter` |  |  |
| `BusinessArea` |  | | `_insplots` | `BusinessArea` |  |  |
| `GLAccount` |  | | `_insplots` | `GLAccount` |  |  |
| `ControllingArea` |  | | `_insplots` | `ControllingArea` |  |  |
| `CompanyCode` |  | | `_insplots` | `CompanyCode` |  |  |
| `SerialNumberProfile` |  | | `_insplots` | `SerialNumberProfile` |  |  |
| `NumberOfSerialNumbers` |  | | `_insplots` | `NumberOfSerialNumbers` |  |  |
| `InspLotIsSerialNmbrPossible` |  | | `_insplots` | `InspLotIsSerialNmbrPossible` |  |  |
| `BatchBySupplier` |  | | `_insplots` | `BatchBySupplier` |  |  |
| `InspLotIsAutomUsgeDcsnPossible` |  | | `_insplots` | `InspLotIsAutomUsgeDcsnPossible` |  |  |
| `InspLotHasConfignSpecification` |  | | `_insplots` | `InspLotHasConfignSpecification` |  |  |
| `InspLotIsTaskListRequired` |  | | `_insplots` | `InspLotIsTaskListRequired` |  |  |
| `InspLotHasManualSampleSize` |  | | `_insplots` | `InspLotHasManualSampleSize` |  |  |
| `InspLotHasMaterialSpec` |  | | `_insplots` | `InspLotHasMaterialSpec` |  |  |
| `InspLotDigitalSgntrResultsRecg` |  | | `_insplots` | `InspLotDigitalSgntrResultsRecg` |  |  |
| `InspLotIsBatchRequired` |  | | `_insplots` | `InspLotIsBatchRequired` |  |  |
| `InspLotIsStockPostingCompleted` |  | | `_insplots` | `InspLotIsStockPostingCompleted` |  |  |
| `MatlQualityAuthorizationGroup` |  | | `_insplots` | `MatlQualityAuthorizationGroup` |  |  |
| `IsBusinessPurposeCompleted` |  | | `_insplots` | `IsBusinessPurposeCompleted` |  |  |
| `InspectionOperationPlant` |  | |  |  |  |  |
| `OperationControlProfile` |  | |  |  |  |  |
| `OperationText` |  | |  |  |  |  |
| `WorkCenter` |  | |  |  |  |  |
| `OperationConfirmation` |  | |  |  |  |  |
| `InspectionSubSystem` |  | |  |  |  |  |
| `InspectionSpecification` |  | |  |  |  |  |
| `InspectionSpecificationText` |  | |  |  |  |  |
| `InspectorQualification` |  | |  |  |  |  |
| `InspSpecInformationField1` |  | |  |  |  |  |
| `InspSpecInformationField2` |  | |  |  |  |  |
| `InspSpecInformationField3` |  | |  |  |  |  |
| `InspSpecImportanceCode` |  | |  |  |  |  |
| `InspectionMethod` |  | |  |  |  |  |
| `InspectionMethodPlant` |  | |  |  |  |  |
| `InspectionSpecificationPlant` |  | |  |  |  |  |
| `InspectionCharacteristicStatus` |  | |  |  |  |  |
| `InspectionSubsetSortKey` |  | |  |  |  |  |
| `Equipment` |  | |  |  |  |  |
| `FunctionalLocation` |  | |  |  |  |  |
| `InspSubsetUsageDcsnValuation` |  | |  |  |  |  |
| `InspectionSubsetLongCharKey` |  | |  |  |  |  |
| `InspectionSubsetShortCharKey` |  | |  |  |  |  |
| `InspSubsetLongNumericKey` |  | |  |  |  |  |
| `InspSubsetShortNumericKey` |  | |  |  |  |  |
| `InspectionSubsetDate` |  | |  | `cast(I_InspectionSubset.InspectionSubsetDate as abap.char( 8 ))` |  |  |
| `InspectionSubsetTime` |  | |  | `cast(I_InspectionSubset.InspectionSubsetTime as abap.char( 6 ))` |  |  |
| `MaterialSample` |  | |  |  |  |  |
| `InspSubsetUsageDcsnCodeGroup` |  | |  |  |  |  |
| `InspSubsetUsageDcsnCode` |  | |  |  |  |  |
| `MaterialSampleType` |  | |  |  |  |  |
| `MaterialSampleCategory` |  | |  |  |  |  |
| `StorageLocation` |  | |  |  |  |  |
| `MaterialSampleStorageLocation` |  | |  |  |  |  |
| `MaterialSampleChangedOn` |  | |  | `cast(I_MaterialSample.MaterialSampleChangedOn as abap.char( 8 ))` |  |  |
| `MaterialSampleDrawingLocation` |  | |  |  |  |  |
| `MatlSmplDrawingLocDescription` |  | |  |  |  |  |
| `MaterialSampleDrawingOnDate` |  | |  | `cast(I_MaterialSample.MaterialSampleDrawingOnDate as abap.char( 8 ))` |  |  |
| `MaterialSampleDrawingOnTime` |  | |  | `cast(I_MaterialSample.MaterialSampleDrawingOnTime as abap.char( 6 ))` |  |  |
| `MaterialSampleResponsibleName` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IINSPLOTVALHLP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Inspection Lot'
@VDM.viewType: #COMPOSITE

@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@ObjectModel.usageType: {
    dataClass: #TRANSACTIONAL,
    sizeCategory: #L,
    serviceQuality: #C 
}
@Metadata.ignorePropagatedAnnotations: true
define view I_InspectionLotValueHelp
  as select from   I_InspectionLot _insplots
    inner join     I_InspectionOperation      on _insplots.OrderInternalBillOfOperations = I_InspectionOperation.OrderInternalBillOfOperations
    inner join     I_InspectionCharacteristic on  _insplots.InspectionLot                           = I_InspectionCharacteristic.InspectionLot
                                              and I_InspectionOperation.InspPlanOperationInternalID = I_InspectionCharacteristic.InspPlanOperationInternalID
    left outer join(
                   I_InspectionSubset
        inner join I_MaterialSample           on I_MaterialSample.MaterialSample = I_InspectionSubset.MaterialSample
    )
    on _insplots.InspectionLot = I_InspectionSubset.InspectionLot
{
      key _insplots.InspectionLot,
      key I_InspectionOperation.InspectionOperation,
      key I_InspectionCharacteristic.InspectionCharacteristic,

      //Inspection lot filters
      _insplots.Material,
      _insplots.Batch,
      _insplots.Plant,
      _insplots.InspectionLotOrigin,
      _insplots.ManufacturingOrder,
      _insplots.InspectionLotText,
      _insplots.InspectionLotType,
      @Semantics.quantity.unitOfMeasure: 'InspectionLotQuantityUnit'      
      _insplots.InspectionLotQuantity,
      @Semantics.unitOfMeasure: true
      _insplots.InspectionLotQuantityUnit,
      cast(_insplots.InspLotCreatedOnLocalDate as abap.char( 8 ))          as InspLotCreatedOnLocalDate,
      _insplots._Material._Text[1:Language=$session.system_language].MaterialName,
      _insplots.InspectionLotHasUsageDecision,
      _insplots.InspLotNmbrOpenLongTermCharc,
      _insplots.InspectionLotObjectText,
      _insplots.GoodsReceiptIsMovedToBlkdStock,
      _insplots.InspectionLotHasQuantity,
      _insplots.InspectionLotHasPartialLots,
      _insplots.InspLotIsDocumentationRequired,
      _insplots.InspectionLotApproval,
      _insplots.InspLotDigitalSgntrInUsgeDcsn,
      _insplots.InspectionLotIsSkipped,
      _insplots.InspectionLotIsFullInspection,
      cast(_insplots.InspLotCreatedOnLocalTime as abap.char( 6 ))          as InspLotCreatedOnLocalTime,
      _insplots.InspectionLotCreatedBy,
      cast(_insplots.InspectionLotCreatedOn as abap.char( 8 ))             as InspectionLotCreatedOn,
      cast(_insplots.InspectionLotCreatedOnTime as abap.char( 6 ))         as InspectionLotCreatedOnTime,
      _insplots.InspectionLotChangedBy,
      cast(_insplots.InspectionLotChangeDate as abap.char( 8 ))            as InspectionLotChangeDate,
      cast(_insplots.InspectionLotChangeTime as abap.char( 6 ))            as InspectionLotChangeTime,
      cast(_insplots.InspectionLotStartDate as abap.char( 8 ))             as InspectionLotStartDate,
      cast(_insplots.InspectionLotStartTime as abap.char( 6 ))             as InspectionLotStartTime,
      cast(_insplots.InspectionLotEndDate as abap.char( 8 ))               as InspectionLotEndDate,
      cast(_insplots.InspectionLotEndTime as abap.char( 6 ))               as InspectionLotEndTime,
      _insplots.BillOfOperationsType,
      _insplots.BillOfOperationsGroup,
      _insplots.BillOfOperationsUsage,
      _insplots.BillOfOperationsVariant,
      _insplots.SmplDrawingProcedure,
      _insplots.SmplDrwgProcedIsConfRequired,
      cast(_insplots.InspLotSelectionValidFromDate as abap.char( 8 ))      as InspLotSelectionValidFromDate,
      _insplots.ProductionVersion,
      _insplots.Customer,
      _insplots.Supplier,
      _insplots.Manufacturer,
      _insplots.ManufacturerPartNmbr,
      _insplots.MaterialRevisionLevel,
      _insplots.MaterialIsBatchManaged,
      _insplots.BatchStorageLocation,
      _insplots.MaterialCompIsSpecialStock,
      _insplots.PurchasingOrganization,
      _insplots.PurchasingDocument,
      _insplots.AccountingDocumentType,
      _insplots.MaterialDocumentYear,
      _insplots.MaterialDocument,
      cast(_insplots.MatlDocLatestPostgDate as abap.char( 8 ))             as MatlDocLatestPostgDate,
      _insplots.GoodsMovementType,
      _insplots.InspectionLotPlant,
      _insplots.InspectionLotStorageLocation,
      _insplots.Warehouse,
      _insplots.StorageType,
      _insplots.StorageBin,
      _insplots.SalesOrder,
      _insplots.DeliveryDocument,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'InspectionDeliveryCategory'
      _insplots.DeliveryCategory,
      _insplots.InspectionDeliveryCategory,
      _insplots.Route,
      _insplots.BillToPartyCountry,
      _insplots.SoldToParty,
      _insplots.SalesOrganization,
      _insplots.MaterialByCustomer,
      _insplots.InspLotNmbrAddlRecordedCharc,
      _insplots.InspLotNmbrOpenShortTermCharc,
      _insplots.InspectionDynamicStage,
      _insplots.InspectionSeverity,
      _insplots.QualityCostCollector,
      _insplots.CostCenter,
      _insplots.SalesOrdStockWBSElement,
      _insplots.ProfitCenter,
      _insplots.BusinessArea,
      _insplots.GLAccount,
      _insplots.ControllingArea,
      _insplots.CompanyCode,
      _insplots.SerialNumberProfile,
      _insplots.NumberOfSerialNumbers,
      _insplots.InspLotIsSerialNmbrPossible,
      _insplots.BatchBySupplier,
      _insplots.InspLotIsAutomUsgeDcsnPossible,
      _insplots.InspLotHasConfignSpecification,
      _insplots.InspLotIsTaskListRequired,
      _insplots.InspLotHasManualSampleSize,
      _insplots.InspLotHasMaterialSpec,
      _insplots.InspLotDigitalSgntrResultsRecg,
      _insplots.InspLotIsBatchRequired,
      _insplots.InspLotIsStockPostingCompleted,
      _insplots.MatlQualityAuthorizationGroup,
      @Consumption: { hidden: true }
      _insplots.IsBusinessPurposeCompleted,

      //Operation filters
      I_InspectionOperation.InspectionOperationPlant,
      I_InspectionOperation.OperationControlProfile,
      I_InspectionOperation.OperationText,
      I_InspectionOperation._WorkCenter.WorkCenter,
      I_InspectionOperation.OperationConfirmation,
      I_InspectionOperation.InspectionSubSystem,

      //Charac. specification filters
      I_InspectionCharacteristic.InspectionSpecification,
      I_InspectionCharacteristic.InspectionSpecificationText,
      I_InspectionCharacteristic.InspectorQualification,
      I_InspectionCharacteristic.InspSpecInformationField1,
      I_InspectionCharacteristic.InspSpecInformationField2,
      I_InspectionCharacteristic.InspSpecInformationField3,
      I_InspectionCharacteristic.InspSpecImportanceCode,
      I_InspectionCharacteristic.InspectionMethod,
      I_InspectionCharacteristic.InspectionMethodPlant,
      I_InspectionCharacteristic.InspectionSpecificationPlant,
      I_InspectionCharacteristic.InspectionCharacteristicStatus,

      //Physical sample filters
      I_InspectionSubset.InspectionSubsetSortKey,
      I_InspectionSubset.Equipment,
      I_InspectionSubset.FunctionalLocation,
      I_InspectionSubset.InspSubsetUsageDcsnValuation,
      I_InspectionSubset.InspectionSubsetLongCharKey,
      I_InspectionSubset.InspectionSubsetShortCharKey,
      I_InspectionSubset.InspSubsetLongNumericKey,
      I_InspectionSubset.InspSubsetShortNumericKey,
      cast(I_InspectionSubset.InspectionSubsetDate as abap.char( 8 ))      as InspectionSubsetDate,
      cast(I_InspectionSubset.InspectionSubsetTime as abap.char( 6 ))      as InspectionSubsetTime,
      I_InspectionSubset.MaterialSample,
      I_InspectionSubset.InspSubsetUsageDcsnCodeGroup,
      I_InspectionSubset.InspSubsetUsageDcsnCode,

      //Physical sample filters
      I_MaterialSample.MaterialSampleType,
      I_MaterialSample.MaterialSampleCategory,
      I_MaterialSample.StorageLocation,
      I_MaterialSample.MaterialSampleStorageLocation,
      cast(I_MaterialSample.MaterialSampleChangedOn as abap.char( 8 ))     as MaterialSampleChangedOn,
      I_MaterialSample.MaterialSampleDrawingLocation,
      I_MaterialSample.MatlSmplDrawingLocDescription,
      cast(I_MaterialSample.MaterialSampleDrawingOnDate as abap.char( 8 )) as MaterialSampleDrawingOnDate,
      cast(I_MaterialSample.MaterialSampleDrawingOnTime as abap.char( 6 )) as MaterialSampleDrawingOnTime,
      I_MaterialSample.MaterialSampleResponsibleName
}
```
