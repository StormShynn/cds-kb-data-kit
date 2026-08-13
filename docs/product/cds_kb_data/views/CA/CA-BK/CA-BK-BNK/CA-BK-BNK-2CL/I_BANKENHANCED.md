---
name: I_BANKENHANCED
description: "Bankenhanced"
semantic_vi: "View Bankenhanced cung cấp thông tin chi tiết về các ngân hàng, bao gồm quốc gia, ID nội bộ, tên, chi nhánh và địa chỉ. Nó được sử dụng để truy cập và thao tác dữ liệu ngân hàng trong hệ thống."
keywords:
  - "bank"
  - "ngân hàng"
  - "bankenhanced"
  - "ca-bk-bnk-2cl"
  - "cross-application components"
  - "bank data"
  - "bank information"
  - "bank details"
  - "bank address"
  - "bank category"
semantic_en: "The Bankenhanced view provides detailed information about banks, including their country, internal ID, name, branch, and address. It is used to access and manipulate bank data in the system."
app_component: CA-BK-BNK-2CL
software_component: SAP_BASIS
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankCountry` | ✓ | |  |  | `CHAR(3)` | Bank Country/Region Key |
| `BankInternalID` | ✓ | |  |  | `CHAR(15)` | Bank Keys |
| `LongBankName` |  | |  | `case when ( _BankAddress.LongBankName is null or _BankAddress.LongBankName is initial ) then BankName else _BankAddress.LongBankName end` | `CHAR(80)` | Bank Name |
| `LongBankBranch` |  | |  | `case when ( _BankAddress.LongBankBranch is null or _BankAddress.LongBankBranch is initial ) then BankBranch else _BankAddress.LongBankBranch end` | `CHAR(80)` | Bank Branch |
| `StreetName` |  | |  | `case when ( _BankAddress.StreetName is null or _BankAddress.StreetName is initial ) then ShortStreetName else _BankAddress.StreetName end` | `CHAR(60)` | Street |
| `CityName` |  | |  | `case when ( _BankAddress.CityName is null or _BankAddress.CityName is initial ) then ShortCityName else _BankAddress.CityName end` | `CHAR(40)` | City |
| `AddressRegion` |  | |  | `case when ( _BankAddress.Region is null or _BankAddress.Region is initial ) then Region else _BankAddress.Region end` | `CHAR(3)` | Region (State, Province, County) |
| `BankCategory` |  | |  | `cast(BankCategory as bf_bank_category preserving type)` | `CHAR(1)` | Internal Bank Category |
| `BankNumber` |  | |  | `Bank` | `CHAR(15)` | Bank Number |
| `SWIFTCode` |  | |  |  | `CHAR(11)` | SWIFT/BIC for International Payments |
| `BankNetworkGrouping` |  | |  | `cast(BankNetworkGrouping as bf_bank_banknetworkgrouping preserving type)` | `CHAR(2)` | Bank Group (Bank Network) |
| `IsPostBankAccount` |  | |  |  | `CHAR(1)` | Post Office Bank Current Account |
| `IsMarkedForDeletion` |  | |  |  | `CHAR(1)` | Deletion Indicator |
| `PostOfficeBankAccount` |  | |  |  | `CHAR(16)` | Post office bank current account number |
| `BankBranch` |  | |  |  | `CHAR(40)` | Bank Branch |
| `CheckDigitCalculationMethod` |  | |  |  | `CHAR(4)` | Check digit calculation method |
| `BankDataFileFormat` |  | |  |  | `CHAR(3)` | Format of File with Bank Data |
| `AddressID` |  | |  |  | `CHAR(10)` | Address Number |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Created On |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Accounting Clerk Responsible for Adding the Object |
| `BankName` |  | |  |  | `CHAR(60)` | Name of Financial Institution |
| `ShortStreetName` |  | |  |  | `CHAR(35)` | Street and House Number |
| `ShortCityName` |  | |  |  | `CHAR(35)` | City |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `_BankAddress` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |

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
