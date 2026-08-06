---
name: I_SETTLMTDOCPROCTYPEASSGMT
description: This CDS view provides information, which Settlement Document Types are assigned to the relevant Settlement Process Types. Which combinations of Settlement Document Types and Settlement Process Types are allowed?
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCPROCTYPEASSGMT')/$value
semantic_en: This CDS view provides information, which Settlement Document Types are assigned to the relevant Settlement Process Types. Which combinations of Settlement Document Types and Settlement Process Types are allowed?
tags:
  - LO
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
  - metadata-only
---
# I_SETTLMTDOCPROCTYPEASSGMT

**This CDS view provides information, which Settlement Document Types are assigned to the relevant Settlement Process Types. Which combinations of Settlement Document Types and Settlement Process Types are allowed?**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCPROCTYPEASSGMT')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `SettlmtProcessType` | `CHAR(4)` | Settlement Process Type |
| `SettlmtDocType` | `CHAR(4)` | Settlement Document Type |
