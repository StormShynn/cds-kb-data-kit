---
name: I_PAYMENTHDRREJECTIONRSNTEXT
description: "Payment Header Rejection Reason - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PAYMENTHDRREJECTIONRSNTEXT')/$value
semantic_en: "Payment Header Rejection Reason - Text"
tags:
  - IS
  - bo:salesorder
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - payment
  - metadata-only
---
# I_PAYMENTHDRREJECTIONRSNTEXT

**Payment Header Rejection Reason - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PAYMENTHDRREJECTIONRSNTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PaymentHeaderRejectionRsn` |  | |  |  | `CHAR(3)` | Payment Processing - High Level Reject Code |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `PaymentHeaderRejectionRsnName` |  | |  |  | `CHAR(30)` | Detail Reject Name |
