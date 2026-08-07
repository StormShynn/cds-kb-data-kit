---
name: _DCO_I_PAYTDIFFREASONTEXT
description: Payment Difference Reason - Text
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_PAYTDIFFREASONTEXT')/$value
semantic_en: Payment Difference Reason - Text
tags:
  - FIN
  - bo:salesorder
  - component:FIN-FSCM-COL-2CL
  - FIN-FSCM
  - FIN-FSCM-COL
  - FIN-FSCM-COL-2CL
  - lob:controlling
  - lob:finance
  - payment
  - metadata-only
---
# _DCO_I_PAYTDIFFREASONTEXT

**Payment Difference Reason - Text**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_PAYTDIFFREASONTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `LogicalSystem` |  | |  |  | `CHAR(10)` | Logical System |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code (FI System) |
| `PaymentDifferenceReason` |  | |  |  | `CHAR(3)` | Payment Difference Reason |
| `PaymentDifferenceReasonName` |  | |  |  | `CHAR(50)` | Description of Payment Difference Reason |
