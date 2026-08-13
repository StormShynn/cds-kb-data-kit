---
name: I_BANKPROFILE
description: "Bankprofile"
semantic_vi: "View I_BANKPROFILE cung cấp thông tin về hồ sơ ngân hàng, bao gồm thông tin ngân hàng, xếp hạng tín nhiệm và thông tin tài khoản. Nó được sử dụng để truy cập và quản lý dữ liệu ngân hàng trong thành phần FIN-FSCM-CLM-BAM-2CL."
keywords:
  - "bank profile"
  - "hồ sơ ngân hàng"
  - "fin-fscm-clm-bam-2cl"
  - "bank details"
  - "thông tin ngân hàng"
  - "credit rating"
  - "xếp hạng tín nhiệm"
  - "sap cds view"
  - "view i_bankprofile"
semantic_en: "The I_BANKPROFILE view provides information about bank profiles, including bank details, credit ratings, and account information. It is used to access and manage bank data in the FIN-FSCM-CLM-BAM-2CL component."
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-CLM
  - interface-view
  - bank
  - component:FIN-FSCM-CLM-BAM-2CL
  - lob:Other
  - bo:Bank
---
# I_BANKPROFILE

**Bankprofile**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Bank` | ✓ | |  |  |  |  |
| `BankCountry` | ✓ | |  |  |  |  |
| `BankName` |  | |  |  |  |  |
| `CreditRating` |  | |  |  |  |  |
| `NumberOfBankAccounts` |  | |  |  |  |  |
| `NumberOfCompanyCodes` |  | |  |  |  |  |
| `NrOfBanksRated` |  | |  | `1` |  |  |
| `_Country` | | ✓ | | | | |
| `_BPCreditWorthinessRating` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFIBANKPROFILE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Bank Profile'
@Analytics.dataCategory: #DIMENSION
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MASTER
@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@Analytics.internalName:#LOCAL
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel.representativeKey: 'Bank'
@ObjectModel.supportedCapabilities: #ANALYTICAL_DIMENSION
define view I_BankProfile
  as select distinct from I_BankRating            as Bank
    left outer to one join       P_BankAccountCount      as BankAccount    on  Bank.Bank        = BankAccount.Bank
                                                                    and Bank.BankCountry = BankAccount.BankCountry
    left outer to one join       P_HouseBankCompanyCount as HBCompanyCount on  Bank.Bank        = HBCompanyCount.Bank
                                                                    and Bank.BankCountry = HBCompanyCount.BankCountry
{
      @ObjectModel.text.element: ['BankName']
  key Bank.Bank,
      @ObjectModel.foreignKey.association: '_Country'
  key Bank.BankCountry,
      @Semantics.text
      BankName,
      @ObjectModel.foreignKey.association: '_BPCreditWorthinessRating'
      CreditRating,
      @DefaultAggregation: #SUM
      NumberOfBankAccounts,
      @DefaultAggregation: #SUM
      NumberOfCompanyCodes,
      @Aggregation.default: #SUM
      1 as NrOfBanksRated,
      _Country,
      _BPCreditWorthinessRating

}
```
