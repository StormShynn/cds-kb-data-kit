---
name: I_FISCALDATEFUNCTIONVALUE
description: Fiscaldatefunctionvalue
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
  - component:CA-GTF-GL-CAL
  - lob:Cross-Application Components
---
# I_FISCALDATEFUNCTIONVALUE

**Fiscaldatefunctionvalue**

| Property | Value |
|---|---|
| App Component | `CA-GTF-GL-CAL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `DateFunction` | ✓ | |  | `datefunction` |
| `FiscalYearVariant` | ✓ | |  | `datefunctionfiscalyearvariant` |
| `DateFunctionValidityDate` | ✓ | |  | `valid_for_date` |
| `DateFunctionStartDate` |  | |  | `datefunctionstartdate` |
| `DateFunctionEndDate` |  | |  | `datefunctionenddate` |
| `FiscalWeekStart` |  | |  | `fiscalweekstart` |
| `FiscalYearWeekStart` |  | |  | `fiscalyearweekstart` |
| `FiscalWeekEnd` |  | |  | `fiscalweekend` |
| `FiscalYearWeekEnd` |  | |  | `fiscalyearweekend` |
| `FiscalPeriodStart` |  | |  | `fiscalperiodstart` |
| `FiscalYearPeriodStart` |  | |  | `fiscalyearperiodstart` |
| `FiscalPeriodEnd` |  | |  | `fiscalperiodend` |
| `FiscalYearPeriodEnd` |  | |  | `fiscalyearperiodend` |
| `FiscalPeriodSingle` |  | |  | `fiscalperiodsingle` |
| `FiscalYearPeriodSingle` |  | |  | `fiscalyearperiodsingle` |
| `FiscalQuarterStart` |  | |  | `fiscalquarterstart` |
| `FiscalYearQuarterStart` |  | |  | `fiscalyearquarterstart` |
| `FiscalQuarterEnd` |  | |  | `fiscalquarterend` |
| `FiscalYearQuarterEnd` |  | |  | `fiscalyearquarterend` |
| `FiscalYearStart` |  | |  | `fiscalyearstart` |
| `FiscalYearEnd` |  | |  | `fiscalyearend` |
| `_DateFunction` | | ✓ | | |
| `_FiscalYearVariant` | | ✓ | | |
| `_ValidityDate` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DateFunction` | `I_FiscalDateFunction` | [1..1] |
| `_FiscalYearVariant` | `I_FiscalYearVariant` | [1..1] |
| `_ValidityDate` | `I_CalendarDate` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFSCLDATEFUNCVAL'
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Fiscal Date Function values'
@ObjectModel.representativeKey: 'DateFunction'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality:  #A
@ObjectModel.usageType.sizeCategory:  #S
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@VDM.viewType: #BASIC
define view I_FiscalDateFunctionValue
  as select from fiscaldatefn_val

  association [1..1] to I_FiscalDateFunction as _DateFunction      on _DateFunction.DateFunction = $projection.DateFunction
  association [1..1] to I_FiscalYearVariant  as _FiscalYearVariant on _FiscalYearVariant.FiscalYearVariant = $projection.FiscalYearVariant
  association [1..1] to I_CalendarDate       as _ValidityDate      on _ValidityDate.CalendarDate = $projection.DateFunctionValidityDate

{
//      @ObjectModel.foreignKey.association: '_Datefunction'
  key datefunction                  as DateFunction,
      @ObjectModel.foreignKey.association: '_FiscalYearVariant'
  key datefunctionfiscalyearvariant as FiscalYearVariant,
      @Semantics.businessDate.at: true
      @ObjectModel.foreignKey.association: '_ValidityDate'
  key valid_for_date                as DateFunctionValidityDate,

      datefunctionstartdate         as DateFunctionStartDate,
      datefunctionenddate           as DateFunctionEndDate,
      
      fiscalweekstart               as FiscalWeekStart,
      fiscalyearweekstart           as FiscalYearWeekStart,
      fiscalweekend                 as FiscalWeekEnd,
      fiscalyearweekend             as FiscalYearWeekEnd,
      fiscalperiodstart             as FiscalPeriodStart,
      fiscalyearperiodstart         as FiscalYearPeriodStart,
      fiscalperiodend               as FiscalPeriodEnd,
      fiscalyearperiodend           as FiscalYearPeriodEnd,
      fiscalperiodsingle            as FiscalPeriodSingle,
      fiscalyearperiodsingle        as FiscalYearPeriodSingle,
      fiscalquarterstart            as FiscalQuarterStart,
      fiscalyearquarterstart        as FiscalYearQuarterStart,
      fiscalquarterend              as FiscalQuarterEnd,
      fiscalyearquarterend          as FiscalYearQuarterEnd,
      fiscalyearstart               as FiscalYearStart,
      fiscalyearend                 as FiscalYearEnd,
                    

      _DateFunction,
      _FiscalYearVariant,
      _ValidityDate
}
```
