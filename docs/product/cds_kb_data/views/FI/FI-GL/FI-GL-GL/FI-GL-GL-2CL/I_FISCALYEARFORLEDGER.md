---
name: I_FISCALYEARFORLEDGER
description: "Fiscalyearforledger"
app_component: FI-GL-GL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_FISCALYEARFORLEDGER

**Fiscalyearforledger**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `cast( finsc_ld_cmp.bukrs as fis_bukrs preserving type )` |  |  |
| `Ledger` | ✓ | |  | `cast( finsc_ld_cmp.rldnr as fis_rldnr preserving type )` |  |  |
| `FiscalYear` | ✓ | |  |  |  |  |
| `FiscalYearVariant` |  | |  |  |  |  |
| `FiscalYearStartDate` |  | |  |  |  |  |
| `FiscalYearEndDate` |  | |  |  |  |  |
| `_FiscalYearVariant` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FiscalYearVariant` | `I_FiscalYearVariant` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_Ledger` | `I_Ledger` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Fiscal Year for Ledger'

@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.representativeKey: 'FiscalYear'
@Analytics: { dataCategory: #DIMENSION }
@Analytics.technicalName: 'IFIFYEAR4L'

@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SQL_DATA_SOURCE]
                                     
define view entity I_FiscalYearForLedger as select distinct from I_FiscalYearPeriod as I_FiscalYearPeriod inner join finsc_ld_cmp as finsc_ld_cmp
                                                            on   I_FiscalYearPeriod.FiscalYearVariant = finsc_ld_cmp.periv

association [0..1] to I_FiscalYearVariant        as _FiscalYearVariant on  $projection.FiscalYearVariant = _FiscalYearVariant.FiscalYearVariant
association [0..1] to I_CompanyCode              as _CompanyCode on  $projection.CompanyCode       = _CompanyCode.CompanyCode
association [0..1] to I_Ledger                   as _Ledger      on  $projection.Ledger            = _Ledger.Ledger

{

@Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
@ObjectModel.foreignKey.association: '_CompanyCode'      
key cast( finsc_ld_cmp.bukrs as fis_bukrs preserving type ) as CompanyCode, 
@Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_LedgerStdVH',
                     element: 'Ledger' }
        }]
@ObjectModel.foreignKey.association: '_Ledger'      
key cast( finsc_ld_cmp.rldnr as fis_rldnr preserving type ) as Ledger,
key I_FiscalYearPeriod.FiscalYear,  
@ObjectModel.foreignKey.association: '_FiscalYearVariant'
//@Semantics.fiscal.yearVariant: true     
I_FiscalYearPeriod.FiscalYearVariant,
I_FiscalYearPeriod.FiscalYearStartDate,
I_FiscalYearPeriod.FiscalYearEndDate,

_FiscalYearVariant,
_CompanyCode,
_Ledger

}
```
