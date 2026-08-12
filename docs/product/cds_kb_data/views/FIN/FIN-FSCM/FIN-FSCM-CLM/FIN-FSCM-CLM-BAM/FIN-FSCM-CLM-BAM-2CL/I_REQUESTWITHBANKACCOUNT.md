---
name: I_REQUESTWITHBANKACCOUNT
description: "This CDS view provides you with access to the data of bank accounts that are involved in a workflow change request for bank account management. This CDS view provides the prerequisites for answering the following business question: Which bank accounts are involved in this change request?"
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REQUESTWITHBANKACCOUNT')/$value
semantic_en: "This CDS view provides you with access to the data of bank accounts that are involved in a workflow change request for bank account management. This CDS view provides the prerequisites for answering the following business question: Which bank accounts are involved in this change request?"
semantic_vi: "Bank Accounts in Change Request — CDS view giao diện dựa trên fclm_bam_reqacnt."
keywords:
  - "bank"
  - "accounts"
  - "change"
  - "request"
  - "account"
  - "internal"
  - "revision"
  - "country"
tags:
  - FIN
  - account
  - bo:bank
  - component:FIN-FSCM-CLM-BAM-2CL
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-BAM
  - FIN-FSCM-CLM-BAM-2CL
  - interface-view
  - lob:finance
---
# I_REQUESTWITHBANKACCOUNT

**This CDS view provides you with access to the data of bank accounts that are involved in a workflow change request for bank account management. This CDS view provides the prerequisites for answering the following business question: Which bank accounts are involved in this change request?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REQUESTWITHBANKACCOUNT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankAccountChangeRequest` | ✓ | |  | `request_id` | `NUMC(12)` | Change Request ID |
| `BankAccountInternalID` | ✓ | |  | `acc_id` | `NUMC(10)` | Bank Account Technical ID |
| `BankAccountRevision` | ✓ | |  | `revision` | `NUMC(4)` | Revision Number |
| `BankAccount` |  | |  | `acc_num` | `CHAR(40)` | Bank Account Number |
| `BankCountry` |  | |  | `banks` | `CHAR(3)` | Bank Country/Region Key |
| `Bank` |  | |  | `bankl` | `CHAR(15)` | Bank Key |
| `AccountType` |  | |  | `acc_type_id` | `CHAR(10)` | Bank Account Type ID |
| `CompanyCode` |  | |  | `bukrs` | `CHAR(4)` | Company Code |
| `BankAccountType` |  | |  | `acc_type_id` | `CHAR(10)` | Bank Account Type ID |
| `BankAccountHolderName` |  | |  | `beneficial` | `CHAR(60)` | Bank Account Holder |
| `IBAN` |  | |  | `iban` | `CHAR(34)` | IBAN (International Bank Account Number) |
| `BankAccountCurrency` |  | |  | `waers` | `CUKY(5)` | Currency Key |
| `CountryName` |  | | `_BankCountryText` | `CountryName` | `CHAR(50)` | Country/Region Name |
| `BankAccountNumber` |  | |  | `acc_num` | `CHAR(40)` | Bank Account Number |
| `BankAccountStatus` |  | |  | `status` | `CHAR(2)` | Bank Account Status |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BankCountryText` | `I_CountryText` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REQUESTWITHBANKACCOUNT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REQUESTWITHBANKACCOUNT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IREQBANKACCT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Bank Accounts in Change Request'
@VDM.viewType: #BASIC
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #B
@ClientHandling.algorithm: #SESSION_VARIABLE
//@AccessControl.privilegedAssociations:  [ '_BankAccountCurrency' ]
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: ['SQL_DATA_SOURCE','CDS_MODELING_DATA_SOURCE']

define view I_RequestWithBankAccount
  as select from fclm_bam_reqacnt as header
    inner join   fclm_bam_amd     as amd on  header.acc_id   = amd.acc_id
                                         and header.revision = amd.revision
  //   association [0..1] to I_BankAccountCurrencyRev as _BankAccountCurrency      on  $projection.BankAccountInternalID = _BankAccountCurrency.BankAccountInternalID
  //                                                                               and $projection.BankAccountRevision   = _BankAccountCurrency.BankAccountRevision
  association [0..1] to I_CountryText as _BankCountryText on  $projection.BankCountry   = _BankCountryText.Country
                                                          and _BankCountryText.Language = $session.system_language
{
  key header.request_id as BankAccountChangeRequest,
  key header.acc_id     as BankAccountInternalID,
  key header.revision   as BankAccountRevision,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'BankAccountNumber'
      amd.acc_num       as BankAccount,
      amd.banks         as BankCountry,
      amd.bankl         as Bank,
      amd.acc_type_id   as AccountType,
      amd.bukrs         as CompanyCode,
      amd.acc_type_id   as BankAccountType,
      //amd.contract_type as BankAccountContractType,
      amd.beneficial    as BankAccountHolderName,
      amd.iban          as IBAN,
      //   _BankAccountCurrency.BankAccountCurrency
      amd.waers         as BankAccountCurrency,
      _BankCountryText.CountryName,
      amd.acc_num       as BankAccountNumber,
      amd.status        as BankAccountStatus
}
```
