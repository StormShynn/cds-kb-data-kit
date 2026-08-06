---
name: C_PROFITANDLOSSPLANACTQ2903
description: This CDS view provides the prerequisites for answering the following business questions: What are the actual and plan amounts for each G/L account in company code currency? What are the actual and plan amounts for each G/L account in global currency? What are the absolute and relative differences of the actual and the plan amount in company code currency and global currency? For both currency types, you can drill down for further relevant characteristics.
app_component: FI-FIO-GL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROFITANDLOSSPLANACTQ2903')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions: What are the actual and plan amounts for each G/L account in company code currency? What are the actual and plan amounts for each G/L account in global currency? What are the absolute and relative differences of the actual and the plan amount in company code currency and global currency? For both currency types, you can drill down for further relevant characteristics.
keywords:
  - PL Plan Actual
  - PL Plan Actual
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
  - metadata-only
---
# C_PROFITANDLOSSPLANACTQ2903

**This CDS view provides the prerequisites for answering the following business questions: What are the actual and plan amounts for each G/L account in company code currency? What are the actual and plan amounts for each G/L account in global currency? What are the absolute and relative differences of the actual and the plan amount in company code currency and global currency? For both currency types, you can drill down for further relevant characteristics.**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROFITANDLOSSPLANACTQ2903')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `GLAccount` | `CHAR(10)` | G/L Account |
| `GLAccountName` | `CHAR(20)` | G/L Account Name |
| `CostCtrActivityType` | `CHAR(6)` | Activity Type |
| `BusinessTransactionType` | `CHAR(4)` | Business Transaction Type |
| `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `CalendarQuarter` | `NUMC(1)` | Calendar Quarter |
| `CalendarWeek` | `NUMC(2)` | Calendar Week |
| `CalendarYear` | `NUMC(4)` | Calendar Year |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `CompanyCodeCurrency` | `CUKY(5)` | Company Code Currency |
| `CostCenter` | `CHAR(10)` | Cost Center |
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
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `GlobalCurrency` | `CUKY(5)` | Global Currency |
| `AccountingDocument` | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `LedgerFiscalYear` | `NUMC(4)` | Fiscal Year of Ledger |
| `Material` | `CHAR(40)` | Material Number |
| `MaterialGroup` | `CHAR(9)` | Material Group |
| `AccountAssignmentType` | `CHAR(2)` | Account Assignment Type |
| `OrderID` | `CHAR(12)` | Order ID |
| `PartnerCostCtrActivityType` | `CHAR(6)` | Partner Cost Center Activity Type |
| `PartnerCostCenter` | `CHAR(10)` | Partner Cost Center |
| `PartnerFunctionalArea` | `CHAR(16)` | Partner Functional Area |
| `PartnerOrder` | `CHAR(12)` | Partner Order |
| `PartnerProfitCenter` | `CHAR(10)` | Partner Profit Center |
| `PartnerProject` | `CHAR(24)` | Partner Project |
| `PartnerProjectExternalID` | `CHAR(24)` | Partner Project External ID |
| `PartnerWBSElement` | `CHAR(24)` | Partner WBS Element |
| `PartnerWBSElementExternalID` | `CHAR(24)` | Partner WBS Element External ID |
| `PersonnelNumber` | `NUMC(8)` | Personnel Number |
| `PlanningCategory` | `CHAR(10)` | Plan Category |
| `PostingDate` | `DATS(8)` | Posting Date |
| `Product` | `CHAR(40)` | Product |
| `SoldProduct` | `CHAR(40)` | Product Sold |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `Project` | `CHAR(24)` | Project |
| `ProjectExternalID` | `CHAR(24)` | Project External ID |
| `CostAnalysisResource` | `CHAR(10)` | Cost Analysis Resource |
| `CostAnalysisResourceName` | `CHAR(20)` | Cost Analysis Resource Name |
| `SalesOrder` | `CHAR(10)` | Sales Order |
| `SalesOrderItem` | `NUMC(6)` | Sales Order Item |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `SoldMaterial` | `CHAR(40)` | Sold Material |
| `SoldProductGroup` | `CHAR(9)` | Sold Product Group |
| `PartnerCompany` | `CHAR(6)` | Company ID of Trading Partner |
| `WBSElement` | `CHAR(24)` | WBS Element |
| `WBSElementExternalID` | `CHAR(24)` | WBS Element External ID |
| `WorkItem` | `CHAR(10)` | Work Item ID |
| `YearMonth` | `NUMC(6)` | Year Month |
| `YearQuarter` | `NUMC(5)` | Year Quarter |
| `YearWeek` | `NUMC(6)` | Year Week |
| `ActualAmountInCompanyCodeCrcy` | `CURR(23)` | Amount in Company Code Currency |
| `PlanAmountInCompanyCodeCrcy` | `CURR(23)` | Amount in Company Code Currency |
| `DifferenceAmtInCoCodeCrcy` | `INT1(3)` |  |
| `CoCodeCrcyDifferencePct` | `INT1(3)` |  |
| `ActualAmountInGlobalCurrency` | `CURR(23)` | Amount in Global Currency |
| `PlanAmountInGlobalCurrency` | `CURR(23)` | Amount in Global Currency |
| `DifferenceAmtInGlobalCrcy` | `INT1(3)` |  |
| `GlobalCrcyDifferencePct` | `INT1(3)` |  |
