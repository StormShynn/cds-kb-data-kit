---
name: I_FISCALYEARFORFINMGMTAREA
description: Fiscalyearforfinmgmtarea
app_component: PSM
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PSM
  - interface-view
  - component:PSM
  - lob:Other
---
# I_FISCALYEARFORFINMGMTAREA

**Fiscalyearforfinmgmtarea**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `FinancialManagementArea` | `I_FinancialManagementArea.FinancialManagementArea` |
| key `FinMgmtAreaFiscalYear` | `cast( I_FiscalYearForVariant.FiscalYear as fmis_fma_fiscal_year preserving type )` |
| `FinMgmtAreaFiscalYearVariant` | `cast( I_FiscalYearForVariant.FiscalYearVariant as fmis_fma_fiscal_year_variant preserving type )` |
| `FinMgmtAreaFiscalYearStartDate` | `cast( I_FiscalYearForVariant.FiscalYearStartDate as fins_next_fyear_startdate preserving type )` |
| `FinMgmtAreaFiscalYearEndDate` | `cast( I_FiscalYearForVariant.FiscalYearEndDate as fins_next_fyear_enddate preserving type )` |
| `CommitmentItemFiscalYear` | `cast( ( case _FinMgmtArea.CommitmentItemIsYearDependent when 'X' then I_FiscalYearForVariant.FiscalYear else '0000' end ) as fmis_commititem_year preserving type )` |
| `_FinMgmtArea` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FinMgmtArea` | `I_FinancialManagementArea` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Fiscal Year for Fin Management Area'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ObjectModel:  {
  representativeKey: 'FinMgmtAreaFiscalYear',
  usageType:     {
      sizeCategory: #S,
      dataClass:  #MASTER,
      serviceQuality: #B
    },
  supportedCapabilities: [#ANALYTICAL_PROVIDER, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE,#EXTRACTION_DATA_SOURCE]
  }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'IFY4FMA'
@ObjectModel.sapObjectNodeType.name: 'FiscalYear'

define view I_FiscalYearForFinMgmtArea
  as select from I_FiscalYearForVariant
    inner join   I_FinancialManagementArea on I_FiscalYearForVariant.FiscalYearVariant = I_FinancialManagementArea.FinMgmtAreaFiscalYearVariant

  association [1..1] to I_FinancialManagementArea as _FinMgmtArea on $projection.FinancialManagementArea = _FinMgmtArea.FinancialManagementArea
{

      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_FinMgmtAreaStdVH',
                     element: 'FinancialManagementArea' }
        }]
      @ObjectModel.foreignKey.association: '_FinMgmtArea'
  key I_FinancialManagementArea.FinancialManagementArea                                                as FinancialManagementArea,
  key cast( I_FiscalYearForVariant.FiscalYear as fmis_fma_fiscal_year preserving type )                as FinMgmtAreaFiscalYear,
      cast( I_FiscalYearForVariant.FiscalYearVariant as fmis_fma_fiscal_year_variant preserving type ) as FinMgmtAreaFiscalYearVariant,

      cast( I_FiscalYearForVariant.FiscalYearStartDate as fins_next_fyear_startdate preserving type )  as FinMgmtAreaFiscalYearStartDate,
      cast( I_FiscalYearForVariant.FiscalYearEndDate as fins_next_fyear_enddate preserving type )      as FinMgmtAreaFiscalYearEndDate,

      cast( ( case _FinMgmtArea.CommitmentItemIsYearDependent
        when 'X' then I_FiscalYearForVariant.FiscalYear
        else '0000'
      end ) as fmis_commititem_year preserving type )                                                  as CommitmentItemFiscalYear,

      _FinMgmtArea

}
```
