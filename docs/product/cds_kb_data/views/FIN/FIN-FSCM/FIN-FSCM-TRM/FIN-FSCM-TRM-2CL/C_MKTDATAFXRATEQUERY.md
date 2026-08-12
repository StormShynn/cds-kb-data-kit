---
name: C_MKTDATAFXRATEQUERY
description: "This CDS view provides the prerequisites for answering the following business questions: What are the historic foreign exchange (FX) rates within a predefined period of time? What are the currency pairs for the FX rates? What are exchange rate types for the FX rates?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MKTDATAFXRATEQUERY')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What are the historic foreign exchange (FX) rates within a predefined period of time? What are the currency pairs for the FX rates? What are exchange rate types for the FX rates?"
semantic_vi: "Market Data FX Rate - Query — CDS view tiêu dùng dựa trên I_MktDataFXRateCube."
keywords:
  - "market"
  - "data"
  - "rate"
  - "query"
  - "exchange"
  - "type"
  - "currency"
  - "pair"
  - "calendar"
  - "date"
  - "source"
  - "target"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - lob:finance
---
# C_MKTDATAFXRATEQUERY

**This CDS view provides the prerequisites for answering the following business questions: What are the historic foreign exchange (FX) rates within a predefined period of time? What are the currency pairs for the FX rates? What are exchange rate types for the FX rates?**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MKTDATAFXRATEQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ExchangeRateType` | ✓ | |  |  | `CHAR(4)` | Exchange Rate Type |
| `CurrencyPair` | ✓ | |  |  | `CHAR(20)` | Currency Pair |
| `CalendarDate` | ✓ | |  |  | `DATS(8)` | Calendar Date |
| `SourceCurrency` |  | |  |  | `CUKY(5)` | From-Currency |
| `TargetCurrency` |  | |  |  | `CUKY(5)` | To-Currency |
| `NumberOfSourceCurrencyUnits` |  | |  |  | `DEC(9)` | Ratio for the "from" currency units |
| `NumberOfTargetCurrencyUnits` |  | |  |  | `DEC(9)` | Ratio for the "to" currency units |
| `ExchangeRate` |  | |  |  | `DEC(16)` | Exchange Rate |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MKTDATAFXRATEQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MKTDATAFXRATEQUERY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CMKTFXQUERY'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@OData.publish: true
@Metadata.allowExtensions:true
@Analytics.query: true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_QUERY ]
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY 
@VDM.viewType: #CONSUMPTION
@AbapCatalog.preserveKey:true
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #L
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Market Data FX Rate - Query'

define view C_MktDataFXRateQuery
       as select from I_MktDataFXRateCube FXRate               
    {   

 
         @Consumption.filter : { selectionType : #SINGLE, multipleSelections : false, mandatory: true } 
         @Consumption.defaultValue: 'M'   
         key ExchangeRateType,
         @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true, mandatory: true } 
          @Consumption.defaultValue: 'EUR/USD'  
         key FXRate.CurrencyPair,
         
         @Consumption: {
                filter:     {selectionType: #INTERVAL,  mandatory: true},
                derivation: { 
                    lookupEntity: 'I_MktDataDateFunction', 
                    resultElement: 'DateFunctionStartDate', binding: [ 
                        { targetParameter: 'P_DateFunction', type: #CONSTANT, value : 'PREVIOUSYEARTODATE' },
                        { targetParameter : 'P_Language' , type : #SYSTEM_FIELD, value : '#SYSTEM_LANGUAGE'  } ],
                    resultElementHigh: 'DateFunctionEndDate' } 
         }
         key CalendarDate,
         
             FXRate.SourceCurrency,
             FXRate.TargetCurrency,
           
             NumberOfSourceCurrencyUnits,
             NumberOfTargetCurrencyUnits,
             @DefaultAggregation: #SUM 
             FXRate.ExchangeRate
    }
```
