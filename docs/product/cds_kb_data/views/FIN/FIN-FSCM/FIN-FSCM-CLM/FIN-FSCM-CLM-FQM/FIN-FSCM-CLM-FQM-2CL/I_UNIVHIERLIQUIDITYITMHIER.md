---
name: I_UNIVHIERLIQUIDITYITMHIER
description: "This CDS view provides access to the Liquidity Item Hierarchy master data, representing the organizational structure used to categorize and analyze liquidity items in cash flow management. The view serves as a basic interface to the hierarchy attributes, including validity periods, and enables text associations for descriptive information across different languages. This CDS view provides the data to answer the following business questions: What liquidity item hierarchies are available in the system? What is the validity period (start and end dates) for each liquidity item hierarchy? Which liquidity item hierarchies are currently active or valid for a specific date? What are the descriptive texts associated with each liquidity item hierarchy in different languages? How are liquidity items structured and organized for cash flow analysis and reporting? Which hierarchy structures can be used for categorizing cash flow transactions? What is the historical evolution of liquidity item hierarchy structures over time based on validity periods? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CLM-FQM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_UNIVHIERLIQUIDITYITMHIER')/$value
semantic_en: "This CDS view provides access to the Liquidity Item Hierarchy master data, representing the organizational structure used to categorize and analyze liquidity items in cash flow management. The view serves as a basic interface to the hierarchy attributes, including validity periods, and enables text associations for descriptive information across different languages. This CDS view provides the data to answer the following business questions: What liquidity item hierarchies are available in the system? What is the validity period (start and end dates) for each liquidity item hierarchy? Which liquidity item hierarchies are currently active or valid for a specific date? What are the descriptive texts associated with each liquidity item hierarchy in different languages? How are liquidity items structured and organized for cash flow analysis and reporting? Which hierarchy structures can be used for categorizing cash flow transactions? What is the historical evolution of liquidity item hierarchy structures over time based on validity periods? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
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
  - transaction
  - metadata-only
---
# I_UNIVHIERLIQUIDITYITMHIER

**This CDS view provides access to the Liquidity Item Hierarchy master data, representing the organizational structure used to categorize and analyze liquidity items in cash flow management. The view serves as a basic interface to the hierarchy attributes, including validity periods, and enables text associations for descriptive information across different languages. This CDS view provides the data to answer the following business questions: What liquidity item hierarchies are available in the system? What is the validity period (start and end dates) for each liquidity item hierarchy? Which liquidity item hierarchies are currently active or valid for a specific date? What are the descriptive texts associated with each liquidity item hierarchy in different languages? How are liquidity items structured and organized for cash flow analysis and reporting? Which hierarchy structures can be used for categorizing cash flow transactions? What is the historical evolution of liquidity item hierarchy structures over time based on validity periods? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-FQM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_UNIVHIERLIQUIDITYITMHIER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LiquidityItemHierarchy` |  | |  |  | `CHAR(42)` | Hierarchy ID |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid To Date |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
