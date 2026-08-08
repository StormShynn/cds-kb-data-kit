---
name: I_CMMDTYMTMMESSAGE
description: "Messages relevant for MTM"
app_component: LO-CMM-BF
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYMTMMESSAGE')/$value
semantic_en: "Messages relevant for MTM"
tags:
  - LO
  - component:LO-CMM-BF
  - interface-view
  - LO-CMM
  - LO-CMM-BF
  - lob:logistics general
  - lob:sourcing & procurement
  - metadata-only
---
# I_CMMDTYMTMMESSAGE

**Messages relevant for MTM**

| Property | Value |
|---|---|
| App Component | `LO-CMM-BF` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYMTMMESSAGE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SystemMessageNumber` |  | |  |  | `CHAR(3)` | Message number |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `SystemMessageText` |  | |  |  | `CHAR(73)` | Message Text |
