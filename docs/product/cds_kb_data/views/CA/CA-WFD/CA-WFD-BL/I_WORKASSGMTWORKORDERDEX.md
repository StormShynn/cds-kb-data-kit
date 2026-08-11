---
name: I_WORKASSGMTWORKORDERDEX
description: "This CDS view is designed to provide detailed information about work assignments related to work orders, specifically focusing on contingent workers. It integrates data from various sources to offer a comprehensive view of the relationships between staffing company supplier and work assignment business partners. This CDS view provides the data to answer the following business questions: What are the details of work assignments associated with specific work orders? Which suppliers are involved in these work assignments? What are the validity periods for the relationships between business partners in these assignments? Who are the contingent workers involved in these work assignments? How can we track the external IDs associated with work assignments and workforce persons? What is the country code associated with each work assignment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-WFD-BL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTWORKORDERDEX')/$value
semantic_en: "This CDS view is designed to provide detailed information about work assignments related to work orders, specifically focusing on contingent workers. It integrates data from various sources to offer a comprehensive view of the relationships between staffing company supplier and work assignment business partners. This CDS view provides the data to answer the following business questions: What are the details of work assignments associated with specific work orders? Which suppliers are involved in these work assignments? What are the validity periods for the relationships between business partners in these assignments? Who are the contingent workers involved in these work assignments? How can we track the external IDs associated with work assignments and workforce persons? What is the country code associated with each work assignment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - CA
  - bo:companycode
  - CA-WFD
  - CA-WFD-BL
  - component:CA-WFD-BL
  - interface-view
  - lob:cross_application components
  - order
  - supplier
  - metadata-only
---
# I_WORKASSGMTWORKORDERDEX

**This CDS view is designed to provide detailed information about work assignments related to work orders, specifically focusing on contingent workers. It integrates data from various sources to offer a comprehensive view of the relationships between staffing company supplier and work assignment business partners. This CDS view provides the data to answer the following business questions: What are the details of work assignments associated with specific work orders? Which suppliers are involved in these work assignments? What are the validity periods for the relationships between business partners in these assignments? Who are the contingent workers involved in these work assignments? How can we track the external IDs associated with work assignments and workforce persons? What is the country code associated with each work assignment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-WFD-BL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTWORKORDERDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RelationshipNumber` |  | |  |  | `CHAR(12)` | BP Relationship Number |
| `Supplier` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `BusinessPartner2` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `EndDate` |  | |  |  | `DATS(8)` | Validity Date (Valid To) |
| `StartDate` |  | |  |  | `DATS(8)` | Validity Date (Valid From) |
| `WorkAssignment` |  | |  |  | `NUMC(8)` | Workforce Assignment ID |
| `WorkforcePersonExternalID` |  | |  |  | `CHAR(100)` | External Person ID |
| `WorkAssignmentExternalID` |  | |  |  | `CHAR(100)` | Workforce Assignment External ID |
| `Country2DigitISOCode` |  | |  |  | `CHAR(2)` | Workforce Country ISO Code |
| `IsBlocked` |  | |  |  | `CHAR(1)` | Blocked Indicator |
