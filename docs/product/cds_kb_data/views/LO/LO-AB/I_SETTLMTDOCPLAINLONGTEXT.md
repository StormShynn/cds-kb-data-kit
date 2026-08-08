---
name: I_SETTLMTDOCPLAINLONGTEXT
description: "This CDS view provides the descriptive long texts for settlement document."
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCPLAINLONGTEXT')/$value
semantic_en: "This CDS view provides the descriptive long texts for settlement document."
tags:
  - LO
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
  - metadata-only
---
# I_SETTLMTDOCPLAINLONGTEXT

**This CDS view provides the descriptive long texts for settlement document.**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCPLAINLONGTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtDoc` |  | |  |  | `CHAR(10)` | Settlement Document Number |
| `TextObjectType` |  | |  |  | `CHAR(4)` | Text Object type |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
