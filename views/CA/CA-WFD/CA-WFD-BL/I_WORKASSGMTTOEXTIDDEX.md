---
name: I_WORKASSGMTTOEXTIDDEX
description: You can use this CDS view to retrieve the data related to the work assignments of the workforce person. This CDS view is enabled for data extraction. This CDS view provides the data to answer the following business questions: What are the work assignments related to workforce person? What is the validity of the work assignment? Whether the work assignment has the Is Contingent flag true? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: CA-WFD-BL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTTOEXTIDDEX')/$value
semantic_en: You can use this CDS view to retrieve the data related to the work assignments of the workforce person. This CDS view is enabled for data extraction. This CDS view provides the data to answer the following business questions: What are the work assignments related to workforce person? What is the validity of the work assignment? Whether the work assignment has the Is Contingent flag true? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
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
# I_WORKASSGMTTOEXTIDDEX

**You can use this CDS view to retrieve the data related to the work assignments of the workforce person. This CDS view is enabled for data extraction. This CDS view provides the data to answer the following business questions: What are the work assignments related to workforce person? What is the validity of the work assignment? Whether the work assignment has the Is Contingent flag true? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-WFD-BL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTTOEXTIDDEX')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `WorkAssignment` | `NUMC(8)` | Workforce Assignment ID |
| `WorkAssignmentStartDate` | `DATS(8)` | Start Date |
| `WorkAssignmentEndDate` | `DATS(8)` | End Date |
| `WorkforcePersonExternalID` | `CHAR(100)` | External Person ID |
| `WorkAssignmentExternalID` | `CHAR(100)` | External User ID |
