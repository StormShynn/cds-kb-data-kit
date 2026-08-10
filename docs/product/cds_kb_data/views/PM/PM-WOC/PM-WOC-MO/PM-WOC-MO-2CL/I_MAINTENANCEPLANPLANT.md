---
name: I_MAINTENANCEPLANPLANT
description: "This CDS view is designed to provide a structured representation of maintenance planning plants within an organization. It extracts and organizes data related to maintenance planning plants, including their names, from the underlying database table `t399i` and associates it with additional plant information from the `t001w` table. The view is optimized for data extraction and supports automatic change data capture, making it suitable for analytics and reporting purposes. This CDS view provides the data to answer the following business questions: What are the maintenance planning plants within the organization? What are the names associated with each maintenance planning plant? How can I efficiently search for specific maintenance planning plants based on their names? How can I integrate maintenance planning plant data into analytics and reporting tools for service quality assessments? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCEPLANPLANT')/$value
semantic_en: "This CDS view is designed to provide a structured representation of maintenance planning plants within an organization. It extracts and organizes data related to maintenance planning plants, including their names, from the underlying database table `t399i` and associates it with additional plant information from the `t001w` table. The view is optimized for data extraction and supports automatic change data capture, making it suitable for analytics and reporting purposes. This CDS view provides the data to answer the following business questions: What are the maintenance planning plants within the organization? What are the names associated with each maintenance planning plant? How can I efficiently search for specific maintenance planning plants based on their names? How can I integrate maintenance planning plant data into analytics and reporting tools for service quality assessments? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - PM
  - bo:companycode
  - component:PM-WOC-MO-2CL
  - interface-view
  - lob:plant maintenance
  - plan
  - PM-WOC
  - PM-WOC-MO
  - PM-WOC-MO-2CL
  - metadata-only
---
# I_MAINTENANCEPLANPLANT

**This CDS view is designed to provide a structured representation of maintenance planning plants within an organization. It extracts and organizes data related to maintenance planning plants, including their names, from the underlying database table `t399i` and associates it with additional plant information from the `t001w` table. The view is optimized for data extraction and supports automatic change data capture, making it suitable for analytics and reporting purposes. This CDS view provides the data to answer the following business questions: What are the maintenance planning plants within the organization? What are the names associated with each maintenance planning plant? How can I efficiently search for specific maintenance planning plants based on their names? How can I integrate maintenance planning plant data into analytics and reporting tools for service quality assessments? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCEPLANPLANT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenancePlanningPlant` |  | |  |  | `CHAR(4)` | Maintenance Planning Plant |
| `PlantName1` |  | |  |  | `CHAR(30)` | Name |
| `PlantName2` |  | |  |  | `CHAR(30)` | Name 2 |
