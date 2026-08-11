---
name: I_PRAPAYMENTCYCLETEXT
description: "PRA Payment Cycle - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAPAYMENTCYCLETEXT')/$value
semantic_en: "PRA Payment Cycle - Text"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - payment
  - metadata-only
---
# I_PRAPAYMENTCYCLETEXT

**PRA Payment Cycle - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAPAYMENTCYCLETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PaymentCycle` |  | |  |  | `CHAR(1)` | Payment Processing - Future Pay Flag |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `PaymentCycleName` |  | |  |  | `CHAR(60)` | Future Pay Name |
