---
name: I_GLACCOUNTGROUPSTDVH
description: "GL AccountGROUPSTDVH"
app_component: FI-GL-GL-A-2CL
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
  - value-help
  - standard-value-help
  - gl-account
  - component:FI-GL-GL-A-2CL
  - lob:Finance
---
# I_GLACCOUNTGROUPSTDVH

**GL AccountGROUPSTDVH**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChartOfAccounts` | ✓ | |  |  |  |  |
| `GLAccountGroup` | ✓ | |  |  |  |  |
| `_GLAccountGroupText` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |

## Source Code

```abap
//GENERATED:001:GlBfhyFV7jUzaDT}MP9DVm
@AbapCatalog.sqlViewName: 'IFIGLAG__VH'
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'GLAccountGroup'

@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A

@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_GLAccountGroupText']

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.resultSet.sizeCategory: #XS
@Search.searchable: true
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE,#SEARCHABLE_ENTITY,#VALUE_HELP_PROVIDER]
@EndUserText.label: 'General Ledger Account Group'
define view I_GLAccountGroupStdVH as select from I_GLAccountGroup {
//  @ObjectModel.text.association: '_Glaccountgrouptext'
  @ObjectModel.foreignKey.association: '_ChartOfAccounts'
  key ChartOfAccounts,
  @ObjectModel.text.association: '_GLAccountGroupText'
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #HIGH
  key GLAccountGroup,

  _GLAccountGroupText,

  @Consumption.hidden: true
  _ChartOfAccounts
}
```
