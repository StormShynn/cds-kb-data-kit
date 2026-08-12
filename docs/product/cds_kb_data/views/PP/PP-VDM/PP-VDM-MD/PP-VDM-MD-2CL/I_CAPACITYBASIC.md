---
name: I_CAPACITYBASIC
description: "Enterprise Resource Capacity"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CAPACITYBASIC')/$value
semantic_en: "Enterprise Resource Capacity"
semantic_vi: "Enterprise Resource Capacity — CDS view giao diện dựa trên I_Capacity."
keywords:
  - "enterprise"
  - "resource"
  - "capacity"
  - "internal"
  - "plant"
  - "category"
  - "code"
  - "active"
  - "version"
tags:
  - PP
  - bo:salesorder
  - component:PP-VDM-MD-2CL
  - interface-view
  - lob:manufacturing
  - PP-VDM
  - PP-VDM-MD
  - PP-VDM-MD-2CL
---
# I_CAPACITYBASIC

**Enterprise Resource Capacity**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CAPACITYBASIC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CapacityInternalID` | ✓ | |  |  | `NUMC(8)` | Capacity ID |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `Capacity` |  | |  |  | `CHAR(8)` | Capacity name |
| `CapacityCategoryCode` |  | |  |  | `CHAR(3)` | Capacity Category |
| `CapacityActiveVersion` |  | |  |  | `NUMC(2)` | Active Version of Available Capacity |
| `CapacityIsFinite` |  | |  |  | `CHAR(1)` | Indicator: Capacity Relevant to Finite Scheduling |
| `CapacityIsPooled` |  | |  |  | `CHAR(1)` | Pooled Capacity Indicator |
| `CapacityHasIndivCapacities` |  | |  |  | `CHAR(1)` | Has Individual Capacities |
| `CapacityIsExcldFrmLongTermPlng` |  | |  |  | `CHAR(1)` | Indicator: Capacity Excluded From Long-Term Planning |
| `CapacityNumberOfCapacities` |  | |  |  | `INT2(5)` | Number of Individual Capacities |
| `CapacityResponsiblePlanner` |  | |  |  | `CHAR(3)` | Capacity Responsible Planner Group |
| `CapacityPlanUtilizationPercent` |  | |  |  | `NUMC(3)` | Capacity Utilization Ratio in Percent |
| `CapacityBreakDuration` |  | |  |  | `INT4(10)` | Cumulative Break Duration in Seconds (internal) |
| `CapIsUsedInMultiOperations` |  | |  |  | `CHAR(1)` | Indicator: Several Operations Can Use Capacity |
| `ReferencedCapacityInternalID` |  | |  |  | `NUMC(8)` | Referenced Capacity ID |
| `CapOverloadThresholdInPercent` |  | |  |  | `NUMC(3)` | Overload |
| `FactoryCalendar` |  | |  |  | `CHAR(2)` | Factory Calendar ID |
| `AuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `ShiftGroup` |  | |  |  | `CHAR(2)` | Grouping for Shift Definitions and Shift Sequences |
| `CapacityStartTimeID` |  | |  |  | `INT4(10)` | Start Time in Seconds (Internal) |
| `CapacityEndTimeID` |  | |  |  | `INT4(10)` | End Time in Seconds (Internal) |
| `CapacityQuantityUnit` |  | |  |  | `UNIT(3)` | Capacity Unit of Measure |
| `CapacityBaseQtyUnit` |  | |  |  | `UNIT(3)` | Capacity Base Unit of Measure |
| `CapacityLastChangeDateTime` |  | |  |  | `DEC(21)` | Capacity Last Change Date Time |
| `ResourceType` |  | |  |  | `NUMC(2)` | Resource Type |
| `ResourceCategory` |  | |  |  | `CHAR(1)` | Resource Category |
| `RsceValidityStartOffsetInDays` |  | |  |  | `NUMC(4)` | Validity of Available Capacity (In Past) |
| `RsceValidityEndOffsetInDays` |  | |  |  | `NUMC(4)` | Validity of Available Resource Capacity (In the Future) |
| `ResourceSortText` |  | |  |  | `CHAR(30)` | Freely Selectable Character Sequence for Sorting Resources |
| `ResourceFinitenessLevel` |  | |  |  | `NUMC(4)` | Finiteness Level of Resource |
| `ResourceIsBottleNeck` |  | |  |  | `CHAR(1)` | This Resource is a Bottleneck Resource |
| `RsceOverlappingActiesSync` |  | |  |  | `NUMC(1)` | Synchronization of Activities when Overlapping Occurs |
| `ResourceTimeBufferQuantity` |  | |  |  | `INT4(10)` | Resource-Dependent Time Buffer |
| `ResourceTimeBufferUnit` |  | |  |  | `UNIT(3)` | Unit of Measurement for Time Buffer |
| `ResourceMaxOverlapDuration` |  | |  |  | `INT4(10)` | Maximum Overlap of Activities |
| `ResourceMaxOverlapDurationUnit` |  | |  |  | `UNIT(3)` | Unit of Measurement for Maximum Overlap of Two Activities |
| `ResourceIsCampaignRelevant` |  | |  |  | `CHAR(1)` | Resource is Campaign-Relevant |
| `RsceShiftsAndBreaksAreDerived` |  | |  |  | `CHAR(1)` | Capacity Data for Time Stream Originates in External System |
| `PPDSPeriodSourceType` |  | |  |  | `CHAR(1)` | Definition of PP/DS Bucket Capacity |
| `PPDSPeriodDurationSchema` |  | |  |  | `NUMC(2)` | PP/DS Bucket Schema |
| `PPDSPeriodTimeRatioInPercent` |  | |  |  | `NUMC(3)` | Factor: Relation. of Avl. Bucket Cap. to Avl. Time-Cont Cap. |
| `PPDSCapacitySupplyTimeCategory` |  | |  |  | `NUMC(1)` | Finite Capacity of a Mixed Resource |
| `RsceHasStorCharcs` |  | |  |  | `CHAR(1)` | Resource Has Storage Characteristics |
| `RsceStorageQuantityDimension` |  | |  |  | `CHAR(6)` | Dimension of Storage Characteristic of a Resource |
| `RsceStorageQuantityUnit` |  | |  |  | `UNIT(3)` | Stock Unit |
| `RsceStorageMinProductionQty` |  | |  |  | `QUAN(15)` | Minimum Production Quantity |
| `RsceStorageMaxQuantity` |  | |  |  | `QUAN(15)` | Maximum Stock Level |
| `RsceStorIsZeroOnNoFillPurity` |  | |  |  | `CHAR(1)` | Set Remaining Fill Level to Zero |
| `CapacityPlanningPeriodLotSize` |  | |  |  | `CHAR(1)` | Period Lot Size |
| `RsceStorHasMltplProds` |  | |  |  | `CHAR(1)` | Allow Multiple Products |
| `RsceStorZeroFillPurityThldQty` |  | |  |  | `QUAN(15)` | Threshold for Setting Remaining Fill Level to Zero |
| `_Text` | | ✓ | | | | |
| `_CapacityCategory` | | ✓ | | | | |
| `_FactoryCalendar` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_ReferencedCapacityText` | | ✓ | | | | |
| `_CapacityResponsiblePlanner` | | ✓ | | | | |
| `_ShiftGrouping` | | ✓ | | | | |
| `_CapacityQuantityUnit` | | ✓ | | | | |
| `_CapacityBaseQtyUnit` | | ✓ | | | | |
| `_CapacityBySemanticKey` | | ✓ | | | | |
| `_Capacity` | | ✓ | | | | |
| `_ResourceTimeBufferUnit` | | ✓ | | | | |
| `_RsceMaxOverlapDurationUnit` | | ✓ | | | | |
| `_RsceStorageQuantityUnit` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CapacityTextBasic` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CAPACITYBASIC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CAPACITYBASIC')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName:#LOCAL
@EndUserText.label: 'Enterprise Resource Capacity'
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'CapacityInternalID'
@ObjectModel.semanticKey: ['Capacity']
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #MASTER}
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.sapObjectNodeType.name: 'EnterpriseResourceCapacity'
define view entity I_CapacityBasic
  as select from I_Capacity
  association [0..*] to I_CapacityTextBasic as _Text            on $projection.CapacityInternalID = _Text.CapacityInternalID

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
      @ObjectModel.foreignKey.association: '_CapacityQuantityUnit'
      CapacityQuantityUnit,
      @ObjectModel.foreignKey.association: '_CapacityBaseQtyUnit'
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
      @ObjectModel.foreignKey.association: '_ResourceTimeBufferUnit'
      ResourceTimeBufferUnit,
      @Semantics.quantity.unitOfMeasure : 'ResourceMaxOverlapDurationUnit'
      ResourceMaxOverlapDuration,
      @ObjectModel.foreignKey.association: '_RsceMaxOverlapDurationUnit'
      ResourceMaxOverlapDurationUnit,
      ResourceIsCampaignRelevant,
      RsceShiftsAndBreaksAreDerived,
      PPDSPeriodSourceType,
      PPDSPeriodDurationSchema,
      PPDSPeriodTimeRatioInPercent,
      PPDSCapacitySupplyTimeCategory,
      RsceHasStorCharcs,
      RsceStorageQuantityDimension,
      @ObjectModel.foreignKey.association: '_RsceStorageQuantityUnit'
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
