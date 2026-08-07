---
name: I_ENGMNTPROJACTLPLANCUBE
description: "This CDS view provides the prerequisites for answering the following business questions: What is the deviation between planned and actual costs till date? What is the proportion of billable and non-billable costs in projects? Show me a cost comparison between current and baseline versions. Show me the billable and non-billable time postings. Show me cost information by company code or controlling area."
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJACTLPLANCUBE')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What is the deviation between planned and actual costs till date? What is the proportion of billable and non-billable costs in projects? Show me a cost comparison between current and baseline versions. Show me the billable and non-billable time postings. Show me cost information by company code or controlling area."
tags:
  - CA
  - bo:plant
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - interface-view
  - lob:cross_application components
  - plan
  - project
  - metadata-only
---
# I_ENGMNTPROJACTLPLANCUBE

**This CDS view provides the prerequisites for answering the following business questions: What is the deviation between planned and actual costs till date? What is the proportion of billable and non-billable costs in projects? Show me a cost comparison between current and baseline versions. Show me the billable and non-billable time postings. Show me cost information by company code or controlling area.**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJACTLPLANCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProject` |  | |  |  | `CHAR(40)` | Engagement Project ID |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `UnitOfMeasure` |  | |  |  | `UNIT(3)` | Unit of Measure |
| `ProjectStartDate` |  | |  |  | `DATS(8)` | Commercial Project: Start Date |
| `ProjectEndDate` |  | |  |  | `DATS(8)` | Commercial Project: End Date |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `EngagementProjectType` |  | |  |  | `CHAR(4)` | Engagement Project Type |
| `EngagementProjectStage` |  | |  |  | `CHAR(4)` | Commercial Project: Stage |
| `EngagementProjectServiceOrg` |  | |  |  | `CHAR(5)` | Service Organization |
| `EngagementProjectCategory` |  | |  |  | `CHAR(1)` | Project Type |
| `ProjectProfileCode` |  | |  |  | `CHAR(7)` | Project Profile |
| `EngagementProjectResourceType` |  | |  |  | `CHAR(4)` | Resource Type ID |
| `BillingControlCategory` |  | |  |  | `CHAR(8)` |  |
| `ProjectManagerName` |  | |  |  | `CHAR(80)` |  |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company code for the project |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `SalesOrderItemCategory` |  | |  |  | `CHAR(4)` | Sales Document Item Category |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling area for the project |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CostCenter` |  | |  |  | `CHAR(20)` | Organization Unit Key |
| `ActlEffortQty` |  | |  |  | `QUAN(15)` |  |
| `PlndEffortQty` |  | |  |  | `QUAN(15)` |  |
| `BaselinePlndEffortQty` |  | |  |  | `QUAN(15)` |  |
| `FiscalYearPeriod` |  | |  |  | `CHAR(7)` |  |
| `Currency` |  | |  |  | `CUKY(5)` | Custom Project Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `ActlRevnInProjCrcy` |  | |  |  | `CURR(28)` |  |
| `BilledRevenueAmtInProjCrcy` |  | |  |  | `CURR(28)` |  |
| `ActlCostInProjCrcy` |  | |  |  | `CURR(23)` |  |
| `PlndCostAmtInProjCrcy` |  | |  |  | `CURR(23)` |  |
| `BaselinePlndCostAmt` |  | |  |  | `CURR(23)` |  |
| `RevenueAsSoldAmount` |  | |  |  | `CURR(23)` |  |
| `ActlCostUpToInptPerdAmtInPC` |  | |  |  | `CURR(23)` |  |
| `ActlCostUpToCurPerdAmtInPC` |  | |  |  | `CURR(23)` |  |
| `ActlRevnUpToInptPerdAmtInPC` |  | |  |  | `CURR(28)` |  |
| `BilledRevnUpToInptPerdAmtInPC` |  | |  |  | `CURR(28)` |  |
| `ActlRevnUpToCurPerdAmtInPC` |  | |  |  | `CURR(28)` |  |
| `BilledRevnUpToCurPerdAmtInPC` |  | |  |  | `CURR(28)` |  |
| `PlnCostUpToCurPerdAmtInPC` |  | |  |  | `CURR(23)` |  |
| `PlnCostUpToPrevPerdAmtInPC` |  | |  |  | `CURR(23)` |  |
| `BslnCostUpToCurPerdAmtInPC` |  | |  |  | `CURR(23)` |  |
| `BslnCostUpToPrevPerdAmtInPC` |  | |  |  | `CURR(23)` |  |
| `PlndEffortUpToCurPerd` |  | |  |  | `QUAN(15)` |  |
| `PlnEffortUpToPrevPerdQty` |  | |  |  | `QUAN(15)` |  |
| `BslnEffortUpToCurPerdQty` |  | |  |  | `QUAN(15)` |  |
| `BslnEffortUpToPrevPerdQty` |  | |  |  | `QUAN(15)` |  |
| `ActlEffortUpToInptPerdQty` |  | |  |  | `QUAN(15)` |  |
| `ActlEffortQtyUpToCurPerd` |  | |  |  | `QUAN(15)` |  |
| `ActlEffortUpToPrevPerdQty` |  | |  |  | `QUAN(15)` |  |
| `IsMyProject` |  | |  |  | `CHAR(1)` |  |
| `DiffBtwnPlnAndActlEffortQty` |  | |  |  | `QUAN(16)` |  |
| `ProjectVisibility` |  | |  |  | `CHAR(1)` | Confidential Indicator for Commercial Project |
| `ProjectManagerWorkAgreement` |  | |  |  | `NUMC(8)` |  |
