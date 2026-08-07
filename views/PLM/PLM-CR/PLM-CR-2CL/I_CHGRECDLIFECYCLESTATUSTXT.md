---
name: I_CHGRECDLIFECYCLESTATUSTXT
description: Change Record LifeCycle Status - Text
app_component: PLM-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHGRECDLIFECYCLESTATUSTXT')/$value
semantic_en: Change Record LifeCycle Status - Text
tags:
  - PLM
  - component:PLM-CR-2CL
  - interface-view
  - PLM-CR
  - PLM-CR-2CL
  - metadata-only
---
# I_CHGRECDLIFECYCLESTATUSTXT

**Change Record LifeCycle Status - Text**

| Property | Value |
|---|---|
| App Component | `PLM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHGRECDLIFECYCLESTATUSTXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeRecordLifecycleStatus` |  | |  |  | `CHAR(2)` | Issue Lifecycle Status Code |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `DomainValue` |  | |  |  | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `ChangeRecordLifecycleStatusTxt` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
