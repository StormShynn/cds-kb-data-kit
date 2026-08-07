---
name: I_JITPCKGGRPCELLCNSMPNSTS
description: This CDS view provides cell consumption status information for packing groups. It tracks the filling status of cells within packing groups. This CDS view provides the data to answer the following business questions: What is the completion status of the packing group? How many cells have been filled? What is the total number of cells in the packing group? What packing product is being used? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPCELLCNSMPNSTS')/$value
semantic_en: This CDS view provides cell consumption status information for packing groups. It tracks the filling status of cells within packing groups. This CDS view provides the data to answer the following business questions: What is the completion status of the packing group? How many cells have been filled? What is the total number of cells in the packing group? What packing product is being used? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - LE
  - bo:companycode
  - component:LE-JIT-S2C
  - interface-view
  - LE-JIT
  - LE-JIT-S2C
  - lob:logistics execution
  - product
  - metadata-only
---
# I_JITPCKGGRPCELLCNSMPNSTS

**This CDS view provides cell consumption status information for packing groups. It tracks the filling status of cells within packing groups. This CDS view provides the data to answer the following business questions: What is the completion status of the packing group? How many cells have been filled? What is the total number of cells in the packing group? What packing product is being used? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPCELLCNSMPNSTS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransactionUUID` |  | |  |  | `RAW(16)` | NodeID |
| `JITPckgGrpUUID` |  | |  |  | `RAW(16)` | NodeID |
| `CompletionStatus` |  | |  |  | `CHAR(1)` | Package Group Consumption Status |
| `TotalNumberOfCnsmdCellCnt` |  | |  |  | `INT4(10)` |  |
| `TotalNumberOfCellCount` |  | |  |  | `INT4(10)` |  |
| `JITPackggProdID` |  | |  |  | `CHAR(40)` | Slot Group: Product (Package/Component Group Material) |
| `JITPckgGrpCellUUID` |  | |  |  | `RAW(16)` | NodeID |
| `JITPckgGrpParentCellCnsmpnUUID` |  | |  |  | `RAW(16)` | NodeID |
