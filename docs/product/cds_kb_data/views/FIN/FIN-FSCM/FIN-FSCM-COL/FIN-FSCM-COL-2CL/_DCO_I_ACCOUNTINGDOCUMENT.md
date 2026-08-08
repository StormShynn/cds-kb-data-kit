---
name: _DCO_I_ACCOUNTINGDOCUMENT
description: "This CDS view provides access to receivable items with their key financial attributes, payment status, and document relationships. This CDS view provides the data to answer the following business questions: What is the total open amount for a specific business partner? Which receivable items are overdue and not yet cleared? How much has been paid, credited, or written off for a particular document? Which documents are blocked for payment or have payment arrangements? What is the document hierarchy and relationship between original, preceding, and reference documents? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_ACCOUNTINGDOCUMENT')/$value
semantic_en: "This CDS view provides access to receivable items with their key financial attributes, payment status, and document relationships. This CDS view provides the data to answer the following business questions: What is the total open amount for a specific business partner? Which receivable items are overdue and not yet cleared? How much has been paid, credited, or written off for a particular document? Which documents are blocked for payment or have payment arrangements? What is the document hierarchy and relationship between original, preceding, and reference documents? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-COL-2CL
  - document
  - FIN-FSCM
  - FIN-FSCM-COL
  - FIN-FSCM-COL-2CL
  - lob:controlling
  - lob:finance
  - payment
  - metadata-only
---
# _DCO_I_ACCOUNTINGDOCUMENT

**This CDS view provides access to receivable items with their key financial attributes, payment status, and document relationships. This CDS view provides the data to answer the following business questions: What is the total open amount for a specific business partner? Which receivable items are overdue and not yet cleared? How much has been paid, credited, or written off for a particular document? Which documents are blocked for payment or have payment arrangements? What is the document hierarchy and relationship between original, preceding, and reference documents? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_ACCOUNTINGDOCUMENT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DCoAccountingDocumentUUID` |  | |  |  | `RAW(16)` | UUID of Receivable Item |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code (FI System) |
| `DCoAccountingDocumentOrigin` |  | |  |  | `CHAR(5)` | Origin of Receivable Item |
| `PostingClassification` |  | |  |  | `CHAR(10)` | Posting Classification |
| `PostingSubclassification` |  | |  |  | `CHAR(2)` | Posting Subclassification |
| `DCoAccountingDocumentID` |  | |  |  | `CHAR(32)` | ID of Receivable Item |
| `DCoAccountingDocumentDate` |  | |  |  | `DATN(8)` | Document Date |
| `DCoAcctgDocOriginalDueDate` |  | |  |  | `DATS(8)` | Original Due Date of Receivable Item |
| `DCoAccountingDocumentDueDate` |  | |  |  | `DATN(8)` | Current Due Date |
| `DCoAcctgDocLastPaymentDate` |  | |  |  | `DATN(8)` | Last Payment Date |
| `DCoAccountingDocumentCurrency` |  | |  |  | `CUKY(5)` | Currency |
| `DCoAcctgDocumentOriginalAmount` |  | |  |  | `CURR(23)` | Original Amount of Receivable Item |
| `DCoAcctgDocumentOpenAmount` |  | |  |  | `CURR(23)` | Open Amount of Receivable Item |
| `DCoAcctgDocumentPaidAmount` |  | |  |  | `CURR(23)` | Paid Amount of Receivable Item |
| `DCoAcctgDocumentCreditedAmount` |  | |  |  | `CURR(23)` | Credited Amount |
| `DCoAcctgDocWriteOffAmount` |  | |  |  | `CURR(23)` | Amount Written Off for Receivable Item |
| `DCoAcctgDocCshDiscUsedAmount` |  | |  |  | `CURR(23)` | Amount of Used Cash Discount |
| `DCoAccountingDocumentBranch` |  | |  |  | `CHAR(10)` | Branch Account |
| `PaymentDifferenceReason` |  | |  |  | `CHAR(3)` | Payment Difference Reason |
| `DCoAcctgDocumentCreationUser` |  | |  |  | `CHAR(12)` | Created By |
| `DCoAcctgDocCreationDateTime` |  | |  |  | `DEC(15)` | Created On/At |
| `DCoAcctgDocLastChangedByUser` |  | |  |  | `CHAR(12)` | Last Changed By |
| `DCoAcctgDocLastChangeDateTime` |  | |  |  | `DEC(15)` | Last Changed On/At |
| `DCoDocumentReference` |  | |  |  | `CHAR(35)` | Reference Document |
| `DCoAltvDocumentReference` |  | |  |  | `CHAR(35)` | Alternative Reference Document |
| `DCoAcctgDocumentReference1ID` |  | |  |  | `CHAR(35)` | Reference 1 |
| `DCoAcctgDocumentReference2ID` |  | |  |  | `CHAR(35)` | Reference 2 |
| `DCoAcctgDocumentReference3ID` |  | |  |  | `CHAR(35)` | Reference 3 |
| `DCoAcctgDocIsBlockedForPayment` |  | |  |  | `CHAR(1)` | Receivable Item Is Blocked for Payments |
| `DCoAccountingDocumentNoteText` |  | |  |  | `CHAR(100)` | Text for the Receivable Item |
| `DCoAccountingDocumentIsCleared` |  | |  |  | `CHAR(1)` | Receivable Item Is Cleared |
| `DCoAcctgDocumentLogicalSystem` |  | |  |  | `CHAR(10)` | Logical System of Receivable Item |
| `DCoPaymentIsArranged` |  | |  |  | `CHAR(1)` | Payment Is Arranged |
| `DCoPrdcssrAcctgDocumentUUID` |  | |  |  | `RAW(16)` | Predecessor Receivable Item UUID |
| `DCoOriglAccountingDocumentUUID` |  | |  |  | `RAW(16)` | Original Receivable Item UUID |
| `DCoAcctgDocHierarchyLevelValue` |  | |  |  | `INT2(5)` | Receivable Item Hierarchy Level |
| `DCoRefAccountingDocumentUUID` |  | |  |  | `RAW(16)` | Reference Receivable Item UUID |
| `DCoAcctgDocumentIsReversed` |  | |  |  | `CHAR(1)` | Receivable Item Is Reversed |
| `DCoOriginalReferenceDocument` |  | |  |  | `CHAR(20)` | Invoice |
| `DCoOriglReferenceDocumentType` |  | |  |  | `CHAR(5)` | Invoice Type |
| `DCoOriglRefDocLogicalSystem` |  | |  |  | `CHAR(10)` | Logical System of Invoice |
