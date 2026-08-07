---
name: I_MAINTENANCEORDERPHASE
description: This CDS view provides supported values for Maintenance Processing Phase. The values are as follows: VALUE MEANING 0 Outstanding 2 Released 3 Technically Completed 4 Marked for Deletion 5 Historical order 6 Completed for Business This CDS view provides the data to answer the following business questions: What are the valid processing phases available for maintenance orders in the system? Which phase codes can be used to categorize and track maintenance order progress? What phase values are currently active and available for assignment to maintenance orders? How can maintenance orders be classified by their current processing stage? What are the standardized phase identifiers used across maintenance order analytics and reporting? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCEORDERPHASE')/$value
semantic_en: This CDS view provides supported values for Maintenance Processing Phase. The values are as follows: VALUE MEANING 0 Outstanding 2 Released 3 Technically Completed 4 Marked for Deletion 5 Historical order 6 Completed for Business This CDS view provides the data to answer the following business questions: What are the valid processing phases available for maintenance orders in the system? Which phase codes can be used to categorize and track maintenance order progress? What phase values are currently active and available for assignment to maintenance orders? How can maintenance orders be classified by their current processing stage? What are the standardized phase identifiers used across maintenance order analytics and reporting? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - PM
  - bo:companycode
  - component:PM-WOC-MO-2CL
  - interface-view
  - lob:plant maintenance
  - order
  - PM-WOC
  - PM-WOC-MO
  - PM-WOC-MO-2CL
  - metadata-only
---
# I_MAINTENANCEORDERPHASE

**This CDS view provides supported values for Maintenance Processing Phase. The values are as follows: VALUE MEANING 0 Outstanding 2 Released 3 Technically Completed 4 Marked for Deletion 5 Historical order 6 Completed for Business This CDS view provides the data to answer the following business questions: What are the valid processing phases available for maintenance orders in the system? Which phase codes can be used to categorize and track maintenance order progress? What phase values are currently active and available for assignment to maintenance orders? How can maintenance orders be classified by their current processing stage? What are the standardized phase identifiers used across maintenance order analytics and reporting? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCEORDERPHASE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenanceProcessingPhase` |  | |  |  | `CHAR(1)` | Maintenance Processing Phase |
