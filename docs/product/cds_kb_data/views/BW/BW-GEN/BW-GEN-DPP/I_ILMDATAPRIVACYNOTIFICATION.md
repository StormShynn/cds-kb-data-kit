---
name: I_ILMDATAPRIVACYNOTIFICATION
description: "This CDS view provides the prerequisites for answering the following business questions: Do you want to extract the notifications of the personal or application data being archived or deleted or destroyed from the application system?"
app_component: BW-GEN-DPP
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ILMDATAPRIVACYNOTIFICATION')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: Do you want to extract the notifications of the personal or application data being archived or deleted or destroyed from the application system?"
tags:
  - BW
  - bo:companycode
  - BW-GEN
  - BW-GEN-DPP
  - component:BW-GEN-DPP
  - interface-view
  - notification
  - metadata-only
---
# I_ILMDATAPRIVACYNOTIFICATION

**This CDS view provides the prerequisites for answering the following business questions: Do you want to extract the notifications of the personal or application data being archived or deleted or destroyed from the application system?**

| Property | Value |
|---|---|
| App Component | `BW-GEN-DPP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ILMDATAPRIVACYNOTIFICATION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ILMNotificationUUID` |  | |  |  | `CHAR(32)` | UUID in Character Format |
| `ILMNotifDataObjectID` |  | |  |  | `INT4(10)` | Object Number |
| `ILMNotifDataObjectRecdID` |  | |  |  | `INT4(10)` | Record Number |
| `ILMNotificationTable` |  | |  |  | `CHAR(30)` | Table Name |
| `ILMNotificationField` |  | |  |  | `CHAR(30)` | Field Name |
| `ILMObject` |  | |  |  | `CHAR(30)` | ILM Object Name |
| `CDSView` |  | |  |  | `CHAR(30)` | DD: Name of Structured Object (e.g. Entity, Context) |
| `CDSViewField` |  | |  |  | `CHAR(30)` | Field Name |
| `ILMNotifCreationDateTime` |  | |  |  | `DEC(21)` | UTC time stamp in long form (YYYYMMDDhhmmss,mmmuuun) |
| `ILMNotificationMode` |  | |  |  | `CHAR(2)` | ILM Notification Mode |
| `ILMToSAPBWNotificationMode` |  | |  |  | `CHAR(1)` | Notification Mode |
| `DataBlockingDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `DataExpirationDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `CDSViewExtractionIsActive` |  | |  |  | `CHAR(1)` | Generic Extractor Checkbox |
| `SAPBWOperationalDataProvider` |  | |  |  | `CHAR(30)` | ODP Name |
