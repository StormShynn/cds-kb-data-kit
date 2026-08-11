---
name: I_FISCALCALDATENXTFSCLPERIOD
description: "This CDS view provides access both to the relevant fiscal calendar details of a fiscal year and a fiscal week in a fiscal year variant and to the details of the corresponding next fiscal period. The most important attributes of business entities are included, such as fiscal year, fiscal quarter, fiscal period, fiscal week with the corresponding start and end date, but also the next fiscal period together with the corresponding fiscal year with start and end date. This CDS view provides the prerequisites for answering the following business questions: What are the fiscal time frames of a calendar date? What is the next fiscal period and the corresponding fiscal year of a calendar date?"
app_component: FI-GL-GL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FISCALCALDATENXTFSCLPERIOD')/$value
semantic_en: "This CDS view provides access both to the relevant fiscal calendar details of a fiscal year and a fiscal week in a fiscal year variant and to the details of the corresponding next fiscal period. The most important attributes of business entities are included, such as fiscal year, fiscal quarter, fiscal period, fiscal week with the corresponding start and end date, but also the next fiscal period together with the corresponding fiscal year with start and end date. This CDS view provides the prerequisites for answering the following business questions: What are the fiscal time frames of a calendar date? What is the next fiscal period and the corresponding fiscal year of a calendar date?"
semantic_vi: "Next Fiscal Period Info of Calendar Date — CDS view giao diện dựa trên P_FiscalCalendarDateNxtPeriods."
keywords:
  - "next"
  - "fiscal"
  - "period"
  - "info"
  - "calendar"
  - "date"
  - "year"
  - "variant"
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
# I_FISCALCALDATENXTFSCLPERIOD

**This CDS view provides access both to the relevant fiscal calendar details of a fiscal year and a fiscal week in a fiscal year variant and to the details of the corresponding next fiscal period. The most important attributes of business entities are included, such as fiscal year, fiscal quarter, fiscal period, fiscal week with the corresponding start and end date, but also the next fiscal period together with the corresponding fiscal year with start and end date. This CDS view provides the prerequisites for answering the following business questions: What are the fiscal time frames of a calendar date? What is the next fiscal period and the corresponding fiscal year of a calendar date?**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FISCALCALDATENXTFSCLPERIOD')/$value) |

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
| `NextFiscalPeriod` |  | |  | `cast( _DataSource2.FiscalPeriod as fins_next_fiscalperiod preserving type )` | `NUMC(3)` | Next Fiscal Period |
| `NextFiscalPeriodFiscalYear` |  | |  | `cast( _DataSource2.FiscalYear as fins_nxt_fiscperiodfiscyear_nc preserving type )` | `NUMC(4)` | Fiscal Year of Next Fiscal Period |
| `NextFsclPeriodFsclYearStrtDate` |  | |  | `cast( _DataSource2.FiscalYearStartDate as fins_next_fperfyear_startdate preserving type )` | `DATS(8)` | Start Date of the Fiscal Year of the Next Fiscal Period |
| `NextFsclPeriodFsclYearEndDate` |  | |  | `cast( _DataSource2.FiscalYearEndDate as fins_next_fperfyear_enddate preserving type )` | `DATS(8)` | End Date of the Fiscal Year of the Next Fiscal Period |
| `NextFiscalPeriodStartDate` |  | |  | `cast( _DataSource2.FiscalPeriodStartDate as fins_next_fperiod_startdate preserving type )` | `DATS(8)` | Start Date of Next Fiscal Period |
| `NextFiscalPeriodEndDate` |  | |  | `cast( _DataSource2.FiscalPeriodEndDate as fins_next_fperiod_enddate preserving type )` | `DATS(8)` | End Date of Next Fiscal Period |
| `NextFiscalYearPeriod` |  | |  | `cast( _DataSource2.FiscalYearPeriod as fins_next_fyearperiod preserving type )` | `NUMC(7)` | Next Fiscal Period with Fiscal Year |
| `FiscalPeriodConsecutiveNumber` |  | |  |  | `INT4(10)` | Fiscal Year Period (Numbering) |
| `NextFsclPeriodConsecutiveNmbr` |  | |  | `cast( DataSource1.NextFsclPeriodConsecutiveNmbr as fins_next_fyearperiod_i preserving type )` | `INT4(10)` | Next Fiscal Year Period (Numbering) |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DataSource2` | `P_FiscalYearPeriodGroup` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FISCALCALDATENXTFSCLPERIOD')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FISCALCALDATENXTFSCLPERIOD')/$value)*

```abap
@Consumption.dbHints: ['AGGR_THRU_JOIN']
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Next Fiscal Period Info of Calendar Date'
@VDM.viewType: #COMPOSITE

@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'CalendarDate'
//@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@Analytics: { dataCategory: #DIMENSION }
@Analytics.technicalName: 'IFIFCALNXTFPERD'

@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SQL_DATA_SOURCE]
                                     
define view entity I_FiscalCalDateNxtFsclPeriod as select from P_FiscalCalendarDateNxtPeriods as DataSource1 
                                                                                            
association[0..1] to P_FiscalYearPeriodGroup  as _DataSource2 on   $projection.FiscalYearVariant               = _DataSource2.FiscalYearVariant
                                                              and  $projection.NextFsclPeriodConsecutiveNmbr   = _DataSource2.FiscalPeriodConsecutiveNumber
                                                                                            
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
    
    cast( _DataSource2.FiscalPeriod          as fins_next_fiscalperiod preserving type )               as NextFiscalPeriod,
    cast( _DataSource2.FiscalYear            as fins_nxt_fiscperiodfiscyear_nc preserving type )       as NextFiscalPeriodFiscalYear,   

    cast( _DataSource2.FiscalYearStartDate   as fins_next_fperfyear_startdate preserving type )        as NextFsclPeriodFsclYearStrtDate,
    cast( _DataSource2.FiscalYearEndDate     as fins_next_fperfyear_enddate preserving type )          as NextFsclPeriodFsclYearEndDate,

    cast( _DataSource2.FiscalPeriodStartDate as fins_next_fperiod_startdate preserving type )          as NextFiscalPeriodStartDate,
    cast( _DataSource2.FiscalPeriodEndDate   as fins_next_fperiod_enddate preserving type )            as NextFiscalPeriodEndDate,

    cast( _DataSource2.FiscalYearPeriod      as fins_next_fyearperiod preserving type )                as NextFiscalYearPeriod,

    DataSource1.FiscalPeriodConsecutiveNumber,
    cast( DataSource1.NextFsclPeriodConsecutiveNmbr as fins_next_fyearperiod_i   preserving type ) as NextFsclPeriodConsecutiveNmbr,

    DataSource1._FiscalYearVariant,
    DataSource1._CalendarDate,
    DataSource1._Text     
    
}
```
