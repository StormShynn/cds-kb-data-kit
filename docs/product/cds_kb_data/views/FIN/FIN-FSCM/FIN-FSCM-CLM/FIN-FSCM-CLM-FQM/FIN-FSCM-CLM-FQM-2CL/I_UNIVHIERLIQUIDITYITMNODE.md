---
name: I_UNIVHIERLIQUIDITYITMNODE
description: "This CDS view represents the hierarchical structure of liquidity items in cash flow management. It provides a node-based representation of the liquidity item hierarchy, enabling navigation through parent-child relationships between liquidity items and hierarchy nodes. The view serves as a master data source for analyzing and organizing liquidity items in a hierarchical structure with time-dependent validity periods. This CDS view provides the data to answer the following business questions: What is the hierarchical structure of liquidity items within a specific liquidity item hierarchy? Which liquidity items are organized under which parent nodes in the hierarchy? What are the parent-child relationships between different nodes in the liquidity item hierarchy? Which liquidity item hierarchies are valid for a specific time period or date range? What is the organizational structure of cash flow items for financial planning and analysis? How are liquidity items grouped and categorized within the hierarchy for reporting purposes? Which hierarchy nodes contain actual liquidity items versus structural nodes? What is the validity period for specific nodes within the liquidity item hierarchy? How can liquidity items be navigated from child to parent levels for consolidated cash flow analysis? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CLM-FQM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_UNIVHIERLIQUIDITYITMNODE')/$value
semantic_en: "This CDS view represents the hierarchical structure of liquidity items in cash flow management. It provides a node-based representation of the liquidity item hierarchy, enabling navigation through parent-child relationships between liquidity items and hierarchy nodes. The view serves as a master data source for analyzing and organizing liquidity items in a hierarchical structure with time-dependent validity periods. This CDS view provides the data to answer the following business questions: What is the hierarchical structure of liquidity items within a specific liquidity item hierarchy? Which liquidity items are organized under which parent nodes in the hierarchy? What are the parent-child relationships between different nodes in the liquidity item hierarchy? Which liquidity item hierarchies are valid for a specific time period or date range? What is the organizational structure of cash flow items for financial planning and analysis? How are liquidity items grouped and categorized within the hierarchy for reporting purposes? Which hierarchy nodes contain actual liquidity items versus structural nodes? What is the validity period for specific nodes within the liquidity item hierarchy? How can liquidity items be navigated from child to parent levels for consolidated cash flow analysis? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FIN
  - bo:businesspartner
  - component:FIN-FSCM-CLM-FQM-2CL
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-FQM
  - FIN-FSCM-CLM-FQM-2CL
  - interface-view
  - lob:finance
  - lob:quality management
  - master-data
  - plan
  - metadata-only
---
# I_UNIVHIERLIQUIDITYITMNODE

**This CDS view represents the hierarchical structure of liquidity items in cash flow management. It provides a node-based representation of the liquidity item hierarchy, enabling navigation through parent-child relationships between liquidity items and hierarchy nodes. The view serves as a master data source for analyzing and organizing liquidity items in a hierarchical structure with time-dependent validity periods. This CDS view provides the data to answer the following business questions: What is the hierarchical structure of liquidity items within a specific liquidity item hierarchy? Which liquidity items are organized under which parent nodes in the hierarchy? What are the parent-child relationships between different nodes in the liquidity item hierarchy? Which liquidity item hierarchies are valid for a specific time period or date range? What is the organizational structure of cash flow items for financial planning and analysis? How are liquidity items grouped and categorized within the hierarchy for reporting purposes? Which hierarchy nodes contain actual liquidity items versus structural nodes? What is the validity period for specific nodes within the liquidity item hierarchy? How can liquidity items be navigated from child to parent levels for consolidated cash flow analysis? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-FQM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_UNIVHIERLIQUIDITYITMNODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LiquidityItemHierarchy` |  | |  |  | `CHAR(42)` | Hierarchy ID |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid To Date |
| `HierarchyNode` |  | |  |  | `CHAR(50)` | Hierarchy node |
| `ParentNode` |  | |  |  | `CHAR(50)` | Hierarchy parent node |
| `LiquidityItem` |  | |  |  | `CHAR(40)` | Node value |
| `ParentLiquidityItem` |  | |  |  | `CHAR(40)` | Node value |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
