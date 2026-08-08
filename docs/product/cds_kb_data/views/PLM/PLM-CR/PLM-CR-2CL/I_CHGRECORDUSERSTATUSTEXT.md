---
name: I_CHGRECORDUSERSTATUSTEXT
description: "Change Record user status - Text"
app_component: PLM-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHGRECORDUSERSTATUSTEXT')/$value
semantic_en: "Change Record user status - Text"
tags:
  - PLM
  - component:PLM-CR-2CL
  - interface-view
  - PLM-CR
  - PLM-CR-2CL
  - metadata-only
---
# I_CHGRECORDUSERSTATUSTEXT

**Change Record user status - Text**

| Property | Value |
|---|---|
| App Component | `PLM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHGRECORDUSERSTATUSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `ChangeRecordStatus` |  | |  |  | `CHAR(2)` | User Status Code |
| `ChangeRecordStatusDescription` |  | |  |  | `CHAR(30)` | Status Text |
