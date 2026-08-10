---
name: I_MAINTTASKLISTOPPRTCUBE
description: "This CDS view is designed to provide a comprehensive analytical cube for maintenance task list operations related to production resources and tools. It aggregates and organizes data concerning the usage and standard work quantities of production resources and tools within maintenance task lists, facilitating detailed analysis and reporting. This CDS view provides the data to answer the following business questions: What are the standard work quantities and usage quantities for production resources and tools associated with specific maintenance task list operations? How can we track and analyze the production resource types and their respective internal IDs within maintenance task lists? Which production resources and tools are marked as deleted in the context of maintenance task list operations? How can we associate production resource tools with their master data and units of measure for detailed reporting and analysis? What are the internal identifiers and version counters for task list operations and production resource tools, and how do they relate to the overall maintenance task list structure? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: PM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTTASKLISTOPPRTCUBE')/$value
semantic_en: "This CDS view is designed to provide a comprehensive analytical cube for maintenance task list operations related to production resources and tools. It aggregates and organizes data concerning the usage and standard work quantities of production resources and tools within maintenance task lists, facilitating detailed analysis and reporting. This CDS view provides the data to answer the following business questions: What are the standard work quantities and usage quantities for production resources and tools associated with specific maintenance task list operations? How can we track and analyze the production resource types and their respective internal IDs within maintenance task lists? Which production resources and tools are marked as deleted in the context of maintenance task list operations? How can we associate production resource tools with their master data and units of measure for detailed reporting and analysis? What are the internal identifiers and version counters for task list operations and production resource tools, and how do they relate to the overall maintenance task list structure? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - PM
  - bo:businesspartner
  - component:PM-2CL
  - interface-view
  - lob:plant maintenance
  - master-data
  - PM-2CL
  - product
  - task
  - metadata-only
---
# I_MAINTTASKLISTOPPRTCUBE

**This CDS view is designed to provide a comprehensive analytical cube for maintenance task list operations related to production resources and tools. It aggregates and organizes data concerning the usage and standard work quantities of production resources and tools within maintenance task lists, facilitating detailed analysis and reporting. This CDS view provides the data to answer the following business questions: What are the standard work quantities and usage quantities for production resources and tools associated with specific maintenance task list operations? How can we track and analyze the production resource types and their respective internal IDs within maintenance task lists? Which production resources and tools are marked as deleted in the context of maintenance task list operations? How can we associate production resource tools with their master data and units of measure for detailed reporting and analysis? What are the internal identifiers and version counters for task list operations and production resource tools, and how do they relate to the overall maintenance task list structure? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `PM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTTASKLISTOPPRTCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TaskListType` |  | |  |  | `CHAR(1)` | Task List Type |
| `TaskListGroup` |  | |  |  | `CHAR(8)` | Key for Task List Group |
| `TaskListGroupCounter` |  | |  |  | `CHAR(2)` | Group Counter |
| `TaskListSequence` |  | |  |  | `CHAR(6)` | Sequence |
| `TaskListOperationInternalId` |  | |  |  | `NUMC(8)` | Number of the Task List Node |
| `TaskListOpPRTIntID` |  | |  |  | `NUMC(8)` | Item Counter for Production Resources/Tools |
| `TaskListOpPRTIntVersCounter` |  | |  |  | `NUMC(8)` | Internal counter |
| `ProdnRsceToolItemNumber` |  | |  |  | `NUMC(4)` | Item Number for Production Resource/Tool |
| `ProdnRsceToolStandardWorkQty` |  | |  |  | `QUAN(9)` | Standard Value for Quantity of Production Resources/Tools |
| `ProdnRsceToolStdWorkQtyUnit` |  | |  |  | `UNIT(3)` | Unit for Quantity of Production Resources/Tools |
| `ProdnRsceToolUsageQuantity` |  | |  |  | `QUAN(9)` | Standard Usage Value for Production Resources/Tools |
| `ProdnRsceToolUsageQuantityUnit` |  | |  |  | `UNIT(3)` | Usage Value Unit of the Production Resource/Tool |
| `ProductionResourceType` |  | |  |  | `CHAR(2)` | Object types of the CIM resource |
| `ProductionResourceInternalID` |  | |  |  | `NUMC(8)` | Object ID of the resource |
| `ProdnRsceToolText` |  | |  |  | `CHAR(40)` | First Line of Text for Production Resources/Tools |
| `IsDeleted` |  | |  |  | `CHAR(1)` | Deletion Indicator |
