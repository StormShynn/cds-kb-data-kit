---
name: I_BANKPAYMENTDOCUMENT
description: Payment Documents C1 contract
app_component: FIN-FSCM-BNK-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKPAYMENTDOCUMENT')/$value
semantic_en: Payment Documents C1 contract
tags:
  - FIN
  - component:FIN-FSCM-BNK-2CL
  - contract
  - document
  - FIN-FSCM
  - FIN-FSCM-BNK
  - FIN-FSCM-BNK-2CL
  - interface-view
  - lob:finance
  - payment
  - metadata-only
---
# I_BANKPAYMENTDOCUMENT

**Payment Documents C1 contract**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-BNK-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKPAYMENTDOCUMENT')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `PaymentRunDate` | `DATS(8)` | Payment Run Date |
| `PaymentRunID` | `CHAR(6)` | Payment Run ID |
| `PayingCompanyCode` | `CHAR(4)` | Paying Company Code |
| `Supplier` | `CHAR(10)` | Supplier |
| `Customer` | `CHAR(10)` | Customer Number |
| `PaymentRecipient` | `CHAR(16)` | Payment Recipient |
| `PaymentDocument` | `CHAR(10)` | Payment Document Number |
| `PaymentRunMergeIdentifier` | `CHAR(6)` | Merge ID |
| `PaymentRunMergeDate` | `DATS(8)` | Merge Date |
| `HouseBank` | `CHAR(5)` | House Bank Key |
| `HouseBankAccount` | `CHAR(5)` | House Bank Acct. ID |
| `PaymentMethod` | `CHAR(1)` | Payment Method |
| `PaymentMethodSupplement` | `CHAR(2)` | Payment Method Supplement |
| `PaymentCurrency` | `CUKY(5)` | Foreign Currency |
| `PaymentDocumentPostingDate` | `DATS(8)` | Posting Date |
| `ValueDate` | `DATS(8)` | Value Date |
| `PayeeBankValueDate` | `DATS(8)` | Payee Value Date |
| `PaidItemDueDate` | `DATS(8)` | Due Date |
| `PaymentBatch` | `NUMC(10)` | Payment Batch Number |
| `PaymentRunIsProposal` | `CHAR(1)` | Auto Payment Is Proposal |
| `SupplierClerkIDBySupplier` | `CHAR(12)` | Shipper Account |
| `BankAccountHolderName` | `CHAR(60)` | Account Holder Name |
| `AccountingClerk` | `CHAR(2)` | Accounting Clerk |
| `PaidAmountInPaytCurrency` | `CURR(23)` | Amount Paid in Foreign Currency |
| `AmountInCompanyCodeCurrency` | `CURR(23)` | Amount Paid in Company Code Currency |
| `PayeeBankControlKey` | `CHAR(2)` | Payee Bank Control Key |
| `BankControlKey` | `CHAR(2)` | Bank control key at our bank |
| `BankCountry` | `CHAR(3)` | House Bank Country/Region |
| `PaymentRunDocumentPayeeBankKey` | `CHAR(15)` | Payee Bank Key |
| `PayeeBank` | `CHAR(15)` | Payee Bank Number |
| `BusinessArea` | `CHAR(4)` | Business Area |
| `CashDiscountAmtInTransacCrcy` | `CURR(23)` | Cash Discount in Foreign Currency |
| `CashDiscountAmtInCoCodeCrcy` | `CURR(23)` | Cash Discount in Company Code Currency |
| `SupplierCityName` | `CHAR(35)` | City |
| `PayeeCityName` | `CHAR(35)` | Payee City |
| `SupplierCountry` | `CHAR(3)` | Country/Region Key |
| `PayeeBankCountry` | `CHAR(3)` | Payee Bank Country/Region |
| `District` | `CHAR(35)` | Location from payee's address |
| `EDIPaymentOrderStatus` | `CHAR(1)` | EDI Payment Order Status |
| `EDIPaymentAdviceStatus` | `CHAR(1)` | EDI Payment Advice Status |
| `PaymentRequestPaymentGroup` | `CHAR(20)` | Grouping Field for Automatic Payments |
| `BankInternalID` | `CHAR(15)` | Bank Key of Our Bank |
| `Bank` | `CHAR(15)` | House Bank Number |
| `HouseBankIBAN` | `CHAR(34)` | IBAN at House Bank |
| `PayeeIBAN` | `CHAR(34)` | Payee IBAN |
| `DataExchangeInstructionKey` | `CHAR(2)` | Instruction Key for Data Medium Exchange |
| `DataExchangeInstruction1` | `NUMC(2)` | Instruction Key 1 |
| `DataExchangeInstruction2` | `NUMC(2)` | Instruction Key 2 |
| `DataExchangeInstruction3` | `NUMC(2)` | Instruction key 3 |
| `DataExchangeInstruction4` | `NUMC(2)` | Instruction key 4 |
| `PaymentReason` | `CHAR(4)` | Payment Reason |
| `DirectDebitType` | `CHAR(4)` | Local Instrument Code |
| `LostCashDiscountInTransacCrcy` | `CURR(23)` | Lost Cash Discounts in Foreign Currency |
| `LostCashDiscountInCoCodeCrcy` | `CURR(23)` | Lost Cash Discounts in Local Currency |
| `FunctionalCurrency` | `CUKY(5)` | Functional Currency |
| `PaymentAmountInFunctionalCrcy` | `CURR(23)` | Amount Paid in Functional Currency |
| `CashDiscountAmountInFuncnlCrcy` | `CURR(23)` | Cash Discount in Functional Currency |
| `SupplierName` | `CHAR(35)` | Supplier Name |
| `SupplierAdditionalName` | `CHAR(35)` | Name 2 |
| `CustomerName` | `CHAR(35)` | Customer Name |
| `CustomerAdditionalName` | `CHAR(35)` | Name 2 |
| `PayeeName` | `CHAR(35)` | Payee Name |
| `PayeeAdditionalName` | `CHAR(35)` | Payee Additional Name |
| `PayeeTitle` | `CHAR(15)` | Title of the payee |
| `AddressID` | `CHAR(10)` | Address Number |
| `NumberOfTextLines` | `DEC(5)` | Number of Text Lines for Items Paid |
| `NumberOfPaidItems` | `DEC(5)` | Item Included |
| `BankAccount` | `CHAR(18)` | Our Account Number |
| `BankAccountLongID` | `CHAR(35)` | House Bank Acct. No. |
| `POBoxDeviatingCityName` | `CHAR(35)` | City of payee's PO box |
| `POBoxPostalCode` | `CHAR(10)` | PO Box Postal Code |
| `PayeePOBoxPostalCode` | `CHAR(10)` | P.O. box postal code of the payee |
| `PayeePostalCode` | `CHAR(10)` | Postal Code of the Payee |
| `PayeeBankAccount` | `CHAR(18)` | Payee Bank Account |
| `PayeeBankAccountLongID` | `CHAR(35)` | Payee Bank Account |
| `PayeeCountry` | `CHAR(3)` | Payee Country/Region |
| `PayeeLanguage` | `LANG(1)` | Language key of the payee |
| `PayeePOBox` | `CHAR(10)` | P.O. box of the payee |
| `PayeeStreet` | `CHAR(35)` | Payee Street |
| `PaymentReference` | `CHAR(30)` | Reference Number |
| `PersonnelNumber` | `NUMC(8)` | Personnel Number |
| `POBox` | `CHAR(10)` | PO Box |
| `PostalCode` | `CHAR(10)` | Postal Code |
| `PostingDate` | `DATS(8)` | Posting Date of Payment Document |
| `BankAccountReferenceText` | `CHAR(20)` | Payee Reference Details |
| `Region` | `CHAR(3)` | Region (State, Province, County) |
| `PaymentOrder` | `CHAR(10)` | Payment Order |
| `SendingCompanyCode` | `CHAR(4)` | Sending Company Code |
| `SEPASequenceType` | `CHAR(4)` | Mandate: Sequence Type |
| `StreetAddressName` | `CHAR(35)` | Street and House Number |
| `SWIFTCode` | `CHAR(11)` | Payee SWIFT Code |
| `SEPAMandateUUID` | `RAW(16)` | Mandate: GUID of Mandate |
| `SupplierRegion` | `CHAR(3)` | Payee Region |
| `ExchangeRate` | `DEC(9)` | Exchange Rate |
| `PaymentOrigin` | `CHAR(8)` | Origin of Payment |
| `BillOfExchangeIssueDate` | `DATS(8)` | Bill of Exchange Issue Date |
| `BillOfExchangeDueDate` | `DATS(8)` | Bill of Exchange Due Date |
| `PaymentsGroupingCriterion` | `INT4(10)` | Group No. |
| `SWIFTTransactionReferenceUUID` | `CHAR(36)` | SWIFT GPI Unique End-to-End Transaction Reference |
| `BusinessPlace` | `CHAR(4)` | Business Place |
| `BankChainBank1Type` | `CHAR(1)` | Bank Chain 1 Type |
| `BankChainBank1Country` | `CHAR(3)` | Bank Chain 1  Country/Region |
| `BankChainBank1` | `CHAR(15)` | Bank Chain 1 Number |
| `BankChainBank1BankAccount` | `CHAR(18)` | Bank Chain 1 Account |
| `BankChainBank1ControlKey` | `CHAR(2)` | Bank Control Key of Bank 1 in a Bank Chain |
| `BankChainBank1DetailReference` | `CHAR(20)` | Reference Specifications for Bank Details of Bank 1 |
| `BankChainBank1IBAN` | `CHAR(34)` | Bank Chain 1 IBAN |
| `BankChainBank2Type` | `CHAR(1)` | Bank Chain 2 Type |
| `BankChainBank2Country` | `CHAR(3)` | Bank Chain 2  Country/Region |
| `BankChainBank2` | `CHAR(15)` | Bank Chain 2 Number |
| `BankChainBank2BankAccount` | `CHAR(18)` | Bank Chain 2 Account |
| `BankChainBank2ControlKey` | `CHAR(2)` | Bank Control Key of Bank 2 in a Bank Chain |
| `BankChainBank2DetailReference` | `CHAR(20)` | Reference Specifications for Bank Details of Bank 2 |
| `BankChainBank2IBAN` | `CHAR(34)` | Bank Chain 2 IBAN |
| `BankChainBank3Type` | `CHAR(1)` | Bank Chain 3 Type |
| `BankChainBank3Country` | `CHAR(3)` | Bank Chain 3  Country/Region |
| `BankChainBank3` | `CHAR(15)` | Bank Chain 3 Number |
| `BankChainBank3BankAccount` | `CHAR(18)` | Bank Chain 3 Account |
| `BankChainBank3ControlKey` | `CHAR(2)` | Bank Control Key of Bank 3 in a Bank Chain |
| `BankChainBank3DetailReference` | `CHAR(20)` | Reference Specifications for Bank Details of Bank 3 |
| `BankChainBank3IBAN` | `CHAR(34)` | Bank Chain 3 IBAN |
| `PayeePaymentSystem` | `CHAR(15)` | Payee Payment System |
| `PayeeAliasType` | `CHAR(15)` | Payee Bank Alias Type |
| `PayeeAliasName` | `CHAR(255)` | Payee Bank Alias |
| `CompanyCodeCurrency` | `CUKY(5)` | Local Currency |
| `Country` | `CHAR(3)` | Country/Region Key |
| `FiscalYearVariant` | `CHAR(2)` | Fiscal Year Variant |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `SWIFTGPIReason` | `CHAR(35)` | External GPI Status Reason Code |
| `PaymentBatchItemCurrentStatus` | `CHAR(5)` | Payment Batch Item Status |
| `PaymentBatchCurrentStatus` | `CHAR(5)` | Batch Current Status |
| `PaymentBatchRuleCurrency` | `CUKY(5)` | Rule Currency |
| `IsUrgentPayment` | `CHAR(1)` | Urgent Payment |
| `PaymentMethodName` | `CHAR(30)` | Payment Method Name |
| `PaymentRunFileIdentifier` | `CHAR(6)` | File ID |
| `PaymentRunFileDate` | `DATS(8)` | File ID Date |
| `MergeBatchNumber` | `NUMC(10)` | Payment Batch Number |
| `PaymentReasonText` | `CHAR(130)` | SWIFT GPI Status Reason Code Description |
| `AliasTypeText` | `CHAR(120)` | Alias Type Text |
| `PaymentBatchItem` | `NUMC(5)` | Batch Item Number |
| `BatchUUID` | `RAW(16)` | GUID to identify the batch |
| `FinancialAccountType` | `CHAR(1)` | Account Type |
| `AccountingDocument` | `CHAR(10)` | Journal Entry |
| `PaymentMediumReference` | `CHAR(16)` | Reference Number |
| `PaymentStatusReasonByBankName` | `CHAR(105)` | Additional SWIFT GPI Status Information |
| `PaymentStatusReasonByBank` | `CHAR(10)` | SWIFT GPI Status Reason Code |
| `PaytRunDocHdrConcatenation` | `CHAR(30)` | Header Info |
| `PaytBatHdrCurStsName` | `CHAR(30)` | Batch Header Status |
| `PaytBatItmCurStsName` | `CHAR(30)` | Individual Status of an Object |
| `PaymentStatusReasonName` | `CHAR(120)` | Internal GPI Status Reason Code Description |
| `PayeeCountryName` | `CHAR(50)` | Country/Region Name |
| `PayeeBankCountryName` | `CHAR(50)` | Country/Region Name |
| `BankCountryName` | `CHAR(50)` | Country/Region Name |
| `BankChainBank1CountryName` | `CHAR(50)` | Country/Region Name |
| `BankChainBank2CountryName` | `CHAR(50)` | Country/Region Name |
| `BankChainBank3CountryName` | `CHAR(50)` | Country/Region Name |
| `OriginName` | `CHAR(40)` | Name of an Origin Indicator |
