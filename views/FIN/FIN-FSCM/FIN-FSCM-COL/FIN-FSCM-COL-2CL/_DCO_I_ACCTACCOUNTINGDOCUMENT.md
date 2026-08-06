---
name: _DCO_I_ACCTACCOUNTINGDOCUMENT
description: This CDS view provides access to receivable items of collection accounts by linking business partners, their hierarchies, company code assignments, and receivable items. It retrieves receivable item details including amounts, payment status, and reference information in collections and dispute automation. This CDS view provides the data to answer the following business questions: What are the open receivable items for a specific collection account? What is the total outstanding amount across all receivable items for a business partner? Which receivable items are overdue and not yet cleared? What is the payment history and status of receivable items in a collection segment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_ACCTACCOUNTINGDOCUMENT')/$value
semantic_en: This CDS view provides access to receivable items of collection accounts by linking business partners, their hierarchies, company code assignments, and receivable items. It retrieves receivable item details including amounts, payment status, and reference information in collections and dispute automation. This CDS view provides the data to answer the following business questions: What are the open receivable items for a specific collection account? What is the total outstanding amount across all receivable items for a business partner? Which receivable items are overdue and not yet cleared? What is the payment history and status of receivable items in a collection segment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - FIN
  - account
  - bo:companycode
  - component:FIN-FSCM-COL-2CL
  - FIN-FSCM
  - FIN-FSCM-COL
  - FIN-FSCM-COL-2CL
  - lob:controlling
  - lob:finance
  - payment
  - metadata-only
---
# _DCO_I_ACCTACCOUNTINGDOCUMENT

**This CDS view provides access to receivable items of collection accounts by linking business partners, their hierarchies, company code assignments, and receivable items. It retrieves receivable item details including amounts, payment status, and reference information in collections and dispute automation. This CDS view provides the data to answer the following business questions: What are the open receivable items for a specific collection account? What is the total outstanding amount across all receivable items for a business partner? Which receivable items are overdue and not yet cleared? What is the payment history and status of receivable items in a collection segment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_ACCTACCOUNTINGDOCUMENT')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `DCoBusinessPartnerUUID` | `RAW(16)` | Business Partner UUID for Collection Process |
| `DCoAccountUUID` | `RAW(16)` | UUID of Collection Account |
| `DCoAccountingDocumentUUID` | `RAW(16)` | UUID of Receivable Item |
| `DebtCollectionsSegment` | `CHAR(10)` | Collection Segment |
| `DebtCollectionsCompanyCode` | `CHAR(4)` | Company Code in Collections and Dispute Automation |
| `BusinessPartner` | `CHAR(10)` | Business Partner |
| `CompanyCode` | `CHAR(4)` | Company Code (FI System) |
| `DCoAccountingDocumentOrigin` | `CHAR(5)` | Origin of Receivable Item |
| `DCoAccountingDocumentID` | `CHAR(32)` | ID of Receivable Item |
| `DCoAccountingDocumentDate` | `DATN(8)` | Document Date |
| `DCoAcctgDocOriginalDueDate` | `DATS(8)` | Original Due Date of Receivable Item |
| `DCoAccountingDocumentDueDate` | `DATN(8)` | Current Due Date |
| `DCoAcctgDocLastPaymentDate` | `DATN(8)` | Last Payment Date |
| `DCoAccountingDocumentCurrency` | `CUKY(5)` | Currency |
| `DCoAcctgDocumentOriginalAmount` | `CURR(23)` | Original Amount of Receivable Item |
| `DCoAcctgDocumentOpenAmount` | `CURR(23)` | Open Amount of Receivable Item |
| `DCoAcctgDocumentPaidAmount` | `CURR(23)` | Paid Amount of Receivable Item |
| `DCoAcctgDocumentCreditedAmount` | `CURR(23)` | Credited Amount |
| `DCoAcctgDocWriteOffAmount` | `CURR(23)` | Amount Written Off for Receivable Item |
| `DCoAcctgDocCshDiscUsedAmount` | `CURR(23)` | Amount of Used Cash Discount |
| `DCoAccountingDocumentBranch` | `CHAR(10)` | Branch Account |
| `DCoAcctgDocumentCreationUser` | `CHAR(12)` | Created By |
| `DCoAcctgDocCreationDateTime` | `DEC(15)` | Created On/At |
| `DCoAcctgDocLastChangedByUser` | `CHAR(12)` | Last Changed By |
| `DCoAcctgDocLastChangeDateTime` | `DEC(15)` | Last Changed On/At |
| `DCoDocumentReference` | `CHAR(35)` | Reference Document |
| `DCoAltvDocumentReference` | `CHAR(35)` | Alternative Reference Document |
| `DCoAcctgDocumentReference1ID` | `CHAR(35)` | Reference 1 |
| `DCoAcctgDocumentReference2ID` | `CHAR(35)` | Reference 2 |
| `DCoAcctgDocumentReference3ID` | `CHAR(35)` | Reference 3 |
| `DCoAcctgDocIsBlockedForPayment` | `CHAR(1)` | Receivable Item Is Blocked for Payments |
| `DCoAccountingDocumentNoteText` | `CHAR(100)` | Text for the Receivable Item |
| `DCoAccountingDocumentIsCleared` | `CHAR(1)` | Receivable Item Is Cleared |
| `DCoAcctgDocumentLogicalSystem` | `CHAR(10)` | Logical System of Receivable Item |
| `DCoPaymentIsArranged` | `CHAR(1)` | Payment Is Arranged |
| `DCoPrdcssrAcctgDocumentUUID` | `RAW(16)` | Predecessor Receivable Item UUID |
| `DCoOriglAccountingDocumentUUID` | `RAW(16)` | Original Receivable Item UUID |
| `DCoAcctgDocHierarchyLevelValue` | `INT2(5)` | Receivable Item Hierarchy Level |
| `DCoAcctgDocumentIsReversed` | `CHAR(1)` | Receivable Item Is Reversed |
| `DCoRefAccountingDocumentUUID` | `RAW(16)` | Reference Receivable Item UUID |
| `DCoOriginalReferenceDocument` | `CHAR(20)` | Invoice |
| `DCoOriglReferenceDocumentType` | `CHAR(5)` | Invoice Type |
| `DCoOriglRefDocLogicalSystem` | `CHAR(10)` | Logical System of Invoice |
