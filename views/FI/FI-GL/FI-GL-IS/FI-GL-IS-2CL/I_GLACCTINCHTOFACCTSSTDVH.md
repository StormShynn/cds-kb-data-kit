---
name: I_GLACCTINCHTOFACCTSSTDVH
description: Glacctinchtofacctsstdvh
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - value-help
  - standard-value-help
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_GLACCTINCHTOFACCTSSTDVH

**Glacctinchtofacctsstdvh**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChartOfAccounts` | ✓ | |  |  |  |  |
| `GLAccount` | ✓ | |  |  |  |  |
| `GLAccountExternal` |  | |  | `cast( GLAccountExternal as fac_sakan )` |  |  |
| `_Text` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |

## Source Code

```abap
//GENERATED:001:GlBfhyFV7jUzaDT}MP9DVm
@AbapCatalog.sqlViewName: 'IFIGLAICOA__VH'
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'GLAccount'

@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B

@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_Text']

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@Consumption.ranked: true
@EndUserText.label: 'G/L Account In Chart Of Accounts'
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE,#SEARCHABLE_ENTITY,#VALUE_HELP_PROVIDER]
//important comments:
//Application Manage GL Account Master Data only shows SKA1-SAKAN(GLAccountExternal) in the UI instead of SKA1-SAKNR(GLAccount) since 2017 year.
//So the value help adds GLAccountExternal
define view I_GLAcctInChtOfAcctsStdVH as select from I_GLAccountInChartOfAccounts {
  @ObjectModel.foreignKey.association: '_ChartOfAccounts'
  key ChartOfAccounts,
  @ObjectModel.text.association: '_Text'
  //@Consumption.hidden: true
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #HIGH
  key GLAccount,

  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #HIGH
  cast( GLAccountExternal as fac_sakan ) as GLAccountExternal,
  _Text,

  @Consumption.hidden: true
  _ChartOfAccounts
}
```
