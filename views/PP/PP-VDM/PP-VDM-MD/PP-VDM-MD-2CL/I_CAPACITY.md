---
name: I_CAPACITY
description: Capacity
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
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_CAPACITY

**Capacity**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CapacityInternalID` | ✓ | |  | `kapid` |  |  |
| `Plant` |  | |  | `werks` |  |  |
| `Capacity` |  | |  | `name` |  |  |
| `CapacityCategoryCode` |  | |  | `cast(kako.kapar as pph_kapart preserving type)` |  |  |
| `CapacityActiveVersion` |  | |  | `versa` |  |  |
| `CapacityIsFinite` |  | |  | `kapter` |  |  |
| `CapacityIsPooled` |  | |  | `poolk` |  |  |
| `CapacityHasIndivCapacities` |  | |  | `mehr` |  |  |
| `CapacityIsExcldFrmLongTermPlng` |  | |  | `kaplpl` |  |  |
| `CapacityNumberOfCapacities` |  | |  | `aznor` |  |  |
| `CapacityResponsiblePlanner` |  | |  | `planr` |  |  |
| `CapacityPlanUtilizationPercent` |  | |  | `ngrad` |  |  |
| `CapacityBreakDuration` |  | |  | `pause` |  |  |
| `CapIsUsedInMultiOperations` |  | |  | `cast(kako.kapavo as pph_kzavo preserving type)` |  |  |
| `ReferencedCapacityInternalID` |  | |  | `cast(kako.refid as pph_refid preserving type)` |  |  |
| `CapOverloadThresholdInPercent` |  | |  | `ueberlast` |  |  |
| `FactoryCalendar` |  | |  | `kalid` |  |  |
| `AuthorizationGroup` |  | |  | `brgru` |  |  |
| `ShiftGroup` |  | |  | `mosid` |  |  |
| `CapacityStartTime` |  | |  | `begzt` |  |  |
| `CapacityEndTime` |  | |  | `endzt` |  |  |
| `CapacityStartTimeID` |  | |  | `cast(kako.begzt as vdm_begzt preserving type)` |  |  |
| `CapacityEndTimeID` |  | |  | `cast(kako.endzt as vdm_endzt preserving type)` |  |  |
| `CapacityQuantityUnit` |  | |  | `kapeh` |  |  |
| `CapacityBaseQtyUnit` |  | |  | `meins` |  |  |
| `CapacityLastChangeDateTime` |  | |  | `case when kako.lastchange_datetime = 0 or kako.lastchange_datetime is null then cast('20190101120000' as kap_lastchange_datetime) else kako.lastchange_datetime end` |  |  |
| `ResourceType` |  | |  | `type` |  |  |
| `ResourceCategory` |  | |  | `restype` |  |  |
| `RsceValidityStartOffsetInDays` |  | |  | `lc_days_minus` |  |  |
| `RsceValidityEndOffsetInDays` |  | |  | `lc_days_plus` |  |  |
| `ResourceSortText` |  | |  | `sort` |  |  |
| `ResourceFinitenessLevel` |  | |  | `finity_level` |  |  |
| `ResourceIsBottleNeck` |  | |  | `is_bottleneck` |  |  |
| `RsceOverlappingActiesSync` |  | |  | `sync_start` |  |  |
| `ResourceTimeBufferQuantity` |  | |  | `buffertime` |  |  |
| `ResourceTimeBufferUnit` |  | |  | `buffertime_unit` |  |  |
| `ResourceMaxOverlapDuration` |  | |  | `min_overlap` |  |  |
| `ResourceMaxOverlapDurationUnit` |  | |  | `min_overlap_unit` |  |  |
| `ResourceIsCampaignRelevant` |  | |  | `campaign_ppds` |  |  |
| `RsceShiftsAndBreaksAreDerived` |  | |  | `tstream_external` |  |  |
| `PPDSPeriodSourceType` |  | |  | `pp_def_buckets` |  |  |
| `PPDSPeriodDurationSchema` |  | |  | `pp_bucket_schema` |  |  |
| `PPDSPeriodTimeRatioInPercent` |  | |  | `pp_bucket_fact` |  |  |
| `PPDSCapacitySupplyTimeCategory` |  | |  | `mix_plan_type` |  |  |
| `RsceHasStorCharcs` |  | |  | `storage_capable` |  |  |
| `RsceStorageQuantityDimension` |  | |  | `dim_storage` |  |  |
| `RsceStorageQuantityUnit` |  | |  | `storage_unit` |  |  |
| `RsceStorageMinProductionQty` |  | |  | `min_storage` |  |  |
| `RsceStorageMaxQuantity` |  | |  | `max_storage` |  |  |
| `RsceStorIsZeroOnNoFillPurity` |  | |  | `storage_to_zero` |  |  |
| `CapacityPlanningPeriodLotSize` |  | |  | `campaign_ppo` |  |  |
| `RsceStorHasMltplProds` |  | |  | `multiple_product` |  |  |
| `RsceStorZeroFillPurityThldQty` |  | |  | `zero_threshold` |  |  |
| `_Plant` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_ReferencedCapacityText` | | ✓ | | | | |
| `_CapacityCategory` | | ✓ | | | | |
| `_CapacityResponsiblePlanner` | | ✓ | | | | |
| `_FactoryCalendar` | | ✓ | | | | |
| `_ShiftGrouping` | | ✓ | | | | |
| `_CapacityQuantityUnit` | | ✓ | | | | |
| `_CapacityBaseQtyUnit` | | ✓ | | | | |
| `_Capacity` | | ✓ | | | | |
| `_CapacityBySemanticKey` | | ✓ | | | | |
| `_ResourceTimeBufferUnit` | | ✓ | | | | |
| `_RsceMaxOverlapDurationUnit` | | ✓ | | | | |
| `_RsceStorageQuantityUnit` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [1..1] |
| `_Text` | `I_CapacityText` | [0..*] |
| `_ReferencedCapacityText` | `I_CapacityText` | [0..*] |
| `_CapacityCategory` | `I_CapacityCategory` | [1..1] |
| `_CapacityResponsiblePlanner` | `I_CapacityRespPlanner` | [0..1] |
| `_FactoryCalendar` | `I_FactoryCalendar` | [0..1] |
| `_ShiftGrouping` | `I_ShiftGrouping` | [0..1] |
| `_CapacityQuantityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_CapacityBaseQtyUnit` | `I_UnitOfMeasure` | [0..1] |
| `_Capacity` | `I_Capacity` | [0..1] |
| `_CapacityBySemanticKey` | `I_CapacityBySemanticKey` | [0..1] |
| `_ResourceTimeBufferUnit` | `I_UnitOfMeasure` | [0..1] |
| `_RsceMaxOverlapDurationUnit` | `I_UnitOfMeasure` | [0..1] |
| `_RsceStorageQuantityUnit` | `I_UnitOfMeasure` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPCAPACITY'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'CapacityInternalID'
@ObjectModel.semanticKey: ['Capacity']
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #MASTER}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Capacity Header'
@ObjectModel.sapObjectNodeType.name: 'WorkCenterCapacity'
define view I_Capacity
  as select from kako as kako
  association [1..1] to I_Plant                 as _Plant                      on  $projection.Plant = _Plant.Plant
  association [0..*] to I_CapacityText          as _Text                       on  $projection.CapacityInternalID = _Text.CapacityInternalID
  association [0..*] to I_CapacityText          as _ReferencedCapacityText     on  $projection.ReferencedCapacityInternalID = _ReferencedCapacityText.CapacityInternalID
  association [1..1] to I_CapacityCategory      as _CapacityCategory           on  $projection.CapacityCategoryCode = _CapacityCategory.CapacityCategoryCode
  association [0..1] to I_CapacityRespPlanner   as _CapacityResponsiblePlanner on  $projection.CapacityResponsiblePlanner = _CapacityResponsiblePlanner.CapacityResponsiblePlanner
  association [0..1] to I_FactoryCalendar       as _FactoryCalendar            on  $projection.FactoryCalendar = _FactoryCalendar.FactoryCalendar
  association [0..1] to I_ShiftGrouping         as _ShiftGrouping              on  $projection.ShiftGroup = _ShiftGrouping.ShiftGrouping
  association [0..1] to I_UnitOfMeasure         as _CapacityQuantityUnit       on  $projection.CapacityQuantityUnit = _CapacityQuantityUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure         as _CapacityBaseQtyUnit        on  $projection.CapacityBaseQtyUnit = _CapacityBaseQtyUnit.UnitOfMeasure
  association [0..1] to I_Capacity              as _Capacity                   on  $projection.ReferencedCapacityInternalID = _Capacity.CapacityInternalID
  association [0..1] to I_CapacityBySemanticKey as _CapacityBySemanticKey      on  $projection.Plant    = _CapacityBySemanticKey.Plant
                                                                               and $projection.Capacity = _CapacityBySemanticKey.Capacity
  association [0..1] to I_UnitOfMeasure         as _ResourceTimeBufferUnit     on  $projection.ResourceTimeBufferUnit = _ResourceTimeBufferUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure         as _RsceMaxOverlapDurationUnit on  $projection.ResourceMaxOverlapDurationUnit = _RsceMaxOverlapDurationUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure         as _RsceStorageQuantityUnit    on  $projection.RsceStorageQuantityUnit = _RsceStorageQuantityUnit.UnitOfMeasure
{
      // Key
      @ObjectModel.text.association: '_Text'
  key kako.kapid                                     as CapacityInternalID,

      // Semantic Key
      @ObjectModel.foreignKey.association: '_Plant'
      kako.werks                                     as Plant,
      @ObjectModel.foreignKey.association: '_CapacityBySemanticKey'
      kako.name                                      as Capacity,

      // Attributes
      @ObjectModel.foreignKey.association: '_CapacityCategory'
      cast(kako.kapar as pph_kapart preserving type) as CapacityCategoryCode,
      kako.versa                                     as CapacityActiveVersion,
      kako.kapter                                    as CapacityIsFinite,
      kako.poolk                                     as CapacityIsPooled,
      kako.mehr                                      as CapacityHasIndivCapacities,
      kako.kaplpl                                    as CapacityIsExcldFrmLongTermPlng,
      kako.aznor                                     as CapacityNumberOfCapacities,
      @ObjectModel.foreignKey.association: '_CapacityResponsiblePlanner'
      kako.planr                                     as CapacityResponsiblePlanner,
      kako.ngrad                                     as CapacityPlanUtilizationPercent,
      kako.pause                                     as CapacityBreakDuration,
      cast(kako.kapavo as pph_kzavo preserving type) as CapIsUsedInMultiOperations,
      @ObjectModel.text.association: '_ReferencedCapacityText'
      @ObjectModel.foreignKey.association: '_Capacity'
      cast(kako.refid  as pph_refid preserving type) as ReferencedCapacityInternalID,
      kako.ueberlast                                 as CapOverloadThresholdInPercent,

      // Assignments
      @ObjectModel.foreignKey.association: '_FactoryCalendar'
      kako.kalid                                     as FactoryCalendar,
      --    @ObjectModel.foreignKey.association: '_AuthorizationGroup'
      kako.brgru                                     as AuthorizationGroup,
      @ObjectModel.foreignKey.association: '_ShiftGrouping'
      kako.mosid                                     as ShiftGroup,

      // Times (internal in seconds)
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'CapacityStartTimeID'
      kako.begzt                                     as CapacityStartTime,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'CapacityEndTimeID'
      kako.endzt                                     as CapacityEndTime,
      cast(kako.begzt as vdm_begzt preserving type)  as CapacityStartTimeID,
      cast(kako.endzt as vdm_endzt preserving type)  as CapacityEndTimeID,

      // Unit of Measures
      @Semantics.unitOfMeasure: true
      kako.kapeh                                     as CapacityQuantityUnit,
      @Semantics.unitOfMeasure: true
      kako.meins                                     as CapacityBaseQtyUnit,

      @Semantics.systemDateTime.lastChangedAt: true
      case when kako.lastchange_datetime = 0 or kako.lastchange_datetime is null then
           cast('20190101120000' as kap_lastchange_datetime)
      else kako.lastchange_datetime end              as CapacityLastChangeDateTime,

      // Advanced Planning / APO Resource Attributes
      //=============================================
      kako.type                                      as ResourceType,
      kako.restype                                   as ResourceCategory,

      // - Planning Params / General
      kako.lc_days_minus                             as RsceValidityStartOffsetInDays,
      kako.lc_days_plus                              as RsceValidityEndOffsetInDays,
      kako.sort                                      as ResourceSortText,
      kako.finity_level                              as ResourceFinitenessLevel,
      kako.is_bottleneck                             as ResourceIsBottleNeck,

      // - Planning Params / Time-Oriented
      kako.sync_start                                as RsceOverlappingActiesSync,
      @Semantics.quantity.unitOfMeasure : 'ResourceTimeBufferUnit'
      kako.buffertime                                as ResourceTimeBufferQuantity,
      kako.buffertime_unit                           as ResourceTimeBufferUnit,
      @Semantics.quantity.unitOfMeasure : 'ResourceMaxOverlapDurationUnit'
      kako.min_overlap                               as ResourceMaxOverlapDuration,
      kako.min_overlap_unit                          as ResourceMaxOverlapDurationUnit,
      kako.campaign_ppds                             as ResourceIsCampaignRelevant,

      // - Standard Capacity
      kako.tstream_external                          as RsceShiftsAndBreaksAreDerived,

      // - Standard Capacity / PPDS-Period Capacity
      kako.pp_def_buckets                            as PPDSPeriodSourceType,
      kako.pp_bucket_schema                          as PPDSPeriodDurationSchema,
      kako.pp_bucket_fact                            as PPDSPeriodTimeRatioInPercent,
      kako.mix_plan_type                             as PPDSCapacitySupplyTimeCategory,

      // - Storage Chars
      kako.storage_capable                           as RsceHasStorCharcs,
      //      @AbapCatalog.foreignKey.screenCheck : true
      kako.dim_storage                               as RsceStorageQuantityDimension,
      kako.storage_unit                              as RsceStorageQuantityUnit,

      @Semantics.quantity.unitOfMeasure : 'RsceStorageQuantityUnit'
      kako.min_storage                               as RsceStorageMinProductionQty,
      @Semantics.quantity.unitOfMeasure : 'RsceStorageQuantityUnit'
      kako.max_storage                               as RsceStorageMaxQuantity,
      kako.storage_to_zero                           as RsceStorIsZeroOnNoFillPurity,
      kako.campaign_ppo                              as CapacityPlanningPeriodLotSize,
      kako.multiple_product                          as RsceStorHasMltplProds,
      @Semantics.quantity.unitOfMeasure : 'RsceStorageQuantityUnit'
      kako.zero_threshold                            as RsceStorZeroFillPurityThldQty,

      //Associations
      _CapacityCategory,
      _FactoryCalendar,
      _Plant,
      _Text,
      _ReferencedCapacityText,
      _CapacityResponsiblePlanner,
      _ShiftGrouping,
      _CapacityQuantityUnit,
      _CapacityBaseQtyUnit,
      _CapacityBySemanticKey,
      _Capacity,
      _ResourceTimeBufferUnit,
      _RsceMaxOverlapDurationUnit,
      _RsceStorageQuantityUnit
};
```
