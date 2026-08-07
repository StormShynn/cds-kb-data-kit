---
name: I_SETLMGMTPRODBSDDOCPRTNCATT
description: This CDS view provides the data to answer the following business question: Which are the relevant product-based document partner categories in Settlement Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTPRODBSDDOCPRTNCATT')/$value
semantic_en: This CDS view provides the data to answer the following business question: Which are the relevant product-based document partner categories in Settlement Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - LO
  - bo:companycode
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
  - product
  - metadata-only
---
# I_SETLMGMTPRODBSDDOCPRTNCATT

**This CDS view provides the data to answer the following business question: Which are the relevant product-based document partner categories in Settlement Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTPRODBSDDOCPRTNCATT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SetlMgmtProdBsdDocPrtnCat` |  | |  |  | `CHAR(1)` | Business Partner for Product Based Settlement |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `DomainValue` |  | |  |  | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `SetlMgmtProdBsdDocPrtnCatName` |  | |  |  | `CHAR(60)` | Text of Product Based Settlement Business Partner |
