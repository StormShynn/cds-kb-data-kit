---
name: C_MKTDATAREFINTRSTRATEQRY
description: "This CDS view provides the prerequisites for answering the following business questions: What is the reference interest rate for a specified currency in a period of time?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MKTDATAREFINTRSTRATEQRY')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What is the reference interest rate for a specified currency in a period of time?"
semantic_vi: "Market Data Ref Interest Rate - Query — CDS view tiêu dùng dựa trên I_MktDataRefIntrstRateCube."
keywords:
  - "market"
  - "data"
  - "ref"
  - "interest"
  - "rate"
  - "query"
  - "reference"
  - "calendar"
  - "date"
  - "currency"
  - "effective"
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
# C_MKTDATAREFINTRSTRATEQRY

**This CDS view provides the prerequisites for answering the following business questions: What is the reference interest rate for a specified currency in a period of time?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MKTDATAREFINTRSTRATEQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ReferenceInterestRate` | ✓ | |  |  | `CHAR(10)` | Reference Interest Rate |
| `CalendarDate` | ✓ | |  |  | `DATS(8)` | Calendar Date |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `EffectiveInterestRate` |  | |  |  | `DEC(10)` | Interest Rate |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MKTDATAREFINTRSTRATEQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MKTDATAREFINTRSTRATEQRY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CMKTREFINTQUERY'
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
@EndUserText.label: 'Market Data Ref Interest Rate - Query'

define view C_MktDataRefIntrstRateQry
        as select from I_MktDataRefIntrstRateCube as RefInt            
    {              
          @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true, mandatory: true }  
          key RefInt.ReferenceInterestRate,
     
          @Consumption: {
                filter:     {selectionType: #INTERVAL,  mandatory: true},
                derivation: { 
                    lookupEntity: 'I_MktDataDateFunction', 
                    resultElement: 'DateFunctionStartDate', binding: [ 
                        { targetParameter: 'P_DateFunction', type: #CONSTANT, value : 'PREVIOUSYEARTODATE' },
                        { targetParameter : 'P_Language' , type : #SYSTEM_FIELD, value : '#SYSTEM_LANGUAGE'  } ],
                    resultElementHigh: 'DateFunctionEndDate' } 
         }
         key RefInt.CalendarDate,
             RefInt.Currency,
            @DefaultAggregation: #SUM 
            RefInt.EffectiveInterestRate

    }
```
