---
name: I_ENTPROJELMNTLONGDESC_2
description: "This CDS view retrieves long text descriptions associated with enterprise project elements. This CDS view provides the data to answer the following business questions: What is the detailed description of a specific project element? Which project elements have extended documentation or notes? How can I access comprehensive textual information for project planning and execution? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTPROJELMNTLONGDESC_2')/$value
semantic_en: "This CDS view retrieves long text descriptions associated with enterprise project elements. This CDS view provides the data to answer the following business questions: What is the detailed description of a specific project element? Which project elements have extended documentation or notes? How can I access comprehensive textual information for project planning and execution? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - PPM
  - bo:companycode
  - component:PPM-SCL-STR
  - document
  - interface-view
  - plan
  - PPM-SCL
  - PPM-SCL-STR
  - project
  - metadata-only
---
# I_ENTPROJELMNTLONGDESC_2

**This CDS view retrieves long text descriptions associated with enterprise project elements. This CDS view provides the data to answer the following business questions: What is the detailed description of a specific project element? Which project elements have extended documentation or notes? How can I access comprehensive textual information for project planning and execution? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTPROJELMNTLONGDESC_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EntProjElmntLongTextUUID` |  | |  |  | `RAW(16)` | Entity Guid |
| `ProjectElementUUID` |  | |  |  | `RAW(16)` | Projectelement Guid |
| `LongText` |  | |  |  | `STRI(5000)` | Comments |
| `ProjectUUID` |  | |  |  | `RAW(16)` | Project GUID |
