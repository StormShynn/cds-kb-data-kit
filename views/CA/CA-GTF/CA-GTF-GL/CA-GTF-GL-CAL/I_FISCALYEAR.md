---
name: I_FISCALYEAR
description: Fiscalyear
app_component: CA-GTF-GL-CAL
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-GL
  - interface-view
  - component:CA-GTF-GL-CAL
  - lob:Cross-Application Components
---
# I_FISCALYEAR

**Fiscalyear**

| Property | Value |
|---|---|
| App Component | `CA-GTF-GL-CAL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `FiscalYearVariant` | `P_FiscalYear.FiscalYearVariant` |
| key `FiscalYear` | `P_FiscalYear.FiscalYear` |
| `FiscalYearStartDate` | `P_FiscalYear.FiscalYearStartDate` |
| `FiscalYearEndDate` | `P_FiscalYear.FiscalYearEndDate` |
| `FiscalYearConsecutiveNumber` | `P_FiscalYear.FiscalYearConsecutiveNumber` |
| `NextFiscalYear` | `cast( P_FiscalYear.NextFiscalYear as fins_next_fiscalyear_no_conv preserving type )` |
| `NextFiscalYearStartDate` | `cast( P_FiscalYear.NextFiscalYearStartDate as fins_next_fyear_startdate preserving type )` |
| `NextFiscalYearEndDate` | `cast( P_FiscalYear.NextFiscalYearEndDate as fins_next_fyear_enddate preserving type )` |

## Source Code

```abap
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Fiscal Year with Next Fiscal Year'
@VDM.viewType: #BASIC

@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'FiscalYear'
@Analytics.technicalName: 'IFIFISCALYEAR'
//@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@Analytics: { dataCategory: #DIMENSION }

@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]

define view entity I_FiscalYear as select from P_FiscalYear 
  
{

@ObjectModel.foreignKey.association: '_FiscalYearVariant'      
key P_FiscalYear.FiscalYearVariant,

key P_FiscalYear.FiscalYear,

    P_FiscalYear.FiscalYearStartDate,
    P_FiscalYear.FiscalYearEndDate,
    P_FiscalYear.FiscalYearConsecutiveNumber,    
    cast( P_FiscalYear.NextFiscalYear as fins_next_fiscalyear_no_conv preserving type )       as NextFiscalYear,
    cast( P_FiscalYear.NextFiscalYearStartDate as fins_next_fyear_startdate preserving type ) as NextFiscalYearStartDate,
    cast( P_FiscalYear.NextFiscalYearEndDate as fins_next_fyear_enddate preserving type )     as NextFiscalYearEndDate,
    
    P_FiscalYear._FiscalYearVariant
    
}
```
