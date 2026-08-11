---
name: C_MKTDATABASISSPREADQRY
description: "This CDS view provides the prerequisites for answering the following business question: What is a basis spread value for a specific quotation type in basis points at a specific point in time?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MKTDATABASISSPREADQRY')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business question: What is a basis spread value for a specific quotation type in basis points at a specific point in time?"
semantic_vi: "Market Data Basis Spread - Query — CDS view tiêu dùng dựa trên I_MktDataBasisSpreadCube."
keywords:
  - "market"
  - "data"
  - "basis"
  - "spread"
  - "query"
  - "quotation"
  - "type"
  - "calendar"
  - "date"
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
  - quotation
---
# C_MKTDATABASISSPREADQRY

**This CDS view provides the prerequisites for answering the following business question: What is a basis spread value for a specific quotation type in basis points at a specific point in time?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MKTDATABASISSPREADQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SpreadQuotationType` | ✓ | |  |  | `NUMC(1)` | Quotation Type |
| `MktDataBasisSpreadID` | ✓ | |  |  | `CHAR(15)` | Basis Spread ID |
| `CalendarDate` | ✓ | |  |  | `DATS(8)` | Calendar Date |
| `MktDataBasisSpreadValue` |  | |  |  | `DEC(17)` | Basis Spread Value in Basis Points |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MKTDATABASISSPREADQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MKTDATABASISSPREADQRY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CBASSPRQUERY'
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
@EndUserText.label: 'Market Data Basis Spread - Query'

define view C_MktDataBasisSpreadQry

        as select from   I_MktDataBasisSpreadCube
                
    {   
         @Consumption.filter : { selectionType : #SINGLE, multipleSelections : false, mandatory: true } 
         @Consumption.defaultValue: '1'  
         key SpreadQuotationType,
         @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true, mandatory: true }  
         key MktDataBasisSpreadID,
  
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
         
             @DefaultAggregation: #SUM 
             MktDataBasisSpreadValue
             
    }
```
