---
name: I_COLLECTIONSRESUBMISSION
description: Resubmissions in Collections Management
app_component: FIN-FIO-CCD-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLECTIONSRESUBMISSION')/$value
semantic_en: Resubmissions in Collections Management
tags:
  - FIN
  - component:FIN-FIO-CCD-COL-2CL
  - FIN-FIO
  - FIN-FIO-CCD
  - FIN-FIO-CCD-COL
  - FIN-FIO-CCD-COL-2CL
  - interface-view
  - lob:controlling
  - lob:finance
  - metadata-only
---
# I_COLLECTIONSRESUBMISSION

**Resubmissions in Collections Management**

| Property | Value |
|---|---|
| App Component | `FIN-FIO-CCD-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLECTIONSRESUBMISSION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ResubmissionUUID` |  | |  |  | `CHAR(32)` | Resubmission Key |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `CollectionSegment` |  | |  |  | `CHAR(10)` | Collection Segment |
| `ResubmissionDueDate` |  | |  |  | `DATS(8)` | Resubmission Date |
| `CollResubmissionDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `NoCntctUntilResubmsnDateIsReq` |  | |  |  | `CHAR(1)` | Don't Contact Until Resubmission Date |
| `ResubmissionReason` |  | |  |  | `CHAR(4)` | Reason for Resubmission |
| `ResubmissionStatus` |  | |  |  | `CHAR(1)` | Status of Resubmission |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Created At |
| `ChangedBy` |  | |  |  | `CHAR(12)` | Last Changed By |
| `ChangedOnDateTime` |  | |  |  | `DEC(15)` | Last Changed At |
| `ObjectType` |  | |  |  | `CHAR(10)` | Object Type |
| `ObjectKey` |  | |  |  | `CHAR(70)` | Object key |
