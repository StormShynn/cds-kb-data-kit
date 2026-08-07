---
name: I_JITPCKGGRPDEF
description: "This CDS view exposes the JIT packing group specification master data. A JIT packing group specification is a structured collection of attributes such as packing material, slot groups, etc., that define how JIT packing groups shall be created. This CDS view provides the data to answer the following business questions: What packing group specifications exist in the system? What is the rack size for a specific packing group? Which packing material is assigned to a packing group? What is the status of a packing group specification? What is the reorder configuration for a packing group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPDEF')/$value
semantic_en: "This CDS view exposes the JIT packing group specification master data. A JIT packing group specification is a structured collection of attributes such as packing material, slot groups, etc., that define how JIT packing groups shall be created. This CDS view provides the data to answer the following business questions: What packing group specifications exist in the system? What is the rack size for a specific packing group? Which packing material is assigned to a packing group? What is the status of a packing group specification? What is the reorder configuration for a packing group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - LE
  - bo:businesspartner
  - component:LE-JIT-S2C
  - interface-view
  - LE-JIT
  - LE-JIT-S2C
  - lob:logistics execution
  - master-data
  - material
  - order
  - metadata-only
---
# I_JITPCKGGRPDEF

**This CDS view exposes the JIT packing group specification master data. A JIT packing group specification is a structured collection of attributes such as packing material, slot groups, etc., that define how JIT packing groups shall be created. This CDS view provides the data to answer the following business questions: What packing group specifications exist in the system? What is the rack size for a specific packing group? Which packing material is assigned to a packing group? What is the status of a packing group specification? What is the reorder configuration for a packing group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPDEF')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITPckgGrpDefUUID` |  | |  |  | `RAW(16)` | NodeID |
| `JITPckgGrpDefID` |  | |  |  | `CHAR(10)` | Package Group Specification ID |
| `JITPckgRackSize` |  | |  |  | `INT1(3)` | Package Group: Rack Size |
| `NumberRangeInterval` |  | |  |  | `CHAR(2)` | Number Range Number |
| `PackagingMaterial` |  | |  |  | `CHAR(40)` | Package Group: Material ID |
| `JITPckgGrpDefStatus` |  | |  |  | `CHAR(1)` | Package Specification Lifecycle Status |
| `PckgGrpDefReorder` |  | |  |  | `CHAR(1)` | Indicator to represent reorder scenario of JIT call |
| `JITHandlingUnitRelevance` |  | |  |  | `CHAR(1)` | Package Group Handling Unit relevance |
| `CreationDateTime` |  | |  |  | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | User Name |
| `LastChangeDateTime` |  | |  |  | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | User Name |
