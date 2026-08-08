---
name: I_APMOBJECTLISTEXPORTASSGMT
description: "Object list export assignment"
app_component: FIN-FSCM-PF
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_APMOBJECTLISTEXPORTASSGMT')/$value
semantic_en: "Object list export assignment"
tags:
  - FIN
  - bo:purchaseorder
  - component:FIN-FSCM-PF
  - FIN-FSCM
  - FIN-FSCM-PF
  - interface-view
  - lob:finance
  - metadata-only
---
# I_APMOBJECTLISTEXPORTASSGMT

**Object list export assignment**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-PF` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_APMOBJECTLISTEXPORTASSGMT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `APMObjectRelationUUID` |  | |  |  | `RAW(16)` | Globally Unique Identifier |
| `ClearingArea` |  | |  |  | `CHAR(6)` | Clearing Area |
| `APMObjectCategory` |  | |  |  | `CHAR(2)` | Object Category |
| `APMObjectDate` |  | |  |  | `DATS(8)` | Object Date |
| `APMObjectNumber` |  | |  |  | `NUMC(12)` | Object Number |
| `APMObjectIdExtended` |  | |  |  | `CHAR(35)` | Additional Object ID |
| `APMObjectExtendedReference` |  | |  |  | `CHAR(120)` | Extended data reference |
| `APMObjectRelationCode` |  | |  |  | `CHAR(2)` | Business Object Relation Indicator |
| `APMRelatedObjectCategory` |  | |  |  | `CHAR(2)` | Object Category |
| `RelatedClearingArea` |  | |  |  | `CHAR(6)` | Clearing Area |
| `APMRelatedObjectDate` |  | |  |  | `DATS(8)` | Object Date |
| `APMRelatedObjectNumber` |  | |  |  | `NUMC(12)` | Object Number |
| `APMRelatedObjectIdExtended` |  | |  |  | `CHAR(35)` | Additional Object ID |
| `APMRelatedObjectExtendedRef` |  | |  |  | `CHAR(120)` | Extended data reference |
| `APMExternalSystemCode` |  | |  |  | `CHAR(3)` | External Components Identification |
| `APMObjectRelationState` |  | |  |  | `CHAR(2)` | Relation State of Business Objects |
| `APMProcessUUID` |  | |  |  | `RAW(16)` | Unique Process Identifier |
