---
name: C_COSTCENTERBUDGETQUERY
description: Cost Center Budget - Query
app_component: CO-OM-CCA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COSTCENTERBUDGETQUERY')/$value
semantic_en: Cost Center Budget - Query
tags:
  - CO
  - budget
  - CO-OM
  - CO-OM-CCA
  - CO-OM-CCA-2CL
  - component:CO-OM-CCA-2CL
  - consumption-view
  - lob:controlling
  - lob:cross_application components
  - metadata-only
---
# C_COSTCENTERBUDGETQUERY

**Cost Center Budget - Query**

| Property | Value |
|---|---|
| App Component | `CO-OM-CCA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COSTCENTERBUDGETQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `IsStatisticalCostCenter` |  | |  |  | `CHAR(1)` | Indicator: Cost Center is Statistical Account Assignment |
| `OriginCostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ActiveControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `GLAccountHierNodeSemanticKey` |  | |  |  | `CHAR(63)` | Budget G/L Account Hierarchy Semantic Key |
| `BudgetCarryingCostCenter` |  | |  |  | `CHAR(10)` | Budget-Carrying Cost Center |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `CostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `PlanningCategory` |  | |  |  | `CHAR(10)` | Plan Category |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `FinancialPlanningReqTransSqnc` |  | |  |  | `NUMC(23)` | Financial Planning Request Transaction Sequence Number |
| `FinancialPlanningDataPacket` |  | |  |  | `NUMC(6)` | Financial Planning Data Packet Number |
| `ActualPlanJournalEntryItem` |  | |  |  | `CHAR(12)` | Actual Plan Journal Entry Item |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalQuarter` |  | |  |  | `NUMC(1)` | Fiscal Quarter |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `FiscalYearQuarter` |  | |  |  | `NUMC(5)` | Fiscal Year + Fiscal Quarter |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `PartnerAccountAssignmentType` |  | |  |  | `CHAR(2)` | Partner Account Assignment Type |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Partner Cost Center |
| `PartnerProjectExternalID` |  | |  |  | `CHAR(24)` | Partner Project External ID |
| `PartnerWBSElementExternalID` |  | |  |  | `CHAR(24)` | Partner WBS Element External ID |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Cost Source Unit |
| `Quantity` |  | |  |  | `QUAN(23)` | Valuation Quantity |
| `RatioUnit` |  | |  |  | `UNIT(3)` |  |
| `CurrentFYYearToDateValue` |  | |  |  | `DEC(23)` |  |
| `PlanFYYearToDateValue` |  | |  |  | `DEC(23)` |  |
| `BudgetFiscalYearToDateValue` |  | |  |  | `DEC(23)` |  |
| `CmtmtFiscalYearToDateValue` |  | |  |  | `DEC(23)` |  |
| `TotAssgdAmtInCoCodeCurrency` |  | |  |  | `DEC(23)` |  |
| `DeltaActBdgtFsclYearToDteValue` |  | |  |  | `DEC(25)` |  |
| `DeltaActBdgtFsclYTDRatio` |  | |  |  | `DECF(34)` |  |
