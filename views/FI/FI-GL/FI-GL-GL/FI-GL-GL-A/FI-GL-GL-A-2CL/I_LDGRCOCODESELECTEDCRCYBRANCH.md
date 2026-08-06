---
name: I_LDGRCOCODESELECTEDCRCYBRANCH
description: This CDS view provides the prerequisites for answering the following business question: Which of the selected currency branches can be used for a ledger and a company code?
app_component: FI-GL-GL-A-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LDGRCOCODESELECTEDCRCYBRANCH')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business question: Which of the selected currency branches can be used for a ledger and a company code?
tags:
  - FI
  - bo:plant
  - component:FI-GL-GL-A-2CL
  - FI-GL
  - FI-GL-GL
  - FI-GL-GL-A
  - FI-GL-GL-A-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_LDGRCOCODESELECTEDCRCYBRANCH

**This CDS view provides the prerequisites for answering the following business question: Which of the selected currency branches can be used for a ledger and a company code?**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LDGRCOCODESELECTEDCRCYBRANCH')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `SelectedCurrencyBranch` | `CHAR(2)` | Currency Type |
| `CurrencyRole` | `CHAR(2)` | Company Code Currency Role |
