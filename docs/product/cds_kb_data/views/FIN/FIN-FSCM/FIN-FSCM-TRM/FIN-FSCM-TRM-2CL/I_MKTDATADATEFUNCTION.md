---
name: I_MKTDATADATEFUNCTION
description: "This CDS view supplies dates and detail data for date functions, such as PREVIOUS30DAYS and YEARTODATE. The date function compares to the current system date. Relative dates are an alternative way to assign a value to a date parameter in a CDS view. A relative date is an expression referring to a calendar date that is related to a reference date, typically derived from the time of execution. A relative date can be seen as function applied to a reference date, therefore it is also called a functional date or date function. This CDS view provides the prerequisites for answering the following business questions: What is the start date of the date function? What is the end date of the date function?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MKTDATADATEFUNCTION')/$value
semantic_en: "This CDS view supplies dates and detail data for date functions, such as PREVIOUS30DAYS and YEARTODATE. The date function compares to the current system date. Relative dates are an alternative way to assign a value to a date parameter in a CDS view. A relative date is an expression referring to a calendar date that is related to a reference date, typically derived from the time of execution. A relative date can be seen as function applied to a reference date, therefore it is also called a functional date or date function. This CDS view provides the prerequisites for answering the following business questions: What is the start date of the date function? What is the end date of the date function?"
semantic_vi: "Market Data Reporting Date Function — CDS view giao diện dựa trên I_DateFunctionValue."
keywords:
  - "market"
  - "data"
  - "reporting"
  - "date"
  - "function"
  - "granularity"
  - "type"
  - "start"
tags:
  - FIN
  - bo:plant
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
  - bo:purchaseorder
---
# I_MKTDATADATEFUNCTION

**This CDS view supplies dates and detail data for date functions, such as PREVIOUS30DAYS and YEARTODATE. The date function compares to the current system date. Relative dates are an alternative way to assign a value to a date parameter in a CDS view. A relative date is an expression referring to a calendar date that is related to a reference date, typically derived from the time of execution. A relative date can be seen as function applied to a reference date, therefore it is also called a functional date or date function. This CDS view provides the prerequisites for answering the following business questions: What is the start date of the date function? What is the end date of the date function?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MKTDATADATEFUNCTION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DateFunction` | ✓ | |  |  | `CHAR(32)` | Relative Date Function ID |
| `DateFunctionGranularity` |  | | `_Datefunction` | `DateFunctionGranularity` | `NUMC(2)` | Date Function Granularity |
| `DateFunctionType` |  | | `_Datefunction` | `DateFunctionType` | `NUMC(2)` | Date Function Type |
| `DateFunctionStartDate` |  | |  |  | `DATS(8)` | Date Function Start Date |
| `DateFunctionEndDate` |  | |  |  | `DATS(8)` | Date Function End Date |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MKTDATADATEFUNCTION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MKTDATADATEFUNCTION')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IMDDATEFUNC'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality:  #C
@ObjectModel.usageType.sizeCategory:  #S
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #COMPOSITE
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.preserveKey:true
@EndUserText.label: 'Market Data Reporting Date Function'

define view I_MktDataDateFunction with parameters

P_DateFunction  : datefunctionid,

@Consumption.hidden : true
@Environment.systemField : #SYSTEM_LANGUAGE
P_Language : sylangu

 as select from I_DateFunctionValue as DateFucntionValue

 {
 key DateFunction,
 _Datefunction._DateFunctionText[1: Language = $session.system_language].DateFunctionName,
 _Datefunction._DateFunctionText[1: Language = $session.system_language].DateFunctionDescription,
 _Datefunction.DateFunctionGranularity,
 _Datefunction.DateFunctionType,
 DateFunctionStartDate,
 DateFunctionEndDate
 }
 where
 DateFunction = $parameters.P_DateFunction and
 DateFunctionValidityDate = $session.system_date
```
