---
name: I_DEFECT
description: "Defect"
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
  - component:QM-QN-2CL
  - lob:Quality Management
---
# I_DEFECT

**Defect**

| Property | Value |
|---|---|
| App Component | `QM-QN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DefectInternalID` | ✓ | |  | `cast( I_NotificationItem.Notification as qdefectinternalid preserving type )` |  |  |
| `Defect` |  | |  | `cast( substring(I_NotificationItem.Notification,2,11) as qdefectid preserving type )` |  |  |
| `DefectCategory` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `DefectText` |  | |  | `cast(I_NotificationItem.NotificationItemText as vdm_qfetxt preserving type )` |  |  |
| `DefectCodeCatalog` |  | |  |  |  |  |
| `DefectCodeGroup` |  | |  | `cast( I_NotificationItem.DefectCodeGroup as vdm_qfegrp preserving type )` |  |  |
| `DefectCode` |  | |  | `cast( I_NotificationItem.DefectCode as vdm_qfecod preserving type )` |  |  |
| `DefectCodeVersion` |  | |  |  |  |  |
| `DefectObjectCodeCatalog` |  | |  | `cast(I_NotificationItem.NotifItmObjectPartCodeCtlg as vdm_qfeocat preserving type )` |  |  |
| `DefectObjectCodeGroup` |  | |  | `cast(I_NotificationItem.NotifItmObjectPartCodeGroup as vdm_qfeogrp preserving type )` |  |  |
| `DefectObjectCode` |  | |  | `cast(I_NotificationItem.NotifItmObjectPartCode as vdm_qfeocod preserving type )` |  |  |
| `DefectObjectCodeVersion` |  | |  | `NotifItmObjectPartVersion` |  |  |
| `DefectCauseCodeCatalog` |  | |  | `cast(I_NotificationItem.DefectCauseCodeCatalog as vdm_qinitdefcausecodecat preserving type )` |  |  |
| `DefectCauseCodeGroup` |  | |  | `cast(I_NotificationItem.DefectCauseCodeGroup as vdm_qinitdefcausecodegroup preserving type )` |  |  |
| `DefectCauseCode` |  | |  | `cast(I_NotificationItem.DefectCauseCode as vdm_qinitdefcausecode preserving type )` |  |  |
| `DefectCauseCodeVersion` |  | |  |  |  |  |
| `DefectiveQuantity` |  | |  | `cast( I_NotificationItem.DefectiveQuantity as vdm_qmgpos preserving type )` |  |  |
| `DefectiveQuantityUnit` |  | |  |  |  |  |
| `DefectIsCreatedAutomatically` |  | |  |  |  |  |
| `ProductionOrderOperationActy` |  | |  |  |  |  |
| `ProductionOrderOpActyVers` |  | |  |  |  |  |
| `Batch` |  | |  |  |  |  |
| `DefectiveSingleUnit` |  | |  |  |  |  |
| `ProductionOrder` |  | |  | `cast( I_NotificationItem.ProductionOrder as vdm_qm_fertaufnr preserving type )` |  |  |
| `OrderInternalID` |  | |  |  |  |  |
| `CreationTime` |  | |  | `cast( I_NotificationItem.CreationTime as vdm_qerstezeit preserving type )` |  |  |
| `LastChangeTime` |  | |  | `cast( I_NotificationItem.LastChangeTime as vdm_qaendezeit preserving type )` |  |  |
| `DefectClass` |  | |  |  |  |  |
| `NumberOfDefects` |  | |  |  |  |  |
| `InspPlanOperationInternalID` |  | |  |  |  |  |
| `InspectionCharacteristic` |  | |  |  |  |  |
| `InspectionSubsetInternalID` |  | |  |  |  |  |
| `MaterialSample` |  | |  |  |  |  |
| `WorkCenterTypeCode` |  | |  |  |  |  |
| `MainWorkCenterInternalID` |  | |  |  |  |  |
| `MainWorkCenterPlant` |  | |  | `cast( I_NotificationItem.MainWorkCenterPlant as vdm_qarbpwerks preserving type )` |  |  |
| `MainWorkCenter` |  | |  |  |  |  |
| `Equipment` |  | |  |  |  |  |
| `FunctionalLocation` |  | |  |  |  |  |
| `IsDeleted` |  | |  | `cast( I_NotificationItem.IsDeleted as vdm_qdefisdeleted preserving type )` |  |  |
| `DefectOrigin` |  | |  |  |  |  |
| `Material` |  | |  | `cast( I_NotificationItem.Material as vdm_defective_material preserving type )` |  |  |
| `Plant` |  | |  |  |  |  |
| `StorageLocation` |  | |  |  |  |  |
| `WarehouseLogicalSystem` |  | |  |  |  |  |
| `InspectionLot` |  | |  |  |  |  |
| `CatalogProfile` |  | |  |  |  |  |
| `ChangedDateTime` |  | |  |  |  |  |
| `DefectLifecycleStatus` |  | |  |  |  |  |
| `DefectArchivingStatus` |  | |  |  |  |  |
| `ProblemAnalysisStatus` |  | |  |  |  |  |
| `QualityIssueReference` |  | |  |  |  |  |
| `MasterLanguage` |  | |  |  |  |  |
| `DefectUUID` |  | |  |  |  |  |
| `ProductionSupplyArea` |  | |  |  |  |  |
| `Warehouse` |  | |  | `EWMWarehouse` |  |  |
| `EWMWarehouse` |  | |  |  |  |  |
| `StorageType` |  | |  | `SourceStorageType` |  |  |
| `SourceStorageType` |  | |  |  |  |  |
| `SourceStorageBin` |  | |  |  |  |  |
| `DefectCausedBy` |  | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `BOMItemInstanceUUID` |  | |  |  |  |  |
| `ProducedMaterial` |  | |  |  |  |  |
| `ProducedSerialNumber` |  | |  |  |  |  |
| `_DefectCodeGroup` | | ✓ | | | | |
| `_DefectCode` | | ✓ | | | | |
| `_DefectCauseCodeCatalog` | | ✓ | | | | |
| `_DefectCauseCodeGroup` | | ✓ | | | | |
| `_DefectCauseCode` | | ✓ | | | | |
| `_DefectObjectCodeCatalog` | | ✓ | | | | |
| `_DefectObjectPartCodeGroup` | | ✓ | | | | |
| `_DefectObjectCode` | | ✓ | | | | |
| `_DefectStatus` | | ✓ | | | | |
| `_DefectArchivingStatus` | | ✓ | | | | |
| `_ProblemAnalysisStatus` | | ✓ | | | | |
| `_EWM_WarehouseNumber_2` | | ✓ | | | | |
| `_EWM_SourceStorageType` | | ✓ | | | | |
| `_EWM_SourceStorageBin` | | ✓ | | | | |
| `_ProductionSupplyArea` | | ✓ | | | | |
| `_DefectCausedBy` | | ✓ | | | | |
| `_InspectionOperation` | | ✓ | | | | |
| `_ManufacturingOrder` | | ✓ | | | | |
| `_ManufacturingOrderOperation` | | ✓ | | | | |
| `_DefectLongText` | | ✓ | | | | |
| `_DefectSerialNumber` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ProducedMaterial` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_StorageLocation` | | ✓ | | | | |
| `_DefectClass` | | ✓ | | | | |
| `_CreatedByUserContactCard` | | ✓ | | | | |
| `_LastChangedByUserContactCard` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DefectCodeGroup` | `I_DefectCodeGroup` | [0..1] |
| `_DefectCode` | `I_DefectCode` | [0..1] |
| `_DefectCauseCodeCatalog` | `I_Inspectioncatalog` | [0..1] |
| `_DefectCauseCodeGroup` | `I_DefectCauseCodeGroup` | [0..1] |
| `_DefectCauseCode` | `I_DefectCauseCode` | [0..1] |
| `_DefectObjectCodeCatalog` | `I_Inspectioncatalog` | [0..1] |
| `_DefectObjectPartCodeGroup` | `I_InspectionCodeGroup` | [0..1] |
| `_DefectObjectCode` | `I_InspectionCode` | [0..1] |
| `_DefectStatus` | `I_DefectStatus` | [0..1] |
| `_DefectArchivingStatus` | `I_DefectArchivingStatus` | [1..1] |
| `_ProblemAnalysisStatus` | `I_ProblemAnalysisStatus` | [0..1] |
| `_EWM_WarehouseNumber_2` | `I_EWM_WarehouseNumber_2` | [0..1] |
| `_EWM_SourceStorageType` | `I_EWM_StorageType_2` | [0..1] |
| `_EWM_SourceStorageBin` | `I_EWM_StorageBin_2` | [0..1] |
| `_ProductionSupplyArea` | `I_ProductionSupplyArea` | [0..1] |
| `_DefectCausedBy` | `I_DefectCausedBy` | [0..1] |
| `_InspectionOperation` | `I_InspectionOperation` | [0..1] |
| `_ManufacturingOrder` | `I_ManufacturingOrder` | [0..1] |
| `_ManufacturingOrderOperation` | `I_ManufacturingOrderOperation` | [0..1] |
| `_DefectLongText` | `I_DefectLongText` | [0..*] |
| `_DefectSerialNumber` | `I_DefectSerialNumber` | [0..*] |
| `_Extension` | `E_NotificationItem` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Defect'
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.privilegedAssociations:  [ '_CreatedByUserContactCard', '_LastChangedByUserContactCard' ]
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IDEFECT'
@VDM: {
    viewType: #COMPOSITE,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ]
@ObjectModel.modelingPattern: #NONE
@ObjectModel: {
    usageType: {
        dataClass: #TRANSACTIONAL,
        sizeCategory: #L,
        serviceQuality: #A },
    representativeKey: 'DefectInternalID',
    semanticKey:  [ 'Defect' ]
}
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true // Projection from generic NotificationItem to Defect => Start new with annotations

define view entity I_Defect
  as select from I_NotificationItem

  association [0..1] to I_DefectCodeGroup             as _DefectCodeGroup             on  $projection.DefectCodeGroup = _DefectCodeGroup.DefectCodeGroup
  association [0..1] to I_DefectCode                  as _DefectCode                  on  $projection.DefectCodeGroup = _DefectCode.DefectCodeGroup
                                                                                      and $projection.DefectCode      = _DefectCode.DefectCode

  association [0..1] to I_Inspectioncatalog           as _DefectCauseCodeCatalog      on  $projection.DefectCauseCodeCatalog = _DefectCauseCodeCatalog.InspectionCatalog
  association [0..1] to I_DefectCauseCodeGroup        as _DefectCauseCodeGroup        on  $projection.DefectCauseCodeGroup = _DefectCauseCodeGroup.DefectCauseCodeGroup
  association [0..1] to I_DefectCauseCode             as _DefectCauseCode             on  $projection.DefectCauseCodeGroup = _DefectCauseCode.DefectCauseCodeGroup
                                                                                      and $projection.DefectCauseCode      = _DefectCauseCode.DefectCauseCode

  association [0..1] to I_Inspectioncatalog           as _DefectObjectCodeCatalog     on  $projection.DefectObjectCodeCatalog = _DefectObjectCodeCatalog.InspectionCatalog
  association [0..1] to I_InspectionCodeGroup         as _DefectObjectPartCodeGroup   on  $projection.DefectObjectCodeCatalog = _DefectObjectPartCodeGroup.InspectionCatalog
                                                                                      and $projection.DefectObjectCodeGroup   = _DefectObjectPartCodeGroup.InspectionCodeGroup
  association [0..1] to I_InspectionCode              as _DefectObjectCode            on  $projection.DefectObjectCodeCatalog = _DefectObjectCode.InspectionCatalog
                                                                                      and $projection.DefectObjectCodeGroup   = _DefectObjectCode.InspectionCodeGroup
                                                                                      and $projection.DefectObjectCode        = _DefectObjectCode.InspectionCode

  association [0..1] to I_DefectStatus                as _DefectStatus                on  $projection.DefectLifecycleStatus = _DefectStatus.DefectLifecycleStatus
  association [1..1] to I_DefectArchivingStatus       as _DefectArchivingStatus       on  $projection.DefectArchivingStatus = _DefectArchivingStatus.DefectArchivingStatus

  association [0..1] to I_ProblemAnalysisStatus       as _ProblemAnalysisStatus       on  $projection.ProblemAnalysisStatus = _ProblemAnalysisStatus.ProblemAnalysisStatus

  // EWM related
  association [0..1] to I_EWM_WarehouseNumber_2       as _EWM_WarehouseNumber_2       on  $projection.EWMWarehouse = _EWM_WarehouseNumber_2.EWMWarehouse
  association [0..1] to I_EWM_StorageType_2           as _EWM_SourceStorageType       on  $projection.EWMWarehouse      = _EWM_SourceStorageType.EWMWarehouse
                                                                                      and $projection.SourceStorageType = _EWM_SourceStorageType.EWMStorageType
  association [0..1] to I_EWM_StorageBin_2            as _EWM_SourceStorageBin        on  $projection.EWMWarehouse     = _EWM_SourceStorageBin.EWMWarehouse
                                                                                      and $projection.SourceStorageBin = _EWM_SourceStorageBin.EWMStorageBin
  association [0..1] to I_ProductionSupplyArea        as _ProductionSupplyArea        on  $projection.ProductionSupplyArea = _ProductionSupplyArea.ProductionSupplyArea
                                                                                      and $projection.Plant                = _ProductionSupplyArea.Plant

  association [0..1] to I_DefectCausedBy              as _DefectCausedBy              on  $projection.DefectCausedBy = _DefectCausedBy.DefectCausedBy

  // Inspection Lot related
  association [0..1] to I_InspectionOperation         as _InspectionOperation         on  $projection.InspectionLot               = _InspectionOperation.InspectionLot
                                                                                      and $projection.InspPlanOperationInternalID = _InspectionOperation.InspPlanOperationInternalID
  // Manufacturing Order
  association [0..1] to I_ManufacturingOrder          as _ManufacturingOrder          on  $projection.ProductionOrder = _ManufacturingOrder.ManufacturingOrder
  association [0..1] to I_ManufacturingOrderOperation as _ManufacturingOrderOperation on  $projection.OrderInternalID             = _ManufacturingOrderOperation.MfgOrderInternalID
                                                                                      and $projection.InspPlanOperationInternalID = _ManufacturingOrderOperation.OrderOperationInternalID

  //Association to child nodes
  association [0..*] to I_DefectLongText              as _DefectLongText              on  $projection.DefectInternalID = _DefectLongText.DefectInternalID
  association [0..*] to I_DefectSerialNumber          as _DefectSerialNumber          on  $projection.DefectInternalID = _DefectSerialNumber.DefectInternalID

  //Extension
  association [1..1] to E_NotificationItem            as _Extension                   on  $projection.DefectInternalID = _Extension.Notification
                                                                                      and _Extension.NotificationItem  = '0000'

{
  key cast( I_NotificationItem.Notification as qdefectinternalid preserving type )                   as DefectInternalID,
      //  key  I_NotificationItem.NotificationItem,  // Not necessary !? --> No

      @ObjectModel.text.element: ['DefectText']
      cast( substring(I_NotificationItem.Notification,2,11) as qdefectid preserving type )           as Defect,

      @ObjectModel: { foreignKey.association: '_DefectCategory' }
      I_NotificationItem.DefectCategory,
      @ObjectModel: { foreignKey.association: '_CreatedByUserContactCard' }
      I_NotificationItem.CreatedByUser,
      I_NotificationItem.CreationDate,
      @ObjectModel: { foreignKey.association: '_LastChangedByUserContactCard' }
      I_NotificationItem.LastChangedByUser,
      I_NotificationItem.LastChangeDate,
      @Semantics.text: true
      cast(I_NotificationItem.NotificationItemText as vdm_qfetxt preserving type )                   as DefectText,
      @ObjectModel: { foreignKey.association: '_DefectCodeCatalog' }
      I_NotificationItem.DefectCodeCatalog,
      @ObjectModel: { foreignKey.association: '_DefectCodeGroup' }
      cast( I_NotificationItem.DefectCodeGroup as vdm_qfegrp preserving type )                       as DefectCodeGroup,
      @ObjectModel: { foreignKey.association: '_DefectCode' }
      cast( I_NotificationItem.DefectCode      as vdm_qfecod preserving type )                       as DefectCode,
      I_NotificationItem.DefectCodeVersion,
      @ObjectModel: { foreignKey.association: '_DefectObjectCodeCatalog'}
      cast(I_NotificationItem.NotifItmObjectPartCodeCtlg as vdm_qfeocat preserving type )            as DefectObjectCodeCatalog,
      @ObjectModel: { foreignKey.association: '_DefectObjectPartCodeGroup'}
      cast(I_NotificationItem.NotifItmObjectPartCodeGroup as vdm_qfeogrp preserving type )           as DefectObjectCodeGroup,
      @ObjectModel: { foreignKey.association: '_DefectObjectCode'}
      cast(I_NotificationItem.NotifItmObjectPartCode as vdm_qfeocod preserving type )                as DefectObjectCode,
      I_NotificationItem.NotifItmObjectPartVersion                                                   as DefectObjectCodeVersion,

      @ObjectModel: { foreignKey.association: '_DefectCauseCodeCatalog' }
      cast(I_NotificationItem.DefectCauseCodeCatalog as vdm_qinitdefcausecodecat preserving type )   as DefectCauseCodeCatalog,
      @ObjectModel: { foreignKey.association: '_DefectCauseCodeGroup' }
      cast(I_NotificationItem.DefectCauseCodeGroup   as vdm_qinitdefcausecodegroup preserving type ) as DefectCauseCodeGroup,
      @ObjectModel: { foreignKey.association: '_DefectCauseCode' }
      cast(I_NotificationItem.DefectCauseCode        as vdm_qinitdefcausecode preserving type )      as DefectCauseCode,
      I_NotificationItem.DefectCauseCodeVersion,
      @Semantics.quantity.unitOfMeasure: 'DefectiveQuantityUnit'
      cast( I_NotificationItem.DefectiveQuantity as vdm_qmgpos preserving type )                     as DefectiveQuantity,
      @ObjectModel.foreignKey.association: '_DefectiveQuantityUnit'
      I_NotificationItem.DefectiveQuantityUnit,
      @Semantics.booleanIndicator: true
      I_NotificationItem.DefectIsCreatedAutomatically,
      I_NotificationItem.ProductionOrderOperationActy,
      I_NotificationItem.ProductionOrderOpActyVers,
      I_NotificationItem.Batch,
      I_NotificationItem.DefectiveSingleUnit,
      @ObjectModel.foreignKey.association: '_ManufacturingOrder'
      cast( I_NotificationItem.ProductionOrder     as vdm_qm_fertaufnr preserving type )             as ProductionOrder,
      I_NotificationItem.OrderInternalID,

      @Semantics.time: true
      cast( I_NotificationItem.CreationTime        as vdm_qerstezeit preserving type )               as CreationTime,
      @Semantics.time: true
      cast( I_NotificationItem.LastChangeTime      as vdm_qaendezeit preserving type )               as LastChangeTime,
      @ObjectModel.foreignKey.association: '_DefectClass'
      I_NotificationItem.DefectClass,
      @DefaultAggregation: #SUM
      I_NotificationItem.NumberOfDefects,
      I_NotificationItem.InspPlanOperationInternalID,
      I_NotificationItem.InspectionCharacteristic,
      I_NotificationItem.InspectionSubsetInternalID,
      I_NotificationItem.MaterialSample,

      //     Workcenter Data
      I_NotificationItem.WorkCenterTypeCode,
      I_NotificationItem.MainWorkCenterInternalID,
      cast( I_NotificationItem.MainWorkCenterPlant as vdm_qarbpwerks preserving type )               as MainWorkCenterPlant,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WrkCtrBySemanticKeyStdVH', element: 'WorkCenter' } } ]
      I_NotificationItem.MainWorkCenter, //External Id, required for auth. checks

      I_NotificationItem.Equipment,
      I_NotificationItem.FunctionalLocation,
      @Semantics.booleanIndicator: true
      cast( I_NotificationItem.IsDeleted     as vdm_qdefisdeleted preserving type )                  as IsDeleted,
      I_NotificationItem.DefectOrigin,
      @ObjectModel.foreignKey.association: '_Product'
      cast( I_NotificationItem.Material as vdm_defective_material preserving type )                  as Material,
      @ObjectModel.foreignKey.association: '_Plant'
      I_NotificationItem.Plant,
      @ObjectModel.foreignKey.association: '_StorageLocation'
      I_NotificationItem.StorageLocation,
      I_NotificationItem.WarehouseLogicalSystem,
      @ObjectModel.foreignKey.association: '_InspectionLot'
      I_NotificationItem.InspectionLot,
      @ObjectModel.foreignKey.association: '_CatalogProfile'
      I_NotificationItem.CatalogProfile,
      I_NotificationItem.ChangedDateTime,

      @ObjectModel:    {   foreignKey.association: '_DefectStatus'
      }
      DefectLifecycleStatus,
      @ObjectModel:    {   foreignKey.association: '_DefectArchivingStatus'
      }
      DefectArchivingStatus,
      @ObjectModel:    {   foreignKey.association: '_ProblemAnalysisStatus'
      }
      ProblemAnalysisStatus,
      QualityIssueReference,
      MasterLanguage,
      DefectUUID,
      @ObjectModel.foreignKey.association: '_ProductionSupplyArea'
      ProductionSupplyArea,
      @VDM.lifecycle: { status: #DEPRECATED, successor: 'EWMWarehouse' }
      @API.element: { releaseState: #DEPRECATED, successor: 'EWMWarehouse' }
      EWMWarehouse                                                                                   as Warehouse,
      @ObjectModel.foreignKey.association: '_EWM_WarehouseNumber_2'
      EWMWarehouse,
      @VDM.lifecycle: { status: #DEPRECATED, successor: 'SourceStorageType' }
      @API.element: { releaseState: #DEPRECATED, successor: 'SourceStorageType' }
      SourceStorageType                                                                              as StorageType,
      @ObjectModel.foreignKey.association: '_EWM_SourceStorageType'
      SourceStorageType,
      @ObjectModel.foreignKey.association: '_EWM_SourceStorageBin'
      SourceStorageBin,
      @ObjectModel.foreignKey.association: '_DefectCausedBy'
      DefectCausedBy,
      CostCenter,
      BOMItemInstanceUUID,
      ProducedMaterial,
      ProducedSerialNumber,

      /* Associations */
      I_NotificationItem._CatalogProfile,
      I_NotificationItem._DefectCategory,
      _DefectCode,
      I_NotificationItem._DefectCodeCatalog,
      _DefectCodeGroup,
      I_NotificationItem._InspectionLot,
      //       I_NotificationItem._Notification,  // Do not use, because Defect has no foreignKey relation to I_Notification!
      I_NotificationItem._DefectiveQuantityUnit,
      _DefectObjectCodeCatalog,
      _DefectObjectPartCodeGroup,
      _DefectObjectCode,
      _DefectStatus,
      _DefectArchivingStatus,
      _ProblemAnalysisStatus,
      _Product,
      _ProducedMaterial,
      _Plant,
      _StorageLocation,
      _DefectClass,
      _CreatedByUserContactCard,
      _LastChangedByUserContactCard,
      _DefectCauseCodeCatalog,
      _DefectCauseCodeGroup,
      _DefectCauseCode,
      _DefectLongText,
      _DefectSerialNumber,
      _ProductionSupplyArea,
      _EWM_WarehouseNumber_2,
      _EWM_SourceStorageType,
      _EWM_SourceStorageBin,
      _DefectCausedBy,
      _ManufacturingOrder,
      _ManufacturingOrderOperation,
      _InspectionOperation,
      I_NotificationItem._WorkCenter
}
where
      I_NotificationItem.Notification     like '$%' // ABAP syntax: CP "$*"
  and I_NotificationItem.NotificationItem =    '0000'
```
