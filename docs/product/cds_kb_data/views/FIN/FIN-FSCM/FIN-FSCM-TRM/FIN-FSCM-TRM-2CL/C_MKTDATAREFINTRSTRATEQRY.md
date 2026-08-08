---
name: C_MKTDATAREFINTRSTRATEQRY
description: "This CDS view provides the prerequisites for answering the following business questions: What is the reference interest rate for a specified currency in a period of time?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MKTDATAREFINTRSTRATEQRY')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What is the reference interest rate for a specified currency in a period of time?"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - lob:finance
  - metadata-only
---
# C_MKTDATAREFINTRSTRATEQRY

**This CDS view provides the prerequisites for answering the following business questions: What is the reference interest rate for a specified currency in a period of time?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MKTDATAREFINTRSTRATEQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ReferenceInterestRate` |  | |  |  | `CHAR(10)` | Reference Interest Rate |
| `CalendarDate` |  | |  |  | `DATS(8)` | Calendar Date |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `EffectiveInterestRate` |  | |  |  | `DEC(10)` | Interest Rate |
