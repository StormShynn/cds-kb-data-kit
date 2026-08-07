---
name: I_FINTRANSCNDNSCALE
description: "This CDS view provides information about the conditions of financial transactions that have a scaled interest condition (the Interest Category field of the condition is set to 07 (Scaled: Interval) or 06 (Scaled: Incremental)). This CDS view provides the prerequisites for answering the following business questions: What are the lower and upper limits of a scaled condition item? What is the percentage of a scaled condition item?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCNDNSCALE')/$value
semantic_en: "This CDS view provides information about the conditions of financial transactions that have a scaled interest condition (the Interest Category field of the condition is set to 07 (Scaled: Interval) or 06 (Scaled: Incremental)). This CDS view provides the prerequisites for answering the following business questions: What are the lower and upper limits of a scaled condition item? What is the percentage of a scaled condition item?"
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
# I_FINTRANSCNDNSCALE

**This CDS view provides information about the conditions of financial transactions that have a scaled interest condition (the Interest Category field of the condition is set to 07 (Scaled: Interval) or 06 (Scaled: Incremental)). This CDS view provides the prerequisites for answering the following business questions: What are the lower and upper limits of a scaled condition item? What is the percentage of a scaled condition item?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCNDNSCALE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FinancialTransaction` |  | |  |  | `CHAR(13)` | Financial Transaction |
| `FinancialInstrumentActivity` |  | |  |  | `NUMC(5)` | Transaction Activity |
| `FinancialTransactionDirection` |  | |  |  | `NUMC(1)` | Direction of Transaction |
| `FinConditionItem` |  | |  |  | `NUMC(4)` | Condition |
| `ConditionItemValidityStartDate` |  | |  |  | `DATS(8)` | Condition Item Effective From |
| `FinInstrConditionLogicGroup` |  | |  |  | `NUMC(4)` | Condition Logic Group |
| `FinancialInstrProductCategory` |  | |  |  | `NUMC(3)` | Financial Instrument Product Category |
| `FinCndnScaleLowerLimitAmount` |  | |  |  | `CURR(23)` | Lower Limit for Amount |
| `FinCndnScaleUpperLimitAmount` |  | |  |  | `CURR(23)` | Upper Limit for Amt |
| `FinCndnLimitAmountCurrency` |  | |  |  | `CUKY(5)` | Limit Amount Currency |
| `FinConditionInterestCategory` |  | |  |  | `NUMC(2)` |  |
| `ConditionPercentageRate` |  | |  |  | `DEC(10)` | Percentage rate for condition items |
| `InterestReference` |  | |  |  | `CHAR(10)` | Reference Interest Rate |
| `FinConditionFormulaReference` |  | |  |  | `CHAR(4)` | Formula Reference |
