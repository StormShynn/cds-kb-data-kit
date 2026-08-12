---
name: I_FISCALCALDATEPREVFSCLPERIOD
description: "This CDS view provides access both to the relevant fiscal calendar details of a fiscal year and a fiscal week in a fiscal year variant and to the details of the corresponding previous fiscal period. The most important attributes of business entities are included, such as fiscal year, fiscal quarter, fiscal period, fiscal week with the corresponding start and end date, but also the previous fiscal period together with the corresponding fiscal year with start and end date. This CDS view provides the prerequisites for answering the following business questions: What are the fiscal time frames of a calendar date? What is the previous fiscal period and the corresponding fiscal year of a calendar date?"
app_component: FI-GL-GL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FISCALCALDATEPREVFSCLPERIOD')/$value
semantic_en: "This CDS view provides access both to the relevant fiscal calendar details of a fiscal year and a fiscal week in a fiscal year variant and to the details of the corresponding previous fiscal period. The most important attributes of business entities are included, such as fiscal year, fiscal quarter, fiscal period, fiscal week with the corresponding start and end date, but also the previous fiscal period together with the corresponding fiscal year with start and end date. This CDS view provides the prerequisites for answering the following business questions: What are the fiscal time frames of a calendar date? What is the previous fiscal period and the corresponding fiscal year of a calendar date?"
semantic_vi: "Previous Fiscal Period Info of CalndrDte — CDS view giao diện dựa trên P_FiscalCalendarDtePrevPeriods."
keywords:
  - "previous"
  - "fiscal"
  - "period"
  - "info"
  - "calndrdte"
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
# I_FISCALCALDATEPREVFSCLPERIOD

**This CDS view provides access both to the relevant fiscal calendar details of a fiscal year and a fiscal week in a fiscal year variant and to the details of the corresponding previous fiscal period. The most important attributes of business entities are included, such as fiscal year, fiscal quarter, fiscal period, fiscal week with the corresponding start and end date, but also the previous fiscal period together with the corresponding fiscal year with start and end date. This CDS view provides the prerequisites for answering the following business questions: What are the fiscal time frames of a calendar date? What is the previous fiscal period and the corresponding fiscal year of a calendar date?**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FISCALCALDATEPREVFSCLPERIOD')/$value) |

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
| `PreviousFiscalPeriod` |  | |  | `cast( _DataSource2.FiscalPeriod as fins_prev_fiscalperiod preserving type )` | `NUMC(3)` | Previous Fiscal Period |
| `PreviousFiscalPeriodStartDate` |  | |  | `cast( _DataSource2.FiscalPeriodStartDate as fins_prev_fperiod_startdate preserving type )` | `DATS(8)` | Start Date of Previous Fiscal Period |
| `PreviousFiscalPeriodEndDate` |  | |  | `cast( _DataSource2.FiscalPeriodEndDate as fins_prev_fperiod_enddate preserving type )` | `DATS(8)` | End Date of Previous Fiscal Period |
| `PreviousFiscalYearPeriod` |  | |  | `cast( _DataSource2.FiscalYearPeriod as fins_prev_fyearperiod preserving type )` | `NUMC(7)` | Previous Fiscal Period with Fiscal Year |
| `PreviousFiscalPeriodFiscalYear` |  | |  | `cast( _DataSource2.FiscalYear as fins_prv_fiscperiodfiscyear_nc preserving type )` | `NUMC(4)` | Fiscal Year of Previous Fiscal Period |
| `PrevFsclPeriodFsclYearStrtDate` |  | |  | `cast( _DataSource2.FiscalYearStartDate as fins_prev_fperfyear_startdate preserving type )` | `DATS(8)` | Start Date of the Fiscal Year of the Previous Fiscal Period |
| `PrevFsclPeriodFsclYearEndDate` |  | |  | `cast( _DataSource2.FiscalYearEndDate as fins_prev_fperfyear_enddate preserving type )` | `DATS(8)` | End Date of the Fiscal Year of the Previous Fiscal Period |
| `FiscalPeriodConsecutiveNumber` |  | |  |  | `INT4(10)` | Fiscal Year Period (Numbering) |
| `PrevFsclPeriodConsecutiveNmbr` |  | |  | `cast( DataSource1.PrevFsclPeriodConsecutiveNmbr as fins_prev_fyearperiod_i preserving type )` | `INT4(10)` | Previous Fiscal Year Period (Numbering) |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DataSource2` | `P_FiscalYearPeriodGroup` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FISCALCALDATEPREVFSCLPERIOD')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FISCALCALDATEPREVFSCLPERIOD')/$value)*

```abap
@Consumption.dbHints: ['AGGR_THRU_JOIN']
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Previous Fiscal Period Info of CalndrDte'
@VDM.viewType: #COMPOSITE

