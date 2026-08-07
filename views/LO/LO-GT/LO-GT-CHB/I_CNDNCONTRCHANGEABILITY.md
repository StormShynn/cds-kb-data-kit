---
name: I_CNDNCONTRCHANGEABILITY
description: "This CDS view is used to check the changeability for the condition contract. This CDS view provides the prerequisites for answering the following business questions: What is the changeability of condition contract?"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRCHANGEABILITY')/$value
semantic_en: "This CDS view is used to check the changeability for the condition contract. This CDS view provides the prerequisites for answering the following business questions: What is the changeability of condition contract?"
tags:
  - LO
  - bo:plant
  - component:LO-GT-CHB
  - contract
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
  - metadata-only
---
# I_CNDNCONTRCHANGEABILITY

**This CDS view is used to check the changeability for the condition contract. This CDS view provides the prerequisites for answering the following business questions: What is the changeability of condition contract?**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRCHANGEABILITY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrChangeability` |  | |  |  | `CHAR(2)` | Control for Changes on the User Interface |
| `DomainValue` |  | |  |  | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
