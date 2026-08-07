---
name: I_JITPCKGGRPDEFSLOTGRPCNTNT
description: "This CDS view provides the content details for slot groups within JIT packing group cells. It links slot groups to their associated packing group definitions and component materials. This CDS view provides the data to answer the following business questions: What content is assigned to each slot group? Which component materials are in a slot group? How are slot groups linked to packing group definitions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPDEFSLOTGRPCNTNT')/$value
semantic_en: "This CDS view provides the content details for slot groups within JIT packing group cells. It links slot groups to their associated packing group definitions and component materials. This CDS view provides the data to answer the following business questions: What content is assigned to each slot group? Which component materials are in a slot group? How are slot groups linked to packing group definitions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - LE
  - bo:companycode
  - component:LE-JIT-S2C
  - interface-view
  - LE-JIT
  - LE-JIT-S2C
  - lob:logistics execution
  - material
  - metadata-only
---
# I_JITPCKGGRPDEFSLOTGRPCNTNT

**This CDS view provides the content details for slot groups within JIT packing group cells. It links slot groups to their associated packing group definitions and component materials. This CDS view provides the data to answer the following business questions: What content is assigned to each slot group? Which component materials are in a slot group? How are slot groups linked to packing group definitions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPDEFSLOTGRPCNTNT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITPckgGrpDefSlotGrpCntntUUID` |  | |  |  | `RAW(16)` | NodeID |
| `JITPckgGrpCellUUID` |  | |  |  | `RAW(16)` | NodeID |
| `JITPckgGrpDefUUID` |  | |  |  | `RAW(16)` | NodeID |
| `CompGrpMatl` |  | |  |  | `CHAR(40)` | Components Group Material |
