---
name: I_EWM_DELIVSTSHELPERTEXT
description: "Warehouse Delivery Status Helper - Text"
app_component: SCM-EWM-DLP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_DELIVSTSHELPERTEXT')/$value
semantic_en: "Warehouse Delivery Status Helper - Text"
tags:
  - SCM
  - component:SCM-EWM-DLP-2CL
  - delivery
  - interface-view
  - SCM-EWM
  - SCM-EWM-DLP
  - SCM-EWM-DLP-2CL
  - metadata-only
---
# I_EWM_DELIVSTSHELPERTEXT

**Warehouse Delivery Status Helper - Text**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-DLP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_DELIVSTSHELPERTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `DeliveryStatus` |  | |  |  | `CHAR(1)` | Status Value |
| `DeliveryStatusType` |  | |  |  | `CHAR(3)` |  |
| `StatusName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
