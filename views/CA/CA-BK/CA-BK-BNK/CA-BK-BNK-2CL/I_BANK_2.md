---
name: I_BANK_2
description: Bank 2
app_component: CA-BK-BNK-2CL
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-BK
  - CA-BK-BNK
  - interface-view
  - bank
  - component:CA-BK-BNK-2CL
  - lob:Cross-Application Components
  - bo:Bank
---
# I_BANK_2

**Bank 2**

| Property | Value |
|---|---|
| App Component | `CA-BK-BNK-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BankCountry` | `bk.banks` |
| key `BankInternalID` | `bk.bankl` |
| `CreationDate` | `bk.erdat` |
| `CreatedByUser` | `bk.ernam` |
| `BankName` | `bk.banka` |
| `Region` | `bk.provz` |
| `StreetName` | `bk.stras` |
| `ShortStreetName` | `bk.stras` |
| `CityName` | `bk.ort01` |
| `ShortCityName` | `bk.ort01` |
| `SWIFTCode` | `bk.swift` |
| `BankNetworkGrouping` | `bk.bgrup` |
| `IsPostBankAccount` | `bk.xpgro` |
| `IsMarkedForDeletion` | `bk.loevm` |
| `Bank` | `bk.bnklz` |
| `PostOfficeBankAccount` | `bk.pskto` |
| `Branch` | `bk.brnch` |
| `BankBranch` | `bk.brnch` |
| `CheckDigitCalculationMethod` | `bk.chkme` |
| `BankDataFileFormat` | `bk.vers` |
| `AddressID` | `bk.adrnr` |
| `BankCategory` | `ad.bintk` |
| `_Address` | *Association* |
| `_BankAddress` | *Association* |
| `_Region` | *Association* |
| `_Country` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Address` | `I_Address` | [0..1] |
| `_BankAddress` | `I_OrganizationAddress` | [0..*] |
| `_Region` | `I_Region` | [0..1] |
| `_Country` | `I_Country` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#PROJECTION_LIST]
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Bank'
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #B,
  sizeCategory: #M,
  dataClass: #MASTER
}
@Metadata.allowExtensions:true
@Search.searchable: true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'BankInternalID'
//@ObjectModel.sapObjectNodeType.name: 'Bank'
@Analytics: {dataCategory: #DIMENSION, dataExtraction.enabled: true}


define view entity I_Bank_2
  as select from    bnka   as bk
    left outer join bnkain as ad on  bk.banks = ad.banks
                                 and bk.bankl = ad.bankl
  association [0..1] to I_Address             as _Address     on  $projection.AddressID = _Address.AddressID
  association [0..*] to I_OrganizationAddress as _BankAddress on  $projection.AddressID = _BankAddress.AddressID
  association [0..1] to I_Region              as _Region      on  $projection.Region      = _Region.Region
                                                              and $projection.BankCountry = _Region.Country
  association [0..1] to I_Country             as _Country     on  $projection.BankCountry = _Country.Country

{
      @ObjectModel.foreignKey.association: '_Country'
  key bk.banks as BankCountry,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key bk.bankl as BankInternalID,
      bk.erdat as CreationDate,
      bk.ernam as CreatedByUser,
      @Semantics.text: true
      bk.banka as BankName,
      bk.provz as Region,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'ShortStreetName'
      bk.stras as StreetName,
      bk.stras as ShortStreetName, //successor for StreetName
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'ShortCityName'
      bk.ort01 as CityName,
      bk.ort01 as ShortCityName, //successor for CityName
      bk.swift as SWIFTCode,
      bk.bgrup as BankNetworkGrouping,
      bk.xpgro as IsPostBankAccount,
      bk.loevm as IsMarkedForDeletion,
      bk.bnklz as Bank,
      bk.pskto as PostOfficeBankAccount,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'BankBranch'
      bk.brnch as Branch,
      bk.brnch as BankBranch, //successor for Branch
      bk.chkme as CheckDigitCalculationMethod,
      bk.vers  as BankDataFileFormat,
      bk.adrnr as AddressID,
      @ObjectModel.sapObjectNodeTypeReference: 'BankCategory'
      ad.bintk as BankCategory,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_BankAddress'
      _Address,
      _BankAddress,
      _Region,
      _Country
}
```
