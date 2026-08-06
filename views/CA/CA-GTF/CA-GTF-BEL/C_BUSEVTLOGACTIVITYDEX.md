---
name: C_BUSEVTLOGACTIVITYDEX
description: Business Event Activity
app_component: CA-GTF-BEL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUSEVTLOGACTIVITYDEX')/$value
semantic_en: Business Event Activity
tags:
  - CA
  - CA-GTF
  - CA-GTF-BEL
  - component:CA-GTF-BEL
  - consumption-view
  - lob:cross_application components
  - metadata-only
---
# C_BUSEVTLOGACTIVITYDEX

**Business Event Activity**

| Property | Value |
|---|---|
| App Component | `CA-GTF-BEL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUSEVTLOGACTIVITYDEX')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `BusEvtLogBusinessActivity` | `CHAR(32)` | Activity ID |
| `SAPObjectType` | `CHAR(30)` | RAP SOT: SAP Object Type |
| `BusEvtLogCreationDate` | `DATS(8)` | Action Executed Date |
| `BusEvtLogReferenceEventUUID` | `CHAR(32)` | Event GUID |
| `SAPObjectNodeType` | `CHAR(30)` | RAP SOT: SAP Object Node Type |
| `EventOperation` | `CHAR(30)` | Business Event Operation |
| `SAPBusinessObjectNodeKey1` | `CHAR(70)` | Object Key Part (1) |
| `SAPBusinessObjectNodeKey2` | `CHAR(70)` | Object Key Part (2) |
| `SAPBusinessObjectNodeKey3` | `CHAR(70)` | Object Key Part (3) |
| `SAPBusinessObjectNodeKey4` | `CHAR(70)` | Object Key Part (4) |
| `SAPBusinessObjectNodeKey5` | `CHAR(70)` | Business Object Key Part 5 |
| `SAPBusinessObjectNodeKey6` | `CHAR(70)` | Object Key Part (6) |
| `SAPBusinessObjectNodeKey7` | `CHAR(70)` | Object Key Part (7) |
| `SAPBusinessObjectNodeKey8` | `CHAR(70)` | Object Key Part (8) |
| `CreatedByUser` | `CHAR(12)` | Users Who Executed the Action |
| `BusEvtLogCreationDateTime` | `DEC(21)` | Action Execution Time Stamp |
| `BusinessEventLogLogicalSystem` | `CHAR(10)` | Logical System |
| `BusEvtLogTransactionID` | `CHAR(32)` | Identifies the session in which a business event was created |
| `BusEvtLogLastChangedDateTime` | `DEC(15)` | Timestamp of Last Change |
| `IsTechnicalUser` | `CHAR(1)` | Is Technical User |
| `BusEvtLogUserInteractionType` | `CHAR(2)` | Application Type |
| `BusEvtLgUsrIntactnTypeValue` | `CHAR(100)` | Application ID |
| `SAPBusinessObjectNodeKey1Name` | `CHAR(30)` | Key1 Name |
| `SAPBusinessObjectNodeKey2Name` | `CHAR(30)` | Key2 Name |
| `SAPBusinessObjectNodeKey3Name` | `CHAR(30)` | Key3 Name |
| `SAPBusinessObjectNodeKey4Name` | `CHAR(30)` | Key4 Name |
| `SAPBusinessObjectNodeKey5Name` | `CHAR(30)` | Key5 Name |
| `SAPBusinessObjectNodeKey6Name` | `CHAR(30)` | Key6 Name |
| `SAPBusinessObjectNodeKey7Name` | `CHAR(30)` | Key7 Name |
| `SAPBusinessObjectNodeKey8Name` | `CHAR(30)` | Key8 Name |
| `BusinessEventLogSource` | `CHAR(1)` |  |
