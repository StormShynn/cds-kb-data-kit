---
name: C_BUEVLGEVTFULLPYLDJSONDEX_2
description: This CDS view provides full business event data (payload) in JSON format. This CDS view provides the data to answer the following business questions: What is the full business data contained in the event? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: CA-GTF-BEL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUEVLGEVTFULLPYLDJSONDEX_2')/$value
semantic_en: This CDS view provides full business event data (payload) in JSON format. This CDS view provides the data to answer the following business questions: What is the full business data contained in the event? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - CA
  - bo:companycode
  - CA-GTF
  - CA-GTF-BEL
  - component:CA-GTF-BEL
  - consumption-view
  - lob:cross_application components
  - metadata-only
---
# C_BUEVLGEVTFULLPYLDJSONDEX_2

**This CDS view provides full business event data (payload) in JSON format. This CDS view provides the data to answer the following business questions: What is the full business data contained in the event? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-GTF-BEL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BUEVLGEVTFULLPYLDJSONDEX_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessEventUUID` |  | |  |  | `CHAR(32)` | Event GUID |
| `SAPObjectType` |  | |  |  | `CHAR(30)` | RAP SOT: SAP Object Type |
| `BusEvtLogLastChangedDateTime` |  | |  |  | `DEC(15)` | Timestamp of Last Change |
