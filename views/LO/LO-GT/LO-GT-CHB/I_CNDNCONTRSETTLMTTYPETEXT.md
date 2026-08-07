---
name: I_CNDNCONTRSETTLMTTYPETEXT
description: This CDS view provides the prerequisites for answering questions about condition contracts settlement types. The condition contract settlement types define the rebate type for: Supplier Contract Settlement Customer Contract Settlement
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRSETTLMTTYPETEXT')/$value
semantic_en: This CDS view provides the prerequisites for answering questions about condition contracts settlement types. The condition contract settlement types define the rebate type for: Supplier Contract Settlement Customer Contract Settlement
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
# I_CNDNCONTRSETTLMTTYPETEXT

**This CDS view provides the prerequisites for answering questions about condition contracts settlement types. The condition contract settlement types define the rebate type for: Supplier Contract Settlement Customer Contract Settlement**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRSETTLMTTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrSettlmtType` |  | |  |  | `CHAR(1)` | Condition Contract Settlement Type |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `CndnContrSettlmtTypeName` |  | |  |  | `CHAR(60)` | Condition Contract Settlement Type Description |
| `DomainValue` |  | |  |  | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
