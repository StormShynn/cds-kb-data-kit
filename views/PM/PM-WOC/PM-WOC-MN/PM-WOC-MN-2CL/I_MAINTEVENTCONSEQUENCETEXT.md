---
name: I_MAINTEVENTCONSEQUENCETEXT
description: Consequence of Maintenance Event - Text
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTEVENTCONSEQUENCETEXT')/$value
semantic_en: Consequence of Maintenance Event - Text
tags:
  - PM
  - component:PM-WOC-MN-2CL
  - interface-view
  - lob:plant maintenance
  - PM-WOC
  - PM-WOC-MN
  - PM-WOC-MN-2CL
  - metadata-only
---
# I_MAINTEVENTCONSEQUENCETEXT

**Consequence of Maintenance Event - Text**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTEVENTCONSEQUENCETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `MaintEventCnsqncCategoryCode` |  | |  |  | `NUMC(2)` | Consequence Category ID |
| `MaintEventConsequenceCode` |  | |  |  | `NUMC(2)` | Consequence ID |
| `MaintEvtConsequenceDescription` |  | |  |  | `CHAR(70)` | Consequence Description |
