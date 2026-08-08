---
name: C_ENGMNTPROJCOSTQUERY
description: "This CDS view provides the prerequisites for answering the following business questions: What is the financial status of projects that I'm responsible for? What is the financial status of projects in a given cost center or company code? What is the profitability in projects that I manage? What is the proportion of billable and non-billable project costs in a given company code? Are my project costs on track, compared to the baseline plan?"
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGMNTPROJCOSTQUERY')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What is the financial status of projects that I'm responsible for? What is the financial status of projects in a given cost center or company code? What is the profitability in projects that I manage? What is the proportion of billable and non-billable project costs in a given company code? Are my project costs on track, compared to the baseline plan?"
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
  - metadata-only
---
# C_ENGMNTPROJCOSTQUERY

**This CDS view provides the prerequisites for answering the following business questions: What is the financial status of projects that I'm responsible for? What is the financial status of projects in a given cost center or company code? What is the profitability in projects that I manage? What is the proportion of billable and non-billable project costs in a given company code? Are my project costs on track, compared to the baseline plan?**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGMNTPROJCOSTQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProject` |  | |  |  | `CHAR(40)` | Engagement Project ID |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `ProjectVisibility` |  | |  |  | `CHAR(1)` | Confidential Indicator for Commercial Project |
| `IsMyProject` |  | |  |  | `CHAR(1)` |  |
| `EngagementProjectServiceOrg` |  | |  |  | `CHAR(5)` | Service Organization |
| `ProjectStartDate` |  | |  |  | `DATS(8)` | Commercial Project: Start Date |
| `ProjectEndDate` |  | |  |  | `DATS(8)` | Commercial Project: End Date |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company code for the project |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling area for the project |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CostCenter` |  | |  |  | `CHAR(20)` | Organization Unit Key |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `EngagementProjectStage` |  | |  |  | `CHAR(4)` | Commercial Project: Stage |
| `BillingControlCategory` |  | |  |  | `CHAR(8)` |  |
| `EngagementProjectResourceType` |  | |  |  | `CHAR(4)` | Resource Type ID |
| `SalesOrderItemCategory` |  | |  |  | `CHAR(4)` | Sales Document Item Category |
| `ActlCostUpToInptPerdAmtInPC` |  | |  |  | `CURR(23)` |  |
| `ActlCostUpToCurPerdAmtInPC` |  | |  |  | `CURR(23)` |  |
| `ActlCostInProjCrcy` |  | |  |  | `CURR(23)` |  |
| `ActlRevnUpToInptPerdAmtInPC` |  | |  |  | `CURR(28)` |  |
| `BilledRevnUpToInptPerdAmtInPC` |  | |  |  | `CURR(28)` |  |
| `ActlRevnUpToCurPerdAmtInPC` |  | |  |  | `CURR(28)` |  |
| `BilledRevnUpToCurPerdAmtInPC` |  | |  |  | `CURR(28)` |  |
| `ActlRevnInProjCrcy` |  | |  |  | `CURR(28)` |  |
| `BilledRevenueAmtInProjCrcy` |  | |  |  | `CURR(28)` |  |
| `PlnCostUpToCurPerdAmtInPC` |  | |  |  | `CURR(23)` |  |
| `PlnCostUpToPrevPerdAmtInPC` |  | |  |  | `CURR(23)` |  |
| `PlndCostAmtInProjCrcy` |  | |  |  | `CURR(23)` |  |
| `BslnCostUpToCurPerdAmtInPC` |  | |  |  | `CURR(23)` |  |
| `BslnCostUpToPrevPerdAmtInPC` |  | |  |  | `CURR(23)` |  |
| `BaselinePlndCostAmt` |  | |  |  | `CURR(23)` |  |
| `RevenueAsSoldAmount` |  | |  |  | `CURR(23)` |  |
| `PlnEffortUpToPrevPerdQty` |  | |  |  | `QUAN(15)` |  |
| `PlndEffortUpToCurPerd` |  | |  |  | `QUAN(15)` |  |
| `PlndEffortQty` |  | |  |  | `QUAN(15)` |  |
| `BslnEffortUpToPrevPerdQty` |  | |  |  | `QUAN(15)` |  |
| `BslnEffortUpToCurPerdQty` |  | |  |  | `QUAN(15)` |  |
| `BaselinePlndEffortQty` |  | |  |  | `QUAN(15)` |  |
| `ActlEffortQty` |  | |  |  | `QUAN(15)` |  |
| `ActlEffortUpToInptPerdQty` |  | |  |  | `QUAN(15)` |  |
| `ActlEffortUpToPrevPerdQty` |  | |  |  | `QUAN(15)` |  |
| `ActlEffortQtyUpToCurPerd` |  | |  |  | `QUAN(15)` |  |
| `DiffBtwnPlnAndActlEffortQty` |  | |  |  | `QUAN(16)` |  |
