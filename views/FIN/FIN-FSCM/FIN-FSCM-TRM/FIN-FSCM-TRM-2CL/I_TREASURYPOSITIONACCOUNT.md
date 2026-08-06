---
name: I_TREASURYPOSITIONACCOUNT
description: Treasury Position Account
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TREASURYPOSITIONACCOUNT')/$value
semantic_en: Treasury Position Account
tags:
  - FIN
  - account
  - bo:purchaseorder
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_TREASURYPOSITIONACCOUNT

**Treasury Position Account**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TREASURYPOSITIONACCOUNT')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CompanyCode` | `CHAR(4)` | Company Code |
| `TreasuryPositionAccount` | `CHAR(10)` | Futures Account for Listed Options and Futures |
| `TreasuryPositionAccountName` | `CHAR(30)` | Name of the Futures Account for Listed Options and Futures |
| `DepositoryBank` | `CHAR(10)` | Business Partner in Role Depository Bank |
