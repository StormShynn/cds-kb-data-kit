---
name: I_TREASURYACCOUNTINGPOSITION
description: "Treasury Accounting Position"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TREASURYACCOUNTINGPOSITION')/$value
semantic_en: "Treasury Accounting Position"
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
# I_TREASURYACCOUNTINGPOSITION

**Treasury Accounting Position**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TREASURYACCOUNTINGPOSITION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TreasuryPosition` |  | |  |  | `CHAR(32)` | Object Identity in Database Format |
| `TrsyPositionIdentificationUUID` |  | |  |  | `CHAR(32)` | Object Identity in Database Format |
| `TreasuryGLAccountAssignmentRef` |  | |  |  | `CHAR(12)` | Account Assignment Reference of Position Management |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
