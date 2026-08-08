---
name: I_JITCUSTOMERSUPPLYAREA
description: "This CDS view provides the supply area configuration for JIT customers. It enables you to ascertain the destination details comprised of customer supply area, unloading point, and customer assembly location. This CDS view provides the data to answer the following business questions: How many supply areas, unloading points, and assembly locations exist for each customer? What are the destination details for a specific customer? Which unloading points are assigned to which supply areas? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITCUSTOMERSUPPLYAREA')/$value
semantic_en: "This CDS view provides the supply area configuration for JIT customers. It enables you to ascertain the destination details comprised of customer supply area, unloading point, and customer assembly location. This CDS view provides the data to answer the following business questions: How many supply areas, unloading points, and assembly locations exist for each customer? What are the destination details for a specific customer? Which unloading points are assigned to which supply areas? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - LE
  - bo:businesspartner
  - component:LE-JIT-S2C
  - customer
  - interface-view
  - LE-JIT
  - LE-JIT-S2C
  - lob:logistics execution
  - metadata-only
---
# I_JITCUSTOMERSUPPLYAREA

**This CDS view provides the supply area configuration for JIT customers. It enables you to ascertain the destination details comprised of customer supply area, unloading point, and customer assembly location. This CDS view provides the data to answer the following business questions: How many supply areas, unloading points, and assembly locations exist for each customer? What are the destination details for a specific customer? Which unloading points are assigned to which supply areas? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITCUSTOMERSUPPLYAREA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SupplyAreaUUID` |  | |  |  | `RAW(16)` | NodeID |
| `CustomerUUID` |  | |  |  | `RAW(16)` | NodeID |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `CustSupplyArea` |  | |  |  | `CHAR(10)` | Customer Supply Area |
| `UnloadingPointName` |  | |  |  | `CHAR(25)` | Unloading Point |
| `CustAssemblyLoc` |  | |  |  | `CHAR(20)` | Assembly Location at Customer Site |
