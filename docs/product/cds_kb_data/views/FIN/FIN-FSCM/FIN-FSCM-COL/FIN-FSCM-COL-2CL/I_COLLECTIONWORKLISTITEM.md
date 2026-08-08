---
name: I_COLLECTIONWORKLISTITEM
description: "Collection Worklist Item"
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLECTIONWORKLISTITEM')/$value
semantic_en: "Collection Worklist Item"
tags:
  - FIN
  - component:FIN-FSCM-COL-2CL
  - FIN-FSCM
  - FIN-FSCM-COL
  - FIN-FSCM-COL-2CL
  - interface-view
  - lob:controlling
  - lob:finance
  - metadata-only
---
# I_COLLECTIONWORKLISTITEM

**Collection Worklist Item**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLECTIONWORKLISTITEM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollectionWorklistItemUUID` |  | |  |  | `RAW(16)` | Key of Worklist Item |
| `CollectionSpecialist` |  | |  |  | `CHAR(12)` | Collection Specialist |
| `CollectionGroup` |  | |  |  | `CHAR(10)` | Collection Group |
| `CollectionSegment` |  | |  |  | `CHAR(10)` | Collection Segment |
| `WorklistItemCreationDate` |  | |  |  | `DATS(8)` | Date of Worklist Item |
| `CollectionWorklistRun` |  | |  |  | `CHAR(12)` | Run ID |
| `Status` |  | |  |  | `CHAR(1)` | Indicator: Worklist Item Is Completed |
| `CollectionStrategy` |  | |  |  | `CHAR(10)` | Collection Strategy |
| `CollectionsStrategyVersion` |  | |  |  | `NUMC(8)` | Collection Strategy Version |
| `WorklistItemValuationPercent` |  | |  |  | `NUMC(4)` | Percentage Valuation |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `CustomerContactResult` |  | |  |  | `CHAR(3)` | Result of Customer Contact |
| `CollectableAmount` |  | |  |  | `CURR(15)` | Amount to Be Collected |
| `Currency` |  | |  |  | `CUKY(5)` | Strategy Currency |
