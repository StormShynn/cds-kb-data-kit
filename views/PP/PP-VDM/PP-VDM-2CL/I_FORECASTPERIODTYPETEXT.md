---
name: I_FORECASTPERIODTYPETEXT
description: Forecastperiodtypetext
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - text-view
  - text
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_FORECASTPERIODTYPETEXT

**Forecastperiodtypetext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `cast(t.ddlanguage as spras preserving type)` |
| key `ForecastPeriodType` | `cast(substring(t.domvalue_l, 1, 1) as periotype preserving type)` |
| `DomainValue` | `t.domvalue_l` |
| `ForecastPeriodTypeName` | `t.ddtext` |
| `_Language` | *Association* |
| `_ForecastPeriodType` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IFCSTPERTYPETXT'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'ForecastPeriodType'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #META}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Forecast Period Type - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_ForecastPeriodTypeText
  as select from dd07t as t
  association to parent I_ForecastPeriodType as _ForecastPeriodType on $projection.ForecastPeriodType = _ForecastPeriodType.ForecastPeriodType  
  association [0..1] to I_Language           as _Language           on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'      
      @Semantics.language: true
  key cast(t.ddlanguage as spras preserving type)                      as Language,
      @ObjectModel.foreignKey.association: '_ForecastPeriodType'  
      @ObjectModel.text.element: ['ForecastPeriodTypename']
  key cast(substring(t.domvalue_l, 1, 1) as periotype preserving type) as ForecastPeriodType,
      @Analytics.hidden: true
      @Consumption.hidden: true
      t.domvalue_l                                                     as DomainValue,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      t.ddtext                                                         as ForecastPeriodTypeName,
    
      // Associations
      _ForecastPeriodType,
      _Language
}
  where t.domname = 'PERIOTYPE'
    and t.as4local = 'A'
    and t.as4vers  = '0000';
```
