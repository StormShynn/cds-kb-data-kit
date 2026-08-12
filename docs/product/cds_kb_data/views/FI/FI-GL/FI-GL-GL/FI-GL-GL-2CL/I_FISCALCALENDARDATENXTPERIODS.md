---
name: I_FISCALCALENDARDATENXTPERIODS
description: "This CDS view provides access both to the relevant fiscal calendar details of a fiscal year and a fiscal week in a fiscal year variant and to the details of the corresponding next fiscal time frames. The most important attributes of business entities are included, such as fiscal year, fiscal quarter, fiscal period, fiscal week with the corresponding start and end date, but also the next fiscal year, the next fiscal period (together with the corresponding fiscal year), the next fiscal quarter and the next fiscal week with start and end date. This CDS view provides the prerequisites for answering the following business questions: What are the fiscal time frames of a calendar date? What is the next fiscal time frames of a calendar date?"
app_component: FI-GL-GL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FISCALCALENDARDATENXTPERIODS')/$value
semantic_en: "This CDS view provides access both to the relevant fiscal calendar details of a fiscal year and a fiscal week in a fiscal year variant and to the details of the corresponding next fiscal time frames. The most important attributes of business entities are included, such as fiscal year, fiscal quarter, fiscal period, fiscal week with the corresponding start and end date, but also the next fiscal year, the next fiscal period (together with the corresponding fiscal year), the next fiscal quarter and the next fiscal week with start and end date. This CDS view provides the prerequisites for answering the following business questions: What are the fiscal time frames of a calendar date? What is the next fiscal time frames of a calendar date?"
semantic_vi: "Next Fiscal Time Periods of Calendardate — CDS view giao diện dựa trên P_FiscalCalendarDateNxtPeriods."
keywords:
  - "next"
  - "fiscal"
  - "time"
  - "periods"
  - "calendardate"
  - "year"
  - "variant"
  - "calendar"
  - "date"
  - "start"
tags:
  - FI
  - bo:companycode
  - component:FI-GL-GL-2CL
  - FI-GL
  - FI-GL-GL
  - FI-GL-GL-2CL
  - interface-view
  - lob:finance
---
# I_FISCALCALENDARDATENXTPERIODS

