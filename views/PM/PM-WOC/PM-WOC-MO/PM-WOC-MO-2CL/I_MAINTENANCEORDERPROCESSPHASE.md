---
name: I_MAINTENANCEORDERPROCESSPHASE
description: "This CDS view provides supported values for Maintenance Processing Phase. The values are as follows: Planning Completion Post Execution Execution Scheduling Preparation Approval This CDS view provides the data to answer the following business questions: What are the valid processing phases available for maintenance orders in the system? Which maintenance order processing phases can be selected when updating or filtering maintenance order status? What are the text descriptions for each maintenance order processing phase in different languages? Which processing phases have subordinate or related phase classifications? What phase values are actively maintained in the system for maintenance order lifecycle management (excluding preliminary phases 01 and 02)? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCEORDERPROCESSPHASE')/$value
semantic_en: "This CDS view provides supported values for Maintenance Processing Phase. The values are as follows: Planning Completion Post Execution Execution Scheduling Preparation Approval This CDS view provides the data to answer the following business questions: What are the valid processing phases available for maintenance orders in the system? Which maintenance order processing phases can be selected when updating or filtering maintenance order status? What are the text descriptions for each maintenance order processing phase in different languages? Which processing phases have subordinate or related phase classifications? What phase values are actively maintained in the system for maintenance order lifecycle management (excluding preliminary phases 01 and 02)? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - PM
  - bo:companycode
  - component:PM-WOC-MO-2CL
  - interface-view
  - lob:plant maintenance
  - order
  - plan
  - PM-WOC
  - PM-WOC-MO
  - PM-WOC-MO-2CL
  - metadata-only
---
# I_MAINTENANCEORDERPROCESSPHASE

**This CDS view provides supported values for Maintenance Processing Phase. The values are as follows: Planning Completion Post Execution Execution Scheduling Preparation Approval This CDS view provides the data to answer the following business questions: What are the valid processing phases available for maintenance orders in the system? Which maintenance order processing phases can be selected when updating or filtering maintenance order status? What are the text descriptions for each maintenance order processing phase in different languages? Which processing phases have subordinate or related phase classifications? What phase values are actively maintained in the system for maintenance order lifecycle management (excluding preliminary phases 01 and 02)? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCEORDERPROCESSPHASE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenanceProcessingPhase` |  | |  |  | `CHAR(1)` | Maintenance Processing Phase |
| `DomainValue` |  | |  |  | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
