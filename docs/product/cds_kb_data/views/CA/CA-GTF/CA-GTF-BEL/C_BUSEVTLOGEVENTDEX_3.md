---
name: C_BUSEVTLOGEVENTDEX_3
description: "This CDS view is used to extract business event header data for: Events logged for external consumption (C2-released) Events logged for local consumption (C1-released) Events logged via direct API This CDS view provides the data to answer the following business questions: Which business event has been logged? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-GTF-BEL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUSEVTLOGEVENTDEX_3')/$value
semantic_en: "This CDS view is used to extract business event header data for: Events logged for external consumption (C2-released) Events logged for local consumption (C1-released) Events logged via direct API This CDS view provides the data to answer the following business questions: Which business event has been logged? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Business Event Header Data (v3) — CDS view tiêu dùng dựa trên I_BusinessEventLogEventDetail."
keywords:
  - "business"
  - "event"
  - "header"
  - "data"
  - "(v3)"
  - "object"
  - "type"
  - "creation"
  - "date"
  - "node"
  - "operation"
tags:
  - CA
  - bo:companycode
  - CA-GTF
  - CA-GTF-BEL
  - component:CA-GTF-BEL
  - consumption-view
  - lob:cross_application components
---
# C_BUSEVTLOGEVENTDEX_3

**This CDS view is used to extract business event header data for: Events logged for external consumption (C2-released) Events logged for local consumption (C1-released) Events logged via direct API This CDS view provides the data to answer the following business questions: Which business event has been logged? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-GTF-BEL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUSEVTLOGEVENTDEX_3')/$value) |

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

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUSEVTLOGEVENTDEX_3')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUSEVTLOGEVENTDEX_3')/$value)*

```abap
@Analytics.technicalName:'CBELEVENTDX3'
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@VDM.viewType: #CONSUMPTION
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ]
@Analytics.dataCategory: #FACT
@Analytics:{
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
        mapping: [
        {
        table: 'bel_d_event',
        role: #MAIN,
        viewElement: ['BusinessEventUUID','SAPObjectType','BusEvtLogCreationDate'],
        tableElement: ['event_guid','bo_type','exec_date']
         },
        {
        table: 'usr21',
        role: #LEFT_OUTER_TO_ONE_JOIN,
        viewElement: ['CreatedByUser'],
        tableElement: ['bname']
        }
         ]
        }
    }
}
@ObjectModel: {
  sapObjectNodeType:{ name: 'BusEvtLogEvent'},
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #C,
     sizeCategory:   #XXL
   }
}
@ObjectModel.modelingPattern: #NONE
@EndUserText.label: 'Business Event Header Data (v3)'
define view entity C_BUSEVTLOGEVENTDEX_3
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
