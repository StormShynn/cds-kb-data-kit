---
name: I_GENERICPRIORITYTEXTDATA
description: "This CDS view provides the prerequisites for answering the following business question: What is the description of the priority in all languages?"
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GENERICPRIORITYTEXTDATA')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business question: What is the description of the priority in all languages?"
tags:
  - PM
  - bo:plant
  - component:PM-WOC-MN-2CL
  - interface-view
  - lob:plant maintenance
  - PM-WOC
  - PM-WOC-MN
  - PM-WOC-MN-2CL
  - metadata-only
---
# I_GENERICPRIORITYTEXTDATA

**This CDS view provides the prerequisites for answering the following business question: What is the description of the priority in all languages?**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GENERICPRIORITYTEXTDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `GenericPriorityType` |  | |  |  | `CHAR(2)` | Priority Type |
| `PriorityCode` |  | |  |  | `CHAR(1)` | Priority |
| `GenericPriorityDesc` |  | |  |  | `CHAR(20)` | Priority Text |
