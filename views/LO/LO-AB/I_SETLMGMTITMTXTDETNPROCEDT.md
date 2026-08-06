---
name: I_SETLMGMTITMTXTDETNPROCEDT
description: This CDS view provides access to the list of Text Determination Procedures which can be assigned to Settlement Document Types and which can be used on item level for Settlement Management Documents. This CDS view provides the prerequisites for answering the following business question: How many possible Text Determination Procedures are defined for item level?
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTITMTXTDETNPROCEDT')/$value
semantic_en: This CDS view provides access to the list of Text Determination Procedures which can be assigned to Settlement Document Types and which can be used on item level for Settlement Management Documents. This CDS view provides the prerequisites for answering the following business question: How many possible Text Determination Procedures are defined for item level?
tags:
  - LO
  - bo:companycode
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
  - metadata-only
---
# I_SETLMGMTITMTXTDETNPROCEDT

**This CDS view provides access to the list of Text Determination Procedures which can be assigned to Settlement Document Types and which can be used on item level for Settlement Management Documents. This CDS view provides the prerequisites for answering the following business question: How many possible Text Determination Procedures are defined for item level?**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTITMTXTDETNPROCEDT')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `SettlmtItmTxtDetnProced` | `CHAR(2)` | Text Determination Procedure for Item |
| `Language` | `LANG(1)` | Language Key |
| `SettlmtItmTxtDetnProcedDesc` | `CHAR(20)` | Item Text Determination Procedure Description |
