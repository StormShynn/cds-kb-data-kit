---
name: I_ONRRPAYMETHTEXT
description: Office of Natural Resources Revenue Payment Method - Text
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRPAYMETHTEXT')/$value
semantic_en: Office of Natural Resources Revenue Payment Method - Text
tags:
  - IS
  - bo:companycode
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - payment
  - metadata-only
---
# I_ONRRPAYMETHTEXT

**Office of Natural Resources Revenue Payment Method - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRPAYMETHTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ONRRPaymentMethod` |  | |  |  | `CHAR(1)` | ONRR-2014 - Payment Method Code |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `ONRRPaymentMethodName` |  | |  |  | `CHAR(60)` | ONRR Payment Method Name |
