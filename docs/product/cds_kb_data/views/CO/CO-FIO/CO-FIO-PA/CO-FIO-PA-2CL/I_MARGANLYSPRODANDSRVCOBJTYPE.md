---
name: I_MARGANLYSPRODANDSRVCOBJTYPE
description: "This CDS view provides account assignment types for product and service object types used in margin analysis. It lists all available types in the value help. This CDS view provides the data to answer the following business questions: What are the product and service object types used in margin analysis? Which product and service object types are available for margin analysis? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MARGANLYSPRODANDSRVCOBJTYPE')/$value
semantic_en: "This CDS view provides account assignment types for product and service object types used in margin analysis. It lists all available types in the value help. This CDS view provides the data to answer the following business questions: What are the product and service object types used in margin analysis? Which product and service object types are available for margin analysis? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - CO
  - account
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
# I_MARGANLYSPRODANDSRVCOBJTYPE

**This CDS view provides account assignment types for product and service object types used in margin analysis. It lists all available types in the value help. This CDS view provides the data to answer the following business questions: What are the product and service object types used in margin analysis? Which product and service object types are available for margin analysis? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MARGANLYSPRODANDSRVCOBJTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MarginAnalysisObjectType` |  | |  |  | `CHAR(2)` | Object Type |
