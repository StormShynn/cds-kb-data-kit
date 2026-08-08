---
name: I_RACONTRACTPOSTINGMODETEXT
description: "Contract Posting Mode - Text"
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RACONTRACTPOSTINGMODETEXT')/$value
semantic_en: "Contract Posting Mode - Text"
tags:
  - FI
  - bo:purchaseorder
  - component:FI-RA-2CL
  - contract
  - FI-RA
  - FI-RA-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_RACONTRACTPOSTINGMODETEXT

**Contract Posting Mode - Text**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RACONTRACTPOSTINGMODETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `RAContractPostingMode` |  | |  |  | `CHAR(1)` | Posting Mode |
| `DomainValue` |  | |  |  | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `RAContractPostingModeName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
