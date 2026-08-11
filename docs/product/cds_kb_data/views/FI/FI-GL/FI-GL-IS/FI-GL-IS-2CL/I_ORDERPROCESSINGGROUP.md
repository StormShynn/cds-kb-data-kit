---
name: I_ORDERPROCESSINGGROUP
description: "This CDS view provides general information about order processing group text. It includes information about controlling area, order processing group, language, order processing group name. This CDS view provides the prerequisites for answering the following business questions: What/How many order processing groups does certain controlling area have? What’s the name for each order processing group in different languages?"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ORDERPROCESSINGGROUP')/$value
semantic_en: "This CDS view provides general information about order processing group text. It includes information about controlling area, order processing group, language, order processing group name. This CDS view provides the prerequisites for answering the following business questions: What/How many order processing groups does certain controlling area have? What’s the name for each order processing group in different languages?"
tags:
  - FI
  - bo:plant
  - component:FI-GL-IS-2CL
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
  - order
  - metadata-only
---
# I_ORDERPROCESSINGGROUP

**This CDS view provides general information about order processing group text. It includes information about controlling area, order processing group, language, order processing group name. This CDS view provides the prerequisites for answering the following business questions: What/How many order processing groups does certain controlling area have? What’s the name for each order processing group in different languages?**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ORDERPROCESSINGGROUP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `OrderProcessingGroup` |  | |  |  | `NUMC(2)` | Processing group |
| `OrdProcgGrpForSettlmtToCostCtr` |  | |  |  | `CHAR(1)` | Identifier for Settlement to Cost Center |
| `OrdProcgGrpForSettlmtToGLAcct` |  | |  |  | `CHAR(1)` | Flag for Settlement to G/L Account |
