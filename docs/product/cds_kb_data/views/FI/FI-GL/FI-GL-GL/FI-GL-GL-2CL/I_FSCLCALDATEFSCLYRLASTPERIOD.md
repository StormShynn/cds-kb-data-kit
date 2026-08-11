---
name: I_FSCLCALDATEFSCLYRLASTPERIOD
description: "This CDS view provides the prerequisites for answering the following business question: What is the last fiscal period of the fiscal year on a key date for a company code and ledger? This CDS view can be used as a derivation entity."
app_component: FI-GL-GL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FSCLCALDATEFSCLYRLASTPERIOD')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business question: What is the last fiscal period of the fiscal year on a key date for a company code and ledger? This CDS view can be used as a derivation entity."
tags:
  - FI
  - bo:companycode
  - component:FI-GL-GL-2CL
  - FI-GL
  - FI-GL-GL
  - FI-GL-GL-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_FSCLCALDATEFSCLYRLASTPERIOD

**This CDS view provides the prerequisites for answering the following business question: What is the last fiscal period of the fiscal year on a key date for a company code and ledger? This CDS view can be used as a derivation entity.**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FSCLCALDATEFSCLYRLASTPERIOD')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger |
| `CalendarDate` |  | |  |  | `DATS(8)` | Calendar Date |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
