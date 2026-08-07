---
name: C_ENTPROJMARGINOVERVIEWQRY
description: This CDS view is designed to provide an overview of enterprise project margins, focusing on both recognized and planned financial metrics. It aggregates and presents data related to revenues, costs, margins, and other financial indicators associated with enterprise projects. The view is intended for analytical purposes, allowing users to filter and analyze project financial data based on various parameters such as fiscal year, company code, and planning category. This CDS view provides the data to answer the following business questions: What is the recognized revenue and cost for enterprise projects within a specific fiscal year or company code? How does the recognized margin compare to the planned margin for enterprise projects? What is the margin percentage for enterprise projects, and how does it vary across different projects or fiscal periods? What are the adjustments made to revenue and cost, and how do they impact the overall project margin? How does the project stock value contribute to the financial overview of enterprise projects? What are the planned revenue and cost figures for enterprise projects, and how do they align with actual figures? How can project managers and stakeholders use this financial data to make informed decisions about project performance and future planning? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENTPROJMARGINOVERVIEWQRY')/$value
semantic_en: This CDS view is designed to provide an overview of enterprise project margins, focusing on both recognized and planned financial metrics. It aggregates and presents data related to revenues, costs, margins, and other financial indicators associated with enterprise projects. The view is intended for analytical purposes, allowing users to filter and analyze project financial data based on various parameters such as fiscal year, company code, and planning category. This CDS view provides the data to answer the following business questions: What is the recognized revenue and cost for enterprise projects within a specific fiscal year or company code? How does the recognized margin compare to the planned margin for enterprise projects? What is the margin percentage for enterprise projects, and how does it vary across different projects or fiscal periods? What are the adjustments made to revenue and cost, and how do they impact the overall project margin? How does the project stock value contribute to the financial overview of enterprise projects? What are the planned revenue and cost figures for enterprise projects, and how do they align with actual figures? How can project managers and stakeholders use this financial data to make informed decisions about project performance and future planning? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
keywords:
  - Enterprise Project Margin Overview Query
  - Enterprise Project Margin Overview Query
  - Enterprise Project Margin Overview Query
tags:
  - CO
  - bo:companycode
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - consumption-view
  - lob:controlling
  - lob:finance
  - plan
  - project
  - stock
  - metadata-only
---
# C_ENTPROJMARGINOVERVIEWQRY

**This CDS view is designed to provide an overview of enterprise project margins, focusing on both recognized and planned financial metrics. It aggregates and presents data related to revenues, costs, margins, and other financial indicators associated with enterprise projects. The view is intended for analytical purposes, allowing users to filter and analyze project financial data based on various parameters such as fiscal year, company code, and planning category. This CDS view provides the data to answer the following business questions: What is the recognized revenue and cost for enterprise projects within a specific fiscal year or company code? How does the recognized margin compare to the planned margin for enterprise projects? What is the margin percentage for enterprise projects, and how does it vary across different projects or fiscal periods? What are the adjustments made to revenue and cost, and how do they impact the overall project margin? How does the project stock value contribute to the financial overview of enterprise projects? What are the planned revenue and cost figures for enterprise projects, and how do they align with actual figures? How can project managers and stakeholders use this financial data to make informed decisions about project performance and future planning? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENTPROJMARGINOVERVIEWQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `SemanticTag` |  | |  |  | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `SubLedgerAcctLineItemType` |  | |  |  | `NUMC(5)` | Subledger-Specific Line Item Type |
| `ProjectProfileCode` |  | |  |  | `CHAR(7)` | Project Profile |
| `Project` |  | |  |  | `CHAR(24)` | Project (external ID) |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `ProjectManager` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `ProcessingStatus` |  | |  |  | `CHAR(2)` | Object Processing Status |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `CurrencyField` |  | |  |  | `CHAR(4)` | Currency Role Field |
| `PlanningCategory` |  | |  |  | `CHAR(10)` | Plan Category |
| `RecognizedRevnAmtInDspCrcy` |  | |  |  | `CURR(23)` | Recognized Revenue Amount in Display Currency |
| `BilledRevenueAmtInDspCrcy` |  | |  |  | `CURR(23)` | Billed Revenue |
| `ActualSalesDdctdInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `RevenueAdjustmentAmtInDspCrcy` |  | |  |  | `CURR(23)` | Revenue Adjustment |
| `RecognizedCOGSAmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `ActualCostAmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `COGSAdjustmentAmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `RecognizedMargAmtInDisplayCrcy` |  | |  |  | `CURR(23)` | Recognized Margin |
| `MarginInPct` |  | |  |  | `DECF(34)` |  |
| `ProjAndSlsOrdStkAmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `PlannedRevenueAmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `PlannedCosAmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `FinancialPlanningReqTransSqnc` |  | |  |  | `NUMC(23)` | Financial Planning Request Transaction Sequence Number |
| `FinancialPlanningDataPacket` |  | |  |  | `NUMC(6)` | Financial Planning Data Packet Number |
| `LineIsSemTagCalculated` |  | |  |  | `CHAR(1)` | Indicator: Calculated by Semantic Tag |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `FinancialPlanningEntryItem` |  | |  |  | `INT4(10)` | Financial Planning Entry Item |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `ControllingDebitCreditCode` |  | |  |  | `CHAR(1)` | CO Debit/Credit Indicator |
| `DeferredRevenueAmtInDspCrcy` |  | |  |  | `CURR(23)` | Deferred Revenue |
| `DeferredCOGSAmtInDspCrcy` |  | |  |  | `CURR(23)` | Deferred COS |
| `AccruedRevenueAmtInDspCrcy` |  | |  |  | `CURR(23)` | Accrued Revenue |
| `AccruedCOGSAmtInDspCrcy` |  | |  |  | `CURR(23)` | Accrued COS |
| `MnlContrAccrIncStatAmtInDC` |  | |  |  | `DEC(23)` |  |
| `ImminentLossRsrvAdjAmtInDC` |  | |  |  | `DEC(23)` |  |
| `MnlContrAccrBalShtAmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `ImmntLossRsrvBalShtAmtInDC` |  | |  |  | `DEC(23)` |  |
| `DownPaymentAmountInDspCrcy` |  | |  |  | `CURR(23)` | Open Down Payment Amount in Display Currency |
| `PlndMarginAmt` |  | |  |  | `DEC(23)` |  |
| `PlndMarginInPct` |  | |  |  | `DECF(34)` |  |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `SalesDocumentItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `ComprnPlndRevnAmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `ComprnPlndCostAmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `ComprnPlndMarginAmt` |  | |  |  | `DEC(23)` |  |
| `ComprnPlndMargInPct` |  | |  |  | `DECF(34)` |  |
