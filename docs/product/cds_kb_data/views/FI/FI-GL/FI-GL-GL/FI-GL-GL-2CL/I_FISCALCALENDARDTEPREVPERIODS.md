---
name: I_FISCALCALENDARDTEPREVPERIODS
description: "This CDS view provides access both to the relevant fiscal calendar details of a fiscal year and a fiscal week in a fiscal year variant and to the details of the corresponding previous fiscal time frames. The most important attributes of business entities are included, such as fiscal year, fiscal quarter, fiscal period, fiscal week with the corresponding start and end date, but also the previous fiscal year, the previous fiscal period (together with the corresponding fiscal year), the previous fiscal quarter and the previous fiscal week with start and end date. This CDS view provides the prerequisites for answering the following business questions: What are the fiscal time frames of a calendar date? What is the previous fiscal time frames of a calendar date?"
app_component: FI-GL-GL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FISCALCALENDARDTEPREVPERIODS')/$value
semantic_en: "This CDS view provides access both to the relevant fiscal calendar details of a fiscal year and a fiscal week in a fiscal year variant and to the details of the corresponding previous fiscal time frames. The most important attributes of business entities are included, such as fiscal year, fiscal quarter, fiscal period, fiscal week with the corresponding start and end date, but also the previous fiscal year, the previous fiscal period (together with the corresponding fiscal year), the previous fiscal quarter and the previous fiscal week with start and end date. This CDS view provides the prerequisites for answering the following business questions: What are the fiscal time frames of a calendar date? What is the previous fiscal time frames of a calendar date?"
semantic_vi: "Previous Fiscal Time Periods of Caldate — CDS view giao diện dựa trên P_FiscalCalendarDtePrevPeriods."
keywords:
  - "previous"
  - "fiscal"
  - "time"
  - "periods"
  - "caldate"
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
# I_FISCALCALENDARDTEPREVPERIODS

