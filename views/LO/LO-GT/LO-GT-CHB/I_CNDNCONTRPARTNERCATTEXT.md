---
name: I_CNDNCONTRPARTNERCATTEXT
description: This CDS view is used to select the partner category of a condition contract. The following fixed values are maintained: Values: C - Customer V - Supplier N - No Contract Partner P - Person This CDS view provides the prerequisites for answering the following business questions: Who is the partner of this condition contract?
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPARTNERCATTEXT')/$value
semantic_en: This CDS view is used to select the partner category of a condition contract. The following fixed values are maintained: Values: C - Customer V - Supplier N - No Contract Partner P - Person This CDS view provides the prerequisites for answering the following business questions: Who is the partner of this condition contract?
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
  - supplier
  - metadata-only
---
# I_CNDNCONTRPARTNERCATTEXT

**This CDS view is used to select the partner category of a condition contract. The following fixed values are maintained: Values: C - Customer V - Supplier N - No Contract Partner P - Person This CDS view provides the prerequisites for answering the following business questions: Who is the partner of this condition contract?**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPARTNERCATTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrPartnerCat` |  | |  |  | `CHAR(2)` | Type of Business Partner for Condition Contract |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `CndnContrPartnerCatName` |  | |  |  | `CHAR(60)` | Condition Contract Partner Category Description |
| `DomainValue` |  | |  |  | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
