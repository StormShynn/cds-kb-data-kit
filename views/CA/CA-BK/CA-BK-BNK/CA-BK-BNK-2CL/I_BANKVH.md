---
name: I_BANKVH
description: "Bankvh"
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
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankCountry` | ✓ | |  |  |  |  |
| `BankInternalID` | ✓ | |  |  |  |  |
| `LongBankName` |  | |  |  |  |  |
| `LongBankBranch` |  | |  |  |  |  |
| `SWIFTCode` |  | |  |  |  |  |
| `BankCode` |  | |  | `cast(BankNumber as bf_bank_bankcode preserving type )` |  |  |
| `BankCategoryDescription` |  | | `_BankCategoryText` | `BankCategoryDescription` |  |  |
| `BankCategory` |  | |  |  |  |  |
| `BankNetworkGrouping` |  | |  |  |  |  |
| `StreetName` |  | |  |  |  |  |
| `CityName` |  | |  |  |  |  |
| `AddressRegion` |  | |  |  |  |  |
| `ShortStreetName` |  | |  |  |  |  |
| `ShortCityName` |  | |  |  |  |  |
| `Region` |  | |  |  |  |  |
| `BankName` |  | |  |  |  |  |
| `BankBranch` |  | |  |  |  |  |
| `NotSglEuroPaytsAreaBkCat` |  | |  | `cast( case when BankCategory <> '4' or BankCategory is null then 'X' else ' ' end as bf_is_not_sepa_bank_category preserving type )` |  |  |
| `IsPostBankAccount` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `IsMarkedForDeletion` |  | |  |  |  |  |
| `PostOfficeBankAccount` |  | |  |  |  |  |
| `CheckDigitCalculationMethod` |  | |  |  |  |  |
| `BankDataFileFormat` |  | |  |  |  |  |
| `AddressID` |  | |  |  |  |  |
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
