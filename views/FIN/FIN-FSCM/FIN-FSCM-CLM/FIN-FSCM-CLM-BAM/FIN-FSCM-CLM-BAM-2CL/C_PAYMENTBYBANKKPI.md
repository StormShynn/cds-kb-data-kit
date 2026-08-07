---
name: C_PAYMENTBYBANKKPI
description: "Total and Average Bank Payments - Query"
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYMENTBYBANKKPI')/$value
semantic_en: "Total and Average Bank Payments - Query"
tags:
  - FIN
  - component:FIN-FSCM-CLM-BAM-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-BAM
  - FIN-FSCM-CLM-BAM-2CL
  - lob:finance
  - payment
  - metadata-only
---
# C_PAYMENTBYBANKKPI

**Total and Average Bank Payments - Query**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYMENTBYBANKKPI')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankCountry` |  | |  |  | `CHAR(3)` | Bank Country/Region Key |
| `Bank` |  | |  |  | `CHAR(15)` | Bank Key |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `InAmountInDisplayCurrency` |  | |  |  | `CURR(23)` |  |
| `OutAmountInDisplayCurrency` |  | |  |  | `CURR(23)` |  |
| `NrOfBanksRated` |  | |  |  | `INT1(3)` |  |
