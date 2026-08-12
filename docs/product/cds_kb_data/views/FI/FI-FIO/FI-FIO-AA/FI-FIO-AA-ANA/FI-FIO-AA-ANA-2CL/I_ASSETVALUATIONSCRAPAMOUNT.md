---
name: I_ASSETVALUATIONSCRAPAMOUNT
description: "Assetvaluationscrapamount"
app_component: FI-FIO-AA-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - interface-view
  - component:FI-FIO-AA-ANA-2CL
  - lob:Finance
  - bo:Asset
---
# I_ASSETVALUATIONSCRAPAMOUNT

**Assetvaluationscrapamount**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AA-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  |  |  |
| `MasterFixedAsset` | ✓ | |  |  |  |  |
| `FixedAsset` | ✓ | |  |  |  |  |
| `Ledger` | ✓ | |  |  |  |  |
| `AssetRealDepreciationArea` | ✓ | |  |  |  |  |
| `ValidityEndDate` | ✓ | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `AcqnProdnCostScrapPercent` |  | |  |  |  |  |
| `ScrapAmountInCoCodeCrcy` |  | |  |  |  |  |
| `CompanyCodeCurrency` |  | |  |  |  |  |
| `ScrapAmountInGlobCrcy` |  | |  |  |  |  |
| `GlobalCurrency` |  | |  |  |  |  |
| `ScrapAmountInFreeDefinedCrcy1` |  | |  |  |  |  |
| `FreeDefinedCurrency1` |  | |  |  |  |  |
| `ScrapAmountInFreeDefinedCrcy2` |  | |  |  |  |  |
| `FreeDefinedCurrency2` |  | |  |  |  |  |
| `ScrapAmountInFreeDefinedCrcy3` |  | |  |  |  |  |
| `FreeDefinedCurrency3` |  | |  |  |  |  |
| `ScrapAmountInFreeDefinedCrcy4` |  | |  |  |  |  |
| `FreeDefinedCurrency4` |  | |  |  |  |  |
| `ScrapAmountInFreeDefinedCrcy5` |  | |  |  |  |  |
| `FreeDefinedCurrency5` |  | |  |  |  |  |
| `ScrapAmountInFreeDefinedCrcy6` |  | |  |  |  |  |
| `FreeDefinedCurrency6` |  | |  |  |  |  |
| `ScrapAmountInFreeDefinedCrcy7` |  | |  |  |  |  |
| `FreeDefinedCurrency7` |  | |  |  |  |  |
| `ScrapAmountInFreeDefinedCrcy8` |  | |  |  |  |  |
| `FreeDefinedCurrency8` |  | |  |  |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_MasterFixedAsset` | | ✓ | | | | |
| `_FixedAsset` | | ✓ | | | | |
| `_AssetValuationForLedger` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_DepreciationArea` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_GlobalCurrency` | | ✓ | | | | |
| `_FreeDefinedCurrency1` | | ✓ | | | | |
| `_FreeDefinedCurrency2` | | ✓ | | | | |
| `_FreeDefinedCurrency3` | | ✓ | | | | |
| `_FreeDefinedCurrency4` | | ✓ | | | | |
| `_FreeDefinedCurrency5` | | ✓ | | | | |
| `_FreeDefinedCurrency6` | | ✓ | | | | |
| `_FreeDefinedCurrency7` | | ✓ | | | | |
| `_FreeDefinedCurrency8` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_MasterFixedAsset` | `I_MasterFixedAsset` | [1..1] |
| `_FixedAsset` | `I_FixedAsset` | [1..1] |
| `_AssetValuationForLedger` | `I_AssetValuationForLedger` | [1..1] |
| `_Ledger` | `I_Ledger` | [1..1] |
| `_DepreciationArea` | `I_DepreciationAreaForLedger` | [0..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [0..1] |
| `_GlobalCurrency` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency1` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency2` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency3` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency4` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency5` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency6` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency7` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency8` | `I_Currency` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Fixed Asset Valuation Scrap Values'
@VDM.viewType: #COMPOSITE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
    usageType.serviceQuality: #C,
    usageType.sizeCategory: #S,
    usageType.dataClass: #MASTER,
    modelingPattern: #NONE,
    supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
}

