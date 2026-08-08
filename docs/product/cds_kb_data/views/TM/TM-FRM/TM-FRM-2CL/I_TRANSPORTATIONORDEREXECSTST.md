---
name: I_TRANSPORTATIONORDEREXECSTST
description: "Transp Order Execution Status - Text"
app_component: TM-FRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORTATIONORDEREXECSTST')/$value
semantic_en: "Transp Order Execution Status - Text"
tags:
  - TM
  - bo:purchaseorder
  - component:TM-FRM-2CL
  - interface-view
  - order
  - TM-FRM
  - TM-FRM-2CL
  - metadata-only
---
# I_TRANSPORTATIONORDEREXECSTST

**Transp Order Execution Status - Text**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORTATIONORDEREXECSTST')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationOrderExecSts` |  | |  |  | `CHAR(2)` | Execution Status |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `TransportationOrderExecStsDesc` |  | |  |  | `CHAR(60)` | Transportation Order Execution Status Description |
