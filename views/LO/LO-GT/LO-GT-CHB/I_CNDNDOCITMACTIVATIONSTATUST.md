---
name: I_CNDNDOCITMACTIVATIONSTATUST
description: This CDS view provides information on the status of a condition document and condition document item. This CDS view provides the data to answer the following business questions: Is the condition document or condition document item active or inactive? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNDOCITMACTIVATIONSTATUST')/$value
semantic_en: This CDS view provides information on the status of a condition document and condition document item. This CDS view provides the data to answer the following business questions: Is the condition document or condition document item active or inactive? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - LO
  - bo:companycode
  - component:LO-GT-CHB
  - document
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
  - metadata-only
---
# I_CNDNDOCITMACTIVATIONSTATUST

**This CDS view provides information on the status of a condition document and condition document item. This CDS view provides the data to answer the following business questions: Is the condition document or condition document item active or inactive? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNDOCITMACTIVATIONSTATUST')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CndnDocItmActivationStatus` | `CHAR(1)` | Condition Document Item Activation Status |
| `Language` | `LANG(1)` | Language Key |
| `DomainValue` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `CndnDocItmActivationStatusName` | `CHAR(60)` | Condition Document Item Activation Status Name |