define view entity I_AssetValuationScrapAmount
  as select from P_AssetValuationScrapAmount
  association [1..1] to I_CompanyCode               as _CompanyCode             on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_MasterFixedAsset          as _MasterFixedAsset        on  $projection.CompanyCode      = _MasterFixedAsset.CompanyCode
                                                                                and $projection.MasterFixedAsset = _MasterFixedAsset.MasterFixedAsset
  association [1..1] to I_FixedAsset                as _FixedAsset              on  $projection.CompanyCode      = _FixedAsset.CompanyCode
                                                                                and $projection.MasterFixedAsset = _FixedAsset.MasterFixedAsset
                                                                                and $projection.FixedAsset       = _FixedAsset.FixedAsset
  association [1..1] to I_AssetValuationForLedger   as _AssetValuationForLedger on  $projection.CompanyCode               = _AssetValuationForLedger.CompanyCode
                                                                                and $projection.MasterFixedAsset          = _AssetValuationForLedger.MasterFixedAsset
                                                                                and $projection.FixedAsset                = _AssetValuationForLedger.FixedAsset
                                                                                and $projection.Ledger                    = _AssetValuationForLedger.Ledger
                                                                                and $projection.AssetRealDepreciationArea = _AssetValuationForLedger.AssetRealDepreciationArea
                                                                                and $projection.ValidityEndDate           = _AssetValuationForLedger.ValidityEndDate
  association [1..1] to I_Ledger                    as _Ledger                  on  $projection.Ledger = _Ledger.Ledger
  association [0..1] to I_DepreciationAreaForLedger as _DepreciationArea        on  $projection.CompanyCode               = _DepreciationArea.CompanyCode
                                                                                and $projection.Ledger                    = _DepreciationArea.Ledger
                                                                                and $projection.AssetRealDepreciationArea = _DepreciationArea.AssetDepreciationArea
  association [0..1] to I_Currency                  as _CompanyCodeCurrency     on  $projection.CompanyCodeCurrency = _CompanyCodeCurrency.Currency
  association [0..1] to I_Currency                  as _GlobalCurrency          on  $projection.GlobalCurrency = _GlobalCurrency.Currency
  association [0..1] to I_Currency                  as _FreeDefinedCurrency1    on  $projection.FreeDefinedCurrency1 = _FreeDefinedCurrency1.Currency
  association [0..1] to I_Currency                  as _FreeDefinedCurrency2    on  $projection.FreeDefinedCurrency2 = _FreeDefinedCurrency2.Currency
  association [0..1] to I_Currency                  as _FreeDefinedCurrency3    on  $projection.FreeDefinedCurrency3 = _FreeDefinedCurrency3.Currency
  association [0..1] to I_Currency                  as _FreeDefinedCurrency4    on  $projection.FreeDefinedCurrency4 = _FreeDefinedCurrency4.Currency
  association [0..1] to I_Currency                  as _FreeDefinedCurrency5    on  $projection.FreeDefinedCurrency5 = _FreeDefinedCurrency5.Currency
  association [0..1] to I_Currency                  as _FreeDefinedCurrency6    on  $projection.FreeDefinedCurrency6 = _FreeDefinedCurrency6.Currency
  association [0..1] to I_Currency                  as _FreeDefinedCurrency7    on  $projection.FreeDefinedCurrency7 = _FreeDefinedCurrency7.Currency
  association [0..1] to I_Currency                  as _FreeDefinedCurrency8    on  $projection.FreeDefinedCurrency8 = _FreeDefinedCurrency8.Currency

