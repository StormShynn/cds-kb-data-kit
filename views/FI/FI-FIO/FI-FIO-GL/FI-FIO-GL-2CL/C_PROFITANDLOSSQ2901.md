---
name: C_PROFITANDLOSSQ2901
description: This CDS view provides the prerequisites for answering the following business questions: What are the actual amounts for each G/L account in transaction currency? What are the actual amounts for each G/L account in company code currency? What are the actual amounts for each G/L account in global currency? For all three currency types, you can drill down for further relevant characteristics.
app_component: FI-FIO-GL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROFITANDLOSSQ2901')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions: What are the actual amounts for each G/L account in transaction currency? What are the actual amounts for each G/L account in company code currency? What are the actual amounts for each G/L account in global currency? For all three currency types, you can drill down for further relevant characteristics.
keywords:
  - Profit Loss Actuals
  - Profit Loss Actuals
  - Profit Loss Actuals
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
  - transaction
  - metadata-only
---
# C_PROFITANDLOSSQ2901

**This CDS view provides the prerequisites for answering the following business questions: What are the actual amounts for each G/L account in transaction currency? What are the actual amounts for each G/L account in company code currency? What are the actual amounts for each G/L account in global currency? For all three currency types, you can drill down for further relevant characteristics.**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROFITANDLOSSQ2901')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `GLAccount` | `CHAR(10)` | G/L Account |
| `GLAccountName` | `CHAR(20)` | G/L Account Name |
| `CostCtrActivityType` | `CHAR(6)` | Activity Type |
| `BaseUnit` | `UNIT(3)` | Base Unit of Measure |
| `BusinessTransactionType` | `CHAR(4)` | Business Transaction Type |
| `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `CalendarQuarter` | `NUMC(1)` | Calendar Quarter |
| `CalendarWeek` | `NUMC(2)` | Calendar Week |
| `CalendarYear` | `NUMC(4)` | Calendar Year |
| `ChartOfAccounts` | `CHAR(4)` | Chart of Accounts |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `CompanyCodeCurrency` | `CUKY(5)` | Company Code Currency |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `Customer` | `CHAR(10)` | Customer Number |
| `CustomerGroup` | `CHAR(2)` | Customer Group |
| `DebitCreditCode` | `CHAR(1)` | Debit/Credit Code |
| `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` | `CHAR(2)` | Division |
| `FiscalPeriod` | `NUMC(3)` | Fiscal Period |
| `FiscalQuarter` | `NUMC(1)` | Fiscal Quarter |
| `FiscalWeek` | `NUMC(2)` | Fiscal Week |
| `FiscalYearPeriod` | `NUMC(7)` | Fiscal Year Period |
| `FiscalYearQuarter` | `NUMC(5)` | Fiscal Year + Fiscal Quarter |
| `FiscalYearWeek` | `NUMC(6)` | Fiscal Year + Fiscal Week |
| `FiscalYearVariant` | `CHAR(2)` | Fiscal Year Variant |
| `EmployeeFullName` | `CHAR(80)` | Full Name |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `GlobalCurrency` | `CUKY(5)` | Global Currency |
| `AccountingDocument` | `CHAR(10)` | Journal Entry |
| `AccountingDocumentItem` | `NUMC(3)` | Journal Entry Posting View Item |
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
| `TransactionCurrency` | `CUKY(5)` | Transaction Currency |
| `WBSElement` | `CHAR(24)` | WBS Element |
| `WBSElementExternalID` | `CHAR(24)` | WBS Element External ID |
| `CalendarYearMonth` | `NUMC(6)` | Year Month |
| `CalendarYearQuarter` | `NUMC(5)` | Year Quarter |
| `CalendarYearWeek` | `NUMC(6)` | Year Week |
| `AmountInTransactionCurrency` | `CURR(23)` | Amount in Transaction Currency |
| `AmountInCompanyCodeCurrency` | `CURR(23)` | Amount in Company Code Currency |
| `AmountInGlobalCurrency` | `CURR(23)` | Amount in Global Currency |
| `Quantity` | `QUAN(23)` | Quantity |
