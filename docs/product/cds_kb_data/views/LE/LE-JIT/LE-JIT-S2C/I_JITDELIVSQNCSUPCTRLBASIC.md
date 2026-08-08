---
name: I_JITDELIVSQNCSUPCTRLBASIC
description: "This CDS view provides the assignment of supply controls to delivery sequence groups. It establishes the relationship between delivery sequence groups and their associated supply control configurations. This CDS view provides the data to answer the following business questions: Which supply controls are assigned to a delivery sequence group? What is the supply control ID for each assignment? How many supply controls are linked to a delivery sequence group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITDELIVSQNCSUPCTRLBASIC')/$value
semantic_en: "This CDS view provides the assignment of supply controls to delivery sequence groups. It establishes the relationship between delivery sequence groups and their associated supply control configurations. This CDS view provides the data to answer the following business questions: Which supply controls are assigned to a delivery sequence group? What is the supply control ID for each assignment? How many supply controls are linked to a delivery sequence group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
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
# I_JITDELIVSQNCSUPCTRLBASIC

**This CDS view provides the assignment of supply controls to delivery sequence groups. It establishes the relationship between delivery sequence groups and their associated supply control configurations. This CDS view provides the data to answer the following business questions: Which supply controls are assigned to a delivery sequence group? What is the supply control ID for each assignment? How many supply controls are linked to a delivery sequence group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITDELIVSQNCSUPCTRLBASIC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITDelivSqncSupCtrlUUID` |  | |  |  | `RAW(16)` | NodeID |
| `JITDelivSqncGrpUUID` |  | |  |  | `RAW(16)` | NodeID |
| `SupplyControlUUID` |  | |  |  | `RAW(16)` | NodeID |
| `SupplyControlID` |  | |  |  | `CHAR(10)` | Supply Control |
