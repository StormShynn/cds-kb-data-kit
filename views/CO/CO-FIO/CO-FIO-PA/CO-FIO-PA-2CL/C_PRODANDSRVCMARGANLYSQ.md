---
name: C_PRODANDSRVCMARGANLYSQ
description: Product and Service Margins - Qry
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRODANDSRVCMARGANLYSQ')/$value
semantic_en: Product and Service Margins - Qry
tags:
  - CO
  - bo:material
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - consumption-view
  - lob:controlling
  - lob:finance
  - product
  - metadata-only
---
# C_PRODANDSRVCMARGANLYSQ

**Product and Service Margins - Qry**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRODANDSRVCMARGANLYSQ')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CompanyCode` | `CHAR(4)` | Company Code |
| `CurrencyField` | `CHAR(4)` | Currency Role Field |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `FiscalPeriod` | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` | `NUMC(7)` | Fiscal Year Period |
| `AccountAssignmentType` | `CHAR(2)` | Account Assignment Type |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `BusinessSolutionOrder` | `CHAR(10)` | Solution Order |
| `BusinessSolutionOrderItem` | `NUMC(6)` | Solution Order Item |
| `ServiceDocument` | `CHAR(10)` | Service Document ID |
| `ServiceDocumentItem` | `NUMC(6)` | Service Document Item ID |
| `ServiceDocumentType` | `CHAR(4)` | Service Document Type |
| `ServiceContract` | `CHAR(10)` | Service Contract ID |
| `ServiceContractItem` | `NUMC(6)` | Service Contract Item ID |
| `ServiceContractType` | `CHAR(4)` | Service Contract Type |
| `SalesOrder` | `CHAR(10)` | Sales Order |
| `SalesOrderItem` | `NUMC(6)` | Sales Order Item |
| `SalesDocument` | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` | `NUMC(6)` | Sales Document Item |
| `ProjectExternalID` | `CHAR(24)` | Project Number (External) Edited |
| `SoldProductGroup` | `CHAR(9)` | Product Sold Group |
| `SoldProduct` | `CHAR(40)` | Product Sold |
| `CustomerGroup` | `CHAR(2)` | Customer Group |
| `Customer` | `CHAR(10)` | Customer Number |
| `ProviderContract` | `CHAR(20)` | Provider Contract |
| `ProviderContractItem` | `NUMC(6)` | Provider Contract Item |
| `SalesDistrict` | `CHAR(6)` | Sales District |
| `Product` | `CHAR(40)` | Product |
| `BillToParty` | `CHAR(10)` | Bill-to Party |
| `CustomerSupplierCountry` | `CHAR(3)` | Customer or Supplier Country/Region |
| `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` | `CHAR(2)` | Division |
| `Plant` | `CHAR(4)` | Plant |
| `ShipToParty` | `CHAR(10)` | Ship-to Party |
| `WBSElement` | `CHAR(24)` | WBS Element |
| `WBSElementExternalID` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `ServicesRenderedDate` | `DATS(8)` | Date on which services are rendered |
| `OrderID` | `CHAR(12)` | Order ID |
| `ChartOfAccounts` | `CHAR(4)` | Chart of Accounts |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `BusinessTransactionType` | `CHAR(4)` | Business Transaction Type |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `CustomerSupplierIndustry` | `CHAR(4)` | Customer Supplier Industry |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `Currency` | `CUKY(5)` | Currency Key |
| `RecognizedRevnAmtInDspCrcy` | `CURR(23)` | Recognized Revenue |
| `BilledRevenueAmtInDspCrcy` | `CURR(23)` | Actual Revenue |
| `SalesDeductionAmountInDspCrcy` | `CURR(23)` | Sales Deduction |
| `RevenueAdjustmentAmtInDspCrcy` | `CURR(23)` | Revenue Adjustment |
| `RecognizedCOGSAmtInDspCrcy` | `CURR(23)` | Recognized COS |
| `RecognizableCostAmtInDspCrcy` | `CURR(23)` | Actual Cost |
| `COGSAdjustmentAmtInDspCrcy` | `CURR(23)` | COS Adjustment |
| `RecognizedMargAmtInDisplayCrcy` | `CURR(23)` | Recognized Margin |
| `AccruedRevenueAmtInDspCrcy` | `CURR(23)` | Accrued Revenue |
| `DeferredRevenueAmtInDspCrcy` | `CURR(23)` | Deferred Revenue |
| `AccruedCOGSAmtInDspCrcy` | `CURR(23)` | Accrued COS |
| `DeferredCOGSAmtInDspCrcy` | `CURR(23)` | Deferred COS |
| `ImminentLossRsrvAmtInDspCrcy` | `CURR(23)` | Imminent Loss Reserve |
| `SalesDeductReserveAmtInDspCrcy` | `CURR(23)` | Reserves for Anticipated Sales Deductions |
| `UnrlzdCostsReserveAmtInDspCrcy` | `CURR(23)` | Reserves for Unrealized Costs |
| `Reserves` | `CURR(23)` | Reserves |
| `ProjAndSlsOrdStkAmtInDspCrcy` | `CURR(23)` | Project/Sales Order Stock |
| `MnlContrAccrPnLItmAmtInDspCrcy` | `CURR(23)` | Manual Contract Accruals Income Statement in Display Crcy |
| `DownPaymentAmountInDspCrcy` | `CURR(23)` | Open Down Payment Amount in Display Currency |
| `MarginInPct` | `DECF(34)` |  |
