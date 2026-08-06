---
name: I_APMPAYMENTITEM
description: APM Payment Transaction Item
app_component: FIN-FSCM-PF
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_APMPAYMENTITEM')/$value
semantic_en: APM Payment Transaction Item
tags:
  - FIN
  - component:FIN-FSCM-PF
  - FIN-FSCM
  - FIN-FSCM-PF
  - interface-view
  - lob:finance
  - payment
  - transaction
  - metadata-only
---
# I_APMPAYMENTITEM

**APM Payment Transaction Item**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-PF` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_APMPAYMENTITEM')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `PaymentItemUUID` | `RAW(16)` | Globally Unique Identifier |
| `ClearingArea` | `CHAR(6)` | Clearing Area |
| `PaymentItemDate` | `DATS(8)` | Payment Item Date |
| `PaymentItemNumber` | `NUMC(12)` | Payment Item Number from Number Range |
| `APMPayItemProcessStatusCode` | `CHAR(3)` | Processing Status of Payment Item |
| `PaymentItemCategory` | `CHAR(2)` | Payment Item Category |
| `APMReceiverConfirmationCode` | `CHAR(6)` | External Status |
| `APMRouteID` | `CHAR(11)` | Route ID |
| `APMPaymentAgreementID` | `CHAR(11)` | Clearing Agreement ID |
| `APMAccountManagementAreaID` | `CHAR(6)` | Account Managing Area |
| `APMPredecessorPaymentItemDate` | `DATS(8)` | Date Reference to Predecessor Items |
| `APMPredecessorPaymentItmNumber` | `NUMC(12)` | Sequence Number Reference to Predecessor Items |
| `APMSuccessorPaymentItemDate` | `DATS(8)` | Date Reference to Successor Items |
| `APMSuccessorPaymentItemNumber` | `NUMC(12)` | Sequence Number Reference to Successor Items |
| `IncomingPaymentOrderDate` | `DATS(8)` | Reference to Incoming Payment Order: PO Date |
| `IncomingPaymentOrderNumber` | `NUMC(12)` | Reference to Incoming Payment Order |
| `OutgoingPaymentOrderDate` | `DATS(8)` | Reference to Outgoing Payment Order: PO Date |
| `OutgoingPaymentOrderNumber` | `NUMC(12)` | Reference to Outgoing Payment Order: Sequence Number |
| `APMPaymentBatchDate` | `DATS(8)` | Payment Batch Date |
| `APMPaymentBatchNumber` | `NUMC(10)` | Payment Batch Number from Number Range (Secondary Key) |
| `APMPaymentBatchSeqNumber` | `NUMC(5)` | Sequence Number of Payment Batch |
| `APMPrevSystTransactionUniqueID` | `CHAR(35)` | External Item Reference - inbound messages |
| `APMPreviousSystemTransactionID` | `CHAR(35)` | External Item Reference |
| `APMNextSystemTransactionID` | `CHAR(35)` | External Item Reference - outbound messages |
| `UniqueEndToEndTransactionID` | `CHAR(36)` | ISO UETR - Unique End-to-End Transaction reference Number |
| `APMCustomerGroupID` | `CHAR(11)` | Customer Group |
| `APMCustomerID` | `CHAR(11)` | Customer |
| `CustomerSegment` | `CHAR(11)` | Customer Segment |
| `Country` | `CHAR(3)` | Bank Country/Region |
| `BankNumber` | `CHAR(15)` | Bank Number |
| `ClearingSystemIdentifierCode` | `CHAR(5)` | Clearing System Member ID Code |
| `SWIFTCode` | `CHAR(11)` | Bank Identifier Code (BIC) |
| `IBAN` | `CHAR(34)` | IBAN After Account Substitution |
| `ISOAccountIdentifier` | `CHAR(34)` | Account Number |
| `AccountCurrency` | `CUKY(5)` | Account Currency After Substitution |
| `BankAccountHolderName` | `CHAR(80)` | Substitute Account Holder Name |
| `APMRequestedValueDate` | `DATS(8)` | Original Value Date |
| `APMProposedPostingDate` | `DATS(8)` | Posting Date |
| `TransactionCurrency` | `CUKY(5)` | Transaction Currency |
| `AmountInTransactionCurrency` | `CURR(23)` | Amount in Transaction Currency |
| `APMDebitCreditCode` | `CHAR(1)` | Transaction Debit/Credit |
| `APMChargeBearerCode` | `CHAR(6)` | Charge Bearer |
| `TransactionType` | `CHAR(6)` | Transaction Type (Advanced Payment Management) |
| `APMInternalCreationProcess` | `CHAR(4)` | Creation Process of Payment Object |
| `APMPaymentPriorityCode` | `CHAR(2)` | Payment Priority |
| `APMChequeNumber` | `CHAR(25)` | Check Number |
| `APMReturnOrRejectionCode` | `CHAR(6)` | Return/Rejection Reason |
| `APMReleaseStatus` | `CHAR(2)` | Release Status |
| `APMPaymentItemOffsetLinkValue` | `CHAR(28)` | ORP/RCP item group reference |
| `BankAccountInternalID` | `NUMC(10)` | APM Copy of Bank Account Technical ID |
| `APMPaymentScenario` | `CHAR(1)` | Payment Scenario Description |
| `APMBankAccountStatus` | `CHAR(1)` | BAM Lookup Status |
| `DueDate` | `DATS(8)` | Due Date Specified by Ordering Party |
| `DirectDebitMandate` | `CHAR(35)` | Mandate Identification |
| `MandateCreditor` | `CHAR(35)` | Creditor ID |
| `PaymentEndToEndIdentification` | `CHAR(35)` | Ordering Party Reference (Unique Number for ISO Payment) |
| `APMSequenceTypeCode` | `CHAR(1)` | Direct Debit Type |
| `APMLocalInstrumentISOCode` | `CHAR(35)` | ISO20022: Local Instrument Code or Proprietary Code |
| `APMCategoryPurposeISOCode` | `CHAR(35)` | ISO20022: Category Purpose Code or Proprietary Code |
| `APMServiceLevelISOCode` | `CHAR(35)` | ISO20022: Service Level Code or Proprietary Code |
| `CreationUserName` | `CHAR(12)` | Creating User |
| `CreationDate` | `DATS(8)` | Creation Date |
| `CreationTime` | `TIMS(6)` | Creation Time |