{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key CompanyCode                   as CompanyCode,
      @ObjectModel.foreignKey.association: '_MasterFixedAsset'
  key MasterFixedAsset              as MasterFixedAsset,
      @ObjectModel.foreignKey.association: '_FixedAsset'
  key FixedAsset                    as FixedAsset,
      @ObjectModel.foreignKey.association: '_Ledger'
  key Ledger                        as Ledger,
      @ObjectModel.foreignKey.association: '_DepreciationArea'
  key AssetRealDepreciationArea     as AssetRealDepreciationArea,
  key ValidityEndDate               as ValidityEndDate,
      ValidityStartDate             as ValidityStartDate,
      AcqnProdnCostScrapPercent     as AcqnProdnCostScrapPercent,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      ScrapAmountInCoCodeCrcy       as ScrapAmountInCoCodeCrcy,
      @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
      CompanyCodeCurrency           as CompanyCodeCurrency,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      ScrapAmountInGlobCrcy         as ScrapAmountInGlobCrcy,
      @ObjectModel.foreignKey.association: '_GlobalCurrency'
      GlobalCurrency                as GlobalCurrency,
      @Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
      ScrapAmountInFreeDefinedCrcy1 as ScrapAmountInFreeDefinedCrcy1,
      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency1'
      FreeDefinedCurrency1          as FreeDefinedCurrency1,
      @Semantics.amount.currencyCode: 'FreeDefinedCurrency2'
      ScrapAmountInFreeDefinedCrcy2 as ScrapAmountInFreeDefinedCrcy2,
      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency2'
      FreeDefinedCurrency2          as FreeDefinedCurrency2,
      @Semantics.amount.currencyCode: 'FreeDefinedCurrency3'
      ScrapAmountInFreeDefinedCrcy3 as ScrapAmountInFreeDefinedCrcy3,
      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency3'
      FreeDefinedCurrency3          as FreeDefinedCurrency3,
      @Semantics.amount.currencyCode: 'FreeDefinedCurrency4'
      ScrapAmountInFreeDefinedCrcy4 as ScrapAmountInFreeDefinedCrcy4,
      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency4'
      FreeDefinedCurrency4          as FreeDefinedCurrency4,
      @Semantics.amount.currencyCode: 'FreeDefinedCurrency5'
      ScrapAmountInFreeDefinedCrcy5 as ScrapAmountInFreeDefinedCrcy5,
      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency5'
      FreeDefinedCurrency5          as FreeDefinedCurrency5,
      @Semantics.amount.currencyCode: 'FreeDefinedCurrency6'
      ScrapAmountInFreeDefinedCrcy6 as ScrapAmountInFreeDefinedCrcy6,
      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency6'
      FreeDefinedCurrency6          as FreeDefinedCurrency6,
      @Semantics.amount.currencyCode: 'FreeDefinedCurrency7'
      ScrapAmountInFreeDefinedCrcy7 as ScrapAmountInFreeDefinedCrcy7,
      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency7'
      FreeDefinedCurrency7          as FreeDefinedCurrency7,
      @Semantics.amount.currencyCode: 'FreeDefinedCurrency8'
      ScrapAmountInFreeDefinedCrcy8 as ScrapAmountInFreeDefinedCrcy8,
      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency8'
      FreeDefinedCurrency8          as FreeDefinedCurrency8,

      /* Associations */
      _CompanyCode,
      _MasterFixedAsset,
      _FixedAsset,
      _AssetValuationForLedger,
      _Ledger,
      _DepreciationArea,
      _CompanyCodeCurrency,
      _GlobalCurrency,
      _FreeDefinedCurrency1,
      _FreeDefinedCurrency2,
      _FreeDefinedCurrency3,
      _FreeDefinedCurrency4,
      _FreeDefinedCurrency5,
      _FreeDefinedCurrency6,
      _FreeDefinedCurrency7,
      _FreeDefinedCurrency8
}
```
