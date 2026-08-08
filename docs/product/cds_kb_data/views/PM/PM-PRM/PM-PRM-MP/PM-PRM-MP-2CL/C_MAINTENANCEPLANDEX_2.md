---
name: C_MAINTENANCEPLANDEX_2
description: "Data Extraction for Maintenance Plan"
app_component: PM-PRM-MP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTENANCEPLANDEX_2')/$value
semantic_en: "Data Extraction for Maintenance Plan"
semantic_vi: "Data Extraction for Maintenance Plan — CDS view tiêu dùng dựa trên I_MaintenancePlanBasic_2."
keywords:
  - "data"
  - "extraction"
  - "for"
  - "maintenance"
  - "plan"
  - "desc"
  - "creation"
  - "date"
  - "created"
  - "user"
  - "last"
  - "change"
tags:
  - PM
  - component:PM-PRM-MP-2CL
  - consumption-view
  - lob:plant maintenance
  - plan
  - PM-PRM
  - PM-PRM-MP
  - PM-PRM-MP-2CL
---
# C_MAINTENANCEPLANDEX_2

**Data Extraction for Maintenance Plan**

| Property | Value |
|---|---|
| App Component | `PM-PRM-MP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTENANCEPLANDEX_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenancePlan` | ✓ | |  |  | `CHAR(12)` | Maintenance Plan |
| `MaintenancePlanDesc` |  | |  |  | `CHAR(40)` | Maintenance Plan Text |
| `CreationDate` |  | |  |  | `DATS(8)` | Date of creation |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
| `MaintenanceStrategy` |  | |  |  | `CHAR(6)` | Maintenance Strategy |
| `SchedulingDuration` |  | |  |  | `NUMC(3)` | Scheduling Period |
| `Equipment` |  | |  |  | `CHAR(18)` | Equipment Number |
| `FunctionalLocation` |  | |  |  | `CHAR(30)` | Functional Location |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `NumberOfMaintenanceItems` |  | |  |  | `NUMC(4)` | Number of maintenance items in the maintenance plan |
| `Language` |  | |  |  | `LANG(1)` | Language key of the long text |
| `CycleModificationRatio` |  | |  |  | `DEC(3)` | Cycle modification factor |
| `MaintPlanSchedgIndicator` |  | |  |  | `CHAR(1)` | Scheduling indicator |
| `CallHorizonPercent` |  | |  |  | `NUMC(3)` | Call horizon for maintenance plan calls |
| `CallHorizonInDays` |  | |  |  | `NUMC(3)` | Call horizon for maintenance plan calls |
| `AuthorizationGroup` |  | |  |  | `CHAR(4)` | Technical Object Authorization Group |
| `MaintenancePlanInternalID` |  | |  |  | `CHAR(22)` | Object Number |
| `MaintenanceCall` |  | |  |  | `INT4(10)` | Maintenance Plan Call Number |
| `MaintenancePlanCategory` |  | |  |  | `CHAR(2)` | Maintenance Plan Category |
| `SchedulingDurationUnit` |  | |  |  | `UNIT(3)` | Unit for Scheduling Period |
| `BasicStartDate` |  | |  |  | `DATS(8)` | Start date |
| `MaintPlanFreeDefinedAttrib` |  | |  |  | `CHAR(20)` | Sort field for maintenance plans |
| `FactoryCalendar` |  | |  |  | `CHAR(2)` | Factory calendar key |
| `MaintPlanIsLockedAgainstCalls` |  | |  |  | `CHAR(1)` | Indicator: maintenance plan locked against calls |
| `LastChangeDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `LateCompletionShiftInPercent` |  | |  |  | `NUMC(3)` | Shift Factor for Late Completion |
| `EarlyCompletionShiftInPercent` |  | |  |  | `NUMC(3)` | Shift Factor for Early Completion |
| `LateCompletionTolerancePercent` |  | |  |  | `NUMC(3)` | Tolerance for Late Completion (%) |
| `EarlyCompletionTolerancePct` |  | |  |  | `NUMC(3)` | Tolerance for Early Completion (%) |
| `MaintenanceCallHorizonCalcType` |  | |  |  | `CHAR(1)` | Calculation Type of Call Horizon |
| `MaintPlanLogicalOperatorCode` |  | |  |  | `CHAR(1)` | Indicator for OR or AND link |
| `MultipleCounterPlanShiftFactor` |  | |  |  | `CHAR(1)` | Shift Factor for Multiple Counter Plan |
| `MaintPlanStartCntrReadingValue` |  | |  |  | `CHAR(22)` | Start counter reading |
| `SchedulingStartDate` |  | |  |  | `DATS(8)` | Start Date for Scheduling |
| `SchedulingStartTime` |  | |  |  | `TIMS(6)` | Start Time for Scheduling |
| `MaintPlanEndCntrReadingValue` |  | |  |  | `CHAR(22)` | End Counter for Scheduling |
| `SchedulingEndDate` |  | |  |  | `DATS(8)` | End Date for Scheduling |
| `MaintenanceLeadFloatInDays` |  | |  |  | `NUMC(3)` | Lead Float in Days |
| `MaintPlnStrtBufDurationInDays` |  | |  |  | `NUMC(3)` | Scheduling to reoccur when lead float reached |
| `MaintPlanStartBufferUnit` |  | |  |  | `UNIT(3)` | Unit for Scheduling Period |
| `PrdcssrCallObjCompltnIsRqd` |  | |  |  | `CHAR(1)` | Only Create New Call Object After Completing Predecessor |
| `MaintenancePlanHasLongText` |  | |  |  | `CHAR(1)` | Long Text Indicator |
| `MaintenancePlanCallObject` |  | |  |  | `CHAR(1)` | Call object for maintenance plan |
| `_MaintenanceItem` | | ✓ | | | | |
| `_MaintenancePlanCatParam` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTENANCEPLANDEX_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTENANCEPLANDEX_2')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Data Extraction for Maintenance Plan'
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Analytics.internalName:#LOCAL
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction: {
        enabled: true,
        delta.changeDataCapture.automatic:true } 
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE, #ANALYTICAL_DIMENSION ]
@ObjectModel.sapObjectNodeType.name: 'MaintenancePlan'
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@ObjectModel.representativeKey: 'MaintenancePlan'
@VDM.viewType: #CONSUMPTION
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION


define view entity C_MaintenancePlanDEX_2
  as select from I_MaintenancePlanBasic_2
{
      @ObjectModel.text.element: [ 'MaintenancePlanDesc' ]
  key MaintenancePlan,

      @Semantics.text: true
      MaintenancePlanDesc,

      @Semantics.systemDate.createdAt: true
      CreationDate,

      @Semantics.user.createdBy: true
      CreatedByUser,

      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,

      @Semantics.user.lastChangedBy: true
      LastChangedByUser,

      MaintenanceStrategy,
      SchedulingDuration,
      Equipment,
      FunctionalLocation,
      Customer,
      NumberOfMaintenanceItems,
      Language,
      CycleModificationRatio,
      MaintPlanSchedgIndicator,
      CallHorizonPercent,
      CallHorizonInDays,
      AuthorizationGroup,
      MaintenancePlanInternalID,
      MaintenanceCall,

      @ObjectModel.foreignKey.association: '_MaintenancePlanCatParam'
      MaintenancePlanCategory,

      SchedulingDurationUnit,
      BasicStartDate,
      MaintPlanFreeDefinedAttrib,
      FactoryCalendar,
      MaintPlanIsLockedAgainstCalls,

      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,

      LateCompletionShiftInPercent,
      EarlyCompletionShiftInPercent,
      LateCompletionTolerancePercent,
      EarlyCompletionTolerancePct,
      MaintenanceCallHorizonCalcType,
      MaintPlanLogicalOperatorCode,
      MultipleCounterPlanShiftFactor,
      MaintPlanStartCntrReadingValue,
      SchedulingStartDate,
      SchedulingStartTime,
      MaintPlanEndCntrReadingValue,
      SchedulingEndDate,
      MaintenanceLeadFloatInDays,
      MaintPlnStrtBufDurationInDays,
      MaintPlanStartBufferUnit,

      @Semantics.booleanIndicator
      PrdcssrCallObjCompltnIsRqd,

      MaintenancePlanHasLongText,
      MaintenancePlanCallObject,

      /* Associations */

      _MaintenanceItem,
      _MaintenancePlanCatParam
}
```
