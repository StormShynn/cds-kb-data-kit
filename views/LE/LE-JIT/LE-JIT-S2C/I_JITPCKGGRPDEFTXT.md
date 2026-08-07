---
name: I_JITPCKGGRPDEFTXT
description: This CDS view provides language-dependent text descriptions for JIT packing group specifications. It stores the descriptive text for packing groups in multiple languages, supporting internationalization of the packing group master data. This CDS view provides the data to answer the following business questions: What is the description of a packing group in a specific language? Which languages have descriptions for a packing group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPDEFTXT')/$value
semantic_en: This CDS view provides language-dependent text descriptions for JIT packing group specifications. It stores the descriptive text for packing groups in multiple languages, supporting internationalization of the packing group master data. This CDS view provides the data to answer the following business questions: What is the description of a packing group in a specific language? Which languages have descriptions for a packing group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - LE
  - bo:businesspartner
  - component:LE-JIT-S2C
  - interface-view
  - LE-JIT
  - LE-JIT-S2C
  - lob:logistics execution
  - master-data
  - metadata-only
---
# I_JITPCKGGRPDEFTXT

**This CDS view provides language-dependent text descriptions for JIT packing group specifications. It stores the descriptive text for packing groups in multiple languages, supporting internationalization of the packing group master data. This CDS view provides the data to answer the following business questions: What is the description of a packing group in a specific language? Which languages have descriptions for a packing group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPDEFTXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITPckgGrpDefUUID` |  | |  |  | `RAW(16)` | NodeID |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `JITPckgGrpDesc` |  | |  |  | `CHAR(50)` | Package Group Specification Description |
