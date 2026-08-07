---
name: I_JITDELIVSQNCGRPSCHEDGENTRY
description: This CDS view provides scheduling configuration entries for delivery sequence groups. It defines the entry points for scheduling and the scheduling schema to be used based on external processing status. This CDS view provides the data to answer the following business questions: What scheduling entries exist for a delivery sequence group? What is the entry point for scheduling for each external status? Which scheduling schema is used for each entry? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITDELIVSQNCGRPSCHEDGENTRY')/$value
semantic_en: This CDS view provides scheduling configuration entries for delivery sequence groups. It defines the entry points for scheduling and the scheduling schema to be used based on external processing status. This CDS view provides the data to answer the following business questions: What scheduling entries exist for a delivery sequence group? What is the entry point for scheduling for each external status? Which scheduling schema is used for each entry? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - LE
  - bo:companycode
  - component:LE-JIT-S2C
  - delivery
  - interface-view
  - LE-JIT
  - LE-JIT-S2C
  - lob:logistics execution
  - metadata-only
---
# I_JITDELIVSQNCGRPSCHEDGENTRY

**This CDS view provides scheduling configuration entries for delivery sequence groups. It defines the entry points for scheduling and the scheduling schema to be used based on external processing status. This CDS view provides the data to answer the following business questions: What scheduling entries exist for a delivery sequence group? What is the entry point for scheduling for each external status? Which scheduling schema is used for each entry? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITDELIVSQNCGRPSCHEDGENTRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITDelivSqncGrpSchedgEntryUUID` |  | |  |  | `RAW(16)` | NodeID |
| `JITDelivSqncGrpUUID` |  | |  |  | `RAW(16)` | NodeID |
| `JITExtStatusAtSupplier` |  | |  |  | `CHAR(4)` | JIT External Status at Supplier |
| `JITEntryPointForScheduling` |  | |  |  | `CHAR(1)` | Scheduling entry schema |
| `SchedulingSchema` |  | |  |  | `CHAR(30)` | BPS – Schema |
