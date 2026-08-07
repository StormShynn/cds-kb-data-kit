---
name: _DCO_I_RBLPYBLTRANSACTIONITEM
description: "This CDS view provides access to receivable and payable transaction items, including detailed information about accounting documents, clearing data, payment terms, and business partner relationships. This CDS view provides the data to answer the following business questions: What are the open receivables and payables for a specific business partner? Which items are overdue and require dunning or payment follow-up? What is the clearing status of receivable and payable items? Which items are blocked for payment or dunning? What are the cash discount terms and due dates for open items? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_RBLPYBLTRANSACTIONITEM')/$value
semantic_en: "This CDS view provides access to receivable and payable transaction items, including detailed information about accounting documents, clearing data, payment terms, and business partner relationships. This CDS view provides the data to answer the following business questions: What are the open receivables and payables for a specific business partner? Which items are overdue and require dunning or payment follow-up? What is the clearing status of receivable and payable items? Which items are blocked for payment or dunning? What are the cash discount terms and due dates for open items? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
keywords:
  - "Receivable Payable Item"
tags:
  - FIN
  - account
  - bo:companycode
  - component:FIN-FSCM-COL-2CL
  - document
  - FIN-FSCM
  - FIN-FSCM-COL
  - FIN-FSCM-COL-2CL
  - lob:controlling
  - lob:finance
  - payment
  - transaction
  - metadata-only
---
# _DCO_I_RBLPYBLTRANSACTIONITEM

