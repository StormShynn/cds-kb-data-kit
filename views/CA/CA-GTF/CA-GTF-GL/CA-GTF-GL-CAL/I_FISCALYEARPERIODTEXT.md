---
name: I_FISCALYEARPERIODTEXT
description: Fiscalyearperiodtext
app_component: CA-GTF-GL-CAL
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-GL
  - interface-view
  - text-view
  - text
  - component:CA-GTF-GL-CAL
  - lob:Cross-Application Components
---
# I_FISCALYEARPERIODTEXT

**Fiscalyearperiodtext**

| Property | Value |
|---|---|
| App Component | `CA-GTF-GL-CAL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `t009c.spras` |
| key `FiscalYearVariant` | `cast( t009c.periv as fis_periv preserving type )` |
| key `FiscalYear` | `cast( finsc_period.fiscal_year as fis_gjahr_no_conv preserving type )` |
| key `FiscalPeriod` | `cast( t009c.poper as fins_fiscalperiod preserving type )` |
| `FiscalPeriodName` | `t009c.ltext` |
| `_FiscalYearVariant` | *Association* |
| `_FiscalYear` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FiscalYearVariant` | `I_FiscalYearVariant` | [0..1] |
| `_FiscalYear` | `I_FiscalYear` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Fiscal Year Period Text'
@VDM.viewType: #BASIC

@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IFIFYPERTXT' 
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #MASTER

@ObjectModel.representativeKey: 'FiscalPeriod'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {dataExtraction.enabled: true}
@Search.searchable: true

@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY]

define view entity I_FiscalYearPeriodText as select from t009c inner join finsc_period on  t009c.periv = finsc_period.fiscal_year_variant
                                                                                and t009c.poper = finsc_period.fiscal_period 
                                                                                and (    t009c.bdatj = finsc_period.fiscal_year 
                                                                                      or t009c.bdatj = '0000')

association [0..1] to I_FiscalYearVariant as _FiscalYearVariant on $projection.FiscalYearVariant = _FiscalYearVariant.FiscalYearVariant
association [0..1] to I_FiscalYear        as _FiscalYear        on $projection.FiscalYearVariant = _FiscalYear.FiscalYearVariant
                                                                and $projection.FiscalYear       = _FiscalYear.FiscalYear
association [0..1] to I_Language          as _Language          on $projection.Language          = _Language.Language

{ 

@Semantics.language: true
key t009c.spras as Language,
@ObjectModel.foreignKey.association: '_FiscalYearVariant'      
key cast( t009c.periv as fis_periv preserving type )                      as FiscalYearVariant,
@ObjectModel.foreignKey.association: '_FiscalYear'      
key cast( finsc_period.fiscal_year as fis_gjahr_no_conv preserving type ) as FiscalYear,
key cast( t009c.poper as fins_fiscalperiod preserving type )              as FiscalPeriod,

//@Semantics.text: true
//t009c.ktext as FiscalPeriodName,

@Semantics.text: true
@Search.defaultSearchElement: true 
@Search.ranking: #HIGH
@Search.fuzzinessThreshold: 0.8
t009c.ltext as FiscalPeriodName,

_FiscalYearVariant,
_FiscalYear,
_Language

}
```
