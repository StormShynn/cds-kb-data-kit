---
name: I_ONRRPAYERCODE
description: "Office of Natural Resources Revenue Payor Code"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRPAYERCODE')/$value
semantic_en: "Office of Natural Resources Revenue Payor Code"
tags:
  - IS
  - bo:companycode
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - metadata-only
---
# I_ONRRPAYERCODE

**Office of Natural Resources Revenue Payor Code**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRPAYERCODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ONRRPayerCode` |  | |  |  | `NUMC(5)` | ONRR-2014 - Payor Code |
| `ONRRPayerCodeName` |  | |  |  | `CHAR(30)` | ONEE-2014 - Payor Name |
