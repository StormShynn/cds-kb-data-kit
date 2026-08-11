---
name: C_HISSCRTYPRCVOLATILITYQRY
description: "This CDS view provides the prerequisites for answering the following business question: What is the historical volatility value of a security price for a specific volatility type and over a specified period of time?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_HISSCRTYPRCVOLATILITYQRY')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business question: What is the historical volatility value of a security price for a specific volatility type and over a specified period of time?"
semantic_vi: "Historic Security Prc Volatility - Query — CDS view tiêu dùng dựa trên I_ScrtyPrcVolatilityCube."
keywords:
  - "historic"
  - "security"
  - "prc"
  - "volatility"
  - "query"
  - "type"
  - "class"
  - "calendar"
  - "date"
  - "term"
  - "days"
  - "price"
  - "value"
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
# C_HISSCRTYPRCVOLATILITYQRY

**This CDS view provides the prerequisites for answering the following business question: What is the historical volatility value of a security price for a specific volatility type and over a specified period of time?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_HISSCRTYPRCVOLATILITYQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `VolatilityType` | ✓ | |  |  | `CHAR(3)` | Volatility Type |
| `SecurityClass` | ✓ | |  |  | `CHAR(13)` | Security Class |
| `CalendarDate` | ✓ | |  |  | `DATS(8)` | Calendar Date |
| `VolatilityTermInDays` | ✓ | |  |  | `INT4(10)` |  |
| `SecurityPriceVolatilityValue` |  | |  |  | `DEC(11)` | Security Price Volatility |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_HISSCRTYPRCVOLATILITYQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_HISSCRTYPRCVOLATILITYQRY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CHISSECPRCVOLQRY'
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
@EndUserText.label: 'Historic Security Prc Volatility - Query'
@OData.publish: true
define view C_HisScrtyPrcVolatilityQry
  as select from I_ScrtyPrcVolatilityCube
{
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true, mandatory: true }
  key VolatilityType,
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true, mandatory: true }
  key SecurityClass,
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
      SecurityPriceVolatilityValue

}
```
