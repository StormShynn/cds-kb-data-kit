---
name: I_BANKACCOUNTANALYSISCUBE
description: "This CDS view retrieves the bank account number for bank groups. This CDS view provides the prerequisites for answering the following business question: What is the total number of bank accounts in a certain bank group?"
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTANALYSISCUBE')/$value
semantic_en: "This CDS view retrieves the bank account number for bank groups. This CDS view provides the prerequisites for answering the following business question: What is the total number of bank accounts in a certain bank group?"
semantic_vi: "Bank Account Analysis - Cube — CDS view giao diện dựa trên I_BankAccount."
keywords:
  - "bank"
  - "account"
  - "analysis"
  - "cube"
  - "internal"
  - "country"
  - "company"
  - "code"
  - "group"
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
# I_BANKACCOUNTANALYSISCUBE

**This CDS view retrieves the bank account number for bank groups. This CDS view provides the prerequisites for answering the following business question: What is the total number of bank accounts in a certain bank group?**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTANALYSISCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankAccountInternalID` | ✓ | |  |  | `NUMC(10)` | Bank Account Technical ID |
| `Bank` |  | |  |  | `CHAR(15)` | Bank Key |
| `BankCountry` |  | |  |  | `CHAR(3)` | Bank Country/Region Key |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BankGroup` |  | |  | `cast( _BankHierarchy.BankGroup as fclm_bank_group preserving type )` | `CHAR(10)` | Bank Group ID |
| `CreditRating` |  | | `_BankRating` | `CreditRating` | `CHAR(3)` | Rating |
| `BankInBankGroup` |  | |  | `cast(_BankRating.BusinessPartnerNumber as fclm_bank_in_bnkgrp preserving type )` | `CHAR(10)` | Bank In Bank Group |
| `NumberOfBankAccounts` |  | |  | `cast( 1 as farp_bnk_account_count )` | `INT4(10)` | Number of Bank Accounts |
| `_CompanyCode` | | ✓ | | | | |
| `_Bank` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_BankHierarchy` | | ✓ | | | | |
| `_BankGroup` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_Bank` | `I_Bank` | [0..1] |
| `_Country` | `I_Country` | [0..1] |
| `_BankRating` | `I_BankRating` | [0..1] |
| `_BankHierarchy` | `I_BankHierBankGroupMapping` | [0..1] |
| `_BankGroup` | `I_BusinessPartner` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTANALYSISCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTANALYSISCUBE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFIBKACCTANLYSC'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #COMPOSITE
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #D
@Metadata.ignorePropagatedAnnotations:true
@Metadata.allowExtensions:true
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Analytics.dataCategory: #CUBE
@Analytics.internalName:#LOCAL
@Analytics.dataExtraction.enabled: true
@ObjectModel.sapObjectNodeType.name: 'BankAccount'
@EndUserText.label: 'Bank Account Analysis - Cube'
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER,
                                      #EXTRACTION_DATA_SOURCE ]
define view I_BankAccountAnalysisCube
  as select from I_BankAccount
  association [0..1] to I_CompanyCode              as _CompanyCode   on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_Bank                     as _Bank          on  $projection.Bank        = _Bank.BankInternalID
                                                                     and $projection.BankCountry = _Bank.BankCountry
  association [0..1] to I_Country                  as _Country       on  $projection.BankCountry = _Country.Country
  association [0..1] to I_BankRating               as _BankRating    on  $projection.Bank        = _BankRating.Bank
                                                                     and $projection.BankCountry = _BankRating.BankCountry
  association [0..1] to I_BankHierBankGroupMapping as _BankHierarchy on  $projection.BankAccountInternalID = _BankHierarchy.BankAccountInternalID
  association [0..1] to I_BusinessPartner          as _BankGroup     on  $projection.BankGroup = _BankGroup.BusinessPartner
{
  key BankAccountInternalID,
      @ObjectModel.foreignKey.association: '_Bank'
      Bank,
      @ObjectModel.foreignKey.association: '_Country'
      BankCountry,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      CompanyCode,
      @ObjectModel.foreignKey.association: '_BankGroup'
      cast( _BankHierarchy.BankGroup as fclm_bank_group preserving type )             as BankGroup,
      @ObjectModel.foreignKey.association: '_BPCreditWorthinessRating'
      _BankRating.CreditRating,
      cast(_BankRating.BusinessPartnerNumber as fclm_bank_in_bnkgrp preserving type ) as BankInBankGroup,
      @DefaultAggregation: #SUM
      cast( 1 as farp_bnk_account_count )                                             as NumberOfBankAccounts,
      _CompanyCode,
      _Bank,
      _Country,
      _BankRating._BPCreditWorthinessRating,
      _BankHierarchy,
      _BankGroup

}
where
     BankAccountStatus = '02'
  or BankAccountStatus = '10'
  or BankAccountStatus = '09';
```
