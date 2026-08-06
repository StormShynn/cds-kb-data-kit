---
name: C_SERVICEORDERQRY2401
description: Service Orders Actuals
app_component: FI-FIO-GL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SERVICEORDERQRY2401')/$value
semantic_en: Service Orders Actuals
keywords:
  - Service Orders Actuals
  - Service Orders Actuals
  - Service Orders Actuals
tags:
  - FI
  - component:FI-FIO-GL-2CL
  - consumption-view
  - FI-FIO
  - FI-FIO-GL
  - FI-FIO-GL-2CL
  - lob:finance
  - order
  - metadata-only
---
# C_SERVICEORDERQRY2401

**Service Orders Actuals**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SERVICEORDERQRY2401')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `ServiceDocumentType` | `CHAR(4)` | Service Document Type |
| `ServiceDocument` | `CHAR(10)` | Service Document ID |
| `ServiceDocumentItem` | `NUMC(6)` | Service Document Item ID |
| `ServiceContract` | `CHAR(10)` | Service Contract ID |
| `ServiceContractType` | `CHAR(4)` | Service Contract Type |
| `ServiceContractItem` | `NUMC(6)` | Service Contract Item ID |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `GLAccountName` | `CHAR(20)` | G/L Account Name |
| `BaseUnit` | `UNIT(3)` | Base Unit of Measure |
| `BillableControl` | `CHAR(2)` | Billable Control |
| `BusinessTransactionType` | `CHAR(4)` | Business Transaction Type |
| `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `CalendarQuarter` | `NUMC(1)` | Calendar Quarter |
| `CalendarWeek` | `NUMC(2)` | Calendar Week |
| `CalendarYear` | `NUMC(4)` | Calendar Year |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `CompanyCodeCurrency` | `CUKY(5)` | Company Code Currency |
| `Customer` | `CHAR(10)` | Customer Number |
| `CustomerGroup` | `CHAR(2)` | Customer Group |
| `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` | `CHAR(2)` | Division |
| `Equipment` | `CHAR(18)` | Equipment Number |
| `FiscalPeriod` | `NUMC(3)` | Fiscal Period |
| `FiscalQuarter` | `NUMC(1)` | Fiscal Quarter |
| `FiscalWeek` | `NUMC(2)` | Fiscal Week |
| `FiscalYearPeriod` | `NUMC(7)` | Fiscal Year Period |
| `FiscalYearQuarter` | `NUMC(5)` | Fiscal Year + Fiscal Quarter |
| `FiscalYearWeek` | `NUMC(6)` | Fiscal Year + Fiscal Week |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `FunctionalAreaName` | `CHAR(25)` | Name of the Functional Area |
| `GlobalCurrency` | `CUKY(5)` | Global Currency |
| `AccountingDocument` | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `LedgerFiscalYear` | `NUMC(4)` | Fiscal Year of Ledger |
| `TimeSheetOvertimeCategory` | `CHAR(4)` | Overtime Category |
| `PartnerCostCtrActivityType` | `CHAR(6)` | Partner Cost Center Activity Type |
| `PartnerCostCenter` | `CHAR(10)` | Partner Cost Center |
| `PartnerProfitCenter` | `CHAR(10)` | Partner Profit Center |
| `PersonnelNumber` | `NUMC(8)` | Personnel Number |
| `EmployeeFullName` | `CHAR(80)` | Full Name |
| `PostingDate` | `DATS(8)` | Posting Date |
| `Product` | `CHAR(40)` | Product |
| `SoldProduct` | `CHAR(40)` | Product Sold |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `ProfitCenterName` | `CHAR(20)` | Description of Profit Center |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `SoldProductGroup` | `CHAR(9)` | Sold Product Group |
| `TransactionCurrency` | `CUKY(5)` | Transaction Currency |
| `CalendarYearMonth` | `NUMC(6)` | Year Month |
| `CalendarYearQuarter` | `NUMC(5)` | Year Quarter |
| `CalendarYearWeek` | `NUMC(6)` | Year Week |
| `BusinessSolutionOrder` | `CHAR(10)` | Solution Order |
| `BusinessSolutionOrderItem` | `NUMC(6)` | Solution Order Item |
| `AmountInTransactionCurrency` | `CURR(23)` | Amount in Transaction Currency |
| `AmountInCompanyCodeCurrency` | `CURR(23)` | Amount in Company Code Currency |
| `AmountInGlobalCurrency` | `CURR(23)` | Amount in Global Currency |
| `Quantity` | `QUAN(23)` | Quantity |
