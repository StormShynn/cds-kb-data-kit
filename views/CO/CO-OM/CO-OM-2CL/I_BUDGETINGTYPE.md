---
name: I_BUDGETINGTYPE
description: This CDS view provides a textual representation of budget types, including language-dependent descriptions. It is designed to facilitate the understanding and categorization of different budget subcategories by providing their descriptions in various languages. This CDS view provides the data to answer the following business questions: What are the descriptions of different budget types in various languages? How can budget subcategories be identified and understood across different linguistic contexts? What language-specific information is available for each budget type? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: CO-OM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETINGTYPE')/$value
semantic_en: This CDS view provides a textual representation of budget types, including language-dependent descriptions. It is designed to facilitate the understanding and categorization of different budget subcategories by providing their descriptions in various languages. This CDS view provides the data to answer the following business questions: What are the descriptions of different budget types in various languages? How can budget subcategories be identified and understood across different linguistic contexts? What language-specific information is available for each budget type? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
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
# I_BUDGETINGTYPE

**This CDS view provides a textual representation of budget types, including language-dependent descriptions. It is designed to facilitate the understanding and categorization of different budget subcategories by providing their descriptions in various languages. This CDS view provides the data to answer the following business questions: What are the descriptions of different budget types in various languages? How can budget subcategories be identified and understood across different linguistic contexts? What language-specific information is available for each budget type? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-OM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETINGTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BudgetingType` |  | |  |  | `CHAR(8)` | Budget Type (Subcategory) |
| `PubSecBudgetReleaseStatus` |  | |  |  | `CHAR(1)` | Budget Release Status |
| `PubSecBudgetIsConsumable` |  | |  |  | `CHAR(1)` | Consumable Budget |
