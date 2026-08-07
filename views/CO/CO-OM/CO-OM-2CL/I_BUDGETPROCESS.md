---
name: I_BUDGETPROCESS
description: This CDS view is designed to provide a structured representation of budget processes within an organization. It serves as a foundational view that can be used to access and analyze budget-related data, specifically focusing on the identification and description of different budget processes. This CDS view provides the data to answer the following business questions: What are the different budget processes defined within the organization? How can we access descriptive text information related to each budget process? How can we efficiently search for specific budget processes using text-based criteria? What are the key identifiers for budget processes that can be used in further analytical dimensions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: CO-OM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETPROCESS')/$value
semantic_en: This CDS view is designed to provide a structured representation of budget processes within an organization. It serves as a foundational view that can be used to access and analyze budget-related data, specifically focusing on the identification and description of different budget processes. This CDS view provides the data to answer the following business questions: What are the different budget processes defined within the organization? How can we access descriptive text information related to each budget process? How can we efficiently search for specific budget processes using text-based criteria? What are the key identifiers for budget processes that can be used in further analytical dimensions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - CO
  - bo:companycode
  - budget
  - CO-OM
  - CO-OM-2CL
  - component:CO-OM-2CL
  - interface-view
  - lob:controlling
  - metadata-only
---
# I_BUDGETPROCESS

**This CDS view is designed to provide a structured representation of budget processes within an organization. It serves as a foundational view that can be used to access and analyze budget-related data, specifically focusing on the identification and description of different budget processes. This CDS view provides the data to answer the following business questions: What are the different budget processes defined within the organization? How can we access descriptive text information related to each budget process? How can we efficiently search for specific budget processes using text-based criteria? What are the key identifiers for budget processes that can be used in further analytical dimensions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-OM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETPROCESS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BudgetProcess` |  | |  |  | `CHAR(4)` | Budget Process Type |