**This CDS view provides access both to the relevant fiscal calendar details of a fiscal year and a fiscal week in a fiscal year variant and to the details of the corresponding previous fiscal time frames. The most important attributes of business entities are included, such as fiscal year, fiscal quarter, fiscal period, fiscal week with the corresponding start and end date, but also the previous fiscal year, the previous fiscal period (together with the corresponding fiscal year), the previous fiscal quarter and the previous fiscal week with start and end date. This CDS view provides the prerequisites for answering the following business questions: What are the fiscal time frames of a calendar date? What is the previous fiscal time frames of a calendar date?**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FISCALCALENDARDTEPREVPERIODS')/$value) |

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
| `PreviousFiscalPeriod` |  | |  | `cast( _P_FiscalYearPeriodGroup.FiscalPeriod as fins_prev_fiscalperiod preserving type )` | `NUMC(3)` | Previous Fiscal Period |
| `PreviousFiscalPeriodStartDate` |  | |  | `cast( _P_FiscalYearPeriodGroup.FiscalPeriodStartDate as fins_prev_fperiod_startdate preserving type )` | `DATS(8)` | Start Date of Previous Fiscal Period |
| `PreviousFiscalPeriodEndDate` |  | |  | `cast( _P_FiscalYearPeriodGroup.FiscalPeriodEndDate as fins_prev_fperiod_enddate preserving type )` | `DATS(8)` | End Date of Previous Fiscal Period |
| `PreviousFiscalYear` |  | |  | `cast( _P_FiscalYearGroup.FiscalYear as fins_prev_fiscalyear_no_conv preserving type )` | `NUMC(4)` | Previous Fiscal Year |
| `PreviousFiscalYearStartDate` |  | |  | `cast( _P_FiscalYearGroup.FiscalYearStartDate as fins_prev_fyear_startdate preserving type )` | `DATS(8)` | Start Date of Previous Fiscal Year |
| `PreviousFiscalYearEndDate` |  | |  | `cast( _P_FiscalYearGroup.FiscalYearEndDate as fins_prev_fyear_enddate preserving type )` | `DATS(8)` | End Date of Previous Fiscal Year |
| `PreviousFiscalPeriodFiscalYear` |  | |  | `cast( _P_FiscalYearPeriodGroup.FiscalYear as fins_prv_fiscperiodfiscyear_nc preserving type )` | `NUMC(4)` | Fiscal Year of Previous Fiscal Period |
| `PrevFsclPeriodFsclYearStrtDate` |  | |  | `cast( _P_FiscalYearPeriodGroup.FiscalYearStartDate as fins_prev_fperfyear_startdate preserving type )` | `DATS(8)` | Start Date of the Fiscal Year of the Previous Fiscal Period |
| `PrevFsclPeriodFsclYearEndDate` |  | |  | `cast( _P_FiscalYearPeriodGroup.FiscalYearEndDate as fins_prev_fperfyear_enddate preserving type )` | `DATS(8)` | End Date of the Fiscal Year of the Previous Fiscal Period |
| `PreviousFiscalQuarter` |  | |  | `cast( _P_FiscalYearQuarterGroup.FiscalQuarter as fins_prev_fiscalquarter preserving type )` | `NUMC(1)` | Previous Fiscal Quarter |
| `PreviousFiscalQuarterStartDate` |  | |  | `cast( _P_FiscalYearQuarterGroup.FiscalQuarterStartDate as fins_prev_fquarter_startdate preserving type )` | `DATS(8)` | Start Date of Previous Fiscal Quarter |
| `PreviousFiscalQuarterEndDate` |  | |  | `cast( _P_FiscalYearQuarterGroup.FiscalQuarterEndDate as fins_prev_fquarter_enddate preserving type )` | `DATS(8)` | End Date of Previous Fiscal Quarter |
| `PreviousFiscalWeek` |  | |  | `cast( _P_FiscalYearWeekGroup.FiscalWeek as fins_prev_fiscalweek preserving type )` | `NUMC(2)` | Previous Fiscal Week |
| `PreviousFiscalWeekStartDate` |  | |  | `cast( _P_FiscalYearWeekGroup.FiscalWeekStartDate as fins_prev_fweek_startdate preserving type )` | `DATS(8)` | Start Date of Previous Fiscal Week |
| `PreviousFiscalWeekEndDate` |  | |  | `cast( _P_FiscalYearWeekGroup.FiscalWeekEndDate as fins_prev_fweek_enddate preserving type )` | `DATS(8)` | End Date of Previous Fiscal Week |
| `PreviousFiscalYearPeriod` |  | |  | `cast( _P_FiscalYearPeriodGroup.FiscalYearPeriod as fins_prev_fyearperiod preserving type )` | `NUMC(7)` | Previous Fiscal Period with Fiscal Year |
| `PreviousFiscalYearQuarter` |  | |  | `cast( _P_FiscalYearQuarterGroup.FiscalYearQuarter as fins_prev_fyearquarter preserving type )` | `NUMC(5)` | Previous Fiscal Quarter with Fiscal Year |
| `PreviousFiscalYearWeek` |  | |  | `cast( _P_FiscalYearWeekGroup.FiscalYearWeek as fins_prev_fyearweek preserving type )` | `NUMC(6)` | Previous Fiscal Year + Fiscal Week |
| `FiscalYearConsecutiveNumber` |  | |  |  | `INT4(10)` | Fiscal Year (Integer) |
| `FiscalPeriodConsecutiveNumber` |  | |  |  | `INT4(10)` | Fiscal Year Period (Numbering) |
| `FiscalQuarterConsecutiveNumber` |  | |  |  | `INT4(10)` | Fiscal Year Quarter (Numbering) |
| `FiscalWeekConsecutiveNumber` |  | |  |  | `INT4(10)` | Fiscal Year Week (Numbering) |
| `PrevFiscalYearConsecutiveNmbr` |  | |  |  | `INT4(10)` |  |
| `PrevFsclPeriodConsecutiveNmbr` |  | |  | `cast( P_FiscalCalendarDtePrevPeriods.PrevFsclPeriodConsecutiveNmbr as fins_prev_fyearperiod_i preserving type )` | `INT4(10)` | Previous Fiscal Year Period (Numbering) |
| `PrevFsclQuarterConsecutiveNmbr` |  | |  | `cast( P_FiscalCalendarDtePrevPeriods.PrevFsclQuarterConsecutiveNmbr as fins_prev_fyearquarter_i preserving type )` | `INT4(10)` | Previous Fiscal Year Quarter (Numbering) |
| `PrevFsclWeekConsecutiveNmbr` |  | |  | `cast( P_FiscalCalendarDtePrevPeriods.PrevFsclWeekConsecutiveNmbr as fins_prev_fyearweek_i preserving type )` | `INT4(10)` | Previous Fiscal Year Week (Numbering) |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_P_FiscalYearPeriodGroup` | `P_FiscalYearPeriodGroup` | [0..1] |
| `_P_FiscalYearQuarterGroup` | `P_FiscalYearQuarterGroup` | [0..1] |
| `_P_FiscalYearWeekGroup` | `P_FiscalYearWeekGroup` | [0..1] |
| `_P_FiscalYearGroup` | `P_FiscalYearGroup` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FISCALCALENDARDTEPREVPERIODS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FISCALCALENDARDTEPREVPERIODS')/$value)*

```abap
@Consumption.dbHints: ['AGGR_THRU_JOIN']
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Previous Fiscal Time Periods of Caldate'
@VDM.viewType: #COMPOSITE

