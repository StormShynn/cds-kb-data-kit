---
name: I_WORKCENTERPOOLEDCAPACITY
description: Work CenterPOOLEDCAPACITY
app_component: PP-BD-WKC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-BD
  - PP-BD-WKC
  - interface-view
  - work-center
  - component:PP-BD-WKC-2CL
  - lob:Manufacturing
---
# I_WORKCENTERPOOLEDCAPACITY

**Work CenterPOOLEDCAPACITY**

| Property | Value |
|---|---|
| App Component | `PP-BD-WKC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CapacityInternalID` | `CapacityInternalID` |
| `Plant` | `Plant` |
| `Capacity` | `Capacity` |
| `CapacityCategoryCode` | `CapacityCategoryCode` |
| `CapacityActiveVersion` | `CapacityActiveVersion` |
| `CapacityIsFinite` | `CapacityIsFinite` |
| `CapacityIsPooled` | `CapacityIsPooled` |
| `CapacityHasIndivCapacities` | `CapacityHasIndivCapacities` |
| `CapacityIsExcldFrmLongTermPlng` | `CapacityIsExcldFrmLongTermPlng` |
| `CapacityNumberOfCapacities` | `CapacityNumberOfCapacities` |
| `CapacityResponsiblePlanner` | `CapacityResponsiblePlanner` |
| `CapacityPlanUtilizationPercent` | `CapacityPlanUtilizationPercent` |
| `CapacityBreakDuration` | `CapacityBreakDuration` |
| `CapIsUsedInMultiOperations` | `CapIsUsedInMultiOperations` |
| `ReferencedCapacityInternalID` | `ReferencedCapacityInternalID` |
| `CapOverloadThresholdInPercent` | `CapOverloadThresholdInPercent` |
| `FactoryCalendar` | `FactoryCalendar` |
| `AuthorizationGroup` | `AuthorizationGroup` |
| `ShiftGroup` | `ShiftGroup` |
| `CapacityStartTimeID` | `CapacityStartTimeID` |
| `CapacityEndTimeID` | `CapacityEndTimeID` |
| `CapacityQuantityUnit` | `CapacityQuantityUnit` |
| `CapacityBaseQtyUnit` | `CapacityBaseQtyUnit` |
| `CapacityLastChangeDateTime` | `CapacityLastChangeDateTime` |
| `ResourceType` | `ResourceType` |
| `ResourceCategory` | `ResourceCategory` |
| `RsceValidityStartOffsetInDays` | `RsceValidityStartOffsetInDays` |
| `RsceValidityEndOffsetInDays` | `RsceValidityEndOffsetInDays` |
| `ResourceSortText` | `ResourceSortText` |
| `ResourceFinitenessLevel` | `ResourceFinitenessLevel` |
| `ResourceIsBottleNeck` | `ResourceIsBottleNeck` |
| `RsceOverlappingActiesSync` | `RsceOverlappingActiesSync` |
| `ResourceTimeBufferQuantity` | `ResourceTimeBufferQuantity` |
| `ResourceTimeBufferUnit` | `ResourceTimeBufferUnit` |
| `ResourceMaxOverlapDuration` | `ResourceMaxOverlapDuration` |
| `ResourceMaxOverlapDurationUnit` | `ResourceMaxOverlapDurationUnit` |
| `ResourceIsCampaignRelevant` | `ResourceIsCampaignRelevant` |
| `RsceShiftsAndBreaksAreDerived` | `RsceShiftsAndBreaksAreDerived` |
| `PPDSPeriodSourceType` | `PPDSPeriodSourceType` |
| `PPDSPeriodDurationSchema` | `PPDSPeriodDurationSchema` |
| `PPDSPeriodTimeRatioInPercent` | `PPDSPeriodTimeRatioInPercent` |
| `PPDSCapacitySupplyTimeCategory` | `PPDSCapacitySupplyTimeCategory` |
| `RsceHasStorCharcs` | `RsceHasStorCharcs` |
| `RsceStorageQuantityDimension` | `RsceStorageQuantityDimension` |
| `RsceStorageQuantityUnit` | `RsceStorageQuantityUnit` |
| `RsceStorageMinProductionQty` | `RsceStorageMinProductionQty` |
| `RsceStorageMaxQuantity` | `RsceStorageMaxQuantity` |
| `RsceStorIsZeroOnNoFillPurity` | `RsceStorIsZeroOnNoFillPurity` |
| `CapacityPlanningPeriodLotSize` | `CapacityPlanningPeriodLotSize` |
| `RsceStorHasMltplProds` | `RsceStorHasMltplProds` |
| `RsceStorZeroFillPurityThldQty` | `RsceStorZeroFillPurityThldQty` |
| `_CapacityCategory` | *Association* |
| `_FactoryCalendar` | *Association* |
| `_Plant` | *Association* |
| `_Text` | *Association* |
| `_ReferencedCapacityText` | *Association* |
| `_CapacityResponsiblePlanner` | *Association* |
| `_ShiftGrouping` | *Association* |
| `_CapacityQuantityUnit` | *Association* |
| `_CapacityBaseQtyUnit` | *Association* |
| `_CapacityBySemanticKey` | *Association* |
| `_Capacity` | *Association* |
| `_ResourceTimeBufferUnit` | *Association* |
| `_RsceMaxOverlapDurationUnit` | *Association* |
| `_RsceStorageQuantityUnit` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IWRKCTRPOOLEDCAP'
@Analytics.dataExtraction.enabled: true
@Analytics.internalName:#LOCAL
@EndUserText.label: 'Work Center Pooled Capacity'
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'CapacityInternalID'
@ObjectModel.semanticKey: ['Capacity']
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #MASTER}
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.sapObjectNodeType.name: 'PooledCapacity'
define view entity I_WorkCenterPooledCapacity
  as select from I_Capacity

