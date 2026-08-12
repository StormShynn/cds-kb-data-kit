---
name: I_FSCLYRFORFINMGMTAREASTDVH
description: "Fsclyrforfinmgmtareastdvh"
app_component: PSM
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialManagementArea` | ✓ | |  |  |  |  |
| `FinMgmtAreaFiscalYear` | ✓ | |  |  |  |  |
| `FinMgmtAreaFiscalYearVariant` |  | |  |  |  |  |
| `FinMgmtAreaFiscalYearStartDate` |  | |  |  |  |  |
| `FinMgmtAreaFiscalYearEndDate` |  | |  |  |  |  |
| `CommitmentItemFiscalYear` |  | |  |  |  |  |
| `_FinMgmtArea` | | ✓ | | | | |

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
