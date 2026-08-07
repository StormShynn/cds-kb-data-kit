---
name: I_CAPACITYBASIC
description: Enterprise Resource Capacity
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CAPACITYBASIC')/$value
semantic_en: Enterprise Resource Capacity
tags:
  - PP
  - bo:salesorder
  - component:PP-VDM-MD-2CL
  - interface-view
  - lob:manufacturing
  - PP-VDM
  - PP-VDM-MD
  - PP-VDM-MD-2CL
  - metadata-only
---
# I_CAPACITYBASIC

**Enterprise Resource Capacity**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CAPACITYBASIC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CapacityInternalID` |  | |  |  | `NUMC(8)` | Capacity ID |
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
