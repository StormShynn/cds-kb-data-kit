---
name: I_DEFECTTP_2
description: "Defecttp 2"
app_component: QM-QN-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-QN
  - interface-view
  - transactional-processing
  - component:QM-QN-2CL
  - lob:Quality Management
---
# I_DEFECTTP_2

**Defecttp 2**

| Property | Value |
|---|---|
| App Component | `QM-QN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DefectInternalID` | ✓ | | `_Defect` | `DefectInternalID` |  |  |
| `Defect` |  | | `_Defect` | `Defect` |  |  |
| `DefectCategory` |  | | `_Defect` | `DefectCategory` |  |  |
| `CreatedByUser` |  | | `_Defect` | `CreatedByUser` |  |  |
| `CreationDate` |  | | `_Defect` | `CreationDate` |  |  |
| `CreationTime` |  | | `_Defect` | `CreationTime` |  |  |
| `LastChangedByUser` |  | | `_Defect` | `LastChangedByUser` |  |  |
| `LastChangeDate` |  | | `_Defect` | `LastChangeDate` |  |  |
| `LastChangeTime` |  | | `_Defect` | `LastChangeTime` |  |  |
| `DefectText` |  | | `_Defect` | `DefectText` |  |  |
| `DefectCodeCatalog` |  | | `_Defect` | `DefectCodeCatalog` |  |  |
| `DefectCodeGroup` |  | | `_Defect` | `DefectCodeGroup` |  |  |
| `DefectCode` |  | | `_Defect` | `DefectCode` |  |  |
| `DefectLocationCatalog` |  | | `_Defect` | `DefectLocationCatalog` |  |  |
| `DefectLocationCodeGroup` |  | | `_Defect` | `DefectLocationCodeGroup` |  |  |
| `DefectLocationCode` |  | | `_Defect` | `DefectLocationCode` |  |  |
| `DefectiveQuantity` |  | | `_Defect` | `DefectiveQuantity` |  |  |
| `DefectiveQuantityUnit` |  | | `_Defect` | `DefectiveQuantityUnit` |  |  |
| `ManufacturingOrder` |  | | `_Defect` | `ProductionOrder` |  |  |
| `OrderInternalID` |  | | `_Defect` | `OrderInternalID` |  |  |
| `ManufacturingOrderOperation` |  | |  | `cast( _Defect.ProductionOrderOperation as vdm_vornr preserving type )` |  |  |
| `ManufacturingOrderSequence` |  | | `_Defect` | `ProductionOrderSequence` |  |  |
| `DefectClass` |  | | `_Defect` | `DefectClass` |  |  |
| `NumberOfDefects` |  | | `_Defect` | `NumberOfDefects` |  |  |
| `InspPlanOperationInternalID` |  | | `_Defect` | `InspPlanOperationInternalID` |  |  |
| `InspectionCharacteristic` |  | | `_Defect` | `InspectionCharacteristic` |  |  |
| `InspectionSubsetInternalID` |  | | `_Defect` | `InspectionSubsetInternalID` |  |  |
| `MaterialSample` |  | | `_Defect` | `MaterialSample` |  |  |
| `WorkCenterTypeCode` |  | | `_Defect` | `WorkCenterTypeCode` |  |  |
| `MainWorkCenterInternalID` |  | | `_Defect` | `MainWorkCenterInternalID` |  |  |
| `MainWorkCenterPlant` |  | | `_Defect` | `MainWorkCenterPlant` |  |  |
| `MainWorkCenter` |  | | `_Defect` | `MainWorkCenter` |  |  |
| `IsDeleted` |  | | `_Defect` | `IsDeleted` |  |  |
| `DefectOrigin` |  | | `_Defect` | `DefectOrigin` |  |  |
| `Material` |  | | `_Defect` | `Material` |  |  |
| `Batch` |  | | `_Defect` | `Batch` |  |  |
| `Plant` |  | | `_Defect` | `Plant` |  |  |
| `InspectionLot` |  | | `_Defect` | `InspectionLot` |  |  |
| `ChangedDateTime` |  | | `_Defect` | `ChangedDateTime` |  |  |
| `DefectLifecycleStatus` |  | | `_Defect` | `DefectLifecycleStatus` |  |  |
| `ProblemAnalysisStatus` |  | | `_Defect` | `ProblemAnalysisStatus` |  |  |
| `QualityIssueReference` |  | | `_Defect` | `QualityIssueReference` |  |  |
| `MasterLanguage` |  | | `_Defect` | `MasterLanguage` |  |  |
| `DefectUUID` |  | | `_Defect` | `DefectUUID` |  |  |
| `_InspectionLot` |  | | `_Defect` | `_InspectionLot` |  |  |
| `_DefectLongText` | | ✓ | | | | |
| `_DefectSerialNumber` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Defect - TP'
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.usage.type: [ #TRANSACTIONAL_PROCESSING_SERVICE ]
@ObjectModel.sapObjectNodeType: { name: 'Defect' }
@ObjectModel: {
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  usageType: {
    dataClass: #TRANSACTIONAL,
    sizeCategory: #L,
    serviceQuality: #B
  },
  representativeKey: 'DefectInternalID',
  semanticKey: ['Defect']
}
@Metadata.ignorePropagatedAnnotations: true

define root view entity I_DefectTP_2 
//  provider contract transactional_query  // Set due to recomendation by behavior definition
  provider contract transactional_interface
  as projection on R_DefectTP as _Defect

{
  key _Defect.DefectInternalID,
  
      @ObjectModel.sapObjectNodeTypeReference: 'Defect'
      _Defect.Defect,
      _Defect.DefectCategory,
      _Defect.CreatedByUser,
      _Defect.CreationDate,
      @Semantics.time: true
      _Defect.CreationTime, 
      _Defect.LastChangedByUser,
      _Defect.LastChangeDate,
      @Semantics.time: true
      _Defect.LastChangeTime, 
      _Defect.DefectText,
      _Defect.DefectCodeCatalog,
      _Defect.DefectCodeGroup,
      _Defect.DefectCode,    
//      _Defect.DefectCodeVersion, // Do we need this field? Value is fix '0001' for each case 
      _Defect.DefectLocationCatalog,
      _Defect.DefectLocationCodeGroup,
      _Defect.DefectLocationCode,
//      _Defect.DefectLocationCodeVersion, // Do we need this field? Value is fix '0001' for each case
      
      @Semantics.quantity.unitOfMeasure: 'DefectiveQuantityUnit'
      _Defect.DefectiveQuantity,
      _Defect.DefectiveQuantityUnit,
      
      _Defect.ProductionOrder as ManufacturingOrder,
      _Defect.OrderInternalID,
      cast( _Defect.ProductionOrderOperation as vdm_vornr preserving type ) as ManufacturingOrderOperation,
      _Defect.ProductionOrderSequence as ManufacturingOrderSequence,
      
      _Defect.DefectClass,
      _Defect.NumberOfDefects,
      _Defect.InspPlanOperationInternalID,
      _Defect.InspectionCharacteristic,
      _Defect.InspectionSubsetInternalID,
      _Defect.MaterialSample,
      
//     Work center data
      _Defect.WorkCenterTypeCode,  
      _Defect.MainWorkCenterInternalID,  
      _Defect.MainWorkCenterPlant,
      _Defect.MainWorkCenter,
      
//      _Defect.Equipment, 
//      _Defect.FunctionalLocation,
       
      @Semantics.booleanIndicator: true
      _Defect.IsDeleted,
      _Defect.DefectOrigin,
      
      _Defect.Material, 
      _Defect.Batch,
      _Defect.Plant,
//      @Feature: 'QM_CE_DEFECT_WAREHOUSE_DEF'  // Annotation not allwed!
//      _Defect.StorageLocation,
      _Defect.InspectionLot,
//      _Defect.CatalogProfile,
      
      _Defect.ChangedDateTime,
      _Defect.DefectLifecycleStatus,
      _Defect.ProblemAnalysisStatus,
      
      _Defect.QualityIssueReference,
      _Defect.MasterLanguage,
      _Defect.DefectUUID,
      
//      @Feature: 'QM_CE_DEFECT_WAREHOUSE_DEF'   // Annotation not allwed!
//      _Defect.ProductionSupplyArea,
//      @Feature: 'QM_CE_DEFECT_WAREHOUSE_DEF'   // Annotation not allwed!
//      _Defect.EWMWarehouse,
//      @Feature: 'QM_CE_DEFECT_WAREHOUSE_DEF'   // Annotation not allwed!
//      _Defect.SourceStorageType,
//      @Feature: 'QM_CE_DEFECT_WAREHOUSE_DEF'   // Annotation not allwed!
//      _Defect.SourceStorageBin,
//      @Feature: 'QM_CE_DEFECT_WAREHOUSE_DEF'   // Annotation not allwed!
//      _Defect.WarehouseLogicalSystem,
      
//      @Feature: 'QM_CE_DEFECT_WAREHOUSE_DEF'   // Annotation not allwed!
//      _Defect.DefectCausedBy,
//      @Feature: 'QM_CE_DEFECT_WAREHOUSE_DEF'   // Annotation not allwed!
//      _Defect.CostCenter,
      
      /* Association */
//      _DefectAffectedObject : redirected to composition child I_DefectAffectedObjectTP_2,
      _DefectLongText : redirected to composition child I_DefectLongTextTP_2, 
      @Feature: 'QM_SERIAL_NUMBER_DEFECT'
      _DefectSerialNumber : redirected to composition child I_DefectSerialNumberTP_2,
      
      @Consumption.hidden: true
      _Defect._InspectionLot as _InspectionLot 
}
```
