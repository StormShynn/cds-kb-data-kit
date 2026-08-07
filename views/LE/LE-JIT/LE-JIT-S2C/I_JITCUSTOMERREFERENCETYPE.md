---
name: I_JITCUSTOMERREFERENCETYPE
description: This CDS view retrieves the information of reference types for additional reference data transmitted by the OEM. It provides information about customer-specific reference type configurations used in JIT processing. This CDS view provides the data to answer the following business questions: What are the additional reference data sent by the OEM? How many reference types are present for each customer? What is the display order for reference texts? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITCUSTOMERREFERENCETYPE')/$value
semantic_en: This CDS view retrieves the information of reference types for additional reference data transmitted by the OEM. It provides information about customer-specific reference type configurations used in JIT processing. This CDS view provides the data to answer the following business questions: What are the additional reference data sent by the OEM? How many reference types are present for each customer? What is the display order for reference texts? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - LE
  - bo:businesspartner
  - component:LE-JIT-S2C
  - customer
  - interface-view
  - LE-JIT
  - LE-JIT-S2C
  - lob:logistics execution
  - order
  - metadata-only
---
# I_JITCUSTOMERREFERENCETYPE

**This CDS view retrieves the information of reference types for additional reference data transmitted by the OEM. It provides information about customer-specific reference type configurations used in JIT processing. This CDS view provides the data to answer the following business questions: What are the additional reference data sent by the OEM? How many reference types are present for each customer? What is the display order for reference texts? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITCUSTOMERREFERENCETYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ReferenceTypeUUID` |  | |  |  | `RAW(16)` | NodeID |
| `CustomerUUID` |  | |  |  | `RAW(16)` | NodeID |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `JITRefType` |  | |  |  | `CHAR(4)` | Type of Reference Number |
| `JITReferenceTextDisplayOrder` |  | |  |  | `CHAR(2)` | NJIT : Reference Text Display Order |
