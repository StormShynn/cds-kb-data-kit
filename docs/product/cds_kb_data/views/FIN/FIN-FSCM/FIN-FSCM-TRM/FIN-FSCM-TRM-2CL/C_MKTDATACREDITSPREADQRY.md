---
name: C_MKTDATACREDITSPREADQRY
description: "This CDS view provides the prerequisites for answering the following business question: What is the credit spread value for a specific quotation type and over a specific period of time?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MKTDATACREDITSPREADQRY')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business question: What is the credit spread value for a specific quotation type and over a specific period of time?"
semantic_vi: "Market Data Credit Spread - Query — CDS view tiêu dùng dựa trên I_MktDataCreditSpreadCube."
keywords:
  - "market"
  - "data"
  - "credit"
  - "spread"
  - "query"
  - "treasury"
  - "reference"
  - "entity"
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
# C_MKTDATACREDITSPREADQRY

**This CDS view provides the prerequisites for answering the following business question: What is the credit spread value for a specific quotation type and over a specific period of time?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MKTDATACREDITSPREADQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TreasuryReferenceEntity` | ✓ | |  |  | `CHAR(15)` | Reference Entity |
| `CreditSpreadID` | ✓ | |  |  | `CHAR(15)` | Credit Spread ID |
| `SpreadQuotationType` | ✓ | |  |  | `NUMC(1)` | Quotation Type |
| `CalendarDate` | ✓ | |  |  | `DATS(8)` | Calendar Date |
| `CreditSpreadValue` |  | |  |  | `DEC(17)` | Credit Spread Value in Basis Points |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MKTDATACREDITSPREADQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MKTDATACREDITSPREADQRY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CCRESPRQUERY'
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
@EndUserText.label: 'Market Data Credit Spread - Query'
@OData.publish: true
define view C_MktDataCreditSpreadQry
  as select from I_MktDataCreditSpreadCube
{

      //@EndUserText.label: 'Reference Entity'
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true, mandatory: true }
  key TreasuryReferenceEntity,


      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true, mandatory: true }
  key CreditSpreadID,

      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : false, mandatory: true }
      @Consumption.defaultValue: '1'
  key SpreadQuotationType,

      @Consumption: {
           filter:     {selectionType: #INTERVAL, mandatory: true},
           derivation: {
               lookupEntity: 'I_MktDataDateFunction',
               resultElement: 'DateFunctionStartDate', binding: [
                   { targetParameter: 'P_DateFunction', type: #CONSTANT, value : 'PREVIOUSYEARTODATE' },
                   { targetParameter : 'P_Language' , type : #SYSTEM_FIELD, value : '#SYSTEM_LANGUAGE'  } ],
               resultElementHigh: 'DateFunctionEndDate' }
       }

  key CalendarDate,
      //key CalendarDate
      @DefaultAggregation: #SUM
      CreditSpreadValue
}
```
