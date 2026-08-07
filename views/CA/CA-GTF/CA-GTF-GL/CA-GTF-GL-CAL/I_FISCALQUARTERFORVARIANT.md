---
name: I_FISCALQUARTERFORVARIANT
description: Fiscalquarterforvariant
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
# I_FISCALQUARTERFORVARIANT

**Fiscalquarterforvariant**

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
| `FiscalQuarter` | ✓ | |  |  |
| `FiscalYearStartDate` |  | |  |  |
| `FiscalYearEndDate` |  | |  |  |
| `FiscalQuarterStartDate` |  | |  |  |
| `FiscalQuarterEndDate` |  | |  |  |
| `FiscalYearQuarter` |  | |  |  |
| `FiscalQuarterConsecutiveNumber` |  | |  |  |
| `NextFiscalQuarter` |  | |  | `cast( P_FiscalYearQuarter.NextFiscalQuarter as fins_next_fiscalquarter preserving type )` |
| `NextFiscalYear` |  | |  | `cast( cast( substring(P_FiscalYearQuarter.NextFiscalYearQuarter,1,4) as abap.numc(4) ) as fins_next_fiscalyear_no_conv preserving type )` |
| `NextFiscalYearQuarter` |  | |  | `cast( P_FiscalYearQuarter.NextFiscalYearQuarter as fins_next_fyearquarter preserving type )` |
| `NextFiscalQuarterStartDate` |  | |  | `cast( P_FiscalYearQuarter.NextFiscalQuarterStartDate as fins_next_fquarter_startdate preserving type )` |
| `NextFiscalQuarterEndDate` |  | |  | `cast( P_FiscalYearQuarter.NextFiscalQuarterEndDate as fins_next_fquarter_enddate preserving type )` |
| `NextFsclQuarterConsecutiveNmbr` |  | |  | `cast( P_FiscalYearQuarter.NextFsclQuarterConsecutiveNmbr as fins_next_fyearquarter_i preserving type )` |
| `_FiscalYear` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FiscalYear` | `I_FiscalYear` | [0..1] |

## Source Code

```abap
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Fiscal Quarter with Next Fiscal Quarter'
@VDM.viewType: #BASIC

@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'FiscalQuarter'
@Analytics.technicalName: 'IFIFISCQU4VAR'
//@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@Analytics: { dataCategory: #DIMENSION }

@Analytics.internalName: #LOCAL

@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]

define view entity I_FiscalQuarterForVariant as select from P_FiscalYearQuarter 

association [0..1] to I_FiscalYear as _FiscalYear on  $projection.FiscalYearVariant     = _FiscalYear.FiscalYearVariant
                                                  and $projection.FiscalYear            = _FiscalYear.FiscalYear
{
  
@ObjectModel.foreignKey.association: '_FiscalYearVariant'      
key P_FiscalYearQuarter.FiscalYearVariant,

@ObjectModel.foreignKey.association: '_FiscalYear'      
key P_FiscalYearQuarter.FiscalYear,

key P_FiscalYearQuarter.FiscalQuarter, 

    P_FiscalYearQuarter.FiscalYearStartDate,
    P_FiscalYearQuarter.FiscalYearEndDate,
        
    P_FiscalYearQuarter.FiscalQuarterStartDate,
    P_FiscalYearQuarter.FiscalQuarterEndDate,

    P_FiscalYearQuarter.FiscalYearQuarter, 

    P_FiscalYearQuarter.FiscalQuarterConsecutiveNumber,
      
    cast( P_FiscalYearQuarter.NextFiscalQuarter as fins_next_fiscalquarter preserving type )                                                  as NextFiscalQuarter,
    cast( cast( substring(P_FiscalYearQuarter.NextFiscalYearQuarter,1,4) as abap.numc(4) ) as fins_next_fiscalyear_no_conv preserving type )  as NextFiscalYear,

    cast( P_FiscalYearQuarter.NextFiscalYearQuarter as fins_next_fyearquarter preserving type )                                               as NextFiscalYearQuarter,
    cast( P_FiscalYearQuarter.NextFiscalQuarterStartDate as fins_next_fquarter_startdate preserving type )                                    as NextFiscalQuarterStartDate,
    cast( P_FiscalYearQuarter.NextFiscalQuarterEndDate as fins_next_fquarter_enddate preserving type )                                        as NextFiscalQuarterEndDate,

    cast( P_FiscalYearQuarter.NextFsclQuarterConsecutiveNmbr as fins_next_fyearquarter_i preserving type )                                    as NextFsclQuarterConsecutiveNmbr,

    P_FiscalYearQuarter._FiscalYearVariant,
    _FiscalYear
    
}
```
