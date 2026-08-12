---
name: C_MKTDATAIMPVOLATILITYQRY
description: "This CDS view provides the prerequisites for answering the following business question: What is the implied volatility value for a specific volatility type and over a specified period of time?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MKTDATAIMPVOLATILITYQRY')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business question: What is the implied volatility value for a specific volatility type and over a specified period of time?"
semantic_vi: "Implied Volatility - Query — CDS view tiêu dùng dựa trên I_MktDataImpliedVolatilityCube."
keywords:
  - "implied"
  - "volatility"
  - "query"
  - "name"
  - "profile"
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
---
# C_MKTDATAIMPVOLATILITYQRY

**This CDS view provides the prerequisites for answering the following business question: What is the implied volatility value for a specific volatility type and over a specified period of time?**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MKTDATAIMPVOLATILITYQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ImpliedVolatilityName` | ✓ | |  |  | `CHAR(15)` | Volatility Name |
| `VolatilityProfile` | ✓ | |  |  | `CHAR(15)` | Volatility Pofile |
| `VolatilityType` | ✓ | |  |  | `CHAR(3)` | Volatility Type |
| `CalendarDate` | ✓ | |  |  | `DATS(8)` | Calendar Date |
| `ImpliedVolatilityValue` |  | |  |  | `DEC(11)` | Implied Volatility Value |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MKTDATAIMPVOLATILITYQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MKTDATAIMPVOLATILITYQRY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CIMPVOLAQRY'
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
@EndUserText.label: 'Implied Volatility - Query'
@OData.publish: true

define view C_MktDataImpVolatilityQry
  as select from I_MktDataImpliedVolatilityCube

{

      //key VolatilityType,
//      @API.element.releaseState: #DEPRECATED
//      @API.element.successor: 'ImpliedVolatilityIdentifier'
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true, mandatory: true }
  key ImpliedVolatilityName,
  
//      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true, mandatory: true }
//  key ImpliedVolatilityIdentifier,

      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true, mandatory: true }
  key VolatilityProfile,

      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true, mandatory: true }
      @Consumption.defaultValue: '002'
  key VolatilityType,

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

      @DefaultAggregation: #SUM
      ImpliedVolatilityValue
}
```
