---
name: C_PAYMENTAPPROVALRULEFDP
description: Form Data Provider for PAR
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYMENTAPPROVALRULEFDP')/$value
semantic_en: Form Data Provider for PAR
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
# C_PAYMENTAPPROVALRULEFDP

**Form Data Provider for PAR**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYMENTAPPROVALRULEFDP')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `PaymentApprovalRule` | `CHAR(20)` | Payment Approval Rule ID |
| `PaymentApprovalRuleName` | `CHAR(40)` | Description of Payment Approval Rule |
| `PaymentApprovalRuleStatus` | `CHAR(2)` | Payment Approval Rule Status |
| `PaymentApprovalRuleStatusName` | `CHAR(60)` | Short Text for Fixed Values |
| `PaytApprvlDfltLmtCurrency` | `CUKY(5)` | Default Limit Currency |
