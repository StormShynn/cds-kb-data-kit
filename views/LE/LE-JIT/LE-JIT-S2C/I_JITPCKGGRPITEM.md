---
name: I_JITPCKGGRPITEM
description: "This CDS view provides slot-level information within packing groups. Each slot represents a position within the packing group where materials or components can be placed. This CDS view provides the data to answer the following business questions: What slots exist within a packing group? What is the cell number for each slot? What is the packing status of each slot? What is the internal packaging sequence number? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPITEM')/$value
semantic_en: "This CDS view provides slot-level information within packing groups. Each slot represents a position within the packing group where materials or components can be placed. This CDS view provides the data to answer the following business questions: What slots exist within a packing group? What is the cell number for each slot? What is the packing status of each slot? What is the internal packaging sequence number? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
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
# I_JITPCKGGRPITEM

**This CDS view provides slot-level information within packing groups. Each slot represents a position within the packing group where materials or components can be placed. This CDS view provides the data to answer the following business questions: What slots exist within a packing group? What is the cell number for each slot? What is the packing status of each slot? What is the internal packaging sequence number? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPITEM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITPckgGrpItemUUID` |  | |  |  | `RAW(16)` | NodeID |
| `JITPckgGrpUUID` |  | |  |  | `RAW(16)` | NodeID |
| `JITPckgGrpCellNumber` |  | |  |  | `NUMC(6)` | JIT Packing Group Slot Number |
| `JITIntPackgSqncNmbr` |  | |  |  | `INT1(3)` | Data element for internal sequence number |
| `JITPackingStatus` |  | |  |  | `CHAR(1)` | Package Group Packing Status |
