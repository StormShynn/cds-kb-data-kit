---
name: I_CNDNCONTRTYPEBLOCKUSAGETEXT
description: "This CDS view exposes fixed values that indicate If the condition contract type is blocked."
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRTYPEBLOCKUSAGETEXT')/$value
semantic_en: "This CDS view exposes fixed values that indicate If the condition contract type is blocked."
tags:
  - LO
  - bo:companycode
  - component:LO-GT-CHB
  - contract
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
  - metadata-only
---
# I_CNDNCONTRTYPEBLOCKUSAGETEXT

**This CDS view exposes fixed values that indicate If the condition contract type is blocked.**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRTYPEBLOCKUSAGETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrTypeBlockUsage` |  | |  |  | `CHAR(1)` | Condition Contract Type Block |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `CndnContrTypeBlockUsageName` |  | |  |  | `CHAR(60)` | Description of Condition Contract Type Block Category |
| `DomainValue` |  | |  |  | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
