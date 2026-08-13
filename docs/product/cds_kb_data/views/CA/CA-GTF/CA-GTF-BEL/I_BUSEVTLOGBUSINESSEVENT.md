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
| `BusinessEventUUID` | ✓ | |  |  |  |  |
| `SAPObjectType` | ✓ | |  |  |  |  |
| `BusEvtLogCreationDate` | ✓ | |  |  |  |  |
| `SAPObjectNodeType` |  | |  |  |  |  |
| `EventOperation` |  | |  |  |  |  |
| `SAPBusinessObjectNodeKey1` |  | |  |  |  |  |
| `SAPBusinessObjectNodeKey2` |  | |  |  |  |  |
| `SAPBusinessObjectNodeKey3` |  | |  |  |  |  |
| `SAPBusinessObjectNodeKey4` |  | |  |  |  |  |
| `SAPBusinessObjectNodeKey5` |  | |  |  |  |  |
| `SAPBusinessObjectNodeKey6` |  | |  |  |  |  |
| `SAPBusinessObjectNodeKey7` |  | |  |  |  |  |
| `SAPBusinessObjectNodeKey8` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `BusEvtLogCreationDateTime` |  | |  |  |  |  |
| `BusinessEventLogLogicalSystem` |  | |  |  |  |  |
| `BusEvtLogIsDeleted` |  | |  |  |  |  |
| `BusinessEventLogEventVersion` |  | |  |  |  |  |
| `BusEvtLogTransactionID` |  | |  |  |  |  |
| `BusEvtLogLastChangedDateTime` |  | |  |  |  |  |
| `IsTechnicalUser` |  | |  |  |  |  |
| `BusinessEventLogSource` |  | |  |  |  |  |
| `EventProducerNamespace` |  | |  |  |  |  |
| `BusEvtLogEventHasFullPayload` |  | |  |  |  |  |
| `BusEvtLogUserInteractionType` |  | |  |  |  |  |
| `BusEvtLgUsrIntactnTypeValue` |  | |  |  |  |  |
| `ChangeDocument` |  | |  |  |  |  |
| `ChangeDocItemChangeType` |  | |  |  |  |  |
| `SAPBusinessObjectNodeKey1Name` |  | |  |  |  |  |
| `SAPBusinessObjectNodeKey2Name` |  | |  |  |  |  |
| `SAPBusinessObjectNodeKey3Name` |  | |  |  |  |  |
| `SAPBusinessObjectNodeKey4Name` |  | |  |  |  |  |
| `SAPBusinessObjectNodeKey5Name` |  | |  |  |  |  |
| `SAPBusinessObjectNodeKey6Name` |  | |  |  |  |  |
| `SAPBusinessObjectNodeKey7Name` |  | |  |  |  |  |
| `SAPBusinessObjectNodeKey8Name` |  | |  |  |  |  |
| `BusEvtLogReferenceEventUUID` |  | |  |  |  |  |
| `BusEvtLogBusinessActivity` |  | |  |  |  |  |

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
