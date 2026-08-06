---
name: I_FISCCALENDARDATEFORCOMPCODE
description: Fisccalendardateforcompcode
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
  - component:FI-GL-GL-2CL
  - lob:Finance
---
# I_FISCCALENDARDATEFORCOMPCODE

**Fisccalendardateforcompcode**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CalendarDate` | `I_FiscalCalendarDate.CalendarDate` |
| key `CompanyCode` | `cast( I_CompanyCode.CompanyCode as fis_bukrs preserving type )` |
| `FiscalYearVariant` | `I_FiscalCalendarDate.FiscalYearVariant` |
| `FiscalYear` | `I_FiscalCalendarDate.FiscalYear` |
| `FiscalYearStartDate` | `I_FiscalCalendarDate.FiscalYearStartDate` |
| `FiscalYearEndDate` | `I_FiscalCalendarDate.FiscalYearEndDate` |
| `FiscalPeriod` | `I_FiscalCalendarDate.FiscalPeriod` |
| `FiscalPeriodStartDate` | `I_FiscalCalendarDate.FiscalPeriodStartDate` |
| `FiscalPeriodEndDate` | `I_FiscalCalendarDate.FiscalPeriodEndDate` |
| `FiscalQuarter` | `I_FiscalCalendarDate.FiscalQuarter` |
| `FiscalQuarterStartDate` | `I_FiscalCalendarDate.FiscalQuarterStartDate` |
| `FiscalQuarterEndDate` | `I_FiscalCalendarDate.FiscalQuarterEndDate` |
| `FiscalWeek` | `I_FiscalCalendarDate.FiscalWeek` |
| `FiscalWeekStartDate` | `I_FiscalCalendarDate.FiscalWeekStartDate` |
| `FiscalWeekEndDate` | `I_FiscalCalendarDate.FiscalWeekEndDate` |
| `FiscalYearPeriod` | `I_FiscalCalendarDate.FiscalYearPeriod` |
| `FiscalYearQuarter` | `I_FiscalCalendarDate.FiscalYearQuarter` |
| `FiscalYearWeek` | `I_FiscalCalendarDate.FiscalYearWeek` |
| `FiscalYearConsecutiveNumber` | `I_FiscalCalendarDate.FiscalYearConsecutiveNumber` |
| `FiscalPeriodConsecutiveNumber` | `I_FiscalCalendarDate.FiscalPeriodConsecutiveNumber` |
| `FiscalQuarterConsecutiveNumber` | `I_FiscalCalendarDate.FiscalQuarterConsecutiveNumber` |
| `FiscalWeekConsecutiveNumber` | `I_FiscalCalendarDate.FiscalWeekConsecutiveNumber` |
| `_CompanyCode` | *Association* |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_Text` | `I_FiscalYearPeriodText` | [0..*] |

## Source Code

```abap
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Fiscal Calendar Date For Company Code'
@VDM.viewType: #BASIC

@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'CalendarDate'
//@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@Analytics: { dataCategory: #DIMENSION }
@Analytics.technicalName: 'IFIFCCLNDARDTCC'

@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SQL_DATA_SOURCE]
                                     
define view entity I_FiscCalendarDateForCompCode as select from I_FiscalCalendarDate as I_FiscalCalendarDate inner join  I_CompanyCode as I_CompanyCode
                                                           on   I_FiscalCalendarDate.FiscalYearVariant = I_CompanyCode.FiscalYearVariant

association [0..1] to I_CompanyCode          as _CompanyCode  on  $projection.CompanyCode       = _CompanyCode.CompanyCode
association [0..*] to I_FiscalYearPeriodText as _Text         on  $projection.FiscalYearVariant = _Text.FiscalYearVariant
                                                              and $projection.FiscalYear        = _Text.FiscalYear
                                                              and $projection.FiscalPeriod      = _Text.FiscalPeriod

{
 
//@ObjectModel.foreignKey.association: '_CalendarDate'      
key I_FiscalCalendarDate.CalendarDate,
      //--[ GENERATED:012:29JlHNUf7jY4ip0dSlCN8W
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
      // ]--GENERATED
@ObjectModel.foreignKey.association: '_CompanyCode'      
key cast( I_CompanyCode.CompanyCode as fis_bukrs preserving type ) as CompanyCode,

@ObjectModel.foreignKey.association: '_FiscalYearVariant'      
    I_FiscalCalendarDate.FiscalYearVariant,    
    
    I_FiscalCalendarDate.FiscalYear,
    I_FiscalCalendarDate.FiscalYearStartDate,
    I_FiscalCalendarDate.FiscalYearEndDate,

@ObjectModel.text.association: '_Text'
    I_FiscalCalendarDate.FiscalPeriod,
    I_FiscalCalendarDate.FiscalPeriodStartDate,
    I_FiscalCalendarDate.FiscalPeriodEndDate,
    
    I_FiscalCalendarDate.FiscalQuarter,
    I_FiscalCalendarDate.FiscalQuarterStartDate,
    I_FiscalCalendarDate.FiscalQuarterEndDate,
    
    I_FiscalCalendarDate.FiscalWeek,
    I_FiscalCalendarDate.FiscalWeekStartDate,
    I_FiscalCalendarDate.FiscalWeekEndDate,
     
    I_FiscalCalendarDate.FiscalYearPeriod,
    I_FiscalCalendarDate.FiscalYearQuarter,  
    I_FiscalCalendarDate.FiscalYearWeek,

    I_FiscalCalendarDate.FiscalYearConsecutiveNumber,
    I_FiscalCalendarDate.FiscalPeriodConsecutiveNumber,
    I_FiscalCalendarDate.FiscalQuarterConsecutiveNumber,
    I_FiscalCalendarDate.FiscalWeekConsecutiveNumber,
    
    I_FiscalCalendarDate._FiscalYearVariant,
    _CompanyCode,
    I_FiscalCalendarDate._CalendarDate,
    _Text
    
}
```
