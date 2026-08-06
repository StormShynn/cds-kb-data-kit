---
name: I_DISPUTECASE
description: Dispute Case
app_component: FIN-FSCM-DM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DISPUTECASE')/$value
semantic_en: Dispute Case
tags:
  - FIN
  - component:FIN-FSCM-DM-2CL
  - FIN-FSCM
  - FIN-FSCM-DM
  - FIN-FSCM-DM-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_DISPUTECASE

**Dispute Case**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-DM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DISPUTECASE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `DisputeCaseUUID` | `CHAR(32)` | UUID in Character Format |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `Customer` | `CHAR(10)` | Key of Customer in Accounts Receivable Accounting |
| `Status` | `CHAR(3)` | Case: System Status |
| `DisputedAmount` | `CURR(15)` | Current Disputed Amount |
| `OriginalAmount` | `CURR(15)` | Original Disputed Amount |
| `Currency` | `CUKY(5)` | Currency of Dispute Case |
| `DisputeCaseRootCause` | `CHAR(4)` | Root Cause Code |
| `DisputeCaseCoordinator` | `CHAR(12)` | Coordinator of Dispute Case |
| `DsputCaseCoordinatorFullName` | `CHAR(80)` | User Description |
| `GlobalCurrency` | `CUKY(5)` | Global Currency |
| `GlobalCurrencyExchangeRateType` | `CHAR(4)` | Exchange Rate Type |
