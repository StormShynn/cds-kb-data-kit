---
name: I_FISCALCALENDARYEARTODATERNGE
description: "Fiscal Calendar Year to Date Ranges"
app_component: FI-GL-GL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FISCALCALENDARYEARTODATERNGE')/$value
semantic_en: "Fiscal Calendar Year to Date Ranges"
semantic_vi: "Fiscal Calendar Year to Date Ranges — CDS view giao diện dựa trên P_FiscalCalendarYTDRange2."
keywords:
  - "fiscal"
  - "calendar"
  - "year"
  - "date"
  - "ranges"
  - "variant"
  - "period"
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
# I_FISCALCALENDARYEARTODATERNGE

**Fiscal Calendar Year to Date Ranges**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FISCALCALENDARYEARTODATERNGE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FiscalYearVariant` | ✓ | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `CalendarDate` | ✓ | |  |  | `DATS(8)` | Calendar Date |
| `FiscalYear` |  | |  | `case when P_FiscalCalendarYTDRange2.FiscalPeriod <= '001' and P_FiscalCalendarYTDRange2.CalendarDate < P_FiscalCalendarYTDRange2.FiscalPeriodEndDate then P_FiscalCalendarYTDRange2.PreviousFiscalYear else P_FiscalCalendarYTDRange2.FiscalYear end` | `NUMC(4)` |  |
| `FromFiscalPeriod` |  | |  | `cast( '000' as fis_fiscalperiod_from preserving type )` | `NUMC(3)` | Fiscal Period From |
| `ToFiscalPeriod` |  | |  | `cast( case when P_FiscalCalendarYTDRange2.FiscalPeriod <= '001' and P_FiscalCalendarYTDRange2.CalendarDate < P_FiscalCalendarYTDRange2.FiscalPeriodEndDate then MaxFiscalPeriod when P_FiscalCalendarYTDRange2.FiscalPeriod <= '001' and P_FiscalCalendarYTDRange2.CalendarDate = P_FiscalCalendarYTDRange2.FiscalPeriodEndDate then P_FiscalCalendarYTDRange2.FiscalPeriod when P_FiscalCalendarYTDRange2.CalendarDate = P_FiscalCalendarYTDRange2.FiscalYearEndDate then MaxFiscalPeriod when P_FiscalCalendarYTDRange2.CalendarDate < P_FiscalCalendarYTDRange2.FiscalPeriodEndDate then P_FiscalCalendarYTDRange2.PreviousFiscalPeriod else P_FiscalCalendarYTDRange2.FiscalPeriod end as fis_fiscalperiod_to preserving type )` | `NUMC(3)` | Fiscal Period To |
| `FromFiscalYearPeriod` |  | |  | `cast( case when P_FiscalCalendarYTDRange2.FiscalPeriod <= '001' and P_FiscalCalendarYTDRange2.CalendarDate < P_FiscalCalendarYTDRange2.FiscalPeriodEndDate then concat( P_FiscalCalendarYTDRange2.PreviousFiscalYear, '000' ) else concat( P_FiscalCalendarYTDRange2.FiscalYear, '000' ) end as fis_jahrper_conv )` | `NUMC(7)` | Fiscal Year Period |
| `ToFiscalYearPeriod` |  | |  | `cast( case when P_FiscalCalendarYTDRange2.FiscalPeriod <= '001' and P_FiscalCalendarYTDRange2.CalendarDate < P_FiscalCalendarYTDRange2.FiscalPeriodEndDate then concat( P_FiscalCalendarYTDRange2.PreviousFiscalYear, MaxFiscalPeriod ) when P_FiscalCalendarYTDRange2.FiscalPeriod <= '001' and P_FiscalCalendarYTDRange2.CalendarDate = P_FiscalCalendarYTDRange2.FiscalPeriodEndDate then concat( P_FiscalCalendarYTDRange2.FiscalYear, P_FiscalCalendarYTDRange2.FiscalPeriod ) when P_FiscalCalendarYTDRange2.CalendarDate = P_FiscalCalendarYTDRange2.FiscalYearEndDate then concat( P_FiscalCalendarYTDRange2.PreviousFiscalYear, MaxFiscalPeriod ) when P_FiscalCalendarYTDRange2.CalendarDate < P_FiscalCalendarYTDRange2.FiscalPeriodEndDate then concat( P_FiscalCalendarYTDRange2.FiscalYear, P_FiscalCalendarYTDRange2.PreviousFiscalPeriod ) else concat( P_FiscalCalendarYTDRange2.FiscalYear, P_FiscalCalendarYTDRange2.FiscalPeriod ) end as fis_jahrper_conv )` | `NUMC(7)` | Fiscal Year Period |
| `FromPostingDate` |  | |  | `cast( case when P_FiscalCalendarYTDRange2.FiscalPeriod <= '001' and P_FiscalCalendarYTDRange2.CalendarDate < P_FiscalCalendarYTDRange2.FiscalPeriodEndDate then PreviousFiscalYearStartDate else FiscalYearStartDate end as fis_budat_from preserving type )` | `DATS(8)` | Posting Date From |
| `ToPostingDate` |  | |  | `cast( case when P_FiscalCalendarYTDRange2.FiscalPeriod <= '001' and P_FiscalCalendarYTDRange2.CalendarDate < P_FiscalCalendarYTDRange2.FiscalPeriodEndDate then P_FiscalCalendarYTDRange2.PreviousFiscalYearEndDate when P_FiscalCalendarYTDRange2.FiscalPeriod <= '001' and P_FiscalCalendarYTDRange2.CalendarDate = P_FiscalCalendarYTDRange2.FiscalPeriodEndDate then P_FiscalCalendarYTDRange2.FiscalPeriodEndDate when P_FiscalCalendarYTDRange2.CalendarDate = P_FiscalCalendarYTDRange2.FiscalYearEndDate then P_FiscalCalendarYTDRange2.PreviousFiscalYearEndDate when P_FiscalCalendarYTDRange2.CalendarDate < P_FiscalCalendarYTDRange2.FiscalPeriodEndDate then PreviousFiscalPeriodEndDate else P_FiscalCalendarYTDRange2.CalendarDate end as fis_budat_to preserving type )` | `DATS(8)` | Posting Date To |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FISCALCALENDARYEARTODATERNGE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FISCALCALENDARYEARTODATERNGE')/$value)*

```abap
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Fiscal Calendar Year to Date Ranges'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'CalendarDate'
@Analytics: { dataCategory: #DIMENSION,
              internalName: #LOCAL }
@Analytics.technicalName: 'IFIFISCALYTDR'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SQL_DATA_SOURCE]