**This CDS view provides access both to the relevant fiscal calendar details of a fiscal year and a fiscal week in a fiscal year variant and to the details of the corresponding next fiscal time frames. The most important attributes of business entities are included, such as fiscal year, fiscal quarter, fiscal period, fiscal week with the corresponding start and end date, but also the next fiscal year, the next fiscal period (together with the corresponding fiscal year), the next fiscal quarter and the next fiscal week with start and end date. This CDS view provides the prerequisites for answering the following business questions: What are the fiscal time frames of a calendar date? What is the next fiscal time frames of a calendar date?**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FISCALCALENDARDATENXTPERIODS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FiscalYearVariant` | ✓ | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `CalendarDate` | ✓ | |  |  | `DATS(8)` | Calendar Date |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalYearStartDate` |  | |  |  | `DATS(8)` | Start Date of Fiscal Year |
| `FiscalYearEndDate` |  | |  |  | `DATS(8)` | End Date of Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalPeriodStartDate` |  | |  |  | `DATS(8)` | Start Date of Fiscal Period |
| `FiscalPeriodEndDate` |  | |  |  | `DATS(8)` | End Date of Fiscal Period |
| `FiscalQuarter` |  | |  |  | `NUMC(1)` | Fiscal Quarter |
| `FiscalQuarterStartDate` |  | |  |  | `DATS(8)` | Start Date of Fiscal Quarter |
| `FiscalQuarterEndDate` |  | |  |  | `DATS(8)` | End Date of Fiscal Quarter |
| `FiscalWeek` |  | |  |  | `NUMC(2)` | Fiscal Week |
| `FiscalWeekStartDate` |  | |  |  | `DATS(8)` | Start Date of Fiscal Week |
| `FiscalWeekEndDate` |  | |  |  | `DATS(8)` | End Date of Fiscal Week |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year + Fiscal Period |
| `FiscalYearQuarter` |  | |  |  | `NUMC(5)` | Fiscal Year + Fiscal Quarter |
| `FiscalYearWeek` |  | |  |  | `NUMC(6)` | Fiscal Year + Fiscal Week |
| `NextFiscalYear` |  | |  | `cast( _P_FiscalYearGroup.FiscalYear as fins_next_fiscalyear_no_conv preserving type )` | `NUMC(4)` | Next Fiscal Year |
| `NextFiscalYearStartDate` |  | |  | `cast( _P_FiscalYearGroup.FiscalYearStartDate as fins_next_fyear_startdate preserving type )` | `DATS(8)` | Start Date of Next Fiscal Year |
| `NextFiscalYearEndDate` |  | |  | `cast( _P_FiscalYearGroup.FiscalYearEndDate as fins_next_fyear_enddate preserving type )` | `DATS(8)` | End Date of Next Fiscal Year |
| `NextFiscalPeriod` |  | |  | `cast( _P_FiscalYearPeriodGroup.FiscalPeriod as fins_next_fiscalperiod preserving type )` | `NUMC(3)` | Next Fiscal Period |
| `NextFiscalPeriodStartDate` |  | |  | `cast( _P_FiscalYearPeriodGroup.FiscalPeriodStartDate as fins_next_fperiod_startdate preserving type )` | `DATS(8)` | Start Date of Next Fiscal Period |
| `NextFiscalPeriodEndDate` |  | |  | `cast( _P_FiscalYearPeriodGroup.FiscalPeriodEndDate as fins_next_fperiod_enddate preserving type )` | `DATS(8)` | End Date of Next Fiscal Period |
| `NextFiscalPeriodFiscalYear` |  | |  | `cast( _P_FiscalYearPeriodGroup.FiscalYear as fins_nxt_fiscperiodfiscyear_nc preserving type )` | `NUMC(4)` | Fiscal Year of Next Fiscal Period |
| `NextFsclPeriodFsclYearStrtDate` |  | |  | `cast( _P_FiscalYearPeriodGroup.FiscalYearStartDate as fins_next_fperfyear_startdate preserving type )` | `DATS(8)` | Start Date of the Fiscal Year of the Next Fiscal Period |
| `NextFsclPeriodFsclYearEndDate` |  | |  | `cast( _P_FiscalYearPeriodGroup.FiscalYearEndDate as fins_next_fperfyear_enddate preserving type )` | `DATS(8)` | End Date of the Fiscal Year of the Next Fiscal Period |
| `NextFiscalQuarter` |  | |  | `cast( _P_FiscalYearQuarterGroup.FiscalQuarter as fins_next_fiscalquarter preserving type )` | `NUMC(1)` | Next Fiscal Quarter |
| `NextFiscalQuarterStartDate` |  | |  | `cast( _P_FiscalYearQuarterGroup.FiscalQuarterStartDate as fins_next_fquarter_startdate preserving type )` | `DATS(8)` | Start Date of Next Fiscal Quarter |
| `NextFiscalQuarterEndDate` |  | |  | `cast( _P_FiscalYearQuarterGroup.FiscalQuarterEndDate as fins_next_fquarter_enddate preserving type )` | `DATS(8)` | End Date of Next Fiscal Quarter |
| `NextFiscalWeek` |  | |  | `cast( _P_FiscalYearWeekGroup.FiscalWeek as fins_next_fiscalweek preserving type )` | `NUMC(2)` | Next Fiscal Week |
| `NextFiscalWeekStartDate` |  | |  | `cast( _P_FiscalYearWeekGroup.FiscalWeekStartDate as fins_next_fweek_startdate preserving type )` | `DATS(8)` | Start Date of Next Fiscal Week |
| `NextFiscalWeekEndDate` |  | |  | `cast( _P_FiscalYearWeekGroup.FiscalWeekEndDate as fins_next_fweek_enddate preserving type )` | `DATS(8)` | End Date of Next Fiscal Week |
| `NextFiscalYearPeriod` |  | |  | `cast( _P_FiscalYearPeriodGroup.FiscalYearPeriod as fins_next_fyearperiod preserving type )` | `NUMC(7)` | Next Fiscal Period with Fiscal Year |
| `NextFiscalYearQuarter` |  | |  | `cast( _P_FiscalYearQuarterGroup.FiscalYearQuarter as fins_next_fyearquarter preserving type )` | `NUMC(5)` | Next Fiscal Quarter with Fiscal Year |
| `NextFiscalYearWeek` |  | |  | `cast( _P_FiscalYearWeekGroup.FiscalYearWeek as fins_next_fyearweek preserving type )` | `NUMC(6)` | Next Fiscal Year + Fiscal Week |
| `FiscalYearConsecutiveNumber` |  | |  |  | `INT4(10)` | Fiscal Year (Integer) |
| `FiscalPeriodConsecutiveNumber` |  | |  |  | `INT4(10)` | Fiscal Year Period (Numbering) |
| `FiscalQuarterConsecutiveNumber` |  | |  |  | `INT4(10)` | Fiscal Year Quarter (Numbering) |
| `FiscalWeekConsecutiveNumber` |  | |  |  | `INT4(10)` | Fiscal Year Week (Numbering) |
| `NextFiscalYearConsecutiveNmbr` |  | |  |  | `INT4(10)` |  |
| `NextFsclPeriodConsecutiveNmbr` |  | |  | `cast( P_FiscalCalendarDateNxtPeriods.NextFsclPeriodConsecutiveNmbr as fins_next_fyearperiod_i preserving type )` | `INT4(10)` | Next Fiscal Year Period (Numbering) |
| `NextFsclQuarterConsecutiveNmbr` |  | |  | `cast( P_FiscalCalendarDateNxtPeriods.NextFsclQuarterConsecutiveNmbr as fins_next_fyearquarter_i preserving type )` | `INT4(10)` | Next Fiscal Year Quarter (Numbering) |
| `NextFsclWeekConsecutiveNmbr` |  | |  | `cast( P_FiscalCalendarDateNxtPeriods.NextFsclWeekConsecutiveNmbr as fins_next_fyearweek_i preserving type )` | `INT4(10)` | Next Fiscal Year Week (Numbering) |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_P_FiscalYearPeriodGroup` | `P_FiscalYearPeriodGroup` | [0..1] |
| `_P_FiscalYearQuarterGroup` | `P_FiscalYearQuarterGroup` | [0..1] |
| `_P_FiscalYearWeekGroup` | `P_FiscalYearWeekGroup` | [0..1] |
| `_P_FiscalYearGroup` | `P_FiscalYearGroup` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FISCALCALENDARDATENXTPERIODS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FISCALCALENDARDATENXTPERIODS')/$value)*

