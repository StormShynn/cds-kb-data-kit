---
name: I_SETTLMTCLASSIFICATIONCATTEXT
description: This CDS view is used to select the settlement classification category. The CDS view provides the parameters for the domain WSETTLE_CATEGORY with the following values: Standard Document V - Renumeration Settlement (Chargeback)
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTCLASSIFICATIONCATTEXT')/$value
semantic_en: This CDS view is used to select the settlement classification category. The CDS view provides the parameters for the domain WSETTLE_CATEGORY with the following values: Standard Document V - Renumeration Settlement (Chargeback)
tags:
  - LO
  - bo:companycode
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
  - metadata-only
---
# I_SETTLMTCLASSIFICATIONCATTEXT

**This CDS view is used to select the settlement classification category. The CDS view provides the parameters for the domain WSETTLE_CATEGORY with the following values: Standard Document V - Renumeration Settlement (Chargeback)**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTCLASSIFICATIONCATTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtClassificationCat` |  | |  |  | `CHAR(1)` | Settlement Classification Category |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `SettlmtClassificationCatName` |  | |  |  | `CHAR(60)` | Settlement Classification Category Description |
| `DomainValue` |  | |  |  | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
