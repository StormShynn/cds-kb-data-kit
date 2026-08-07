---
name: I_FTR_FAC_TRANS_CAT_VH_T
description: Facility Transaction Category - Text
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FTR_FAC_TRANS_CAT_VH_T')/$value
semantic_en: Facility Transaction Category - Text
tags:
  - FIN
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
  - transaction
  - metadata-only
---
# I_FTR_FAC_TRANS_CAT_VH_T

**Facility Transaction Category - Text**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FTR_FAC_TRANS_CAT_VH_T')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinInstrTransactionCategory` |  | |  |  | `NUMC(3)` | Transaction Category |
| `FinancialInstrProductCategory` |  | |  |  | `NUMC(3)` | Financial Product Category |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `DomainText` |  | |  |  | `CHAR(30)` | Name of Transaction Category |
