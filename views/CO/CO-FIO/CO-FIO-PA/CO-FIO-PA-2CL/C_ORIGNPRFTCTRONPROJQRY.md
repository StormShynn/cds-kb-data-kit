---
name: C_ORIGNPRFTCTRONPROJQRY
description: Origin Profit Center on Project - Query
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ORIGNPRFTCTRONPROJQRY')/$value
semantic_en: Origin Profit Center on Project - Query
keywords:
  - Origin Profit Center on Project - Query
  - Origin Profit Center on Project - Query
  - Origin Profit Center on Project - Query
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
  - project
  - metadata-only
---
# C_ORIGNPRFTCTRONPROJQRY

**Origin Profit Center on Project - Query**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ORIGNPRFTCTRONPROJQRY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `AccountAssignmentType` | `CHAR(2)` | Account Assignment Type |
| `CurrencyField` | `CHAR(4)` | Currency Role Field |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `LedgerFiscalYear` | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalYearVariant` | `CHAR(2)` | Fiscal Year Variant |
| `FiscalPeriod` | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` | `NUMC(7)` | Fiscal Year Period |
| `AccountingDocument` | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `PostingDate` | `DATS(8)` | Posting Date |
| `EvtBsdRevnRecgnLastEvalDate` | `DATS(8)` | Last re-evaluation date for event based revenue rec. |
| `ServicesRenderedDate` | `DATS(8)` | Date on which services are rendered |
| `Project` | `CHAR(24)` | Project (external ID) |
| `ProjectExternalID` | `CHAR(24)` | Project Number (External) Edited |
| `ProjectProfileCode` | `CHAR(7)` | Project Profile |
| `BillingWBSElementExternalID` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `WBSElementExternalID` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `OriginProfitCenter` | `CHAR(10)` | Origin Profit Center |
| `SemanticTag` | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `Customer` | `CHAR(10)` | Customer Number |
| `CustomerGroup` | `CHAR(2)` | Customer Group |
| `SoldProduct` | `CHAR(40)` | Product Sold |
| `SoldProductGroup` | `CHAR(9)` | Product Sold Group |
| `Material` | `CHAR(40)` | Material Number |
| `SalesDocument` | `CHAR(10)` | Sales Document |
| `Currency` | `CUKY(5)` | Currency Key |
| `RecognizedRevnAmtInDspCrcy` | `CURR(23)` | Recognized Revenue Amount in Display Currency |
| `RecognizedCOGSAmtInDspCrcy` | `CURR(23)` | Recognized COS |
| `RecognizedMargAmtInDisplayCrcy` | `CURR(23)` | Recognized Margin |
| `WIPProjAmtInDspCrcy` | `CURR(23)` | WIP - Project |
| `BilledRevenueAmtInDspCrcy` | `CURR(23)` | Billed Revenue |
| `MarginInPct` | `DECF(34)` |  |
| `ActualCostAmtInDspCrcy` | `CURR(23)` | Actual Cost |
| `COGSAdjustmentAmtInDspCrcy` | `CURR(23)` | COS Adjustment |
| `RecognizedCostAmtInDspCrcy` | `DEC(23)` |  |
| `FinancialPlanningReqTransSqnc` | `NUMC(23)` | Financial Planning Request Transaction Sequence Number |
| `FinancialPlanningDataPacket` | `NUMC(6)` | Financial Planning Data Packet Number |
| `LineIsSemTagCalculated` | `CHAR(1)` | Indicator: Calculated by Semantic Tag |
| `SourceLedger` | `CHAR(2)` | Source Ledger |
| `FinancialPlanningEntryItem` | `INT4(10)` | Financial Planning Entry Item |
| `TechnicalCompletionDate` | `DATS(8)` | Technically complete date |
| `PersonnelNumber` | `NUMC(8)` | Personnel Number |
| `DocumentItemText` | `CHAR(50)` | Item Text |
