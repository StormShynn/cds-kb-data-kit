---
name: C_ENTPROJBDGTAVAILYCTRLQRY
description: Enterprise Project Budget Cmtmt - Query
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENTPROJBDGTAVAILYCTRLQRY')/$value
semantic_en: Enterprise Project Budget Cmtmt - Query
tags:
  - CO
  - bo:project
  - budget
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - consumption-view
  - lob:controlling
  - lob:finance
  - project
  - metadata-only
---
# C_ENTPROJBDGTAVAILYCTRLQRY

**Enterprise Project Budget Cmtmt - Query**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENTPROJBDGTAVAILYCTRLQRY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CompanyCode` | `CHAR(4)` | Company Code |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `LedgerFiscalYear` | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalPeriod` | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` | `NUMC(7)` | Fiscal Year Period |
| `AccountAssignmentType` | `CHAR(2)` | Account Assignment Type |
| `CurrencyField` | `CHAR(4)` | Currency Role Field |
| `FiscalYearVariant` | `CHAR(2)` | Fiscal Year Variant |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `OriginProfitCenter` | `CHAR(10)` | Origin Profit Center |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `SoldProductGroup` | `CHAR(9)` | Product Sold Group |
| `SoldProduct` | `CHAR(40)` | Product Sold |
| `Customer` | `CHAR(10)` | Customer Number |
| `CustomerGroup` | `CHAR(2)` | Customer Group |
| `SalesDocument` | `CHAR(10)` | Sales Document |
| `SalesOrder` | `CHAR(10)` | Sales Order |
| `ChartOfAccounts` | `CHAR(4)` | Chart of Accounts |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `Project` | `CHAR(24)` | Project (external ID) |
| `ProjectExternalID` | `CHAR(24)` | Project Number (External) Edited |
| `PersonWorkAgreement` | `NUMC(8)` | Personnel Number |
| `ProcessingStatus` | `CHAR(2)` | Object Processing Status |
| `ProjectProfileCode` | `CHAR(7)` | Project Profile |
| `WBSElementExternalID` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `Currency` | `CUKY(5)` | Currency Key |
| `ActualCostAmtInDspCrcy` | `DEC(23)` |  |
| `CmtmtAmountInDisplayCurrency` | `CURR(23)` | Amount in Global Currency |
| `ProjAndSlsOrdStkAmtInDspCrcy` | `DEC(23)` |  |
| `PlannedCosAmtInDspCrcy` | `DEC(23)` |  |
| `BudgetPlanTotalAmount` | `DEC(23)` |  |
| `AvailyCtrlActlCostAmtInDspCrcy` | `DEC(23)` |  |
| `AvailyCtrlCmtmtAmtInDspCrcy` | `DEC(23)` |  |
| `AvailyCtrlBdgtCostInDspCrcy` | `DEC(23)` |  |
| `AvailyCtrlProjStkAmtInDspCrcy` | `DEC(23)` |  |
| `NonAccmltdAssgdValForBdgt` | `DEC(25)` |  |
| `AvailableBdgtAmtInDspCrcy` | `DEC(26)` |  |
| `VarianceAmount` | `DEC(24)` |  |
| `AvailyCtrlUsdBdgtAmtInDspCrcy` | `DECF(34)` |  |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `ProjectManager` | `CHAR(10)` | Business Partner Number |
| `FinancialPlanningReqTransSqnc` | `NUMC(23)` | Financial Planning Request Transaction Sequence Number |
| `FinancialPlanningDataPacket` | `NUMC(6)` | Financial Planning Data Packet Number |
| `LineIsSemTagCalculated` | `CHAR(1)` | Indicator: Calculated by Semantic Tag |
| `SourceLedger` | `CHAR(2)` | Source Ledger |
| `FinancialPlanningEntryItem` | `INT4(10)` | Financial Planning Entry Item |
| `AccountingDocument` | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `SemanticTag` | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `ControllingDebitCreditCode` | `CHAR(1)` | CO Debit/Credit Indicator |
