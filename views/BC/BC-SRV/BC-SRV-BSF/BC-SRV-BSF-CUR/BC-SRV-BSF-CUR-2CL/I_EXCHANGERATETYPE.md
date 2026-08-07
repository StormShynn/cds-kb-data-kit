---
name: I_EXCHANGERATETYPE
description: "Exchange RateTYPE"
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
# I_EXCHANGERATETYPE

**Exchange RateTYPE**

| Property | Value |
|---|---|
| App Component | `BC-SRV-BSF-CUR-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ExchangeRateType` | ✓ | |  | `kurst` |  |  |
| `ReferenceCurrency` |  | |  | `cast(tcurv.bwaer as fis_bwaer_curv preserving type )` |  |  |
| `BuyingRateAvgExchangeRateType` |  | |  | `cast(tcurv.gkuzu as fis_gkuzu_cur preserving type )` |  |  |
| `InvertedExchangeRateIsAllowed` |  | |  | `cast(tcurv.xinvr as fis_xinvr_curv preserving type )` |  |  |
| `SellingRateAvgExchangeRateType` |  | |  | `cast(bkuzu as fis_bkuzu_cur preserving type )` |  |  |
| `FixedExchangeRateIsUsed` |  | |  | `cast(xfixd as fis_xfixd_curv preserving type )` |  |  |
| `SpecialConversionIsUsed` |  | |  | `cast(xeuro as fis_xeuro_curv preserving type )` |  |  |
| `SourceCurrencyIsBaseCurrency` |  | |  | `xbwrl` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ExchangeRateTypeText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Exchange Rate Type'
@Analytics: {dataCategory: #DIMENSION, dataExtraction.enabled: true}
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFIEXCHRATETYPE'
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.buffering.status: #ACTIVE         
@AbapCatalog.buffering.type: #FULL
@AbapCatalog.buffering.numberOfKeyFields: 1
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true  

@ObjectModel: {representativeKey: 'ExchangeRateType', 
               sapObjectNodeType.name: 'ExchangeRateType', 
               supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
               modelingPattern: #ANALYTICAL_DIMENSION,
               usageType: {
                            dataClass: #MASTER,
                            serviceQuality: #A,
                            sizeCategory: #M
                           }
              }

@Search.searchable: true

define view I_ExchangeRateType as select from tcurv
association [0..*] to I_ExchangeRateTypeText as _Text
on tcurv.kurst = _Text.ExchangeRateType
{
  @ObjectModel.text.association: '_Text'
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH
  @Search.fuzzinessThreshold: 0.8
  key tcurv.kurst as ExchangeRateType,

  cast(tcurv.bwaer as fis_bwaer_curv preserving type ) as ReferenceCurrency,
  cast(tcurv.gkuzu as fis_gkuzu_cur preserving type ) as BuyingRateAvgExchangeRateType,

  cast(tcurv.xinvr as fis_xinvr_curv preserving type ) as InvertedExchangeRateIsAllowed,
  //tcurv.xbwrl as 
  cast(bkuzu as fis_bkuzu_cur preserving type ) as SellingRateAvgExchangeRateType,
  cast(xfixd as fis_xfixd_curv preserving type ) as FixedExchangeRateIsUsed,

  cast(xeuro as fis_xeuro_curv preserving type ) as SpecialConversionIsUsed,
  xbwrl as SourceCurrencyIsBaseCurrency,
  _Text

};
```
