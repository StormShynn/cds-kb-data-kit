---
name: C_BKPOACOMPANYCODEFDP
description: POA Company Code Form Data Provider
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKPOACOMPANYCODEFDP')/$value
semantic_en: POA Company Code Form Data Provider
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
# C_BKPOACOMPANYCODEFDP

**POA Company Code Form Data Provider**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKPOACOMPANYCODEFDP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankPowerOfAttorneyUUID` |  | |  |  | `RAW(16)` | Power of Attorney UUID |
| `BkPOACompanyCodeUUID` |  | |  |  | `RAW(16)` | Power of Attorney: Company Code UUID |
| `BkPOAAuthorizationGroup` |  | |  |  | `CHAR(10)` | Authorization Group for Powers of Attorney |
| `BkPOACompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
