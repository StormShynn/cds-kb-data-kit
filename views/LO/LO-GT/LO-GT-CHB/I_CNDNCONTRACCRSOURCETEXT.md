---
name: I_CNDNCONTRACCRSOURCETEXT
description: This CDS view provides the prerequisites for answering questions about condition contract accrual source. The following values are maintained: 1 Business Volume 2 Delta Accruals 3 Settlement
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRACCRSOURCETEXT')/$value
semantic_en: This CDS view provides the prerequisites for answering questions about condition contract accrual source. The following values are maintained: 1 Business Volume 2 Delta Accruals 3 Settlement
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
# I_CNDNCONTRACCRSOURCETEXT

**This CDS view provides the prerequisites for answering questions about condition contract accrual source. The following values are maintained: 1 Business Volume 2 Delta Accruals 3 Settlement**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRACCRSOURCETEXT')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CndnContrAccrSource` | `CHAR(1)` | Source of Accruals |
| `Language` | `LANG(1)` | Language Key |
| `CndnContrAccrSourceName` | `CHAR(60)` | Description of Source of Accurals Category |
| `DomainValue` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
