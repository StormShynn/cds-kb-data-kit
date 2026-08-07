---
name: C_BKPOAACTIVITYASSIGNMENTFDP
description: Form Data Provider for POA Activity
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKPOAACTIVITYASSIGNMENTFDP')/$value
semantic_en: Form Data Provider for POA Activity
tags:
  - FIN
  - bo:purchaseorder
  - component:FIN-FSCM-CLM-BAM-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-BAM
  - FIN-FSCM-CLM-BAM-2CL
  - lob:finance
  - metadata-only
---
# C_BKPOAACTIVITYASSIGNMENTFDP

**Form Data Provider for POA Activity**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKPOAACTIVITYASSIGNMENTFDP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankPowerOfAttorneyUUID` |  | |  |  | `RAW(16)` | Power of Attorney UUID |
| `BkPOAActivityAssignmentUUID` |  | |  |  | `RAW(16)` | Power of Attorney: Activity UUID |
| `BkPOAAuthorizationGroup` |  | |  |  | `CHAR(10)` | Authorization Group for Powers of Attorney |
| `BankPowerOfAttorneyActivity` |  | |  |  | `CHAR(4)` | Power of Attorney: Activity ID |
| `BkPowerOfAttorneyActivityName` |  | |  |  | `CHAR(50)` | Power of Attorney: Activity Description |
