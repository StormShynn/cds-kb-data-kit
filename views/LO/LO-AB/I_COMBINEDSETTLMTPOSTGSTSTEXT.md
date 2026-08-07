---
name: I_COMBINEDSETTLMTPOSTGSTSTEXT
description: "This CDS view exposes fixed values of the Combined Settlement Posting Statuses field."
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMBINEDSETTLMTPOSTGSTSTEXT')/$value
semantic_en: "This CDS view exposes fixed values of the Combined Settlement Posting Statuses field."
tags:
  - LO
  - bo:companycode
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
  - metadata-only
---
# I_COMBINEDSETTLMTPOSTGSTSTEXT

**This CDS view exposes fixed values of the Combined Settlement Posting Statuses field.**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMBINEDSETTLMTPOSTGSTSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CombinedSettlmtPostgSts` |  | |  |  | `CHAR(1)` | Posting Status for Combined Settlement |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `CombinedSettlmtPostgStsName` |  | |  |  | `CHAR(60)` | Posting Status Description of Combined Settlement |
| `DomainValue` |  | |  |  | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
