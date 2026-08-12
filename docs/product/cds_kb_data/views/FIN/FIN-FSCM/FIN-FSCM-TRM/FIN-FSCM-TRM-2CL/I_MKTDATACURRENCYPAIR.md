---
name: I_MKTDATACURRENCYPAIR
description: "This CDS view provides the prerequisites for answering the following business questions: What are the currency pairs of the FX market data that are available in the SAP systems?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
