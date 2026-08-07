---
name: C_PAYMENTAPPROVALRULELIMITFDP
description: Form Data Provider for PAR Limit
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYMENTAPPROVALRULELIMITFDP')/$value
semantic_en: Form Data Provider for PAR Limit
tags:
  - FIN
  - component:FIN-FSCM-CLM-BAM-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-BAM
  - FIN-FSCM-CLM-BAM-2CL
  - lob:finance
  - metadata-only
---
# C_PAYMENTAPPROVALRULELIMITFDP

**Form Data Provider for PAR Limit**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYMENTAPPROVALRULELIMITFDP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PaymentApprovalRule` |  | |  |  | `CHAR(20)` | Payment Approval Rule ID |
| `PaymentApprovalRuleItem` |  | |  |  | `CHAR(10)` | Payment Approval Rule Item |
| `PaytApprvlLimitCurrency` |  | |  |  | `CUKY(5)` | Limit Currency |
| `PaytApprvlAmountInLmtCurrency` |  | |  |  | `CURR(23)` | Limit Amount |
