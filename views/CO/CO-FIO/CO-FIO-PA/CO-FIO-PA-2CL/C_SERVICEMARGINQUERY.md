---
name: C_SERVICEMARGINQUERY
description: This CDS view provides analytical insights into the service margin by aggregating and calculating various financial metrics related to revenue, costs, and margins. It allows you to filter and analyze data based on multiple dimensions such as company code, fiscal period, customer, product, and more, to understand the financial performance of services rendered. This CDS view provides the data to answer the following business questions: What is the recognized margin for services provided within a specific company code or fiscal period? How do billed revenue and revenue adjustments contribute to the overall revenue amount in company code currency? What are the recognized costs associated with services, and how do cost adjustments impact the total cost amount? How do deferred and accrued revenues and costs affect the financial statements? What are the reserves for imminent loss, sales deductions, and unrealized costs, and how do they impact the overall financial performance? How do different service document types and customer groups affect the service margin? What is the impact of specific products or product groups on the service margin? How do various account assignment types and profit centres contribute to the financial outcomes of services rendered? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SERVICEMARGINQUERY')/$value
semantic_en: This CDS view provides analytical insights into the service margin by aggregating and calculating various financial metrics related to revenue, costs, and margins. It allows you to filter and analyze data based on multiple dimensions such as company code, fiscal period, customer, product, and more, to understand the financial performance of services rendered. This CDS view provides the data to answer the following business questions: What is the recognized margin for services provided within a specific company code or fiscal period? How do billed revenue and revenue adjustments contribute to the overall revenue amount in company code currency? What are the recognized costs associated with services, and how do cost adjustments impact the total cost amount? How do deferred and accrued revenues and costs affect the financial statements? What are the reserves for imminent loss, sales deductions, and unrealized costs, and how do they impact the overall financial performance? How do different service document types and customer groups affect the service margin? What is the impact of specific products or product groups on the service margin? How do various account assignment types and profit centres contribute to the financial outcomes of services rendered? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
keywords:
  - Service Margin - Query
  - Service Margin - Query
  - Service Margin - Query
tags:
  - CO
  - account
  - bo:businesspartner
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - consumption-view
  - customer
  - document
  - lob:controlling
  - lob:finance
  - product
  - metadata-only
---
# C_SERVICEMARGINQUERY

**This CDS view provides analytical insights into the service margin by aggregating and calculating various financial metrics related to revenue, costs, and margins. It allows you to filter and analyze data based on multiple dimensions such as company code, fiscal period, customer, product, and more, to understand the financial performance of services rendered. This CDS view provides the data to answer the following business questions: What is the recognized margin for services provided within a specific company code or fiscal period? How do billed revenue and revenue adjustments contribute to the overall revenue amount in company code currency? What are the recognized costs associated with services, and how do cost adjustments impact the total cost amount? How do deferred and accrued revenues and costs affect the financial statements? What are the reserves for imminent loss, sales deductions, and unrealized costs, and how do they impact the overall financial performance? How do different service document types and customer groups affect the service margin? What is the impact of specific products or product groups on the service margin? How do various account assignment types and profit centres contribute to the financial outcomes of services rendered? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SERVICEMARGINQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `ProviderContract` |  | |  |  | `CHAR(20)` | Provider Contract |
| `ProviderContractItem` |  | |  |  | `NUMC(6)` | Provider Contract Item |
| `ServiceContract` |  | |  |  | `CHAR(10)` | Service Contract ID |
| `BusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Solution Order |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `ResultAnalysisInternalID` |  | |  |  | `CHAR(6)` | Revenue Recognition Key |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `ServicesRenderedDate` |  | |  |  | `DATS(8)` | Date on which services are rendered |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `Equipment` |  | |  |  | `CHAR(18)` | Equipment Number |
| `TimeSheetOvertimeCategory` |  | |  |  | `CHAR(4)` | Overtime Category |
| `BillableControl` |  | |  |  | `CHAR(2)` | Billable Control |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SemanticTag` |  | |  |  | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ServiceContractItem` |  | |  |  | `NUMC(6)` | Service Contract Item ID |
| `ServiceContractType` |  | |  |  | `CHAR(4)` | Service Contract Type |
| `ServiceDocumentItem` |  | |  |  | `NUMC(6)` | Service Document Item ID |
| `BusinessSolutionOrderItem` |  | |  |  | `NUMC(6)` | Solution Order Item |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `RecognizedMarginAmtInCCCrcy` |  | |  |  | `CURR(23)` | Recognized Margin |
| `RevenueAmountInCompanyCodeCrcy` |  | |  |  | `CURR(25)` |  |
| `CostAmountInCompanyCodeCrcy` |  | |  |  | `CURR(24)` |  |
| `MarginAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Recognized Margin |
| `BilledRevenueAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Actual Revenue |
| `RecognizableCostAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Cost |
| `RecognizedRevnAmtInCCCrcy` |  | |  |  | `CURR(23)` | Recognized Revenue |
| `RecognizedCOGSAmtInCCCrcy` |  | |  |  | `CURR(23)` | Recognized COS |
| `RevenueAdjustmentAmtInCCCrcy` |  | |  |  | `CURR(23)` | Revenue Adjustment |
| `COGSAdjustmentAmtInCCCrcy` |  | |  |  | `CURR(23)` | COS Adjustment |
| `DeferredCOGSAmtInCCCrcy` |  | |  |  | `CURR(23)` | Deferred COS |
| `DeferredRevenueAmtInCCCrcy` |  | |  |  | `CURR(23)` | Deferred Revenue |
| `AccruedRevenueAmtInCCCrcy` |  | |  |  | `CURR(23)` | Accrued Revenue |
| `AccruedCOGSAmtInCCCrcy` |  | |  |  | `CURR(23)` | Accrued COS |
| `ImminentLossRsrvAmtInCCCrcy` |  | |  |  | `CURR(23)` | Imminent Loss Reserve |
| `SalesDeductReserveAmtInCCCrcy` |  | |  |  | `CURR(23)` | Reserves for Anticipated Sales Deductions |
| `UnrlzdCostsReserveAmtInCCCrcy` |  | |  |  | `CURR(23)` | Reserves for Unrealized Costs |
| `Reserves` |  | |  |  | `CURR(25)` |  |
| `SalesDeductionAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Actual Revenue |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `GLAccountHierarchy` |  | |  |  | `CHAR(42)` | Financial Statement Version |
