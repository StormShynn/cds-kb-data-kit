---
name: I_CNDNCONTRELIGIBLECAT
description: This CDS view is used to select the type of eligible partner for a condition contract. The following fixed values have been maintained: Values: C - Customer V - Supplier N - No Eligible Partner P - Plant R - Reference Condition Contracts This CDS view provides the prerequisites for answering the following business questions: What is the type of eligible partner for a condition contract?
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRELIGIBLECAT')/$value
semantic_en: This CDS view is used to select the type of eligible partner for a condition contract. The following fixed values have been maintained: Values: C - Customer V - Supplier N - No Eligible Partner P - Plant R - Reference Condition Contracts This CDS view provides the prerequisites for answering the following business questions: What is the type of eligible partner for a condition contract?
tags:
  - LO
  - bo:businesspartner
  - component:LO-GT-CHB
  - contract
  - customer
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
  - plan
  - supplier
  - metadata-only
---
# I_CNDNCONTRELIGIBLECAT

**This CDS view is used to select the type of eligible partner for a condition contract. The following fixed values have been maintained: Values: C - Customer V - Supplier N - No Eligible Partner P - Plant R - Reference Condition Contracts This CDS view provides the prerequisites for answering the following business questions: What is the type of eligible partner for a condition contract?**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRELIGIBLECAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrEligibleCat` |  | |  |  | `CHAR(2)` | Type of Eligible Partner for a Condition Contract |
| `DomainValue` |  | |  |  | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
