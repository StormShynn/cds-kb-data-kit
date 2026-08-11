---
name: I_SETLMGMTHDRTXTDETNPROCEDT
description: "This CDS view provides access to the list of Text Determination Procedures which can be assigned to Settlement Document Types. The Text Determination Procedures can be used in the header of Settlement Management Documents. This CDS view provides the prerequisites for answering the following business questions: How many text determination procedures are defined? What text determination procedures are defined for which purpose?"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTHDRTXTDETNPROCEDT')/$value
semantic_en: "This CDS view provides access to the list of Text Determination Procedures which can be assigned to Settlement Document Types. The Text Determination Procedures can be used in the header of Settlement Management Documents. This CDS view provides the prerequisites for answering the following business questions: How many text determination procedures are defined? What text determination procedures are defined for which purpose?"
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
# I_SETLMGMTHDRTXTDETNPROCEDT

**This CDS view provides access to the list of Text Determination Procedures which can be assigned to Settlement Document Types. The Text Determination Procedures can be used in the header of Settlement Management Documents. This CDS view provides the prerequisites for answering the following business questions: How many text determination procedures are defined? What text determination procedures are defined for which purpose?**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTHDRTXTDETNPROCEDT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtHdrTxtDetnProced` |  | |  |  | `CHAR(2)` | Text Determination Procedure for Header |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `SettlmtHdrTxtDetnProcedDesc` |  | |  |  | `CHAR(20)` | Header Text Determination Procedure Description |
