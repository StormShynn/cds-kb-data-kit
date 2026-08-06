---
name: C_ENGMNTPROJTMEEXPNBILLGQ
description: This CDS view provides information about billing caps set up for time and expense billing items in customer projects. Information in this CDS view will help you answer the following business questions: What is the maximum amount that can be billed? What is the amount that has already been billed? Based on the evaluation by revenue recognition, what is the net amount that can be billed and what percentage does this amount constitute when compared to the maximum cap? What is the threshold percentage at which a user is notified about the consumption of billing cap?
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGMNTPROJTMEEXPNBILLGQ')/$value
semantic_en: This CDS view provides information about billing caps set up for time and expense billing items in customer projects. Information in this CDS view will help you answer the following business questions: What is the maximum amount that can be billed? What is the amount that has already been billed? Based on the evaluation by revenue recognition, what is the net amount that can be billed and what percentage does this amount constitute when compared to the maximum cap? What is the threshold percentage at which a user is notified about the consumption of billing cap?
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
  - metadata-only
---
# C_ENGMNTPROJTMEEXPNBILLGQ

**This CDS view provides information about billing caps set up for time and expense billing items in customer projects. Information in this CDS view will help you answer the following business questions: What is the maximum amount that can be billed? What is the amount that has already been billed? Based on the evaluation by revenue recognition, what is the net amount that can be billed and what percentage does this amount constitute when compared to the maximum cap? What is the threshold percentage at which a user is notified about the consumption of billing cap?**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGMNTPROJTMEEXPNBILLGQ')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `EngagementProject` | `CHAR(40)` | Project |
| `IsMyProject` | `CHAR(1)` |  |
| `ProjectVisibility` | `CHAR(1)` | Confidential Indicator for Commercial Project |
| `WBSElement` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) |
| `SalesOrderItemText` | `CHAR(40)` | Short Text for Sales Order Item |
| `CappedNetAmtAlertThldInPct` | `NUMC(3)` |  |
| `CappedNetAmount` | `CURR(15)` |  |
| `ActlRevnAmt` | `CURR(23)` |  |
| `PlndCostAmt` | `CURR(17)` | Planned Cost |
| `PlannedEffortCostAmt` | `CURR(17)` | Planned Cost |
| `PlndEffortQty` | `QUAN(15)` | Planned Effort |
| `ActualPlanDeviationCost` | `CURR(17)` | Cost Deviation |
| `ActualPlanDeviationEffort` | `QUAN(15)` | Effort Deviation |
| `ActlCostAmt` | `CURR(23)` | Actual Cost |
| `ActlEffortQty` | `QUAN(23)` | Actual Effort |
| `PlannedExpenseCost` | `CURR(18)` |  |
| `ActualExpenseCost` | `CURR(23)` | Actual Cost |
| `ActualPlanDeviationExpnCost` | `CURR(17)` |  |
| `PlannedCostRate` | `INT1(3)` |  |
| `CostVariance` | `INT1(3)` |  |
| `EffortVariance` | `INT1(3)` |  |
| `CalculatedAdjustedRmngCost` | `INT1(3)` |  |
| `CalculatedAdjustedRmngEffort` | `INT1(3)` |  |
| `CalcdAdjustedRmngExpnCost` | `INT1(3)` |  |
| `AdjustedRemainingExpnCost` | `INT1(3)` |  |
| `AdjustedRemainingEffort` | `INT1(3)` |  |
| `AdjustedRemainingEffortCost` | `INT1(3)` |  |
| `AdjustedRemainingCostPlnAmt` | `INT1(3)` |  |
| `EstimateAtCompletionEffort` | `INT1(3)` |  |
| `EstimateAtCompletionCost` | `INT1(3)` |  |
| `EffortCompletionRateInPercent` | `INT1(3)` |  |
| `CostCompletionRateInPercent` | `INT1(3)` |  |
| `CappedNetAmountConsumedInPct` | `INT1(3)` |  |
