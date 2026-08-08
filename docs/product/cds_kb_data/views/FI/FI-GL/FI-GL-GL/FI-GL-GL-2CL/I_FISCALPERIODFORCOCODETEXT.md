---
name: I_FISCALPERIODFORCOCODETEXT
description: "Fiscalperiodforcocodetext"
app_component: FI-GL-GL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - text-view
  - text
  - component:FI-GL-GL-2CL
  - lob:Finance
---
# I_FISCALPERIODFORCOCODETEXT

**Fiscalperiodforcocodetext**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `cast( t001.bukrs as fis_bukrs preserving type )` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `FiscalYear` | ✓ | |  | `cast( finsc_period.fiscal_year as fis_gjahr_no_conv preserving type )` |  |  |
| `FiscalPeriod` | ✓ | |  | `cast( t009c.poper as fins_fiscalperiod preserving type )` |  |  |
| `FiscalYearVariant` |  | |  | `cast( t009c.periv as fis_periv preserving type )` |  |  |
| `FiscalPeriodName` |  | |  | `ltext` |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_FiscalYearVariant` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_FiscalYearForCompanyCode` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_FiscalYearVariant` | `I_FiscalYearVariant` | [0..1] |
| `_FiscalYear` | `I_FiscalYear` | [0..1] |
| `_FiscalYearForCompanyCode` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Fiscal Period for Company Code - Text'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC

@ObjectModel: { dataCategory: #TEXT, 
                usageType.serviceQuality: #B,
                usageType.sizeCategory: #S,
                usageType.dataClass: #MASTER,
                representativeKey: 'FiscalPeriod',
                supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY],
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT }
@Analytics.technicalName: 'IFIFPERDCCTXT'                    
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {dataExtraction.enabled: true}
@Search.searchable: true


define view entity I_FiscalPeriodForCoCodeText 
  as select from t009c 
  inner join finsc_period on  t009c.periv = finsc_period.fiscal_year_variant
                          and t009c.poper = finsc_period.fiscal_period 
                          and ( t009c.bdatj = finsc_period.fiscal_year or t009c.bdatj = '0000')
  inner join t001 on t009c.periv = t001.periv  

association [0..1] to I_CompanyCode              as _CompanyCode       on  $projection.CompanyCode       = _CompanyCode.CompanyCode
association [0..1] to I_FiscalYearVariant        as _FiscalYearVariant on  $projection.FiscalYearVariant = _FiscalYearVariant.FiscalYearVariant
association [0..1] to I_FiscalYear               as _FiscalYear        on  $projection.FiscalYearVariant = _FiscalYear.FiscalYearVariant
                                                                       and $projection.FiscalYear        = _FiscalYear.FiscalYear
association [0..1] to I_FiscalYearForCompanyCode as _FiscalYearForCompanyCode on  $projection.CompanyCode       = _FiscalYearForCompanyCode.CompanyCode
                                                                              and $projection.FiscalYear        = _FiscalYearForCompanyCode.FiscalYear                                                                       
association [0..1] to I_Language                 as _Language          on  $projection.Language          = _Language.Language  
                           
{

@ObjectModel.foreignKey.association: '_CompanyCode'      
key cast( t001.bukrs as fis_bukrs preserving type )                       as CompanyCode,
@Semantics.language: true
key t009c.spras                                                           as Language,
@ObjectModel.foreignKey.association: '_FiscalYearForCompanyCode'      
key cast( finsc_period.fiscal_year as fis_gjahr_no_conv preserving type ) as FiscalYear,
key cast( t009c.poper as fins_fiscalperiod preserving type )              as FiscalPeriod,

//@ObjectModel.foreignKey.association: '_FiscalYearVariant'      
cast( t009c.periv as fis_periv preserving type )                          as FiscalYearVariant,
//@Semantics.text: true
//t009c.ktext as FiscalPeriodName,

@Semantics.text: true
@Search.defaultSearchElement: true 
@Search.fuzzinessThreshold: 0.8
@Search.ranking: #HIGH
t009c.ltext                                                               as FiscalPeriodName,

_CompanyCode,
_FiscalYearVariant,
_FiscalYear,
_FiscalYearForCompanyCode,
_Language
    
}
```
