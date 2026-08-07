---
name: I_JITCUSTOMERSUPPLYAREADESC
description: "This CDS view provides language-specific descriptions for supply area configurations. It enables you to retrieve the language-dependent destination details comprised of customer supply area, unloading point, and customer assembly location. This CDS view provides the data to answer the following business questions: What is the description of a supply area in a specific language? Which languages have descriptions for supply areas? How many supply areas, unloading points, and assembly locations exist for each customer? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITCUSTOMERSUPPLYAREADESC')/$value
semantic_en: "This CDS view provides language-specific descriptions for supply area configurations. It enables you to retrieve the language-dependent destination details comprised of customer supply area, unloading point, and customer assembly location. This CDS view provides the data to answer the following business questions: What is the description of a supply area in a specific language? Which languages have descriptions for supply areas? How many supply areas, unloading points, and assembly locations exist for each customer? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
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
# I_JITCUSTOMERSUPPLYAREADESC

**This CDS view provides language-specific descriptions for supply area configurations. It enables you to retrieve the language-dependent destination details comprised of customer supply area, unloading point, and customer assembly location. This CDS view provides the data to answer the following business questions: What is the description of a supply area in a specific language? Which languages have descriptions for supply areas? How many supply areas, unloading points, and assembly locations exist for each customer? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITCUSTOMERSUPPLYAREADESC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SupplyAreaUUID` |  | |  |  | `RAW(16)` | NodeID |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `CustomerUUID` |  | |  |  | `RAW(16)` | NodeID |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `CustSupplyArea` |  | |  |  | `CHAR(10)` | Customer Supply Area |
| `SupplyAreaDesc` |  | |  |  | `CHAR(35)` | Supply Area Description |
