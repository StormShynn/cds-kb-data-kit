---
name: I_JITDELIVSQNCGRPHEADERBASIC
description: "A Just-In-Time (JIT) delivery sequence group is a set of fields in JIT processing defined for a combination of customer, plant, and customer supply area. It controls various aspects during the lifecycle of a sequenced JIT call. This CDS view provides the data to answer the following business questions: What delivery sequence groups exist for a specific plant and customer? What is the status of each delivery sequence group? Which storage locations are assigned to a delivery sequence group? What sequence number check level is configured? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITDELIVSQNCGRPHEADERBASIC')/$value
semantic_en: "A Just-In-Time (JIT) delivery sequence group is a set of fields in JIT processing defined for a combination of customer, plant, and customer supply area. It controls various aspects during the lifecycle of a sequenced JIT call. This CDS view provides the data to answer the following business questions: What delivery sequence groups exist for a specific plant and customer? What is the status of each delivery sequence group? Which storage locations are assigned to a delivery sequence group? What sequence number check level is configured? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - LE
  - bo:businesspartner
  - component:LE-JIT-S2C
  - customer
  - delivery
  - interface-view
  - LE-JIT
  - LE-JIT-S2C
  - lob:logistics execution
  - plan
  - metadata-only
---
# I_JITDELIVSQNCGRPHEADERBASIC

**A Just-In-Time (JIT) delivery sequence group is a set of fields in JIT processing defined for a combination of customer, plant, and customer supply area. It controls various aspects during the lifecycle of a sequenced JIT call. This CDS view provides the data to answer the following business questions: What delivery sequence groups exist for a specific plant and customer? What is the status of each delivery sequence group? Which storage locations are assigned to a delivery sequence group? What sequence number check level is configured? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITDELIVSQNCGRPHEADERBASIC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITDelivSqncGrpUUID` |  | |  |  | `RAW(16)` | NodeID |
| `JITDelivSqncGrpID` |  | |  |  | `CHAR(10)` | Delivery Sequence Group ID (Readable) |
| `ExtJITDelivSqncGrpID` |  | |  |  | `CHAR(30)` | External ID for Delivery Sequence Group |
| `JITDelivSqncGrpStatus` |  | |  |  | `CHAR(1)` | Lifecycle Status for Deliv. Seq. Group |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `Customer` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `CustSupplyArea` |  | |  |  | `CHAR(10)` | Customer Supply Area |
| `JITLogsIntegRlvtEntity` |  | |  |  | `CHAR(1)` | NJIT: Entity relevant for Logistics Integration |
| `JITSqncNumberCheckLevel` |  | |  |  | `CHAR(1)` | NJIT: Sequence Number Check Level |
| `ShippingStorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `JITCompMatlStorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `EWMStorageBinForPacking` |  | |  |  | `CHAR(18)` | Storage Bin |
| `EWMStorageBinForStaging` |  | |  |  | `CHAR(18)` | Storage Bin |
| `EWMWarehouse` |  | |  |  | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | User Name |
| `CreationDateTime` |  | |  |  | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | User Name |
| `LastChangeDateTime` |  | |  |  | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
