---
name: C_ENGMTPROJMARGANLYSQUERY
description: This CDS view provides the prerequisites for answering the following business questions. Note that business questions related to revenue and margin are not applicable to internal projects. What is the total planned cost of the project? What is the total planned revenue of the project? What is the total actual cost of the project? What is the total actual revenue of the project? What is the total planned cost of the project up to the current month? What is the total planned revenue of the project up to the current month? What is the total actual cost of the project up to the current month? What is the total actual revenue of the project up to the current month? What is the likely margin (in percentage) when the project is completed?
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGMTPROJMARGANLYSQUERY')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions. Note that business questions related to revenue and margin are not applicable to internal projects. What is the total planned cost of the project? What is the total planned revenue of the project? What is the total actual cost of the project? What is the total actual revenue of the project? What is the total planned cost of the project up to the current month? What is the total planned revenue of the project up to the current month? What is the total actual cost of the project up to the current month? What is the total actual revenue of the project up to the current month? What is the likely margin (in percentage) when the project is completed?
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
  - metadata-only
---
# C_ENGMTPROJMARGANLYSQUERY

**This CDS view provides the prerequisites for answering the following business questions. Note that business questions related to revenue and margin are not applicable to internal projects. What is the total planned cost of the project? What is the total planned revenue of the project? What is the total actual cost of the project? What is the total actual revenue of the project? What is the total planned cost of the project up to the current month? What is the total planned revenue of the project up to the current month? What is the total actual cost of the project up to the current month? What is the total actual revenue of the project up to the current month? What is the likely margin (in percentage) when the project is completed?**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGMTPROJMARGANLYSQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProjectServiceOrg` |  | |  |  | `CHAR(5)` | Service Organization |
| `EngmtProjectServiceOrgName` |  | |  |  | `CHAR(40)` | Description of Organization Unit ID |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ProfitCenterName` |  | |  |  | `CHAR(20)` | Description of Profit Center |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerName` |  | |  |  | `CHAR(80)` | Name of Customer |
| `EngagementProject` |  | |  |  | `CHAR(40)` | Project |
| `EngagementProjectName` |  | |  |  | `CHAR(40)` | Customer Project Name |
| `ProjectVisibility` |  | |  |  | `CHAR(1)` | Confidential Indicator for Commercial Project |
| `EngagementProjectStage` |  | |  |  | `CHAR(4)` | Commercial Project: Stage |
| `EngagementProjectStageText` |  | |  |  | `CHAR(40)` | Master Project: Stage Description |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company code for the project |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `CountryName` |  | |  |  | `CHAR(50)` | Country/Region Name |
| `IsMyProject` |  | |  |  | `CHAR(1)` |  |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `SalesOrderItemText` |  | |  |  | `CHAR(40)` | Short Text for Sales Order Item |
| `SalesOrderItemCategory` |  | |  |  | `CHAR(4)` | Sales Document Item Category |
| `SalesDocumentItemCategoryName` |  | |  |  | `CHAR(20)` | Description |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Review Year Period |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Period |
| `Currency` |  | |  |  | `CUKY(5)` | Plan Currency |
| `ControllingAreaCurrency` |  | |  |  | `CUKY(5)` | Controlling Area Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `PlndCostInCoCodeCrcy` |  | |  |  | `CURR(17)` |  |
| `PlndRevnInCoCodeCrcy` |  | |  |  | `CURR(17)` |  |
| `ActlCostInCoCodeCrcy` |  | |  |  | `CURR(23)` |  |
| `ActlRevnInCoCodeCrcy` |  | |  |  | `CURR(23)` |  |
| `BilledRevenueAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` |  |
| `PlndRevenueAmtInCtrlgAreaCrcy` |  | |  |  | `CURR(17)` |  |
| `PlndCostAmtInCtrlgAreaCrcy` |  | |  |  | `CURR(17)` |  |
| `ActlRevenueAmtInCtrlgAreaCrcy` |  | |  |  | `CURR(23)` |  |
| `BilledRevnAmtInCtrlgAreaCrcy` |  | |  |  | `CURR(23)` |  |
| `PlannedCostUpToCurMonth` |  | |  |  | `CURR(17)` |  |
| `PlannedRevnUpToCurMonth` |  | |  |  | `CURR(17)` |  |
| `ActualCostUpToCurMonth` |  | |  |  | `CURR(23)` |  |
| `ActualRevnUpToCurMonth` |  | |  |  | `CURR(23)` |  |
| `BilledRevenueUpToCurMonthInAmt` |  | |  |  | `CURR(23)` |  |
| `MarginAmt` |  | |  |  | `INT1(3)` |  |
| `MarginInPct` |  | |  |  | `INT1(3)` |  |
| `MarginAmtUpToCurMnth` |  | |  |  | `INT1(3)` |  |
