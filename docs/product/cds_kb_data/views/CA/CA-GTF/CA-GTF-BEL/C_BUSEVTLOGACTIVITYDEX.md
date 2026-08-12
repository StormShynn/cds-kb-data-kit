---
name: C_BUSEVTLOGACTIVITYDEX
description: "This CDS view provides full business event data (payload) in JSON format. This CDS view provides the answer to these business questions: What is the full business data contained in the event? The CDS view supports #EXTRACTION_DATA_SOURCE."
app_component: CA-GTF-BEL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUSEVTLOGACTIVITYDEX')/$value
semantic_en: "This CDS view provides full business event data (payload) in JSON format. This CDS view provides the answer to these business questions: What is the full business data contained in the event? The CDS view supports #EXTRACTION_DATA_SOURCE."
semantic_vi: "Business Event Activity — CDS view tiêu dùng dựa trên P_BusinessEventLogActivity."
keywords:
  - "business"
  - "event"
  - "activity"
  - "object"
  - "type"
  - "creation"
  - "date"
  - "reference"
  - "node"
tags:
  - CA
  - bo:purchaseorder
  - CA-GTF
  - CA-GTF-BEL
  - component:CA-GTF-BEL
  - consumption-view
  - lob:cross_application components
---
# C_BUSEVTLOGACTIVITYDEX

**This CDS view provides full business event data (payload) in JSON format. This CDS view provides the answer to these business questions: What is the full business data contained in the event? The CDS view supports #EXTRACTION_DATA_SOURCE.**

| Property | Value |
|---|---|
| App Component | `CA-GTF-BEL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUSEVTLOGACTIVITYDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusEvtLogBusinessActivity` | ✓ | |  |  | `CHAR(32)` | Activity ID |
| `SAPObjectType` | ✓ | |  |  | `CHAR(30)` | RAP SOT: SAP Object Type |
| `BusEvtLogCreationDate` | ✓ | |  |  | `DATS(8)` | Action Executed Date |
| `BusEvtLogReferenceEventUUID` |  | |  |  | `CHAR(32)` | Event GUID |
| `SAPObjectNodeType` |  | |  |  | `CHAR(30)` | RAP SOT: SAP Object Node Type |
| `EventOperation` |  | |  |  | `CHAR(30)` | Business Event Operation |
| `SAPBusinessObjectNodeKey1` |  | |  |  | `CHAR(70)` | Object Key Part (1) |
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
| `BusEvtLogTransactionID` |  | |  |  | `CHAR(32)` | Identifies the session in which a business event was created |
| `BusEvtLogLastChangedDateTime` |  | |  |  | `DEC(15)` | Timestamp of Last Change |
| `IsTechnicalUser` |  | |  |  | `CHAR(1)` | Is Technical User |
| `BusEvtLogUserInteractionType` |  | |  |  | `CHAR(2)` | Application Type |
| `BusEvtLgUsrIntactnTypeValue` |  | |  |  | `CHAR(100)` | Application ID |
| `SAPBusinessObjectNodeKey1Name` |  | |  |  | `CHAR(30)` | Key1 Name |
| `SAPBusinessObjectNodeKey2Name` |  | |  |  | `CHAR(30)` | Key2 Name |
| `SAPBusinessObjectNodeKey3Name` |  | |  |  | `CHAR(30)` | Key3 Name |
| `SAPBusinessObjectNodeKey4Name` |  | |  |  | `CHAR(30)` | Key4 Name |
| `SAPBusinessObjectNodeKey5Name` |  | |  |  | `CHAR(30)` | Key5 Name |
| `SAPBusinessObjectNodeKey6Name` |  | |  |  | `CHAR(30)` | Key6 Name |
| `SAPBusinessObjectNodeKey7Name` |  | |  |  | `CHAR(30)` | Key7 Name |
| `SAPBusinessObjectNodeKey8Name` |  | |  |  | `CHAR(30)` | Key8 Name |
| `BusinessEventLogSource` |  | |  |  | `CHAR(1)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUSEVTLOGACTIVITYDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUSEVTLOGACTIVITYDEX')/$value)*

```abap
@Analytics.technicalName:'CBELEVTACTDX'
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
        table: 'BEL_D_ACTIVITY',
        role: #MAIN,
        viewElement: ['BusEvtLogBusinessActivity','SAPObjectType','BusEvtLogCreationDate' ],
        tableElement: ['activity_id','bo_type','exec_date' ]

         },

        {
        table: 'BEL_D_EVENT',
        role: #LEFT_OUTER_TO_ONE_JOIN,
        viewElement: ['BusEvtLogReferenceEventUUID','SAPObjectType','BusEvtLogCreationDate'],
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
  sapObjectNodeType:{ name: 'BusinessEventLogActivity'},
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #C,
     sizeCategory:   #XXL
   }
}
@ObjectModel.modelingPattern: #NONE
@EndUserText.label: 'Business Event Activity'
define view entity C_BUSEVTLOGACTIVITYDEX
  as select from P_BusinessEventLogActivity
{
  key BusEvtLogBusinessActivity,
  key SAPObjectType,
  key BusEvtLogCreationDate,
      BusEvtLogReferenceEventUUID,
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
      BusEvtLogTransactionID,
      BusEvtLogLastChangedDateTime,
      IsTechnicalUser,
      BusEvtLogUserInteractionType,
      BusEvtLgUsrIntactnTypeValue,
      SAPBusinessObjectNodeKey1Name,
      SAPBusinessObjectNodeKey2Name,
      SAPBusinessObjectNodeKey3Name,
      SAPBusinessObjectNodeKey4Name,
      SAPBusinessObjectNodeKey5Name,
      SAPBusinessObjectNodeKey6Name,
      SAPBusinessObjectNodeKey7Name,
      SAPBusinessObjectNodeKey8Name,
      BusinessEventLogSource 

}
```
