---
name: I_SEPAMANDATE
description: "This CDS view is used to show all information about the SEPA Mandate. This CDS view provides the data to answer the following business questions: What is the basic information (Creditor ID, Version, StartDate, EndDate etc.) of the SEPA Mandate? What is the sender of the SEPA Mandate? What is the sender information (IBAN, Bank Swift Code, alternative payer, Country, City etc.) of the SEPA Mandate? What is the recipient of the SEPA Mandate? What is the recipient information (alternative payee, Country, City etc.) of the SEPA Mandate? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEPAMANDATE')/$value
semantic_en: "This CDS view is used to show all information about the SEPA Mandate. This CDS view provides the data to answer the following business questions: What is the basic information (Creditor ID, Version, StartDate, EndDate etc.) of the SEPA Mandate? What is the sender of the SEPA Mandate? What is the sender information (IBAN, Bank Swift Code, alternative payer, Country, City etc.) of the SEPA Mandate? What is the recipient of the SEPA Mandate? What is the recipient information (alternative payee, Country, City etc.) of the SEPA Mandate? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FI
  - bo:companycode
  - component:FI-AR-IS-2CL
  - FI-AR
  - FI-AR-IS
  - FI-AR-IS-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_SEPAMANDATE

**This CDS view is used to show all information about the SEPA Mandate. This CDS view provides the data to answer the following business questions: What is the basic information (Creditor ID, Version, StartDate, EndDate etc.) of the SEPA Mandate? What is the sender of the SEPA Mandate? What is the sender information (IBAN, Bank Swift Code, alternative payer, Country, City etc.) of the SEPA Mandate? What is the recipient of the SEPA Mandate? What is the recipient information (alternative payee, Country, City etc.) of the SEPA Mandate? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEPAMANDATE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SEPAMandateUUID` |  | |  |  | `RAW(16)` | Mandate: GUID of Mandate |
| `SEPAMandate` |  | |  |  | `CHAR(35)` | Unique Reference to Mandate for each Payee |
| `SEPAMandateVersion` |  | |  |  | `NUMC(4)` | Mandate: Version of Mandate (0 = Current Version) |
| `SEPASignatureCityName` |  | |  |  | `CHAR(40)` | Location of Signature |
| `SEPASignatureDate` |  | |  |  | `DATS(8)` | Date of Signature |
| `SEPAPaymentType` |  | |  |  | `CHAR(1)` | Mandate: Payment Type |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Mandate: Validity Date of Mandate (From) |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Mandate: Validity Date of Mandate (To) |
| `SEPAMandateStatus` |  | |  |  | `CHAR(1)` | Mandate Status |
| `SEPAMandateIsB2BMandate` |  | |  |  | `CHAR(1)` | Mandate: B2B Mandate |
| `SEPAMandateStatusChangeReason` |  | |  |  | `CHAR(3)` | Reason Code for Status Change |
| `SEPAMandateCreatedByUser` |  | |  |  | `CHAR(12)` | User who Created the Current Version of the Mandate |
| `SEPAMandateCreationDate` |  | |  |  | `DATS(8)` | Date on Which the Current Mandate Version was Created |
| `SEPAMandateCreationTime` |  | |  |  | `TIMS(6)` | Time at Which the Current Mandate Version was Created |
| `SEPAMandateChangeReason` |  | |  |  | `CHAR(5)` | Mandate: Reason for Change |
| `OriginalSEPAMandateCreditor` |  | |  |  | `CHAR(35)` | Mandate: Original Creditor ID of Mandate |
| `OriginalSEPAMandate` |  | |  |  | `CHAR(35)` | Mandate: Original Mandate of Mandate |
| `SEPAMandateIsLocked` |  | |  |  | `CHAR(1)` | Global Lock Set in Mandate |
| `SEPAMandateLockStartDate` |  | |  |  | `DATS(8)` | Global Lock Valid From |
| `SEPAMandateLockEndDate` |  | |  |  | `DATS(8)` | Global Lock Valid To |
| `SEPAMandateApplication` |  | |  |  | `CHAR(1)` | SEPA Mandate Management: SEPA Application |
| `OriglSEPAMandateCreatedByUser` |  | |  |  | `CHAR(12)` | User who Created the Original Mandate |
| `OriglSEPAMandateCreationDate` |  | |  |  | `DATS(8)` | Date on Which Original Mandate Created |
| `OriglSEPAMandateCreationTime` |  | |  |  | `TIMS(6)` | Time when Original Mandate Was Created |
| `SEPAMandateReferenceType` |  | |  |  | `CHAR(10)` | Mandate: Reference Type |
| `SEPAMandateReference` |  | |  |  | `CHAR(70)` | Mandate: Reference ID |
| `SEPAMandateReferenceDesc` |  | |  |  | `CHAR(50)` | Text Field |
| `SEPAMandateSenderType` |  | |  |  | `CHAR(10)` | Mandate: Sender Type |
| `SEPAMandateSender` |  | |  |  | `CHAR(70)` | Mandate: Sender ID |
| `SenderLastName` |  | |  |  | `CHAR(40)` | Last Name of Business Partner (Person) |
| `SenderFirstName` |  | |  |  | `CHAR(40)` | First Name of Business Partner (Person) |
| `SenderStreetName` |  | |  |  | `CHAR(60)` | Street |
| `SenderHouseNumber` |  | |  |  | `CHAR(10)` | House Number |
| `SenderPostalCode` |  | |  |  | `CHAR(10)` | City Postal Code |
| `SenderCityName` |  | |  |  | `CHAR(40)` | City |
| `SenderCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `SenderLanguage` |  | |  |  | `LANG(1)` | Language Key |
| `SEPAMandateSenderIBAN` |  | |  |  | `CHAR(34)` | IBAN (International Bank Account Number) |
| `SEPAMandateSenderBankSWIFTCode` |  | |  |  | `CHAR(11)` | SWIFT/BIC for International Payments |
| `SEPAMandateAlternativePyrName` |  | |  |  | `CHAR(40)` | SEPA Mandate Alternative Payer Name |
| `SEPAMandateAlternativePayer` |  | |  |  | `CHAR(70)` | Mandate: ID of Alternative Debtor |
| `SEPAMandateSenderExternalID` |  | |  |  | `CHAR(35)` | SEPA Mandate Sender External ID |
| `SEPAMandateRecipientType` |  | |  |  | `CHAR(10)` | Mandate: Recipient Type |
| `SEPAMandateRecipient` |  | |  |  | `CHAR(70)` | Mandate: Recipient ID |
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
| `SEPAMandateFirstUseDate` |  | |  |  | `DATS(8)` | Mandate: Date of First Use |
| `SEPAMandateFirstUseObjTypeCode` |  | |  |  | `CHAR(10)` | Mandate: Type of First Usage |
| `SEPAMandateFirstUsePaymentDoc` |  | |  |  | `CHAR(70)` | Mandate: ID of First Usage |
| `SEPAMandateLastUseDate` |  | |  |  | `DATS(8)` | Mandate: Date of Last Use |
| `SEPAMandateLastUseObjTypeCode` |  | |  |  | `CHAR(10)` | Mandate: Type of Last Usage |
| `SEPAMandateLastUsePaymentDoc` |  | |  |  | `CHAR(70)` | Mandate: ID of Last Usage |
| `SEPAMandateFirstUsePaymentRun` |  | |  |  | `CHAR(16)` | Mandate: ID of Payment Run of First Use |
| `SEPAMandateOrganizationalUnit1` |  | |  |  | `CHAR(20)` | Mandate: Internal Organizational Data |
| `SEPAMandateOrganizationalUnit2` |  | |  |  | `CHAR(20)` | Mandate: Internal Organizational Data |
| `SEPAMandateOrganizationalUnit3` |  | |  |  | `CHAR(35)` | Mandate: Internal Organizational Data |
| `SEPAMandateOrganizationalUnit4` |  | |  |  | `CHAR(35)` | Mandate: Internal Organizational Data |
| `CAMassRunDate` |  | |  |  | `DATS(8)` | Date ID |
| `CAMassRunID` |  | |  |  | `CHAR(6)` | Run ID |