@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'CalendarDate'
//@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@Analytics: { dataCategory: #DIMENSION }
@Analytics.technicalName: 'IFIFCALPREVPERDS'

@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SQL_DATA_SOURCE]
                                     
// The corresponding structure FISS_FCALPREVPERDS has also to be adapted 
// if there are changes in the fields of this DDL view                                    
                                     
define view entity I_FiscalCalendarDtePrevPeriods as select from P_FiscalCalendarDtePrevPeriods as P_FiscalCalendarDtePrevPeriods
                                                                                            
association[0..1] to P_FiscalYearPeriodGroup  as _P_FiscalYearPeriodGroup on   $projection.FiscalYearVariant               = _P_FiscalYearPeriodGroup.FiscalYearVariant
                                                              and  $projection.PrevFsclPeriodConsecutiveNmbr   = _P_FiscalYearPeriodGroup.FiscalPeriodConsecutiveNumber
association[0..1] to P_FiscalYearQuarterGroup as _P_FiscalYearQuarterGroup on   $projection.FiscalYearVariant               = _P_FiscalYearQuarterGroup.FiscalYearVariant
                                                              and  $projection.PrevFsclQuarterConsecutiveNmbr  = _P_FiscalYearQuarterGroup.FiscalQuarterConsecutiveNumber
association[0..1] to P_FiscalYearWeekGroup    as _P_FiscalYearWeekGroup on   $projection.FiscalYearVariant               = _P_FiscalYearWeekGroup.FiscalYearVariant
                                                              and  $projection.PrevFsclWeekConsecutiveNmbr     = _P_FiscalYearWeekGroup.FiscalWeekConsecutiveNumber
