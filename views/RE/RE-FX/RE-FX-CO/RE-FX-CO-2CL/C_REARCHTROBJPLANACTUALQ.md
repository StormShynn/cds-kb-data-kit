---
name: C_REARCHTROBJPLANACTUALQ
description: RE Architecture Plan Actual - Qry
app_component: RE-FX-CO-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_REARCHTROBJPLANACTUALQ')/$value
semantic_en: RE Architecture Plan Actual - Qry
tags:
  - RE
  - component:RE-FX-CO-2CL
  - consumption-view
  - plan
  - RE-FX
  - RE-FX-CO
  - RE-FX-CO-2CL
  - metadata-only
---
# C_REARCHTROBJPLANACTUALQ

**RE Architecture Plan Actual - Qry**

| Property | Value |
|---|---|
| App Component | `RE-FX-CO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_REARCHTROBJPLANACTUALQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `FiscalYearQuarter` |  | |  |  | `NUMC(5)` | Fiscal Year + Fiscal Quarter |
| `FiscalQuarter` |  | |  |  | `NUMC(1)` | Fiscal Quarter |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `REArchitectureObjectNumberSite` |  | |  |  | `CHAR(20)` | Architecture Object Number of Site |
| `REArchitectureObjectParentUUID` |  | |  |  | `RAW(16)` | UUID for Real Estate Architecture Object |
| `REArchtrObjectNumberBldngLand` |  | |  |  | `CHAR(20)` | Architecture Object Number of Building/Land |
| `REArchitectureObjectUUID` |  | |  |  | `RAW(16)` | UUID for Real Estate Architecture Object |
| `REGnrcRentalObjPortfolioID` |  | |  |  | `CHAR(10)` | Generic Rental Object Portfolio ID |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `CostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `PlanningCategory` |  | |  |  | `CHAR(10)` | Plan Category |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project External ID |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `IsStatisticalOrder` |  | |  |  | `CHAR(1)` | Indicator: Internal Order is Statistical Account Assignment |
| `IsStatisticalCostCenter` |  | |  |  | `CHAR(1)` | Indicator: Cost Center is Statistical Account Assignment |
| `WBSIsStatisticalWBSElement` |  | |  |  | `CHAR(1)` | Indicator: WBS Element is Statistical Account Assignment |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `ActualValue` |  | |  |  | `DEC(23)` |  |
| `PlanValue` |  | |  |  | `DEC(23)` |  |
| `DeltaActPlanFYPeriodValue` |  | |  |  | `DEC(24)` |  |
| `DeltaActPlanFYPeriodRatio` |  | |  |  | `DECF(34)` |  |
| `ActualRollingFiscalYearValue` |  | |  |  | `DEC(23)` |  |
| `PrevFiscalYearValue` |  | |  |  | `DEC(23)` |  |
| `DeltaCurPrevFiscalYearValue` |  | |  |  | `DEC(24)` |  |
| `DeltaCurPrevFiscalYearRatio` |  | |  |  | `DECF(34)` |  |