```abap
@Consumption.dbHints: ['AGGR_THRU_JOIN']
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Next Fiscal Time Periods of Calendardate'
@VDM.viewType: #COMPOSITE

@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'CalendarDate'
//@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@Analytics: { dataCategory: #DIMENSION }
@Analytics.technicalName: 'IFIFCALNXTPERDS'

@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SQL_DATA_SOURCE]
                                     
define view entity I_FiscalCalendarDateNxtPeriods as select from P_FiscalCalendarDateNxtPeriods as P_FiscalCalendarDateNxtPeriods 
                                                                                            
association[0..1] to P_FiscalYearPeriodGroup  as _P_FiscalYearPeriodGroup on   $projection.FiscalYearVariant               = _P_FiscalYearPeriodGroup.FiscalYearVariant
                                                              and  $projection.NextFsclPeriodConsecutiveNmbr   = _P_FiscalYearPeriodGroup.FiscalPeriodConsecutiveNumber
association[0..1] to P_FiscalYearQuarterGroup as _P_FiscalYearQuarterGroup on   $projection.FiscalYearVariant               = _P_FiscalYearQuarterGroup.FiscalYearVariant
                                                              and  $projection.NextFsclQuarterConsecutiveNmbr  = _P_FiscalYearQuarterGroup.FiscalQuarterConsecutiveNumber
association[0..1] to P_FiscalYearWeekGroup    as _P_FiscalYearWeekGroup on   $projection.FiscalYearVariant               = _P_FiscalYearWeekGroup.FiscalYearVariant
                                                              and  $projection.NextFsclWeekConsecutiveNmbr     = _P_FiscalYearWeekGroup.FiscalWeekConsecutiveNumber
association[0..1] to P_FiscalYearGroup        as _P_FiscalYearGroup on   $projection.FiscalYearVariant               = _P_FiscalYearGroup.FiscalYearVariant
                                                              and  $projection.NextFiscalYearConsecutiveNmbr   = _P_FiscalYearGroup.FiscalYearConsecutiveNumber
{
  
  
@ObjectModel.foreignKey.association: '_FiscalYearVariant'      
key P_FiscalCalendarDateNxtPeriods.FiscalYearVariant,
//@ObjectModel.foreignKey.association: '_CalendarDate'      
key P_FiscalCalendarDateNxtPeriods.CalendarDate,

    P_FiscalCalendarDateNxtPeriods.FiscalYear,
    P_FiscalCalendarDateNxtPeriods.FiscalYearStartDate,
    P_FiscalCalendarDateNxtPeriods.FiscalYearEndDate,
        
//@ObjectModel.text.association: '_Text'
    P_FiscalCalendarDateNxtPeriods.FiscalPeriod,
    P_FiscalCalendarDateNxtPeriods.FiscalPeriodStartDate,
    P_FiscalCalendarDateNxtPeriods.FiscalPeriodEndDate,

    P_FiscalCalendarDateNxtPeriods.FiscalQuarter,
    P_FiscalCalendarDateNxtPeriods.FiscalQuarterStartDate,
    P_FiscalCalendarDateNxtPeriods.FiscalQuarterEndDate,

    P_FiscalCalendarDateNxtPeriods.FiscalWeek,
    P_FiscalCalendarDateNxtPeriods.FiscalWeekStartDate,
    P_FiscalCalendarDateNxtPeriods.FiscalWeekEndDate,

    P_FiscalCalendarDateNxtPeriods.FiscalYearPeriod,
    P_FiscalCalendarDateNxtPeriods.FiscalYearQuarter,
    P_FiscalCalendarDateNxtPeriods.FiscalYearWeek,
    
    cast( _P_FiscalYearGroup.FiscalYear              as fins_next_fiscalyear_no_conv    preserving type )      as NextFiscalYear,
    cast( _P_FiscalYearGroup.FiscalYearStartDate     as fins_next_fyear_startdate       preserving type )      as NextFiscalYearStartDate,
    cast( _P_FiscalYearGroup.FiscalYearEndDate       as fins_next_fyear_enddate         preserving type )      as NextFiscalYearEndDate,

    cast( _P_FiscalYearPeriodGroup.FiscalPeriod            as fins_next_fiscalperiod          preserving type )      as NextFiscalPeriod,
    cast( _P_FiscalYearPeriodGroup.FiscalPeriodStartDate   as fins_next_fperiod_startdate     preserving type )      as NextFiscalPeriodStartDate,
    cast( _P_FiscalYearPeriodGroup.FiscalPeriodEndDate     as fins_next_fperiod_enddate       preserving type )      as NextFiscalPeriodEndDate,

    cast( _P_FiscalYearPeriodGroup.FiscalYear              as fins_nxt_fiscperiodfiscyear_nc  preserving type )      as NextFiscalPeriodFiscalYear,   
    cast( _P_FiscalYearPeriodGroup.FiscalYearStartDate     as fins_next_fperfyear_startdate   preserving type )      as NextFsclPeriodFsclYearStrtDate,
    cast( _P_FiscalYearPeriodGroup.FiscalYearEndDate       as fins_next_fperfyear_enddate     preserving type )      as NextFsclPeriodFsclYearEndDate,

    cast( _P_FiscalYearQuarterGroup.FiscalQuarter           as fins_next_fiscalquarter         preserving type )      as NextFiscalQuarter,
    cast( _P_FiscalYearQuarterGroup.FiscalQuarterStartDate  as fins_next_fquarter_startdate    preserving type )      as NextFiscalQuarterStartDate,
    cast( _P_FiscalYearQuarterGroup.FiscalQuarterEndDate    as fins_next_fquarter_enddate      preserving type )      as NextFiscalQuarterEndDate,

    cast( _P_FiscalYearWeekGroup.FiscalWeek              as fins_next_fiscalweek            preserving type )      as NextFiscalWeek,
    cast( _P_FiscalYearWeekGroup.FiscalWeekStartDate     as fins_next_fweek_startdate       preserving type )      as NextFiscalWeekStartDate,
    cast( _P_FiscalYearWeekGroup.FiscalWeekEndDate       as fins_next_fweek_enddate         preserving type )      as NextFiscalWeekEndDate,

    cast( _P_FiscalYearPeriodGroup.FiscalYearPeriod        as fins_next_fyearperiod           preserving type )      as NextFiscalYearPeriod,
    cast( _P_FiscalYearQuarterGroup.FiscalYearQuarter       as fins_next_fyearquarter          preserving type )      as NextFiscalYearQuarter,
    cast( _P_FiscalYearWeekGroup.FiscalYearWeek          as fins_next_fyearweek             preserving type )      as NextFiscalYearWeek,

    P_FiscalCalendarDateNxtPeriods.FiscalYearConsecutiveNumber,
    P_FiscalCalendarDateNxtPeriods.FiscalPeriodConsecutiveNumber,
    P_FiscalCalendarDateNxtPeriods.FiscalQuarterConsecutiveNumber,
    P_FiscalCalendarDateNxtPeriods.FiscalWeekConsecutiveNumber,
      
    P_FiscalCalendarDateNxtPeriods.NextFiscalYearConsecutiveNmbr as NextFiscalYearConsecutiveNmbr,
    cast( P_FiscalCalendarDateNxtPeriods.NextFsclPeriodConsecutiveNmbr as fins_next_fyearperiod_i    preserving type )      as NextFsclPeriodConsecutiveNmbr,
    cast( P_FiscalCalendarDateNxtPeriods.NextFsclQuarterConsecutiveNmbr as fins_next_fyearquarter_i  preserving type )      as NextFsclQuarterConsecutiveNmbr,
    cast( P_FiscalCalendarDateNxtPeriods.NextFsclWeekConsecutiveNmbr as fins_next_fyearweek_i        preserving type )      as NextFsclWeekConsecutiveNmbr,

    P_FiscalCalendarDateNxtPeriods._FiscalYearVariant,
    P_FiscalCalendarDateNxtPeriods._CalendarDate,
    P_FiscalCalendarDateNxtPeriods._Text     
    
}
```
