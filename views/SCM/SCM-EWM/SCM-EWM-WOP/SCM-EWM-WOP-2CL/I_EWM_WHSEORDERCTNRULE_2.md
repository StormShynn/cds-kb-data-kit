---
name: I_EWM_WHSEORDERCTNRULE_2
description: This CDS view provides information about warehouse order creation rules in your warehouse. This CDS view provides the data to answer the following business questions: What are the warehouse order creation rules with the attribute WarehouseOrderCreationRule and its related information in your warehouse? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WHSEORDERCTNRULE_2')/$value
semantic_en: This CDS view provides information about warehouse order creation rules in your warehouse. This CDS view provides the data to answer the following business questions: What are the warehouse order creation rules with the attribute WarehouseOrderCreationRule and its related information in your warehouse? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - SCM
  - bo:companycode
  - component:SCM-EWM-WOP-2CL
  - interface-view
  - order
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
  - metadata-only
---
# I_EWM_WHSEORDERCTNRULE_2

**This CDS view provides information about warehouse order creation rules in your warehouse. This CDS view provides the data to answer the following business questions: What are the warehouse order creation rules with the attribute WarehouseOrderCreationRule and its related information in your warehouse? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WHSEORDERCTNRULE_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` |  | |  |  | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `WarehouseOrderCreationRule` |  | |  |  | `CHAR(4)` | Warehouse Order Creation Rule |
| `WhseOrderCreationRuleCategory` |  | |  |  | `CHAR(1)` | Category of Warehouse Order Creation Rule |
| `DestinationStorageType` |  | |  |  | `CHAR(4)` | Destination Storage Type |
| `DestinationStorageSection` |  | |  |  | `CHAR(4)` | Destination Storage Section |
| `DestinationStorageBin` |  | |  |  | `CHAR(18)` | Destination Storage Bin |
| `StorageProcess` |  | |  |  | `CHAR(4)` | Storage Process |
