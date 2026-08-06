---
name: I_LOGISTICSDATAENTRYCATTEXT
description: This CDS view is used to select the Logistics Data Entry Category. Domains: WRTYP Values: ‘A’ - Without Logistics Data ‘B’ - With Logistics Data ‘C’ - Material-Related With Logistics Data ‘D’ - Material-Related Without Logistics Data This CDS view provides the prerequisites for answering the following business questions: What is the Logistics Data Entry Category?
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOGISTICSDATAENTRYCATTEXT')/$value
semantic_en: This CDS view is used to select the Logistics Data Entry Category. Domains: WRTYP Values: ‘A’ - Without Logistics Data ‘B’ - With Logistics Data ‘C’ - Material-Related With Logistics Data ‘D’ - Material-Related Without Logistics Data This CDS view provides the prerequisites for answering the following business questions: What is the Logistics Data Entry Category?
tags:
  - LO
  - bo:plant
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
  - material
  - metadata-only
---
# I_LOGISTICSDATAENTRYCATTEXT

**This CDS view is used to select the Logistics Data Entry Category. Domains: WRTYP Values: ‘A’ - Without Logistics Data ‘B’ - With Logistics Data ‘C’ - Material-Related With Logistics Data ‘D’ - Material-Related Without Logistics Data This CDS view provides the prerequisites for answering the following business questions: What is the Logistics Data Entry Category?**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOGISTICSDATAENTRYCATTEXT')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `LogisticsDataEntryCat` | `CHAR(1)` | Entry Category for Logistics Data |
| `Language` | `LANG(1)` | Language Key |
| `LogisticsDataEntryCatName` | `CHAR(60)` | Description of Entry Category for Logistics Data |
| `DomainValue` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
