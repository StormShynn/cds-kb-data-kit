---
name: I_GLACCOUNTHIERNODEBYSEMTAG
description: "This CDS view is designed to provide a structured representation of general ledger account hierarchies based on semantic tags. It facilitates the organization and categorization of GL accounts within a hierarchy, allowing for better financial reporting and analysis. This CDS view provides the data to answer the following business questions: How are general ledger accounts organized within a hierarchy based on semantic tags? What are the specific hierarchy nodes associated with each semantic tag in the GL account structure? How can semantic tags be used to categorize and analyze financial data within the GL account hierarchy? What is the relationship between different hierarchy nodes and semantic tags in the context of financial reporting? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-FIO-GL-HIE-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCOUNTHIERNODEBYSEMTAG')/$value
semantic_en: "This CDS view is designed to provide a structured representation of general ledger account hierarchies based on semantic tags. It facilitates the organization and categorization of GL accounts within a hierarchy, allowing for better financial reporting and analysis. This CDS view provides the data to answer the following business questions: How are general ledger accounts organized within a hierarchy based on semantic tags? What are the specific hierarchy nodes associated with each semantic tag in the GL account structure? How can semantic tags be used to categorize and analyze financial data within the GL account hierarchy? What is the relationship between different hierarchy nodes and semantic tags in the context of financial reporting? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FI
  - account
  - bo:companycode
  - component:FI-FIO-GL-HIE-2CL
  - FI-FIO
  - FI-FIO-GL
  - FI-FIO-GL-HIE
  - FI-FIO-GL-HIE-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_GLACCOUNTHIERNODEBYSEMTAG

**This CDS view is designed to provide a structured representation of general ledger account hierarchies based on semantic tags. It facilitates the organization and categorization of GL accounts within a hierarchy, allowing for better financial reporting and analysis. This CDS view provides the data to answer the following business questions: How are general ledger accounts organized within a hierarchy based on semantic tags? What are the specific hierarchy nodes associated with each semantic tag in the GL account structure? How can semantic tags be used to categorize and analyze financial data within the GL account hierarchy? What is the relationship between different hierarchy nodes and semantic tags in the context of financial reporting? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-HIE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCOUNTHIERNODEBYSEMTAG')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GLAccountHierarchy` |  | |  |  | `CHAR(42)` | Hierarchy ID |
| `HierarchyNode` |  | |  |  | `CHAR(50)` | Hierarchy node |
| `SemanticTag` |  | |  |  | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `HierarchyNodeType` |  | |  |  | `CHAR(30)` | Field Name |