@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'CalendarDate'
//@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@Analytics: { dataCategory: #DIMENSION }
@Analytics.technicalName: 'IFIFCALPREVFPERD'

@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                      #SQL_DATA_SOURCE]
                                     
define view entity I_FiscalCalDatePrevFsclPeriod as select from P_FiscalCalendarDtePrevPeriods as DataSource1 

association[0..1] to P_FiscalYearPeriodGroup  as _DataSource2 on   $projection.FiscalYearVariant               = _DataSource2.FiscalYearVariant
                                                              and  $projection.PrevFsclPeriodConsecutiveNmbr   = _DataSource2.FiscalPeriodConsecutiveNumber

{  
  
@ObjectModel.foreignKey.association: '_FiscalYearVariant'      
key DataSource1.FiscalYearVariant,
//@ObjectModel.foreignKey.association: '_CalendarDate'      
key DataSource1.CalendarDate,

    DataSource1.FiscalYear,
    DataSource1.FiscalYearStartDate,
    DataSource1.FiscalYearEndDate,
        
//@ObjectModel.text.association: '_Text'
    DataSource1.FiscalPeriod,
    DataSource1.FiscalPeriodStartDate,
    DataSource1.FiscalPeriodEndDate,

    DataSource1.FiscalQuarter,
    DataSource1.FiscalQuarterStartDate,
    DataSource1.FiscalQuarterEndDate,

    DataSource1.FiscalWeek,
    DataSource1.FiscalWeekStartDate,
    DataSource1.FiscalWeekEndDate,

    DataSource1.FiscalYearPeriod,
    DataSource1.FiscalYearQuarter,
    DataSource1.FiscalYearWeek,
    
    cast( _DataSource2.FiscalPeriod          as fins_prev_fiscalperiod preserving type )          as PreviousFiscalPeriod,
    cast( _DataSource2.FiscalPeriodStartDate as fins_prev_fperiod_startdate preserving type )     as PreviousFiscalPeriodStartDate,
    cast( _DataSource2.FiscalPeriodEndDate   as fins_prev_fperiod_enddate preserving type )       as PreviousFiscalPeriodEndDate,

    cast( _DataSource2.FiscalYearPeriod      as fins_prev_fyearperiod preserving type )           as PreviousFiscalYearPeriod,
    cast( _DataSource2.FiscalYear            as fins_prv_fiscperiodfiscyear_nc preserving type )  as PreviousFiscalPeriodFiscalYear,   
    
    cast( _DataSource2.FiscalYearStartDate   as fins_prev_fperfyear_startdate preserving type )   as PrevFsclPeriodFsclYearStrtDate,
    cast( _DataSource2.FiscalYearEndDate     as fins_prev_fperfyear_enddate preserving type )     as PrevFsclPeriodFsclYearEndDate,

    DataSource1.FiscalPeriodConsecutiveNumber,
    cast( DataSource1.PrevFsclPeriodConsecutiveNmbr  as fins_prev_fyearperiod_i  preserving type ) as PrevFsclPeriodConsecutiveNmbr,

    DataSource1._FiscalYearVariant,
    DataSource1._CalendarDate,
    DataSource1._Text     
    
}
```
