---
name: C_ENGMNTPROJFCSTQUERY_2
description: "This CDS query provides the prerequisites for answering the following business questions: What is the total planned cost of a project or a work package? What is the cost of efforts planned in a project or work package? What is the total planned effort in a project or work package? What are the unit-based services planned in a project? How much of the planned effort has been staffed in a project or work package? What is the actual cost incurred in a project or work package? How many hours have been recorded against a project or work package? How much of unit-based services has been completed? What are the expenses planned in a work package? What are the expenses incurred in a work package? What is the effort estimated to complete a project or work package? What is the effort estimate at completion for a project or work package? What is the cost estimated to complete a project or work package? What is the cost estimate at completion for a project or work package? What is the percentage of completion in different work packages? What is the percentage of completion for a project?"
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGMNTPROJFCSTQUERY_2')/$value
semantic_en: "This CDS query provides the prerequisites for answering the following business questions: What is the total planned cost of a project or a work package? What is the cost of efforts planned in a project or work package? What is the total planned effort in a project or work package? What are the unit-based services planned in a project? How much of the planned effort has been staffed in a project or work package? What is the actual cost incurred in a project or work package? How many hours have been recorded against a project or work package? How much of unit-based services has been completed? What are the expenses planned in a work package? What are the expenses incurred in a work package? What is the effort estimated to complete a project or work package? What is the effort estimate at completion for a project or work package? What is the cost estimated to complete a project or work package? What is the cost estimate at completion for a project or work package? What is the percentage of completion in different work packages? What is the percentage of completion for a project?"
semantic_vi: "Engagement Project Forecast Query — CDS view tiêu dùng dựa trên I_EngmntProjFcstCube_2."
keywords:
  - "engagement"
  - "project"
  - "forecast"
  - "query"
  - "name"
  - "visibility"
  - "service"
tags:
  - CA
  - bo:plant
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - consumption-view
  - lob:cross_application components
  - plan
  - project
  - bo:project
---
# C_ENGMNTPROJFCSTQUERY_2

