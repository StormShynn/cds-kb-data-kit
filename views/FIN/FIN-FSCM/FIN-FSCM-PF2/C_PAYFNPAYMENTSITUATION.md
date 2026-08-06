---
name: C_PAYFNPAYMENTSITUATION
description: Requested Payments Situation
app_component: FIN-FSCM-PF2
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYFNPAYMENTSITUATION')/$value
semantic_en: Requested Payments Situation
tags:
  - FIN
  - component:FIN-FSCM-PF2
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-PF2
  - lob:finance
  - payment
  - metadata-only
---
# C_PAYFNPAYMENTSITUATION

**Requested Payments Situation**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-PF2` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYFNPAYMENTSITUATION')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `PayFnPaymentUUID` | `RAW(16)` | Payment UUID |
| `PayFnBusinessStatus` | `CHAR(4)` | Payment Business Status |
| `PayFnBusinessStatusText` | `CHAR(140)` | Payment Business Status Description |
| `PayFnOriginDocument` | `CHAR(35)` | Senders/Origin Document Identifier |
| `PayFnOriginDocumentTypeText` | `CHAR(140)` | ISO Code Name |
| `PayFnTransactionAmount` | `DEC(22)` | Amount |
| `PayFnTransactionCurrency` | `CUKY(5)` | Currency |
| `CategoryPurposeISOCode` | `CHAR(4)` | External Category Purpose Code |
| `PurposeISOCode` | `CHAR(4)` | External Purpose Code |
| `PayFnStatusReasonISOCode` | `CHAR(35)` | Status Reason Standard ISO Code |
| `PaymentStatusReasonText` | `CHAR(1)` |  |
| `PayFnInitiatorCompanyCode` | `CHAR(4)` | Payer Company Code |
| `PayFnApprovalDuration` | `DEC(15)` |  |
