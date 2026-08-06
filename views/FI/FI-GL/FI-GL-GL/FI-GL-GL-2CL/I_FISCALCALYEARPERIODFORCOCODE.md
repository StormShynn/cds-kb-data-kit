---
name: I_FISCALCALYEARPERIODFORCOCODE
description: Fiscalcalyearperiodforcocode
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
# I_FISCALCALYEARPERIODFORCOCODE

**Fiscalcalyearperiodforcocode**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CompanyCode` | `cast( I_CompanyCode.CompanyCode as fis_bukrs preserving type )` |
| key `FiscalYearPeriod` | `P_FiscalYearPeriod.fiscal_year_period` |
| `FiscalYear` | `P_FiscalYearPeriod.fiscal_year` |
| `FiscalPeriod` | `P_FiscalYearPeriod.fiscal_period` |
| `FiscalYearVariant` | `P_FiscalYearPeriod.fiscal_year_variant` |
| `FiscalPeriodStartDate` | `P_FiscalYearPeriod.fiscal_period_start_date` |
| `FiscalPeriodEndDate` | `P_FiscalYearPeriod.fiscal_period_end_date` |
| `IsSpecialPeriod` | `P_FiscalYearPeriod.is_special_period` |
| `FiscalYearStartDate` | `P_FiscalYearPeriod.fiscal_year_start_date` |
| `FiscalYearEndDate` | `P_FiscalYearPeriod.fiscal_year_end_date` |
| `_CompanyCode` | *Association* |
| `_FiscalYearVariant` | *Association* |
| `_FiscalYear` | *Association* |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_FiscalYearVariant` | `I_FiscalYearVariant` | [0..1] |
| `_FiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_Text` | `I_FiscalPeriodForCoCodeText` | [0..*] |

## Source Code

```abap
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC

@ObjectModel: { usageType.serviceQuality: #A,
                usageType.sizeCategory: #L,
                usageType.dataClass: #CUSTOMIZING,
                representativeKey: 'FiscalYearPeriod',
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
                modelingPattern: #ANALYTICAL_DIMENSION }   
@AccessControl.authorizationCheck: #NOT_REQUIRED

//@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@Analytics: { dataCategory: #DIMENSION }
@Analytics.technicalName: 'IFIFCFYPERDCC'

@EndUserText.label: 'Fiscal Year Period for Company Code'

define view entity I_FiscalCalYearPeriodForCoCode as select from P_FiscalYearPeriod inner join  I_CompanyCode 
                                                       on P_FiscalYearPeriod.fiscal_year_variant = I_CompanyCode.FiscalYearVariant

association [0..1] to I_CompanyCode               as _CompanyCode on  $projection.CompanyCode       = _CompanyCode.CompanyCode
association [0..1] to I_FiscalYearVariant         as _FiscalYearVariant on  $projection.FiscalYearVariant = _FiscalYearVariant.FiscalYearVariant
association [0..1] to I_FiscalYearForCompanyCode  as _FiscalYear  on  $projection.FiscalYear        = _FiscalYear.FiscalYear
                                                                 and $projection.CompanyCode        = _FiscalYear.CompanyCode  
association [0..*] to I_FiscalPeriodForCoCodeText as _Text        on  $projection.CompanyCode       = _Text.CompanyCode
                                                                 and $projection.FiscalYear         = _Text.FiscalYear
                                                                 and $projection.FiscalPeriod       = _Text.FiscalPeriod

{

      //--[ GENERATED:012:29JlHNUf7jY4ip0dSlCN8W
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
      // ]--GENERATED
@ObjectModel.foreignKey.association: '_CompanyCode'      
key cast( I_CompanyCode.CompanyCode as fis_bukrs preserving type ) as CompanyCode,
key P_FiscalYearPeriod.fiscal_year_period as FiscalYearPeriod,
@ObjectModel.foreignKey.association: '_FiscalYear'      
    P_FiscalYearPeriod.fiscal_year as FiscalYear,
@ObjectModel.text.association: '_Text'
    P_FiscalYearPeriod.fiscal_period as FiscalPeriod,

@ObjectModel.foreignKey.association: '_FiscalYearVariant'      
    P_FiscalYearPeriod.fiscal_year_variant as FiscalYearVariant,


//@ObjectModel.foreignKey.association: '_FiscalPeriodStartDate'      
    P_FiscalYearPeriod.fiscal_period_start_date       as FiscalPeriodStartDate,
    P_FiscalYearPeriod.fiscal_period_end_date         as FiscalPeriodEndDate,
    
    P_FiscalYearPeriod.is_special_period              as IsSpecialPeriod,
    
    P_FiscalYearPeriod.fiscal_year_start_date         as FiscalYearStartDate,
    P_FiscalYearPeriod.fiscal_year_end_date           as FiscalYearEndDate,
       
   
    _CompanyCode,
    _FiscalYearVariant,
    
    _FiscalYear,
    _Text 
           
}
```
