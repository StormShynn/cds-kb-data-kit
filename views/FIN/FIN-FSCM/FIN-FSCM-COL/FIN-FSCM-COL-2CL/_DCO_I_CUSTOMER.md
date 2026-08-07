---
name: _DCO_I_CUSTOMER
description: This CDS view is designed to provide information about customer master data in collections and dispute automation. The view provides the logical system of a customer and a field indicating whether the business purpose is completed. This CDS view provides the data to answer the following business questions: Who are the customers in the system, and what are their unique identifiers? Which logical systems are associated with each customer? Is the business purpose related to each customer completed? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_CUSTOMER')/$value
semantic_en: This CDS view is designed to provide information about customer master data in collections and dispute automation. The view provides the logical system of a customer and a field indicating whether the business purpose is completed. This CDS view provides the data to answer the following business questions: Who are the customers in the system, and what are their unique identifiers? Which logical systems are associated with each customer? Is the business purpose related to each customer completed? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - FIN
  - bo:businesspartner
  - component:FIN-FSCM-COL-2CL
  - customer
  - FIN-FSCM
  - FIN-FSCM-COL
  - FIN-FSCM-COL-2CL
  - lob:controlling
  - lob:finance
  - master-data
  - metadata-only
---
# _DCO_I_CUSTOMER

**This CDS view is designed to provide information about customer master data in collections and dispute automation. The view provides the logical system of a customer and a field indicating whether the business purpose is completed. This CDS view provides the data to answer the following business questions: Who are the customers in the system, and what are their unique identifiers? Which logical systems are associated with each customer? Is the business purpose related to each customer completed? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_CUSTOMER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Customer` |  | |  |  | `CHAR(10)` | Customer |
| `LogicalSystem` |  | |  |  | `CHAR(10)` | Logical System |
| `IsBusinessPurposeCompleted` |  | |  |  | `CHAR(1)` | Business Purpose Is Completed |
