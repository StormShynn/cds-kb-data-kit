---
name: I_MAINTENANCEORDERSTATUS
description: "This CDS view provides a consolidated status overview for maintenance orders. It exposes key lifecycle status indicators that track a maintenance order's progression from creation through completion, transforming the underlying status data for easier consumption by applications and reporting tools. This CDS view provides the data to answer the following business questions: Which maintenance orders have been created in the system? Which maintenance orders have been released for execution? Which maintenance orders have completed their main work activities? Which maintenance orders are technically complete? Which maintenance orders are business complete? What is the current lifecycle status of a specific maintenance order? How many maintenance orders are at each stage of the maintenance process (created, released, work completed, technically complete, business complete)? Which maintenance orders have completed technical work but are not yet business complete? What percentage of maintenance orders have progressed from creation to completion? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCEORDERSTATUS')/$value
semantic_en: "This CDS view provides a consolidated status overview for maintenance orders. It exposes key lifecycle status indicators that track a maintenance order's progression from creation through completion, transforming the underlying status data for easier consumption by applications and reporting tools. This CDS view provides the data to answer the following business questions: Which maintenance orders have been created in the system? Which maintenance orders have been released for execution? Which maintenance orders have completed their main work activities? Which maintenance orders are technically complete? Which maintenance orders are business complete? What is the current lifecycle status of a specific maintenance order? How many maintenance orders are at each stage of the maintenance process (created, released, work completed, technically complete, business complete)? Which maintenance orders have completed technical work but are not yet business complete? What percentage of maintenance orders have progressed from creation to completion? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
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
# I_MAINTENANCEORDERSTATUS

**This CDS view provides a consolidated status overview for maintenance orders. It exposes key lifecycle status indicators that track a maintenance order's progression from creation through completion, transforming the underlying status data for easier consumption by applications and reporting tools. This CDS view provides the data to answer the following business questions: Which maintenance orders have been created in the system? Which maintenance orders have been released for execution? Which maintenance orders have completed their main work activities? Which maintenance orders are technically complete? Which maintenance orders are business complete? What is the current lifecycle status of a specific maintenance order? How many maintenance orders are at each stage of the maintenance process (created, released, work completed, technically complete, business complete)? Which maintenance orders have completed technical work but are not yet business complete? What percentage of maintenance orders have progressed from creation to completion? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCEORDERSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenanceOrder` |  | |  |  | `CHAR(12)` | Order Number |
| `MaintenanceOrderInternalID` |  | |  |  | `CHAR(22)` | Object Number |
| `MaintenanceOrderIsCreated` |  | |  |  | `CHAR(1)` | Checkbox |
| `MaintenanceOrderIsReleased` |  | |  |  | `CHAR(1)` | Checkbox |
| `MaintOrderMainWorkIsCompleted` |  | |  |  | `CHAR(1)` | Checkbox |
| `MaintOrdIsTechlyCmpltd` |  | |  |  | `CHAR(1)` | Checkbox |
| `MaintOrderIsBusinessCompleted` |  | |  |  | `CHAR(1)` | Checkbox |
