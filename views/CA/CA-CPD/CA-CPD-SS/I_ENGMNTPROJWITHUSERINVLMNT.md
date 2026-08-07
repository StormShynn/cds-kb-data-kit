---
name: I_ENGMNTPROJWITHUSERINVLMNT
description: This CDS view helps to retrieve customer and internal projects where a user is assigned to a project role. This CDS view provides the data to answer the following business questions: What are the customer or internal projects where I'm assigned to a project role? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJWITHUSERINVLMNT')/$value
semantic_en: This CDS view helps to retrieve customer and internal projects where a user is assigned to a project role. This CDS view provides the data to answer the following business questions: What are the customer or internal projects where I'm assigned to a project role? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - CA
  - bo:businesspartner
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - customer
  - interface-view
  - lob:cross_application components
  - project
  - metadata-only
---
# I_ENGMNTPROJWITHUSERINVLMNT

**This CDS view helps to retrieve customer and internal projects where a user is assigned to a project role. This CDS view provides the data to answer the following business questions: What are the customer or internal projects where I'm assigned to a project role? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJWITHUSERINVLMNT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectUUID` |  | |  |  | `RAW(16)` | Engagement Project UUID |
| `IsMyProject` |  | |  |  | `CHAR(1)` |  |
