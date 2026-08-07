---
name: I_CABILLGDOCPAYMENT
description: This CDS view retrieves the payment data items of a billing document in Convergent Invoicing. This CDS view provides the data to answer the following business questions: Which payment method is to be used for this business transaction? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CABILLGDOCPAYMENT')/$value
semantic_en: This CDS view retrieves the payment data items of a billing document in Convergent Invoicing. This CDS view provides the data to answer the following business questions: Which payment method is to be used for this business transaction? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
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
  - transaction
  - metadata-only
---
# I_CABILLGDOCPAYMENT

**This CDS view retrieves the payment data items of a billing document in Convergent Invoicing. This CDS view provides the data to answer the following business questions: Which payment method is to be used for this business transaction? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
