---
name: C_PROFITCENTERSTATKEYFIGSEMTAG
description: Profit Center Ststcl Key Figure  KPI
app_component: FI-FIO-GL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROFITCENTERSTATKEYFIGSEMTAG')/$value
semantic_en: Profit Center Ststcl Key Figure  KPI
tags:
  - FI
  - bo:companycode
  - component:FI-FIO-GL-2CL
  - consumption-view
  - FI-FIO
  - FI-FIO-GL
  - FI-FIO-GL-2CL
  - lob:finance
  - metadata-only
---
# C_PROFITCENTERSTATKEYFIGSEMTAG

**Profit Center Ststcl Key Figure  KPI**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROFITCENTERSTATKEYFIGSEMTAG')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CompanyCode` | `CHAR(4)` | Company Code |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` | `NUMC(3)` | Fiscal Period |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `PostingDate` | `DATS(8)` | Posting Date |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `FiscalYearPeriod` | `NUMC(7)` | Fiscal Year + Fiscal Period |
| `StatisticalKeyFigure` | `CHAR(6)` | Statistical Key Figure |
| `CompanyCodeCurrency` | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` | `CURR(23)` | Amount in Company Code Currency |
| `GlobalCurrency` | `CUKY(5)` | Global Currency |
| `AmountInGlobalCurrency` | `CURR(23)` | Amount in Global Currency |
| `StatisticalKeyFigQtyUnit` | `UNIT(3)` | Statistical Key Figure Quantity Unit |
| `StatisticalKeyFigureQuantity` | `QUAN(23)` | Statistical Key Figure Quantity |
| `IntmdStatisticalKeyFigFixedQty` | `QUAN(23)` | Statistical Key Figure Quantity |
| `ActualValue` | `INT1(3)` |  |
| `PlanValue` | `INT1(3)` |  |
| `ServiceCostInGlobalCrcy` | `CURR(23)` | Service Cost in Global Currency |
| `PlanActualDeltaValue` | `INT1(3)` |  |
| `AdministrationCostInGlobalCrcy` | `CURR(23)` | Administration Cost in Global Currnecy |
| `TravelCostInGlobalCrcy` | `CURR(23)` | Travel Cost Amount in Global Currency |
| `UtilityCostInGlobalCrcy` | `CURR(23)` | Utility Cost in Global Currency |
| `PersonnelCostInGlobalCrcy` | `CURR(23)` | Personnel Cost Amount in Global Currency |
| `MaterialCostInGlobalCrcy` | `CURR(23)` | Material Cost Amount in Global Currency |
| `MaintenanceCostInGlobCrcy` | `CURR(23)` | Maintenance Cost Amount in Global Currency |
| `DepreciationCostInGlobCrcy` | `CURR(23)` | Depreciation Cost Amount in Global Currency |
| `OverheadCostInGlobalCrcy` | `CURR(23)` | Overhead Cost in Global Currency |
| `AllocationCostInGlobalCrcy` | `CURR(23)` | Allocation Cost in Global Currency |
| `TrainingCostInGlobalCrcy` | `CURR(23)` | Training Cost in Global Currency |
| `SettlementCostInGlobalCrcy` | `CURR(23)` | Settlement Cost in Global Currency |
| `MiscellaneousCostInGlobalCrcy` | `CURR(23)` | Miscellaneous Cost in Global Currency |
| `RevenueInGlobalCurrency` | `CURR(23)` | Revenue Amount in Global Currency |
| `SalesDeductionAmountInGlobCrcy` | `CURR(23)` | Sales Deduction |
| `TotalWorkingHours` | `DEC(5)` | Working Hours |
| `Headcount` | `DEC(5)` | Average Number of employees |
| `TravelCostPerEmplInGlobCrcy` | `INT1(3)` |  |
| `TrainingCostPerEmplInGlobCrcy` | `INT1(3)` |  |
| `CostPerHourInGlobCrcy` | `INT1(3)` |  |
| `CostPerEmployeeInGlobCrcy` | `INT1(3)` |  |
| `MarginAmountPerEmplInGlobCrcy` | `INT1(3)` |  |
| `MarginAmountPerHourInGlobCrcy` | `INT1(3)` |  |
| `RecognizedMarginAmount` | `INT1(3)` |  |
