---
name: C_GREGORIANCALDATEFUNCVH
description: "Gregoriancaldatefuncvh"
app_component: CA-GTF-DF
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-DF
  - consumption-view
  - value-help
  - component:CA-GTF-DF
  - lob:Cross-Application Components
---
# C_GREGORIANCALDATEFUNCVH

**Gregoriancaldatefuncvh**

| Property | Value |
|---|---|
| App Component | `CA-GTF-DF` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DateFunction` | ✓ | |  |  |  |  |
| `DateFunctionStartDate` |  | |  |  |  |  |
| `DateFunctionEndDate` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CGCALDFVH'
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Value Help for Gregorian Calendar Date Functions'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality:  #C
@ObjectModel.usageType.sizeCategory:  #S
@ObjectModel.dataCategory: #VALUE_HELP
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #CONSUMPTION 
@Search.searchable: true
@Consumption.ranked: true

define view C_GregorianCalDateFuncVH as select from I_DateFunctionValue {
    @Search.defaultSearchElement : true
    @Search.fuzzinessThreshold: 0.8
    @Search.ranking: #HIGH 
    @ObjectModel.text.element: ['DateFunctionName']
    key DateFunction, 
    @Search.defaultSearchElement : true
    @Search.fuzzinessThreshold: 0.8
    @Search.ranking: #LOW 
    _Datefunction._DateFunctionText[1: Language = $session.system_language].DateFunctionName,
    @Search.defaultSearchElement : true
    @Search.fuzzinessThreshold: 0.8
    @Search.ranking: #LOW 
    _Datefunction._DateFunctionText[1: Language = $session.system_language].DateFunctionDescription,
    DateFunctionStartDate, 
    DateFunctionEndDate
}
where
      DateFunctionValidityDate = $session.system_date
```
