---
name: C_COSTCOMPONENTASSIGNMENTDEX
description: This CDS view provides access to the cost component assignment information, facilitating extraction of cost component structure and related organizational data for analytics and reporting. It is designed to enable data extraction from SAP S/4HANA Cloud Public Edition. The view consolidates relevant customizing data for cost components. How are cost components assigned in my cost component structures? What are the origin groups for cost components within a chart of accounts? In which interval of G/L accounts are costs assigned to a specific cost component? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COSTCOMPONENTASSIGNMENTDEX')/$value
semantic_en: This CDS view provides access to the cost component assignment information, facilitating extraction of cost component structure and related organizational data for analytics and reporting. It is designed to enable data extraction from SAP S/4HANA Cloud Public Edition. The view consolidates relevant customizing data for cost components. How are cost components assigned in my cost component structures? What are the origin groups for cost components within a chart of accounts? In which interval of G/L accounts are costs assigned to a specific cost component? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - CO
  - account
  - bo:companycode
  - CO-PC
  - CO-PC-PCP
  - CO-PC-PCP-2CL
  - component:CO-PC-PCP-2CL
  - consumption-view
  - lob:controlling
  - metadata-only
---
# C_COSTCOMPONENTASSIGNMENTDEX

**This CDS view provides access to the cost component assignment information, facilitating extraction of cost component structure and related organizational data for analytics and reporting. It is designed to enable data extraction from SAP S/4HANA Cloud Public Edition. The view consolidates relevant customizing data for cost components. How are cost components assigned in my cost component structures? What are the origin groups for cost components within a chart of accounts? In which interval of G/L accounts are costs assigned to a specific cost component? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COSTCOMPONENTASSIGNMENTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `CostComponentStructure` |  | |  |  | `CHAR(2)` | Cost Component Structure - CGM and Sales/Administr. Costs |
| `FromCostElement` |  | |  |  | `CHAR(10)` | From Cost Element |
| `CostOriginGroup` |  | |  |  | `CHAR(4)` | Origin Group as Subdivision of Cost Element |
| `ToCostElement` |  | |  |  | `CHAR(10)` | To Cost Element |
| `CostComponent` |  | |  |  | `NUMC(3)` | Cost Component Number |
