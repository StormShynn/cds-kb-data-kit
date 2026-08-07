---
name: I_FSCLYRFORFINMGMTAREASTDVH
description: Fsclyrforfinmgmtareastdvh
app_component: PSM
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PSM
  - interface-view
  - value-help
  - standard-value-help
  - component:PSM
  - lob:Other
---
# I_FSCLYRFORFINMGMTAREASTDVH

**Fsclyrforfinmgmtareastdvh**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `FinancialManagementArea` | ✓ | |  |  |
| `FinMgmtAreaFiscalYear` | ✓ | |  |  |
| `FinMgmtAreaFiscalYearVariant` |  | |  |  |
| `FinMgmtAreaFiscalYearStartDate` |  | |  |  |
| `FinMgmtAreaFiscalYearEndDate` |  | |  |  |
| `CommitmentItemFiscalYear` |  | |  |  |
| `_FinMgmtArea` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Fiscal Year For FM Area'
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #CHECK

@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #B

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'FinMgmtAreaFiscalYear'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #VALUE_HELP_PROVIDER]
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'IFYFMA__VH'

@AbapCatalog.compiler.compareFilter: true

@Metadata.ignorePropagatedAnnotations: true

define view I_FsclYrForFinMgmtAreaStdVH
  as select from I_FiscalYearForFinMgmtArea
{

  @Consumption.valueHelpDefinition: [ 
    { entity:  { name:    'I_FinMgmtAreaStdVH',
                 element: 'FinancialManagementArea' } }]
  @ObjectModel.foreignKey.association: '_FinMgmtArea'
  key FinancialManagementArea,  
  key FinMgmtAreaFiscalYear,
      FinMgmtAreaFiscalYearVariant,
      FinMgmtAreaFiscalYearStartDate,
      FinMgmtAreaFiscalYearEndDate,
      CommitmentItemFiscalYear,

      _FinMgmtArea
}
```
