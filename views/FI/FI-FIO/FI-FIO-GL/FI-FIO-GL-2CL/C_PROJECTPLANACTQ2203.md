---
name: C_PROJECTPLANACTQ2203
description: This CDS view provides the prerequisites for answering the following business questions: What are the actual amounts for each project, WBS element, and G/L account in company code currency? What are the baseline amounts for each project, WBS element, and G/L account in company code currency? What are the Estimate To Complete (ETC) amounts in company code currency? What are the Estimate At Completion (EAC) amounts in company code currency? What are the ongoing amounts in company code currency? What are the relative differences between actual and baseline amount in company code currency? What are the relative differences between actual and ETC amount in company code currency? What are the relative differences between actual and EAC amount in company code currency? You can also answer these questions for object currency and global currency. You can always drill down for further relevant characteristics.
app_component: FI-FIO-GL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROJECTPLANACTQ2203')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions: What are the actual amounts for each project, WBS element, and G/L account in company code currency? What are the baseline amounts for each project, WBS element, and G/L account in company code currency? What are the Estimate To Complete (ETC) amounts in company code currency? What are the Estimate At Completion (EAC) amounts in company code currency? What are the ongoing amounts in company code currency? What are the relative differences between actual and baseline amount in company code currency? What are the relative differences between actual and ETC amount in company code currency? What are the relative differences between actual and EAC amount in company code currency? You can also answer these questions for object currency and global currency. You can always drill down for further relevant characteristics.
keywords:
  - Projects Baseline EAC Ongoing
  - Projects Baseline EAC Ongoing
tags:
  - FI
  - account
  - bo:plant
  - component:FI-FIO-GL-2CL
  - consumption-view
  - FI-FIO
  - FI-FIO-GL
  - FI-FIO-GL-2CL
  - lob:finance
  - project
  - metadata-only
---
# C_PROJECTPLANACTQ2203

**This CDS view provides the prerequisites for answering the following business questions: What are the actual amounts for each project, WBS element, and G/L account in company code currency? What are the baseline amounts for each project, WBS element, and G/L account in company code currency? What are the Estimate To Complete (ETC) amounts in company code currency? What are the Estimate At Completion (EAC) amounts in company code currency? What are the ongoing amounts in company code currency? What are the relative differences between actual and baseline amount in company code currency? What are the relative differences between actual and ETC amount in company code currency? What are the relative differences between actual and EAC amount in company code currency? You can also answer these questions for object currency and global currency. You can always drill down for further relevant characteristics.**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROJECTPLANACTQ2203')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `PlanningCategoryName` | `CHAR(10)` |  |
| `BaselinePlanningCategory` | `CHAR(10)` |  |
| `OngoingPlanningCategory` | `CHAR(10)` |  |
| `Project` | `CHAR(24)` | Project |
| `WBSElement` | `CHAR(24)` | WBS Element |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `GLAccountName` | `CHAR(20)` | G/L Account Name |
| `BaseUnit` | `UNIT(3)` | Base Unit of Measure |
| `BillableControl` | `CHAR(2)` | Billable Control |
| `ControllingObjectCurrency` | `CUKY(5)` | CO Object Currency |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `CompanyCodeCurrency` | `CUKY(5)` | Company Code Currency |
| `CostSourceUnit` | `UNIT(3)` | Cost Source Unit |
| `ControllingDebitCreditCode` | `CHAR(1)` | Controlling Debit Credit Code |
| `FiscalPeriod` | `NUMC(3)` | Fiscal Period |
| `FiscalYearVariant` | `CHAR(2)` | Fiscal Year Variant |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `GlobalCurrency` | `CUKY(5)` | Global Currency |
| `LedgerFiscalYear` | `NUMC(4)` | Fiscal Year of Ledger |
| `OriginProfitCenter` | `CHAR(10)` | Origin Profit Center |
| `PersonnelNumber` | `NUMC(8)` | Personnel Number |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `CostAnalysisResource` | `CHAR(10)` | Cost Analysis Resource |
| `CostAnalysisResourceName` | `CHAR(20)` | Cost Analysis Resource Name |
| `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `WorkItem` | `CHAR(10)` | Work Item ID |
| `ValuationQuantity` | `QUAN(23)` | Valuation Quantity |
| `ActualQuantityInBaseUnit` | `QUAN(23)` | Actual Valuation Quantity |
| `ActualValuationQuantity` | `QUAN(23)` | Actual Valuation Quantity |
| `BaselinePlannedQuantity` | `QUAN(23)` | Plan Valuation Quantity |
| `OngoingPlannedQuantity` | `QUAN(23)` | Plan Valuation Quantity |
| `ActualAmountInCompanyCodeCrcy` | `CURR(23)` | Amount in Company Code Currency |
| `BaselineAmtInCompanyCodeCrcy` | `CURR(23)` | Baseline Amount in Company Code Currency |
| `ETCAmtInCompanyCodeCrcy` | `CURR(23)` | Estimate To Complete Amount in Company Code Currency |
| `EACAmtInCompanyCodeCrcy` | `INT1(3)` |  |
| `OngoingAmtInCompanyCodeCrcy` | `CURR(23)` | Ongoing Amount in Company Code Currency |
| `BaselineCoCodCrcyDifferencePct` | `INT1(3)` |  |
| `EACCCodeCrcyDifferencePct` | `INT1(3)` |  |
| `OngoingCCodeCrcyDifferencePct` | `INT1(3)` |  |
| `ActualAmountInGlobalCurrency` | `CURR(23)` | Amount in Global Currency |
| `BaselineAmtInGlobalCrcy` | `CURR(23)` | Baseline Amount in Global Currency |
| `ETCAmtInGlobalCrcy` | `CURR(23)` | Estimate To Complete Amount in Global Currency |
| `EACAmtInGlobalCrcy` | `INT1(3)` |  |
| `OngoingAmtInGlobalCrcy` | `CURR(23)` | Ongoing Amount in Global Currency |
| `BaselineGlobalCrcyDiffPct` | `INT1(3)` |  |
| `EACGlobalCrcyDifferencePct` | `INT1(3)` |  |
| `OngoingGlobalCrcyDifferencePct` | `INT1(3)` |  |
| `ActualAmountInObjectCurrency` | `CURR(23)` | Actual Amount in Object Currency |
| `BaselineAmtInObjectCrcy` | `CURR(23)` | Plan Amount in Object Currency |
| `EstToCompleteAmtInObjectCrcy` | `CURR(23)` | Plan Amount in Object Currency |
| `EstAtCompletionAmtInObjectCrcy` | `INT1(3)` |  |
| `OngoingAmtInObjectCrcy` | `CURR(23)` | Plan Amount in Object Currency |
| `ObjectCrcyBaselineDiffPct` | `INT1(3)` |  |
| `ObjCrcyEstAtCompletionDiffPct` | `INT1(3)` |  |
| `ObjectCrcyOngoingDifferencePct` | `INT1(3)` |  |
