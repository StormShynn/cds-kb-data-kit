---
name: I_JITPCKGGRPACTIONLOGBASIC
description: This CDS view provides action log information for packing groups. This view tracks all actions performed on packing groups, including status changes, user actions, and application logs. This CDS view provides the data to answer the following business questions: What actions have been performed on a packing group? Who triggered each action and when? What was the previous status before each action? What application log entries exist for the packing group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPACTIONLOGBASIC')/$value
semantic_en: This CDS view provides action log information for packing groups. This view tracks all actions performed on packing groups, including status changes, user actions, and application logs. This CDS view provides the data to answer the following business questions: What actions have been performed on a packing group? Who triggered each action and when? What was the previous status before each action? What application log entries exist for the packing group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - LE
  - bo:companycode
  - component:LE-JIT-S2C
  - interface-view
  - LE-JIT
  - LE-JIT-S2C
  - lob:logistics execution
  - metadata-only
---
# I_JITPCKGGRPACTIONLOGBASIC

**This CDS view provides action log information for packing groups. This view tracks all actions performed on packing groups, including status changes, user actions, and application logs. This CDS view provides the data to answer the following business questions: What actions have been performed on a packing group? Who triggered each action and when? What was the previous status before each action? What application log entries exist for the packing group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPACTIONLOGBASIC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITPckgGrpActionLogUUID` |  | |  |  | `RAW(16)` | NodeID |
| `JITPckgGrpUUID` |  | |  |  | `RAW(16)` | NodeID |
| `JITFioriApplicationName` |  | |  |  | `CHAR(60)` | Explanatory Short Text |
| `JITCallActionSource` |  | |  |  | `CHAR(1)` | Action log: Action source |
| `JITAction` |  | |  |  | `CHAR(10)` | JIT Action |
| `JITCallActionStatus` |  | |  |  | `CHAR(1)` | Status Type |
| `TriggeredByUser` |  | |  |  | `CHAR(12)` | Application log: user name |
| `CreationDateTime` |  | |  |  | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `JITApplicationLogHandle` |  | |  |  | `CHAR(22)` | Application Log: Log Handle |
| `JITApplicationLogSeverity` |  | |  |  | `INT1(3)` | Indicates severity of the application logs |
| `JITPckgGrpPreviousStatus` |  | |  |  | `CHAR(1)` | Package Group Status |
| `JITPckgGrpStatus` |  | |  |  | `CHAR(1)` | Package Group Status |
| `JITFioriID` |  | |  |  | `CHAR(5)` | Fiori ID for Just In Time Application |
| `JITFrameAction` |  | |  |  | `CHAR(10)` | JIT Action |
