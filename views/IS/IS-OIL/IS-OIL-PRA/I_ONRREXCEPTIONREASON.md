---
name: I_ONRREXCEPTIONREASON
description: "Office of Natural Resources Revenue Exception Reason"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRREXCEPTIONREASON')/$value
semantic_en: "Office of Natural Resources Revenue Exception Reason"
tags:
  - IS
  - bo:companycode
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - metadata-only
---
# I_ONRREXCEPTIONREASON

**Office of Natural Resources Revenue Exception Reason**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRREXCEPTIONREASON')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ExceptionReason` |  | |  |  | `CHAR(3)` | ONRR-2014 - Suspend Reason Code |
| `ExceptionReasonName` |  | |  |  | `CHAR(30)` | ONRR Exception Reason |
| `EntityIsInactive` |  | |  |  | `CHAR(1)` | Inactive indicator |