**This CDS query provides the prerequisites for answering the following business questions: What is the total planned cost of a project or a work package? What is the cost of efforts planned in a project or work package? What is the total planned effort in a project or work package? What are the unit-based services planned in a project? How much of the planned effort has been staffed in a project or work package? What is the actual cost incurred in a project or work package? How many hours have been recorded against a project or work package? How much of unit-based services has been completed? What are the expenses planned in a work package? What are the expenses incurred in a work package? What is the effort estimated to complete a project or work package? What is the effort estimate at completion for a project or work package? What is the cost estimated to complete a project or work package? What is the cost estimate at completion for a project or work package? What is the percentage of completion in different work packages? What is the percentage of completion for a project?**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGMNTPROJFCSTQUERY_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProject` |  | |  |  | `CHAR(40)` | Project |
| `EngagementProjectName` |  | |  |  | `CHAR(40)` | Customer Project Name |
| `ProjectVisibility` |  | |  |  | `CHAR(1)` | Confidential Indicator for Commercial Project |
| `IsMyProject` |  | |  |  | `CHAR(1)` |  |
| `EngagementProjectServiceOrg` |  | |  |  | `CHAR(5)` | Service Organization |
| `WorkPackage` |  | |  |  | `CHAR(50)` | Work Package |
| `WorkPackageName` |  | |  |  | `CHAR(60)` | Plan Item Description |
| `WorkPackageType` |  | |  |  | `CHAR(1)` |  |
| `WorkPackageStartDate` |  | |  |  | `DATS(8)` | Start Date |
| `WorkPackageEndDate` |  | |  |  | `DATS(8)` | End Date |
| `EngagementProjectResourceType` |  | |  |  | `CHAR(4)` | Resource Type ID |
| `EngagementProjectResource` |  | |  |  | `CHAR(40)` | Role / Expense |
| `WorkItem` |  | |  |  | `CHAR(10)` | Work Item |
| `WorkItemName` |  | | `_WorkItem` | `WorkItemName` | `CHAR(40)` | Work Item Name |
| `EngmntProjectDeliveryOrg` |  | |  |  | `CHAR(5)` |  |
| `EngagementProjDeliveryOrgName` |  | |  | `_EngagementProjectSrvcOrg._Text[ 1:Language = $parameters.P_Language ].EngmtProjectServiceOrgName` | `CHAR(40)` | Description of Organization Unit ID |
| `UnitOfMeasure` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `WorkPackageUnitUoM` |  | |  |  | `UNIT(3)` | Unit of Measure |
| `Currency` |  | |  |  | `CUKY(5)` | Plan Currency |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Period |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Review Year Period |
| `EngagementProjectForecastYear` |  | |  |  | `CHAR(4)` |  |
| `EngagementProjectForecastMonth` |  | |  |  | `CHAR(2)` |  |
| `EngagementProjectReviewStatus` |  | |  |  | `CHAR(10)` | Forecast Status ID |
| `EngagementProjReviewStatusText` |  | |  | `_EngmntProjFinPlanStatus._Text[ 1:Language = $parameters.P_Language ].EngagementProjReviewStatusText` | `CHAR(40)` | Status Description |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `SalesOrderItemText` |  | |  |  | `CHAR(40)` | Short Text for Sales Order Item |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `EngagementProjectStage` |  | |  |  | `CHAR(4)` | Commercial Project: Stage |
| `LastChangeDateTime` |  | |  |  | `DEC(15)` | Commercial Project Last Changed On |
| `EngagementProjectCategory` |  | |  |  | `CHAR(1)` | Project Type |
| `PlndCostAmt` |  | |  | `case when WorkPackageCube.EngmntProjPlanLineType = 'D' then WorkPackageCube.PlndCostAmt else cast(0 as /cpd/plan_cost) end` | `CURR(17)` | Planned Cost |
| `PlannedEffortCostAmt` |  | |  | `case when WorkPackageCube.EngagementProjectResourceType = '0ACT' and WorkPackageCube.EngmntProjPlanLineType = 'D' then WorkPackageCube.PlndCostAmt else cast(0 as /cpd/plan_cost) end` | `CURR(17)` | Planned Cost |
| `AddlResourcePlannedCostAmount` |  | |  | `case when WorkPackageCube.EngagementProjectResourceType = '0ADL' and WorkPackageCube.EngmntProjPlanLineType = 'D' then WorkPackageCube.PlndCostAmt else cast(0 as /cpd/plan_cost) end` | `CURR(17)` | Planned Cost |
| `PlndEffortQty` |  | |  | `case when WorkPackageCube.EngmntProjPlanLineType = 'D' then WorkPackageCube.PlndEffortQty else cast ( 0 as /cpd/planned_effort) end` | `QUAN(15)` | Planned Effort |
| `AddlResourcePlannedQuantity` |  | |  | `case when WorkPackageCube.EngmntProjPlanLineType = 'D' then WorkPackageCube.AddlResourcePlannedQuantity else cast ( 0 as /cpd/planned_effort) end` | `QUAN(15)` | Planned Effort |
| `PlanUnitQuantity` |  | |  | `case when WorkPackageCube.EngmntProjPlanLineType = 'D' then WorkPackageCube.PlanUnitQuantity else cast ( 0 as /cpd/planned_effort) end` | `QUAN(15)` | Planned Effort |
| `SupplyEffortQty` |  | |  | `case when WorkPackageCube.EngmntProjPlanLineType = 'D' then WorkPackageCube.SupplyEffortQty else cast ( 0 as /cpd/planned_effort) end` | `QUAN(15)` | Planned Effort |
| `ActualPlanDeviationCost` |  | |  | `case when WorkPackageCube.EngmntProjPlanLineType = 'D' then WorkPackageCube.ActualPlanDeviationCost else cast(0 as /cpd/cost_deviation) end` | `CURR(17)` | Cost Deviation |
| `ActualPlanDeviationEffort` |  | |  | `case when WorkPackageCube.EngmntProjPlanLineType = 'D' and WorkPackageCube.EngagementProjectResourceType = '0ACT' then WorkPackageCube.ActualPlanDeviationEffort else cast(0 as /cpd/effort_deviation) end` | `QUAN(15)` | Effort Deviation |
| `AddlRsceActlPlanDeviationQty` |  | |  | `case when WorkPackageCube.EngmntProjPlanLineType = 'D' and WorkPackageCube.EngagementProjectResourceType = '0ADL' then WorkPackageCube.ActualPlanDeviationEffort else cast(0 as /cpd/effort_deviation) end` | `QUAN(15)` | Effort Deviation |
| `ActualCostUpToFsclYrPerd` |  | |  | `case when WorkPackageCube.FiscalYearPeriod <= :P_FiscalYearPeriod then WorkPackageCube.ActlCostAmt else cast(0 as /cpd/actual_cost) end` | `CURR(23)` | Actual Cost |
| `ActualEffortUpToFsclYrPerd` |  | |  | `case when WorkPackageCube.FiscalYearPeriod <= :P_FiscalYearPeriod then WorkPackageCube.ActlEffortQty else cast(0 as /cpd/actual_effort) end` | `QUAN(23)` | Actual Effort |
| `AddlResourceActualQuantity` |  | |  | `case when WorkPackageCube.FiscalYearPeriod <= :P_FiscalYearPeriod then WorkPackageCube.AddlResourceActualQuantity else cast(0 as /cpd/actual_effort) end` | `QUAN(23)` | Actual Effort |
| `ActualUnitQty` |  | |  | `case when WorkPackageCube.FiscalYearPeriod <= :P_FiscalYearPeriod then WorkPackageCube.ActualUnitQty else cast(0 as /cpd/actual_effort) end` | `QUAN(23)` | Actual Effort |
| `PlannedExpenseCost` |  | |  | `case when WorkPackageCube.EngagementProjectResourceType = '0EXP' and WorkPackageCube.EngmntProjPlanLineType = 'D' then WorkPackageCube.PlndCostAmt else cast ( 0 as /cpd/planned_effort) end` | `CURR(18)` |  |
| `ActlExpenseCostUpToFsclYrPerd` |  | |  | `case when WorkPackageCube.FiscalYearPeriod <= :P_FiscalYearPeriod and WorkPackageCube.EngagementProjectResourceType = '0EXP' then WorkPackageCube.ActlCostAmt else cast(0 as /cpd/actual_cost) end` | `CURR(23)` | Actual Cost |
| `ActualPlanDeviationExpnCost` |  | |  | `case when WorkPackageCube.EngagementProjectResourceType = '0EXP' and WorkPackageCube.EngmntProjPlanLineType = 'D' then WorkPackageCube.ActualPlanDeviationCost end` | `CURR(17)` |  |
| `PlannedCostRate` |  | |  | `1` | `INT1(3)` |  |
| `AddlResourcePlannedCostRate` |  | |  | `1` | `INT1(3)` |  |
| `CostVariance` |  | |  | `1` | `INT1(3)` |  |
| `EffortVariance` |  | |  | `1` | `INT1(3)` |  |
| `AddlRsceVarcOfQty` |  | |  | `1` | `INT1(3)` |  |
| `CalculatedAdjustedRmngCost` |  | |  | `1` | `INT1(3)` |  |
| `CalculatedAdjustedRmngEffort` |  | |  | `1` | `INT1(3)` |  |
| `AddlRsceCalcdEstToCmpltQty` |  | |  | `1` | `INT1(3)` |  |
| `CalcdAdjustedRmngExpnCost` |  | |  | `1` | `INT1(3)` |  |
| `EstimateToCompleteExpenseCost` |  | |  | `1` | `INT1(3)` |  |
| `EstimateToCompleteEffort` |  | |  | `1` | `INT1(3)` |  |
| `AddlRsceEstToCmpltQty` |  | |  | `1` | `INT1(3)` |  |
| `EstimateToCompleteEffortCost` |  | |  | `1` | `INT1(3)` |  |
| `AddlRsceEstToCmpltCostAmount` |  | |  | `1` | `INT1(3)` |  |
| `EstimateToCompleteCostAmount` |  | |  | `1` | `INT1(3)` |  |
| `EstimateAtCompletionEffort` |  | |  | `1` | `INT1(3)` |  |
| `AddlRsceEstAtCompltnQty` |  | |  | `1` | `INT1(3)` |  |
| `EstimateAtCompletionCost` |  | |  | `1` | `INT1(3)` |  |
| `PercentageOfCompletionEffort` |  | |  | `1` | `INT1(3)` |  |
| `UnitCompltnRateInPercent` |  | |  | `1` | `INT1(3)` |  |
| `DerivedEstAtCompltnCost` |  | |  | `1` | `INT1(3)` |  |
| `PercentageOfCompletionCost` |  | |  | `1` | `INT1(3)` |  |
| `RevenueAsSoldAmount` |  | |  |  | `CURR(15)` | Net Value of the Document Item in Document Currency |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGMNTPROJFCSTQUERY_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGMNTPROJFCSTQUERY_2')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CEPFCSTQUERY2'
@ClientHandling.algorithm: #SESSION_VARIABLE
@OData.publish: true
@Analytics.query : true
@Analytics.settings.zeroValues: {handling: #HIDE, hideOnAxis: #ROWS}
@VDM.viewType: #CONSUMPTION
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Engagement Project Forecast Query'
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass:  #MIXED
@ObjectModel.usageType.serviceQuality: #D
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel: {modelingPattern: #ANALYTICAL_QUERY, 
               supportedCapabilities: [#ANALYTICAL_QUERY]
}
define view C_EngmntProjFcstQuery_2
  with parameters
    @EndUserText.label: 'Forecast Date'
    @Environment.systemField: #SYSTEM_DATE
    P_Date             : sydatum,

    @Consumption.hidden: true
    @Consumption.derivation: { lookupEntity: 'I_FiscalCalendarDate',
                                  resultElement: 'FiscalYearPeriod',
                                  binding:      [ { targetElement : 'CalendarDate'      , type : #PARAMETER ,  value : 'P_Date' } ,
                                                  { targetElement : 'FiscalYearVariant' , type : #CONSTANT  ,  value : 'K4'     } ]
                                 }
    P_FiscalYearPeriod : /cpd/pfp_review_year_period,

    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language         : sylangu
  as select from I_EngmntProjFcstCube_2(P_FiscalYearPeriod : $parameters.P_FiscalYearPeriod,
                                        P_Language         : $parameters.P_Language ) as WorkPackageCube
{

  @Consumption.filter:  { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.axis: #ROWS
  WorkPackageCube.EngagementProject,
  WorkPackageCube.EngagementProjectName,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  ProjectVisibility,
  
  @Consumption.filter:  { selectionType: #SINGLE, multipleSelections: false, mandatory: false }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  IsMyProject,
  
  @Consumption.filter:  { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  // @AnalyticsDetails.query.variableSequence: 1
  @AnalyticsDetails.query.axis: #ROWS //put in free if not needed
  @AnalyticsDetails.query.totals: #SHOW
  EngagementProjectServiceOrg,
  _EngagementProjectSrvcOrg._Text[1:Language = $parameters.P_Language].EngmtProjectServiceOrgName,

  @Consumption.filter:  { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.axis: #ROWS
  WorkPackageCube.WorkPackage,
  WorkPackageCube.WorkPackageName,
  WorkPackageCube.WorkPackageType,
    
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.axis: #ROWS
  WorkPackageCube.WorkPackageStartDate,

  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.axis: #ROWS
  WorkPackageCube.WorkPackageEndDate,
  
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.sortDirection:   #ASC
  WorkPackageCube.EngagementProjectResourceType,

  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.axis: #ROWS
  WorkPackageCube.EngagementProjectResource,
  _EngagementProjectResource._Text[ 1:Language = $parameters.P_Language ].EngagementProjResourceText,

  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.axis: #ROWS
  WorkPackageCube.WorkItem,
  _WorkItem.WorkItemName,

  WorkPackageCube.EngmntProjectDeliveryOrg,
  _EngagementProjectSrvcOrg._Text[ 1:Language = $parameters.P_Language ].EngmtProjectServiceOrgName    as EngagementProjDeliveryOrgName,

  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.axis: #ROWS
  @Semantics.unitOfMeasure: true
  WorkPackageCube.UnitOfMeasure,

  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.axis: #ROWS
  @EndUserText.label: 'Work Package UoM'
  @Semantics.unitOfMeasure: true
  WorkPackageCube.WorkPackageUnitUoM,

  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.axis: #ROWS
  @Semantics.currencyCode: true
  WorkPackageCube.Currency,

  @AnalyticsDetails.query.axis: #FREE
  WorkPackageCube.FiscalPeriod                                                                         as FiscalPeriod,

  @AnalyticsDetails.query.axis: #FREE
  //@Semantics.fiscal.year: true
  WorkPackageCube.FiscalYear                                                                           as FiscalYear,


  @AnalyticsDetails.query.axis: #FREE
  WorkPackageCube.FiscalYearPeriod                                                                     as FiscalYearPeriod,
  
  @EndUserText.label: 'Forecast Year'
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.axis: #FREE
  WorkPackageCube.EngagementProjectForecastYear                                                        as EngagementProjectForecastYear,
  
  @EndUserText.label: 'Forecast Month'
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.axis: #FREE
  WorkPackageCube.EngagementProjectForecastMonth                                                       as EngagementProjectForecastMonth,   

  @AnalyticsDetails.query.axis: #ROWS
  WorkPackageCube.EngagementProjectReviewStatus                                                        as EngagementProjectReviewStatus,
  _EngmntProjFinPlanStatus._Text[ 1:Language = $parameters.P_Language ].EngagementProjReviewStatusText as EngagementProjReviewStatusText,
  ///////// Current Values

  @Consumption.filter:  { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.axis: #ROWS
  WorkPackageCube.SalesOrder,

  @AnalyticsDetails.query.axis: #ROWS
  WorkPackageCube.SalesOrderItem,
  WorkPackageCube.SalesOrderItemText                                                                   as SalesOrderItemText,

  @AnalyticsDetails.query.axis: #FREE
  WorkPackageCube.WBSElementExternalID                                                                 as WBSElementExternalID,

  @Consumption.filter:  { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.display: #KEY_TEXT
  @AnalyticsDetails.query.axis: #FREE
  WorkPackageCube.EngagementProjectStage                                                               as EngagementProjectStage,  
  
  @Consumption.filter:  { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.display: #KEY_TEXT
  @AnalyticsDetails.query.axis: #FREE  
  @EndUserText.label: 'Project Changed On'
  WorkPackageCube.LastChangeDateTime, 
  
  @Consumption.filter:  { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.display: #KEY_TEXT
  @AnalyticsDetails.query.axis: #FREE   
  WorkPackageCube.EngagementProjectCategory,
  
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #SUM
  @Semantics.amount.currencyCode: 'Currency'
  @AnalyticsDetails.query.decimals: 2
  case  when WorkPackageCube.EngmntProjPlanLineType = 'D'
  then WorkPackageCube.PlndCostAmt
  else cast(0 as  /cpd/plan_cost)
  end                                                                                                  as PlndCostAmt,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #SUM
  @EndUserText.label: 'Cost (Effort)'
  @Semantics.amount.currencyCode: 'Currency'
  @AnalyticsDetails.query.decimals: 2
  case when WorkPackageCube.EngagementProjectResourceType = '0ACT' and WorkPackageCube.EngmntProjPlanLineType = 'D'
  then
  WorkPackageCube.PlndCostAmt
  else cast(0 as  /cpd/plan_cost)
  end                                                                                                  as PlannedEffortCostAmt,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #SUM
  @EndUserText.label: 'Cost (Additional Resources)'
  @Semantics.amount.currencyCode: 'Currency'
  @AnalyticsDetails.query.decimals: 2
  case when WorkPackageCube.EngagementProjectResourceType = '0ADL' and WorkPackageCube.EngmntProjPlanLineType = 'D'
  then
  WorkPackageCube.PlndCostAmt
  else cast(0 as  /cpd/plan_cost)
  end                                                                                                  as AddlResourcePlannedCostAmount,



  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #SUM
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  @AnalyticsDetails.query.decimals: 2
  case  when WorkPackageCube.EngmntProjPlanLineType = 'D'
  then WorkPackageCube.PlndEffortQty
  else cast ( 0 as /cpd/planned_effort)
  end                                                                                                  as PlndEffortQty,

  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #SUM
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  @AnalyticsDetails.query.decimals: 2
  @EndUserText.label: 'Planned Qty (Addl Res.)'
  case  when WorkPackageCube.EngmntProjPlanLineType = 'D'
  then WorkPackageCube.AddlResourcePlannedQuantity
  else cast ( 0 as /cpd/planned_effort)
  end                                                                                                  as AddlResourcePlannedQuantity,

  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #SUM
  @EndUserText.label: 'Planned Qty (Service)'
  @Semantics.quantity.unitOfMeasure: 'WorkPackageUnitUoM'
  @AnalyticsDetails.query.decimals: 2
  case  when WorkPackageCube.EngmntProjPlanLineType = 'D'
  then WorkPackageCube.PlanUnitQuantity
  else cast ( 0 as /cpd/planned_effort)
  end                                                                                                  as PlanUnitQuantity,

  // @Consumption.hidden: true
  @EndUserText.label: 'Staffed Effort'
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #SUM
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  @AnalyticsDetails.query.decimals: 2
  case  when WorkPackageCube.EngmntProjPlanLineType = 'D'
  then WorkPackageCube.SupplyEffortQty
  else cast ( 0 as /cpd/planned_effort)
  end                                                                                                  as SupplyEffortQty,


  //////// Deviation Values


  @Consumption.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @Semantics.amount.currencyCode: 'Currency'
  @AnalyticsDetails.query.decimals: 2
  @EndUserText.label: 'Cost Deviation'
  case when WorkPackageCube.EngmntProjPlanLineType = 'D'
  then
  WorkPackageCube.ActualPlanDeviationCost
  else cast(0 as /cpd/cost_deviation)
  end                                                                                                  as ActualPlanDeviationCost,


  @Consumption.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  @EndUserText.label: 'Effort Deviation'
  @AnalyticsDetails.query.decimals: 2
  case when WorkPackageCube.EngmntProjPlanLineType = 'D' and WorkPackageCube.EngagementProjectResourceType = '0ACT'
  then
  WorkPackageCube.ActualPlanDeviationEffort
  else cast(0 as /cpd/effort_deviation)
  end                                                                                                  as ActualPlanDeviationEffort,

  @Consumption.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  @AnalyticsDetails.query.decimals: 2
  case when WorkPackageCube.EngmntProjPlanLineType = 'D' and WorkPackageCube.EngagementProjectResourceType = '0ADL'
  then
  WorkPackageCube.ActualPlanDeviationEffort
  else cast(0 as /cpd/effort_deviation)
  end                                                                                                  as AddlRsceActlPlanDeviationQty,



  ////////    Actual Values

  @AnalyticsDetails.query.axis: #COLUMNS
  @AnalyticsDetails.query.decimals: 2
  @Semantics.amount.currencyCode: 'Currency'

  case when WorkPackageCube.FiscalYearPeriod <= :P_FiscalYearPeriod
  then
  WorkPackageCube.ActlCostAmt
  else cast(0 as /cpd/actual_cost)
  end                                                                                                  as ActualCostUpToFsclYrPerd,


  //@AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.axis: #COLUMNS
  @AnalyticsDetails.query.decimals: 2
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  case when WorkPackageCube.FiscalYearPeriod <= :P_FiscalYearPeriod
  //case when WorkPackageCube.FiscalYearPeriod <= :P_FiscalYearPeriod and WorkPackageCube.EngagementProjectResourceType = '0ACT'
  then
  WorkPackageCube.ActlEffortQty
  else  cast(0 as /cpd/actual_effort)
  end                                                                                                  as ActualEffortUpToFsclYrPerd,

  @AnalyticsDetails.query.axis: #COLUMNS
  @AnalyticsDetails.query.decimals: 2
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  @EndUserText.label: 'Actual Qty (Addl Res.)'
  case when WorkPackageCube.FiscalYearPeriod <= :P_FiscalYearPeriod
  //case when WorkPackageCube.FiscalYearPeriod <= :P_FiscalYearPeriod and WorkPackageCube.EngagementProjectResourceType = '0ACT'
  then
  WorkPackageCube.AddlResourceActualQuantity
  else  cast(0 as /cpd/actual_effort)
  end                                                                                                  as AddlResourceActualQuantity,

  @AnalyticsDetails.query.axis: #COLUMNS
  @AnalyticsDetails.query.decimals: 2
  @Semantics.quantity.unitOfMeasure: 'WorkPackageUnitUoM'
  @EndUserText.label: 'Actual Qty (Service)'
  case when WorkPackageCube.FiscalYearPeriod <= :P_FiscalYearPeriod //can we put this c in cube
  then
  WorkPackageCube.ActualUnitQty
  else  cast(0 as /cpd/actual_effort)
  end                                                                                                  as ActualUnitQty,


  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #SUM
  @EndUserText.label: 'Planned Expense'
  @AnalyticsDetails.query.decimals: 2
  @Semantics.amount.currencyCode: 'Currency'
  case when WorkPackageCube.EngagementProjectResourceType = '0EXP' and WorkPackageCube.EngmntProjPlanLineType = 'D'
  then
  WorkPackageCube.PlndCostAmt
  else cast ( 0 as /cpd/planned_effort)
   end                                                                                                 as PlannedExpenseCost,


  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #SUM
  @EndUserText.label: 'Actual Expense'
  @AnalyticsDetails.query.decimals: 2
  @Semantics.amount.currencyCode: 'Currency'
  case when WorkPackageCube.FiscalYearPeriod <= :P_FiscalYearPeriod and WorkPackageCube.EngagementProjectResourceType = '0EXP'
  then
  WorkPackageCube.ActlCostAmt
  else cast(0 as /cpd/actual_cost)
   end                                                                                                 as ActlExpenseCostUpToFsclYrPerd,

  @Consumption.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #SUM
  @AnalyticsDetails.query.decimals: 2
  @Semantics.amount.currencyCode: 'Currency'
  case when WorkPackageCube.EngagementProjectResourceType = '0EXP' and WorkPackageCube.EngmntProjPlanLineType = 'D'
  then
  WorkPackageCube.ActualPlanDeviationCost
  end                                                                                                  as ActualPlanDeviationExpnCost,

  @Consumption.hidden: true
  @DefaultAggregation : #FORMULA
  @EndUserText.label: 'Planned Cost Rate'
  @AnalyticsDetails.query.decimals: 9
  @AnalyticsDetails.query.formula : 'NDIV0($projection.PlannedEffortCostAmt / $projection.PlndEffortQty)'
  1                                                                                                    as PlannedCostRate,

  @Consumption.hidden: true
  @DefaultAggregation : #FORMULA
  @EndUserText.label: 'Other Resource Planned Cost Rate'
  @AnalyticsDetails.query.decimals: 9
  @AnalyticsDetails.query.formula : 'NDIV0($projection.AddlResourcePlannedCostAmount / $projection.AddlResourcePlannedQuantity)'
  1                                                                                                    as AddlResourcePlannedCostRate,


  @Consumption.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #FORMULA
  @EndUserText.label: 'Cost Variance'
  @AnalyticsDetails.query.decimals: 2
  @Semantics.amount.currencyCode: 'Currency'
  @AnalyticsDetails.query.formula : '$projection.PlndCostAmt - $projection.ActualCostUpToFsclYrPerd'
  1                                                                                                    as CostVariance,



  @Consumption.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #FORMULA
  @EndUserText.label: 'Effort Variance'
  @AnalyticsDetails.query.decimals: 2
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  @AnalyticsDetails.query.formula : 'CASE WHEN $projection.ActualEffortUpToFsclYrPerd > 0 OR $projection.PlndEffortQty > 0 
  THEN $projection.PlndEffortQty - $projection.ActualEffortUpToFsclYrPerd
  ELSE $projection.ActualEffortUpToFsclYrPerd END'
  1                                                                                                    as EffortVariance,

  @Consumption.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #FORMULA
  @EndUserText.label: 'Other Resource Quantity Variance'
  @AnalyticsDetails.query.decimals: 2
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  @AnalyticsDetails.query.formula : 'CASE WHEN $projection.AddlResourceActualQuantity > 0 OR $projection.AddlResourcePlannedQuantity > 0
  THEN $projection.AddlResourcePlannedQuantity - $projection.AddlResourceActualQuantity 
  ELSE $projection.AddlResourceActualQuantity END'
  1                                                                                                    as AddlRsceVarcOfQty,



  @Consumption.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #FORMULA
  @EndUserText.label: 'Calculated Remaining Cost'
  @Semantics.amount.currencyCode: 'Currency'
  @AnalyticsDetails.query.decimals: 2
  @AnalyticsDetails.query.formula : '$projection.CostVariance + $projection.ActualPlanDeviationCost'
  1                                                                                                    as CalculatedAdjustedRmngCost,



  @Consumption.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #FORMULA
  @EndUserText.label: 'Calculated Remaining Effort'
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  @AnalyticsDetails.query.decimals: 0
  @AnalyticsDetails.query.formula : '$projection.EffortVariance + $projection.ActualPlanDeviationEffort'
  1                                                                                                    as CalculatedAdjustedRmngEffort,

  @Consumption.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #FORMULA
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  @AnalyticsDetails.query.decimals: 0
  @AnalyticsDetails.query.formula : '$projection.AddlRsceVarcOfQty + $projection.AddlRsceActlPlanDeviationQty'
  1                                                                                                    as AddlRsceCalcdEstToCmpltQty,

  @Consumption.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #FORMULA
  @EndUserText.label: 'Calculated Remaining Expense Cost'
  @Semantics.amount.currencyCode: 'Currency'
  @AnalyticsDetails.query.decimals: 2
  @AnalyticsDetails.query.formula : 'CASE WHEN $projection.ActlExpenseCostUpToFsclYrPerd > 0 OR $projection.PlannedExpenseCost > 0 
  THEN ($projection.PlannedExpenseCost - $projection.ActlExpenseCostUpToFsclYrPerd  + $projection.ActualPlanDeviationExpnCost) 
  ELSE ($projection.ActlExpenseCostUpToFsclYrPerd  + $projection.ActualPlanDeviationExpnCost)  END'
  1                                                                                                    as CalcdAdjustedRmngExpnCost,


  @Consumption.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #FORMULA
  @EndUserText.label: 'Estimate To Complete Expense Cost'
  @Semantics.amount.currencyCode: 'Currency'
  @AnalyticsDetails.query.decimals: 2
  @AnalyticsDetails.query.formula : 'CASE WHEN $projection.CalcdAdjustedRmngExpnCost < 0 THEN 0  ELSE  $projection.CalcdAdjustedRmngExpnCost END'
  1                                                                                                    as EstimateToCompleteExpenseCost,


  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #FORMULA
  @EndUserText.label: 'ETC (Effort)'
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  @AnalyticsDetails.query.decimals: 0

  @AnalyticsDetails: {
  exceptionAggregationSteps: [{
  exceptionAggregationBehavior : #SUM,
    exceptionAggregationElements: ['WorkPackage','EngagementProjectResource','WorkItem','EngmntProjectDeliveryOrg']
  }]
  }

  @AnalyticsDetails.query.formula : 'CASE WHEN $projection.CalculatedAdjustedRmngEffort < 0.5 THEN 0  ELSE  $projection.CalculatedAdjustedRmngEffort END'
  1                                                                                                    as EstimateToCompleteEffort,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #FORMULA
  @EndUserText.label: 'ETC (Addl Resource)'
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  @AnalyticsDetails.query.decimals: 0
  @AnalyticsDetails: {
  exceptionAggregationSteps: [{
  exceptionAggregationBehavior : #SUM,
  exceptionAggregationElements: ['WorkPackage','EngagementProjectResource','WorkItem','EngmntProjectDeliveryOrg']
  }]
  }
  @AnalyticsDetails.query.formula : 'CASE WHEN $projection.AddlRsceCalcdEstToCmpltQty < 0.5 THEN 0  ELSE  $projection.AddlRsceCalcdEstToCmpltQty END'
  1                                                                                                    as AddlRsceEstToCmpltQty,


  @Consumption.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #FORMULA
  @EndUserText.label: 'Estimate To Complete Effort Cost'
  @Semantics.amount.currencyCode: 'Currency'
  @AnalyticsDetails.query.decimals: 2

  @AnalyticsDetails.query.formula : ' $projection.EstimateToCompleteEffort * $projection.PlannedCostRate'
  1                                                                                                    as EstimateToCompleteEffortCost,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #FORMULA
  @EndUserText.label: 'ETC Cost (Addl Res.)'
  @Semantics.amount.currencyCode: 'Currency'
  @AnalyticsDetails.query.decimals: 2
  @AnalyticsDetails.query.formula : ' $projection.AddlRsceEstToCmpltQty * $projection.AddlResourcePlannedCostRate'
  1                                                                                                    as AddlRsceEstToCmpltCostAmount,


  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #FORMULA
  @EndUserText.label: 'ETC Cost'
  @Semantics.amount.currencyCode: 'Currency'
  @AnalyticsDetails.query.decimals: 2

  @AnalyticsDetails: {
  exceptionAggregationSteps: [{
  exceptionAggregationBehavior : #SUM,
    exceptionAggregationElements: ['WorkPackage', 'EngagementProjectResource', 'WorkItem','EngmntProjectDeliveryOrg']
  }]
  }

  @AnalyticsDetails.query.formula : '$projection.EstimateToCompleteEffortCost + $projection.EstimateToCompleteExpenseCost + $projection.AddlRsceEstToCmpltCostAmount'
  1                                                                                                    as EstimateToCompleteCostAmount,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #FORMULA
  @EndUserText.label: 'EAC (Effort)'
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  @AnalyticsDetails.query.decimals: 2

  @AnalyticsDetails: {
  exceptionAggregationSteps: [{
  exceptionAggregationBehavior : #SUM,
  exceptionAggregationElements: ['WorkPackage','EngagementProjectResource', 'WorkItem','EngmntProjectDeliveryOrg']
  }]
  }
  @AnalyticsDetails.query.formula : '$projection.EstimateToCompleteEffort + $projection.ActualEffortUpToFsclYrPerd'
  1                                                                                                    as EstimateAtCompletionEffort,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #FORMULA
  @EndUserText.label: 'EAC (Addl Resource)'
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  @AnalyticsDetails.query.decimals: 2
  @AnalyticsDetails: {
  exceptionAggregationSteps: [{
  exceptionAggregationBehavior : #SUM,
  exceptionAggregationElements: ['WorkPackage','EngagementProjectResource', 'WorkItem','EngmntProjectDeliveryOrg']
  }]
  }
  @AnalyticsDetails.query.formula : '$projection.AddlRsceEstToCmpltQty + $projection.AddlResourceActualQuantity'
  1                                                                                                    as AddlRsceEstAtCompltnQty,



  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #FORMULA
  @EndUserText.label: 'EAC (Cost)'
  @Semantics.amount.currencyCode: 'Currency'
  @AnalyticsDetails.query.decimals: 2
  @AnalyticsDetails: {
  exceptionAggregationSteps: [{
  exceptionAggregationBehavior : #SUM,
  exceptionAggregationElements: ['WorkPackage', 'EngagementProjectResource', 'WorkItem','EngmntProjectDeliveryOrg']
  }]

  }

  @AnalyticsDetails.query.formula : '$projection.EstimateToCompleteCostAmount + $projection.ActualCostUpToFsclYrPerd'
  1                                                                                                    as EstimateAtCompletionCost,


  @Consumption.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #FORMULA
  @EndUserText.label: 'Effort PoC'
  @AnalyticsDetails.query.decimals: 2
  @AnalyticsDetails.query.formula : 'NDIV0($projection.ActualEffortUpToFsclYrPerd / $projection.EstimateAtCompletionEffort) * 100'
  1                                                                                                    as PercentageOfCompletionEffort,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #FORMULA
  @EndUserText.label: 'PoC (Service)'
  @AnalyticsDetails.query.decimals: 2
  @AnalyticsDetails.query.formula : 'NDIV0( $projection.ActualUnitQty / $projection.PlanUnitQuantity ) * 100'
  1                                                                                                    as UnitCompltnRateInPercent,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #FORMULA
  @EndUserText.label: 'Extrapolated EAC'
  @AnalyticsDetails.query.decimals: 2
  @Consumption.hidden: true
  @AnalyticsDetails: {
  exceptionAggregationSteps: [{
  exceptionAggregationBehavior : #SUM,
  exceptionAggregationElements: ['WorkPackage', 'EngagementProjectResource', 'WorkItem','EngmntProjectDeliveryOrg']
  }]
  }

  @AnalyticsDetails.query.formula: 'CASE WHEN WorkPackageCube.ResourceIsOfUnitWorkPackage = 1 THEN NDIV0( $projection.ActualCostUpToFsclYrPerd / WorkPackageCube.UnitCompltnRateInPercent ) * 100 ELSE $projection.EstimateAtCompletionCost END'
  1                                                                                                    as DerivedEstAtCompltnCost,


  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #FORMULA
  @EndUserText.label: 'PoC (Cost)'
  @AnalyticsDetails.query.decimals: 2
  @AnalyticsDetails.query.formula : 'NDIV0($projection.ActualCostUpToFsclYrPerd / $projection.DerivedEstAtCompltnCost) * 100'
  1                                                                                                    as PercentageOfCompletionCost,
  
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #SUM
  @EndUserText.label: 'As Sold Revenue'
  @Semantics.amount.currencyCode: 'Currency'
  @AnalyticsDetails.query.decimals: 2
  WorkPackageCube.RevenueAsSoldAmount                                                                  as RevenueAsSoldAmount
                                                             
}
```
