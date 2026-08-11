---
name: I_PROMISETOPAY
description: "This CDS view provides detailed attributes related to promises to pay in SAP Collections Management, allowing you to analyze and manage financial commitments effectively. This CDS view provides the data to answer the following business questions: What are the details of promise-to-pay agreements associated with specific dispute cases? How much has been promised and paid in relation to these agreements? What is the status and due date of each promise-to-pay agreement? Who has given the promise to pay, and how many installments are involved? What are the currency details and exchange rates applicable to these transactions? How can the promise-to-pay data be linked to specific invoices and customers? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROMISETOPAY')/$value
semantic_en: "This CDS view provides detailed attributes related to promises to pay in SAP Collections Management, allowing you to analyze and manage financial commitments effectively. This CDS view provides the data to answer the following business questions: What are the details of promise-to-pay agreements associated with specific dispute cases? How much has been promised and paid in relation to these agreements? What is the status and due date of each promise-to-pay agreement? Who has given the promise to pay, and how many installments are involved? What are the currency details and exchange rates applicable to these transactions? How can the promise-to-pay data be linked to specific invoices and customers? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FIN
  - bo:billingdocument
  - component:FIN-FSCM-COL-2CL
  - customer
  - FIN-FSCM
  - FIN-FSCM-COL
  - FIN-FSCM-COL-2CL
  - interface-view
  - invoice
  - lob:controlling
  - lob:finance
  - transaction
  - metadata-only
---
# I_PROMISETOPAY

**This CDS view provides detailed attributes related to promises to pay in SAP Collections Management, allowing you to analyze and manage financial commitments effectively. This CDS view provides the data to answer the following business questions: What are the details of promise-to-pay agreements associated with specific dispute cases? How much has been promised and paid in relation to these agreements? What is the status and due date of each promise-to-pay agreement? Who has given the promise to pay, and how many installments are involved? What are the currency details and exchange rates applicable to these transactions? How can the promise-to-pay data be linked to specific invoices and customers? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROMISETOPAY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DisputeCaseUUID` |  | |  |  | `CHAR(32)` | FSCM-DM: GUID (Internal Key of Dispute Case) |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Customer` |  | |  |  | `CHAR(10)` | Key of Customer in Accounts Receivable Accounting |
| `LinkedInvoiceKey` |  | |  |  | `CHAR(70)` | Object key |
| `PromisedAmount` |  | |  |  | `CURR(15)` | Amount Promised for Payment |
| `PaidAmount` |  | |  |  | `CURR(15)` | Amount Paid |
| `Currency` |  | |  |  | `CUKY(5)` | Currency of Promise to Pay |
| `DueDate` |  | |  |  | `DATS(8)` | Date for Which Payment Is Promised |
| `CreationDate` |  | |  |  | `DATS(8)` | Date on Which Promise to Pay Was Given |
| `Status` |  | |  |  | `CHAR(1)` | State of Promise to Pay |
| `LastPaymentDate` |  | |  |  | `DATS(8)` | Date of Last Payment |
| `PromiseToPayLevel` |  | |  |  | `INT1(3)` | Level of Promise to Pay |
| `PromiseToPayGivenByPersonName` |  | |  |  | `CHAR(40)` | Clerk That Gave the Promise to Pay |
| `NumberOfInstallments` |  | |  |  | `INT4(10)` | Number of Installments in the Promise to Pay in Installments |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `GlobalCurrencyExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
