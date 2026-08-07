---
name: I_FINTRANSINTEREST
description: This CDS view provides information about the interest period and the interest condition details on a key date. This CDS view provides the prerequisites for answering the following business questions: What is the interest amount for a financial transaction on a key date? What is the interest rate of the interest flow? What is the interest category of the condition? What are the due date and the payment date of the interest flow? What is the fixing date for the interest rate of the interest flow?
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSINTEREST')/$value
semantic_en: This CDS view provides information about the interest period and the interest condition details on a key date. This CDS view provides the prerequisites for answering the following business questions: What is the interest amount for a financial transaction on a key date? What is the interest rate of the interest flow? What is the interest category of the condition? What are the due date and the payment date of the interest flow? What is the fixing date for the interest rate of the interest flow?
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
  - payment
  - transaction
  - metadata-only
---
# I_FINTRANSINTEREST

**This CDS view provides information about the interest period and the interest condition details on a key date. This CDS view provides the prerequisites for answering the following business questions: What is the interest amount for a financial transaction on a key date? What is the interest rate of the interest flow? What is the interest category of the condition? What are the due date and the payment date of the interest flow? What is the fixing date for the interest rate of the interest flow?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSINTEREST')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FinancialTransaction` |  | |  |  | `CHAR(13)` | Financial Transaction |
| `FinancialTransactionDirection` |  | |  |  | `NUMC(1)` | Direction of Transaction |
| `FinConditionInterestCategory` |  | |  |  | `NUMC(2)` |  |
| `FinTransFlowPaytAmt` |  | |  |  | `CURR(13)` | Flow Payment Amount |
| `FinTransFlowPaytAmtCrcy` |  | |  |  | `CUKY(5)` | Payment Currency |
| `FinTransFlowPaymentDate` |  | |  |  | `DATS(8)` | Flow Payment Date |
| `FinTransFlowPaymentDueDate` |  | |  |  | `DATS(8)` | Due Date |
| `FinTransFlowIntrstRateFixDate` |  | |  |  | `DATS(8)` | Interest Rate Fixing Date |
| `ConditionPercentageRate` |  | |  |  | `DEC(10)` | Percentage rate for condition items |
| `FinInterestRateAdjmtStatus` |  | |  |  | `CHAR(2)` | Status of Interest Rate Adjustment |
| `FinTransIntrstHndlgAtRollover` |  | |  |  | `NUMC(1)` | Interest Handling At Rollover |
| `RolloverDfrrdIntrstPyoutDte` |  | |  |  | `DATS(8)` | Payout Date for Deferred Interest |
