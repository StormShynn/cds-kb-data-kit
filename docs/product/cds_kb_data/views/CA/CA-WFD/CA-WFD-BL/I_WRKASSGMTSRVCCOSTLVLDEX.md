---
name: I_WRKASSGMTSRVCCOSTLVLDEX
description: "You use this CDS view to retrieve the data related to the service cost level of a work assignment. This CDS view is enabled for data extraction. This CDS view provides the data to answer the following business question: What are the details related to the service cost level of the work assignment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-WFD-BL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WRKASSGMTSRVCCOSTLVLDEX')/$value
semantic_en: "You use this CDS view to retrieve the data related to the service cost level of a work assignment. This CDS view is enabled for data extraction. This CDS view provides the data to answer the following business question: What are the details related to the service cost level of the work assignment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - CA
  - bo:companycode
  - CA-WFD
  - CA-WFD-BL
  - component:CA-WFD-BL
  - interface-view
  - lob:cross_application components
  - metadata-only
---
# I_WRKASSGMTSRVCCOSTLVLDEX

**You use this CDS view to retrieve the data related to the service cost level of a work assignment. This CDS view is enabled for data extraction. This CDS view provides the data to answer the following business question: What are the details related to the service cost level of the work assignment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-WFD-BL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WRKASSGMTSRVCCOSTLVLDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkAssignment` |  | |  |  | `NUMC(8)` | Workforce Assignment ID |
| `WorkAssignmentStartDate` |  | |  |  | `DATS(8)` | Start Date |
| `WorkAssignmentEndDate` |  | |  |  | `DATS(8)` | End Date |
| `ServiceCostLevel` |  | |  |  | `NUMC(4)` | Service Cost Level |
