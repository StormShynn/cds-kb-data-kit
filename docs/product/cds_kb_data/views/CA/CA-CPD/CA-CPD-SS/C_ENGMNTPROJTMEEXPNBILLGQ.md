---
name: C_ENGMNTPROJTMEEXPNBILLGQ
description: "This CDS view provides information about billing caps set up for time and expense billing items in customer projects. Information in this CDS view will help you answer the following business questions: What is the maximum amount that can be billed? What is the amount that has already been billed? Based on the evaluation by revenue recognition, what is the net amount that can be billed and what percentage does this amount constitute when compared to the maximum cap? What is the threshold percentage at which a user is notified about the consumption of billing cap?"
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGMNTPROJTMEEXPNBILLGQ')/$value
semantic_en: "This CDS view provides information about billing caps set up for time and expense billing items in customer projects. Information in this CDS view will help you answer the following business questions: What is the maximum amount that can be billed? What is the amount that has already been billed? Based on the evaluation by revenue recognition, what is the net amount that can be billed and what percentage does this amount constitute when compared to the maximum cap? What is the threshold percentage at which a user is notified about the consumption of billing cap?"
semantic_vi: "Engagement Project Time and Expense Billing — CDS view tiêu dùng dựa trên I_EngmntProjTmeExpnBillgCube."
keywords:
  - "engagement"
  - "project"
  - "time"
  - "and"
  - "expense"
  - "billing"
  - "visibility"
  - "element"
  - "sales"
  - "order"
  - "item"
  - "text"
tags:
  - CA
  - billing
  - bo:billingdocument
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - consumption-view
  - customer
  - lob:cross_application components
  - project
---
# C_ENGMNTPROJTMEEXPNBILLGQ

