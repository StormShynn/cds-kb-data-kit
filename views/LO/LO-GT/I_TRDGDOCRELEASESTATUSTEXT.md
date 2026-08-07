---
name: I_TRDGDOCRELEASESTATUSTEXT
description: Release Status of Trading Document - Text
app_component: LO-GT
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCRELEASESTATUSTEXT')/$value
semantic_en: Release Status of Trading Document - Text
tags:
  - LO
  - component:LO-GT
  - document
  - interface-view
  - LO-GT
  - lob:logistics general
  - metadata-only
---
# I_TRDGDOCRELEASESTATUSTEXT

**Release Status of Trading Document - Text**

| Property | Value |
|---|---|
| App Component | `LO-GT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCRELEASESTATUSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `TrdgDocReleaseStatus` |  | |  |  | `CHAR(1)` | Release Status for Follow-On Document Generation |
| `DomainValue` |  | |  |  | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `TrdgDocReleaseStatusName` |  | |  |  | `CHAR(60)` | Desc. of Release Status of TC for Follow-On Doc. Generation |
