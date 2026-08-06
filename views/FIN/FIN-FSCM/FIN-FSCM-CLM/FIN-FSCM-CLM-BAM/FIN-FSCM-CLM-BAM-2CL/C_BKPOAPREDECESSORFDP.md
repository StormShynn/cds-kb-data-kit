---
name: C_BKPOAPREDECESSORFDP
description: Form Data Provider for POA Predecessor
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKPOAPREDECESSORFDP')/$value
semantic_en: Form Data Provider for POA Predecessor
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
# C_BKPOAPREDECESSORFDP

**Form Data Provider for POA Predecessor**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKPOAPREDECESSORFDP')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `BankPowerOfAttorneyUUID` | `RAW(16)` | Power of Attorney UUID |
| `BkPOAPredecessorUUID` | `RAW(16)` | Power of Attorney: Predecessor Row UUID |
| `BkPOAAuthorizationGroup` | `CHAR(10)` | Authorization Group for Powers of Attorney |
| `BankPowerOfAttorneyPredecessor` | `CHAR(20)` | ID of Predecessor Power of Attorney |
| `PredecessorBankPOAUUID` | `RAW(16)` | Power of Attorney UUID |
| `BankPowerOfAttorneyName` | `CHAR(40)` | Power of Attorney Description |
| `ValidityEndDate` | `DATS(8)` | Valid-To Date |
| `ValidityStartDate` | `DATS(8)` | Valid-From Date |
