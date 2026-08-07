---
name: I_PRODUCTIONVERSION
description: Productionversion
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - product
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_PRODUCTIONVERSION

**Productionversion**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Material` | ✓ | |  | `matnr` |  |  |
| `Plant` | ✓ | |  | `werks` |  |  |
| `ProductionVersion` | ✓ | |  | `verid` |  |  |
| `ProductionVersionText` |  | |  | `text1` |  |  |
| `ChangeHistoryCount` |  | |  |  |  |  |
| `ChangeNumber` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `BillOfOperationsType` |  | |  | `cast(mkal.plnty as billofoperationstype preserving type)` |  |  |
| `BillOfOperationsGroup` |  | |  | `cast(mkal.plnnr as billofoperationsgroup preserving type)` |  |  |
| `BillOfOperationsVariant` |  | |  | `cast(mkal.alnal as billofoperationsvariant preserving type)` |  |  |
| `BillOfMaterialVariantUsage` |  | |  | `stlan` |  |  |
| `BillOfMaterialVariant` |  | |  | `stlal` |  |  |
| `ProductionLine` |  | |  | `mdv01` |  |  |
| `ProductionSupplyArea` |  | |  | `cast(mkal.prvbe as pph_prvbe preserving type)` |  |  |
| `ProductionVersionGroup` |  | |  | `cast(mkal.mdv02 as pph_mdv preserving type)` |  |  |
| `MainProduct` |  | |  | `cast(mkal.matko as pph_matko preserving type)` |  |  |
| `MaterialCostApportionmentStruc` |  | |  | `csplt` |  |  |
| `IssuingStorageLocation` |  | |  | `elpro` |  |  |
| `ReceivingStorageLocation` |  | |  | `alort` |  |  |
| `OriginalBatchReferenceMaterial` |  | |  | `cast(mkal.ucmat as pph_rfmat preserving type)` |  |  |
| `QuantityDistributionKey` |  | |  | `verto` |  |  |
| `ProductionVersionStatus` |  | |  | `prfg_f` |  |  |
| `ProductionVersionLastCheckDate` |  | |  | `cast(mkal.prdat as pph_mkprdat preserving type)` |  |  |
| `RateBasedPlanningStatus` |  | |  | `cast(mkal.prfg_r as pph_prfgr preserving type)` |  |  |
| `PreliminaryPlanningStatus` |  | |  | `cast(mkal.prfg_g as pph_prfgg preserving type)` |  |  |
| `BOMCheckStatus` |  | |  | `cast(mkal.prfg_s as pph_prfgs preserving type)` |  |  |
| `ValidityStartDate` |  | |  | `cast(mkal.adatu as vdm_v_validity_start_date preserving type)` |  |  |
| `ValidityEndDate` |  | |  | `cast(mkal.bdatu as vdm_v_validity_end_date preserving type)` |  |  |
| `ProductionVersionIsLocked` |  | |  | `mksp` |  |  |
| `ProdnVersIsAllowedForRptvMfg` |  | |  | `serkz` |  |  |
| `HasVersionCtrldBOMAndRouting` |  | |  | `versind` |  |  |
| `PlanningAndExecutionBOMIsDiff` |  | |  | `diffplanexemstr` |  |  |
| `ExecBillOfMaterialVariantUsage` |  | |  | `exe_stlan` |  |  |
| `ExecBillOfMaterialVariant` |  | |  | `exe_stlal` |  |  |
| `ExecBillOfOperationsType` |  | |  | `exe_plnty` |  |  |
| `ExecBillOfOperationsGroup` |  | |  | `exe_plnnr` |  |  |
| `ExecBillOfOperationsVariant` |  | |  | `exe_alnal` |  |  |
| `Warehouse` |  | |  | `ewm_lgnum` |  |  |
| `DestinationStorageBin` |  | |  | `ewm_lgpla` |  |  |
| `ProcurementType` |  | |  | `beskz` |  |  |
| `MaterialProcurementProfile` |  | |  | `sobsl` |  |  |
| `UsgeProbltyWthVersCtrlInPct` |  | |  | `ewahr` |  |  |
| `MaterialBaseUnit` |  | | `_Product` | `BaseUnit` |  |  |
| `MaterialMinLotSizeQuantity` |  | |  | `bstmi` |  |  |
| `MaterialMaxLotSizeQuantity` |  | |  | `bstma` |  |  |
| `CostingLotSize` |  | |  | `losgr` |  |  |
| `DistributionKey` |  | |  | `verto` |  |  |
| `TargetProductionSupplyArea` |  | |  | `cast(mkal.tsa_prvbe as pph_prvbe preserving type)` |  |  |
| `_Material` | | ✓ | | | | |
| `_MaterialText` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ProductPlant` | | ✓ | | | | |
| `_MainProduct` | | ✓ | | | | |
| `_OriglBatchReferenceMaterial` | | ✓ | | | | |
| `_BillOfOperationsType` | | ✓ | | | | |
| `_BillOfOperationsGroup` | | ✓ | | | | |
| `_BillOfOperations` | | ✓ | | | | |
| `_ProductionLine` | | ✓ | | | | |
| `_ProductionVersionGroup` | | ✓ | | | | |
| `_ProductionSupplyArea` | | ✓ | | | | |
| `_TargetProductionSupplyArea` | | ✓ | | | | |
| `_IssuingStorageLocation` | | ✓ | | | | |
| `_ReceivingStorageLocation` | | ✓ | | | | |
| `_MatlCostApportionmentStruc` | | ✓ | | | | |
| `_QuantityDistributionKey` | | ✓ | | | | |
| `_MaterialBaseUnit` | | ✓ | | | | |
| `_MatlProcurementProfile` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Material` | `I_Material` | [1..1] |
| `_MaterialText` | `I_MaterialText` | [1..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_Product` | `I_Product` | [1..1] |
| `_ProductPlant` | `I_ProductPlant` | [1..1] |
| `_MainProduct` | `I_Product` | [0..1] |
| `_OriglBatchReferenceMaterial` | `I_Product` | [0..1] |
| `_BillOfOperationsType` | `I_BillOfOperationsType` | [1..1] |
| `_BillOfOperationsGroup` | `I_BillOfOperationsGroup` | [1..1] |
| `_BillOfOperations` | `I_BillOfOperations` | [1..1] |
| `_ProductionLine` | `I_ProductionLine` | [0..1] |
| `_ProductionVersionGroup` | `I_ProductionVersionGroup` | [0..1] |
| `_ProductionSupplyArea` | `I_ProductionSupplyArea` | [0..1] |
| `_TargetProductionSupplyArea` | `I_ProductionSupplyArea` | [0..1] |
| `_IssuingStorageLocation` | `I_StorageLocation` | [0..1] |
| `_ReceivingStorageLocation` | `I_StorageLocation` | [0..1] |
| `_MatlCostApportionmentStruc` | `I_MatlCostApportionmentStruc` | [0..1] |
| `_QuantityDistributionKey` | `I_MRPQuantityDistributionKey` | [0..1] |
| `_MaterialBaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_MatlProcurementProfile` | `I_MatlProcurementProfile` | [0..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IPPPRODVERSION'
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'ProductionVersion'
@ObjectModel.usageType: {serviceQuality: #B, sizeCategory: #L, dataClass: #MASTER}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Production Version'
@ObjectModel.sapObjectNodeType.name: 'ProductionVersion'
define view entity I_ProductionVersion
  as select from           mkal                         as mkal
    left outer to one join I_ProdnVersLastChangeHistory as mkal_aend on  mkal_aend.Material          = mkal.matnr
                                                                     and mkal_aend.Plant             = mkal.werks
                                                                     and mkal_aend.ProductionVersion = mkal.verid

  association [1..1] to I_Material                   as _Material                    on  $projection.Material = _Material.Material

  association [1..1] to I_MaterialText               as _MaterialText                on  $projection.Material   = _MaterialText.Material
                                                                                     and _MaterialText.Language = $session.system_language
  association [1..1] to I_Plant                      as _Plant                       on  $projection.Plant = _Plant.Plant
  association [1..1] to I_Product                    as _Product                     on  $projection.Material = _Product.Product
  association [1..1] to I_ProductPlant               as _ProductPlant                on  $projection.Material = _ProductPlant.Product
                                                                                     and $projection.Plant    = _ProductPlant.Plant
  association [0..1] to I_Product                    as _MainProduct                 on  $projection.MainProduct = _MainProduct.Product
  association [0..1] to I_Product                    as _OriglBatchReferenceMaterial on  $projection.OriginalBatchReferenceMaterial = _OriglBatchReferenceMaterial.Product
  association [1..1] to I_BillOfOperationsType       as _BillOfOperationsType        on  $projection.BillOfOperationsType = _BillOfOperationsType.BillOfOperationsType
  association [1..1] to I_BillOfOperationsGroup      as _BillOfOperationsGroup       on  $projection.BillOfOperationsType  = _BillOfOperationsGroup.BillOfOperationsType
                                                                                     and $projection.BillOfOperationsGroup = _BillOfOperationsGroup.BillOfOperationsGroup
  association [1..1] to I_BillOfOperations           as _BillOfOperations            on  $projection.BillOfOperationsType    = _BillOfOperations.BillOfOperationsType
                                                                                     and $projection.BillOfOperationsGroup   = _BillOfOperations.BillOfOperationsGroup
                                                                                     and $projection.BillOfOperationsVariant = _BillOfOperations.BillOfOperationsVariant
  association [0..1] to I_ProductionLine             as _ProductionLine              on  $projection.Plant          = _ProductionLine.Plant
                                                                                     and $projection.ProductionLine = _ProductionLine.ProductionLine
  association [0..1] to I_ProductionVersionGroup     as _ProductionVersionGroup      on  $projection.Plant                  = _ProductionVersionGroup.Plant
                                                                                     and $projection.ProductionVersionGroup = _ProductionVersionGroup.ProductionVersionGroup
  association [0..1] to I_ProductionSupplyArea       as _ProductionSupplyArea        on  $projection.Plant                = _ProductionSupplyArea.Plant
                                                                                     and $projection.ProductionSupplyArea = _ProductionSupplyArea.ProductionSupplyArea
  association [0..1] to I_ProductionSupplyArea       as _TargetProductionSupplyArea  on  $projection.Plant                      = _TargetProductionSupplyArea.Plant
                                                                                     and $projection.TargetProductionSupplyArea = _TargetProductionSupplyArea.ProductionSupplyArea
  association [0..1] to I_StorageLocation            as _IssuingStorageLocation      on  $projection.Plant                  = _IssuingStorageLocation.Plant
                                                                                     and $projection.IssuingStorageLocation = _IssuingStorageLocation.StorageLocation
  association [0..1] to I_StorageLocation            as _ReceivingStorageLocation    on  $projection.Plant                    = _ReceivingStorageLocation.Plant
                                                                                     and $projection.ReceivingStorageLocation = _ReceivingStorageLocation.StorageLocation
  association [0..1] to I_MatlCostApportionmentStruc as _MatlCostApportionmentStruc  on  $projection.Material                       = _MatlCostApportionmentStruc.Material
                                                                                     and $projection.Plant                          = _MatlCostApportionmentStruc.Plant
                                                                                     and $projection.MaterialCostApportionmentStruc = _MatlCostApportionmentStruc.MaterialCostApportionmentStruc
  association [0..1] to I_MRPQuantityDistributionKey as _QuantityDistributionKey     on  $projection.Plant                   = _QuantityDistributionKey.Plant
                                                                                     and $projection.QuantityDistributionKey = _QuantityDistributionKey.QuantityDistributionKey
  association [0..1] to I_UnitOfMeasure              as _MaterialBaseUnit            on  $projection.MaterialBaseUnit = _MaterialBaseUnit.UnitOfMeasure
  association [0..1] to I_MatlProcurementProfile     as _MatlProcurementProfile      on  $projection.Plant                      = _MatlProcurementProfile.Plant
                                                                                     and $projection.MaterialProcurementProfile = _MatlProcurementProfile.MaterialProcurementProfile
{
      // Key
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MaterialStdVH', element: 'Material' } } ]
      @ObjectModel.foreignKey.association: '_Material'
  key mkal.matnr                                                    as Material,
      @ObjectModel.foreignKey.association: '_Plant'
  key mkal.werks                                                    as Plant,
      @ObjectModel.text.element: ['ProductionVersionText']
  key mkal.verid                                                    as ProductionVersion,

      // Text
      @Semantics.text: true
      @Search: {defaultSearchElement: true, ranking: #MEDIUM, fuzzinessThreshold: 0.8}
      mkal.text1                                                    as ProductionVersionText,

      // Administrative Data
      mkal_aend.ChangeHistoryCount,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ChangeMasterStdVH', element: 'ChangeNumber' } } ]
      @ObjectModel.foreignKey.association: '_ChangeMaster'
      mkal_aend.ChangeNumber,
      @Semantics.systemDate.createdAt: true
      mkal_aend.CreationDate,
      @Semantics.user.createdBy: true
      mkal_aend.CreatedByUser,
      @Semantics.systemDate.lastChangedAt: true
      mkal_aend.LastChangeDate,
      @Semantics.user.lastChangedBy: true
      mkal_aend.LastChangedByUser,

      // Key of Bill of Operations (BOO, e.g. Routing)
      @ObjectModel.foreignKey.association: '_BillOfOperationsType'
      cast(mkal.plnty as billofoperationstype preserving type)      as BillOfOperationsType,
      @ObjectModel.foreignKey.association: '_BillOfOperationsGroup'
      cast(mkal.plnnr as billofoperationsgroup preserving type)     as BillOfOperationsGroup,
      @ObjectModel.foreignKey.association: '_BillOfOperations'
      cast(mkal.alnal as billofoperationsvariant preserving type)   as BillOfOperationsVariant,
      // Key for Bill of Material (BOM) in addition to matnr and werks
      mkal.stlan                                                    as BillOfMaterialVariantUsage,
      mkal.stlal                                                    as BillOfMaterialVariant,

      // Assignments
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionLineStdVH', element: 'ProductionLine' } } ]
      @ObjectModel.foreignKey.association: '_ProductionLine'
      mkal.mdv01                                                    as ProductionLine,
      @ObjectModel.foreignKey.association: '_ProductionSupplyArea'
      cast(mkal.prvbe as pph_prvbe  preserving type)                as ProductionSupplyArea,
      @ObjectModel.foreignKey.association: '_ProductionVersionGroup'
      cast(mkal.mdv02 as pph_mdv   preserving type)                 as ProductionVersionGroup,
      @ObjectModel.foreignKey.association: '_MainProduct'
      cast(mkal.matko as pph_matko  preserving type)                as MainProduct,
      @ObjectModel.foreignKey.association: '_MatlCostApportionmentStruc'
      mkal.csplt                                                    as MaterialCostApportionmentStruc,
      @ObjectModel.foreignKey.association: '_IssuingStorageLocation'
      mkal.elpro                                                    as IssuingStorageLocation,
      @ObjectModel.foreignKey.association: '_ReceivingStorageLocation'
      mkal.alort                                                    as ReceivingStorageLocation,
      @ObjectModel.foreignKey.association: '_OriglBatchReferenceMaterial'
      cast(mkal.ucmat as pph_rfmat  preserving type)                as OriginalBatchReferenceMaterial,
      @ObjectModel.foreignKey.association: '_QuantityDistributionKey'
      mkal.verto                                                    as QuantityDistributionKey,
      mkal.prfg_f                                                   as ProductionVersionStatus,
      cast(mkal.prdat as pph_mkprdat preserving type)               as ProductionVersionLastCheckDate,
      cast(mkal.prfg_r as pph_prfgr  preserving type)               as RateBasedPlanningStatus,
      cast(mkal.prfg_g as pph_prfgg  preserving type)               as PreliminaryPlanningStatus,
      cast(mkal.prfg_s as pph_prfgs  preserving type)               as BOMCheckStatus,

      // Attributes
      @Semantics.businessDate.from: true
      cast(mkal.adatu as vdm_v_validity_start_date preserving type) as ValidityStartDate,
      @Semantics.businessDate.to: true
      cast(mkal.bdatu as vdm_v_validity_end_date preserving type)   as ValidityEndDate,
      mkal.mksp                                                     as ProductionVersionIsLocked,
      mkal.serkz                                                    as ProdnVersIsAllowedForRptvMfg,
      mkal.versind                                                  as HasVersionCtrldBOMAndRouting,
      mkal.diffplanexemstr                                          as PlanningAndExecutionBOMIsDiff,
      mkal.exe_stlan                                                as ExecBillOfMaterialVariantUsage,
      mkal.exe_stlal                                                as ExecBillOfMaterialVariant,
      mkal.exe_plnty                                                as ExecBillOfOperationsType,
      mkal.exe_plnnr                                                as ExecBillOfOperationsGroup,
      mkal.exe_alnal                                                as ExecBillOfOperationsVariant,
      mkal.ewm_lgnum                                                as Warehouse,
      mkal.ewm_lgpla                                                as DestinationStorageBin,
      mkal.beskz                                                    as ProcurementType,
      @ObjectModel.foreignKey.association: '_MatlProcurementProfile'
      mkal.sobsl                                                    as MaterialProcurementProfile,
      mkal.ewahr                                                    as UsgeProbltyWthVersCtrlInPct,

      // Quantity and UoM
      // @Semantics.unitOfMeasure: true; commented for cds2.0
      _Product.BaseUnit                                             as MaterialBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
      @DefaultAggregation: #MIN
      mkal.bstmi                                                    as MaterialMinLotSizeQuantity,
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
      @DefaultAggregation: #MAX
      mkal.bstma                                                    as MaterialMaxLotSizeQuantity,
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
      mkal.losgr                                                    as CostingLotSize,

      // kept for compatibility reasons
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'QuantityDistributionKey'
      mkal.verto                                                    as DistributionKey,

      @ObjectModel.foreignKey.association: '_TargetProductionSupplyArea'
      cast(mkal.tsa_prvbe as pph_prvbe  preserving type)            as TargetProductionSupplyArea,

      // Associations
      _Material,
      _MaterialText,
      _Product,
      _ProductPlant,
      _Plant,
      _BillOfOperationsType,
      _BillOfOperationsGroup,
      _BillOfOperations,
      _ProductionLine,
      _ProductionVersionGroup,
      _ProductionSupplyArea,
      _TargetProductionSupplyArea,
      _MainProduct,
      _OriglBatchReferenceMaterial,
      _IssuingStorageLocation,
      _ReceivingStorageLocation,
      _MatlCostApportionmentStruc,
      _QuantityDistributionKey,
      _MaterialBaseUnit,
      _MatlProcurementProfile,
      mkal_aend._ChangeMaster
};
```
