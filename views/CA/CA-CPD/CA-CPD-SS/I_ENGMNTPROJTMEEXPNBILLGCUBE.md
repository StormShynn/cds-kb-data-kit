---
name: I_ENGMNTPROJTMEEXPNBILLGCUBE
description: This CDS view provides the prerequisites for answering the following business questions: What are my time and expense billing items? What is the billing cap and the notification threshold for a billing item? What is the total revenue (including accrued revenue) for a billing item? What is the cost incurred against a billing item?
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJTMEEXPNBILLGCUBE')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions: What are my time and expense billing items? What is the billing cap and the notification threshold for a billing item? What is the total revenue (including accrued revenue) for a billing item? What is the cost incurred against a billing item?
tags:
  - CA
  - billing
  - bo:billingdocument
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - interface-view
  - lob:cross_application components
  - notification
  - metadata-only
---
# I_ENGMNTPROJTMEEXPNBILLGCUBE

**This CDS view provides the prerequisites for answering the following business questions: What are my time and expense billing items? What is the billing cap and the notification threshold for a billing item? What is the total revenue (including accrued revenue) for a billing item? What is the cost incurred against a billing item?**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJTMEEXPNBILLGCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProject` |  | |  |  | `CHAR(40)` | Project |
| `EngagementProjFinPlanUUID` |  | |  |  | `RAW(16)` | Financial Plan UUID |
| `WorkPackage` |  | |  |  | `CHAR(50)` | Work Package |
| `WorkItem` |  | |  |  | `CHAR(10)` | Work Item |
| `EngagementProjectResourceType` |  | |  |  | `CHAR(4)` | Resource Type ID |
| `EngmtProjFinPlanVersion` |  | |  |  | `CHAR(28)` | Plan Version ID |
| `EngagementProjectResource` |  | |  |  | `CHAR(40)` | Role / Expense |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Period |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Review Year Period |
| `Currency` |  | |  |  | `CUKY(5)` | Plan Currency |
| `PlndCostAmt` |  | |  |  | `CURR(17)` | Planned Cost |
| `ActlCostAmt` |  | |  |  | `CURR(23)` | Actual Cost |
| `PlndRevnAmt` |  | |  |  | `CURR(17)` | Planned Revenue |
| `SupplyEffortQty` |  | |  |  | `QUAN(15)` | Planned Effort |
| `UnitOfMeasure` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `PlndEffortQty` |  | |  |  | `QUAN(15)` | Planned Effort |
| `ActlEffortQty` |  | |  |  | `QUAN(23)` | Actual Effort |
| `ActualPlanDeviationCost` |  | |  |  | `CURR(17)` |  |
| `ActualPlanDeviationEffort` |  | |  |  | `QUAN(15)` |  |
| `EngmntProjectDeliveryOrg` |  | |  |  | `CHAR(5)` |  |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `CappedNetAmount` |  | |  |  | `CURR(15)` |  |
| `CappedNetAmtAlertThldInPct` |  | |  |  | `NUMC(3)` |  |
| `WBSElement` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) |
| `SalesOrderItemText` |  | |  |  | `CHAR(40)` | Short Text for Sales Order Item |
| `ActlRevnAmt` |  | |  |  | `CURR(23)` |  |
| `EngmntProjPlanLineType` |  | |  |  | `CHAR(1)` | Line type |
| `IsMyProject` |  | |  |  | `CHAR(1)` |  |
| `ProjectVisibility` |  | |  |  | `CHAR(1)` | Confidential Indicator for Commercial Project |
