---
name: I_EXCHANGERATE
description: "Exchange Rate"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EXCHANGERATE')/$value
semantic_en: "Exchange Rate"
semantic_vi: "Exchange Rate — CDS view giao diện dựa trên tcurv."
keywords:
  - "exchange"
  - "rate"
  - "type"
  - "source"
  - "currency"
  - "target"
  - "effective"
  - "date"
tags:
  - FI
  - component:FI-GL-IS-2CL
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
---
# I_EXCHANGERATE

**Exchange Rate**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EXCHANGERATE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ExchangeRateType` | ✓ | |  | `kurst` | `CHAR(4)` | Exchange Rate Type |
| `SourceCurrency` | ✓ | |  | `fcurr` | `CUKY(5)` | From-Currency |
| `TargetCurrency` | ✓ | |  | `tcurr` | `CUKY(5)` | To-Currency |
| `ExchangeRateEffectiveDate` | ✓ | |  | `cast(case Union_1.gdatu when '' then cast('00000000' as abap.dats) else cast(substring(cast(99999999 - cast(Union_1.gdatu as abap.int4) as abap.char(20)), 1, 8) as abap.dats) end as gdatu_date preserving type)` | `DATS(8)` | Date As of Which the Exchange Rate Is Effective |
| `ExchangeRate` |  | |  | `ukurs` | `DEC(9)` | Exchange Rate |
| `NumberOfSourceCurrencyUnits` |  | |  | `ffact` | `DEC(9)` | Ratio for the "from" currency units |
| `NumberOfTargetCurrencyUnits` |  | |  | `tfact` | `DEC(9)` | Ratio for the "to" currency units |
| `AlternativeExchangeRateType` |  | |  | `abwct` | `CHAR(4)` | Alternative Exchange Rate Type |
| `AltvExchangeRateTypeValdtyDate` |  | |  | `abwga` | `DATS(8)` | Date from which the alternative exchange rate type is valid |
| `InvertedExchangeRateIsAllowed` |  | |  | `xinvr` | `CHAR(1)` | Indicator: Calculation allowed with inverted exchange rate ? |
| `ReferenceCurrency` |  | |  | `bwaer` | `CUKY(5)` | Reference currency for currency translation |
| `BuyingRateAvgExchangeRateType` |  | |  | `gkuzu` | `CHAR(4)` | Exch. rate type of av. rate used to determine buying rate |
| `SellingRateAvgExchangeRateType` |  | |  | `bkuzu` | `CHAR(4)` | Exch.rate type of av. rate used to determine selling rate |
| `FixedExchangeRateIsUsed` |  | |  | `xfixd` | `CHAR(1)` | Indicator: Exchange rate type uses fixed exchange rates |
| `SpecialConversionIsUsed` |  | |  | `xeuro` | `CHAR(1)` | Indicator: Exchange rate type uses special translation model |
| `SourceCurrencyDecimals` |  | |  | `currdec` | `INT1(3)` | Number of decimal places |
| `TargetCurrencyDecimals` |  | |  | `currdec` | `INT1(3)` | Number of decimal places |
| `ExchRateIsIndirectQuotation` |  | |  |  | `CHAR(1)` | Exchange Rate Is Indirect Quotation |
| `AbsoluteExchangeRate` |  | |  |  | `DEC(9)` | Absolute Exchange Rate |
| `EffectiveExchangeRate` |  | |  |  | `DEC(12)` | Effective Exchange Rate |
| `DirectQuotedEffectiveExchRate` |  | |  |  | `DEC(9)` | Direct Quoted Effective Exchange Rate |
| `IndirectQuotedEffctvExchRate` |  | |  |  | `DEC(9)` | Indirect Quoted Effective Exchange Rate |
| `_Text` | | ✓ | | | | |
| `_ExchangeRateType` | | ✓ | | | | |
| `_SourceCurrency` | | ✓ | | | | |
| `_TargetCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ExchangeRateTypeText` | [0..*] |
| `_ExchangeRateType` | `I_ExchangeRateType` | [0..1] |
| `_SourceCurrency` | `I_Currency` | [0..1] |
| `_TargetCurrency` | `I_Currency` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EXCHANGERATE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EXCHANGERATE')/$value)*

```abap
@EndUserText.label: 'Exchange Rate'
@Analytics: {dataCategory: #DIMENSION, dataExtraction.enabled: true}
@VDM.viewType: #BASIC 
@AbapCatalog.sqlViewName: 'IFIEXCHRATE'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'ExchangeRateEffectiveDate'
@ObjectModel.sapObjectNodeType.name: 'ExchangeRate'
@AbapCatalog.buffering.status: #NOT_ALLOWED        
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE                                      
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true  


define view I_ExchangeRate
as select from tcurv inner join P_ExchangeRate3 as Union_1 
                 on  tcurv.kurst = Union_1.kurst
left outer join  tcurx
                 on  Union_1.fcurr = tcurx.currkey
left outer join  tcurx as Join_10
                 on  Union_1.tcurr = Join_10.currkey
association [0..*] to I_ExchangeRateTypeText as _Text on $projection.ExchangeRateType = _Text.ExchangeRateType
association [0..1] to I_ExchangeRateType as _ExchangeRateType on $projection.ExchangeRateType = _ExchangeRateType.ExchangeRateType
association [0..1] to I_Currency             as _SourceCurrency on $projection.SourceCurrency = _SourceCurrency.Currency
association [0..1] to I_Currency             as _TargetCurrency on $projection.TargetCurrency = _TargetCurrency.Currency
{
  @ObjectModel.text.association: '_Text'
  @ObjectModel.foreignKey.association: '_ExchangeRateType'
  key tcurv.kurst as ExchangeRateType,
  @ObjectModel.foreignKey.association: '_SourceCurrency'
  key Union_1.fcurr as SourceCurrency,
  @ObjectModel.foreignKey.association: '_TargetCurrency'
  key Union_1.tcurr as TargetCurrency,
  key cast(case Union_1.gdatu
  when '' then cast('00000000' as abap.dats) 
  else cast(substring(cast(99999999 - cast(Union_1.gdatu as abap.int4) as abap.char(20)), 1, 8) as abap.dats) 
  end as gdatu_date preserving type) as ExchangeRateEffectiveDate,
  
  Union_1.ukurs as ExchangeRate,

  Union_1.ffact as NumberOfSourceCurrencyUnits,

  Union_1.tfact as NumberOfTargetCurrencyUnits,

  Union_1.abwct as AlternativeExchangeRateType,

  Union_1.abwga as AltvExchangeRateTypeValdtyDate,

  tcurv.xinvr as InvertedExchangeRateIsAllowed,

  tcurv.bwaer as ReferenceCurrency,

  tcurv.gkuzu as BuyingRateAvgExchangeRateType,

  tcurv.bkuzu as SellingRateAvgExchangeRateType,

  tcurv.xfixd as FixedExchangeRateIsUsed,

  tcurv.xeuro as SpecialConversionIsUsed,

  tcurx.currdec as SourceCurrencyDecimals,

  Join_10.currdec as TargetCurrencyDecimals,
  
  Union_1.ExchRateIsIndirectQuotation,
  
  Union_1.AbsoluteExchangeRate,
  
  Union_1.EffectiveExchangeRate,
  
  Union_1.DirectQuotedEffectiveExchRate,
  
  Union_1.IndirectQuotedEffctvExchRate,
  
  _Text,
  _ExchangeRateType,
  _SourceCurrency,
  _TargetCurrency
};
```
