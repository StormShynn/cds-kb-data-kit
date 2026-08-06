---
name: I_ITEMINTRASTATRELEVANCETEXT
description: This CDS view is used to select the Item Intrastat Relevance. The following values have been maintained: ‘’ Document item is not relevant 1 Document item is relevant This CDS view provides the prerequisites for answering the following business questions: What is the Item Intrastat Relevance?
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ITEMINTRASTATRELEVANCETEXT')/$value
semantic_en: This CDS view is used to select the Item Intrastat Relevance. The following values have been maintained: ‘’ Document item is not relevant 1 Document item is relevant This CDS view provides the prerequisites for answering the following business questions: What is the Item Intrastat Relevance?
tags:
  - LO
  - bo:plant
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
  - metadata-only
---
# I_ITEMINTRASTATRELEVANCETEXT

**This CDS view is used to select the Item Intrastat Relevance. The following values have been maintained: ‘’ Document item is not relevant 1 Document item is relevant This CDS view provides the prerequisites for answering the following business questions: What is the Item Intrastat Relevance?**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ITEMINTRASTATRELEVANCETEXT')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `ItemIntrastatRelevance` | `CHAR(1)` | Document Item is Relevant for Intrastat Declarations |
| `Language` | `LANG(1)` | Language Key |
| `ItemIntrastatRelevanceName` | `CHAR(60)` | Description of Item Intrastat Declaration Relevance Category |
| `DomainValue` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
