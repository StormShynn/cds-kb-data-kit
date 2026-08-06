---
name: I_EWM_EXECUTIONRESOURCE_2
description: This CDS view provides information about resources in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_EXECUTIONRESOURCE_2')/$value
semantic_en: This CDS view provides information about resources in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - SCM
  - bo:companycode
  - component:SCM-EWM-WOP-2CL
  - interface-view
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
  - metadata-only
---
# I_EWM_EXECUTIONRESOURCE_2

**This CDS view provides information about resources in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_EXECUTIONRESOURCE_2')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `EWMWarehouse` | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `ExecutingResource` | `CHAR(18)` | Resource (Means of Transportation or User) |
| `ExecutingResourceType` | `CHAR(4)` | Resource Type |
| `ExecutingResourceGroup` | `CHAR(4)` | Resource Group |
| `UserName` | `CHAR(12)` | User Name in User Master Record |
| `WarehouseOrderQueue` | `CHAR(10)` | Queue |
| `EWMCurrentQueue` | `CHAR(10)` | Actual Queue of Resource |
| `EWMStorTypeOfLastWhseTaskConf` | `CHAR(4)` | Storage Type of Last Removal |
| `EWMDfltPresentationDvcePrfl` | `CHAR(4)` | Default Presentation Device |
| `EWMResourcePrintBehavior` | `CHAR(1)` | Resource Print Behavior |
