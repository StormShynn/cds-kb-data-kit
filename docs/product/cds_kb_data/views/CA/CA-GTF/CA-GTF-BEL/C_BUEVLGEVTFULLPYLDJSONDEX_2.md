---
name: C_BUEVLGEVTFULLPYLDJSONDEX_2
description: "This CDS view provides full business event data (payload) in JSON format. This CDS view provides the data to answer the following business questions: What is the full business data contained in the event? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-GTF-BEL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUEVLGEVTFULLPYLDJSONDEX_2')/$value
semantic_en: "This CDS view provides full business event data (payload) in JSON format. This CDS view provides the data to answer the following business questions: What is the full business data contained in the event? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Business Event Data v2 — CDS view tiêu dùng (transactional data) dựa trên I_BusEvtLogEvtPayload."
keywords:
  - "business"
  - "event"
  - "data"
  - "object"
  - "type"
  - "payload"
  - "string"
  - "last"
  - "changed"
  - "date"
  - "time"
tags:
  - CA
  - bo:companycode
  - CA-GTF
  - CA-GTF-BEL
  - component:CA-GTF-BEL
  - consumption-view
  - lob:cross_application components
  - bo:salesorder
---
# C_BUEVLGEVTFULLPYLDJSONDEX_2

**This CDS view provides full business event data (payload) in JSON format. This CDS view provides the data to answer the following business questions: What is the full business data contained in the event? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-GTF-BEL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUEVLGEVTFULLPYLDJSONDEX_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessEventUUID` | ✓ | |  |  | `CHAR(32)` | Event GUID |
| `SAPObjectType` | ✓ | |  |  | `CHAR(30)` | RAP SOT: SAP Object Type |
| `BusEvtLogPayloadJSONString` |  | |  |  |  |  |
| `BusEvtLogLastChangedDateTime` |  | |  |  | `DEC(15)` | Timestamp of Last Change |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUEVLGEVTFULLPYLDJSONDEX_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUEVLGEVTFULLPYLDJSONDEX_2')/$value)*

```abap
@Analytics.technicalName: 'CBELFULLPAYLD4'
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@VDM.viewType: #CONSUMPTION
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataCategory: #FACT
@Analytics:{
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
        automatic: true
        }
    }
}
@ObjectModel: {
   sapObjectNodeType:{name: 'BusEvtLogEventPayload'},
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #A,
     sizeCategory:   #XXL
   },

   supportedCapabilities: [#EXTRACTION_DATA_SOURCE]
}
@ObjectModel.modelingPattern: #NONE
@EndUserText.label: 'Business Event Data v2'


define view entity C_BuEvLgEvtFullPyldJSONDEX_2 as select from I_BusEvtLogEvtPayload
{
  key BusinessEventUUID,
  key SAPObjectType,
      BusEvtLogPayloadJSONString,
      BusEvtLogLastChangedDateTime
      
}
```
