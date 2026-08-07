---
name: I_PROCESSMESSAGE
description: Process Message Header
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROCESSMESSAGE')/$value
semantic_en: Process Message Header
tags:
  - PP
  - component:PP-VDM-2CL
  - interface-view
  - lob:manufacturing
  - PP-VDM
  - PP-VDM-2CL
  - metadata-only
---
# I_PROCESSMESSAGE

**Process Message Header**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROCESSMESSAGE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProcessMessage` |  | |  |  | `NUMC(18)` | Number of the Process Message |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `ProcessOrder` |  | |  |  | `CHAR(12)` | Process Order Number |
| `ProcessMessageCategory` |  | |  |  | `CHAR(8)` | Process Message Category |
| `ProcessMessageProcessingStatus` |  | |  |  | `CHAR(1)` | Processing Status of the Process Message/the Control Recipe |
| `ProcessMessageIsForTesting` |  | |  |  | `CHAR(1)` | Indicator: Message or Control Recipe for Test Purposes |
| `ProcessMessageSenderName` |  | |  |  | `CHAR(32)` | Sender of the process message |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time when the record was created |
