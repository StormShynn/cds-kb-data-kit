---
name: I_HOUSEBANKACCOUNTLINKAGE
description: Housebankaccountlinkage
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
# I_HOUSEBANKACCOUNTLINKAGE

**Housebankaccountlinkage**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` |  |  |
| `HouseBank` | ✓ | |  | `hbkid` |  |  |
| `HouseBankAccount` | ✓ | |  | `hktid` |  |  |
| `BankAccountInternalID` |  | |  | `acc_id` |  |  |
| `BankInternalID` |  | | `_HouseBank` | `BankInternalID` |  |  |
| `BankCountry` |  | | `_HouseBank` | `BankCountry` |  |  |
| `CompanyCodeName` |  | | `_CompanyCode` | `CompanyCodeName` |  |  |
| `SWIFTCode` |  | | `_HouseBank._Bank` | `SWIFTCode` |  |  |
| `BankName` |  | | `_HouseBank._Bank` | `BankName` |  |  |
| `BankNumber` |  | | `_HouseBank._Bank` | `Bank` |  |  |
| `BankAccount` |  | |  | `bankn` |  |  |
| `BankAccountAlternative` |  | |  | `bnkn2` |  |  |
| `ReferenceInfo` |  | |  | `refzl` |  |  |
| `BankControlKey` |  | |  | `bkont` |  |  |
| `BankAccountCurrency` |  | |  | `waers` |  |  |
| `IBAN` |  | | `_BankAccount` | `IBAN` |  |  |
| `BankAccountDescription` |  | |  | `_BankAccount._Text[1: Language = $session.system_language].BankAccountDescription` |  |  |
| `GLAccount` |  | |  | `hkont` |  |  |
| `BankAccountHolderName` |  | | `_BankAccount` | `BankAccountHolderName` |  |  |
| `BankAccountNumber` |  | | `_BankAccount` | `BankAccountNumber` |  |  |
| `_BankAccount` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_HouseBank` | | ✓ | | | | |
| `_CountryText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BankAccount` | `I_BankAccount` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_HouseBank` | `I_Housebank` | [0..1] |
| `_CountryText` | `I_CountryText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IHBALINKAGE'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #COMPOSITE
@ObjectModel.representativeKey: 'HouseBankAccount'
@EndUserText.label: 'House Bank Account Linkage'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #C
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #UI_PROVIDER_PROJECTION_SOURCE ]                                     
define view I_HouseBankAccountLinkage
  as select from P_HouseBankAccount as HouseBankAccount
  association [0..1] to I_BankAccount as _BankAccount on  HouseBankAccount.acc_id = _BankAccount.BankAccountInternalID
  association [0..1] to I_CompanyCode as _CompanyCode on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_Housebank   as _HouseBank   on  $projection.HouseBank   = _HouseBank.HouseBank
                                                      and $projection.CompanyCode = _HouseBank.CompanyCode
  association [0..*] to I_CountryText as _CountryText on  $projection.BankCountry = _CountryText.Country                                                      

 
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
      @ObjectModel.text.element: ['CompanyCodeName']
      @Consumption.valueHelpDefinition: [ 
      { entity: { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' }, useAsTemplate: true } ]
  key HouseBankAccount.bukrs                                                            as CompanyCode,
      @ObjectModel.foreignKey.association: '_HouseBank'
      @Consumption.valueHelpDefinition: [ 
      { entity: { name: 'I_HouseBankStdVH', element: 'HouseBank' }, useAsTemplate: true } ]
  key hbkid                                                                             as HouseBank,
      @Consumption.valueHelpDefinition: [ 
      { entity: { name: 'I_HouseBankAccountStdVH', element: 'HouseBankAccount' }, useAsTemplate: true } ]
  key hktid                                                                             as HouseBankAccount,
      acc_id                                                                            as BankAccountInternalID,
      @ObjectModel.text.element:  [ 'BankName' ]
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BankVH', element: 'BankInternalID' } } ]
      _HouseBank.BankInternalID                                                         as BankInternalID,
      @ObjectModel.text.association: '_CountryText'  
      @Consumption.valueHelpDefinition: [ 
      { entity: { name: 'I_CountryVH', element: 'Country' }, useAsTemplate: true } ]
      _HouseBank.BankCountry                                                            as BankCountry,
      @Semantics.text:true
      _CompanyCode.CompanyCodeName,
      _HouseBank._Bank.SWIFTCode                                                        as SWIFTCode,
      @Semantics.text: true
      _HouseBank._Bank.BankName                                                         as BankName,
      // Domestic bank
      _HouseBank._Bank.Bank                                                             as BankNumber,
      @ObjectModel.text.element: ['BankAccountDescription']
      bankn                                                                             as BankAccount,
      bnkn2                                                                             as BankAccountAlternative,
      refzl                                                                             as ReferenceInfo,
      bkont                                                                             as BankControlKey,
      @Consumption.valueHelpDefinition: [ 
      { entity: { name: 'I_CurrencyStdVH', element: 'Currency' }, useAsTemplate: true } ]
      waers                                                                             as BankAccountCurrency,
      _BankAccount.IBAN                                                                 as IBAN,
      @Semantics.text: true
      _BankAccount._Text[1: Language = $session.system_language].BankAccountDescription as BankAccountDescription,
      @Consumption.valueHelpDefinition: [ 
      { entity: { name: 'I_GLAccountStdVH', element: 'GLAccount' }, useAsTemplate: true } ]
      hkont                                                                             as GLAccount,
      _BankAccount.BankAccountHolderName,
      _BankAccount.BankAccountNumber,
      _CompanyCode,
      _HouseBank,
      _BankAccount,
      _CountryText
}
```
