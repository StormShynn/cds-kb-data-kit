---
name: C_HISEXCHRATEVOLATILITYQRY
description: "This CDS view provides the prerequisites for answering the following business question: What's the historical volatility value of an exchange rate for a specific volatility type for a specific period of time?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_HISEXCHRATEVOLATILITYQRY')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business question: What's the historical volatility value of an exchange rate for a specific volatility type for a specific period of time?"
semantic_vi: "Historic Exch Rate Volatility - Query — CDS view tiêu dùng dựa trên I_ExchangeRateVolatilityCube."
keywords:
  - "historic"
  - "exch"
  - "rate"
  - "volatility"
  - "query"
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
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - lob:finance
---
# C_HISEXCHRATEVOLATILITYQRY

**This CDS view provides the prerequisites for answering the following business question: What's the historical volatility value of an exchange rate for a specific volatility type for a specific period of time?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_HISEXCHRATEVOLATILITYQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `VolatilityType` | ✓ | |  |  | `CHAR(3)` | Volatility Type |
| `SourceCurrency` | ✓ | |  |  | `CUKY(5)` | From currency |
| `TargetCurrency` | ✓ | |  |  | `CUKY(5)` | To Currency |
| `CalendarDate` | ✓ | |  |  | `DATS(8)` | Calendar Date |
| `VolatilityTermInDays` | ✓ | |  |  | `NUMC(10)` | Term in Days |
| `ExchangeRateVolatilityValue` |  | |  |  | `DEC(11)` | Exchange Rate Volatility |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_HISEXCHRATEVOLATILITYQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_HISEXCHRATEVOLATILITYQRY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CHISEXRATEVOLQRY'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
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
@EndUserText.label: 'Historic Exch Rate Volatility - Query'
@OData.publish: true
define view C_HisExchRateVolatilityQry
  as select from I_ExchangeRateVolatilityCube
{
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true, mandatory: true }
  key VolatilityType,
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true, mandatory: true }
  key SourceCurrency,
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true, mandatory: true }
  key TargetCurrency,
 @Consumption: {
                    filter:     {selectionType: #INTERVAL, mandatory: true},
                    derivation: {
                        lookupEntity: 'I_SglGregorianCalDateFunction',
                        resultElement: 'DateFunctionStartDate', binding: [
                            { targetParameter: 'P_DateFunction', type: #CONSTANT, value : 'PREVIOUSYEARTODATE' } ],
//                            { targetParameter : 'P_Language' , type : #SYSTEM_FIELD, value : '#SYSTEM_LANGUAGE'  } ],
                        resultElementHigh: 'DateFunctionEndDate' }
             }
  key CalendarDate,
  key VolatilityTermInDays,
      @DefaultAggregation: #SUM
      ExchangeRateVolatilityValue

}
```
