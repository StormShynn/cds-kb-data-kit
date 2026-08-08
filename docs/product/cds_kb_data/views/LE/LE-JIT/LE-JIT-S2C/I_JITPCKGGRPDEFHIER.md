---
name: I_JITPCKGGRPDEFHIER
description: "This CDS view exposes the hierarchy relationships between JIT packing group specifications. It defines parent-child relationships between packing groups, enabling nested packing configurations. This CDS view provides the data to answer the following business questions: What is the hierarchy structure of packing groups? Which child packing groups belong to a parent packing group? What are the nested packing configurations? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPDEFHIER')/$value
semantic_en: "This CDS view exposes the hierarchy relationships between JIT packing group specifications. It defines parent-child relationships between packing groups, enabling nested packing configurations. This CDS view provides the data to answer the following business questions: What is the hierarchy structure of packing groups? Which child packing groups belong to a parent packing group? What are the nested packing configurations? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - LE
  - bo:companycode
  - component:LE-JIT-S2C
  - interface-view
  - LE-JIT
  - LE-JIT-S2C
  - lob:logistics execution
  - metadata-only
---
# I_JITPCKGGRPDEFHIER

**This CDS view exposes the hierarchy relationships between JIT packing group specifications. It defines parent-child relationships between packing groups, enabling nested packing configurations. This CDS view provides the data to answer the following business questions: What is the hierarchy structure of packing groups? Which child packing groups belong to a parent packing group? What are the nested packing configurations? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPDEFHIER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITPckgGrpHierUUID` |  | |  |  | `RAW(16)` | NodeID |
| `JITPckgGrpDefUUID` |  | |  |  | `RAW(16)` | NodeID |
| `JITChildPckgGrpDefUUID` |  | |  |  | `RAW(16)` | NodeID |
