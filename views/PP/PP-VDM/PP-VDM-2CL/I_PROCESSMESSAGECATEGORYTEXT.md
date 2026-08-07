---
name: I_PROCESSMESSAGECATEGORYTEXT
description: Process Message Category - Text
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROCESSMESSAGECATEGORYTEXT')/$value
semantic_en: Process Message Category - Text
tags:
  - PP
  - component:PP-VDM-2CL
  - interface-view
  - lob:manufacturing
  - PP-VDM
  - PP-VDM-2CL
  - metadata-only
---
# I_PROCESSMESSAGECATEGORYTEXT

**Process Message Category - Text**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROCESSMESSAGECATEGORYTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `ProcessMessageCategory` |  | |  |  | `CHAR(8)` | Process Message Category |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `ProcessMessageCategoryName` |  | |  |  | `CHAR(40)` | Description of the Process Message or Instruction Category |
