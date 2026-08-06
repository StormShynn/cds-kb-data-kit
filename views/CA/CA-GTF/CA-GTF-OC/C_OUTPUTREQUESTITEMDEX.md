---
name: C_OUTPUTREQUESTITEMDEX
description: This CDS view provides output request item data for data extraction. This CDS view provides the data to answer the following business questions: How much output is printed? How much EDI output is processed for purchase orders? What's the application object type? What's the status of the output request item? What's the document type? Which output channel is used? What's the dispatch time? When was the output request item created? Was the output request item changed? When was the output request item changed last? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: CA-GTF-OC
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_OUTPUTREQUESTITEMDEX')/$value
semantic_en: This CDS view provides output request item data for data extraction. This CDS view provides the data to answer the following business questions: How much output is printed? How much EDI output is processed for purchase orders? What's the application object type? What's the status of the output request item? What's the document type? Which output channel is used? What's the dispatch time? When was the output request item created? Was the output request item changed? When was the output request item changed last? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
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
  - metadata-only
---
# C_OUTPUTREQUESTITEMDEX

**This CDS view provides output request item data for data extraction. This CDS view provides the data to answer the following business questions: How much output is printed? How much EDI output is processed for purchase orders? What's the application object type? What's the status of the output request item? What's the document type? Which output channel is used? What's the dispatch time? When was the output request item created? Was the output request item changed? When was the output request item changed last? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-GTF-OC` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_OUTPUTREQUESTITEMDEX')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `OutputRequestItemUUID` | `RAW(16)` | NodeID |
| `OutputControlApplObjectType` | `CHAR(30)` | Application Object Type (Business Object) |
| `OutputControlApplicationObject` | `CHAR(255)` | Application Object ID |
| `OutputRequestItem` | `NUMC(6)` | Output Request Item ID |
| `OutputRequestItemStatus` | `CHAR(1)` | Output Request Output Status |
| `OutputDocumentType` | `CHAR(30)` | Output Type |
| `OutputChannel` | `CHAR(5)` | Output Channel |
| `IsChangeDocument` | `CHAR(1)` | Change Indicator |
| `DispatchTime` | `CHAR(1)` | Dispatch Time |
| `CreationDateTime` | `DEC(21)` | Creation Date/Time |
| `LastChangeDateTime` | `DEC(21)` | Last Change Date/Time |
