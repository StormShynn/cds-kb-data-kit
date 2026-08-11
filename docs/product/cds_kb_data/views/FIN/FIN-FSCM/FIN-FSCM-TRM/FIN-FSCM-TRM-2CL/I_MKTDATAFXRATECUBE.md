---
name: I_MKTDATAFXRATECUBE
description: "This CDS view provides the prerequisites for answering the following business questions: What are the foreign exchange rates for a period of time? What are the currency pairs for the foreign exchange rates? What are exchange rate types for foreign exchange rates?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MKTDATAFXRATECUBE')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What are the foreign exchange rates for a period of time? What are the currency pairs for the foreign exchange rates? What are exchange rate types for foreign exchange rates?"
semantic_vi: "Market Data FX Rate - Cube — CDS view giao diện dựa trên I_ExchangeRate."
keywords:
  - "market"
  - "data"
  - "rate"
  - "cube"
  - "currency"
  - "pair"
  - "calendar"
  - "date"
  - "exchange"
  - "type"
  - "source"
  - "target"
tags:
  - FIN
  - bo:plant
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
---
# I_MKTDATAFXRATECUBE

**This CDS view provides the prerequisites for answering the following business questions: What are the foreign exchange rates for a period of time? What are the currency pairs for the foreign exchange rates? What are exchange rate types for foreign exchange rates?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MKTDATAFXRATECUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CurrencyPair` | ✓ | |  | `cast( CONCAT(CONCAT(FXRate.SourceCurrency,'/'),FXRate.TargetCurrency ) as ftr_curr_pair)` | `CHAR(20)` | Currency Pair |
| `CalendarDate` | ✓ | |  | `cast( FXRate.ExchangeRateEffectiveDate as calendardate)` | `DATS(8)` | Calendar Date |
| `ExchangeRateType` | ✓ | |  |  | `CHAR(4)` | Exchange Rate Type |
| `SourceCurrency` |  | |  |  | `CUKY(5)` | From-Currency |
| `TargetCurrency` |  | |  |  | `CUKY(5)` | To-Currency |
| `NumberOfSourceCurrencyUnits` |  | |  | `cast( FXRate.NumberOfSourceCurrencyUnits as ffact_curr )` | `DEC(9)` | Ratio for the "from" currency units |
| `NumberOfTargetCurrencyUnits` |  | |  | `cast( FXRate.NumberOfTargetCurrencyUnits as tfact_curr )` | `DEC(9)` | Ratio for the "to" currency units |
| `ExchangeRate` |  | |  | `cast( case when FXRate.ExchangeRate < 0 then division(-1,FXRate.ExchangeRate,6) else FXRate.ExchangeRate end as ftr_mdm_exchangerate)` | `DEC(16)` | Exchange Rate |
| `_CurrencyPair` | | ✓ | | | | |
| `_CalendarDate` | | ✓ | | | | |
| `_SourceCurrency` | | ✓ | | | | |
| `_TargetCurrency` | | ✓ | | | | |
| `_ExchangeType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CurrencyPair` | `I_MktDataCurrencyPair` | [0..1] |
| `_CalendarDate` | `I_CalendarDate` | [0..1] |
| `_SourceCurrency` | `I_Currency` | [0..1] |
| `_TargetCurrency` | `I_Currency` | [0..1] |
| `_ExchangeType` | `I_ExchangeRateType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MKTDATAFXRATECUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MKTDATAFXRATECUBE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IMKTFXRATECUBE'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Metadata.allowExtensions:true
@Analytics.dataCategory: #CUBE
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_CUBE ]
@Metadata.ignorePropagatedAnnotations:true 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #COMPOSITE
@AbapCatalog.preserveKey:true
@Analytics.internalName:#LOCAL 
@ObjectModel.representativeKey: 'CurrencyPair'
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #L
@EndUserText.label: 'Market Data FX Rate - Cube'
define view I_MktDataFXRateCube
        as select from    I_ExchangeRate  as FXRate
        association [0..1] to I_MktDataCurrencyPair as _CurrencyPair   on $projection.CurrencyPair     = _CurrencyPair.CurrencyPair                              
        association [0..1] to I_CalendarDate        as _CalendarDate   on $projection.CalendarDate     = _CalendarDate.CalendarDate                           
        association [0..1] to I_Currency            as _SourceCurrency on $projection.SourceCurrency   = _SourceCurrency.Currency
        association [0..1] to I_Currency            as _TargetCurrency on $projection.TargetCurrency   = _TargetCurrency.Currency
        association [0..1] to I_ExchangeRateType    as _ExchangeType   on $projection.ExchangeRateType = _ExchangeType.ExchangeRateType
        
          {
            @ObjectModel.foreignKey.association: '_CurrencyPair'
            key cast( CONCAT(CONCAT(FXRate.SourceCurrency,'/'),FXRate.TargetCurrency ) as ftr_curr_pair) as CurrencyPair, 
            
            @ObjectModel.foreignKey.association: '_CalendarDate'
            key cast( FXRate.ExchangeRateEffectiveDate as calendardate) as CalendarDate,

            @ObjectModel.foreignKey.association: '_ExchangeType'
            key FXRate.ExchangeRateType,  
 
            @ObjectModel.foreignKey.association: '_SourceCurrency'
            FXRate.SourceCurrency, 
            @ObjectModel.foreignKey.association: '_TargetCurrency'  
            FXRate.TargetCurrency,
            
            cast( FXRate.NumberOfSourceCurrencyUnits as ffact_curr ) as NumberOfSourceCurrencyUnits,
            cast( FXRate.NumberOfTargetCurrencyUnits as tfact_curr ) as NumberOfTargetCurrencyUnits,
            
            @DefaultAggregation: #SUM 
            cast( case when FXRate.ExchangeRate < 0 then division(-1,FXRate.ExchangeRate,6)
                 else FXRate.ExchangeRate 
                 end as ftr_mdm_exchangerate) as ExchangeRate,
            _CurrencyPair,     
            _CalendarDate,
            _SourceCurrency,
            _TargetCurrency,
            _ExchangeType
        
         }
```
