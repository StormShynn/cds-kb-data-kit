---
name: I_GLACCOUNTINCOMPANYCODESTDVH
description: "GL AccountINCompany CodeSTDVH"
app_component: FI-GL-GL-N-2CL
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
  - company-code
  - gl-account
  - component:FI-GL-GL-N-2CL
  - lob:Finance
  - bo:CompanyCode
---
# I_GLACCOUNTINCOMPANYCODESTDVH

**GL AccountINCompany CodeSTDVH**

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
| `_Text` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |

## Source Code

```abap
//GENERATED:001:GlBfhyFV7jUzaDT}MP9DVm
@AbapCatalog.sqlViewName: 'IFIGLAICC__VH'
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
@EndUserText.label: 'General Ledger Account in Company Code'
define view I_GLAccountInCompanyCodeStdVH as select from I_GLAccountInCompanyCode {
  @ObjectModel.text.association: '_Text'
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #HIGH
  key GLAccount,
  @ObjectModel.foreignKey.association: '_CompanyCode'
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #HIGH  
  key CompanyCode,

  _Text,

  @Consumption.hidden: true
  _CompanyCode
}
```