association[0..1] to P_FiscalYearGroup        as _P_FiscalYearGroup on   $projection.FiscalYearVariant               = _P_FiscalYearGroup.FiscalYearVariant
                                                              and  $projection.PrevFiscalYearConsecutiveNmbr   = _P_FiscalYearGroup.FiscalYearConsecutiveNumber
{
  
  
@ObjectModel.foreignKey.association: '_FiscalYearVariant'      
key P_FiscalCalendarDtePrevPeriods.FiscalYearVariant,
//@ObjectModel.foreignKey.association: '_CalendarDate'      
key P_FiscalCalendarDtePrevPeriods.CalendarDate,

    P_FiscalCalendarDtePrevPeriods.FiscalYear,
    P_FiscalCalendarDtePrevPeriods.FiscalYearStartDate,
    P_FiscalCalendarDtePrevPeriods.FiscalYearEndDate,
        
//@ObjectModel.text.association: '_Text'
    P_FiscalCalendarDtePrevPeriods.FiscalPeriod,
    P_FiscalCalendarDtePrevPeriods.FiscalPeriodStartDate,
    P_FiscalCalendarDtePrevPeriods.FiscalPeriodEndDate,

    P_FiscalCalendarDtePrevPeriods.FiscalQuarter,
    P_FiscalCalendarDtePrevPeriods.FiscalQuarterStartDate,
    P_FiscalCalendarDtePrevPeriods.FiscalQuarterEndDate,

    P_FiscalCalendarDtePrevPeriods.FiscalWeek,
    P_FiscalCalendarDtePrevPeriods.FiscalWeekStartDate,
    P_FiscalCalendarDtePrevPeriods.FiscalWeekEndDate,

    P_FiscalCalendarDtePrevPeriods.FiscalYearPeriod,
    P_FiscalCalendarDtePrevPeriods.FiscalYearQuarter,
    P_FiscalCalendarDtePrevPeriods.FiscalYearWeek,
    
    cast( _P_FiscalYearPeriodGroup.FiscalPeriod              as fins_prev_fiscalperiod        preserving type ) as PreviousFiscalPeriod,
    cast( _P_FiscalYearPeriodGroup.FiscalPeriodStartDate     as fins_prev_fperiod_startdate   preserving type ) as PreviousFiscalPeriodStartDate,
    cast( _P_FiscalYearPeriodGroup.FiscalPeriodEndDate       as fins_prev_fperiod_enddate     preserving type ) as PreviousFiscalPeriodEndDate,

    cast( _P_FiscalYearGroup.FiscalYear                as fins_prev_fiscalyear_no_conv  preserving type ) as PreviousFiscalYear,
    cast( _P_FiscalYearGroup.FiscalYearStartDate       as fins_prev_fyear_startdate     preserving type ) as PreviousFiscalYearStartDate,
    cast( _P_FiscalYearGroup.FiscalYearEndDate         as fins_prev_fyear_enddate       preserving type ) as PreviousFiscalYearEndDate,

    cast( _P_FiscalYearPeriodGroup.FiscalYear               as fins_prv_fiscperiodfiscyear_nc preserving type ) as PreviousFiscalPeriodFiscalYear,   
    cast( _P_FiscalYearPeriodGroup.FiscalYearStartDate       as fins_prev_fperfyear_startdate preserving type ) as PrevFsclPeriodFsclYearStrtDate,
    cast( _P_FiscalYearPeriodGroup.FiscalYearEndDate         as fins_prev_fperfyear_enddate   preserving type ) as PrevFsclPeriodFsclYearEndDate,

    cast( _P_FiscalYearQuarterGroup.FiscalQuarter             as fins_prev_fiscalquarter       preserving type ) as PreviousFiscalQuarter,
    cast( _P_FiscalYearQuarterGroup.FiscalQuarterStartDate    as fins_prev_fquarter_startdate  preserving type ) as PreviousFiscalQuarterStartDate,
    cast( _P_FiscalYearQuarterGroup.FiscalQuarterEndDate      as fins_prev_fquarter_enddate    preserving type ) as PreviousFiscalQuarterEndDate,

    cast( _P_FiscalYearWeekGroup.FiscalWeek                as fins_prev_fiscalweek          preserving type ) as PreviousFiscalWeek,
    cast( _P_FiscalYearWeekGroup.FiscalWeekStartDate       as fins_prev_fweek_startdate     preserving type ) as PreviousFiscalWeekStartDate,
    cast( _P_FiscalYearWeekGroup.FiscalWeekEndDate         as fins_prev_fweek_enddate       preserving type ) as PreviousFiscalWeekEndDate,

    cast( _P_FiscalYearPeriodGroup.FiscalYearPeriod          as fins_prev_fyearperiod         preserving type ) as PreviousFiscalYearPeriod,
    cast( _P_FiscalYearQuarterGroup.FiscalYearQuarter         as fins_prev_fyearquarter        preserving type ) as PreviousFiscalYearQuarter,
    cast( _P_FiscalYearWeekGroup.FiscalYearWeek            as fins_prev_fyearweek           preserving type ) as PreviousFiscalYearWeek,

    P_FiscalCalendarDtePrevPeriods.FiscalYearConsecutiveNumber,
    P_FiscalCalendarDtePrevPeriods.FiscalPeriodConsecutiveNumber,
    P_FiscalCalendarDtePrevPeriods.FiscalQuarterConsecutiveNumber,
    P_FiscalCalendarDtePrevPeriods.FiscalWeekConsecutiveNumber,
      
    P_FiscalCalendarDtePrevPeriods.PrevFiscalYearConsecutiveNmbr,
    cast( P_FiscalCalendarDtePrevPeriods.PrevFsclPeriodConsecutiveNmbr  as fins_prev_fyearperiod_i  preserving type ) as PrevFsclPeriodConsecutiveNmbr,
    cast( P_FiscalCalendarDtePrevPeriods.PrevFsclQuarterConsecutiveNmbr as fins_prev_fyearquarter_i preserving type ) as PrevFsclQuarterConsecutiveNmbr,
    cast( P_FiscalCalendarDtePrevPeriods.PrevFsclWeekConsecutiveNmbr    as fins_prev_fyearweek_i    preserving type ) as PrevFsclWeekConsecutiveNmbr,

    P_FiscalCalendarDtePrevPeriods._FiscalYearVariant,
    P_FiscalCalendarDtePrevPeriods._CalendarDate,
    P_FiscalCalendarDtePrevPeriods._Text     
    
}
```
