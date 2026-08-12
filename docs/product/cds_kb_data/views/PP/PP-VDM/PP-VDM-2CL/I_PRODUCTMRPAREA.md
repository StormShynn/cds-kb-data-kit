---
name: I_PRODUCTMRPAREA
description: "Productmrparea"
app_component: PP-VDM-2CL
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
  - PP
  - PP-VDM
  - interface-view
  - product
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_PRODUCTMRPAREA

**Productmrparea**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
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
| `Product` | ✓ | |  | `cast(matnr as productnumber preserving type)` |  |  |
| `MRPArea` | ✓ | |  | `berid` |  |  |
| `MRPPlant` |  | |  | `werks` |  |  |
| `MRPGroup` |  | |  | `disgr` |  |  |
| `MRPType` |  | |  | `dismm` |  |  |
| `MRPController` |  | |  | `cast(dispo as pph_dispo preserving type)` |  |  |
| `MRPProfile` |  | |  | `cast(dispr as vdm_dispr preserving type)` |  |  |
| `LotSizingProcedure` |  | |  | `disls` |  |  |
| `MRPPlanningCalendar` |  | |  | `mrppp` |  |  |
| `MRPPlanningCycle` |  | |  | `lfrhy` |  |  |
| `MRPSafetyStockMethod` |  | |  | `sfty_stk_meth` |  |  |
| `MaterialProcurementProfile` |  | |  | `cast(sobsl as pph_sobsl preserving type)` |  |  |
| `ProductionStorageLocation` |  | |  | `cast(lgpro as vdm_lgpro preserving type)` |  |  |
| `DfltStorLocForExtProcmt` |  | |  | `cast(lgfsb as vdm_lgfsb preserving type)` |  |  |
| `RangeOfCoverageProfile` |  | |  | `cast(rwpro as pph_rwpro preserving type)` |  |  |
| `SafetyTimePeriodProfile` |  | |  | `cast(shpro as pph_shpro preserving type)` |  |  |
| `ProductSafetyTimeMRPRelevance` |  | |  | `cast(shflg as pph_shflg preserving type)` |  |  |
| `DependentRqmtMRPRelevance` |  | |  | `cast(ahdis as pph_ahdis preserving type)` |  |  |
| `StorageCostsPercentageCode` |  | |  | `lagpr` |  |  |
| `RoundingProfile` |  | |  | `rdprf` |  |  |
| `MaintenanceStatus` |  | |  | `pstat` |  |  |
| `IsMarkedForDeletion` |  | |  | `loekz` |  |  |
| `LastChangedByUser` |  | |  | `aenam` |  |  |
| `LastChangeDate` |  | |  | `aedat` |  |  |
| `LastChangeTime` |  | |  | `aezeit` |  |  |
| `PlannedDeliveryDurationInDays` |  | |  | `plifz` |  |  |
| `PlanningTimeFenceInDays` |  | |  | `cast(fxhor as vdm_fxhor preserving type)` |  |  |
| `RqmtQtyRcptTaktTmeInWrkgDays` |  | |  | `takzt` |  |  |
| `AssemblyScrapPercent` |  | |  | `ausss` |  |  |
| `BaseUnit` |  | | `_Product` | `BaseUnit` |  |  |
| `MinimumLotSizeQuantity` |  | |  | `bstmi` |  |  |
| `MaximumLotSizeQuantity` |  | |  | `bstma` |  |  |
| `MaterialMaxStockLevelQuantity` |  | |  | `mabst` |  |  |
| `SafetyStockQuantity` |  | |  | `eisbe` |  |  |
| `LotSizeRoundingQuantity` |  | |  | `cast(bstrf as vdm_bstrf preserving type)` |  |  |
| `ReorderThresholdQuantity` |  | |  | `minbe` |  |  |
| `_Product` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_ProductPlant` | | ✓ | | | | |
| `_ProductPlantMRPArea` | | ✓ | | | | |
| `_MRPArea` | | ✓ | | | | |
| `_MRPType` | | ✓ | | | | |
| `_MRPGroup` | | ✓ | | | | |
| `_MRPResponsible` | | ✓ | | | | |
| `_MRPProfile` | | ✓ | | | | |
| `_MRPPlanningCalendar` | | ✓ | | | | |
| `_MRPPlanningCycle` | | ✓ | | | | |
| `_ProductionStorageLocation` | | ✓ | | | | |
| `_ExtProcmtStorageLocation` | | ✓ | | | | |
| `_MRPLotSizingProcedure` | | ✓ | | | | |
| `_MatlProcurementProfile` | | ✓ | | | | |
| `_RangeOfCoverageProfile` | | ✓ | | | | |
| `_SafetyTimePeriodProfile` | | ✓ | | | | |
| `_ProdSafetyTimeMRPRelevance` | | ✓ | | | | |
| `_DependentRqmtMRPRelevance` | | ✓ | | | | |
| `_StorageCostsPercentage` | | ✓ | | | | |
| `_MRPSafetyStockMethod` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_MRPPlantText` | | ✓ | | | | |
| `_ProductText` | | ✓ | | | | |
| `_MRPAreaText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [1..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_ProductPlant` | `I_ProductPlantBasic` | [1..1] |
| `_ProductPlantMRPArea` | `I_ProductPlantMRP` | [1..1] |
| `_MRPArea` | `I_MRPArea` | [1..1] |
| `_MRPType` | `I_MRPType` | [1..1] |
| `_MRPGroup` | `I_MRPGroup` | [0..1] |
| `_MRPResponsible` | `I_MRPController` | [0..1] |
| `_MRPProfile` | `I_MRPProfile` | [0..1] |
| `_MRPPlanningCalendar` | `I_MRPPlanningPeriod` | [0..1] |
| `_MRPPlanningCycle` | `I_MRPPlanningPeriod` | [0..1] |
| `_ProductionStorageLocation` | `I_StorageLocation` | [0..1] |
| `_ExtProcmtStorageLocation` | `I_StorageLocation` | [0..1] |
| `_MRPLotSizingProcedure` | `I_MRPLotSizingProcedure` | [0..1] |
| `_MatlProcurementProfile` | `I_MatlProcurementProfile` | [0..1] |
| `_RangeOfCoverageProfile` | `I_RangeOfCoverageProfile` | [0..1] |
| `_SafetyTimePeriodProfile` | `I_SafetyTimePeriodProfile` | [0..1] |
| `_ProdSafetyTimeMRPRelevance` | `I_ProdSafetyTimeMRPRelevance` | [0..1] |
| `_DependentRqmtMRPRelevance` | `I_DepdntRqmtMRPRelevance` | [0..1] |
| `_StorageCostsPercentage` | `I_StorageCostsPercentageCode` | [0..1] |
| `_MRPSafetyStockMethod` | `I_MRPSafetyStockMethod` | [0..1] |
| `_LastChangedByUser` | `I_User` | [0..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [1..1] |
| `_MRPPlantText` | `I_Plant` | [1..1] |
| `_ProductText` | `I_ProductText` | [1..*] |
| `_MRPAreaText` | `I_MRPArea` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRODMRPAREA'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AccessControl.privilegedAssociations: ['_MRPResponsible', '_LastChangedByUser']
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction: { enabled: true,
                             delta.changeDataCapture:
                                    { mapping:
                                      [ { role: #MAIN,
                                          table: 'mdma',
                                          tableElement: ['matnr'  , 'berid'],
                                          viewElement:  ['Product', 'MRPArea']
                                        } ] } }
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.representativeKey: 'MRPArea'
@ObjectModel.sapObjectNodeType.name: 'ProductMRPArea'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION]
@ObjectModel.usageType: {serviceQuality: #B, sizeCategory: #L, dataClass: #MASTER}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'MRP Area Details of a Product'
-- For the plant-specific Product MRP Area data refer to I_ProductPlantMRP

define view I_ProductMRPArea
  as select from mdma

  association [1..1] to I_Product                    as _Product                    on  $projection.Product = _Product.Product
  association [1..1] to I_Plant                      as _Plant                      on  $projection.MRPPlant = _Plant.Plant
  association [1..1] to I_ProductPlantBasic          as _ProductPlant               on  $projection.MRPPlant = _ProductPlant.Plant
                                                                                    and $projection.Product  = _ProductPlant.Product
  association [1..1] to I_ProductPlantMRP            as _ProductPlantMRPArea        on  $projection.Product  = _ProductPlantMRPArea.Product
                                                                                    and $projection.MRPArea  = _ProductPlantMRPArea.MRPArea
                                                                                    and $projection.MRPPlant = _ProductPlantMRPArea.Plant
  association [1..1] to I_MRPArea                    as _MRPArea                    on  $projection.MRPArea = _MRPArea.MRPArea
  association [1..1] to I_MRPType                    as _MRPType                    on  $projection.MRPType = _MRPType.MRPType
  association [0..1] to I_MRPGroup                   as _MRPGroup                   on  $projection.MRPGroup = _MRPGroup.MRPGroup
                                                                                    and $projection.MRPPlant = _MRPGroup.MRPPlant
  association [0..1] to I_MRPController              as _MRPResponsible             on  $projection.MRPPlant        = _MRPResponsible.Plant
                                                                                    and $projection.MRPController   = _MRPResponsible.MRPController
  association [0..1] to I_MRPProfile                 as _MRPProfile                 on  $projection.MRPProfile = _MRPProfile.MRPProfile
  association [0..1] to I_MRPPlanningPeriod          as _MRPPlanningCalendar        on  $projection.MRPPlant            = _MRPPlanningCalendar.MRPPlant
                                                                                    and $projection.MRPPlanningCalendar = _MRPPlanningCalendar.MRPPlanningCalendar
  association [0..1] to I_MRPPlanningPeriod          as _MRPPlanningCycle           on  $projection.MRPPlant         = _MRPPlanningCycle.MRPPlant
                                                                                    and $projection.MRPPlanningCycle = _MRPPlanningCycle.MRPPlanningCalendar
  association [0..1] to I_StorageLocation            as _ProductionStorageLocation  on  $projection.MRPPlant                  = _ProductionStorageLocation.Plant
                                                                                    and $projection.ProductionStorageLocation = _ProductionStorageLocation.StorageLocation
  association [0..1] to I_StorageLocation            as _ExtProcmtStorageLocation   on  $projection.MRPPlant                = _ExtProcmtStorageLocation.Plant
                                                                                    and $projection.DfltStorLocForExtProcmt = _ExtProcmtStorageLocation.StorageLocation
  association [0..1] to I_MRPLotSizingProcedure      as _MRPLotSizingProcedure      on  $projection.LotSizingProcedure = _MRPLotSizingProcedure.MaterialLotSizingProcedure
  association [0..1] to I_MatlProcurementProfile     as _MatlProcurementProfile     on  $projection.MaterialProcurementProfile = _MatlProcurementProfile.MaterialProcurementProfile
                                                                                    and $projection.MRPPlant                   = _MatlProcurementProfile.Plant
  association [0..1] to I_RangeOfCoverageProfile     as _RangeOfCoverageProfile     on  $projection.MRPPlant               = _RangeOfCoverageProfile.Plant
                                                                                    and $projection.RangeOfCoverageProfile = _RangeOfCoverageProfile.RangeOfCoverageProfile
  association [0..1] to I_SafetyTimePeriodProfile    as _SafetyTimePeriodProfile    on  $projection.MRPPlant                = _SafetyTimePeriodProfile.Plant
                                                                                    and $projection.SafetyTimePeriodProfile = _SafetyTimePeriodProfile.SafetyTimePeriodProfile
  association [0..1] to I_ProdSafetyTimeMRPRelevance as _ProdSafetyTimeMRPRelevance on  $projection.ProductSafetyTimeMRPRelevance = _ProdSafetyTimeMRPRelevance.ProductSafetyTimeMRPRelevance
  association [0..1] to I_DepdntRqmtMRPRelevance     as _DependentRqmtMRPRelevance  on  $projection.DependentRqmtMRPRelevance = _DependentRqmtMRPRelevance.DependentRqmtMRPRelevance
  association [0..1] to I_StorageCostsPercentageCode as _StorageCostsPercentage     on  $projection.MRPPlant                   = _StorageCostsPercentage.Plant
                                                                                    and $projection.StorageCostsPercentageCode = _StorageCostsPercentage.StorageCostsPercentageCode
  association [0..1] to I_MRPSafetyStockMethod       as _MRPSafetyStockMethod       on  $projection.MRPSafetyStockMethod = _MRPSafetyStockMethod.MRPSafetyStockMethod
  association [0..1] to I_User                       as _LastChangedByUser          on  $projection.LastChangedByUser = _LastChangedByUser.UserID
  association [1..1] to I_UnitOfMeasure              as _BaseUnit                   on  $projection.BaseUnit = _BaseUnit.UnitOfMeasure
  -- start new associations for full coverage of text relations
  association [1..1] to I_Plant                      as _MRPPlantText               on  $projection.MRPPlant = _MRPPlantText.Plant
  association [1..*] to I_ProductText                as _ProductText                on  $projection.Product = _ProductText.Product
  association [1..1] to I_MRPArea                    as _MRPAreaText                on  $projection.MRPArea = _MRPAreaText.MRPArea
  -- end new associations for full coverage of text relations
{
      // Key
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' } } ]
      @ObjectModel.foreignKey.association: '_Product'
      @ObjectModel.sapObjectNodeTypeReference: 'Product'
      @ObjectModel.text.association: '_ProductText'
  key cast(matnr as productnumber preserving type) as Product,
      -- representative key
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MRPAreaVH', element: 'MRPArea' } } ]
      @ObjectModel.sapObjectNodeTypeReference: 'MRPArea'
  key berid                                        as MRPArea,

      // Assignments
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_Plant'
      @ObjectModel.sapObjectNodeTypeReference: 'Plant'
      werks                                        as MRPPlant,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MRPGroup', element: 'MRPGroup' } } ]
      @ObjectModel.foreignKey.association: '_MRPGroup'
      @ObjectModel.sapObjectNodeTypeReference: 'MRPGroup'
      disgr                                        as MRPGroup,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MRPTypeVH', element: 'MRPType' } } ]
      @ObjectModel.foreignKey.association: '_MRPType'
      @ObjectModel.sapObjectNodeTypeReference: 'MRPType'
      dismm                                        as MRPType,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MRPControllerVH', element: 'MRPController' } } ]
      @ObjectModel.foreignKey.association: '_MRPResponsible'
      @ObjectModel.sapObjectNodeTypeReference: 'MRPController'
      cast(dispo as pph_dispo preserving type)     as MRPController,
      @ObjectModel.foreignKey.association: '_MRPProfile'
      @ObjectModel.sapObjectNodeTypeReference: 'MRPProfile'
      cast(dispr as vdm_dispr preserving type)     as MRPProfile,
      @ObjectModel.foreignKey.association: '_MRPLotSizingProcedure'
      disls                                        as LotSizingProcedure,
      @ObjectModel.foreignKey.association: '_MRPPlanningCalendar'
      @ObjectModel.sapObjectNodeTypeReference: 'MRPPlanningCalendar'
      mrppp                                        as MRPPlanningCalendar,
      @ObjectModel.foreignKey.association: '_MRPPlanningCycle'
      lfrhy                                        as MRPPlanningCycle,
      @ObjectModel.foreignKey.association: '_MRPSafetyStockMethod'
      @ObjectModel.sapObjectNodeTypeReference: 'ProductSafetyStockMethod'
      sfty_stk_meth                                as MRPSafetyStockMethod,
      @ObjectModel.foreignKey.association: '_MatlProcurementProfile'
      @ObjectModel.sapObjectNodeTypeReference: 'ProcurementSubType'
      cast(sobsl as pph_sobsl preserving type)     as MaterialProcurementProfile,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_StorageLocationStdVH', element: 'StorageLocation' } } ]
      @ObjectModel.foreignKey.association: '_ProductionStorageLocation'
      @ObjectModel.sapObjectNodeTypeReference: 'StorageLocation'
      cast(lgpro as vdm_lgpro preserving type)     as ProductionStorageLocation,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_StorageLocationStdVH', element: 'StorageLocation' } } ]
      @ObjectModel.foreignKey.association: '_ExtProcmtStorageLocation'
--    @ObjectModel.sapObjectNodeTypeReference: 'StorageLocation'
      cast(lgfsb as vdm_lgfsb preserving type)     as DfltStorLocForExtProcmt,
      @ObjectModel.foreignKey.association: '_RangeOfCoverageProfile'
      @ObjectModel.sapObjectNodeTypeReference: 'MatlStkRangeOfCoverageProfile'
      cast(rwpro as pph_rwpro preserving type)     as RangeOfCoverageProfile,
      @ObjectModel.foreignKey.association: '_SafetyTimePeriodProfile'
      @ObjectModel.sapObjectNodeTypeReference: 'MatlStkSafetyTimePeriodProfile'
      cast(shpro as pph_shpro preserving type)     as SafetyTimePeriodProfile,
      @ObjectModel.foreignKey.association: '_ProdSafetyTimeMRPRelevance'
      @ObjectModel.sapObjectNodeTypeReference: 'ProductSafetyTimeMRPRelevance'  
      cast(shflg as pph_shflg preserving type)     as ProductSafetyTimeMRPRelevance,
      @ObjectModel.foreignKey.association: '_DependentRqmtMRPRelevance'
      @ObjectModel.sapObjectNodeTypeReference: 'DependentRqmtMRPRelevance'
      cast(ahdis as pph_ahdis preserving type)     as DependentRqmtMRPRelevance,
      @ObjectModel.foreignKey.association: '_StorageCostsPercentage'
      @ObjectModel.sapObjectNodeTypeReference: 'StorageCostsPercentageCode'
      lagpr                                        as StorageCostsPercentageCode,
      rdprf                                        as RoundingProfile,
      pstat                                        as MaintenanceStatus,

      // Admin data
      loekz                                        as IsMarkedForDeletion,
      @Semantics.user.lastChangedBy: true
      aenam                                        as LastChangedByUser,
      @Semantics.systemDate.lastChangedAt: true
      aedat                                        as LastChangeDate,
      @Semantics.systemTime.lastChangedAt: true
      aezeit                                       as LastChangeTime,

      // Durations
      plifz                                        as PlannedDeliveryDurationInDays,      
      cast(fxhor as vdm_fxhor preserving type)     as PlanningTimeFenceInDays,
      takzt                                        as RqmtQtyRcptTaktTmeInWrkgDays,

      // Quantities an UoM
      ausss                                        as AssemblyScrapPercent,
      @ObjectModel.foreignKey.association: '_BaseUnit'
      @Semantics.unitOfMeasure: true
      _Product.BaseUnit                            as BaseUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Aggregation.default: #MIN
      bstmi                                        as MinimumLotSizeQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Aggregation.default: #MAX
      bstma                                        as MaximumLotSizeQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Aggregation.default: #MAX
      mabst                                        as MaterialMaxStockLevelQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Aggregation.default: #SUM
      eisbe                                        as SafetyStockQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Aggregation.default: #SUM
      cast(bstrf as vdm_bstrf preserving type)     as LotSizeRoundingQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Aggregation.default: #MIN
      minbe                                        as ReorderThresholdQuantity,

      // Associations
      _Product,
      _Plant,
      _ProductPlant,
      _ProductPlantMRPArea,
      _MRPArea,
      _MRPGroup,
      _MRPType,
      _MRPResponsible,
      _MRPProfile,
      _MRPPlanningCalendar,
      _MRPPlanningCycle,
      _MRPLotSizingProcedure,
      _ProductionStorageLocation,
      _ExtProcmtStorageLocation,
      _MatlProcurementProfile,
      _RangeOfCoverageProfile,
      _SafetyTimePeriodProfile,
      _ProdSafetyTimeMRPRelevance,
      _DependentRqmtMRPRelevance,
      _StorageCostsPercentage,
      _MRPSafetyStockMethod,
      _LastChangedByUser,
      _BaseUnit,

      // Text relations
      _ProductText,
      _MRPPlantText,
      _MRPAreaText
};
```
