---
name: I_MARGANLYSPRODANDSRVCOBJTYPET
description: "This CDS view provides language-dependent text descriptions for product and service object types used in margin analysis. It extracts and presents the text descriptions based on the system language, allowing you to view the object types in your preferred language. This CDS view provides the data to answer the following business questions: What are the descriptions of product and service object types used in margin analysis in the user's preferred language? How can I retrieve language-specific text for margin analysis object types to ensure accurate reporting and analysis? Which product and service object types are available for margin analysis, and what are their descriptions in the current session language? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MARGANLYSPRODANDSRVCOBJTYPET')/$value
semantic_en: "This CDS view provides language-dependent text descriptions for product and service object types used in margin analysis. It extracts and presents the text descriptions based on the system language, allowing you to view the object types in your preferred language. This CDS view provides the data to answer the following business questions: What are the descriptions of product and service object types used in margin analysis in the user's preferred language? How can I retrieve language-specific text for margin analysis object types to ensure accurate reporting and analysis? Which product and service object types are available for margin analysis, and what are their descriptions in the current session language? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - CO
  - bo:companycode
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - interface-view
  - lob:controlling
  - lob:finance
  - product
  - metadata-only
---
# I_MARGANLYSPRODANDSRVCOBJTYPET

**This CDS view provides language-dependent text descriptions for product and service object types used in margin analysis. It extracts and presents the text descriptions based on the system language, allowing you to view the object types in your preferred language. This CDS view provides the data to answer the following business questions: What are the descriptions of product and service object types used in margin analysis in the user's preferred language? How can I retrieve language-specific text for margin analysis object types to ensure accurate reporting and analysis? Which product and service object types are available for margin analysis, and what are their descriptions in the current session language? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MARGANLYSPRODANDSRVCOBJTYPET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `MarginAnalysisObjectType` |  | |  |  | `CHAR(2)` | Object Type |
| `MarginAnalysisObjectTypeDesc` |  | |  |  | `CHAR(60)` | Description |
