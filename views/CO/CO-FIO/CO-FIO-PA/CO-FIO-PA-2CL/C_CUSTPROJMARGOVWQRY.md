---
name: C_CUSTPROJMARGOVWQRY
description: Customer Project Margin Query
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CUSTPROJMARGOVWQRY')/$value
semantic_en: Customer Project Margin Query
keywords:
  - Customer Project Margin Query
  - Customer Project Margin Query
  - Customer Project Margin Query
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
  - project
  - metadata-only
---
# C_CUSTPROJMARGOVWQRY

**Customer Project Margin Query**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CUSTPROJMARGOVWQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CurrencyField` |  | |  |  | `CHAR(4)` | Currency Role Field |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `EvtBsdRevnRecgnLastEvalDate` |  | |  |  | `DATS(8)` | Last re-evaluation date for event based revenue rec. |
| `ServicesRenderedDate` |  | |  |  | `DATS(8)` | Date on which services are rendered |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `OriginProfitCenter` |  | |  |  | `CHAR(10)` | Origin Profit Center |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `ProjectProfileCode` |  | |  |  | `CHAR(7)` | Project Profile |
| `Project` |  | |  |  | `CHAR(24)` | Project (external ID) |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
| `BillingWBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `ResultAnalysisInternalID` |  | |  |  | `CHAR(6)` | Results Analysis Key |
| `ProjectManager` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `ProjectManagerName` |  | |  |  | `CHAR(80)` | Full Name |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `SubLedgerAcctLineItemType` |  | |  |  | `NUMC(5)` | Subledger-Specific Line Item Type |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Project Partner |
| `BusinessPartnerFullName` |  | |  |  | `CHAR(80)` | Project Partner Name |
| `BillableControl` |  | |  |  | `CHAR(2)` | Billable Control |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `WorkItem` |  | |  |  | `CHAR(10)` | Work Item ID |
| `CostAnalysisResource` |  | |  |  | `CHAR(10)` | Cost Analysis Resource |
| `TimeSheetOvertimeCategory` |  | |  |  | `CHAR(4)` | Overtime Category |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `EngagementProjectStage` |  | |  |  | `CHAR(4)` | Commercial Project: Stage |
| `OriginCostCtrActivityType` |  | |  |  | `CHAR(6)` | Origin Cost Center Activity Type |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `PlanningCategory` |  | |  |  | `CHAR(10)` | Plan Category |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `BilledRevenueAmtInDspCrcy` |  | |  |  | `CURR(23)` | Billed Revenue |
| `RecognizedRevnAmtInDspCrcy` |  | |  |  | `CURR(23)` | Recognized Revenue Amount in Display Currency |
| `RecognizedCostAmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `RecognizedMargAmtInDisplayCrcy` |  | |  |  | `CURR(23)` | Recognized Margin |
| `MarginInPct` |  | |  |  | `DECF(34)` |  |
| `ActualCostAmtInDspCrcy` |  | |  |  | `CURR(23)` | Actual Cost |
| `CapAmountInDspCrcy` |  | |  |  | `CURR(23)` | Cap Amount in Display Currency |
| `MnlContrAccrBalShtAmtInDspCrcy` |  | |  |  | `CURR(23)` | Manual Contract Accruals Balance Sheet in Display Currency |
| `DownPaymentAmountInDspCrcy` |  | |  |  | `CURR(23)` | Open Down Payment Amount in Display Currency |
| `RevenueAdjustmentAmtInDspCrcy` |  | |  |  | `CURR(23)` | Revenue Adjustment |
| `COGSAdjustmentAmtInDspCrcy` |  | |  |  | `CURR(23)` | COS Adjustment |
| `DeferredRevenueAmtInDspCrcy` |  | |  |  | `CURR(23)` | Deferred Revenue |
| `DeferredCOGSAmtInDspCrcy` |  | |  |  | `CURR(23)` | Deferred COS |
| `AccruedRevenueAmtInDspCrcy` |  | |  |  | `CURR(23)` | Accrued Revenue |
| `AccruedCOGSAmtInDspCrcy` |  | |  |  | `CURR(23)` | Accrued COS |
| `BaselinePlndRevnAmt` |  | |  |  | `DEC(23)` |  |
| `BaselinePlndCostAmt` |  | |  |  | `DEC(23)` |  |
| `BaselinePlannedMarginAmt` |  | |  |  | `DEC(23)` |  |
| `OngoingPlndRevnAmt` |  | |  |  | `DEC(23)` |  |
| `OngoingPlndCostAmt` |  | |  |  | `DEC(23)` |  |
| `OngoingPlannedMarginAmt` |  | |  |  | `DEC(23)` |  |
| `RevnRecgnCostAmt` |  | |  |  | `DEC(23)` |  |
| `RevnRecgnRevnAmt` |  | |  |  | `DEC(23)` |  |
| `EBRRPlannedMarginAmt` |  | |  |  | `DEC(23)` |  |
| `EstAtCompltnPlndCostAmt` |  | |  |  | `DEC(23)` |  |
| `EstAtCompltnPlndRevnAmt` |  | |  |  | `DEC(23)` |  |
| `EstAtCompltnPlndMargAmt` |  | |  |  | `DEC(23)` |  |
| `PlannedCosAmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `PlannedRevenueAmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `PlndMarginAmt` |  | |  |  | `DEC(23)` |  |
| `CostSourceUnit` |  | |  |  | `UNIT(3)` | Cost Source Unit |
| `BaselinePlanValuationQuantity` |  | |  |  | `DEC(23)` |  |
| `OngoingPlanValuationQuantity` |  | |  |  | `DEC(23)` |  |
| `EstAtCompltnPlndValnQuantity` |  | |  |  | `DEC(23)` |  |
| `BaselinePlndMarginPct` |  | |  |  | `DECF(34)` |  |
| `OngoingPlndMarginInPct` |  | |  |  | `DECF(34)` |  |
| `EstAtCompltnPlndMarginInPct` |  | |  |  | `DECF(34)` |  |
| `DiffRecgdAndBslnPlndMargAmt` |  | |  |  | `DEC(23)` |  |
| `DiffRecgdAndOngPlndMargAmt` |  | |  |  | `DEC(23)` |  |
| `DiffRecgdAndEsAtCplPlndMargAmt` |  | |  |  | `DEC(23)` |  |
| `DiffRecgdAndBslnPlndMargInPct` |  | |  |  | `DECF(34)` |  |
| `DiffRecgdAndOngPlndMargInPct` |  | |  |  | `DECF(34)` |  |
| `DiffRecgdAndEsAtCplPlndMargPct` |  | |  |  | `DECF(34)` |  |
| `FinancialPlanningReqTransSqnc` |  | |  |  | `NUMC(23)` | Financial Planning Request Transaction Sequence Number |
| `FinancialPlanningDataPacket` |  | |  |  | `NUMC(6)` | Financial Planning Data Packet Number |
| `LineIsSemTagCalculated` |  | |  |  | `CHAR(1)` | Indicator: Calculated by Semantic Tag |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `FinancialPlanningEntryItem` |  | |  |  | `INT4(10)` | Financial Planning Entry Item |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `SemanticTag` |  | |  |  | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `TechnicalCompletionDate` |  | |  |  | `DATS(8)` | Technically complete date |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `Quantity` |  | |  |  | `QUAN(23)` | Quantity |
| `ActualValuationQuantity` |  | |  |  | `QUAN(23)` | Valuation Quantity |
| `DocumentItemText` |  | |  |  | `CHAR(50)` | Item Text |
