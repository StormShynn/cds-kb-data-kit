---
name: I_WORKASSGMTPAYMENTDEX
description: Work Assignment Payment Details
app_component: CA-WFD-BL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKASSGMTPAYMENTDEX')/$value
semantic_en: Work Assignment Payment Details
tags:
  - CA
  - CA-WFD
  - CA-WFD-BL
  - component:CA-WFD-BL
  - interface-view
  - lob:cross_application components
  - payment
  - metadata-only
---
# I_WORKASSGMTPAYMENTDEX

**Work Assignment Payment Details**

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
