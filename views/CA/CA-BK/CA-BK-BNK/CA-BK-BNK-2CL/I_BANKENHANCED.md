---
name: I_BANKENHANCED
description: Bankenhanced
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
# I_BANKENHANCED

**Bankenhanced**

| Property | Value |
|---|---|
| App Component | `CA-BK-BNK-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `BankCountry` | ✓ | |  |  |
| `BankInternalID` | ✓ | |  |  |
| `LongBankName` |  | |  | `case when ( _BankAddress.LongBankName is null or _BankAddress.LongBankName is initial ) then BankName else _BankAddress.LongBankName end` |
| `LongBankBranch` |  | |  | `case when ( _BankAddress.LongBankBranch is null or _BankAddress.LongBankBranch is initial ) then BankBranch else _BankAddress.LongBankBranch end` |
| `StreetName` |  | |  | `case when ( _BankAddress.StreetName is null or _BankAddress.StreetName is initial ) then ShortStreetName else _BankAddress.StreetName end` |
| `CityName` |  | |  | `case when ( _BankAddress.CityName is null or _BankAddress.CityName is initial ) then ShortCityName else _BankAddress.CityName end` |
| `AddressRegion` |  | |  | `case when ( _BankAddress.Region is null or _BankAddress.Region is initial ) then Region else _BankAddress.Region end` |
| `BankCategory` |  | |  | `cast(BankCategory as bf_bank_category preserving type)` |
| `BankNumber` |  | |  | `Bank` |
| `SWIFTCode` |  | |  |  |
| `BankNetworkGrouping` |  | |  | `cast(BankNetworkGrouping as bf_bank_banknetworkgrouping preserving type)` |
| `IsPostBankAccount` |  | |  |  |
| `IsMarkedForDeletion` |  | |  |  |
| `PostOfficeBankAccount` |  | |  |  |
| `BankBranch` |  | |  |  |
| `CheckDigitCalculationMethod` |  | |  |  |
| `BankDataFileFormat` |  | |  |  |
| `AddressID` |  | |  |  |
| `CreationDate` |  | |  |  |
| `CreatedByUser` |  | |  |  |
| `BankName` |  | |  |  |
| `ShortStreetName` |  | |  |  |
| `ShortCityName` |  | |  |  |
| `Region` |  | |  |  |
| `_BankAddress` | | ✓ | | |
| `_Country` | | ✓ | | |
| `_Region` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BankAddress` | `I_BankAddress` | [1..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Bank Enhanced'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #MIXED
}
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@VDM.viewType: #COMPOSITE
define view entity I_BankEnhanced
  as select from I_Bank_2
  association [1..1] to I_BankAddress as _BankAddress on  $projection.BankCountry    = _BankAddress.BankCountry
                                                      and $projection.BankInternalID = _BankAddress.BankInternalID
{
  key BankCountry,
  key BankInternalID,

      case
         when ( _BankAddress.LongBankName is null or
                _BankAddress.LongBankName is initial ) then BankName
         else _BankAddress.LongBankName
      end                                                                      as LongBankName,

      case
        when ( _BankAddress.LongBankBranch is null or
               _BankAddress.LongBankBranch is initial ) then BankBranch
        else _BankAddress.LongBankBranch
      end                                                                      as LongBankBranch,

      case
        when ( _BankAddress.StreetName is null or
               _BankAddress.StreetName is initial ) then ShortStreetName
        else _BankAddress.StreetName
      end                                                                      as StreetName,

      case
        when ( _BankAddress.CityName is null or
               _BankAddress.CityName is initial ) then ShortCityName
        else _BankAddress.CityName
      end                                                                      as CityName,

      case
        when ( _BankAddress.Region is null or
               _BankAddress.Region is initial ) then Region
        else _BankAddress.Region
      end                                                                      as AddressRegion,

      cast(BankCategory as bf_bank_category preserving type)                   as BankCategory,

      Bank                                                                     as BankNumber,
      SWIFTCode,
      cast(BankNetworkGrouping as bf_bank_banknetworkgrouping preserving type) as BankNetworkGrouping,
      IsPostBankAccount,
      IsMarkedForDeletion,
      PostOfficeBankAccount,
      BankBranch,
      CheckDigitCalculationMethod,
      BankDataFileFormat,
      AddressID,
      CreationDate,
      CreatedByUser,

      // fields from BNKA
      BankName,
      ShortStreetName,
      ShortCityName,
      Region,

      _BankAddress,
      _Country,
      _Region
}
```
