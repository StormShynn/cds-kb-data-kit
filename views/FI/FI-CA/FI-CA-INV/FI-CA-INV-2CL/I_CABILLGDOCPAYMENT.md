---
name: I_CABILLGDOCPAYMENT
description: Payment Data Items of Billing Document
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CABILLGDOCPAYMENT')/$value
semantic_en: Payment Data Items of Billing Document
tags:
  - FI
  - billing
  - bo:billingdocument
  - component:FI-CA-INV-2CL
  - document
  - FI-CA
  - FI-CA-INV
  - FI-CA-INV-2CL
  - interface-view
  - lob:cross_application components
  - lob:finance
  - payment
  - metadata-only
---
# I_CABILLGDOCPAYMENT

**Payment Data Items of Billing Document**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CABILLGDOCPAYMENT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CABillgDocument` |  | |  |  | `CHAR(12)` | Number of Billing Document |
| `CABillgDocPaymentItem` |  | |  |  | `NUMC(8)` | Sequence Number of Payment Data Item |
| `CABillgGrpgOfPaymentData` |  | |  |  | `CHAR(8)` | Grouping of Payment Data |
| `CABillgPaymentReference` |  | |  |  | `CHAR(30)` | Payment Reference |
| `CABillgPaymentAmount` |  | |  |  | `CURR(13)` | Maximum Payment Amount |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `CABillgDocPaytItmExtSyst` |  | |  |  | `CHAR(10)` | Payment Data Item in External System |
| `CABillgDocItemIsReversal` |  | |  |  | `CHAR(1)` | Reversal Item |
| `CAPaymentMethod` |  | |  |  | `CHAR(1)` | Payment Method |
| `CABankOfAltvBPForPayment` |  | |  |  | `CHAR(4)` | Bank Details ID of Payee |
| `CAAltvBPForPayment` |  | |  |  | `CHAR(10)` | Alternative Business Partner for Payments |
| `CAKeyForPaymentCardSupplement` |  | |  |  | `RAW(16)` | Key for Payment Card Supplement |
| `CAPaymentBillingStatus` |  | |  |  | `CHAR(1)` | Settlement Status |
| `CABillgDocPaymentItemPriority` |  | |  |  | `NUMC(4)` | Priority of Payment Type |
| `CABillgGroupingSourceItems` |  | |  |  | `CHAR(8)` | Grouping of Source Items |
