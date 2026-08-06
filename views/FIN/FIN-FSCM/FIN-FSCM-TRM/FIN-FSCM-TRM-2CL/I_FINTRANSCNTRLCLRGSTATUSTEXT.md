---
name: I_FINTRANSCNTRLCLRGSTATUSTEXT
description: This CDS view shows the clearing statuses available for a financial transaction that is part of the central clearing process in Treasury and Risk Management. This CDS view provides the prerequisites for answering the following business question: Which clearing statuses are available for financial transactions?
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCNTRLCLRGSTATUSTEXT')/$value
semantic_en: This CDS view shows the clearing statuses available for a financial transaction that is part of the central clearing process in Treasury and Risk Management. This CDS view provides the prerequisites for answering the following business question: Which clearing statuses are available for financial transactions?
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
# I_FINTRANSCNTRLCLRGSTATUSTEXT

**This CDS view shows the clearing statuses available for a financial transaction that is part of the central clearing process in Treasury and Risk Management. This CDS view provides the prerequisites for answering the following business question: Which clearing statuses are available for financial transactions?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCNTRLCLRGSTATUSTEXT')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Language` | `LANG(1)` | Language Key |
| `FinTransCentralClearingStatus` | `NUMC(1)` | Clearing Status (TREA) |
| `DomainValue` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `FinTransCntrlClrgStatusName` | `CHAR(60)` | Clearing Status Name (TREA) |
