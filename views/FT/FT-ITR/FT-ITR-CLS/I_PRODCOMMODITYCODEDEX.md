---
name: I_PRODCOMMODITYCODEDEX
description: This CDS view extracts data for the product commodity code. This CDS view provides the data to answer the following business questions: Which commodity codes are used for the specific product? Which products are classified with a specific commodity code? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FT-ITR-CLS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODCOMMODITYCODEDEX')/$value
semantic_en: This CDS view extracts data for the product commodity code. This CDS view provides the data to answer the following business questions: Which commodity codes are used for the specific product? Which products are classified with a specific commodity code? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - FT
  - bo:companycode
  - component:FT-ITR-CLS
  - FT-ITR
  - FT-ITR-CLS
  - interface-view
  - product
  - metadata-only
---
# I_PRODCOMMODITYCODEDEX

**This CDS view extracts data for the product commodity code. This CDS view provides the data to answer the following business questions: Which commodity codes are used for the specific product? Which products are classified with a specific commodity code? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FT-ITR-CLS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODCOMMODITYCODEDEX')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `TrdClassfctnNmbrSchm` | `CHAR(10)` | Trade Classification Numbering Scheme |
| `Product` | `CHAR(40)` | Product |
| `CommodityCode` | `CHAR(30)` | Commodity Code |
| `ValidityStartDate` | `DATS(8)` | Valid From |
| `Country` | `CHAR(3)` | Country/Region |
| `ValidityEndDate` | `DATS(8)` | Valid To |
| `TrdClassfctnNmbrUUID` | `RAW(16)` | NodeID |
