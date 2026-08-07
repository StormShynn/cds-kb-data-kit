---
name: I_BANKPROFILE
description: "Bankprofile"
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
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
