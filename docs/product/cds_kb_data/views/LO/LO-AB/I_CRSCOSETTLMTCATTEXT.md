---
name: I_CRSCOSETTLMTCATTEXT
description: "This CDS view exposes fixed values of the Cross Company Settlement Status Item field."
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRSCOSETTLMTCATTEXT')/$value
semantic_en: "This CDS view exposes fixed values of the Cross Company Settlement Status Item field."
tags:
  - LO
  - bo:companycode
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
  - metadata-only
---
# I_CRSCOSETTLMTCATTEXT

**This CDS view exposes fixed values of the Cross Company Settlement Status Item field.**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRSCOSETTLMTCATTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CrsCoSettlmtCat` |  | |  |  | `CHAR(1)` | Cross-Company Settlement Category |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `DomainValue` |  | |  |  | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `CrsCoSettlmtCatName` |  | |  |  | `CHAR(60)` | Description of Cross-Company Settlement Category |
