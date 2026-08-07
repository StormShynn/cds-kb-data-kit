---
name: I_FSCLYRINTVLDRVTNFORPOSTGDATE
description: "Derive Fiscal Years for Posting Date"
app_component: FI-GL-GL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FSCLYRINTVLDRVTNFORPOSTGDATE')/$value
semantic_en: "Derive Fiscal Years for Posting Date"
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
# I_FSCLYRINTVLDRVTNFORPOSTGDATE

**Derive Fiscal Years for Posting Date**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FSCLYRINTVLDRVTNFORPOSTGDATE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FromFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `ToFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
