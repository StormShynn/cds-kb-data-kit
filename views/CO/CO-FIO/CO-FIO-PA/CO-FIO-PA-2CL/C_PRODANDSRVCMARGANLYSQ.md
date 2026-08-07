---
name: C_PRODANDSRVCMARGANLYSQ
description: This CDS view is designed to provide analytical insights into product and service margins by aggregating and projecting financial data related to revenues, costs, and margins. It is intended for use in analytical queries to assess financial performance across various dimensions such as company code, fiscal year, profit center, and more. This CDS view provides the data to answer the following business questions: What are the recognized revenues and costs for products and services in a specific company code and fiscal year? How do the margins for products and services vary across different profit centers and sales organizations? What is the impact of sales deductions and revenue adjustments on the overall financial performance? How do accrued and deferred revenues and costs affect the financial statements? What are the reserves for imminent losses, sales deductions, and unrealized costs? How does the margin percentage compare across different products, customer groups, and sales districts? What are the financial implications of business solution orders, service contracts, and sales orders on margins? How do different account assignment types and ledger entries influence the product and service margins? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRODANDSRVCMARGANLYSQ')/$value
semantic_en: This CDS view is designed to provide analytical insights into product and service margins by aggregating and projecting financial data related to revenues, costs, and margins. It is intended for use in analytical queries to assess financial performance across various dimensions such as company code, fiscal year, profit center, and more. This CDS view provides the data to answer the following business questions: What are the recognized revenues and costs for products and services in a specific company code and fiscal year? How do the margins for products and services vary across different profit centers and sales organizations? What is the impact of sales deductions and revenue adjustments on the overall financial performance? How do accrued and deferred revenues and costs affect the financial statements? What are the reserves for imminent losses, sales deductions, and unrealized costs? How does the margin percentage compare across different products, customer groups, and sales districts? What are the financial implications of business solution orders, service contracts, and sales orders on margins? How do different account assignment types and ledger entries influence the product and service margins? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
keywords:
  - Product and Service Margins - Qry
  - Product and Service Margins - Qry
  - Product and Service Margins - Qry
tags:
  - CO
  - account
  - bo:businesspartner
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - consumption-view
  - contract
  - customer
  - lob:controlling
  - lob:finance
  - order
  - product
  - project
  - sales-order
  - metadata-only
---
# C_PRODANDSRVCMARGANLYSQ

**This CDS view is designed to provide analytical insights into product and service margins by aggregating and projecting financial data related to revenues, costs, and margins. It is intended for use in analytical queries to assess financial performance across various dimensions such as company code, fiscal year, profit center, and more. This CDS view provides the data to answer the following business questions: What are the recognized revenues and costs for products and services in a specific company code and fiscal year? How do the margins for products and services vary across different profit centers and sales organizations? What is the impact of sales deductions and revenue adjustments on the overall financial performance? How do accrued and deferred revenues and costs affect the financial statements? What are the reserves for imminent losses, sales deductions, and unrealized costs? How does the margin percentage compare across different products, customer groups, and sales districts? What are the financial implications of business solution orders, service contracts, and sales orders on margins? How do different account assignment types and ledger entries influence the product and service margins? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRODANDSRVCMARGANLYSQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CurrencyField` |  | |  |  | `CHAR(4)` | Currency Role Field |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `BusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Solution Order |
| `BusinessSolutionOrderItem` |  | |  |  | `NUMC(6)` | Solution Order Item |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `ServiceDocumentItem` |  | |  |  | `NUMC(6)` | Service Document Item ID |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `ServiceContract` |  | |  |  | `CHAR(10)` | Service Contract ID |
| `ServiceContractItem` |  | |  |  | `NUMC(6)` | Service Contract Item ID |
| `ServiceContractType` |  | |  |  | `CHAR(4)` | Service Contract Type |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `ProviderContract` |  | |  |  | `CHAR(20)` | Provider Contract |
| `ProviderContractItem` |  | |  |  | `NUMC(6)` | Provider Contract Item |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `WBSElement` |  | |  |  | `CHAR(24)` | WBS Element |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `ServicesRenderedDate` |  | |  |  | `DATS(8)` | Date on which services are rendered |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `RecognizedRevnAmtInDspCrcy` |  | |  |  | `CURR(23)` | Recognized Revenue |
| `BilledRevenueAmtInDspCrcy` |  | |  |  | `CURR(23)` | Actual Revenue |
| `SalesDeductionAmountInDspCrcy` |  | |  |  | `CURR(23)` | Sales Deduction |
| `RevenueAdjustmentAmtInDspCrcy` |  | |  |  | `CURR(23)` | Revenue Adjustment |
| `RecognizedCOGSAmtInDspCrcy` |  | |  |  | `CURR(23)` | Recognized COS |
| `RecognizableCostAmtInDspCrcy` |  | |  |  | `CURR(23)` | Actual Cost |
| `COGSAdjustmentAmtInDspCrcy` |  | |  |  | `CURR(23)` | COS Adjustment |
| `RecognizedMargAmtInDisplayCrcy` |  | |  |  | `CURR(23)` | Recognized Margin |
| `AccruedRevenueAmtInDspCrcy` |  | |  |  | `CURR(23)` | Accrued Revenue |
| `DeferredRevenueAmtInDspCrcy` |  | |  |  | `CURR(23)` | Deferred Revenue |
| `AccruedCOGSAmtInDspCrcy` |  | |  |  | `CURR(23)` | Accrued COS |
| `DeferredCOGSAmtInDspCrcy` |  | |  |  | `CURR(23)` | Deferred COS |
| `ImminentLossRsrvAmtInDspCrcy` |  | |  |  | `CURR(23)` | Imminent Loss Reserve |
| `SalesDeductReserveAmtInDspCrcy` |  | |  |  | `CURR(23)` | Reserves for Anticipated Sales Deductions |
| `UnrlzdCostsReserveAmtInDspCrcy` |  | |  |  | `CURR(23)` | Reserves for Unrealized Costs |
| `Reserves` |  | |  |  | `CURR(23)` | Reserves |
| `ProjAndSlsOrdStkAmtInDspCrcy` |  | |  |  | `CURR(23)` | Project/Sales Order Stock |
| `MnlContrAccrPnLItmAmtInDspCrcy` |  | |  |  | `CURR(23)` | Manual Contract Accruals Income Statement in Display Crcy |
| `DownPaymentAmountInDspCrcy` |  | |  |  | `CURR(23)` | Open Down Payment Amount in Display Currency |
| `MarginInPct` |  | |  |  | `DECF(34)` |  |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `GLAccountHierarchy` |  | |  |  | `CHAR(42)` | Financial Statement Version |
| `SemanticTag` |  | |  |  | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `MarketingOvhdAmtInDspCrcy` |  | |  |  | `CURR(23)` | Marketing Overhead |
| `SalesOverheadAmtInDspCrcy` |  | |  |  | `CURR(23)` | Sales Overhead |
| `AdminOverheadAmtInDspCrcy` |  | |  |  | `CURR(23)` | Administration Overhead |
| `RnDOverheadAmtInDspCrcy` |  | |  |  | `CURR(23)` | Research and Development Overhead |
