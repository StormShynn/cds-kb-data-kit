---
name: I_COSTORIGINTYPETEXT
description: "This CDS view is designed to provide a structured representation of cost origin types within a system. It extracts data from the domain values table (dd07l) and associates it with descriptive text for each cost origin type, facilitating better understanding and analysis of cost-related data. This view provides supported values for CostOriginType. The values and their meanings are: Value Meaning 02 Product Cost Controlling This CDS view provides the data to answer the following business questions: What are the different cost origin types available in the system? How can cost origin types be categorized or described for analytical purposes? What domain values are associated with each cost origin type? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTORIGINTYPETEXT')/$value
semantic_en: "This CDS view is designed to provide a structured representation of cost origin types within a system. It extracts data from the domain values table (dd07l) and associates it with descriptive text for each cost origin type, facilitating better understanding and analysis of cost-related data. This view provides supported values for CostOriginType. The values and their meanings are: Value Meaning 02 Product Cost Controlling This CDS view provides the data to answer the following business questions: What are the different cost origin types available in the system? How can cost origin types be categorized or described for analytical purposes? What domain values are associated with each cost origin type? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - CO
  - bo:companycode
  - CO-PC
  - CO-PC-PCP
  - CO-PC-PCP-2CL
  - component:CO-PC-PCP-2CL
  - interface-view
  - lob:controlling
  - product
  - metadata-only
---
# I_COSTORIGINTYPETEXT

**This CDS view is designed to provide a structured representation of cost origin types within a system. It extracts data from the domain values table (dd07l) and associates it with descriptive text for each cost origin type, facilitating better understanding and analysis of cost-related data. This view provides supported values for CostOriginType. The values and their meanings are: Value Meaning 02 Product Cost Controlling This CDS view provides the data to answer the following business questions: What are the different cost origin types available in the system? How can cost origin types be categorized or described for analytical purposes? What domain values are associated with each cost origin type? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTORIGINTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `CostOriginType` |  | |  |  | `CHAR(2)` | Origin Type |
| `CostOriginTypeName` |  | |  |  | `CHAR(60)` | Name of Cost Origin Type |
| `DomainValue` |  | |  |  | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
