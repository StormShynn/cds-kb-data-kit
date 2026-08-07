---
name: I_FISCALCALENDARDATEFORLEDGER
description: Fiscalcalendardateforledger
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
# I_FISCALCALENDARDATEFORLEDGER

**Fiscalcalendardateforledger**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CalendarDate` | ✓ | |  |  |  |  |
| `CompanyCode` | ✓ | |  | `cast( I_LedgerCompanyCodeCrcyRoles.CompanyCode as fis_bukrs preserving type )` |  |  |
| `Ledger` | ✓ | |  | `cast( I_LedgerCompanyCodeCrcyRoles.Ledger as fis_rldnr preserving type )` |  |  |
| `FiscalYearVariant` |  | |  |  |  |  |
| `ControllingArea` |  | | `_CompanyCode` | `ControllingArea` |  |  |
| `FiscalYear` |  | |  |  |  |  |
| `FiscalYearStartDate` |  | |  |  |  |  |
| `FiscalYearEndDate` |  | |  |  |  |  |
| `FiscalPeriod` |  | |  |  |  |  |
| `FiscalPeriodStartDate` |  | |  |  |  |  |
| `FiscalPeriodEndDate` |  | |  |  |  |  |
| `FiscalQuarter` |  | |  |  |  |  |
| `FiscalQuarterStartDate` |  | |  |  |  |  |
| `FiscalQuarterEndDate` |  | |  |  |  |  |
| `FiscalWeek` |  | |  |  |  |  |
| `FiscalWeekStartDate` |  | |  |  |  |  |
| `FiscalWeekEndDate` |  | |  |  |  |  |
| `FiscalYearPeriod` |  | |  |  |  |  |
| `FiscalYearQuarter` |  | |  |  |  |  |
| `FiscalYearWeek` |  | |  |  |  |  |
| `FiscalYearConsecutiveNumber` |  | |  |  |  |  |
| `FiscalPeriodConsecutiveNumber` |  | |  |  |  |  |
| `FiscalQuarterConsecutiveNumber` |  | |  |  |  |  |
| `FiscalWeekConsecutiveNumber` |  | |  |  |  |  |
| `_ControllingAreaText` | | ✓ | | | | |
| `_LedgerText` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ControllingAreaText` | `I_ControllingArea` | [0..1] |
| `_LedgerText` | `I_LedgerText` | [0..*] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_Ledger` | `I_Ledger` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_Text` | `I_FiscalYearPeriodText` | [0..*] |
| `_FiscalYear` | `I_FiscalYear` | [0..1] |

## Source Code

```abap
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Fiscal Calendar Dates for Ledger'
@VDM.viewType: #COMPOSITE

@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'CalendarDate'
//@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@Analytics: { dataCategory: #DIMENSION }
@Analytics.technicalName: 'IFIFISCCAL4L'
//--[ GENERATED:012:29JlHNUf7jY4ip0dSlCN8W
//@AccessControl.privilegedAssociations: ['_ControllingAreaText','_LedgerText']
// ]--GENERATED

@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SQL_DATA_SOURCE]
                                     
define view entity I_FiscalCalendarDateForLedger as select from I_FiscalCalendarDate as I_FiscalCalendarDate
                                              inner join I_LedgerCompanyCodeCrcyRoles as I_LedgerCompanyCodeCrcyRoles
                                                    on   I_FiscalCalendarDate.FiscalYearVariant = I_LedgerCompanyCodeCrcyRoles.FiscalYearVariant


  //--[ GENERATED:012:29JlHNUf7jY4ip0dSlCN8W
  association [0..1] to I_ControllingArea      as _ControllingAreaText   on  $projection.ControllingArea   = _ControllingAreaText.ControllingArea
  association [0..*] to I_LedgerText           as _LedgerText            on  $projection.Ledger            = _LedgerText.Ledger
  // ]--GENERATED
  association [0..1] to I_CompanyCode          as _CompanyCode           on  $projection.CompanyCode       = _CompanyCode.CompanyCode
  association [0..1] to I_Ledger               as _Ledger                on  $projection.Ledger            = _Ledger.Ledger
  association [0..1] to I_ControllingArea      as _ControllingArea       on  $projection.ControllingArea   = _ControllingArea.ControllingArea
  association [0..*] to I_FiscalYearPeriodText as _Text                  on  $projection.FiscalYearVariant = _Text.FiscalYearVariant
                                                                         and $projection.FiscalYear        = _Text.FiscalYear
                                                                         and $projection.FiscalPeriod      = _Text.FiscalPeriod
  association [0..1] to I_FiscalYear           as _FiscalYear            on  $projection.FiscalYearVariant = _FiscalYear.FiscalYearVariant
                                                                         and $projection.FiscalYear        = _FiscalYear.FiscalYear

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
key cast( I_LedgerCompanyCodeCrcyRoles.CompanyCode as fis_bukrs preserving type ) as CompanyCode,
      //--[ GENERATED:012:29JlHNUf7jY4ip0dSlCN8W
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_LedgerStdVH',
                     element: 'Ledger' }
        }]
      @ObjectModel.text.association: '_LedgerText'
      // ]--GENERATED
@ObjectModel.foreignKey.association: '_Ledger'      
key cast( I_LedgerCompanyCodeCrcyRoles.Ledger as fis_rldnr preserving type ) as Ledger,

@ObjectModel.foreignKey.association: '_FiscalYearVariant'      
    I_FiscalCalendarDate.FiscalYearVariant,
      //--[ GENERATED:012:29JlHNUf7jY4ip0dSlCN8W
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_ControllingAreaStdVH',
                     element: 'ControllingArea' }
        }]
      @ObjectModel.text.association: '_ControllingAreaText'
      // ]--GENERATED
@ObjectModel.foreignKey.association: '_ControllingArea' 
    _CompanyCode.ControllingArea as ControllingArea,
    
@ObjectModel.foreignKey.association: '_FiscalYear'      
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
    _Ledger,
    _ControllingArea,
    I_FiscalCalendarDate._CalendarDate,
    _FiscalYear,
    _Text    ,
    //--[ GENERATED:012:29JlHNUf7jY4ip0dSlCN8W
    @Consumption.hidden: true
    _ControllingAreaText,
    @Consumption.hidden: true
    _LedgerText
      // ]--GENERATED

          
}
```
