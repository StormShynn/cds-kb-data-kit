---
name: I_JITPCKGGRPITEMREF
description: "This CDS view provides content reference information for slots within packing groups. It links slots to their actual content such as JIT calls or component groups. This CDS view provides the data to answer the following business questions: What content is assigned to each packing group slot? What type of content is in each slot? Which reference document is linked to the slot content? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPITEMREF')/$value
semantic_en: "This CDS view provides content reference information for slots within packing groups. It links slots to their actual content such as JIT calls or component groups. This CDS view provides the data to answer the following business questions: What content is assigned to each packing group slot? What type of content is in each slot? Which reference document is linked to the slot content? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - LE
  - bo:companycode
  - component:LE-JIT-S2C
  - document
  - interface-view
  - LE-JIT
  - LE-JIT-S2C
  - lob:logistics execution
  - metadata-only
---
# I_JITPCKGGRPITEMREF

**This CDS view provides content reference information for slots within packing groups. It links slots to their actual content such as JIT calls or component groups. This CDS view provides the data to answer the following business questions: What content is assigned to each packing group slot? What type of content is in each slot? Which reference document is linked to the slot content? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPITEMREF')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITPckgGrpItemRefUUID` |  | |  |  | `RAW(16)` | NodeID |
| `JITPckgGrpItemUUID` |  | |  |  | `RAW(16)` | NodeID |
| `JITPckgGrpUUID` |  | |  |  | `RAW(16)` | NodeID |
| `JITPckgCntntType` |  | |  |  | `CHAR(2)` | Slot Group: Content Type |
| `ReferenceDocumentUUID` |  | |  |  | `RAW(16)` | JIT key |
