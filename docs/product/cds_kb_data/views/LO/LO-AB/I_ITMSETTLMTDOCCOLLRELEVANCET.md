---
name: I_ITMSETTLMTDOCCOLLRELEVANCET
description: "This CDS view is used to select the Item Settlement Document Collection Relevance. The following values have been maintained: ‘ ’ As Accounts Receivable 1 As Accounts Payable This CDS view provides the prerequisites for answering the following business questions: What is the Item Settlement Document Collection Relevance?"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ITMSETTLMTDOCCOLLRELEVANCET')/$value
semantic_en: "This CDS view is used to select the Item Settlement Document Collection Relevance. The following values have been maintained: ‘ ’ As Accounts Receivable 1 As Accounts Payable This CDS view provides the prerequisites for answering the following business questions: What is the Item Settlement Document Collection Relevance?"
tags:
  - LO
  - account
  - bo:plant
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
  - metadata-only
---
# I_ITMSETTLMTDOCCOLLRELEVANCET

**This CDS view is used to select the Item Settlement Document Collection Relevance. The following values have been maintained: ‘ ’ As Accounts Receivable 1 As Accounts Payable This CDS view provides the prerequisites for answering the following business questions: What is the Item Settlement Document Collection Relevance?**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ITMSETTLMTDOCCOLLRELEVANCET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ItmSettlmtDocCollRelevance` |  | |  |  | `CHAR(1)` | Collective Settlement Relevance of Settlement Documents |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `ItmSettlmtDocCollRelevanceName` |  | |  |  | `CHAR(60)` | Description of Collective Settlement Relevance Category |
| `DomainValue` |  | |  |  | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
