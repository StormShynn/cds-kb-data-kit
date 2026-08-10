---
name: I_ONRRREPTRANSTYPETEXT
description: "ONRR Reported Transaction Type - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRREPTRANSTYPETEXT')/$value
semantic_en: "ONRR Reported Transaction Type - Text"
tags:
  - IS
  - bo:purchaseorder
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - transaction
  - metadata-only
---
# I_ONRRREPTRANSTYPETEXT

**ONRR Reported Transaction Type - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRREPTRANSTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ONRRReportedTransType` |  | |  |  | `CHAR(2)` | ONRR-2014 - Transaction Code |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `ONRRReportedTransTypeName` |  | |  |  | `CHAR(60)` | ONRR Reported Transaction Type Name |
