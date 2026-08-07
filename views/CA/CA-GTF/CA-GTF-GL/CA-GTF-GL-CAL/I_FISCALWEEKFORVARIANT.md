---
name: I_FISCALWEEKFORVARIANT
description: Fiscalweekforvariant
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
# I_FISCALWEEKFORVARIANT

**Fiscalweekforvariant**

| Property | Value |
|---|---|
| App Component | `CA-GTF-GL-CAL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `FiscalYearVariant` | ✓ | |  |  |
| `FiscalYear` | ✓ | |  |  |
| `FiscalWeek` | ✓ | |  |  |
| `FiscalYearStartDate` |  | |  |  |
| `FiscalYearEndDate` |  | |  |  |
| `FiscalYearWeek` |  | |  |  |
| `FiscalWeekStartDate` |  | |  |  |
| `FiscalWeekEndDate` |  | |  |  |
| `FiscalWeekConsecutiveNumber` |  | |  |  |
| `NextFiscalYearWeek` |  | |  |  |
| `NextFiscalWeek` |  | |  |  |
| `NextFiscalWeekStartDate` |  | |  |  |
| `NextFiscalWeekEndDate` |  | |  |  |
| `NextFsclWeekConsecutiveNmbr` |  | |  |  |
| `_FiscalYear` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FiscalYear` | `I_FiscalYear` | [0..1] |

## Source Code

```abap
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Fiscal Week with Next Fiscal Week'
@VDM.viewType: #BASIC

@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'FiscalWeek'
@Analytics.technicalName: 'IFIFISCWEEK4VAR'
@Analytics: { dataCategory: #DIMENSION }

@Analytics.internalName: #LOCAL

@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]

define view entity I_FiscalWeekForVariant as select from P_FiscalYearWeek 

association [0..1] to I_FiscalYear      as _FiscalYear        on  $projection.FiscalYearVariant             = _FiscalYear.FiscalYearVariant
                                                              and $projection.FiscalYear                    = _FiscalYear.FiscalYear
{
  
@ObjectModel.foreignKey.association: '_FiscalYearVariant'      
key P_FiscalYearWeek.FiscalYearVariant,

@ObjectModel.foreignKey.association: '_FiscalYear'      
key P_FiscalYearWeek.FiscalYear,

key P_FiscalYearWeek.FiscalWeek, 

    P_FiscalYearWeek.FiscalYearStartDate,
    P_FiscalYearWeek.FiscalYearEndDate,
        
    P_FiscalYearWeek.FiscalYearWeek, 
    P_FiscalYearWeek.FiscalWeekStartDate,
    P_FiscalYearWeek.FiscalWeekEndDate,

    P_FiscalYearWeek.FiscalWeekConsecutiveNumber,
    
    P_FiscalYearWeek.NextFiscalYearWeek,
    P_FiscalYearWeek.NextFiscalWeek,
    P_FiscalYearWeek.NextFiscalWeekStartDate,
    P_FiscalYearWeek.NextFiscalWeekEndDate,
    
    P_FiscalYearWeek.NextFsclWeekConsecutiveNmbr,

    P_FiscalYearWeek._FiscalYearVariant,
    _FiscalYear
    
}
```
