---
name: I_SETTLMTAPPLSTSGRPSTSASSGMT
description: "Settlement Application Status Group Assignment"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTAPPLSTSGRPSTSASSGMT')/$value
semantic_en: "Settlement Application Status Group Assignment"
tags:
  - LO
  - bo:project
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
  - metadata-only
---
# I_SETTLMTAPPLSTSGRPSTSASSGMT

**Settlement Application Status Group Assignment**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTAPPLSTSGRPSTSASSGMT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtApplStsGrp` |  | |  |  | `CHAR(4)` | Status Group for Settlement Management Documents |
| `SettlmtApplSts` |  | |  |  | `CHAR(4)` | Application Status for a Settlement Management Document |
| `SettlmtApplStsAprvd` |  | |  |  | `CHAR(4)` | Application Status Approved |
| `SettlmtApplStsRjctd` |  | |  |  | `CHAR(4)` | Application Status Rejected |
| `ApplStsIsRlvtForRelProc` |  | |  |  | `CHAR(1)` | Release Process Active for Application Status |
