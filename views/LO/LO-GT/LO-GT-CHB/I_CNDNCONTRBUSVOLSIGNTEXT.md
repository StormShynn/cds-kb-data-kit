---
name: I_CNDNCONTRBUSVOLSIGNTEXT
description: This CDS view provides the prerequisites for answering questions about condition contract business volume sign. The following fixed values have been maintained: I Inclusive E Exclusive
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRBUSVOLSIGNTEXT')/$value
semantic_en: This CDS view provides the prerequisites for answering questions about condition contract business volume sign. The following fixed values have been maintained: I Inclusive E Exclusive
tags:
  - LO
  - bo:companycode
  - component:LO-GT-CHB
  - contract
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
  - metadata-only
---
# I_CNDNCONTRBUSVOLSIGNTEXT

**This CDS view provides the prerequisites for answering questions about condition contract business volume sign. The following fixed values have been maintained: I Inclusive E Exclusive**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRBUSVOLSIGNTEXT')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CndnContrBusVolSign` | `CHAR(1)` | Status Including / Excluding |
| `Language` | `LANG(1)` | Language Key |
| `CndnContrBusVolSignName` | `CHAR(60)` | Description of Bus. Vol. Selection Criteria Sign Category |
| `DomainValue` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
