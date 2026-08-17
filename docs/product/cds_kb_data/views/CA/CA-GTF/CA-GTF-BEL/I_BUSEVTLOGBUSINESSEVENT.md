---
name: I_BUSEVTLOGBUSINESSEVENT
description: "Busevtlogbusinessevent"
semantic_vi: "View Busevtlogbusinessevent CDS hiển thị dữ liệu nhật ký sự kiện kinh doanh, có thể được sử dụng để phân tích và theo dõi các sự kiện kinh doanh và hoạt động trong hệ thống."
keywords:
  - "business event"
  - "sự kiện kinh doanh"
  - "business event log"
  - "nghiệp vụ kinh doanh"
  - "event operation"
  - "sự kiện hoạt động"
  - "sap business object"
  - "mục tiêu kinh doanh sap"
  - "ca-gtf-bel"
  - "cross-application components"
semantic_en: "The Busevtlogbusinessevent CDS view exposes business event log data, which can be used to analyze and track business events and operations in the system."
app_component: CA-GTF-BEL
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-BEL
  - interface-view
  - component:CA-GTF-BEL
  - lob:Cross-Application Components
---
# I_BUSEVTLOGBUSINESSEVENT

**Busevtlogbusinessevent**

| Property | Value |
|---|---|
| App Component | `CA-GTF-BEL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessEventUUID` | ✓ | |  |  | `CHAR(32)` | Event GUID |
| `SAPObjectType` | ✓ | |  |  | `CHAR(30)` | RAP SOT: SAP Object Type |
| `BusEvtLogCreationDate` | ✓ | |  |  | `DATS(8)` | Action Executed Date |
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

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #COMPOSITE
@ObjectModel: {
   sapObjectNodeType:{ name: 'BusEvtLogEvent'},
   representativeKey: 'BusinessEventUUID',
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #C,
     sizeCategory:   #XXL
   }
}
@EndUserText.label: 'Business Event Header Data'
define view entity I_BusEvtLogBusinessEvent
 as select from I_BusinessEventLogEventDetail
{
  key BusinessEventUUID,
  key SAPObjectType,
  key BusEvtLogCreationDate,
      SAPObjectNodeType,
      EventOperation,
      SAPBusinessObjectNodeKey1,
      SAPBusinessObjectNodeKey2,
      SAPBusinessObjectNodeKey3,
      SAPBusinessObjectNodeKey4,
      SAPBusinessObjectNodeKey5,
      SAPBusinessObjectNodeKey6,
      SAPBusinessObjectNodeKey7,
      SAPBusinessObjectNodeKey8,
      CreatedByUser,
      BusEvtLogCreationDateTime,
      BusinessEventLogLogicalSystem,
      BusEvtLogIsDeleted,
      BusinessEventLogEventVersion,
      BusEvtLogTransactionID,
      BusEvtLogLastChangedDateTime,
      IsTechnicalUser,
      BusinessEventLogSource,
      EventProducerNamespace,
      BusEvtLogEventHasFullPayload,
      BusEvtLogUserInteractionType,
      BusEvtLgUsrIntactnTypeValue,
      ChangeDocument,
      ChangeDocItemChangeType, 
      SAPBusinessObjectNodeKey1Name,
      SAPBusinessObjectNodeKey2Name,
      SAPBusinessObjectNodeKey3Name,
      SAPBusinessObjectNodeKey4Name,
      SAPBusinessObjectNodeKey5Name,
      SAPBusinessObjectNodeKey6Name,
      SAPBusinessObjectNodeKey7Name,
      SAPBusinessObjectNodeKey8Name,
      BusEvtLogReferenceEventUUID,  
      BusEvtLogBusinessActivity
      
      
}
```
