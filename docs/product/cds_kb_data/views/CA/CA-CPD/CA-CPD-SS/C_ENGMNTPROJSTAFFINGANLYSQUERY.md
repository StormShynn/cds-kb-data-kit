---
name: C_ENGMNTPROJSTAFFINGANLYSQUERY
description: "This CDS view provides the prerequisites for answering the following business questions: What is the status of staffing in projects that I manage? What is the composition of billable and non-billable effort? Are projects in my service organization or company code adequately staffed? How many hours of planned effort have not yet been posted? How many hours have not yet been approved?"
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGMNTPROJSTAFFINGANLYSQUERY')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What is the status of staffing in projects that I manage? What is the composition of billable and non-billable effort? Are projects in my service organization or company code adequately staffed? How many hours of planned effort have not yet been posted? How many hours have not yet been approved?"
semantic_vi: "Engagement Project Staffing Analysis Query — CDS view tiêu dùng dựa trên I_EngmntProjStaffingAnlysCube."
keywords:
  - "engagement"
  - "project"
  - "staffing"
  - "analysis"
  - "query"
  - "visibility"
  - "start"
  - "date"
  - "service"
tags:
  - CA
  - bo:companycode
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - consumption-view
  - lob:cross_application components
  - plan
  - project
---
# C_ENGMNTPROJSTAFFINGANLYSQUERY

