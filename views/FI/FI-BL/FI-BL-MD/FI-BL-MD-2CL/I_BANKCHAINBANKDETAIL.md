---
name: I_BANKCHAINBANKDETAIL
description: "Supplier and Customer Bank Detail"
app_component: FI-BL-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKCHAINBANKDETAIL')/$value
semantic_en: "Supplier and Customer Bank Detail"
semantic_vi: "Supplier and Customer Bank Detail — CDS view giao diện dựa trên I_BusinessPartnerBank."
keywords:
  - "supplier"
  - "and"
  - "customer"
  - "bank"
  - "detail"
  - "identification"
  - "business"
  - "partner"
  - "account"
  - "reference"
  - "country"
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
---
# I_BANKCHAINBANKDETAIL

**Supplier and Customer Bank Detail**

| Property | Value |
|---|---|
| App Component | `FI-BL-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKCHAINBANKDETAIL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BkChnBP` | ✓ | |  | `BusinessPartner` | `CHAR(10)` | Business Partner Number |
| `BankIdentification` | ✓ | |  |  | `CHAR(4)` | Bank Details ID |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `BkChnBankAccountWithReference` |  | |  | `cast( '' as fap_banknrec )` | `CHAR(35)` | Account Number at Recipient Bank |
| `BankCountryKey` |  | |  |  | `CHAR(3)` | Bank Country/Region Key |
| `BankName` |  | |  |  | `CHAR(60)` | Name of Financial Institution |
| `BankNumber` |  | |  |  | `CHAR(15)` | Bank Key |
| `SWIFTCode` |  | |  |  | `CHAR(11)` | SWIFT/BIC for International Payments |
| `BankControlKey` |  | |  |  | `CHAR(2)` | Bank Control Key |
| `BankAccountHolderName` |  | |  |  | `CHAR(60)` | Account Holder Name |
| `BankAccountName` |  | |  |  | `CHAR(40)` | Name of Bank Account |
| `ValidityStartDate` |  | |  |  | `DEC(15)` | Validity Start of Business Partner Bank Details |
| `ValidityEndDate` |  | |  |  | `DEC(15)` | Validity End of Business Partner Bank Details |
| `IBAN` |  | |  |  | `CHAR(34)` | IBAN (International Bank Account Number) |
| `IBANValidityStartDate` |  | |  |  | `DATS(8)` | Validity Start of IBAN |
| `BankAccount` |  | |  |  | `CHAR(18)` | Bank Account Number |
| `BkChnAcctNumberAtRecipientBank` |  | |  | `cast( BankAccount as fap_banknrec )` | `CHAR(35)` | Account Number at Recipient Bank |
| `BankAccountReferenceText` |  | |  |  | `CHAR(20)` | Reference Details for Bank Details |
| `CollectionAuthInd` |  | |  |  | `CHAR(1)` | Indicator: Collection Authorization |
| `BusinessPartnerExternalBankID` |  | |  |  | `CHAR(20)` | Bank details ID in external system |
| `BPBankDetailsChangeDate` |  | |  |  | `DEC(15)` | Date of Change to Bank Details (BP) |
| `BPBankDetailsChangeTargetID` |  | |  |  | `CHAR(4)` | ID of Target Details for Change of Bank Details (BP) |
| `BPBankIsProtected` |  | |  |  | `CHAR(1)` | BP: Sensitivity Indicator |
| `CityName` |  | |  |  | `CHAR(35)` | City |
| `AuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `_Bank` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_IBAN` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKCHAINBANKDETAIL')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKCHAINBANKDETAIL')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE]
@EndUserText.label: 'Supplier and Customer Bank Detail'
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]  // Object was changed incompatibly regarding its system-internal use (C1).
define view entity I_BankChainBankDetail
  as select from I_BusinessPartnerBank

{
      //I_BusinessPartnerBank
  key BusinessPartner                      as BkChnBP,
  key BankIdentification,
      
      BusinessPartner as BusinessPartner,
      cast( '' as fap_banknrec )           as BkChnBankAccountWithReference,

      BankCountryKey,
      BankName,
      BankNumber,
      SWIFTCode,
      BankControlKey,
      BankAccountHolderName,
      BankAccountName,
      ValidityStartDate,
      ValidityEndDate,
      IBAN,
      IBANValidityStartDate,
      BankAccount,
      cast( BankAccount as fap_banknrec  ) as BkChnAcctNumberAtRecipientBank, // JV 250222  BankAccount as fap_bankn preserving type
      BankAccountReferenceText,
      CollectionAuthInd,
      BusinessPartnerExternalBankID,
      BPBankDetailsChangeDate,
      BPBankDetailsChangeTargetID,
      @Semantics.booleanIndicator
      BPBankIsProtected,
      CityName,
      AuthorizationGroup,
      
      /* Associations */
      //I_BusinessPartnerBank
      _Bank,
      _BusinessPartner,
      _IBAN
}
where
     BankAccount is not initial
  or IBAN        is not initial
```
