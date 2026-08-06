---
name: I_SETTLMTDOCTYPETEXT
description: This CDS view provides the prerequisites for answering the following business question: What are the descriptions of settlement document types in different languages?
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCTYPETEXT')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business question: What are the descriptions of settlement document types in different languages?
tags:
  - LO
  - bo:plant
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
  - metadata-only
---
# I_SETTLMTDOCTYPETEXT

**This CDS view provides the prerequisites for answering the following business question: What are the descriptions of settlement document types in different languages?**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCTYPETEXT')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `SettlmtDocType` | `CHAR(4)` | Settlement Document Type |
| `Language` | `LANG(1)` | Language Key |
| `SettlmtDocTypeDesc` | `CHAR(40)` | Settlement Document Type Description |
