---
name: C_ENTPROJMARGINANALYSISQUERY
description: This CDS view is designed to provide a comprehensive analysis of contribution margins across various dimensions such as products, projects, and fiscal periods. It aggregates financial data to calculate different types of contribution margins, including Contribution Margin I, II, and III, by considering billed revenue, sales deductions, cost of goods sold, price differences, and overhead costs. The view is intended for analytical purposes, allowing users to filter and analyze data based on multiple criteria such as company code, fiscal year, ledger, and product details. This CDS view provides the data to answer the following business questions: What is the contribution margin for specific products or projects within a given fiscal year or period? How do billed revenue, sales deductions, and revenue adjustments impact the overall contribution margin? What are the fixed and variable costs of goods sold, and how do they affect the contribution margin? How do price variances and overhead costs (administrative, sales, marketing, R&amp;D) influence the contribution margin? What is the margin per unit and margin percentage for Contribution Margin I and II? How does the contribution margin vary across different sales organizations, distribution channels, and customer groups? What is the impact of project stock on the contribution margin? Who is the project manager responsible for specific projects, and how do their projects perform in terms of contribution margin? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENTPROJMARGINANALYSISQUERY')/$value
semantic_en: This CDS view is designed to provide a comprehensive analysis of contribution margins across various dimensions such as products, projects, and fiscal periods. It aggregates financial data to calculate different types of contribution margins, including Contribution Margin I, II, and III, by considering billed revenue, sales deductions, cost of goods sold, price differences, and overhead costs. The view is intended for analytical purposes, allowing users to filter and analyze data based on multiple criteria such as company code, fiscal year, ledger, and product details. This CDS view provides the data to answer the following business questions: What is the contribution margin for specific products or projects within a given fiscal year or period? How do billed revenue, sales deductions, and revenue adjustments impact the overall contribution margin? What are the fixed and variable costs of goods sold, and how do they affect the contribution margin? How do price variances and overhead costs (administrative, sales, marketing, R&amp;D) influence the contribution margin? What is the margin per unit and margin percentage for Contribution Margin I and II? How does the contribution margin vary across different sales organizations, distribution channels, and customer groups? What is the impact of project stock on the contribution margin? Who is the project manager responsible for specific projects, and how do their projects perform in terms of contribution margin? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
keywords:
  - Contribution Margin Query
  - Contribution Margin Query
  - Contribution Margin Query
tags:
  - CO
  - bo:businesspartner
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - consumption-view
  - customer
  - lob:controlling
  - lob:finance
  - product
  - project
  - stock
  - metadata-only
---
# C_ENTPROJMARGINANALYSISQUERY

**This CDS view is designed to provide a comprehensive analysis of contribution margins across various dimensions such as products, projects, and fiscal periods. It aggregates financial data to calculate different types of contribution margins, including Contribution Margin I, II, and III, by considering billed revenue, sales deductions, cost of goods sold, price differences, and overhead costs. The view is intended for analytical purposes, allowing users to filter and analyze data based on multiple criteria such as company code, fiscal year, ledger, and product details. This CDS view provides the data to answer the following business questions: What is the contribution margin for specific products or projects within a given fiscal year or period? How do billed revenue, sales deductions, and revenue adjustments impact the overall contribution margin? What are the fixed and variable costs of goods sold, and how do they affect the contribution margin? How do price variances and overhead costs (administrative, sales, marketing, R&amp;D) influence the contribution margin? What is the margin per unit and margin percentage for Contribution Margin I and II? How does the contribution margin vary across different sales organizations, distribution channels, and customer groups? What is the impact of project stock on the contribution margin? Who is the project manager responsible for specific projects, and how do their projects perform in terms of contribution margin? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENTPROJMARGINANALYSISQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CurrencyField` |  | |  |  | `CHAR(4)` | Currency Role Field |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `CurrencyRole` |  | |  |  | `CHAR(2)` | Currency Role |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `SemanticTag` |  | |  |  | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `TradingPartner` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `Project` |  | |  |  | `CHAR(24)` | Project (external ID) |
| `ProjectProfileCode` |  | |  |  | `CHAR(7)` | Project Profile |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
| `ProcessingStatus` |  | |  |  | `CHAR(2)` | Object Processing Status |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element Internal ID |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `BillingWBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `ServiceContract` |  | |  |  | `CHAR(10)` | Service Contract ID |
| `ServiceContractType` |  | |  |  | `CHAR(4)` | Service Contract Type |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `ControllingDebitCreditCode` |  | |  |  | `CHAR(1)` | CO Debit/Credit Indicator |
| `CostSourceUnit` |  | |  |  | `UNIT(3)` | Cost Source Unit |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `AmountInDisplayCurrency` |  | |  |  | `CURR(23)` | Amount in Currency Role Currency |
| `FixedAmountInDspCrcy` |  | |  |  | `CURR(23)` | Fixed Amount in Currency Role Currency |
| `InptPrVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Input Price Variance in Display Currency |
| `OutpPrVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Output Price Variance Amount in Display Currency |
| `InptQtyVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Input Quantity Variance Amount in Display Currency |
| `RsceUsgeVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Resource Usage Variance Amount in Display Currency |
| `LotSizeVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Lot Size Variance Amount in Display Currency |
| `InptRmngVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Remaining Variance Amount in Display Currency |
| `BilledRevenueAmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `SalesDeductionAmountInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `RevenueAdjustmentAmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `RecognizedRevnAmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `VarblCOGSAmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `ContrbnMargin1AmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `FxdCOGSAmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `PriceDiffAmtInDisplayCrcy` |  | |  |  | `DEC(23)` |  |
| `ContrbnMargin2AmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `PeriodicCostAmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `AdminOverheadAmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `SalesOverheadAmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `MarketingOvhdAmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `RnDOverheadAmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `ContrbnMargin3AmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `CostOfGoodsSoldAmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `BilledValnQtyInCostSourceUnit` |  | |  |  | `DEC(23)` |  |
| `MargPerUntAmtInDisplayCurrency` |  | |  |  | `DECF(34)` |  |
| `ContributionMargin2InPercent` |  | |  |  | `DECF(34)` |  |
| `ProjectManager` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `PurchasingDocument` |  | |  |  | `CHAR(10)` | Purchasing Document |
| `ProjAndSlsOrdStkAmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `GLAccountHierarchy` |  | |  |  | `CHAR(42)` | Financial Statement Version |
| `WBSIsStatisticalWBSElement` |  | |  |  | `CHAR(1)` | Indicator: WBS Element is Statistical Account Assignment |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `SubLedgerAcctLineItemType` |  | |  |  | `NUMC(5)` | Subledger-Specific Line Item Type |
| `ContractualResAmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
