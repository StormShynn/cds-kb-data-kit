---
name: I_CNDNCONTRISINACTIVE
description: This CDS view retrieves information on the condition contract state and indicates whether the condition contract is active or inactive. This CDS view provides the prerequisites for answering the following business questions: Is the condition contract state active or inactive?
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRISINACTIVE')/$value
semantic_en: This CDS view retrieves information on the condition contract state and indicates whether the condition contract is active or inactive. This CDS view provides the prerequisites for answering the following business questions: Is the condition contract state active or inactive?
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
# I_CNDNCONTRISINACTIVE

**This CDS view retrieves information on the condition contract state and indicates whether the condition contract is active or inactive. This CDS view provides the prerequisites for answering the following business questions: Is the condition contract state active or inactive?**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRISINACTIVE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CndnContrIsInactive` | `CHAR(1)` | Condition Contract Activation Status |
| `DomainValue` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