**This CDS view provides the prerequisites for answering the following business questions: What is the status of staffing in projects that I manage? What is the composition of billable and non-billable effort? Are projects in my service organization or company code adequately staffed? How many hours of planned effort have not yet been posted? How many hours have not yet been approved?**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGMNTPROJSTAFFINGANLYSQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProject` |  | |  |  | `CHAR(40)` | Engagement Project ID |
| `ProjectVisibility` |  | |  |  | `CHAR(1)` | Confidential Indicator for Commercial Project |
| `ProjectStartDate` |  | |  |  | `DATS(8)` | Commercial Project: Start Date |
| `ProjectEndDate` |  | |  |  | `DATS(8)` | Commercial Project: End Date |
| `EngagementProjectServiceOrg` |  | |  |  | `CHAR(5)` | Service Organization |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling area for the project |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company code for the project |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CostCenter` |  | |  |  | `CHAR(20)` | Organization Unit Key |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `EngagementProjectStage` |  | |  |  | `CHAR(4)` | Commercial Project: Stage |
| `ProjectManagerName` |  | |  |  | `CHAR(80)` |  |
| `EngagementProjectResource` |  | |  |  | `CHAR(40)` | Resource ID |
| `EngagementProjectResourceType` |  | |  |  | `CHAR(4)` | Resource Type ID |
| `BillingControlCategoryText` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `IsMyProject` |  | |  |  | `CHAR(1)` |  |
| `UnitOfMeasure` |  | |  |  | `UNIT(3)` | Unit of Measure |
| `PlndEffortQty` |  | |  |  | `QUAN(15)` | Total Quantity |
| `PlndEffortUpToCurPerd` |  | |  |  | `QUAN(15)` | Total Quantity |
| `EngmntProjStaffedEffort` |  | |  |  | `QUAN(15)` | Total Quantity |
| `StaffedEffortUpToCurPerdQty` |  | |  |  | `QUAN(15)` | Total Quantity |
| `ActlEffortQty` |  | |  |  | `QUAN(15)` |  |
| `TotRecHrsSentForApproval` |  | |  |  | `QUAN(15)` |  |
| `MisgTmeEntriesInHrs` |  | |  | `0` | `INT1(3)` |  |
| `UnstaffedEffort` |  | |  | `0` | `INT1(3)` |  |
| `TotalRecordedHours` |  | |  |  | `QUAN(15)` |  |
| `DiffBtwnPlnAndActlEffortQty` |  | |  | `0` | `INT1(3)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGMNTPROJSTAFFINGANLYSQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGMNTPROJSTAFFINGANLYSQUERY')/$value)*

```abap
@AbapCatalog: {
  sqlViewName: 'CEPSTAFFANLYSQRY',
  preserveKey: true,
  compiler.compareFilter: true
}
@AccessControl: {
  authorizationCheck: #PRIVILEGED_ONLY,
  personalData.blocking: #BLOCKED_DATA_EXCLUDED
}
@Analytics: {
  query: true,
  internalName: #LOCAL
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Engagement Project Staffing Analysis Query'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  usageType.serviceQuality: #D,
  usageType.sizeCategory: #XL,
  usageType.dataClass: #MIXED,
  modelingPattern: #ANALYTICAL_QUERY, 
  supportedCapabilities: [#ANALYTICAL_QUERY]
}
@VDM: {
//  private: false,
//  lifecycle.contract.type: #NONE,
  viewType: #CONSUMPTION
}
define view C_EngmntProjStaffingAnlysQuery
  as select from I_EngmntProjStaffingAnlysCube
{

  @AnalyticsDetails.query: {
    axis: #ROWS,
    display: #TEXT_KEY
  }
  @Consumption.filter:{
    multipleSelections: true,
    selectionType: #INTERVAL
  }
  EngagementProject,

  @Analytics.internalName: #LOCAL
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @EndUserText.label:'Confidential Project'
  ProjectVisibility,

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter: {
  //  businessDate.at: true,
  //  defaultValue: '',
    multipleSelections: false,
    selectionType: #RANGE
  }
  ProjectStartDate,

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter: {
  //  businessDate.at: true,
  //  defaultValue: '',
    multipleSelections: false,
    selectionType: #RANGE
  }
  ProjectEndDate,

  @AnalyticsDetails.query: {
    axis: #FREE,
    display: #TEXT_KEY
  }
  @Consumption.filter:{
    multipleSelections: true,
    selectionType: #INTERVAL
  }
  EngagementProjectServiceOrg,

  @AnalyticsDetails.query: {
    axis: #FREE,
    display: #TEXT_KEY
  }
  @Consumption.filter:{
    multipleSelections: true,
    selectionType: #INTERVAL
  }
  ControllingArea,

  @AnalyticsDetails.query: {
    axis: #FREE,
    display: #TEXT_KEY
  }
  @Consumption.filter:{
    multipleSelections: true,
    selectionType: #INTERVAL
  }
  CompanyCode,

  @AnalyticsDetails.query: {
    axis: #FREE,
    display: #TEXT_KEY
  }
  @Consumption.filter:{
    multipleSelections: true,
    selectionType: #INTERVAL
  }
  ProfitCenter,

  @AnalyticsDetails.query: {
    axis: #FREE,
    display: #TEXT_KEY
  }
  @Consumption.filter:{
    multipleSelections: true,
    selectionType: #INTERVAL
  }
  CostCenter,

  @AnalyticsDetails.query: {
    axis: #FREE,
    display: #TEXT_KEY
  }
  @Consumption.filter:{
    multipleSelections: true,
    selectionType: #INTERVAL
  }
  Customer,

  @AnalyticsDetails.query: {
    axis: #FREE,
    display: #TEXT_KEY
  }
  @Consumption.filter:{
    multipleSelections: true,
    selectionType: #INTERVAL
  }
  EngagementProjectStage,

  @EndUserText.label: 'Project Manager'
  @AnalyticsDetails.query.axis: #FREE
  ProjectManagerName,

  //@AnalyticsDetails.query: {
  //  axis: #FREE,
  //  display: #TEXT_KEY
  //}
  //ProjectManager,

  @AnalyticsDetails.query: {
    axis: #FREE,
    display: #TEXT_KEY
  }
  EngagementProjectResource,

  @AnalyticsDetails.query: {
    axis: #FREE,
    display: #TEXT_KEY
  }
  EngagementProjectResourceType,

  //@AnalyticsDetails.query: {
  //  axis: #FREE,
  //  display: #TEXT_KEY
  //}
  //BillingControlCategory,

  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Billing Control Category'
  BillingControlCategoryText,

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter: {
      selectionType: #SINGLE,
      multipleSelections: false,
      mandatory: false
  }
  IsMyProject,

  @AnalyticsDetails.query: {
    axis: #FREE,
    display: #TEXT_KEY
  }
  UnitOfMeasure,

  @AnalyticsDetails.query: {
    axis: #COLUMNS,
    decimals: 1
  }
  PlndEffortQty,

  @AnalyticsDetails.query: {
    axis: #COLUMNS,
    decimals: 1
  }
  PlndEffortUpToCurPerd,

  @AnalyticsDetails.query: {
    axis: #COLUMNS,
    decimals: 1
  }
  EngmntProjStaffedEffort,

  @AnalyticsDetails.query: {
    axis: #COLUMNS,
    decimals: 1
  }
  StaffedEffortUpToCurPerdQty,

  @AnalyticsDetails.query: {
    axis: #COLUMNS,
    decimals: 1
  }
  ActlEffortQty,

  @AnalyticsDetails.query: {
    axis: #COLUMNS,
    decimals: 1
  }
  TotRecHrsSentForApproval,

  @AnalyticsDetails.query: {
    axis: #COLUMNS,
    decimals: 1,
    formula: 'EngmntProjStaffedEffort - TotalRecordedHours'
  }
  @DefaultAggregation: #FORMULA
  @EndUserText.label: 'Missing Effort'
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  0 as MisgTmeEntriesInHrs,

  @AnalyticsDetails.query: {
    axis: #COLUMNS,
    decimals: 1,
    formula: 'PlndEffortQty - EngmntProjStaffedEffort'
  }
  @DefaultAggregation: #FORMULA
  @EndUserText.label: 'Unstaffed Effort'
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  0 as UnstaffedEffort,

  @AnalyticsDetails.query: {
    axis: #COLUMNS,
    decimals: 1
  }
  TotalRecordedHours,

  @AnalyticsDetails.query: {
    axis: #COLUMNS,
    decimals: 1,
    formula: 'PlndEffortQty - ActlEffortQty'
  }
  @DefaultAggregation: #FORMULA
  @EndUserText.label: 'Remaining Effort'
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  0 as DiffBtwnPlnAndActlEffortQty

}
```
