---
name: I_DOCINTRASTATRELEVANCETEXT
description: "This CDS view is used to select the Document Intrastate Relevance. The following values have been maintained: ‘’ Document Is Not Relevant for Intrastat 1 Document Is Relevant for Intrastat 2 Data for Creation of Intrastat Declaration Transferred 3 Error During Data Transfer for Intrastat This CDS view provides the prerequisites for answering the following business questions: What is the document intrastate relevance?"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DOCINTRASTATRELEVANCETEXT')/$value
semantic_en: "This CDS view is used to select the Document Intrastate Relevance. The following values have been maintained: ‘’ Document Is Not Relevant for Intrastat 1 Document Is Relevant for Intrastat 2 Data for Creation of Intrastat Declaration Transferred 3 Error During Data Transfer for Intrastat This CDS view provides the prerequisites for answering the following business questions: What is the document intrastate relevance?"
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
# I_DOCINTRASTATRELEVANCETEXT

**This CDS view is used to select the Document Intrastate Relevance. The following values have been maintained: ‘’ Document Is Not Relevant for Intrastat 1 Document Is Relevant for Intrastat 2 Data for Creation of Intrastat Declaration Transferred 3 Error During Data Transfer for Intrastat This CDS view provides the prerequisites for answering the following business questions: What is the document intrastate relevance?**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DOCINTRASTATRELEVANCETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DocIntrastatRelevance` |  | |  |  | `CHAR(1)` | Document is Relevant for Intrastat Declarations |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `DocIntrastatRelevanceName` |  | |  |  | `CHAR(60)` | Description of Intrastat Declaration Relevance Category |
| `DomainValue` |  | |  |  | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
