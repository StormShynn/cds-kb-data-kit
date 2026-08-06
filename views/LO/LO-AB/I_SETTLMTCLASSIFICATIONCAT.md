---
name: I_SETTLMTCLASSIFICATIONCAT
description: This CDS view is used to select the settlement classification category. The CDS view provides the parameters for the domain WSETTLE_CATEGORY with the following values: Standard Document V - Renumeration Settlement (Chargeback)
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTCLASSIFICATIONCAT')/$value
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
# I_SETTLMTCLASSIFICATIONCAT

**This CDS view is used to select the settlement classification category. The CDS view provides the parameters for the domain WSETTLE_CATEGORY with the following values: Standard Document V - Renumeration Settlement (Chargeback)**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTCLASSIFICATIONCAT')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `SettlmtClassificationCat` | `CHAR(1)` | Settlement Classification Category |
| `DomainValue` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
