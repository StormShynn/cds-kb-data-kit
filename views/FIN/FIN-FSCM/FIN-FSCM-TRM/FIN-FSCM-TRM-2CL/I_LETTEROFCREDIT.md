---
name: I_LETTEROFCREDIT
description: "Caution Do not use this CDS view. Instead, use the CDS view Financial Transaction Current Activity (I_FinTransCurrentActivity). This CDS view provides the prerequisites for answering the following business questions: Which letters of credit are available? What is the name of a letter of credit?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LETTEROFCREDIT')/$value
semantic_en: "Caution Do not use this CDS view. Instead, use the CDS view Financial Transaction Current Activity (I_FinTransCurrentActivity). This CDS view provides the prerequisites for answering the following business questions: Which letters of credit are available? What is the name of a letter of credit?"
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
# I_LETTEROFCREDIT

**Caution Do not use this CDS view. Instead, use the CDS view Financial Transaction Current Activity (I_FinTransCurrentActivity). This CDS view provides the prerequisites for answering the following business questions: Which letters of credit are available? What is the name of a letter of credit?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LETTEROFCREDIT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FinancialTransaction` |  | |  |  | `CHAR(13)` | Financial Transaction |
| `FinancialInstrumentActivity` |  | |  |  | `NUMC(5)` | Transaction Activity |
| `LetterOfCredit` |  | |  |  | `CHAR(16)` | Letter of Credit Number |
