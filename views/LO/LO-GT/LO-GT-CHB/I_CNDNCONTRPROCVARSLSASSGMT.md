---
name: I_CNDNCONTRPROCVARSLSASSGMT
description: This CDS view retrieves the sales area assigned to the process variant.
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPROCVARSLSASSGMT')/$value
semantic_en: This CDS view retrieves the sales area assigned to the process variant.
tags:
  - LO
  - component:LO-GT-CHB
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
  - metadata-only
---
# I_CNDNCONTRPROCVARSLSASSGMT

**This CDS view retrieves the sales area assigned to the process variant.**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPROCVARSLSASSGMT')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CndnContrProcVar` | `CHAR(4)` | Condition Contract Process Variant |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `Division` | `CHAR(2)` | Division |
