---
name: I_MARGANLYSPRODANDSRVCCUBE
description: Product and Service Margins - Cube
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MARGANLYSPRODANDSRVCCUBE')/$value
semantic_en: Product and Service Margins - Cube
keywords:
  - Product and Service Margins - Cube
  - Product and Service Margins - Cube
  - Product and Service Margins - Cube
tags:
  - CO
  - bo:material
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - interface-view
  - lob:controlling
  - lob:finance
  - product
  - metadata-only
---
# I_MARGANLYSPRODANDSRVCCUBE

**Product and Service Margins - Cube**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MARGANLYSPRODANDSRVCCUBE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `SourceLedger` | `CHAR(2)` | Source Ledger |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `GLAccountHierarchy` | `CHAR(42)` | Financial Statement Version |
| `SemanticTag` | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `ValidityStartDate` | `DATS(8)` | Valid-From Date |
| `ValidityEndDate` | `DATS(8)` | Valid To Date |
| `FiscalYearVariant` | `CHAR(2)` | Fiscal Year Variant |
| `LedgerFiscalYear` | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalPeriod` | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` | `NUMC(7)` | Fiscal Year Period |
| `ServiceContract` | `CHAR(10)` | Service Contract ID |
| `ServiceContractItem` | `NUMC(6)` | Service Contract Item ID |
| `BusinessSolutionOrder` | `CHAR(10)` | Solution Order |
| `BusinessSolutionOrderItem` | `NUMC(6)` | Solution Order Item |
| `ProviderContract` | `CHAR(20)` | Provider Contract |
| `ProviderContractItem` | `NUMC(6)` | Provider Contract Item |
| `ServiceContractType` | `CHAR(4)` | Service Contract Type |
| `AccountAssignmentType` | `CHAR(2)` | Account Assignment Type |
| `ProjectExternalID` | `CHAR(24)` | Project Number (External) Edited |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `ServiceDocumentType` | `CHAR(4)` | Service Document Type |
| `ServiceDocument` | `CHAR(10)` | Service Document ID |
| `ServiceDocumentItem` | `NUMC(6)` | Service Document Item ID |
| `BillToParty` | `CHAR(10)` | Bill-to Party |
| `BusinessTransactionType` | `CHAR(4)` | Business Transaction Type |
| `Customer` | `CHAR(10)` | Customer Number |
| `CustomerGroup` | `CHAR(2)` | Customer Group |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `CustomerSupplierIndustry` | `CHAR(4)` | Customer Supplier Industry |
| `SoldProduct` | `CHAR(40)` | Product Sold |
| `SoldProductGroup` | `CHAR(9)` | Product Sold Group |
| `SalesOrder` | `CHAR(10)` | Sales Order |
| `SalesOrderItem` | `NUMC(6)` | Sales Order Item |
| `SalesDocument` | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` | `NUMC(6)` | Sales Document Item |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `ShipToParty` | `CHAR(10)` | Ship-to Party |
| `ChartOfAccounts` | `CHAR(4)` | Chart of Accounts |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `BaseUnit` | `UNIT(3)` | Base Unit of Measure |
| `Quantity` | `QUAN(23)` | Quantity |
| `BillableControl` | `CHAR(2)` | Billable Control |
| `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` | `CHAR(2)` | Division |
| `Equipment` | `CHAR(18)` | Equipment Number |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `Material` | `CHAR(40)` | Material Number |
| `Product` | `CHAR(40)` | Product |
| `PartnerCostCtrActivityType` | `CHAR(6)` | Partner Cost Center Activity Type |
| `PersonnelNumber` | `NUMC(8)` | Personnel Number |
| `Plant` | `CHAR(4)` | Plant |
| `CustomerSupplierCountry` | `CHAR(3)` | Customer or Supplier Country/Region |
| `WBSElement` | `CHAR(24)` | WBS Element |
| `WBSElementExternalID` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `SalesDistrict` | `CHAR(6)` | Sales District |
| `ServicesRenderedDate` | `DATS(8)` | Date on which services are rendered |
| `OrderID` | `CHAR(12)` | Order ID |
| `Supplier` | `CHAR(10)` | Supplier |
| `AccountingDocumentType` | `CHAR(2)` | Journal Entry Type |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `FinancialAccountType` | `CHAR(1)` | Account Type |
| `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `ValuationArea` | `CHAR(4)` | Valuation Area |
| `AssetClass` | `CHAR(8)` | Asset Class |
| `PostingDate` | `DATS(8)` | Posting Date |
| `CompanyCodeCurrency` | `CUKY(5)` | Company Code Currency |
| `BilledRevenueAmtInCoCodeCrcy` | `CURR(23)` | Actual Revenue |
| `RecognizableCostAmtInCCCrcy` | `CURR(23)` | Actual Cost |
| `RecognizedRevnAmtInCCCrcy` | `CURR(23)` | Recognized Revenue |
| `RecognizedCOGSAmtInCCCrcy` | `CURR(23)` | Recognized COS |
| `RecognizedMarginAmtInCCCrcy` | `CURR(23)` | Recognized Margin |
| `RevenueAdjustmentAmtInCCCrcy` | `CURR(23)` | Revenue Adjustment |
| `COGSAdjustmentAmtInCCCrcy` | `CURR(23)` | COS Adjustment |
| `DeferredCOGSAmtInCCCrcy` | `CURR(23)` | Deferred COS |
| `DeferredRevenueAmtInCCCrcy` | `CURR(23)` | Deferred Revenue |
| `AccruedRevenueAmtInCCCrcy` | `CURR(23)` | Accrued Revenue |
| `AccruedCOGSAmtInCCCrcy` | `CURR(23)` | Accrued COS |
| `ImminentLossRsrvAmtInCCCrcy` | `CURR(23)` | Imminent Loss Reserve |
| `SalesDeductReserveAmtInCCCrcy` | `CURR(23)` | Reserves for Anticipated Sales Deductions |
| `UnrlzdCostsReserveAmtInCCCrcy` | `CURR(23)` | Reserves for Unrealized Costs |
| `ProjAndSlsOrdStkAmtInCCCrcy` | `CURR(23)` | Project/Sales Order Stock |
| `MnlContrAccrPnLItmAmtInCCCrcy` | `CURR(23)` | Manual Contract Accruals for Profit/Loss |
| `DownPaymentAmtInCCCrcy` | `CURR(23)` | Customer Down Payment |
| `SalesDeductionAmtInCoCodeCrcy` | `CURR(23)` | Sales Deduction |
