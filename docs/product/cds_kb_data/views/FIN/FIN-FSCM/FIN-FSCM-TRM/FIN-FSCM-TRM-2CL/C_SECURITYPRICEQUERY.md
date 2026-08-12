---
name: C_SECURITYPRICEQUERY
description: "This CDS view provides the prerequisites for answering the following business questions: What is the security price of a security class on a specific date? What is the currency for the security class? Where is the security class exchanged and what is the name of the exchange?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SECURITYPRICEQUERY')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What is the security price of a security class on a specific date? What is the currency for the security class? Where is the security class exchanged and what is the name of the exchange?"
semantic_vi: "Market Data Security Price - Query — CDS view tiêu dùng dựa trên I_SecurityPriceCube."
keywords:
  - "market"
  - "data"
  - "security"
  - "price"
  - "query"
  - "class"
  - "type"
  - "calendar"
  - "date"
  - "exchange"
  - "stock"
  - "crcy"
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
# C_SECURITYPRICEQUERY

**This CDS view provides the prerequisites for answering the following business questions: What is the security price of a security class on a specific date? What is the currency for the security class? Where is the security class exchanged and what is the name of the exchange?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SECURITYPRICEQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SecurityClassPriceType` | ✓ | |  |  | `CHAR(2)` | Market Data: Security Price Type |
| `SecurityClass` | ✓ | |  |  | `CHAR(13)` | Security Class ID Number |
| `CalendarDate` | ✓ | |  |  | `DATS(8)` | Calendar Date |
| `SecurityExchange` | ✓ | |  |  | `CHAR(10)` | Security exchange |
| `SecurityClassStockPriceCrcy` |  | |  |  | `CUKY(5)` | Quotation Currency (that prices are in) |
| `SecurityClassValueInQtanUnit` |  | |  |  | `DEC(23)` | Price of Unit- or Percentage-Quoted Security |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SECURITYPRICEQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SECURITYPRICEQUERY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CSECPRICEQUERY'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@OData.publish: true
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
@EndUserText.label: 'Market Data Security Price - Query'

define view C_SecurityPriceQuery
        as select from   I_SecurityPriceCube  as _SecClass               
    {   
         
         @Consumption.defaultValue: '01'  
         @Consumption.filter : { selectionType : #SINGLE, multipleSelections : false, mandatory: true }  
         key SecurityClassPriceType, 
         @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true, mandatory: true }  
         key SecurityClass,
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
         
         @EndUserText.label: 'Security Exchange'
         key SecurityExchange, 
      
             SecurityClassStockPriceCrcy,
             @DefaultAggregation: #SUM 
             SecurityClassValueInQtanUnit
             
    }
```
