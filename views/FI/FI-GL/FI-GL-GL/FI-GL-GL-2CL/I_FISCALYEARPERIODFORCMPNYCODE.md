---
name: I_FISCALYEARPERIODFORCMPNYCODE
description: Fiscalyearperiodforcmpnycode
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
# I_FISCALYEARPERIODFORCMPNYCODE

**Fiscalyearperiodforcmpnycode**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `cast( I_CompanyCode.CompanyCode as fis_bukrs preserving type )` |  |  |
| `FiscalYear` | ✓ | |  |  |  |  |
| `FiscalPeriod` | ✓ | |  |  |  |  |
| `FiscalYearVariant` |  | |  |  |  |  |
| `FiscalPeriodStartDate` |  | |  |  |  |  |
| `FiscalPeriodEndDate` |  | |  |  |  |  |
| `IsSpecialPeriod` |  | |  |  |  |  |
| `FiscalYearStartDate` |  | |  |  |  |  |
| `FiscalYearEndDate` |  | |  |  |  |  |
| `NextFiscalPeriod` |  | |  |  |  |  |
| `NextFiscalPeriodFiscalYear` |  | |  |  |  |  |
| `FiscalYearPeriod` |  | |  |  |  |  |
| `_FiscalYearVariant` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FiscalYearVariant` | `I_FiscalYearVariant` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_FiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_Text` | `I_FiscalPeriodForCoCodeText` | [0..*] |

## Source Code

```abap
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Fiscal Year Period For Company Code'
@VDM.viewType: #BASIC

@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'FiscalPeriod'
@Analytics: { dataCategory: #DIMENSION }
@Analytics.technicalName: 'IFIFYEARPERIODCC'

@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SQL_DATA_SOURCE]
                                     
define view entity I_FiscalYearPeriodForCmpnyCode as select from I_FiscalYearPeriod as I_FiscalYearPeriod inner join  I_CompanyCode as I_CompanyCode
                                                       on I_FiscalYearPeriod.FiscalYearVariant = I_CompanyCode.FiscalYearVariant

association [0..1] to I_FiscalYearVariant         as _FiscalYearVariant on  $projection.FiscalYearVariant = _FiscalYearVariant.FiscalYearVariant
association [0..1] to I_CompanyCode               as _CompanyCode       on  $projection.CompanyCode       = _CompanyCode.CompanyCode
association [0..1] to I_FiscalYearForCompanyCode  as _FiscalYear        on  $projection.FiscalYear        = _FiscalYear.FiscalYear
                                                                       and $projection.CompanyCode        = _FiscalYear.CompanyCode  
association [0..*] to I_FiscalPeriodForCoCodeText as _Text              on  $projection.CompanyCode       = _Text.CompanyCode
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
@ObjectModel.foreignKey.association: '_FiscalYear'      
key I_FiscalYearPeriod.FiscalYear,
@ObjectModel.text.association: '_Text'
key I_FiscalYearPeriod.FiscalPeriod,

@ObjectModel.foreignKey.association: '_FiscalYearVariant'      
    I_FiscalYearPeriod.FiscalYearVariant,

@ObjectModel.foreignKey.association: '_FiscalPeriodStartDate'      
    I_FiscalYearPeriod.FiscalPeriodStartDate,
    I_FiscalYearPeriod.FiscalPeriodEndDate,
    
    I_FiscalYearPeriod.IsSpecialPeriod,
    
    I_FiscalYearPeriod.FiscalYearStartDate,
    I_FiscalYearPeriod.FiscalYearEndDate,
    
    I_FiscalYearPeriod.NextFiscalPeriod,
    I_FiscalYearPeriod.NextFiscalPeriodFiscalYear,
     
    I_FiscalYearPeriod.FiscalYearPeriod,
    
    _CompanyCode,
    _FiscalYearVariant,
    I_FiscalYearPeriod._FiscalPeriodStartDate,
    _FiscalYear,
    _Text 
           
}
```