define view entity I_FiscalCalendarYearToDateRnge
  as select from P_FiscalCalendarYTDRange2 as P_FiscalCalendarYTDRange2
{
      @ObjectModel.foreignKey.association: '_FiscalYearVariant'
  key P_FiscalCalendarYTDRange2.FiscalYearVariant,
  key P_FiscalCalendarYTDRange2.CalendarDate,

      case when P_FiscalCalendarYTDRange2.FiscalPeriod <= '001' and P_FiscalCalendarYTDRange2.CalendarDate < P_FiscalCalendarYTDRange2.FiscalPeriodEndDate then P_FiscalCalendarYTDRange2.PreviousFiscalYear
          else P_FiscalCalendarYTDRange2.FiscalYear
          end                                                as FiscalYear,

      cast( '000' as fis_fiscalperiod_from preserving type ) as FromFiscalPeriod, //LowFiscalPeriod,

      cast(
      case when P_FiscalCalendarYTDRange2.FiscalPeriod <= '001' and P_FiscalCalendarYTDRange2.CalendarDate < P_FiscalCalendarYTDRange2.FiscalPeriodEndDate
            then MaxFiscalPeriod
           when P_FiscalCalendarYTDRange2.FiscalPeriod <= '001' and P_FiscalCalendarYTDRange2.CalendarDate = P_FiscalCalendarYTDRange2.FiscalPeriodEndDate
            then P_FiscalCalendarYTDRange2.FiscalPeriod
           when P_FiscalCalendarYTDRange2.CalendarDate = P_FiscalCalendarYTDRange2.FiscalYearEndDate
            then MaxFiscalPeriod
           when P_FiscalCalendarYTDRange2.CalendarDate < P_FiscalCalendarYTDRange2.FiscalPeriodEndDate
            then P_FiscalCalendarYTDRange2.PreviousFiscalPeriod
      else P_FiscalCalendarYTDRange2.FiscalPeriod
      end as fis_fiscalperiod_to preserving type )           as ToFiscalPeriod, //HighFiscalPeriod,

      cast(
      case  when P_FiscalCalendarYTDRange2.FiscalPeriod <= '001' and P_FiscalCalendarYTDRange2.CalendarDate < P_FiscalCalendarYTDRange2.FiscalPeriodEndDate
              then concat( P_FiscalCalendarYTDRange2.PreviousFiscalYear, '000' )
          else concat( P_FiscalCalendarYTDRange2.FiscalYear, '000' )
      end as fis_jahrper_conv  )                             as FromFiscalYearPeriod,


      cast(
      case when P_FiscalCalendarYTDRange2.FiscalPeriod <= '001' and P_FiscalCalendarYTDRange2.CalendarDate < P_FiscalCalendarYTDRange2.FiscalPeriodEndDate
              then concat( P_FiscalCalendarYTDRange2.PreviousFiscalYear, MaxFiscalPeriod )
           when P_FiscalCalendarYTDRange2.FiscalPeriod <= '001' and P_FiscalCalendarYTDRange2.CalendarDate = P_FiscalCalendarYTDRange2.FiscalPeriodEndDate
              then concat( P_FiscalCalendarYTDRange2.FiscalYear, P_FiscalCalendarYTDRange2.FiscalPeriod )
           when P_FiscalCalendarYTDRange2.CalendarDate = P_FiscalCalendarYTDRange2.FiscalYearEndDate
              then concat( P_FiscalCalendarYTDRange2.PreviousFiscalYear, MaxFiscalPeriod )
           when P_FiscalCalendarYTDRange2.CalendarDate < P_FiscalCalendarYTDRange2.FiscalPeriodEndDate
              then concat( P_FiscalCalendarYTDRange2.FiscalYear, P_FiscalCalendarYTDRange2.PreviousFiscalPeriod )
           else concat( P_FiscalCalendarYTDRange2.FiscalYear, P_FiscalCalendarYTDRange2.FiscalPeriod )
      end as fis_jahrper_conv )                              as ToFiscalYearPeriod,


      cast(
      case  when P_FiscalCalendarYTDRange2.FiscalPeriod <= '001' and P_FiscalCalendarYTDRange2.CalendarDate < P_FiscalCalendarYTDRange2.FiscalPeriodEndDate
              then PreviousFiscalYearStartDate
          else FiscalYearStartDate
      end as fis_budat_from preserving type )                as FromPostingDate,


      cast(
        case when P_FiscalCalendarYTDRange2.FiscalPeriod <= '001' and P_FiscalCalendarYTDRange2.CalendarDate < P_FiscalCalendarYTDRange2.FiscalPeriodEndDate
              then P_FiscalCalendarYTDRange2.PreviousFiscalYearEndDate
        when P_FiscalCalendarYTDRange2.FiscalPeriod <= '001' and P_FiscalCalendarYTDRange2.CalendarDate = P_FiscalCalendarYTDRange2.FiscalPeriodEndDate
              then P_FiscalCalendarYTDRange2.FiscalPeriodEndDate
        when P_FiscalCalendarYTDRange2.CalendarDate = P_FiscalCalendarYTDRange2.FiscalYearEndDate
              then    P_FiscalCalendarYTDRange2.PreviousFiscalYearEndDate
        when P_FiscalCalendarYTDRange2.CalendarDate < P_FiscalCalendarYTDRange2.FiscalPeriodEndDate
              then  PreviousFiscalPeriodEndDate
        else  P_FiscalCalendarYTDRange2.CalendarDate
      end as fis_budat_to preserving type )                  as ToPostingDate,


      P_FiscalCalendarYTDRange2._FiscalYearVariant
}
```
