---
name: C_BUSEVTLOGEVENTDEX_3
description: Business Event Header Data (v3)
app_component: CA-GTF-BEL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUSEVTLOGEVENTDEX_3')/$value
semantic_en: Business Event Header Data (v3)
tags:
  - CA
  - CA-GTF
  - CA-GTF-BEL
  - component:CA-GTF-BEL
  - consumption-view
  - lob:cross_application components
  - metadata-only
---
# C_BUSEVTLOGEVENTDEX_3

**Business Event Header Data (v3)**

| Property | Value |
|---|---|
| App Component | `CA-GTF-BEL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUSEVTLOGEVENTDEX_3')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessEventUUID` |  | |  |  | `CHAR(32)` | Event GUID |
| `SAPObjectType` |  | |  |  | `CHAR(30)` | RAP SOT: SAP Object Type |
| `BusEvtLogCreationDate` |  | |  |  | `DATS(8)` | Action Executed Date |
| `SAPObjectNodeType` |  | |  |  | `CHAR(30)` | RAP SOT: SAP Object Node Type |
| `EventOperation` |  | |  |  | `CHAR(30)` | Business Event Operation |
| `SAPBusinessObjectNodeKey1` |  | |  |  | `CHAR(70)` | Business Object Key Part 1 in Char |
| `SAPBusinessObjectNodeKey2` |  | |  |  | `CHAR(70)` | Object Key Part (2) |
| `SAPBusinessObjectNodeKey3` |  | |  |  | `CHAR(70)` | Object Key Part (3) |
| `SAPBusinessObjectNodeKey4` |  | |  |  | `CHAR(70)` | Object Key Part (4) |
| `SAPBusinessObjectNodeKey5` |  | |  |  | `CHAR(70)` | Business Object Key Part 5 |
| `SAPBusinessObjectNodeKey6` |  | |  |  | `CHAR(70)` | Object Key Part (6) |
| `SAPBusinessObjectNodeKey7` |  | |  |  | `CHAR(70)` | Object Key Part (7) |
| `SAPBusinessObjectNodeKey8` |  | |  |  | `CHAR(70)` | Object Key Part (8) |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Users Who Executed the Action |
| `BusEvtLogCreationDateTime` |  | |  |  | `DEC(21)` | Action Execution Time Stamp |
| `BusinessEventLogLogicalSystem` |  | |  |  | `CHAR(10)` | Logical System |
| `BusEvtLogIsDeleted` |  | |  |  | `CHAR(1)` | Deletion Indicator |
| `BusinessEventLogEventVersion` |  | |  |  | `NUMC(4)` | Business Event Version |
| `BusEvtLogTransactionID` |  | |  |  | `CHAR(32)` | Identifies the session in which a business event was created |
| `BusEvtLogLastChangedDateTime` |  | |  |  | `DEC(15)` | Timestamp of Last Change |
| `IsTechnicalUser` |  | |  |  | `CHAR(1)` | Is Technical User |
| `BusinessEventLogSource` |  | |  |  | `CHAR(1)` | Business Event Source |
| `EventProducerNamespace` |  | |  |  | `CHAR(30)` | Producer Event Namespace |
| `BusEvtLogEventHasFullPayload` |  | |  |  | `CHAR(1)` | Has All Business Event Data |
| `BusEvtLogUserInteractionType` |  | |  |  | `CHAR(2)` | Application Type |
| `BusEvtLgUsrIntactnTypeValue` |  | |  |  | `CHAR(100)` | Application ID |
| `ChangeDocument` |  | |  |  | `CHAR(10)` | Number of the Change Document |
| `ChangeDocItemChangeType` |  | |  |  | `CHAR(1)` | Change Indicator of Change Document |
| `SAPBusinessObjectNodeKey1Name` |  | |  |  | `CHAR(30)` | Key1 Name |
| `SAPBusinessObjectNodeKey2Name` |  | |  |  | `CHAR(30)` | Key2 Name |
| `SAPBusinessObjectNodeKey3Name` |  | |  |  | `CHAR(30)` | Key3 Name |
| `SAPBusinessObjectNodeKey4Name` |  | |  |  | `CHAR(30)` | Key4 Name |
| `SAPBusinessObjectNodeKey5Name` |  | |  |  | `CHAR(30)` | Key5 Name |
| `SAPBusinessObjectNodeKey6Name` |  | |  |  | `CHAR(30)` | Key6 Name |
| `SAPBusinessObjectNodeKey7Name` |  | |  |  | `CHAR(30)` | Key7 Name |
| `SAPBusinessObjectNodeKey8Name` |  | |  |  | `CHAR(30)` | Key8 Name |
| `BusEvtLogReferenceEventUUID` |  | |  |  | `CHAR(32)` | Event GUID |
| `BusEvtLogBusinessActivity` |  | |  |  | `CHAR(32)` | Activity ID |
