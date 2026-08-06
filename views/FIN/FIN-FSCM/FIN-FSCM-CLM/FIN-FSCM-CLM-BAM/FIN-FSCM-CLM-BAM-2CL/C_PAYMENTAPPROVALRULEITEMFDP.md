---
name: C_PAYMENTAPPROVALRULEITEMFDP
description: Form Data Provider for PAR Item
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYMENTAPPROVALRULEITEMFDP')/$value
semantic_en: Form Data Provider for PAR Item
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
# C_PAYMENTAPPROVALRULEITEMFDP

**Form Data Provider for PAR Item**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYMENTAPPROVALRULEITEMFDP')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `PaymentApprovalRule` | `CHAR(20)` | Payment Approval Rule ID |
| `PaymentApprovalRuleItem` | `CHAR(10)` | Payment Approval Rule Item |
| `PaymentApprovalCategory` | `CHAR(3)` | Payment Approval Category |
| `PaymentApprovalCategoryName` | `CHAR(60)` | Short Text for Fixed Values |
| `IsUnlimited` | `CHAR(1)` | Unlimited Payment Approval Authorization |
| `PaytApprvlLmtAmtInDfltLmtCrcy` | `CURR(23)` | Default Limit Amount |
| `PaytApprvlDfltLmtCurrency` | `CUKY(5)` | Default Limit Currency |