**This CDS view provides information about billing caps set up for time and expense billing items in customer projects. Information in this CDS view will help you answer the following business questions: What is the maximum amount that can be billed? What is the amount that has already been billed? Based on the evaluation by revenue recognition, what is the net amount that can be billed and what percentage does this amount constitute when compared to the maximum cap? What is the threshold percentage at which a user is notified about the consumption of billing cap?**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGMNTPROJTMEEXPNBILLGQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProject` |  | |  |  | `CHAR(40)` | Project |
| `IsMyProject` |  | |  |  | `CHAR(1)` |  |
| `ProjectVisibility` |  | |  |  | `CHAR(1)` | Confidential Indicator for Commercial Project |
| `WBSElement` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) |
| `SalesOrderItemText` |  | |  |  | `CHAR(40)` | Short Text for Sales Order Item |
| `CappedNetAmtAlertThldInPct` |  | |  |  | `NUMC(3)` |  |
| `CappedNetAmount` |  | |  |  | `CURR(15)` |  |
| `ActlRevnAmt` |  | |  |  | `CURR(23)` |  |
| `PlndCostAmt` |  | |  | `case when WorkPackageCube.EngmntProjPlanLineType = 'D' then WorkPackageCube.PlndCostAmt else cast(0 as /cpd/plan_cost) end` | `CURR(17)` | Planned Cost |
| `PlannedEffortCostAmt` |  | |  | `case when WorkPackageCube.EngagementProjectResourceType != '0EXP' and WorkPackageCube.EngmntProjPlanLineType = 'D' then WorkPackageCube.PlndCostAmt else cast(0 as /cpd/plan_cost) end` | `CURR(17)` | Planned Cost |
| `PlndEffortQty` |  | |  | `case when WorkPackageCube.EngmntProjPlanLineType = 'D' then WorkPackageCube.PlndEffortQty else cast ( 0 as /cpd/planned_effort) end` | `QUAN(15)` | Planned Effort |
| `ActualPlanDeviationCost` |  | |  | `case when WorkPackageCube.EngmntProjPlanLineType = 'D' then WorkPackageCube.ActualPlanDeviationCost else cast(0 as /cpd/cost_deviation) end` | `CURR(17)` | Cost Deviation |
| `ActualPlanDeviationEffort` |  | |  | `case when WorkPackageCube.EngmntProjPlanLineType = 'D' then WorkPackageCube.ActualPlanDeviationEffort else cast(0 as /cpd/effort_deviation) end` | `QUAN(15)` | Effort Deviation |
| `ActlCostAmt` |  | |  |  | `CURR(23)` | Actual Cost |
| `ActlEffortQty` |  | |  |  | `QUAN(23)` | Actual Effort |
| `PlannedExpenseCost` |  | |  | `case when WorkPackageCube.EngagementProjectResourceType = '0EXP' and WorkPackageCube.EngmntProjPlanLineType = 'D' then WorkPackageCube.PlndCostAmt else cast ( 0 as /cpd/planned_effort) end` | `CURR(18)` |  |
| `ActualExpenseCost` |  | |  | `case when WorkPackageCube.EngagementProjectResourceType = '0EXP' then WorkPackageCube.ActlCostAmt else cast(0 as /cpd/actual_cost) end` | `CURR(23)` | Actual Cost |
| `ActualPlanDeviationExpnCost` |  | |  | `case when WorkPackageCube.EngagementProjectResourceType = '0EXP' and WorkPackageCube.EngmntProjPlanLineType = 'D' then WorkPackageCube.ActualPlanDeviationCost end` | `CURR(17)` |  |
| `PlannedCostRate` |  | |  | `1` | `INT1(3)` |  |
| `CostVariance` |  | |  | `1` | `INT1(3)` |  |
| `EffortVariance` |  | |  | `1` | `INT1(3)` |  |
| `CalculatedAdjustedRmngCost` |  | |  | `1` | `INT1(3)` |  |
| `CalculatedAdjustedRmngEffort` |  | |  | `1` | `INT1(3)` |  |
| `CalcdAdjustedRmngExpnCost` |  | |  | `1` | `INT1(3)` |  |
| `AdjustedRemainingExpnCost` |  | |  | `1` | `INT1(3)` |  |
| `AdjustedRemainingEffort` |  | |  | `1` | `INT1(3)` |  |
| `AdjustedRemainingEffortCost` |  | |  | `1` | `INT1(3)` |  |
| `AdjustedRemainingCostPlnAmt` |  | |  | `1` | `INT1(3)` |  |
| `EstimateAtCompletionEffort` |  | |  | `1` | `INT1(3)` |  |
| `EstimateAtCompletionCost` |  | |  | `1` | `INT1(3)` |  |
| `EffortCompletionRateInPercent` |  | |  | `1` | `INT1(3)` |  |
| `CostCompletionRateInPercent` |  | |  | `1` | `INT1(3)` |  |
| `CappedNetAmountConsumedInPct` |  | |  | `1` | `INT1(3)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGMNTPROJTMEEXPNBILLGQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGMNTPROJTMEEXPNBILLGQ')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CENGPTEBILLITMQ'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics.query : true
@OData.publish: true
@VDM.viewType: #CONSUMPTION
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Engagement Project Time and Expense Billing'
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass:  #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel: {modelingPattern: #ANALYTICAL_QUERY, 
               supportedCapabilities: [#ANALYTICAL_QUERY]
}
define view C_EngmntProjTmeExpnBillgQ

  as select from I_EngmntProjTmeExpnBillgCube as WorkPackageCube
{
  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.axis: #ROWS
  @EndUserText.label: 'Customer Project'
  WorkPackageCube.EngagementProject,
  
  
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: false }
  @EndUserText.label: 'My Projects'
  @AnalyticsDetails.query.axis: #FREE
  @Analytics.internalName: #LOCAL
  IsMyProject,
  
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  ProjectVisibility,
  

  @AnalyticsDetails.query.axis: #ROWS
  @EndUserText.label: 'Billing WBS Element'
  WorkPackageCube.WBSElement,

  @AnalyticsDetails.query.axis: #ROWS
  @EndUserText.label: 'Billing Item Description'
  WorkPackageCube.SalesOrderItemText                                                                                                                                                                                                          as    SalesOrderItemText,

  @AnalyticsDetails.query.axis: #ROWS
  @EndUserText.label: 'Capped Notification Threshold (%)'
  @AnalyticsDetails.query.decimals: 2
  WorkPackageCube.CappedNetAmtAlertThldInPct,
  
  @DefaultAggregation: #MAX
  @AnalyticsDetails.query.axis: #COLUMNS
  @EndUserText.label: 'Net Amount Cap'
  @AnalyticsDetails.query.decimals: 2
  WorkPackageCube.CappedNetAmount,

  @Aggregation.default: #MAX
  @AnalyticsDetails.query.axis: #COLUMNS
  @EndUserText.label: 'Cap Consumption' 
  WorkPackageCube.ActlRevnAmt,

  @Consumption.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #SUM
  @AnalyticsDetails.query.decimals: 2 
  case  when WorkPackageCube.EngmntProjPlanLineType = 'D'
  then WorkPackageCube.PlndCostAmt
  else cast(0 as  /cpd/plan_cost)
  end                                                                                                                                                                                                                                         as    PlndCostAmt,

  @Consumption.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #SUM
  @EndUserText.label: 'Planned Effort cost'
  @AnalyticsDetails.query.decimals: 2 
  case when WorkPackageCube.EngagementProjectResourceType != '0EXP' and WorkPackageCube.EngmntProjPlanLineType = 'D'
  then
  WorkPackageCube.PlndCostAmt
  else cast(0 as  /cpd/plan_cost)
  end                                                                                                                                                                                                                                         as    PlannedEffortCostAmt,

  @Consumption.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #SUM
  @AnalyticsDetails.query.decimals: 2
  case  when WorkPackageCube.EngmntProjPlanLineType = 'D'
  then WorkPackageCube.PlndEffortQty
  else cast ( 0 as /cpd/planned_effort)
  end                                                                                                                                                                                                                                         as    PlndEffortQty,


  @Consumption.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @AnalyticsDetails.query.decimals: 2
  @EndUserText.label: 'Deviation Cost Delta'  
  case when WorkPackageCube.EngmntProjPlanLineType = 'D'
  then
  WorkPackageCube.ActualPlanDeviationCost
  else cast(0 as /cpd/cost_deviation)
  end                                                                                                                                                                                                                                         as    ActualPlanDeviationCost,



  @Consumption.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @EndUserText.label: 'Deviation Effort Delta'
  @AnalyticsDetails.query.decimals: 2 
  case when WorkPackageCube.EngmntProjPlanLineType = 'D'
  then
  WorkPackageCube.ActualPlanDeviationEffort
  else cast(0 as /cpd/effort_deviation)
  end                                                                                                                                                                                                                                         as    ActualPlanDeviationEffort,



  @Consumption.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @AnalyticsDetails.query.decimals: 2  
  WorkPackageCube.ActlCostAmt                                                                                                                                                                                                                 as    ActlCostAmt,


  @Consumption.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @AnalyticsDetails.query.decimals: 2 
  WorkPackageCube.ActlEffortQty                                                                                                                                                                                                               as    ActlEffortQty,


  @Consumption.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #SUM
  @EndUserText.label: 'Planned Expense'
  @AnalyticsDetails.query.decimals: 2 
  case when WorkPackageCube.EngagementProjectResourceType = '0EXP' and WorkPackageCube.EngmntProjPlanLineType = 'D'
  then
  WorkPackageCube.PlndCostAmt
  else cast ( 0 as /cpd/planned_effort)
   end                                                                                                                                                                                                                                        as    PlannedExpenseCost,


  @Consumption.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #SUM
  @EndUserText.label: 'Actual Expense'
  @AnalyticsDetails.query.decimals: 2 
  case when WorkPackageCube.EngagementProjectResourceType = '0EXP'
  then
  WorkPackageCube.ActlCostAmt
  else cast(0 as /cpd/actual_cost)
   end                                                                                                                                                                                                                                        as    ActualExpenseCost,

  @Consumption.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #SUM
  @AnalyticsDetails.query.decimals: 2   
  case when WorkPackageCube.EngagementProjectResourceType = '0EXP' and WorkPackageCube.EngmntProjPlanLineType = 'D'
  then
  WorkPackageCube.ActualPlanDeviationCost         end                                                                                                                                                                                         as    ActualPlanDeviationExpnCost,


  @Consumption.hidden: true
  @DefaultAggregation : #FORMULA
  @EndUserText.label: 'Planned Cost Rate'
  @AnalyticsDetails.query.decimals: 2
  @AnalyticsDetails.query.formula : 'NDIV0($projection.PlannedEffortCostAmt / $projection.PlndEffortQty)'
  1                                                                                                                                                                                                                                           as    PlannedCostRate,


  @Consumption.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #FORMULA
  @EndUserText.label: 'Cost Variance'
  @AnalyticsDetails.query.decimals: 2
  @AnalyticsDetails.query.formula : '$projection.PlndCostAmt - $projection.ActlCostAmt'
  1                                                                                                                                                                                                                                           as    CostVariance,



  @Consumption.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #FORMULA
  @EndUserText.label: 'Effort Variance'
  @AnalyticsDetails.query.decimals: 2
  @AnalyticsDetails.query.formula : '$projection.PlndEffortQty - $projection.ActlEffortQty'
  1                                                                                                                                                                                                                                           as    EffortVariance,




  @Consumption.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #FORMULA
  @EndUserText.label: 'Calculated Remaining Cost'
  @AnalyticsDetails.query.decimals: 2
  @AnalyticsDetails.query.formula : '$projection.CostVariance + $projection.ActualPlanDeviationCost'
  1                                                                                                                                                                                                                                           as    CalculatedAdjustedRmngCost,



  @Consumption.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #FORMULA
  @EndUserText.label: 'Calculated Remaining Effort'
  @AnalyticsDetails.query.decimals: 2
  @AnalyticsDetails.query.formula : '$projection.EffortVariance + $projection.ActualPlanDeviationEffort'
  1                                                                                                                                                                                                                                           as    CalculatedAdjustedRmngEffort,

  @Consumption.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #FORMULA
  @EndUserText.label: 'Calculated Remaining Expense Cost'
  @AnalyticsDetails.query.decimals: 2
  @AnalyticsDetails.query.formula : '$projection.PlannedExpenseCost - $projection.ActualExpenseCost  + $projection.ActualPlanDeviationExpnCost'
  1                                                                                                                                                                                                                                           as    CalcdAdjustedRmngExpnCost,

  @Consumption.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #FORMULA
  @EndUserText.label: 'Adjusted Remaining Expense Cost'
  @AnalyticsDetails.query.decimals: 2

  @AnalyticsDetails.query.formula : 'CASE WHEN $projection.CalcdAdjustedRmngExpnCost < 0 THEN 0  ELSE  $projection.CalcdAdjustedRmngExpnCost END'
  1                                                                                                                                                                                                                                           as    AdjustedRemainingExpnCost,


  @Consumption.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #FORMULA
  @EndUserText.label: 'Adjusted Remaining Effort'
  @AnalyticsDetails.query.decimals: 2

  @AnalyticsDetails: {
  exceptionAggregationSteps: [{
  exceptionAggregationBehavior : #SUM,
  exceptionAggregationElements: ['WorkPackage','EngagementProjectResource','WorkItem','EngmntProjectDeliveryOrg']
  }]
  }

  @AnalyticsDetails.query.formula : 'CASE WHEN $projection.CalculatedAdjustedRmngEffort < 0 THEN 0  ELSE  $projection.CalculatedAdjustedRmngEffort END'
  1                                                                                                                                                                                                                                           as    AdjustedRemainingEffort,



  @Consumption.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #FORMULA
  @EndUserText.label: 'Adjusted Remaining Effort Cost'
  @AnalyticsDetails.query.decimals: 2

  @AnalyticsDetails.query.formula : ' $projection.AdjustedRemainingEffort * $projection.PlannedCostRate'
  1                                                                                                                                                                                                                                           as    AdjustedRemainingEffortCost,


  @Consumption.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #FORMULA
  @EndUserText.label: 'Adjusted Remaining Cost'
  @AnalyticsDetails.query.decimals: 2

  @AnalyticsDetails: {
  exceptionAggregationSteps: [{
  exceptionAggregationBehavior : #SUM,
  exceptionAggregationElements: ['WorkPackage', 'EngagementProjectResource', 'WorkItem','EngmntProjectDeliveryOrg']
  }]
  }

  @AnalyticsDetails.query.formula : '$projection.AdjustedRemainingEffortCost + $projection.AdjustedRemainingExpnCost'
  1                                                                                                                                                                                                                                           as    AdjustedRemainingCostPlnAmt,


  @Consumption.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #FORMULA
  @EndUserText.label: 'Estimate At Completion Effort'
  @AnalyticsDetails.query.decimals: 2

  @AnalyticsDetails: {
  exceptionAggregationSteps: [{
  exceptionAggregationBehavior : #SUM,
  exceptionAggregationElements: ['WorkPackage','EngagementProjectResource', 'WorkItem','EngmntProjectDeliveryOrg']
  }]
  }
  @AnalyticsDetails.query.formula : '$projection.AdjustedRemainingEffort + $projection.ActlEffortQty'
  1                                                                                                                                                                                                                                           as    EstimateAtCompletionEffort,



  @Consumption.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #FORMULA
  @EndUserText.label: 'Estimate at completion Cost'
  @AnalyticsDetails.query.decimals: 2
  @AnalyticsDetails: {
  exceptionAggregationSteps: [{
  exceptionAggregationBehavior : #SUM,
  exceptionAggregationElements: ['WorkPackage', 'EngagementProjectResource', 'WorkItem','EngmntProjectDeliveryOrg']
  }]

  }
  @AnalyticsDetails.query.formula : '$projection.AdjustedRemainingCostPlnAmt + $projection.ActlCostAmt'
  1                                                                                                                                                                                                                                           as    EstimateAtCompletionCost,


  @Consumption.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #FORMULA
  @EndUserText.label: 'Effort PoC'
  @AnalyticsDetails.query.decimals: 2
  @AnalyticsDetails.query.formula : 'NDIV0($projection.ActlEffortQty / $projection.EstimateAtCompletionEffort) * 100'
  1                                                                                                                                                                                                                                           as    EffortCompletionRateInPercent,


  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #FORMULA
  @EndUserText.label: 'Cost PoC'
  @AnalyticsDetails.query.decimals: 2
  @AnalyticsDetails.query.formula : 'NDIV0($projection.ActlCostAmt / $projection.EstimateAtCompletionCost) * 100'
  1                                                                                                                                                                                                                                           as    CostCompletionRateInPercent,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #FORMULA
  @EndUserText.label: 'Cap Consumption (%)'
  @AnalyticsDetails.query.decimals: 2
  @AnalyticsDetails.query.formula : 'NDIV0($projection.ActlRevnAmt / $projection.CappedNetAmount) * 100'
  1                                                                                                                                                                                                                                           as    CappedNetAmountConsumedInPct

}
```
