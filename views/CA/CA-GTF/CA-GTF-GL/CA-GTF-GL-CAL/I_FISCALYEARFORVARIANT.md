---
name: I_FISCALYEARFORVARIANT
description: Fiscalyearforvariant
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
# I_FISCALYEARFORVARIANT

**Fiscalyearforvariant**

| Property | Value |
|---|---|
| App Component | `CA-GTF-GL-CAL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `FiscalYearVariant` | `P_FiscalYearPeriod.fiscal_year_variant` |
| key `FiscalYear` | `P_FiscalYearPeriod.fiscal_year` |
| `FiscalYearStartDate` | `P_FiscalYearPeriod.fiscal_year_start_date` |
| `FiscalYearEndDate` | `P_FiscalYearPeriod.fiscal_year_end_date` |
| `_FiscalYearVariant` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FiscalYearVariant` | `I_FiscalYearVariant` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Fiscal Year For Fiscal Year Variant'

@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@Analytics.dataExtraction.enabled:true

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'FiscalYear'
@Analytics.technicalName: 'IFIFYEARFYV'

@Analytics: { dataCategory: #DIMENSION }

@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]

define view entity I_FiscalYearForVariant as select distinct from P_FiscalYearPeriod 

association [0..1] to I_FiscalYearVariant    as _FiscalYearVariant     on  $projection.FiscalYearVariant     = _FiscalYearVariant.FiscalYearVariant
{
@ObjectModel.foreignKey.association: '_FiscalYearVariant' 
//@Semantics.fiscal.yearVariant: true   
key P_FiscalYearPeriod.fiscal_year_variant as FiscalYearVariant,
key P_FiscalYearPeriod.fiscal_year as FiscalYear,

    P_FiscalYearPeriod.fiscal_year_start_date as FiscalYearStartDate,
    P_FiscalYearPeriod.fiscal_year_end_date   as FiscalYearEndDate,
    
    _FiscalYearVariant
    
}
```
