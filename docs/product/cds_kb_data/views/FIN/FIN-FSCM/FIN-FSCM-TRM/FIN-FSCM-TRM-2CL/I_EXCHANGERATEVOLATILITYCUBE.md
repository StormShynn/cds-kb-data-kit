---
name: I_EXCHANGERATEVOLATILITYCUBE
description: "This CDS view provides the prerequisites for answering the following business question: How is the historical volatility of an exchange rate defined in the system?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EXCHANGERATEVOLATILITYCUBE')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business question: How is the historical volatility of an exchange rate defined in the system?"
semantic_vi: "Historic Exchange Rate Volatility - Cube — CDS view giao diện dựa trên I_ExchangeRateVolatility."
keywords:
  - "historic"
  - "exchange"
  - "rate"
  - "volatility"
  - "cube"
  - "type"
  - "source"
  - "currency"
  - "target"
  - "calendar"
  - "date"
  - "term"
  - "days"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
---
# I_EXCHANGERATEVOLATILITYCUBE

**This CDS view provides the prerequisites for answering the following business question: How is the historical volatility of an exchange rate defined in the system?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EXCHANGERATEVOLATILITYCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `VolatilityType` | ✓ | |  |  | `CHAR(3)` | Volatility Type |
| `SourceCurrency` | ✓ | |  |  | `CUKY(5)` | From currency |
| `TargetCurrency` | ✓ | |  |  | `CUKY(5)` | To Currency |
| `CalendarDate` | ✓ | |  | `cast(ExchRateVola.EffectiveDate as calendardate )` | `DATS(8)` | Calendar Date |
| `VolatilityTermInDays` | ✓ | |  |  | `NUMC(10)` | Term in Days |
| `ExchangeRateVolatilityValue` |  | |  |  | `DEC(11)` | Exchange Rate Volatility |
| `_VolatilityType` | | ✓ | | | | |
| `_SourceCurrency` | | ✓ | | | | |
| `_TargetCurrency` | | ✓ | | | | |
| `_CalendarDate` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_VolatilityType` | `I_VolatilityType` | [1..1] |
| `_SourceCurrency` | `I_Currency` | [0..1] |
| `_TargetCurrency` | `I_Currency` | [0..1] |
| `_CalendarDate` | `I_CalendarDate` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EXCHANGERATEVOLATILITYCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EXCHANGERATEVOLATILITYCUBE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IEXCHRATEVOLCUBE'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Analytics.dataCategory: #CUBE
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_CUBE ]
@Metadata.ignorePropagatedAnnotations:true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #COMPOSITE
@AbapCatalog.preserveKey:true
@Analytics.internalName:#LOCAL
@Metadata.allowExtensions:true
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #L
@EndUserText.label: 'Historic Exchange Rate Volatility - Cube'
define view I_ExchangeRateVolatilityCube as select from I_ExchangeRateVolatility as ExchRateVola 
association [1..1] to I_VolatilityType        as _VolatilityType on $projection.VolatilityType = _VolatilityType.VolatilityType
association [0..1] to I_Currency             as _SourceCurrency on $projection.SourceCurrency = _SourceCurrency.Currency
association [0..1] to I_Currency             as _TargetCurrency on $projection.TargetCurrency = _TargetCurrency.Currency
association [1..1] to I_CalendarDate          as _CalendarDate     on _CalendarDate.CalendarDate = $projection.CalendarDate
{
    @ObjectModel.foreignKey.association: '_VolatilityType'
    key VolatilityType, 
    @ObjectModel.foreignKey.association: '_SourceCurrency'
    key SourceCurrency, 
    @ObjectModel.foreignKey.association: '_TargetCurrency'
    key TargetCurrency, 
    @ObjectModel.foreignKey.association: '_CalendarDate'
    key  cast(ExchRateVola.EffectiveDate as calendardate ) as CalendarDate,
    key VolatilityTermInDays, 
    ExchangeRateVolatilityValue,
    
    _VolatilityType,
    _SourceCurrency,
    _TargetCurrency,
    _CalendarDate
}
```
