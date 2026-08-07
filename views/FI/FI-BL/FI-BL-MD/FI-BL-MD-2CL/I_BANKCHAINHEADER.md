---
name: I_BANKCHAINHEADER
description: "Bank Chain per Business Partner Account"
app_component: FI-BL-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKCHAINHEADER')/$value
semantic_en: "Bank Chain per Business Partner Account"
semantic_vi: "Bank Chain per Business Partner Account — CDS view giao diện dựa trên Bank Chain per Business Partner Account."
keywords:
  - "bank"
  - "chain"
  - "per"
  - "business"
  - "partner"
  - "account"
  - "country"
  - "recipient"
  - "acct"
  - "number"
  - "currency"
  - "sender"
tags:
  - FI
  - account
  - component:FI-BL-MD-2CL
  - FI-BL
  - FI-BL-MD
  - FI-BL-MD-2CL
  - interface-view
  - lob:finance
---
# I_BANKCHAINHEADER

**Bank Chain per Business Partner Account**

| Property | Value |
|---|---|
| App Component | `FI-BL-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKCHAINHEADER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BkChnCountryKeyOfRecipientBank` | ✓ | |  | `cast(banksrec as fap_banksrec preserving type )` | `CHAR(3)` | Country/Region Key of Recipient Bank |
| `BkChnBankKeyOfRecipientBank` | ✓ | |  | `cast(bankkrec as fap_bankkrec preserving type )` | `CHAR(15)` | Bank Key of Recipient Bank |
| `BkChnAcctNumberAtRecipientBank` | ✓ | |  | `cast(banknrec as fap_banknrec preserving type )` | `CHAR(35)` | Account Number at Recipient Bank |
| `BkChnCurrencyKey` | ✓ | |  | `cast(waers as fap_waers preserving type )` | `CUKY(5)` | Currency |
| `BkChnCountryKeyOfSenderBank` | ✓ | |  | `cast(bankssnd as fap_bankssnd preserving type )` | `CHAR(3)` | Country/Region Key of Sender Bank |
| `BkChnBankKeyOfSenderBank` | ✓ | |  | `cast(bankksnd as fap_bankksnd preserving type )` | `CHAR(15)` | Bank Key of Sender Bank |
| `BkChnPaymentMethodSupplement` | ✓ | |  | `cast(uzawe as fap_uzawe preserving type )` | `CHAR(2)` | Payment method supplement |
| `BkChnBankAccountNumberForUI` |  | |  | `cast( '' as fap_banknrec )` | `CHAR(35)` | Account Number at Recipient Bank |
| `NumberOfOccurrences` |  | |  | `cast( instr( banknrec, '<IBAN>') as fap_numberofoccurrences preserving type )` | `INT4(10)` | Account Number of a Technical Type |
| `IBAN` |  | | `_Iban` | `IBAN` | `CHAR(34)` | IBAN (International Bank Account Number) |
| `_Item` | | ✓ | | | | |
| `_HouseBank` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_PaytMethSuplmnt` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Item` | `I_BankChainItem` | [0..*] |
| `_Iban` | `I_Iban` | [0..1] |
| `_HouseBank` | `I_Housebank` | [0..*] |
| `_Country` | `I_Country` | [0..1] |
| `_PaytMethSuplmnt` | `I_BankChainPaytMethSuplmnt` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKCHAINHEADER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKCHAINHEADER')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE]
@EndUserText.label: 'Bank Chain per Business Partner Account'
define root view entity I_BankChainHeader
  as select distinct from tbchain2

  association [0..*] to I_BankChainItem            as _Item            on  $projection.BkChnCountryKeyOfRecipientBank = _Item.BkChnCountryKeyOfRecipientBank
                                                                       and $projection.BkChnBankKeyOfRecipientBank    = _Item.BkChnBankKeyOfRecipientBank
                                                                       and $projection.BkChnAcctNumberAtRecipientBank = _Item.BkChnAcctNumberAtRecipientBank
                                                                       and $projection.BkChnCurrencyKey               = _Item.BkChnCurrencyKey
                                                                       and $projection.BkChnCountryKeyOfSenderBank    = _Item.BkChnCountryKeyOfSenderBank
                                                                       and $projection.BkChnBankKeyOfSenderBank       = _Item.BkChnBankKeyOfSenderBank
                                                                       and $projection.BkChnPaymentMethodSupplement   = _Item.BkChnPaymentMethodSupplement

  association [0..1] to I_Iban                     as _Iban            on  $projection.BkChnCountryKeyOfRecipientBank = _Iban.BankCountry
                                                                       and $projection.BkChnBankKeyOfRecipientBank    = _Iban.Bank
                                                                       and $projection.BkChnAcctNumberAtRecipientBank = _Iban.BankAccount
  association [0..*] to I_Housebank                as _HouseBank       on  $projection.BkChnCountryKeyOfSenderBank = _HouseBank.BankCountry
                                                                       and $projection.BkChnBankKeyOfSenderBank    = _HouseBank.BankInternalID
  association [0..1] to I_Country                  as _Country         on  $projection.BkChnCountryKeyOfRecipientBank = _Country.Country
  association [0..1] to I_BankChainPaytMethSuplmnt as _PaytMethSuplmnt on  $projection.BkChnPaymentMethodSupplement = _PaytMethSuplmnt.BkChnPaymentMethodSupplement


{
  key cast(banksrec  as  fap_banksrec preserving type )                             as BkChnCountryKeyOfRecipientBank,
  key cast(bankkrec  as  fap_bankkrec preserving type )                             as BkChnBankKeyOfRecipientBank,
  key cast(banknrec  as  fap_banknrec preserving type )                             as BkChnAcctNumberAtRecipientBank,
  key cast(waers     as  fap_waers preserving type )                                as BkChnCurrencyKey,
  key cast(bankssnd  as  fap_bankssnd preserving type )                             as BkChnCountryKeyOfSenderBank,
  key cast(bankksnd  as  fap_bankksnd preserving type )                             as BkChnBankKeyOfSenderBank,
  key cast(uzawe     as  fap_uzawe preserving type )                                as BkChnPaymentMethodSupplement,

      //field used as a filter in list report (BkChnAcctNumberAtRecipientBank used in object page as filter)
      cast( '' as fap_banknrec )                                                    as BkChnBankAccountNumberForUI,

      // is account number of a technical type?
      cast( instr( banknrec, '<IBAN>') as fap_numberofoccurrences preserving type ) as NumberOfOccurrences,
      _Iban.IBAN,
      _Item,
      _HouseBank,
      _Country,
      _PaytMethSuplmnt
}
```
