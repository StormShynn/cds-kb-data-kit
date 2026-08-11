---
name: I_WORKASSGMTSRVCCOSTLVLDEX_1
description: "This CDS view is designed to provide detailed information about the service cost levels associated with workforce assignments. This CDS view provides the data to answer the following business questions: What are the service cost levels associated with specific workforce assignments? What are the start and end dates for each service cost level related to a workforce assignment? How can we identify the workforce person associated with a particular work assignment and service cost level? Which country is associated with a specific workforce assignment based on the ISO code? Are there any blocked workforce assignments that need attention? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-WFD-BL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTSRVCCOSTLVLDEX_1')/$value
semantic_en: "This CDS view is designed to provide detailed information about the service cost levels associated with workforce assignments. This CDS view provides the data to answer the following business questions: What are the service cost levels associated with specific workforce assignments? What are the start and end dates for each service cost level related to a workforce assignment? How can we identify the workforce person associated with a particular work assignment and service cost level? Which country is associated with a specific workforce assignment based on the ISO code? Are there any blocked workforce assignments that need attention? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
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
# I_WORKASSGMTSRVCCOSTLVLDEX_1

**This CDS view is designed to provide detailed information about the service cost levels associated with workforce assignments. This CDS view provides the data to answer the following business questions: What are the service cost levels associated with specific workforce assignments? What are the start and end dates for each service cost level related to a workforce assignment? How can we identify the workforce person associated with a particular work assignment and service cost level? Which country is associated with a specific workforce assignment based on the ISO code? Are there any blocked workforce assignments that need attention? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-WFD-BL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTSRVCCOSTLVLDEX_1')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkAssignment` |  | |  |  | `NUMC(8)` | Workforce Assignment ID |
| `StartDate` |  | |  |  | `DATS(8)` | Start Date |
| `EndDate` |  | |  |  | `DATS(8)` | End Date |
| `WorkAssignmentExternalID` |  | |  |  | `CHAR(100)` | Workforce Assignment External ID |
| `Country2DigitISOCode` |  | |  |  | `CHAR(2)` | Workforce Country ISO Code |
| `WorkforcePersonExternalID` |  | |  |  | `CHAR(100)` | External Person ID |
| `ServiceCostLevel` |  | |  |  | `NUMC(4)` | Service Cost Level |
| `IsBlocked` |  | |  |  | `CHAR(1)` | Blocked Indicator |
