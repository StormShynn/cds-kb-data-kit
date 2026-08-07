---
name: I_EXCHANGERATESPREADRAWDATA
description: Exchange RateSPREADRAWDATA
app_component: BC-SRV-BSF-CUR-2CL
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-BSF
  - interface-view
  - exchange-rate
  - component:BC-SRV-BSF-CUR-2CL
  - lob:Basis Components
---
# I_EXCHANGERATESPREADRAWDATA

**Exchange RateSPREADRAWDATA**

| Property | Value |
|---|---|
| App Component | `BC-SRV-BSF-CUR-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ExchangeRateType` | ✓ | |  | `kurst` |
| `SourceCurrency` | ✓ | |  | `fcurr` |
| `TargetCurrency` | ✓ | |  | `tcurr` |
| `ValidityStartDate` | ✓ | |  | `case gdatu when '' then cast('00000000' as abap.dats) else cast(substring(cast(99999999 - cast(cast(gdatu as abap.numc(8)) as abap.int4) as abap.char(20)), 1, 8) as abap.dats) end` |
| `CurrencyConversionSpreadRatio` |  | |  | `spred` |
| `_ExchangeRateType` | | ✓ | | |
| `_SourceCurrency` | | ✓ | | |
| `_TargetCurrency` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ExchangeRateType` | `I_ExchangeRateType` | [0..1] |
| `_SourceCurrency` | `I_Currency` | [0..1] |
| `_TargetCurrency` | `I_Currency` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFIEXCHRATERAW'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Exchange Rates Spread Raw Data'

@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true 
@ClientHandling.type: #INHERITED 
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER 

@Analytics.internalName: #LOCAL 
//@AbapCatalog.buffering.status: #ACTIVE        
//@AbapCatalog.buffering.type: #GENERIC
//@AbapCatalog.buffering.numberOfKeyFields: 4
  

//@ObjectModel.representativeKey: 'ValidityStartDate'
@Analytics:{
//    dataCategory: #DIMENSION,
    dataExtraction: { enabled: true }
            }
            


define view I_ExchangeRateSpreadRawData as select from tcurs 
association [0..1] to I_ExchangeRateType as _ExchangeRateType on $projection.ExchangeRateType = _ExchangeRateType.ExchangeRateType
association [0..1] to I_Currency  as _SourceCurrency on $projection.SourceCurrency = _SourceCurrency.Currency
association [0..1] to I_Currency  as _TargetCurrency on $projection.TargetCurrency = _TargetCurrency.Currency

{
   //TCURR 
   @ObjectModel.foreignKey.association:'_ExchangeRateType'
    key kurst as ExchangeRateType, 
    @ObjectModel.foreignKey.association:'_SourceCurrency'
    key fcurr as SourceCurrency, 
    @ObjectModel.foreignKey.association:'_TargetCurrency'
    key tcurr as TargetCurrency, 
    key case gdatu
    when '' then cast('00000000' as abap.dats) 
    else cast(substring(cast(99999999 - cast(cast(gdatu as abap.numc(8)) as abap.int4) as abap.char(20)), 1, 8) as abap.dats)  
    end as ValidityStartDate,    
    spred as CurrencyConversionSpreadRatio,
   _ExchangeRateType,
   _SourceCurrency,
   _TargetCurrency
 
}
```
