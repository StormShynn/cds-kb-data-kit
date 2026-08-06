---
name: I_FINTRANSCNDNFMLAVARBL
description: This CDS view provides detailed information for formula-based conditions (the Interest Category field is filled with the value 04 (Formula)). This CDS view provides the prerequisites for answering the following business questions: What are the variables of the formula reference? What is the percentage rate of the condition item?
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCNDNFMLAVARBL')/$value
semantic_en: This CDS view provides detailed information for formula-based conditions (the Interest Category field is filled with the value 04 (Formula)). This CDS view provides the prerequisites for answering the following business questions: What are the variables of the formula reference? What is the percentage rate of the condition item?
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_FINTRANSCNDNFMLAVARBL

**This CDS view provides detailed information for formula-based conditions (the Interest Category field is filled with the value 04 (Formula)). This CDS view provides the prerequisites for answering the following business questions: What are the variables of the formula reference? What is the percentage rate of the condition item?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCNDNFMLAVARBL')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CompanyCode` | `CHAR(4)` | Company Code |
| `FinancialTransaction` | `CHAR(13)` | Financial Transaction |
| `FinancialInstrumentActivity` | `NUMC(5)` | Transaction Activity |
| `FinancialTransactionDirection` | `NUMC(1)` | Direction of Transaction |
| `FinConditionItem` | `NUMC(4)` | Condition |
| `ConditionItemValidityStartDate` | `DATS(8)` | Condition Item Effective From |
| `FinConditionFormulaReference` | `CHAR(4)` | Formula Reference |
| `FinCndnFormulaVariable` | `CHAR(4)` | Variable Name |
| `FinancialInstrProductCategory` | `NUMC(3)` | Financial Instrument Product Category |
| `ConditionPercentageRate` | `DEC(10)` | Percentage rate for condition items |
| `InterestReference` | `CHAR(10)` | Reference Interest Rate |
