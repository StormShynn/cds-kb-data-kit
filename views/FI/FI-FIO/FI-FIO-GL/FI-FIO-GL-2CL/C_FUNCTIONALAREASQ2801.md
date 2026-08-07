---
name: C_FUNCTIONALAREASQ2801
description: This CDS view provides the prerequisites for answering the following business questions: What are the actual amounts per functional area and G/L account in transaction currency? What are the actual amounts per functional area and G/L account in company code currency? What are the actual amounts per functional area and G/L account in global currency? For all three currency types, you can drill down for further relevant characteristics.
app_component: FI-FIO-GL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FUNCTIONALAREASQ2801')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions: What are the actual amounts per functional area and G/L account in transaction currency? What are the actual amounts per functional area and G/L account in company code currency? What are the actual amounts per functional area and G/L account in global currency? For all three currency types, you can drill down for further relevant characteristics.
keywords:
  - Functional Areas Actuals
  - Functional Areas Actuals
  - Functional Areas Actuals
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
  - transaction
  - metadata-only
---
# C_FUNCTIONALAREASQ2801

**This CDS view provides the prerequisites for answering the following business questions: What are the actual amounts per functional area and G/L account in transaction currency? What are the actual amounts per functional area and G/L account in company code currency? What are the actual amounts per functional area and G/L account in global currency? For all three currency types, you can drill down for further relevant characteristics.**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FUNCTIONALAREASQ2801')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `GLAccountName` |  | |  |  | `CHAR(20)` | G/L Account Name |
| `CostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `CalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `CostSourceUnit` |  | |  |  | `UNIT(3)` | Cost Source Unit |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `ControllingDebitCreditCode` |  | |  |  | `CHAR(1)` | Controlling Debit Credit Code |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalQuarter` |  | |  |  | `NUMC(1)` | Fiscal Quarter |
| `FiscalWeek` |  | |  |  | `NUMC(2)` | Fiscal Week |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `FiscalYearQuarter` |  | |  |  | `NUMC(5)` | Fiscal Year + Fiscal Quarter |
| `FiscalYearWeek` |  | |  |  | `NUMC(6)` | Fiscal Year + Fiscal Week |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Partner Cost Center |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `PartnerOrder` |  | |  |  | `CHAR(12)` | Partner Order |
| `PartnerProfitCenter` |  | |  |  | `CHAR(10)` | Partner Profit Center |
| `PartnerProject` |  | |  |  | `CHAR(24)` | Partner Project |
| `PartnerWBSElement` |  | |  |  | `CHAR(24)` | Partner WBS Element |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `Project` |  | |  |  | `CHAR(24)` | Project |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `SoldMaterial` |  | |  |  | `CHAR(40)` | Sold Material |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `WBSElement` |  | |  |  | `CHAR(24)` | WBS Element |
| `CalendarYearMonth` |  | |  |  | `NUMC(6)` | Year Month |
| `CalendarYearQuarter` |  | |  |  | `NUMC(5)` | Year Quarter |
| `CalendarYearWeek` |  | |  |  | `NUMC(6)` | Year Week |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `ValuationQuantity` |  | |  |  | `QUAN(23)` | Valuation Quantity |
