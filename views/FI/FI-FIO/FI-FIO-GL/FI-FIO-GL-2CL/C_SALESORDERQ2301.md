---
name: C_SALESORDERQ2301
description: This CDS view provides the prerequisites for answering the following business questions: What are the actual amounts for each sales order, sales order item, and G/L account in transaction currency? What are the actual amounts for each sales order, sales order item, and G/L account in company code currency? What are the actual amounts for each sales order, sales order item, and G/L account in global currency? For all three currency types, you can drill down for further relevant characteristics.
app_component: FI-FIO-GL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SALESORDERQ2301')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions: What are the actual amounts for each sales order, sales order item, and G/L account in transaction currency? What are the actual amounts for each sales order, sales order item, and G/L account in company code currency? What are the actual amounts for each sales order, sales order item, and G/L account in global currency? For all three currency types, you can drill down for further relevant characteristics.
keywords:
  - Sales Orders Actuals
  - Sales Orders Actuals
  - Sales Orders Actuals
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
  - order
  - sales-order
  - transaction
  - metadata-only
---
# C_SALESORDERQ2301

**This CDS view provides the prerequisites for answering the following business questions: What are the actual amounts for each sales order, sales order item, and G/L account in transaction currency? What are the actual amounts for each sales order, sales order item, and G/L account in company code currency? What are the actual amounts for each sales order, sales order item, and G/L account in global currency? For all three currency types, you can drill down for further relevant characteristics.**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SALESORDERQ2301')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `IsStatisticalSalesDocument` | `CHAR(1)` | Sales Document is statistical |
| `SalesOrder` | `CHAR(10)` | Sales Order |
| `SalesOrderItem` | `NUMC(6)` | Sales Order Item |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `GLAccountName` | `CHAR(20)` | G/L Account Name |
| `BaseUnit` | `UNIT(3)` | Base Unit of Measure |
| `BusinessTransactionType` | `CHAR(4)` | Business Transaction Type |
| `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `CalendarQuarter` | `NUMC(1)` | Calendar Quarter |
| `CalendarWeek` | `NUMC(2)` | Calendar Week |
| `CalendarYear` | `NUMC(4)` | Calendar Year |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `CompanyCodeCurrency` | `CUKY(5)` | Company Code Currency |
| `ControllingDebitCreditCode` | `CHAR(1)` | Controlling Debit Credit Code |
| `Customer` | `CHAR(10)` | Customer Number |
| `CustomerGroup` | `CHAR(2)` | Customer Group |
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
| `Material` | `CHAR(40)` | Material Number |
| `PartnerCostCtrActivityType` | `CHAR(6)` | Partner Cost Center Activity Type |
| `PartnerCostCenter` | `CHAR(10)` | Partner Cost Center |
| `PartnerFunctionalArea` | `CHAR(16)` | Partner Functional Area |
| `PartnerOrder` | `CHAR(12)` | Partner Order |
| `PartnerProfitCenter` | `CHAR(10)` | Partner Profit Center |
| `PartnerProject` | `CHAR(24)` | Partner Project |
| `PartnerWBSElement` | `CHAR(24)` | Partner WBS Element |
| `PostingDate` | `DATS(8)` | Posting Date |
| `AccountingDocumentItem` | `NUMC(3)` | Journal Entry Posting View Item |
| `Product` | `CHAR(40)` | Product |
| `SoldProduct` | `CHAR(40)` | Product Sold |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `ProfitCenterName` | `CHAR(20)` | Description of Profit Center |
| `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `SegmentName` | `CHAR(50)` | Segment Name |
| `SoldMaterial` | `CHAR(40)` | Sold Material |
| `PartnerCompany` | `CHAR(6)` | Company ID of Trading Partner |
| `TransactionCurrency` | `CUKY(5)` | Transaction Currency |
| `WorkItem` | `CHAR(10)` | Work Item ID |
| `WorkItemName` | `CHAR(40)` | Work Item Name |
| `CalendarYearMonth` | `NUMC(6)` | Year Month |
| `CalendarYearQuarter` | `NUMC(5)` | Year Quarter |
| `CalendarYearWeek` | `NUMC(6)` | Year Week |
| `AmountInTransactionCurrency` | `CURR(23)` | Amount in Transaction Currency |
| `AmountInCompanyCodeCurrency` | `CURR(23)` | Amount in Company Code Currency |
| `AmountInGlobalCurrency` | `CURR(23)` | Amount in Global Currency |
| `Quantity` | `QUAN(23)` | Quantity |
