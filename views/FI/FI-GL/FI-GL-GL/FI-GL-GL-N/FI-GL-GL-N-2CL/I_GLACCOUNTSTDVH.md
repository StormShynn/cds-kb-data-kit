---
name: I_GLACCOUNTSTDVH
description: "GL AccountSTDVH"
app_component: FI-GL-GL-N-2CL
software_component: SAPSCORE
release_state: released
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
  - component:FI-GL-GL-N-2CL
  - lob:Finance
---
# I_GLACCOUNTSTDVH

**GL AccountSTDVH**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-N-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GLAccount` | ✓ | |  |  |  |  |
| `CompanyCode` | ✓ | |  |  |  |  |
| `GLAccountExternal` |  | |  | `cast( GLAccountExternal as fac_sakan )` |  |  |
| `AlternativeGLAccount` |  | |  |  |  |  |
| `ChartOfAccounts` |  | |  |  |  |  |
| `GLAccountGroup` |  | |  |  |  |  |
| `GLAccountType` |  | |  |  |  |  |
| `ReconciliationAccountType` |  | |  |  |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |

## Source Code

```abap
//GENERATED:001:GlBfhyFV7jUzaDT}MP9DVm
@AbapCatalog.sqlViewName: 'IFIGLA__VH'
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'GLAccount'

@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C

@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_Text']

@ClientHandling.algorithm: #SESSION_VARIABLE

@Search.searchable: true
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE,#SEARCHABLE_ENTITY,#VALUE_HELP_PROVIDER]
@EndUserText.label: 'General Ledger Account'
//important comments:
//Application Manage GL Account Master Data only shows SKA1-SAKAN(GLAccountExternal) in the UI instead of SKA1-SAKNR(GLAccount) since 2017 year.
//So the value help adds GLAccountExternal
define view I_GLAccountStdVH as select from I_GLAccount 

  association [0..1] to I_CompanyCode                as _CompanyCode             on  $projection.CompanyCode = _CompanyCode.CompanyCode
{
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.9
  @Search.ranking: #HIGH
  @ObjectModel.text.association: '_Text'
  //@Consumption.hidden: true
  key GLAccount,
  @ObjectModel.foreignKey.association: '_CompanyCode'
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #HIGH    
  key CompanyCode,

  @Search.fuzzinessThreshold: 0.9
  cast( GLAccountExternal as fac_sakan ) as GLAccountExternal,
  AlternativeGLAccount,

  _Text,
  //@Consumption.hidden: true
  ChartOfAccounts,
  GLAccountGroup,
  GLAccountType,
  ReconciliationAccountType,

  @Consumption.hidden: true
  _CompanyCode
}
```
