---
name: I_JITPCKGGRPDEFCELL
description: This CDS view provides the cell definition data for JIT packing groups. It defines the slot groups within a packing group, including cell ranges, quantities per cell, and content types. This view is a composition of the root packing group definition. This CDS view provides the data to answer the following business questions: What cells are defined within a packing group? What is the quantity per cell for a slot group? What is the cell increment value for a packing group? Which component group materials are assigned to cells? What is the sort sequence for packing cells? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPDEFCELL')/$value
semantic_en: This CDS view provides the cell definition data for JIT packing groups. It defines the slot groups within a packing group, including cell ranges, quantities per cell, and content types. This view is a composition of the root packing group definition. This CDS view provides the data to answer the following business questions: What cells are defined within a packing group? What is the quantity per cell for a slot group? What is the cell increment value for a packing group? Which component group materials are assigned to cells? What is the sort sequence for packing cells? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
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
# I_JITPCKGGRPDEFCELL

**This CDS view provides the cell definition data for JIT packing groups. It defines the slot groups within a packing group, including cell ranges, quantities per cell, and content types. This view is a composition of the root packing group definition. This CDS view provides the data to answer the following business questions: What cells are defined within a packing group? What is the quantity per cell for a slot group? What is the cell increment value for a packing group? Which component group materials are assigned to cells? What is the sort sequence for packing cells? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPDEFCELL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITPckgGrpCellUUID` |  | |  |  | `RAW(16)` | NodeID |
| `JITPckgGrpDefUUID` |  | |  |  | `RAW(16)` | NodeID |
| `JITPckg1stCellID` |  | |  |  | `INT1(3)` | Slot Group: First Slot ID |
| `JITPckgLastCellID` |  | |  |  | `INT1(3)` | Slot Group: Last Slot ID |
| `JITPckgCellIncrmtValue` |  | |  |  | `INT1(3)` | Slot Group: Slot Increment |
| `JITPckgQtyPerCell` |  | |  |  | `QUAN(13)` | Slot Group: Quantity per Slot |
| `QuantityUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `JITPckgCntntType` |  | |  |  | `CHAR(2)` | Slot Group: Content Type |
| `JITPckgGrpDefID` |  | |  |  | `CHAR(10)` | Package Group Specification ID |
| `CompGrpMatl` |  | |  |  | `CHAR(40)` | Components Group Material |
| `JITIntPackgSortSqnc` |  | |  |  | `CHAR(1)` | Internal Packing sequence |
| `JITPckgSortSqnc` |  | |  |  | `CHAR(1)` | Slot Group: Sort Sequence |
