---
name: I_BANKCHAINITEM
description: "Intermediary bank for Bank Chain"
app_component: FI-BL-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKCHAINITEM')/$value
semantic_en: "Intermediary bank for Bank Chain"
semantic_vi: "Intermediary bank for Bank Chain — CDS view giao diện dựa trên tbchain21."
keywords:
  - "intermediary"
  - "bank"
  - "for"
  - "chain"
  - "country"
  - "recipient"
  - "acct"
  - "number"
  - "currency"
  - "sender"
tags:
  - FI
  - component:FI-BL-MD-2CL
  - FI-BL
  - FI-BL-MD
  - FI-BL-MD-2CL
  - interface-view
  - lob:finance
---
# I_BANKCHAINITEM

**Intermediary bank for Bank Chain**

| Property | Value |
|---|---|
| App Component | `FI-BL-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKCHAINITEM')/$value) |

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
| `BkChnIntermediaryBank` | ✓ | |  | `cast(chainno as fap_chainno preserving type )` | `NUMC(2)` | Current Number of a Bank in Bank Chain |
| `BkChnTypeOfBankInBankChain` |  | |  | `cast(chainbankt as fap_chainbankt preserving type )` | `CHAR(1)` | Type of Bank in a Bank Chain (Correspondent, Intermediary) |
| `BkChnCntryKeyOfCorrespondentBk` |  | |  | `cast(chainbanks as fap_chainbanks preserving type )` | `CHAR(3)` | Country/Region Key of a Correspondent Bank |
| `BkChnBkKeyOfCorrespondenceBank` |  | |  | `cast(chainbankk as fap_chainbankk preserving type )` | `CHAR(15)` | Bank Key of a Correspondent Bank |
| `BkChnAcctNmbrAtCorrespondBank` |  | |  | `cast( chainbankn as fap_chainbankn preserving type )` | `CHAR(35)` | Account Number at Correspondent Bank |
| `IBAN` |  | |  | `iban` | `CHAR(34)` | IBAN (International Bank Account Number) |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKCHAINITEM')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKCHAINITEM')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #BASIC
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel.usageType.dataClass: #ORGANIZATIONAL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE]
@EndUserText.label: 'Intermediary bank for Bank Chain'
define view entity I_BankChainItem
  as select from tbchain21
{
  key     cast(banksrec as  fap_banksrec preserving type )      as BkChnCountryKeyOfRecipientBank,
  key     cast(bankkrec as  fap_bankkrec preserving type )      as BkChnBankKeyOfRecipientBank,
  key     cast(banknrec as  fap_banknrec preserving type )      as BkChnAcctNumberAtRecipientBank,
  key     cast(waers    as  fap_waers preserving type )         as BkChnCurrencyKey,
  key     cast(bankssnd as  fap_bankssnd preserving type )      as BkChnCountryKeyOfSenderBank,
  key     cast(bankksnd as  fap_bankksnd preserving type )      as BkChnBankKeyOfSenderBank,
  key     cast(uzawe    as  fap_uzawe preserving type )         as BkChnPaymentMethodSupplement,
  key     cast(chainno  as  fap_chainno preserving type )       as BkChnIntermediaryBank,

          cast(chainbankt   as fap_chainbankt preserving type ) as BkChnTypeOfBankInBankChain,
          cast(chainbanks   as fap_chainbanks preserving type ) as BkChnCntryKeyOfCorrespondentBk,
          cast(chainbankk   as fap_chainbankk preserving type ) as BkChnBkKeyOfCorrespondenceBank,
          cast( chainbankn  as fap_chainbankn preserving type ) as BkChnAcctNmbrAtCorrespondBank,
          iban                                                  as IBAN
}
```
