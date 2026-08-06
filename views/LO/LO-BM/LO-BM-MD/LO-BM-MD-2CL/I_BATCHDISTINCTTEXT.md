---
name: I_BATCHDISTINCTTEXT
description: This CDS view provides the prerequisites for answering the following business questions: When will the shelf life of the batch expire? To which supplier can a batch be traced? Where and when was the batch manufactured? Which batches are available for unrestricted use?
app_component: LO-BM-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BATCHDISTINCTTEXT')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions: When will the shelf life of the batch expire? To which supplier can a batch be traced? Where and when was the batch manufactured? Which batches are available for unrestricted use?
tags:
  - LO
  - bo:plant
  - component:LO-BM-MD-2CL
  - interface-view
  - LO-BM
  - LO-BM-MD
  - LO-BM-MD-2CL
  - lob:logistics general
  - supplier
  - metadata-only
---
# I_BATCHDISTINCTTEXT

**This CDS view provides the prerequisites for answering the following business questions: When will the shelf life of the batch expire? To which supplier can a batch be traced? Where and when was the batch manufactured? Which batches are available for unrestricted use?**

| Property | Value |
|---|---|
| App Component | `LO-BM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BATCHDISTINCTTEXT')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Language` | `LANG(1)` | Language Key |
| `Material` | `CHAR(40)` | Material Number |
| `Plant` | `CHAR(4)` | Plant |
| `Batch` | `CHAR(10)` | Batch Number |
| `BatchDescription` | `CHAR(40)` | Batch Description |
