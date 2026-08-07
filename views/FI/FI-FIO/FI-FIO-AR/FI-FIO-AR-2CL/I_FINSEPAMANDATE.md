---
name: I_FINSEPAMANDATE
description: SEPA Mandate for Financial Accounting
app_component: FI-FIO-AR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINSEPAMANDATE')/$value
semantic_en: SEPA Mandate for Financial Accounting
tags:
  - FI
  - account
  - bo:companycode
  - component:FI-FIO-AR-2CL
  - FI-FIO
  - FI-FIO-AR
  - FI-FIO-AR-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_FINSEPAMANDATE

**SEPA Mandate for Financial Accounting**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINSEPAMANDATE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SEPAMandateUUID` |  | |  |  | `RAW(16)` | Mandate: GUID of Mandate |
| `SEPAMandateImageType` |  | |  |  | `CHAR(1)` | Image Type For SEPA Mandate Draft Data |
| `SEPAMandateVersion` |  | |  |  | `NUMC(4)` | Mandate: Version of Mandate (0 = Current Version) |
| `SEPAMandateApplication` |  | |  |  | `CHAR(1)` | SEPA Mandate Management: SEPA Application |
| `SEPAMandate` |  | |  |  | `CHAR(35)` | Unique Reference to Mandate for each Payee |
| `SEPAMandateSender` |  | |  |  | `CHAR(70)` | Mandate: Sender ID |
| `PayingCompanyCode` |  | |  |  | `CHAR(4)` | Paying Company Code |
| `SEPAMandateStatus` |  | |  |  | `CHAR(1)` | Mandate Status |
| `SEPAMandateStatusName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `SEPAMandateStatusChangeReason` |  | |  |  | `CHAR(3)` | Reason Code for Status Change |
| `SEPAMandateStsChangeReasonName` |  | |  |  | `CHAR(50)` | Description of Reason for Status Change |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Mandate: Validity Date of Mandate (From) |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Mandate: Validity Date of Mandate (To) |
| `SEPAPaymentType` |  | |  |  | `CHAR(1)` | Mandate: Payment Type |
| `SEPAPaymentTypeName` |  | |  |  | `CHAR(60)` | SEPA Mandate Payment Type Name |
| `SEPAMandateIsB2BMandate` |  | |  |  | `CHAR(1)` | Mandate: B2B Mandate |
| `SEPASignatureCityName` |  | |  |  | `CHAR(40)` | Location of Signature |
| `SEPASignatureDate` |  | |  |  | `DATS(8)` | Date of Signature |
| `SEPAMandateCreatedByUser` |  | |  |  | `CHAR(12)` | User who Created the Current Version of the Mandate |
| `CreatedByUserDescription` |  | |  |  | `CHAR(80)` | User Description |
| `SEPAMandateCreationDate` |  | |  |  | `DATS(8)` | Date on Which the Current Mandate Version was Created |
| `SEPAMandateCreationTime` |  | |  |  | `TIMS(6)` | Time at Which the Current Mandate Version was Created |
| `SEPAMandateCreateDateTime` |  | |  |  | `DEC(15)` | SEPA Mandate Creation Date Time |
| `OriglSEPAMandateCreatedByUser` |  | |  |  | `CHAR(12)` | User who Created the Original Mandate |
| `OriglCreatedByUserDescription` |  | |  |  | `CHAR(80)` | SEPA Original User Name |
| `OriglSEPAMandateCreationDate` |  | |  |  | `DATS(8)` | Date on Which Original Mandate Created |
| `OriglSEPAMandateCreationTime` |  | |  |  | `TIMS(6)` | Time when Original Mandate Was Created |
| `SenderLastName` |  | |  |  | `CHAR(40)` | Last Name of Business Partner (Person) |
| `SenderFirstName` |  | |  |  | `CHAR(40)` | First Name of Business Partner (Person) |
| `SenderStreetName` |  | |  |  | `CHAR(60)` | Street |
| `SenderHouseNumber` |  | |  |  | `CHAR(10)` | House Number |
| `SenderPostalCode` |  | |  |  | `CHAR(10)` | City Postal Code |
| `SenderCityName` |  | |  |  | `CHAR(40)` | City |
| `SenderCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `SenderLanguage` |  | |  |  | `LANG(1)` | Language Key |
| `SEPAMandateSenderExternalID` |  | |  |  | `CHAR(35)` | Mandate: ID Number of Sender (External Reference) |
| `SEPAMandateAlternativePyrName` |  | |  |  | `CHAR(40)` | SEPA Mandate Alternative Payer Name |
| `SEPAMandateAlternativePayer` |  | |  |  | `CHAR(70)` | Mandate: ID of Alternative Debtor |
| `SEPAMandateSenderIBAN` |  | |  |  | `CHAR(34)` | IBAN (International Bank Account Number) |
| `SEPAMandateSenderBankSWIFTCode` |  | |  |  | `CHAR(11)` | SWIFT/BIC for International Payments |
| `RecipientName1` |  | |  |  | `CHAR(40)` | Name 1 of organization |
| `RecipientName2` |  | |  |  | `CHAR(40)` | Name 2 of organization |
| `SEPAMandateCreditor` |  | |  |  | `CHAR(35)` | Creditor Identification Number |
| `RecipientStreetName` |  | |  |  | `CHAR(60)` | Street |
| `RecipientHouseNumber` |  | |  |  | `CHAR(10)` | House Number |
| `RecipientPostalCode` |  | |  |  | `CHAR(10)` | City Postal Code |
| `RecipientCityName` |  | |  |  | `CHAR(40)` | City |
| `RecipientCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `SEPAMandateAlternativePyeName` |  | |  |  | `CHAR(40)` | Mandate: Name of Alternative Payee |
| `SEPAMandateAlternativePayee` |  | |  |  | `CHAR(70)` | Mandate: ID of Alternative Payee |
| `SEPAMandateChangeReason` |  | |  |  | `CHAR(5)` | Mandate: Reason for Change |
| `OriginalSEPAMandateCreditor` |  | |  |  | `CHAR(35)` | Mandate: Original Creditor ID of Mandate |
| `OriginalSEPAMandate` |  | |  |  | `CHAR(35)` | Mandate: Original Mandate of Mandate |
| `SEPAMandateIsLocked` |  | |  |  | `CHAR(1)` | Global Lock Set in Mandate |
| `SEPAMandateLockStartDate` |  | |  |  | `DATS(8)` | Global Lock Valid From |
| `SEPAMandateLockEndDate` |  | |  |  | `DATS(8)` | Global Lock Valid To |
| `SEPAMandateReferenceType` |  | |  |  | `CHAR(10)` | Mandate: Reference Type |
| `SEPAMandateReferenceTypeName` |  | |  |  | `CHAR(80)` | SEPA Mandate Reference Type Name |
| `SEPAMandateReference` |  | |  |  | `CHAR(70)` | Mandate: Reference ID |
| `SEPAMandateReferenceDesc` |  | |  |  | `CHAR(50)` | Reference Description |
| `SEPAMandateSenderType` |  | |  |  | `CHAR(10)` | SEPA Mandate: Sender Type |
| `SEPAMandateSenderTypeName` |  | |  |  | `CHAR(80)` | SEPA Mandate Sender Type Name |
| `SEPAMandateRecipientType` |  | |  |  | `CHAR(10)` | Mandate: Recipient Type |
| `SEPAMandateRecipientTypeName` |  | |  |  | `CHAR(80)` | Description |
| `SEPAMandateRecipient` |  | |  |  | `CHAR(70)` | Mandate: Recipient ID |
| `SEPAMandateFirstUseDate` |  | |  |  | `DATS(8)` | SEPA Mandate: Date of First Use |
| `SEPAMandateFirstUseObjTypeCode` |  | |  |  | `CHAR(10)` | Mandate: Type of First Usage |
| `SEPAMandateFirstUseObjTypeText` |  | |  |  | `CHAR(80)` | SEPA Mandate First Use Object Type Name |
| `SEPAMandateFirstUsePaymentDoc` |  | |  |  | `CHAR(70)` | Mandate: ID of First Usage |
| `SEPAMandateFirstUsePaymentRun` |  | |  |  | `CHAR(16)` | Mandate: ID of Payment Run of First Use |
| `SEPAMandateLastUseDate` |  | |  |  | `DATS(8)` | SEPA Mandate: Date of Last Use |
| `SEPAMandateLastUseObjTypeCode` |  | |  |  | `CHAR(10)` | Mandate: Type of Last Usage |
| `SEPAMandateLastUseObjTypeText` |  | |  |  | `CHAR(80)` | SEPA Mandate Last Use Object type Name |
| `SEPAMandateLastUsePaymentDoc` |  | |  |  | `CHAR(70)` | Mandate: ID of Last Usage |
| `SEPAMandateOrganizationalUnit1` |  | |  |  | `CHAR(20)` | Mandate: Internal Organizational Data |
| `SEPAMandateOrganizationalUnit2` |  | |  |  | `CHAR(20)` | Mandate: Internal Organizational Data |
| `SEPAMandateOrganizationalUnit3` |  | |  |  | `CHAR(35)` | Mandate: Internal Organizational Data |
| `SEPAMandateOrganizationalUnit4` |  | |  |  | `CHAR(35)` | Mandate: Internal Organizational Data |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `SEPAMandateContractType` |  | |  |  | `CHAR(10)` | SEPA Mandate: Contract Type |
| `SEPAMandateContract` |  | |  |  | `CHAR(50)` | BKK: SEPA Mandate Contract ID |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Document Number of an Accounting Document |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocumentItem` |  | |  |  | `NUMC(3)` | Number of Line Item Within Accounting Document |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `CAStandardCompanyCode` |  | |  |  | `CHAR(4)` | Standard Company Code |
| `CAContract` |  | |  |  | `CHAR(20)` | Reference Specifications from Contract |
| `ContractAccount` |  | |  |  | `CHAR(12)` | Contract Account Number |
| `CAMassRunDate` |  | |  |  | `DATS(8)` | Date ID |
| `CAMassRunID` |  | |  |  | `CHAR(6)` | Run ID |
| `OneTimeAccountSourceDocType` |  | |  |  | `CHAR(10)` | OTA Source Doc Type |
| `OneTimeAccountSourceDocument` |  | |  |  | `CHAR(32)` | OTA Source Doc ID |
| `OneTimeAccountSourceDocItem` |  | |  |  | `NUMC(10)` | OTA Source Doc Item |
| `FinSEPAMandateTransactionType` |  | |  |  | `CHAR(1)` | SEPA Mandate Transaction Type |
| `FinSEPAMandateProcessingStage` |  | |  |  | `CHAR(1)` | Internal processing stage |
| `FinSEPAMandateChgIsNotAllowed` |  | |  |  | `CHAR(1)` | SEPA Mandate Change Is Not Allowed |
| `SEPAMandateAttchObjectKey` |  | |  |  | `CHAR(70)` | SEPA Mandate Attachment Object Key |
| `FinSEPAMandateFieldStatusVal` |  | |  |  | `CHAR(50)` | SEPA Mandate Field Status Value |
| `SEPAMandateHasUsage` |  | |  |  | `CHAR(1)` | Data element for domain BOOLE: TRUE (='X') and FALSE (=' ') |
| `IsCloudSystem` |  | |  |  | `CHAR(1)` | Data element for domain BOOLE: TRUE (='X') and FALSE (=' ') |
| `SEPAMandateSpoolOutputDevice` |  | |  |  | `CHAR(4)` | Spool: short name for output device |
| `SEPAMandatePrintQueue` |  | |  |  | `CHAR(32)` | Queue ID |
| `SEPAMandatePrintLanguage` |  | |  |  | `LANG(1)` | Language Key |
