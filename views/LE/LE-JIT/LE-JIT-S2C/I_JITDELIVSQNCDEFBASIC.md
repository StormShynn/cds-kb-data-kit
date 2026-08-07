---
name: I_JITDELIVSQNCDEFBASIC
description: This CDS view provides the assignment of packing group specifications to delivery sequence groups. This view defines which packing group definitions are valid for a delivery sequence group within specific date ranges. This CDS view provides the data to answer the following business questions: Which packing group definitions are assigned to a delivery sequence group? What are the validity dates for each packing group assignment? What is the packing group usage type for each assignment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITDELIVSQNCDEFBASIC')/$value
semantic_en: This CDS view provides the assignment of packing group specifications to delivery sequence groups. This view defines which packing group definitions are valid for a delivery sequence group within specific date ranges. This CDS view provides the data to answer the following business questions: Which packing group definitions are assigned to a delivery sequence group? What are the validity dates for each packing group assignment? What is the packing group usage type for each assignment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
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
# I_JITDELIVSQNCDEFBASIC

**This CDS view provides the assignment of packing group specifications to delivery sequence groups. This view defines which packing group definitions are valid for a delivery sequence group within specific date ranges. This CDS view provides the data to answer the following business questions: Which packing group definitions are assigned to a delivery sequence group? What are the validity dates for each packing group assignment? What is the packing group usage type for each assignment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITDELIVSQNCDEFBASIC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITDelivSqncGrpDefUUID` |  | |  |  | `RAW(16)` | NodeID |
| `JITDelivSqncGrpUUID` |  | |  |  | `RAW(16)` | NodeID |
| `JITPckgGrpDefUUID` |  | |  |  | `RAW(16)` | JIT key |
| `JITDelivSqncDefValidFromDate` |  | |  |  | `DATS(8)` | Field of validity start date type DATS |
| `JITDelivSqncDefValidToDate` |  | |  |  | `DATS(8)` | Field of validity end date type DATS |
| `JITPackingGroupUsageType` |  | |  |  | `CHAR(1)` | NJIT: Packing Group Usage Type |