{
      @ObjectModel.text.association: '_Text'
  key CapacityInternalID,
      // Semantic Key
      @ObjectModel.foreignKey.association: '_Plant'
      Plant,
      @ObjectModel.foreignKey.association: '_CapacityBySemanticKey'
      Capacity,
      // Attributes
      @ObjectModel.foreignKey.association: '_CapacityCategory'
      CapacityCategoryCode,
      CapacityActiveVersion,
      CapacityIsFinite,
      CapacityIsPooled,
      CapacityHasIndivCapacities,
      CapacityIsExcldFrmLongTermPlng,
      CapacityNumberOfCapacities,
      @ObjectModel.foreignKey.association: '_CapacityResponsiblePlanner'
      CapacityResponsiblePlanner,
      CapacityPlanUtilizationPercent,
      CapacityBreakDuration,
      CapIsUsedInMultiOperations,
      @ObjectModel.text.association: '_ReferencedCapacityText'
      @ObjectModel.foreignKey.association: '_Capacity'
      ReferencedCapacityInternalID,
      CapOverloadThresholdInPercent,
      
      // Assignments
      @ObjectModel.foreignKey.association: '_FactoryCalendar'
      FactoryCalendar,
      AuthorizationGroup,
      @ObjectModel.foreignKey.association: '_ShiftGrouping'
      ShiftGroup,
      // Times
      @Semantics.durationInHours:true
      CapacityStartTimeID,
      @Semantics.durationInHours:true
      CapacityEndTimeID,
      // Unit of Measures
      CapacityQuantityUnit,
      CapacityBaseQtyUnit,
      @Semantics.systemDateTime.lastChangedAt: true
      CapacityLastChangeDateTime,
      // APO Fields
      ResourceType,
      ResourceCategory,
      RsceValidityStartOffsetInDays,
      RsceValidityEndOffsetInDays,
      ResourceSortText,
      ResourceFinitenessLevel,
      ResourceIsBottleNeck,
      RsceOverlappingActiesSync,
      @Semantics.quantity.unitOfMeasure : 'ResourceTimeBufferUnit'
      ResourceTimeBufferQuantity,
      ResourceTimeBufferUnit,
      @Semantics.quantity.unitOfMeasure : 'ResourceMaxOverlapDurationUnit'
      ResourceMaxOverlapDuration,
      ResourceMaxOverlapDurationUnit,
      ResourceIsCampaignRelevant,
      RsceShiftsAndBreaksAreDerived,
      PPDSPeriodSourceType,
      PPDSPeriodDurationSchema,
      PPDSPeriodTimeRatioInPercent,
      PPDSCapacitySupplyTimeCategory,
      RsceHasStorCharcs,
      RsceStorageQuantityDimension,
      RsceStorageQuantityUnit,
      @Semantics.quantity.unitOfMeasure : 'RsceStorageQuantityUnit'
      RsceStorageMinProductionQty,
      @Semantics.quantity.unitOfMeasure : 'RsceStorageQuantityUnit'
      RsceStorageMaxQuantity,
      RsceStorIsZeroOnNoFillPurity,
      CapacityPlanningPeriodLotSize,
      RsceStorHasMltplProds,
      @Semantics.quantity.unitOfMeasure : 'RsceStorageQuantityUnit'
      RsceStorZeroFillPurityThldQty,
      
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
}
where
  Capacity is not initial
```
