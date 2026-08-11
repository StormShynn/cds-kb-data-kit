---
name: I_SETLMGMTHDRTXTOBJTYPEASSGMT
description: "This CDS view provides information which Text Object Types are assigned to the relevant Text Determination Procedures on header level. This CDS view provides the prerequisites for answering the following business question: Which combinations of Text Determination Procedures and Text Object Types are allowed on header level?"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTHDRTXTOBJTYPEASSGMT')/$value
semantic_en: "This CDS view provides information which Text Object Types are assigned to the relevant Text Determination Procedures on header level. This CDS view provides the prerequisites for answering the following business question: Which combinations of Text Determination Procedures and Text Object Types are allowed on header level?"
tags:
  - LO
  - bo:plant
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
  - metadata-only
---
# I_SETLMGMTHDRTXTOBJTYPEASSGMT

**This CDS view provides information which Text Object Types are assigned to the relevant Text Determination Procedures on header level. This CDS view provides the prerequisites for answering the following business question: Which combinations of Text Determination Procedures and Text Object Types are allowed on header level?**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTHDRTXTOBJTYPEASSGMT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtHdrTxtDetnProced` |  | |  |  | `CHAR(2)` | Text Determination Procedure for Header |
| `SettlmtMgmtHdrTxtObjType` |  | |  |  | `CHAR(4)` | Specific Text ID for a Settlement Management Document Header |
