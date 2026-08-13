---
name: I_BANKVH
description: "Bankvh"
semantic_vi: "View I_BANKVH cung cấp thông tin về các ngân hàng, bao gồm quốc gia, ID nội bộ, tên, chi nhánh và mã SWIFT. Nó được sử dụng để lấy thông tin ngân hàng cho các mục đích kinh doanh khác nhau."
keywords:
  - "bank"
  - "ngân hàng"
  - "sap cds"
  - "cds view"
  - "bank details"
  - "chi tiết ngân hàng"
  - "bank information"
  - "thông tin ngân hàng"
  - "bank data"
  - "thông tin dữ liệu ngân hàng"
semantic_en: "The I_BANKVH view provides information about banks, including their country, internal ID, name, branch, and SWIFT code. It is used to retrieve bank details for various business purposes."
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
  - value-help
  - bank
  - component:CA-BK-BNK-2CL
  - lob:Cross-Application Components
  - bo:Bank
---
# I_BANKVH

**Bankvh**

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
| `LongBankName` |  | |  |  | `CHAR(80)` | Bank Name |
| `LongBankBranch` |  | |  |  | `CHAR(80)` | Bank Branch |
| `SWIFTCode` |  | |  |  | `CHAR(11)` | SWIFT/BIC for International Payments |
| `BankCode` |  | |  | `cast(BankNumber as bf_bank_bankcode preserving type )` | `CHAR(15)` | Bank Code/Bank Number |
| `BankCategoryDescription` |  | | `_BankCategoryText` | `BankCategoryDescription` | `CHAR(60)` | Bank Category Description |
| `BankCategory` |  | |  |  | `CHAR(1)` | Internal Bank Category |
| `BankNetworkGrouping` |  | |  |  | `CHAR(2)` | Bank Group (Bank Network) |
| `StreetName` |  | |  |  | `CHAR(60)` | Street |
| `CityName` |  | |  |  | `CHAR(40)` | City |
| `AddressRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `ShortStreetName` |  | |  |  | `CHAR(35)` | Street and House Number |
| `ShortCityName` |  | |  |  | `CHAR(35)` | City |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `BankName` |  | |  |  | `CHAR(60)` | Name of Financial Institution |
| `BankBranch` |  | |  |  | `CHAR(40)` | Bank Branch |
| `NotSglEuroPaytsAreaBkCat` |  | |  | `cast( case when BankCategory <> '4' or BankCategory is null then 'X' else ' ' end as bf_is_not_sepa_bank_category preserving type )` | `CHAR(1)` | Bank internal category is not SEPA |
| `IsPostBankAccount` |  | |  |  | `CHAR(1)` | Post Office Bank Current Account |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Created On |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Accounting Clerk Responsible for Adding the Object |
| `IsMarkedForDeletion` |  | |  |  | `CHAR(1)` | Deletion Indicator |
| `PostOfficeBankAccount` |  | |  |  | `CHAR(16)` | Post office bank current account number |
| `CheckDigitCalculationMethod` |  | |  |  | `CHAR(4)` | Check digit calculation method |
| `BankDataFileFormat` |  | |  |  | `CHAR(3)` | Format of File with Bank Data |
| `AddressID` |  | |  |  | `CHAR(10)` | Address Number |
| `_BankCategoryText` | | ✓ | | | | |
| `_BankAddress` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BankCategoryText` | `I_BankCategoryText` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Bank'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #MIXED
}
@VDM.viewType: #COMPOSITE
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER,
                                     #SEARCHABLE_ENTITY]
@ObjectModel.modelingPattern: #NONE
@Search.searchable: true
@ObjectModel.representativeKey: 'BankInternalID'

define view entity I_BankVH
  as select from I_BankEnhanced as Bank

  association [0..1] to I_BankCategoryText as _BankCategoryText on  _BankCategoryText.BankCategory = Bank.BankCategory
                                                                and _BankCategoryText.Language     = $session.system_language

{
      @UI: { lineItem:       [ { position: 10, importance: #HIGH } ],
             selectionField: [ { position: 10 } ] }
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @ObjectModel.foreignKey.association: '_Country'
  key BankCountry,

      @UI: { lineItem:       [ { position: 20, importance: #HIGH } ],
             selectionField: [ { position: 20 } ] }
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
  key BankInternalID,

      @UI: { lineItem:       [ { position: 30, importance: #HIGH } ],
             selectionField: [ { position: 30 } ] }
      LongBankName,

      @UI: { lineItem:       [ { position: 60, importance: #LOW } ],
             selectionField: [ { position: 60 } ] }
      LongBankBranch,

      @UI: { lineItem:       [ { position: 40, importance: #HIGH } ],
             selectionField: [ { position: 40 } ] }
      @Search: {
       defaultSearchElement: true,
       ranking: #LOW,
       fuzzinessThreshold: 0.8
      }
      SWIFTCode,

      @UI: { lineItem:       [ { position: 50, importance: #HIGH } ],
             selectionField: [ { position: 50 } ] }
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      cast(BankNumber as bf_bank_bankcode preserving type ) as BankCode,

      @Semantics.text:true
      _BankCategoryText.BankCategoryDescription,

      @UI: { lineItem:       [ { position: 70, importance: #LOW } ],
             selectionField: [ { position: 70 } ] }
      @ObjectModel.text.element: ['BankCategoryDescription']
      @UI.textArrangement: #TEXT_LAST
      @Consumption.valueHelpDefinition: [ { entity:{name: 'C_BankCategoryVH',element: 'BankCategory' } }                          ]
      BankCategory,

      @Search: {
       defaultSearchElement: true,
       ranking: #LOW,
       fuzzinessThreshold: 0.8
      }
      BankNetworkGrouping,

      @UI: { lineItem:       [ { position: 100, importance: #LOW } ],
             selectionField: [ { position: 100 } ] }
      StreetName,
      @UI: { lineItem:       [ { position: 80, importance: #LOW } ],
             selectionField: [ { position: 80 } ] }
      CityName,
      @UI: { lineItem:       [ { position: 90, importance: #LOW } ],
             selectionField: [ { position: 90 } ] }
      AddressRegion,

      // BNKA fields
      @UI.hidden: true
      ShortStreetName,
      @UI.hidden: true
      ShortCityName,
      @UI.hidden: true
      Region,
      @UI.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      BankName,
      @UI.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      BankBranch,

      @UI.hidden: true
      cast( case
         when BankCategory <> '4' or BankCategory is null then 'X'
         else ' '
      end as bf_is_not_sepa_bank_category preserving type ) as NotSglEuroPaytsAreaBkCat,

      @UI.hidden: true
      IsPostBankAccount,
      @UI.hidden: true
      CreationDate,
      @UI.hidden: true
      CreatedByUser,
      @UI.hidden: true
      IsMarkedForDeletion,
      @UI.hidden: true
      PostOfficeBankAccount,
      @UI.hidden: true
      CheckDigitCalculationMethod,
      @UI.hidden: true
      BankDataFileFormat,
      @UI.hidden: true
      AddressID,

      _BankAddress,
      _Country,
      _BankCategoryText

}
where
  IsMarkedForDeletion = ''
```
