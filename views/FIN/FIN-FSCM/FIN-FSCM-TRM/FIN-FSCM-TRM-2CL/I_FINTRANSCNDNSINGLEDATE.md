---
name: I_FINTRANSCNDNSINGLEDATE
description: This CDS view provides information about the conditions of a financial transactions with single dates (the indicator denoting that this condition has single dates is set). This CDS view provides the prerequisites for answering the following business questions: What is the calculation date of the condition item? What is the due date of the condition item?
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCNDNSINGLEDATE')/$value
semantic_en: This CDS view provides information about the conditions of a financial transactions with single dates (the indicator denoting that this condition has single dates is set). This CDS view provides the prerequisites for answering the following business questions: What is the calculation date of the condition item? What is the due date of the condition item?
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
  - transaction
  - metadata-only
---
# I_FINTRANSCNDNSINGLEDATE

**This CDS view provides information about the conditions of a financial transactions with single dates (the indicator denoting that this condition has single dates is set). This CDS view provides the prerequisites for answering the following business questions: What is the calculation date of the condition item? What is the due date of the condition item?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCNDNSINGLEDATE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CompanyCode` | `CHAR(4)` | Company Code |
| `FinancialTransaction` | `CHAR(13)` | Financial Transaction |
| `FinancialInstrumentActivity` | `NUMC(5)` | Transaction Activity |
| `FinancialTransactionDirection` | `NUMC(1)` | Direction of Transaction |
| `FinConditionItem` | `NUMC(4)` | Condition |
| `ConditionItemValidityStartDate` | `DATS(8)` | Condition Item Effective From |
| `FinConditionSubItem` | `NUMC(2)` | Level Number of Condition Item for Recurring Payments |
| `FinancialInstrProductCategory` | `NUMC(3)` | Financial Instrument Product Category |
| `FinConditionConditionCategory` | `CHAR(2)` | Condition Category |
| `CalculationDate` | `DATS(8)` | Calculation Date |
| `CalcDateIsAsEndDateMonthEnd` | `CHAR(1)` | Indicator showing calculation date is month end |
| `DueDate` | `DATS(8)` | Due Date |
| `DueDateIsAsEndDateMonthEnd` | `CHAR(1)` | Indicator showing due date is month end |
| `ConditionPercentageRate` | `DEC(10)` | Percentage rate for condition items |
| `FinConditionFixedAmount` | `CURR(13)` | Fixed Amount |
| `FinConditionFixedAmountCrcy` | `CUKY(5)` | Fixed Amount Currency |
| `InterestRateAdjustmentDate` | `DATS(8)` | Interest Rate Adjustment Date |
| `IntrstRateAdjmtDateIsMonthEnd` | `CHAR(1)` | Indicator showing adjustment date is month end |
