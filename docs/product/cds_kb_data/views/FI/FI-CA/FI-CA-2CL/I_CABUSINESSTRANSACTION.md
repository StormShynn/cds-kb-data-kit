---
name: I_CABUSINESSTRANSACTION
description: "Contract Accounting Business Transaction"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CABUSINESSTRANSACTION')/$value
semantic_en: "Contract Accounting Business Transaction"
tags:
  - FI
  - account
  - component:FI-CA-2CL
  - contract
  - FI-CA
  - FI-CA-2CL
  - interface-view
  - lob:cross_application components
  - lob:finance
  - transaction
  - metadata-only
---
# I_CABUSINESSTRANSACTION

**Contract Accounting Business Transaction**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CABUSINESSTRANSACTION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CABusinessTransactionUUID` |  | |  |  | `RAW(16)` | Globally Unique Identifier |
| `CreationDate` |  | |  |  | `DATS(8)` | Date on Which Record Was Created |
| `CreationTime` |  | |  |  | `TIMS(6)` | Creation Time |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By User |
| `CASubAreaForParallelization` |  | |  |  | `NUMC(3)` | Subarea for Parallelization in Mass Processing |
| `CABusinessTransactionObject` |  | |  |  | `CHAR(8)` | Business Transaction: Object Identification |
| `CABusinessTransactionActivity` |  | |  |  | `CHAR(4)` | Business Transaction: Activity |
| `CABusinessTransactionName` |  | |  |  | `CHAR(80)` | Description |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `ContractAccount` |  | |  |  | `CHAR(12)` | Contract Account |
| `CAContract` |  | |  |  | `CHAR(20)` | Reference Specifications from Contract |
| `CASubApplication` |  | |  |  | `CHAR(1)` | Subapplication in Contract Accounts Receivable and Payable |
| `OriginalReferenceDocument` |  | |  |  | `CHAR(20)` | Reference Key |
| `ReferenceDocumentType` |  | |  |  | `CHAR(5)` | Reference Document Type |
| `ReferenceDocumentLogicalSystem` |  | |  |  | `CHAR(10)` | Logical System of Reference Document |
| `LogicalSystem` |  | |  |  | `CHAR(10)` | Logical System |
| `CABusTransExternalReference` |  | |  |  | `CHAR(32)` | Business Transaction: External Reference |
| `CAMassRunDate` |  | |  |  | `DATS(8)` | Date ID |
| `CAMassRunID` |  | |  |  | `CHAR(6)` | Run ID |
| `CABusinessTransactionProcess` |  | |  |  | `CHAR(8)` | Business Transaction: Process Identification |
| `CABusTransProcessName` |  | |  |  | `CHAR(50)` | Text Field |
| `CABusTransDocumentType` |  | |  |  | `CHAR(4)` | Business Transaction: Document Category |
| `CADocumentNumber` |  | |  |  | `CHAR(12)` | Document |
| `CABusTransDocument` |  | |  |  | `CHAR(24)` | Document |
| `CARepetitionItemNumber` |  | |  |  | `NUMC(3)` | Repetition Item in FI-CA Document |
| `CABPItemNumber` |  | |  |  | `NUMC(4)` | Item Number in FI-CA Document |
| `CASubItemNumber` |  | |  |  | `NUMC(3)` | Subitem for a Partial Clearing in Document |
| `CAReferenceDocument` |  | |  |  | `CHAR(16)` | Reference Document Number |
| `CAClassificationKey` |  | |  |  | `CHAR(35)` | Classification Key |
| `CADocumentOriginCode` |  | |  |  | `CHAR(2)` | Document Origin Key |
| `CAPostingDate` |  | |  |  | `DATS(8)` | Posting Date in the Document |
| `CAClearingReason` |  | |  |  | `CHAR(2)` | Clearing Reason |
| `CAMainTransaction` |  | |  |  | `CHAR(4)` | Main Transaction for Line Item |
| `CASubTransaction` |  | |  |  | `CHAR(4)` | Subtransaction for Document Item |
| `CAStatisticalItemCode` |  | |  |  | `CHAR(1)` | Type of Statistical Line Item |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `LedgerGroup` |  | |  |  | `CHAR(4)` | Ledger Group |
| `CABusTransRelationship` |  | |  |  | `CHAR(2)` | Relation between Objects |
| `CABusTransRelatedObject` |  | |  |  | `CHAR(40)` | Master Data Object Key |
| `CACorrespondenceType` |  | |  |  | `CHAR(4)` | Correspondence Type |
| `CorrespondenceKey` |  | |  |  | `CHAR(36)` | Correspondence Key |
| `CorrespondencePrintDate` |  | |  |  | `DATS(8)` | Print Date |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `CAAmountInTransactionCurrency` |  | |  |  | `CURR(13)` | Amount in Transaction Currency with +/- Sign |
| `CAPaymentExceptionReason` |  | |  |  | `NUMC(3)` | Item Indicator in Payment Program |
| `CADunningExceptionReason` |  | |  |  | `NUMC(3)` | Item Indicator in Dunning Run |
| `CAReceivableAdjustmentReason` |  | |  |  | `CHAR(2)` | Adjustment Reason |
| `CAPromiseToPayReason` |  | |  |  | `CHAR(2)` | Reason for Promise to Pay |
| `CAPromiseToPayWthdrwlReason` |  | |  |  | `CHAR(2)` | Reason for Withdrawal of Promise to Pay |
| `CAInstlmntPlanDactvtnRsn` |  | |  |  | `CHAR(2)` | Deactivation Reason |
