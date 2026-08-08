---
name: I_BUSINESSPROCESS
description: "This CDS view is designed to provide a structured representation of business processes within a controlling area. It serves as a master data source for business processes, enabling data extraction and analytical operations. The view includes associations to related texts and controlling area information, facilitating comprehensive insights into business processes. This CDS view provides the data to answer the following business questions: What are the distinct business processes within a specific controlling area? How can I access the textual descriptions and details of business processes for a given controlling area? What are the current valid business processes based on the system date? How can I retrieve associated controlling area information for a particular business process? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSINESSPROCESS')/$value
semantic_en: "This CDS view is designed to provide a structured representation of business processes within a controlling area. It serves as a master data source for business processes, enabling data extraction and analytical operations. The view includes associations to related texts and controlling area information, facilitating comprehensive insights into business processes. This CDS view provides the data to answer the following business questions: What are the distinct business processes within a specific controlling area? How can I access the textual descriptions and details of business processes for a given controlling area? What are the current valid business processes based on the system date? How can I retrieve associated controlling area information for a particular business process? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FI
  - bo:businesspartner
  - component:FI-GL-IS-2CL
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
  - master-data
  - metadata-only
---
# I_BUSINESSPROCESS

**This CDS view is designed to provide a structured representation of business processes within a controlling area. It serves as a master data source for business processes, enabling data extraction and analytical operations. The view includes associations to related texts and controlling area information, facilitating comprehensive insights into business processes. This CDS view provides the data to answer the following business questions: What are the distinct business processes within a specific controlling area? How can I access the textual descriptions and details of business processes for a given controlling area? What are the current valid business processes based on the system date? How can I retrieve associated controlling area information for a particular business process? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSINESSPROCESS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `BusinessProcess` |  | |  |  | `CHAR(12)` | Business Process |
