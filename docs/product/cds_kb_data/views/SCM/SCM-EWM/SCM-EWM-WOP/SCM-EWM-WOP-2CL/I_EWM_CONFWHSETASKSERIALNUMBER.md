---
name: I_EWM_CONFWHSETASKSERIALNUMBER
description: "This CDS view provides access to the serial numbers that are assigned to confirmed warehouse tasks in Warehouse Management. It is designed as a basic data source for tracking and auditing which serial numbers have been processed during the execution of warehouse tasks. This CDS view provides the data to answer the following business questions: Which serial numbers are assigned to each confirmed warehouse task and item? For a given warehouse, which serial numbers were moved as part of a specific task? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_CONFWHSETASKSERIALNUMBER')/$value
semantic_en: "This CDS view provides access to the serial numbers that are assigned to confirmed warehouse tasks in Warehouse Management. It is designed as a basic data source for tracking and auditing which serial numbers have been processed during the execution of warehouse tasks. This CDS view provides the data to answer the following business questions: Which serial numbers are assigned to each confirmed warehouse task and item? For a given warehouse, which serial numbers were moved as part of a specific task? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - SCM
  - bo:companycode
  - component:SCM-EWM-WOP-2CL
  - interface-view
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
  - task
  - metadata-only
---
# I_EWM_CONFWHSETASKSERIALNUMBER

**This CDS view provides access to the serial numbers that are assigned to confirmed warehouse tasks in Warehouse Management. It is designed as a basic data source for tracking and auditing which serial numbers have been processed during the execution of warehouse tasks. This CDS view provides the data to answer the following business questions: Which serial numbers are assigned to each confirmed warehouse task and item? For a given warehouse, which serial numbers were moved as part of a specific task? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_CONFWHSETASKSERIALNUMBER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` |  | |  |  | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `WarehouseTask` |  | |  |  | `NUMC(12)` | Warehouse Task |
| `WarehouseTaskItem` |  | |  |  | `NUMC(4)` | Warehouse Task Item |
| `EWMSerialNumber` |  | |  |  | `CHAR(30)` | 30 Characters |
