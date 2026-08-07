---
name: I_APMOBJECTLIST
description: APM Object List
app_component: FIN-FSCM-PF
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_APMOBJECTLIST')/$value
semantic_en: APM Object List
tags:
  - FIN
  - component:FIN-FSCM-PF
  - FIN-FSCM
  - FIN-FSCM-PF
  - interface-view
  - lob:finance
  - metadata-only
---
# I_APMOBJECTLIST

**APM Object List**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-PF` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_APMOBJECTLIST')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `APMObjectListUUID` |  | |  |  | `RAW(16)` | Globally Unique Identifier |
| `APMObjectListDate` |  | |  |  | `DATS(8)` | Object List Date |
| `APMObjectListNumber` |  | |  |  | `NUMC(12)` | Object List Number from Number Range (Secondary Key) |
| `APMObjectListType` |  | |  |  | `CHAR(6)` | Object List Type |
| `APMReferenceFileName` |  | |  |  | `CHAR(255)` | External Filename Reference of Object List |
| `APMReceiverConfirmationCode` |  | |  |  | `CHAR(6)` | External Status |
| `APMFormat` |  | |  |  | `CHAR(10)` | Format |
| `APMMedium` |  | |  |  | `CHAR(4)` | Medium |
| `APMChannel` |  | |  |  | `CHAR(10)` | Channel |
| `PaymentFileMsgIdentification` |  | |  |  | `CHAR(35)` | External Reference ID (File or Message) |
| `APMMessageCreationDateTime` |  | |  |  | `CHAR(14)` | File creation Timestamp (external) |
| `APMObjectListProcessStatusCode` |  | |  |  | `CHAR(3)` | Technical Status of Object List |
| `APMObjListFileHandlerStartDate` |  | |  |  | `DATS(8)` | Start Date of the File Handler Process |
| `APMObjListFileHandlerStartTime` |  | |  |  | `TIMS(6)` | Start Time of the File Handler Process |
| `APMObjListFileHandlerEndDate` |  | |  |  | `DATS(8)` | End Date of the File Handler Process |
| `APMObjListFileHandlerEndTime` |  | |  |  | `TIMS(6)` | End Time of the File Handler Process |
| `APMGroupingID` |  | |  |  | `CHAR(22)` | Grouping Master Data Object ID |
| `APMPlannedProcessingDate` |  | |  |  | `DATS(8)` | Planned Processing Date of Object List |
| `APMPlannedProcessingTime` |  | |  |  | `TIMS(6)` | Planned Processing Time of the Object List |
| `HierarchyTreeType` |  | |  |  | `CHAR(4)` | DMEE: tree type |
| `HierarchyTree` |  | |  |  | `CHAR(30)` | DMEE: unique description for a DMEE format tree |
| `APMGroupProcessStatusCode` |  | |  |  | `CHAR(3)` | Group Processing Status |
