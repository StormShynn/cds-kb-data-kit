---
name: I_WORKCENTERCAPACITY_3
description: "Work Center Capacity"
app_component: PP-BD-WKC-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERCAPACITY_3')/$value
semantic_en: "Work Center Capacity"
semantic_vi: "Work Center Capacity — CDS view giao diện dựa trên I_Capacity."
keywords:
  - "work"
  - "center"
  - "capacity"
  - "internal"
  - "type"
  - "code"
  - "category"
  - "allocation"
  - "last"
  - "change"
  - "date"
tags:
  - PP
  - component:PP-BD-WKC-2CL
  - interface-view
  - lob:manufacturing
  - PP-BD
  - PP-BD-WKC
  - PP-BD-WKC-2CL
---
# I_WORKCENTERCAPACITY_3

**Work Center Capacity**

| Property | Value |
|---|---|
| App Component | `PP-BD-WKC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERCAPACITY_3')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkCenterInternalID` | ✓ | |  |  | `NUMC(8)` | Object ID of the resource |
| `WorkCenterTypeCode` | ✓ | |  |  | `CHAR(2)` | Object types of the CIM resource |
| `CapacityCategoryAllocation` | ✓ | |  |  | `NUMC(4)` | Capacity Category Allocation |
| `CapacityInternalID` | ✓ | |  |  | `NUMC(8)` | Capacity ID |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Changed On |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | User Name |
| `WorkCenter` |  | |  |  | `CHAR(8)` | Work Center |
| `WorkCenterCategoryCode` |  | |  |  | `CHAR(4)` | Work Center Category |
| `SetupCapRequirementFormula` |  | |  |  | `CHAR(6)` | Formula for Setup Capacity Requirements |
| `ProcgCapRequirementFormula` |  | |  |  | `CHAR(6)` | Formula for Processing Capacity Requirements |
| `TeardownCapRequirementFormula` |  | |  |  | `CHAR(6)` | Formula for Teardown Capacity Requirements |
| `OtherCapRequirementFormula` |  | |  |  | `CHAR(6)` | Formula for Other Capacity Requirements |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Start Date |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | End Date |
| `WorkCenterLastChangeDateTime` |  | |  |  | `DEC(21)` | Date and Time of Last Change |
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
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `FactoryCalendar` |  | |  |  | `CHAR(2)` | Factory Calendar ID |
| `AuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `ShiftGroup` |  | |  |  | `CHAR(2)` | Grouping for Shift Definitions and Shift Sequences |
| `CapacityStartTimeID` |  | |  |  | `INT4(10)` | Start Time in Seconds (Internal) |
| `CapacityEndTimeID` |  | |  |  | `INT4(10)` | End Time in Seconds (Internal) |
| `CapIsUsedInMultiOperations` |  | |  |  | `CHAR(1)` | Indicator: Several Operations Can Use Capacity |
| `ReferencedCapacityInternalID` |  | |  |  | `NUMC(8)` | Referenced Capacity ID |
| `CapOverloadThresholdInPercent` |  | |  |  | `NUMC(3)` | Overload |
| `CapacityQuantityUnit` |  | |  |  | `UNIT(3)` | Capacity Unit of Measure |
| `CapacityBaseQtyUnit` |  | |  |  | `UNIT(3)` | Capacity Base Unit of Measure |
| `CapacityLastChangeDateTime` |  | |  |  | `DEC(21)` | Capacity Last Change Date Time |
| `_WorkCenterCapMap` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WorkCenterCapMap` | `I_WorkCenterCapacity` | [1..1] |
| `_Text` | `I_WorkCenterCapacityText_2` | [1..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERCAPACITY_3')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERCAPACITY_3')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Work Center Capacity'
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #M, dataClass: #MASTER }
@VDM.viewType: #COMPOSITE
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: 'CapacityInternalID'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name: 'WorkCenterCapacity'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

define view entity I_WorkCenterCapacity_3
  as select from I_Capacity           as Cap
  inner join   I_WorkCenterCapacity as CapMap on Cap.CapacityInternalID = CapMap.CapacityInternalID
  
  association [1..1] to I_WorkCenterCapacity as _WorkCenterCapMap on  $projection.WorkCenterInternalID       = _WorkCenterCapMap.WorkCenterInternalID
                                                                  and $projection.WorkCenterTypeCode         = _WorkCenterCapMap.WorkCenterTypeCode
                                                                  and $projection.CapacityCategoryAllocation = _WorkCenterCapMap.CapacityCategoryAllocation
  association [1..*] to I_WorkCenterCapacityText_2 as _Text on  $projection.WorkCenterInternalID             = _Text.WorkCenterInternalID
                                                                  and $projection.WorkCenterTypeCode         = _Text.WorkCenterTypeCode
                                                                  and $projection.CapacityCategoryAllocation = _Text.CapacityCategoryAllocation
                                                                  and $projection.CapacityInternalID         = _Text.CapacityInternalID

{
      @ObjectModel.foreignKey.association: '_WorkCenter'
  key CapMap.WorkCenterInternalID       as WorkCenterInternalID,
      @ObjectModel.foreignKey.association: '_WorkCenterTypeCode'
  key CapMap.WorkCenterTypeCode         as WorkCenterTypeCode,
      @ObjectModel.foreignKey.association: '_WorkCenterCapMap'
  key CapMap.CapacityCategoryAllocation as CapacityCategoryAllocation,
  key Cap.CapacityInternalID             as CapacityInternalID,

      // Capacity Alloc Attributes
      CapMap.LastChangeDate,
      CapMap.LastChangedByUser,
      CapMap.WorkCenter,
      CapMap.WorkCenterCategoryCode,
      CapMap.SetupCapRequirementFormula,
      CapMap.ProcgCapRequirementFormula,
      CapMap.TeardownCapRequirementFormula,
      CapMap.OtherCapRequirementFormula,
      CapMap.ValidityStartDate,
      CapMap.ValidityEndDate,
      CapMap.WorkCenterLastChangeDateTime,

      // Capacity Attributes
      Cap.Capacity,
      Cap.CapacityCategoryCode,
      Cap.CapacityActiveVersion,
      Cap.CapacityIsFinite,
      Cap.CapacityIsPooled,
      Cap.CapacityHasIndivCapacities,
      Cap.CapacityIsExcldFrmLongTermPlng,
      Cap.CapacityNumberOfCapacities,
      Cap.CapacityResponsiblePlanner,
      Cap.CapacityPlanUtilizationPercent,
      Cap.CapacityBreakDuration,

      // Assignments
      Cap.Plant,
      Cap.FactoryCalendar,
      Cap.AuthorizationGroup,
      Cap.ShiftGroup,

      // Times

      @Semantics.durationInHours:true
      Cap.CapacityStartTimeID,
      @Semantics.durationInHours:true
      Cap.CapacityEndTimeID,

      Cap.CapIsUsedInMultiOperations,
      Cap.ReferencedCapacityInternalID,
      Cap.CapOverloadThresholdInPercent,

      // Unit of Measures
      Cap.CapacityQuantityUnit,
      Cap.CapacityBaseQtyUnit,
      Cap.CapacityLastChangeDateTime,

      // Associations
      CapMap._WorkCenter,
      CapMap._WorkCenterTypeCode,
      _WorkCenterCapMap,
      _Text

}
where
      Cap.CapacityIsPooled is initial
  and Cap.Capacity         is initial
```
