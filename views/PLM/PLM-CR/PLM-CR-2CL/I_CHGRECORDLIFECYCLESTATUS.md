---
name: I_CHGRECORDLIFECYCLESTATUS
description: "Change Record LifeCycle Status"
app_component: PLM-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHGRECORDLIFECYCLESTATUS')/$value
semantic_en: "Change Record LifeCycle Status"
tags:
  - PLM
  - component:PLM-CR-2CL
  - interface-view
  - PLM-CR
  - PLM-CR-2CL
  - metadata-only
---
# I_CHGRECORDLIFECYCLESTATUS

**Change Record LifeCycle Status**

| Property | Value |
|---|---|
| App Component | `PLM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHGRECORDLIFECYCLESTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeRecordLifecycleStatus` |  | |  |  | `CHAR(2)` | Issue Lifecycle Status Code |
| `DomainValue` |  | |  |  | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `ABAPDomain` |  | |  |  | `CHAR(30)` | Domain name |
