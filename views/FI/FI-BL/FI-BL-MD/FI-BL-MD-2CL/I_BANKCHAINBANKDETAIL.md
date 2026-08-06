---
name: I_BANKCHAINBANKDETAIL
description: Supplier and Customer Bank Detail
app_component: FI-BL-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKCHAINBANKDETAIL')/$value
semantic_en: Supplier and Customer Bank Detail
tags:
  - FI
  - bo:businesspartner
  - component:FI-BL-MD-2CL
  - customer
  - FI-BL
  - FI-BL-MD
  - FI-BL-MD-2CL
  - interface-view
  - lob:finance
  - supplier
  - metadata-only
---
# I_BANKCHAINBANKDETAIL

**Supplier and Customer Bank Detail**

| Property | Value |
|---|---|
| App Component | `FI-BL-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKCHAINBANKDETAIL')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `BkChnBP` | `CHAR(10)` | Business Partner Number |
| `BankIdentification` | `CHAR(4)` | Bank Details ID |
| `BusinessPartner` | `CHAR(10)` | Business Partner Number |
| `BkChnBankAccountWithReference` | `CHAR(35)` | Account Number at Recipient Bank |
| `BankCountryKey` | `CHAR(3)` | Bank Country/Region Key |
| `BankName` | `CHAR(60)` | Name of Financial Institution |
| `BankNumber` | `CHAR(15)` | Bank Key |
| `SWIFTCode` | `CHAR(11)` | SWIFT/BIC for International Payments |
| `BankControlKey` | `CHAR(2)` | Bank Control Key |
| `BankAccountHolderName` | `CHAR(60)` | Account Holder Name |
| `BankAccountName` | `CHAR(40)` | Name of Bank Account |
| `ValidityStartDate` | `DEC(15)` | Validity Start of Business Partner Bank Details |
| `ValidityEndDate` | `DEC(15)` | Validity End of Business Partner Bank Details |
| `IBAN` | `CHAR(34)` | IBAN (International Bank Account Number) |
| `IBANValidityStartDate` | `DATS(8)` | Validity Start of IBAN |
| `BankAccount` | `CHAR(18)` | Bank Account Number |
| `BkChnAcctNumberAtRecipientBank` | `CHAR(35)` | Account Number at Recipient Bank |
| `BankAccountReferenceText` | `CHAR(20)` | Reference Details for Bank Details |
| `CollectionAuthInd` | `CHAR(1)` | Indicator: Collection Authorization |
| `BusinessPartnerExternalBankID` | `CHAR(20)` | Bank details ID in external system |
| `BPBankDetailsChangeDate` | `DEC(15)` | Date of Change to Bank Details (BP) |
| `BPBankDetailsChangeTargetID` | `CHAR(4)` | ID of Target Details for Change of Bank Details (BP) |
| `BPBankIsProtected` | `CHAR(1)` | BP: Sensitivity Indicator |
| `CityName` | `CHAR(35)` | City |
| `AuthorizationGroup` | `CHAR(4)` | Authorization Group |
