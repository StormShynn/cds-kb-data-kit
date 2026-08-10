---
name: I_KNBNCTRLCYCPRODMSTRDTA
description: "This CDS view provides an overview of product master data in the context of Kanban control cycles. In particular, it provides the plant-related master data of the product as well as the storage location-related master data for the product and plant for both the demand and the supply source. This CDS view provides the data to answer the following business questions: What are the details of products involved in Kanban control cycles, including their associated plants and storage locations? What is the supply source plant for a given product within a Kanban control cycle? What is the demand source plant for a given product within a Kanban control cycle? What are the storage locations associated with both demand and supply sources for products in Kanban control cycles? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: PP-KAB-VDM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_KNBNCTRLCYCPRODMSTRDTA')/$value
semantic_en: "This CDS view provides an overview of product master data in the context of Kanban control cycles. In particular, it provides the plant-related master data of the product as well as the storage location-related master data for the product and plant for both the demand and the supply source. This CDS view provides the data to answer the following business questions: What are the details of products involved in Kanban control cycles, including their associated plants and storage locations? What is the supply source plant for a given product within a Kanban control cycle? What is the demand source plant for a given product within a Kanban control cycle? What are the storage locations associated with both demand and supply sources for products in Kanban control cycles? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - PP
  - bo:businesspartner
  - component:PP-KAB-VDM-2CL
  - interface-view
  - lob:manufacturing
  - master-data
  - plan
  - PP-KAB
  - PP-KAB-VDM
  - PP-KAB-VDM-2CL
  - product
  - metadata-only
---
# I_KNBNCTRLCYCPRODMSTRDTA

**This CDS view provides an overview of product master data in the context of Kanban control cycles. In particular, it provides the plant-related master data of the product as well as the storage location-related master data for the product and plant for both the demand and the supply source. This CDS view provides the data to answer the following business questions: What are the details of products involved in Kanban control cycles, including their associated plants and storage locations? What is the supply source plant for a given product within a Kanban control cycle? What is the demand source plant for a given product within a Kanban control cycle? What are the storage locations associated with both demand and supply sources for products in Kanban control cycles? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_KNBNCTRLCYCPRODMSTRDTA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `KanbanControlCycle` |  | |  |  | `CHAR(7)` | Kanban Control Cycle |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `SourceStorageLocation` |  | |  |  | `CHAR(4)` | Source Storage Location |
| `SupplySourcePlant` |  | |  |  | `CHAR(4)` | Plant of Supply Source |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier's Account Number |
