---
name: I_MKTDATACURRENCYPAIR
description: "This CDS view provides the prerequisites for answering the following business questions: What are the currency pairs of the FX market data that are available in the SAP systems?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MKTDATACURRENCYPAIR')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What are the currency pairs of the FX market data that are available in the SAP systems?"
semantic_vi: "Market Data Currency Pair — CDS view giao diện dựa trên Market Data Currency Pair."
keywords:
  - "market"
  - "data"
  - "currency"
  - "pair"
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
# I_MKTDATACURRENCYPAIR

**This CDS view provides the prerequisites for answering the following business questions: What are the currency pairs of the FX market data that are available in the SAP systems?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MKTDATACURRENCYPAIR')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CurrencyPair` | ✓ | |  | `cast( CurrencyPair as ftr_curr_pair)` | `CHAR(20)` | Currency Pair |
| `SourceCurrency` |  | |  |  | `CUKY(5)` | From Currency |
| `TargetCurrency` |  | |  |  | `CUKY(5)` | To Currency |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MKTDATACURRENCYPAIR')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MKTDATACURRENCYPAIR')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IMDCURRPAIR'
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.preserveKey:true
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass:  #CUSTOMIZING
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: 'CurrencyPair'
@Analytics.internalName: #LOCAL 
@Analytics : {dataCategory: #DIMENSION, dataExtraction.enabled: true}
@VDM.viewType: #COMPOSITE
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]
@EndUserText.label: 'Market Data Currency Pair'
@ObjectModel.sapObjectNodeType.name: 'MarketDataCurrencyPair'
define view I_MktDataCurrencyPair 
      as select distinct from P_MKTDATACURRENCYPAIR as Pair 
    {
      
        key  cast( CurrencyPair as ftr_curr_pair) as CurrencyPair,
             SourceCurrency,
             TargetCurrency 
 
    }
```
