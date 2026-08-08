---
name: ICA_FISCALCALENDARDATE
description: "Ica Fiscalcalendardate"
app_component: FIN-CS-ICR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-ICR
  - component:FIN-CS-ICR-2CL
  - lob:Other
---
# ICA_FISCALCALENDARDATE

**Ica Fiscalcalendardate**

| Property | Value |
|---|---|
| App Component | `FIN-CS-ICR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `client` |  | |  |  |  |  |
| `fiscal_year_variant` | ✓ | |  | `cast( fiscal_year_variant as fis_periv preserving type )` |  |  |
| `calendar_date` | ✓ | |  | `cast( calendar_date as calendardate preserving type )` |  |  |
| `fiscal_year` |  | |  | `cast( fiscal_year as fis_gjahr_no_conv preserving type )` |  |  |
| `fiscal_year_start_date` |  | |  |  |  |  |
| `fiscal_year_end_date` |  | |  |  |  |  |
| `fiscal_period` |  | |  |  |  |  |
| `fiscal_period_start_date` |  | |  |  |  |  |
| `fiscal_period_end_date` |  | |  |  |  |  |
| `fiscal_quarter` |  | |  |  |  |  |
| `fiscal_quarter_start_date` |  | |  |  |  |  |
| `fiscal_quarter_end_date` |  | |  |  |  |  |
| `fiscal_week` |  | |  |  |  |  |
| `fiscal_week_start_date` |  | |  |  |  |  |
| `fiscal_week_end_date` |  | |  |  |  |  |
| `fiscal_year_period` |  | |  | `cast( fiscal_year_period as fins_fyearperiod preserving type )` |  |  |
| `fiscal_year_quarter` |  | |  |  |  |  |
| `fiscal_year_week` |  | |  |  |  |  |
| `fiscal_year_period_int` |  | |  |  |  |  |
| `fiscal_year_quarter_int` |  | |  |  |  |  |
| `fiscal_year_week_int` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICAFISCDATE'
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #M
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck:#NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true 
@ObjectModel.supportedCapabilities: [#DERIVATION_FUNCTION]
@EndUserText.label: 'Map Calendar to Fiscal year and period'
define view ICA_FiscalCalendarDate as select from finsc_fisc_date {
    client,
    key cast( fiscal_year_variant as fis_periv preserving type ) as fiscal_year_variant,
    key cast( calendar_date as calendardate preserving type ) as calendar_date,

    cast( fiscal_year as fis_gjahr_no_conv preserving type ) as fiscal_year,
    fiscal_year_start_date,
    fiscal_year_end_date,

    fiscal_period,
    fiscal_period_start_date,
    fiscal_period_end_date,

    fiscal_quarter,
    fiscal_quarter_start_date,
    fiscal_quarter_end_date,

    fiscal_week,
    fiscal_week_start_date,
    fiscal_week_end_date,

    cast( fiscal_year_period as fins_fyearperiod preserving type ) as fiscal_year_period,
    fiscal_year_quarter,
    fiscal_year_week,
    
    fiscal_year_period_int,
    fiscal_year_quarter_int,
    fiscal_year_week_int
} where client  = $session.client
```
