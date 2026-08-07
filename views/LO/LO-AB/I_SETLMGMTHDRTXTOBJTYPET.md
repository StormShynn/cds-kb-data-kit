---
name: I_SETLMGMTHDRTXTOBJTYPET
description: This CDS view provides access to the list of Text Object Types which exist on header level that can be used in Settlement Management. This CDS view provides the prerequisites for answering the following business questions: What are the Text Object Types that are defined for usage on header level? How many possible Text Object Types are defined for usage on header level?
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTHDRTXTOBJTYPET')/$value
semantic_en: This CDS view provides access to the list of Text Object Types which exist on header level that can be used in Settlement Management. This CDS view provides the prerequisites for answering the following business questions: What are the Text Object Types that are defined for usage on header level? How many possible Text Object Types are defined for usage on header level?
tags:
  - LO
  - bo:companycode
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
  - metadata-only
---
# I_SETLMGMTHDRTXTOBJTYPET

**This CDS view provides access to the list of Text Object Types which exist on header level that can be used in Settlement Management. This CDS view provides the prerequisites for answering the following business questions: What are the Text Object Types that are defined for usage on header level? How many possible Text Object Types are defined for usage on header level?**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTHDRTXTOBJTYPET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtMgmtHdrTxtObjType` |  | |  |  | `CHAR(4)` | Specific Text ID for a Settlement Management Document Header |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `SettlmtMgmtHdrTxtObjTypeDesc` |  | |  |  | `CHAR(30)` | Settlement Management Header Text ID Description |
