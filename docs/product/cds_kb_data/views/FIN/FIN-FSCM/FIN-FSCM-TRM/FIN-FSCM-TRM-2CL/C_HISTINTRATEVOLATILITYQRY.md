---
name: C_HISTINTRATEVOLATILITYQRY
description: "This CDS view provides the prerequisites for answering the following business question: What is the historical volatility value of an interest rate for a specific volatility type and over a specified period of time?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_HISTINTRATEVOLATILITYQRY')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business question: What is the historical volatility value of an interest rate for a specific volatility type and over a specified period of time?"
semantic_vi: "Historic Int Rate Volatility - Query — CDS view tiêu dùng dựa trên I_InterestRateVolatilityCube."
keywords:
  - "historic"
  - "int"
  - "rate"
  - "volatility"
  - "query"
  - "type"
  - "reference"
  - "interest"
  - "calendar"
  - "date"
  - "term"
  - "days"
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
# C_HISTINTRATEVOLATILITYQRY

**This CDS view provides the prerequisites for answering the following business question: What is the historical volatility value of an interest rate for a specific volatility type and over a specified period of time?**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_HISTINTRATEVOLATILITYQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `VolatilityType` | ✓ | |  |  | `CHAR(3)` | Volatility Type |
| `ReferenceInterestRate` | ✓ | |  |  | `CHAR(10)` | Reference Interest Rate |
| `CalendarDate` | ✓ | |  |  | `DATS(8)` | Calendar Date |
| `VolatilityTermInDays` | ✓ | |  |  | `INT4(10)` |  |
| `InterestRateVolatilityValue` |  | |  |  | `DEC(11)` | Interest Rate Volatility |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_HISTINTRATEVOLATILITYQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_HISTINTRATEVOLATILITYQRY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CHISINTRTVOLAQRY'
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
@EndUserText.label: 'Historic Int Rate Volatility - Query'
@OData.publish: true
define view C_HistIntRateVolatilityQry
  as select from I_InterestRateVolatilityCube
{
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true, mandatory: true }
  key VolatilityType,
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true, mandatory: true }
  key ReferenceInterestRate,
      @Consumption: {
                filter:     {selectionType: #INTERVAL, mandatory: true},
                derivation: {
                    lookupEntity: 'I_SglGregorianCalDateFunction',
                    resultElement: 'DateFunctionStartDate', binding: [
                        { targetParameter: 'P_DateFunction', type: #CONSTANT, value : 'PREVIOUSYEARTODATE' } ],
//                        { targetParameter : 'P_Language' , type : #SYSTEM_FIELD, value : '#SYSTEM_LANGUAGE'  } ],
                    resultElementHigh: 'DateFunctionEndDate' }
         }
  key CalendarDate,
  key VolatilityTermInDays,
      @DefaultAggregation: #SUM
      InterestRateVolatilityValue


}
```
