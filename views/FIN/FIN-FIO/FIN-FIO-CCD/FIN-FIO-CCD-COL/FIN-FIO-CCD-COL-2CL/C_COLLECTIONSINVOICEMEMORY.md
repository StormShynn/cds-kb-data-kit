---
name: C_COLLECTIONSINVOICEMEMORY
description: This CDS view provides invoice data in SAP Collections Management, focusing on transactional and financial details related to accounting documents. It serves as a consumption view for end-users, enabling them to access and analyze collections-related information efficiently. This CDS view provides the data to answer the following business questions: What are the details of accounting documents and their associated items for a specific company code and fiscal year? How much is the open amount, paid amount, and credited amount in transaction currency for each invoice? What are the key dates related to billing, posting, payment, and dunning for each invoice? How many days is an invoice overdue, and what is the last dunning duration in days? What are the financial account types, posting keys, and special G/L codes associated with each invoice? What are the reasons for dunning blocks and what is the current dunning level for each invoice? What are the details of any dispute cases related to invoices, including disputed amounts and case status? What are the details and status of any promises to pay, including promised amounts and due dates? What are the resubmission details for invoices, including UUID, due dates, and reasons for resubmission? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FIN-FIO-CCD-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COLLECTIONSINVOICEMEMORY')/$value
semantic_en: This CDS view provides invoice data in SAP Collections Management, focusing on transactional and financial details related to accounting documents. It serves as a consumption view for end-users, enabling them to access and analyze collections-related information efficiently. This CDS view provides the data to answer the following business questions: What are the details of accounting documents and their associated items for a specific company code and fiscal year? How much is the open amount, paid amount, and credited amount in transaction currency for each invoice? What are the key dates related to billing, posting, payment, and dunning for each invoice? How many days is an invoice overdue, and what is the last dunning duration in days? What are the financial account types, posting keys, and special G/L codes associated with each invoice? What are the reasons for dunning blocks and what is the current dunning level for each invoice? What are the details of any dispute cases related to invoices, including disputed amounts and case status? What are the details and status of any promises to pay, including promised amounts and due dates? What are the resubmission details for invoices, including UUID, due dates, and reasons for resubmission? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - FIN
  - account
  - billing
  - bo:billingdocument
  - component:FIN-FIO-CCD-COL-2CL
  - consumption-view
  - document
  - FIN-FIO
  - FIN-FIO-CCD
  - FIN-FIO-CCD-COL
  - FIN-FIO-CCD-COL-2CL
  - invoice
  - lob:controlling
  - lob:finance
  - payment
  - transaction
  - metadata-only
---
# C_COLLECTIONSINVOICEMEMORY

**This CDS view provides invoice data in SAP Collections Management, focusing on transactional and financial details related to accounting documents. It serves as a consumption view for end-users, enabling them to access and analyze collections-related information efficiently. This CDS view provides the data to answer the following business questions: What are the details of accounting documents and their associated items for a specific company code and fiscal year? How much is the open amount, paid amount, and credited amount in transaction currency for each invoice? What are the key dates related to billing, posting, payment, and dunning for each invoice? How many days is an invoice overdue, and what is the last dunning duration in days? What are the financial account types, posting keys, and special G/L codes associated with each invoice? What are the reasons for dunning blocks and what is the current dunning level for each invoice? What are the details of any dispute cases related to invoices, including disputed amounts and case status? What are the details and status of any promises to pay, including promised amounts and due dates? What are the resubmission details for invoices, including UUID, due dates, and reasons for resubmission? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FIO-CCD-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COLLECTIONSINVOICEMEMORY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Document Number of an Accounting Document |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocumentItem` |  | |  |  | `NUMC(3)` | Number of Line Item Within Accounting Document |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `BillingDocument` |  | |  |  | `CHAR(10)` | Billing Document |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date in the Document |
| `NetDueDate` |  | |  |  | `DATS(8)` | Net Due Date |
| `CashDiscount1DueDate` |  | |  |  | `DATS(8)` | Due Date for Cash Discount 1 |
| `PaymentDate` |  | |  |  | `DATS(8)` | Date of Last Incoming Payment for Invoice |
| `LastDunningDate` |  | |  |  | `DATS(8)` | Date of Last Dunning Notice for Invoice |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(15)` | Original Amount of Invoice or Credit |
| `PaidAmount` |  | |  |  | `CURR(15)` | Amount Paid |
| `OpenAmountInDocumentCurrency` |  | |  |  | `CURR(15)` | Open Amount |
| `CreditedAmount` |  | |  |  | `CURR(13)` | Total of All Credits for Selected Invoice |
| `DunnedAmount` |  | |  |  | `CURR(15)` | Dunned Amount |
| `ArrangedAmount` |  | |  |  | `CURR(13)` | Amount Arranged for Payment |
| `CashDiscountAmtInTransacCrcy` |  | |  |  | `CURR(13)` | Cash Discount Amount in Document Currency |
| `BranchAccount` |  | |  |  | `CHAR(10)` | Customer Number |
| `ObjectKey` |  | |  |  | `CHAR(21)` | Invoice Key |
| `OverdueDays` |  | |  |  | `INT4(10)` |  |
| `ReferenceDocumentLogicalSystem` |  | |  |  | `CHAR(10)` | Logical System of Reference Document |
| `LastDunningDurationInDays` |  | |  |  | `INT4(10)` |  |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `PostingKey` |  | |  |  | `CHAR(2)` | Posting Key |
| `SpecialGLCode` |  | |  |  | `CHAR(1)` | Special G/L Indicator |
| `DunningBlockingReason` |  | |  |  | `CHAR(1)` | Dunning Block Reason |
| `DocumentItemText` |  | |  |  | `CHAR(50)` | Item Text |
| `DunningLevel` |  | |  |  | `NUMC(1)` | Dunning Level |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `DocumentDate` |  | |  |  | `DATS(8)` | Journal Entry Date |
| `OperationalGLAccount` |  | |  |  | `CHAR(10)` | Operational General Ledger Account |
| `PaymentMethod` |  | |  |  | `CHAR(1)` | Payment Method |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `Reference1InDocumentHeader` |  | |  |  | `CHAR(20)` | Internal ID of Reference Key 1 in Document Header |
| `Reference2InDocumentHeader` |  | |  |  | `CHAR(20)` | Internal ID of Reference Key 2 in Document Header |
| `DisputeCase` |  | |  |  | `CHAR(12)` | Case ID |
| `DisputedAmount` |  | |  |  | `CURR(15)` | Current Disputed Amount |
| `CaseReason` |  | |  |  | `CHAR(4)` | Reason for Case |
| `CaseStatus` |  | |  |  | `NUMC(2)` | Case: Status |
| `PromiseToPay` |  | |  |  | `CHAR(12)` | Case ID |
| `PromisedAmount` |  | |  |  | `CURR(15)` | Promised Amount |
| `PromiseToPayDueDate` |  | |  |  | `DATS(8)` | Date for Which Payment Is Promised |
| `PromiseToPayLevel` |  | |  |  | `INT1(3)` | Level of Promise to Pay |
| `PromiseToPayStatus` |  | |  |  | `CHAR(1)` | State of Promise to Pay |
| `ResubmissionUUID` |  | |  |  | `CHAR(32)` | UUID in Character Format |
| `ResubmissionDueDate` |  | |  |  | `DATS(8)` | Resubmission Date |
| `ResubmissionReason` |  | |  |  | `CHAR(4)` | Reason for Resubmission |
