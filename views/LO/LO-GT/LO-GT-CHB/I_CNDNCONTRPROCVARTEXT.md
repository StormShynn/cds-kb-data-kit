---
name: I_CNDNCONTRPROCVARTEXT
description: This CDS view retrieves information about the process variant of the condition contract.
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPROCVARTEXT')/$value
semantic_en: This CDS view retrieves information about the process variant of the condition contract.
tags:
  - LO
  - component:LO-GT-CHB
  - contract
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
  - metadata-only
---
# I_CNDNCONTRPROCVARTEXT

**This CDS view retrieves information about the process variant of the condition contract.**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPROCVARTEXT')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CndnContrProcVar` | `CHAR(4)` | Condition Contract Process Variant |
| `Language` | `LANG(1)` | Language Key |
| `CndnContrProcVarDesc` | `CHAR(40)` | Condition Contract Process Variant Text |