**This CDS view provides access to receivable and payable transaction items, including detailed information about accounting documents, clearing data, payment terms, and business partner relationships. This CDS view provides the data to answer the following business questions: What are the open receivables and payables for a specific business partner? Which items are overdue and require dunning or payment follow-up? What is the clearing status of receivable and payable items? Which items are blocked for payment or dunning? What are the cash discount terms and due dates for open items? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_RBLPYBLTRANSACTIONITEM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RblPyblTransactionItemUUID` |  | |  |  | `RAW(16)` | Receivable Item UUID |
| `RblPyblTransactionUUID` |  | |  |  | `RAW(16)` | Receivable Item Transaction |
| `RblPyblPreviousTransactionUUID` |  | |  |  | `RAW(16)` | Receivable Item - Previous Transaction UUID |
| `RblPyblItemIsObsolete` |  | |  |  | `CHAR(1)` | Receivable Item Is Obsolete |
| `DCoAccountingDocumentID` |  | |  |  | `CHAR(32)` | ID of Receivable Item |
| `ReceivablePayableDocument` |  | |  |  | `CHAR(32)` | ID of the Original Subledger Document |
| `ReceivablePayableDocumentItem` |  | |  |  | `NUMC(6)` | Item Number |
| `RblPyblDocumentSubitem` |  | |  |  | `NUMC(3)` | Subitem |
| `DCoAccountingDocumentOrigin` |  | |  |  | `CHAR(5)` | Origin of Receivable Item |
| `LogicalSystem` |  | |  |  | `CHAR(10)` | Logical System of Receivable Item |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Accounting Document |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code (FI System) |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `DocumentDate` |  | |  |  | `DATN(8)` | Document Date |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `NetDueDate` |  | |  |  | `DATS(8)` | Original Due Date of Receivable Item |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `Customer` |  | |  |  | `CHAR(10)` | Customer |
| `ContractAccount` |  | |  |  | `CHAR(12)` | Contract Account |
| `CASubApplication` |  | |  |  | `CHAR(1)` | Subapplication |
| `CAContract` |  | |  |  | `CHAR(20)` | Contract Number |
| `BranchAccount` |  | |  |  | `CHAR(10)` | Branch of a Head Office Account |
| `DCoAccountingDocumentBranch` |  | |  |  | `CHAR(10)` | Branch Account |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount of Receivable Item |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency of Receivable Item |
| `RblPyblTransactionType` |  | |  |  | `CHAR(2)` | Transaction Type |
| `CashDiscountAmtInClrgTransCrcy` |  | |  |  | `CURR(23)` | Cash Discount Granted |
| `CashDiscountBaseAmount` |  | |  |  | `CURR(23)` | Base Amount for Cash Discount |
| `CashDiscount1DueDate` |  | |  |  | `DATS(8)` | Date for First Cash Discount |
| `CashDiscount2DueDate` |  | |  |  | `DATS(8)` | Date for Second Cash Discount |
| `CashDiscount1Percent` |  | |  |  | `DEC(5)` | Rate for First Cash Discount |
| `CashDiscount2Percent` |  | |  |  | `DEC(5)` | Rate for Second Cash Discount |
| `RblPyblItemIsCleared` |  | |  |  | `CHAR(1)` | Receivable Item Is Cleared |
| `ClearingDate` |  | |  |  | `DATS(8)` | Clearing Date |
| `ClearingRblPyblDocument` |  | |  |  | `CHAR(32)` | Clearing Document |
| `RblPyblClearingReason` |  | |  |  | `CHAR(6)` | Clearing Reason |
| `ClearingTransactionCurrency` |  | |  |  | `CUKY(5)` | Clearing Currency |
| `ClrgBaseAmountInClrgTransCrcy` |  | |  |  | `CURR(23)` | Base Amount for Clearing |
| `ClearingAmountInClrgTransCrcy` |  | |  |  | `CURR(23)` | Clearing Amount |
| `ResidualAmountInClrgTransCrcy` |  | |  |  | `CURR(23)` | Residual Amount |
| `DeductionAmountInClrgTransCrcy` |  | |  |  | `CURR(23)` | Amount Deducted from Invoice |
| `PostgClassfctnRblPyblCodeOrign` |  | |  |  | `CHAR(1)` | Origin of Posting Classification |
| `PostingClassification` |  | |  |  | `CHAR(10)` | Posting Classification |
| `PostgSubclfnRblPyblCodeOrigin` |  | |  |  | `CHAR(1)` | Origin of Posting Subclassification |
| `PostingSubclassification` |  | |  |  | `CHAR(2)` | Posting Subclassification |
| `ReceivablePayableItemText` |  | |  |  | `CHAR(100)` | Text for the Receivable Item |
| `IsSalesRelated` |  | |  |  | `CHAR(1)` | Receivable Item Is Sales-Related |
| `IsUsedInPaymentTransaction` |  | |  |  | `CHAR(1)` | Receivable Item Represents a Payment |
| `RblPyblItemIsBlockedForDunning` |  | |  |  | `CHAR(1)` | Is Blocked for Dunning |
| `DunningBlockStartDate` |  | |  |  | `DATS(8)` | Start Date of Dunning Block |
| `DunningBlockEndDate` |  | |  |  | `DATS(8)` | End Date of Dunning Block |
| `RblPyblItemIsBlockedForPayment` |  | |  |  | `CHAR(1)` | Is Blocked for Payments |
| `PaymentBlockStartDate` |  | |  |  | `DATS(8)` | Start Date of Payment Block |
| `PaymentBlockEndDate` |  | |  |  | `DATS(8)` | End Date of Payment Block |
| `OriginalReferenceDocument` |  | |  |  | `CHAR(20)` | Invoice |
| `ReferenceDocumentType` |  | |  |  | `CHAR(5)` | Invoice Type |
| `ReferenceDocumentLogicalSystem` |  | |  |  | `CHAR(10)` | Logical System of Invoice |
| `DCoOriglAccountingDocumentID` |  | |  |  | `CHAR(32)` | Original Receivable Item |
| `OriginalRblPyblDocument` |  | |  |  | `CHAR(32)` | Reference to the Original Document |
| `OriginalRblPyblDocumentItem` |  | |  |  | `NUMC(6)` | Reference to the Original Document Item |
| `OriginalRblPyblDocumentSubitem` |  | |  |  | `NUMC(3)` | Reference to the Original Document Subitem |
| `OriglRblPyblItmAmtInOrigItmTC` |  | |  |  | `CURR(23)` | Original Amount of the Receivable Item |
| `OriglItemTransactionCurrency` |  | |  |  | `CUKY(5)` | Original Currency of the Receivable Item |
| `RblPyblItemHasRelations` |  | |  |  | `CHAR(1)` | Receivable Item Has Relations |
| `RelatedRblPyblDocument` |  | |  |  | `CHAR(32)` | Related Document Reference |
| `RelatedRblPyblDocumentItem` |  | |  |  | `NUMC(6)` | Related Document Item Reference |
| `RelatedRblPyblDocumentSubitem` |  | |  |  | `NUMC(3)` | Related Document Subitem Reference |
| `DCoRefAccountingDocumentID` |  | |  |  | `CHAR(32)` | Related Receivable Item |
| `RblPyblDocumentRelationType` |  | |  |  | `CHAR(1)` | Relationship Type |
| `RblPyblDocumentReference` |  | |  |  | `CHAR(35)` | Reference Document |
| `RblPyblAltvDocumentReference` |  | |  |  | `CHAR(35)` | Alternative Reference Document |
| `FirstRblPyblAddlReference` |  | |  |  | `CHAR(35)` | Reference 1 |
| `SecondRblPyblAddlReference` |  | |  |  | `CHAR(35)` | Reference 2 |
| `ThirdRblPyblAddlReference` |  | |  |  | `CHAR(35)` | Reference 3 |
| `AssignmentReference` |  | |  |  | `CHAR(18)` | Assignment Reference |
| `DCoPredecessorReceivableItem` |  | |  |  | `CHAR(32)` | Predecessor Receivable Item |
| `RsdlItmPredecessorDocument` |  | |  |  | `CHAR(32)` | Receivable/Payable Item Predecessor ID |
| `RsdlItmPredecessorDocumentItem` |  | |  |  | `NUMC(6)` | Receivable/Payable Predecessor Item |
| `RblPyblDocumentIsReversed` |  | |  |  | `CHAR(1)` | Is Reversed |
| `RblPyblDocumentIsReversal` |  | |  |  | `CHAR(1)` | Is Reversal |
| `ReversedRblPyblDocument` |  | |  |  | `CHAR(32)` | Reversed Document ID |
| `ReversalRblPyblDocument` |  | |  |  | `CHAR(32)` | Reversal Document ID |
| `LastChangeDateTime` |  | |  |  | `DEC(21)` | Last Changed At/On |
| `CreationDateTime` |  | |  |  | `DEC(21)` | Created At/On |
| `DCoPaymentIsArranged` |  | |  |  | `CHAR(1)` | Payment Is Arranged |
| `PaymentDifferenceReason` |  | |  |  | `CHAR(3)` | Payment Difference Reason |
| `CreditControlArea` |  | |  |  | `CHAR(4)` | Credit Control Area |
| `ClearingIsReversed` |  | |  |  | `CHAR(1)` | Clearing Is Reversed |
