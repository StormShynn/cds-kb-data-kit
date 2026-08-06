---
name: C_PROFITCENTERPLANACTQ2701
description: This CDS view provides the prerequisites for answering the following business questions: What are the actual and plan amounts for each profit center and G/L account in company code currency or global currency? What are the absolute and relative differences of the actual and the plan amounts in company code currency and global currency? Optional: What are the actual and plan amounts for each profit center and G/L account in transaction currency? What are the absolute and relative differences of the actual and the plan amounts in transaction currency? For all three currency types, you can drill down for further relevant characteristics.
app_component: FI-FIO-GL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROFITCENTERPLANACTQ2701')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions: What are the actual and plan amounts for each profit center and G/L account in company code currency or global currency? What are the absolute and relative differences of the actual and the plan amounts in company code currency and global currency? Optional: What are the actual and plan amounts for each profit center and G/L account in transaction currency? What are the absolute and relative differences of the actual and the plan amounts in transaction currency? For all three currency types, you can drill down for further relevant characteristics.
keywords:
  - Profit Center Plan Actual
  - Profit Center Plan Actual
tags:
  - FI
  - account
  - bo:companycode
  - component:FI-FIO-GL-2CL
  - consumption-view
  - FI-FIO
  - FI-FIO-GL
  - FI-FIO-GL-2CL
  - lob:finance
  - plan
  - transaction
  - metadata-only
---
# C_PROFITCENTERPLANACTQ2701

**This CDS view provides the prerequisites for answering the following business questions: What are the actual and plan amounts for each profit center and G/L account in company code currency or global currency? What are the absolute and relative differences of the actual and the plan amounts in company code currency and global currency? Optional: What are the actual and plan amounts for each profit center and G/L account in transaction currency? What are the absolute and relative differences of the actual and the plan amounts in transaction currency? For all three currency types, you can drill down for further relevant characteristics.**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROFITCENTERPLANACTQ2701')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `GLAccountName` | `CHAR(20)` | G/L Account Name |
| `CostCtrActivityType` | `CHAR(6)` | Activity Type |
| `BusinessTransactionType` | `CHAR(4)` | Business Transaction Type |
| `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `CalendarQuarter` | `NUMC(1)` | Calendar Quarter |
| `CalendarWeek` | `NUMC(2)` | Calendar Week |
| `CalendarYear` | `NUMC(4)` | Calendar Year |
| `ChartOfAccounts` | `CHAR(4)` | Chart of Accounts |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `CompanyCodeCurrency` | `CUKY(5)` | Company Code Currency |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `CostSourceUnit` | `UNIT(3)` | Cost Source Unit |
| `Customer` | `CHAR(10)` | Customer Number |
| `CustomerGroup` | `CHAR(2)` | Customer Group |
| `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `Division` | `CHAR(2)` | Division |
| `ControllingDebitCreditCode` | `CHAR(1)` | Controlling Debit Credit Code |
| `FiscalPeriod` | `NUMC(3)` | Fiscal Period |
| `FiscalQuarter` | `NUMC(1)` | Fiscal Quarter |
| `FiscalWeek` | `NUMC(2)` | Fiscal Week |
| `FiscalYearPeriod` | `NUMC(7)` | Fiscal Year Period |
| `FiscalYearQuarter` | `NUMC(5)` | Fiscal Year + Fiscal Quarter |
| `FiscalYearWeek` | `NUMC(6)` | Fiscal Year + Fiscal Week |
| `FiscalYearVariant` | `CHAR(2)` | Fiscal Year Variant |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `GlobalCurrency` | `CUKY(5)` | Global Currency |
| `AccountingDocument` | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `LedgerFiscalYear` | `NUMC(4)` | Fiscal Year of Ledger |
| `Material` | `CHAR(40)` | Material Number |
| `MaterialGroup` | `CHAR(9)` | Material Group |
| `AccountAssignmentType` | `CHAR(2)` | Account Assignment Type |
| `OrderID` | `CHAR(12)` | Order ID |
| `OriginProfitCenter` | `CHAR(10)` | Origin Profit Center |
| `PartnerCostCtrActivityType` | `CHAR(6)` | Partner Cost Center Activity Type |
| `PartnerCostCenter` | `CHAR(10)` | Partner Cost Center |
| `PartnerFunctionalArea` | `CHAR(16)` | Partner Functional Area |
| `PartnerOrder` | `CHAR(12)` | Partner Order |
| `PartnerProfitCenter` | `CHAR(10)` | Partner Profit Center |
| `PartnerProject` | `CHAR(24)` | Partner Project |
| `PartnerWBSElement` | `CHAR(24)` | Partner WBS Element |
| `PlanningCategory` | `CHAR(10)` | Plan Category |
| `PostingDate` | `DATS(8)` | Posting Date |
| `Product` | `CHAR(40)` | Product |
| `SoldProduct` | `CHAR(40)` | Product Sold |
| `Project` | `CHAR(24)` | Project |
| `SalesOrder` | `CHAR(10)` | Sales Order |
| `SalesOrderItem` | `NUMC(6)` | Sales Order Item |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `SoldMaterial` | `CHAR(40)` | Sold Material |
| `SoldProductGroup` | `CHAR(9)` | Sold Product Group |
| `PartnerCompany` | `CHAR(6)` | Company ID of Trading Partner |
| `TransactionCurrency` | `CUKY(5)` | Transaction Currency |
| `WBSElement` | `CHAR(24)` | WBS Element |
| `YearMonth` | `NUMC(6)` | Year Month |
| `YearQuarter` | `NUMC(5)` | Year Quarter |
| `YearWeek` | `NUMC(6)` | Year Week |
| `ActualAmountInTransactionCrcy` | `CURR(23)` | Amount in Global Currency |
| `PlanAmountInTransactionCrcy` | `CURR(23)` | Amount in Company Code Currency |
| `DifferenceAmtInTransCrcy` | `INT1(3)` |  |
| `TransCrcyDifferencePct` | `INT1(3)` |  |
| `ActualAmountInCompanyCodeCrcy` | `CURR(23)` | Amount in Company Code Currency |
| `PlanAmountInCompanyCodeCrcy` | `CURR(23)` | Amount in Company Code Currency |
| `DifferenceAmtInCoCodeCrcy` | `INT1(3)` |  |
| `CoCodeCrcyDifferencePct` | `INT1(3)` |  |
| `ActualAmountInGlobalCurrency` | `CURR(23)` | Amount in Global Currency |
| `PlanAmountInGlobalCurrency` | `CURR(23)` | Amount in Global Currency |
| `DifferenceAmtInGlobalCrcy` | `INT1(3)` |  |
| `GlobalCrcyDifferencePct` | `INT1(3)` |  |
| `ValuationQuantity` | `QUAN(23)` | Valuation Quantity |
| `ActualValuationQuantity` | `QUAN(23)` | Actual Valuation Quantity |
| `PlanValuationQuantity` | `QUAN(23)` | Plan Valuation Quantity |
