---
name: I_WORKASSGMTPAYMENTDEX
description: "This CDS view is designed to provide detailed information about payment details associated with work assignments. This CDS view provides the data to answer the following business questions: What are the payment details for a specific work assignment? Who is the business partner associated with a particular work assignment, and what are their bank details? What is the validity period for the bank account details related to a work assignment? How can I identify blocked work assignments based on payment information? What are the bank identification details for business partners involved in work assignments? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-WFD-BL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTPAYMENTDEX')/$value
semantic_en: "This CDS view is designed to provide detailed information about payment details associated with work assignments. This CDS view provides the data to answer the following business questions: What are the payment details for a specific work assignment? Who is the business partner associated with a particular work assignment, and what are their bank details? What is the validity period for the bank account details related to a work assignment? How can I identify blocked work assignments based on payment information? What are the bank identification details for business partners involved in work assignments? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - CA
  - account
  - bo:bank
  - CA-WFD
  - CA-WFD-BL
  - component:CA-WFD-BL
  - interface-view
  - lob:cross_application components
  - payment
  - metadata-only
---
# I_WORKASSGMTPAYMENTDEX

**This CDS view is designed to provide detailed information about payment details associated with work assignments. This CDS view provides the data to answer the following business questions: What are the payment details for a specific work assignment? Who is the business partner associated with a particular work assignment, and what are their bank details? What is the validity period for the bank account details related to a work assignment? How can I identify blocked work assignments based on payment information? What are the bank identification details for business partners involved in work assignments? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-WFD-BL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTPAYMENTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkAssignmentBusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `BankIdentification` |  | |  |  | `CHAR(4)` | Bank Details ID |
| `WorkAssignment` |  | |  |  | `NUMC(8)` | Workforce Assignment ID |
| `WorkAssignmentExternalID` |  | |  |  | `CHAR(100)` | Workforce Assignment External ID |
| `Country2DigitISOCode` |  | |  |  | `CHAR(2)` | Workforce Country ISO Code |
| `WorkforcePersonExternalID` |  | |  |  | `CHAR(100)` | External Person ID |
| `BankAccountHolderName` |  | |  |  | `CHAR(60)` | Account Holder Name |
| `BankAccountName` |  | |  |  | `CHAR(40)` | Name of Bank Account |
| `BankControlKey` |  | |  |  | `CHAR(2)` | Bank Control Key |
| `BankCountryKey` |  | |  |  | `CHAR(3)` | Bank Country/Region Key |
| `BankNumber` |  | |  |  | `CHAR(15)` | Bank Key |
| `BankName` |  | |  |  | `CHAR(60)` | Name of Financial Institution |
| `BankAccount` |  | |  |  | `CHAR(18)` | Bank Account Number |
| `IBAN` |  | |  |  | `CHAR(34)` | IBAN (International Bank Account Number) |
| `SWIFTCode` |  | |  |  | `CHAR(11)` | SWIFT/BIC for International Payments |
| `StartDate` |  | |  |  | `DATS(8)` | Start Date |
| `EndDate` |  | |  |  | `DATS(8)` | End Date |
| `BankAccountReferenceText` |  | |  |  | `CHAR(20)` | Reference Details for Bank Details |
| `IsBlocked` |  | |  |  | `CHAR(1)` | Blocked Indicator |
