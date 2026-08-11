---
name: C_OUTPUTREQUESTITEMDEX
description: "This CDS view provides output request item data for data extraction. This CDS view provides the data to answer the following business questions: How much output is printed? How much EDI output is processed for purchase orders? What's the application object type? What's the status of the output request item? What's the document type? Which output channel is used? What's the dispatch time? When was the output request item created? Was the output request item changed? When was the output request item changed last? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-GTF-OC
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_OUTPUTREQUESTITEMDEX')/$value
semantic_en: "This CDS view provides output request item data for data extraction. This CDS view provides the data to answer the following business questions: How much output is printed? How much EDI output is processed for purchase orders? What's the application object type? What's the status of the output request item? What's the document type? Which output channel is used? What's the dispatch time? When was the output request item created? Was the output request item changed? When was the output request item changed last? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Output Request Basic Extraction Data — CDS view tiêu dùng dựa trên apoc_d_or_item."
keywords:
  - "output"
  - "request"
  - "basic"
  - "extraction"
  - "data"
  - "item"
  - "control"
  - "appl"
  - "object"
  - "type"
  - "application"
  - "status"
tags:
  - CA
  - bo:companycode
  - CA-GTF
  - CA-GTF-OC
  - component:CA-GTF-OC
  - consumption-view
  - document
  - lob:cross_application components
  - order
  - purchase-order
  - bo:purchaseorder
---
# C_OUTPUTREQUESTITEMDEX

**This CDS view provides output request item data for data extraction. This CDS view provides the data to answer the following business questions: How much output is printed? How much EDI output is processed for purchase orders? What's the application object type? What's the status of the output request item? What's the document type? Which output channel is used? What's the dispatch time? When was the output request item created? Was the output request item changed? When was the output request item changed last? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-GTF-OC` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_OUTPUTREQUESTITEMDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OutputRequestItemUUID` | ✓ | |  | `db_key` | `RAW(16)` | NodeID |
| `OutputControlApplObjectType` |  | |  | `appl_object_type` | `CHAR(30)` | Application Object Type (Business Object) |
| `OutputControlApplicationObject` |  | |  | `appl_object_id` | `CHAR(255)` | Application Object ID |
| `OutputRequestItem` |  | |  | `item_id` | `NUMC(6)` | ID of an Output Request Item |
| `OutputRequestItemStatus` |  | |  | `status` | `CHAR(1)` | Output Request Output Status |
| `OutputDocumentType` |  | |  | `output_type` | `CHAR(30)` | Output Type |
| `OutputChannel` |  | |  | `channel` | `CHAR(5)` | Output Channel |
| `IsChangeDocument` |  | |  | `change_indicator` | `CHAR(1)` | Change Indicator |
| `DispatchTime` |  | |  | `dispatch_time` | `CHAR(1)` | Dispatch Time |
| `CreationDateTime` |  | |  | `crea_date_time` | `DEC(21)` | Creation Date/Time |
| `LastChangeDateTime` |  | |  | `lchg_date_time` | `DEC(21)` | Last Change Date/Time |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_OUTPUTREQUESTITEMDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_OUTPUTREQUESTITEMDEX')/$value)*

```abap
@AbapCatalog: { sqlViewName:            'CORIDEX',
                compiler.compareFilter: true }
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl: { personalData.blocking: #NOT_REQUIRED,
                  authorizationCheck:    #PRIVILEGED_ONLY }
@ObjectModel: { usageType.serviceQuality: #B,
                usageType.sizeCategory:   #XXL,
                usageType.dataClass:      #TRANSACTIONAL,
                modelingPattern:          #TRANSACTIONAL_QUERY,
                supportedCapabilities:    [ #EXTRACTION_DATA_SOURCE ],
                sapObjectNodeType.name:   'OutputRequestItem' }
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Output Request Basic Extraction Data'
//Extraction
@Analytics: { dataExtraction.enabled:                 true,  
              dataExtraction.delta.changeDataCapture: { automatic: true } }
//C1 Release
@VDM: { viewType:                #CONSUMPTION,
        lifecycle.contract.type: #PUBLIC_LOCAL_API }

define view C_OutputRequestItemDEX    
  as select from apoc_d_or_item
{
  key db_key           as OutputRequestItemUUID,
      appl_object_type as OutputControlApplObjectType,
      appl_object_id   as OutputControlApplicationObject,
      item_id          as OutputRequestItem,
      status           as OutputRequestItemStatus,
      output_type      as OutputDocumentType,
      channel          as OutputChannel,
      change_indicator as IsChangeDocument,
      dispatch_time    as DispatchTime,
      crea_date_time   as CreationDateTime,
      lchg_date_time   as LastChangeDateTime
}
```
