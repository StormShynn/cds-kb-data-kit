---
name: I_BUSEVTLOGBUSINESSEVENT
description: Busevtlogbusinessevent
app_component: CA-GTF-BEL
software_component: SAP_BASIS
release_state: released
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
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BusinessEventUUID` | `BusinessEventUUID` |
| key `SAPObjectType` | `SAPObjectType` |
| key `BusEvtLogCreationDate` | `BusEvtLogCreationDate` |
| `SAPObjectNodeType` | `SAPObjectNodeType` |
| `EventOperation` | `EventOperation` |
| `SAPBusinessObjectNodeKey1` | `SAPBusinessObjectNodeKey1` |
| `SAPBusinessObjectNodeKey2` | `SAPBusinessObjectNodeKey2` |
| `SAPBusinessObjectNodeKey3` | `SAPBusinessObjectNodeKey3` |
| `SAPBusinessObjectNodeKey4` | `SAPBusinessObjectNodeKey4` |
| `SAPBusinessObjectNodeKey5` | `SAPBusinessObjectNodeKey5` |
| `SAPBusinessObjectNodeKey6` | `SAPBusinessObjectNodeKey6` |
| `SAPBusinessObjectNodeKey7` | `SAPBusinessObjectNodeKey7` |
| `SAPBusinessObjectNodeKey8` | `SAPBusinessObjectNodeKey8` |
| `CreatedByUser` | `CreatedByUser` |
| `BusEvtLogCreationDateTime` | `BusEvtLogCreationDateTime` |
| `BusinessEventLogLogicalSystem` | `BusinessEventLogLogicalSystem` |
| `BusEvtLogIsDeleted` | `BusEvtLogIsDeleted` |
| `BusinessEventLogEventVersion` | `BusinessEventLogEventVersion` |
| `BusEvtLogTransactionID` | `BusEvtLogTransactionID` |
| `BusEvtLogLastChangedDateTime` | `BusEvtLogLastChangedDateTime` |
| `IsTechnicalUser` | `IsTechnicalUser` |
| `BusinessEventLogSource` | `BusinessEventLogSource` |
| `EventProducerNamespace` | `EventProducerNamespace` |
| `BusEvtLogEventHasFullPayload` | `BusEvtLogEventHasFullPayload` |
| `BusEvtLogUserInteractionType` | `BusEvtLogUserInteractionType` |
| `BusEvtLgUsrIntactnTypeValue` | `BusEvtLgUsrIntactnTypeValue` |
| `ChangeDocument` | `ChangeDocument` |
| `ChangeDocItemChangeType` | `ChangeDocItemChangeType` |
| `SAPBusinessObjectNodeKey1Name` | `SAPBusinessObjectNodeKey1Name` |
| `SAPBusinessObjectNodeKey2Name` | `SAPBusinessObjectNodeKey2Name` |
| `SAPBusinessObjectNodeKey3Name` | `SAPBusinessObjectNodeKey3Name` |
| `SAPBusinessObjectNodeKey4Name` | `SAPBusinessObjectNodeKey4Name` |
| `SAPBusinessObjectNodeKey5Name` | `SAPBusinessObjectNodeKey5Name` |
| `SAPBusinessObjectNodeKey6Name` | `SAPBusinessObjectNodeKey6Name` |
| `SAPBusinessObjectNodeKey7Name` | `SAPBusinessObjectNodeKey7Name` |
| `SAPBusinessObjectNodeKey8Name` | `SAPBusinessObjectNodeKey8Name` |
| `BusEvtLogReferenceEventUUID` | `BusEvtLogReferenceEventUUID` |
| `BusEvtLogBusinessActivity` | `BusEvtLogBusinessActivity` |

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
